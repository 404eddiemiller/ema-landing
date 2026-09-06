// Shared form submission logic for AuditForm and VerticalLayout
// Handles: honeypot, inline validation, loading state, webhook POST, Plausible tracking, redirect

declare const plausible: ((event: string, options?: { props?: Record<string, string> }) => void) | undefined;

const ERROR_CLASS = 'form-field-error';
const NORMAL_CLASS = 'border-warmgray';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showFieldError(field: HTMLElement, message: string) {
  field.classList.remove(NORMAL_CLASS);
  field.classList.add(ERROR_CLASS);
  field.setAttribute('aria-invalid', 'true');

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
  field.removeAttribute('aria-invalid');
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
    if (!field.value.trim()) {
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

export function initFormSubmit(webhookUrl: string | undefined, preview = true, contactMode?: string) {

  const form = document.getElementById('audit-form') as HTMLFormElement | null;
  const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement | null;
  const errorDiv = document.getElementById('form-error') as HTMLElement | null;

  if (!form || !submitBtn || !errorDiv || form.dataset.initialized) return;
  form.dataset.initialized = 'true';
  submitBtn.disabled = false;

  // Anti-spam: set timestamp on load + JS challenge token
  const loadedField = form.querySelector<HTMLInputElement>('input[name="_loaded"]');
  const jsField = form.querySelector<HTMLInputElement>('input[name="_js"]');
  const loadTime = Date.now();
  if (loadedField) loadedField.value = String(loadTime);
  if (jsField) jsField.value = 'ok';

  const requiredMsg = form.dataset.fieldRequired || 'Ce champ est requis';
  const emailInvalidMsg = form.dataset.emailInvalid || 'Veuillez entrer une adresse email valide';

  // A prepared email must always reflect the currently displayed fields.
  const hidePreparedEmail = () => document.getElementById('form-email')?.classList.add('hidden');
  form.addEventListener('input', hidePreparedEmail);
  form.addEventListener('change', hidePreparedEmail);

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

    // Anti-spam checks
    const honey = form.querySelector<HTMLInputElement>('input[name="_honey"]');
    if (honey && honey.value) return;

    // JS challenge: bots without JS won't have this set
    if (!jsField || jsField.value !== 'ok') return;

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
    if (email && !EMAIL_REGEX.test(email.value.trim())) {
      showFieldError(email, emailInvalidMsg);
      email.focus();
      email.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const site = form.querySelector<HTMLInputElement>('#site');
    if (site?.value && (!site.validity.valid || !/^https?:\/\//i.test(site.value))) {
      site.reportValidity(); site.focus();
      showFieldError(site, 'URL : https://example.com'); return;
    }
    if (site) clearFieldError(site);
    if (preview) {
      const notice = document.getElementById('form-preview');
      if (notice) { notice.textContent = form.dataset.previewMessage || 'Preview: no data sent.'; notice.classList.remove('hidden'); notice.focus(); }
      return;
    }
    if (contactMode === 'email') {
      const link = document.getElementById('form-email-link') as HTMLAnchorElement | null;
      const notice = document.getElementById('form-email');
      if (!link || !notice) return;
      const lines = ['etablissement', 'type', 'ville', 'email', 'besoin', 'site', 'message'].flatMap(id => {
        const field = form.querySelector<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(`#${id}`);
        if (!field?.value.trim()) return [];
        const label = form.querySelector(`label[for="${id}"]`)?.textContent?.replace(/\s*\*\s*$/, '').trim() || id;
        const value = field instanceof HTMLSelectElement ? field.selectedOptions[0]?.textContent?.trim() : field.value.trim();
        return [`${label} : ${value}`];
      });
      const subject = `${form.dataset.emailSubject || 'Eddie Miller Agency'} — ${etablissement!.value.trim()}`;
      link.href = `mailto:contact@eddiemiller.agency?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n\n'))}`;
      errorDiv.classList.add('hidden');
      notice.classList.remove('hidden');
      notice.focus();
      return;
    }
    if (!webhookUrl?.startsWith('https://')) {
      errorDiv.textContent = form.dataset.unavailable || 'Please email contact@eddiemiller.agency.';
      errorDiv.classList.remove('hidden'); errorDiv.focus(); return;
    }
    if (submitBtn.disabled) return;
    // Collect form data
    const data = {
      etablissement: etablissement!.value.trim(),
      type: type!.value,
      ville: ville!.value.trim(),
      email: email!.value.trim(),
      besoin: form.querySelector<HTMLSelectElement>('#besoin')?.value || '',
      site: site?.value.trim() || '',
      message: form.querySelector<HTMLTextAreaElement>('#message')?.value.trim() || '',
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
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(15000)
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
