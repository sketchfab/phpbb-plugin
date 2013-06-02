// <![CDATA[
function sketchfabButton() {
    url = prompt('Enter a Sketchfab model URL: \n\n' +
                 'https://sketchfab.com/show/dGUrytaktlDeNudCEGKk31oTJY');
    if (url === null) {
        return;
    }

    url = url.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    var regexp = /^(http|https):\/\/sketchfab.com\/show\/(.+)$/;
    if (!regexp.test(url)) {
        alert('Invalid model URL');
        return sketchfabButton();
    }
    var modelId = url.substring(url.lastIndexOf('/') + 1);
    insert_text('[sketchfab]' + modelId + '[/sketchfab]\n');
}
// ]]>