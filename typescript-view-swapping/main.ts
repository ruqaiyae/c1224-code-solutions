const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

if (!$tabContainer) throw new Error('$container query failed.');
if (!$tabs) throw new Error('$tabs query failed.');
if (!$view) throw new Error('$view query failed.');

$tabContainer.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLDivElement;
  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < $tabs.length; i++) {
      if ($eventTarget === $tabs[i]) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }

    const $dataView = $eventTarget.dataset.view;
    for (let i = 0; i < $view.length; i++) {
      if ($view[i].getAttribute('data-view') !== $dataView) {
        $view[i].className = 'view hidden';
      } else {
        $view[i].classList.remove('hidden');
      }
    }
  }
});
