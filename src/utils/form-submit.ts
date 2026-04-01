// Shared form submission logic for AuditForm and VerticalLayout
// Handles: honeypot, inline validation, loading state, webhook POST, Plausible tracking, redirect

declare const plausible: ((event: string, options?: { props?: Record<string, string> }) => void) | undefined;

const ERROR_CLASS = 'form-field-error';
const NORMAL_CLASS = 'border-warmgray';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showFieldError(field: HTMLElement, message: string) {
  field.classList.remove(NORMAL_CLASS);
  field.classList.add(ERROR_CLASS);

  // Use pre-existing aria-describedby error element, or create one
  const errorId = field.getAttribute('aria-describedby');
  let errorEl = errorId ? document.getElementById(errorId) : null;

  if (!errorEl) {
    const group = field.closest('.group');
    if (!group) return;
    errorEl = group.querySelector('.field-error') as HTMLElement | null;
    if (!errorEl) {
      errorEl = document.createElement('p');
      errorEl.className = 'field-error text-red-500 text-xs font-sans mt-1';
      errorEl.setAttribute('role', 'alert');
      field.parentNode!.insertBefore(errorEl, field.nextSibling);
    }
  }
  errorEl.textContent = message;
  errorEl.classList.remove('hidden');
}

function clearFieldError(field: HTMLElement) {
  field.classList.remove(ERROR_CLASS);
  field.classList.add(NORMAL_CLASS);

  const errorId = field.getAttribute('aria-describedby');
  const errorEl = errorId ? document.getElementById(errorId) : field.closest('.group')?.querySelector('.field-error');
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.classList.add('hidden');
  }
}

function validateFields(fields: (HTMLInputElement | HTMLSelectElement | null)[], requiredMsg: string): boolean {
  let valid = true;
  let firstInvalid: HTMLElement | null = null;

  for (const field of fields) {
    if (!field) continue;
    if (!field.value) {
      showFieldError(field, requiredMsg);
      if (!firstInvalid) firstInvalid = field;
      valid = false;
    } else {
      clearFieldError(field);
    }
  }

  if (firstInvalid) {
    firstInvalid.focus();
    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return valid;
}

export function initFormSubmit(webhookUrl: string) {
  if (!webhookUrl?.startsWith('https://')) {
    console.error('Invalid webhook URL: must be HTTPS');
    return;
  }

  const form = document.getElementById('audit-form') as HTMLFormElement | null;
  const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement | null;
  const errorDiv = document.getElementById('form-error') as HTMLElement | null;

  if (!form || !submitBtn || !errorDiv) return;

  const requiredMsg = form.dataset.fieldRequired || 'Ce champ est requis';
  const emailInvalidMsg = form.dataset.emailInvalid || 'Veuillez entrer une adresse email valide';

  // Clear inline errors on input
  const requiredFields = form.querySelectorAll<HTMLInputElement | HTMLSelectElement>('[required]');
  requiredFields.forEach(field => {
    const event = field.tagName === 'SELECT' ? 'change' : 'input';
    field.addEventListener(event, () => {
      if (field.value) clearFieldError(field);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot check
    const honey = form.querySelector<HTMLInputElement>('input[name="_honey"]');
    if (honey && honey.value) return;

    // Field references
    const etablissement = form.querySelector<HTMLInputElement>('#etablissement');
    const email = form.querySelector<HTMLInputElement>('#email');
    const type = form.querySelector<HTMLSelectElement>('#type');
    const ville = form.querySelector<HTMLInputElement>('#ville');

    // Inline validation — required fields
    if (!validateFields([etablissement, type, ville, email], requiredMsg)) {
      return;
    }

    // Email format validation
    if (email && !EMAIL_REGEX.test(email.value)) {
      showFieldError(email, emailInvalidMsg);
      email.focus();
      email.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Collect form data
    const data = {
      etablissement: etablissement!.value,
      type: type!.value,
      ville: ville!.value,
      email: email!.value,
      page: form.dataset.pageSlug || window.location.pathname,
      submitted_at: new Date().toISOString()
    };

    // UI: loading state
    const spinner = document.getElementById('submit-spinner');
    const submitText = document.getElementById('submit-text');
    submitBtn.disabled = true;
    spinner?.classList.remove('hidden');
    if (submitText) {
      submitText.textContent = form.dataset.submitting || 'Envoi en cours…';
    } else {
      submitBtn.textContent = form.dataset.submitting || 'Envoi en cours…';
    }
    errorDiv.classList.add('hidden');

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Erreur serveur');

      // Track with Plausible
      if (typeof plausible !== 'undefined') {
        plausible('Form Submit', { props: { page: data.page } });
      }

      // Show inline success feedback before redirect
      spinner?.classList.add('hidden');
      if (submitText) {
        submitText.textContent = '✓ ' + (form.dataset.submitSuccess || 'Demande envoyée !');
      }
      submitBtn.classList.remove('bg-terracotta', 'hover:bg-terracotta-dark');
      submitBtn.classList.add('bg-green-700');

      // Redirect after brief confirmation
      const redirectUrl = form.dataset.redirect || '/merci';
      setTimeout(() => { window.location.href = redirectUrl; }, 1200);
    } catch {
      const errorMsg = form.dataset.errorGeneric || 'Une erreur est survenue. Veuillez réessayer ou nous contacter à contact@eddiemiller.agency.';
      errorDiv.textContent = errorMsg;
      errorDiv.classList.remove('hidden');
      errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
      errorDiv.focus({ preventScroll: true });
      spinner?.classList.add('hidden');

      // Anti double-submission: 3s cooldown before re-enabling
      setTimeout(() => {
        submitBtn.disabled = false;
        if (submitText) {
          submitText.textContent = form.dataset.submitText || 'Demander mon diagnostic gratuit';
        } else {
          submitBtn.textContent = form.dataset.submitText || 'Demander mon diagnostic gratuit';
        }
      }, 3000);
    }
  });
}
