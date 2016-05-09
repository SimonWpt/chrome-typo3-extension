function save_options() {
    var skipCheck = document.getElementById('skipCheck').checked;
    chrome.storage.sync.set({
        skipCheck: skipCheck
    }, function () {
        var status = document.getElementById('status');
        status.style.display = 'block';
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
            status.style.display = 'none';
        }, 2000);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        skipCheck: true
    }, function (items) {
        document.getElementById('skipCheck').checked = items.skipCheck;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);