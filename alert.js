let viewWidth = window.innerWidth;

const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div class="alert-ikon align-items-center"><img height="32px" width="32px" src="images/alert-triangle.png">${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
  ].join('');

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert(
      '<div><p>Alert! This site is not optimized for display on mobile devices. For best results, orientate your device horizontally and refresh page.</div>',
      'jb-warning'
    );
  });
}

if (viewWidth < 576) {
  appendAlert(
    '<div><p>Alert! This site is not optimized for display on mobile devices. For best results, orientate your device horizontally and refresh page.</div>',
    'jb-warning'
  );
}
