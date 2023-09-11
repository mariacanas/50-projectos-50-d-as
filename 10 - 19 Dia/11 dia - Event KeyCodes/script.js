

const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
    let value = event.key;
    
    insert.innerHTML = `
        <div class="key">
            <small> event.key </small>
            ${event.key === ' ' ? 'Space' : event.key}
        </div>

        <div class="key">
            <small> event.keyCode </small>
            ${event.keyCode}
        </div>

        <div class="key">
            <small> event.code </small>
            ${event.code}
        </div>
    `;
});