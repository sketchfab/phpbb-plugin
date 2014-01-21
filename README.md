Sketchfab phpBB Plugin
=========================

The Sketchfab pbpBB plugin adds a Sketchfab button in a phpBB forum text editor.
This button allows to embed Sketchfab models right in your posts.

Release date: Jun 6, 2013.
Latest update: Jun 6, 2013.
phpBB version: 3.0+
Author: Pierre-Antoine Passet (pa@sketchfab.com), Sketchfab (support@sketchfab.com)

Warning
-------

Some files of the following installation might be overwritten if you update your version of phpBB. Be sure to copy the files back after updating.

Installation
------------

1. **Enable [sketchfab] bbCode support**
    1. In the admin panel, go to *Posting › BBCodes › Add a new BBCode*
    2. Fill in the form with the following
        * BBcode Usage:
          
          ```
          [sketchfab]{IDENTIFIER}[/sketchfab]
          ```
        * HTML replacement:
          
          ```html
          <iframe frameborder="0" width="640" height="480" webkitallowfullscreen="true" mozallowfullscreen="true" src="http://sketchfab.com/embed/{IDENTIFIER}?autostart=0&amp;transparent=0&amp;autospin=0&amp;controls=0&amp;watermark=1"></iframe>
          ```
        * Help line:
          
          ```
          Embed a 3D model in your post: [sketchfab]:Model id[/sketchfab]
          ```
        * Settings / Display on posting page:
          
          ```
          No
          ```
          (unless you want to use the default bbCode button implementation instead of the more user-friendly custom Sketchfab button)
    3. Submit

2. **Copy the required files**
    1. Create a *sketchfab/* folder in the *images/* folder at the root of your phpBB folder
    2. Copy the image *sketchfab.png* from the *src/images/* folder of the plugin to you newly created *sketchfab/* folder

3. **Update your post editor template**
    1. In the admin panel, go to *Styles › Style components › Templates* and edit your installed template
    2. Select *Template file › posting_buttons.html*
    3. At the beginning of the template file, just after: 

       ```html
       <script type="text/javascript" src="{T_SUPER_TEMPLATE_PATH}/editor.js"></script>
       ```

       paste:

       ```html
       <script type="text/javascript">
       // <![CDATA[
           function sketchfabButton() {
               url = prompt('Enter a Sketchfab model URL: \n\n' +
                            'https://sketchfab.com/show/dGUrytaktlDeNudCEGKk31oTJY');
               if (url === null) {
                   return;
               }

               url = url.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
               var regexp = /^(http|https):\/\/sketchfab.com\/(show|models)\/([^/]+)$/;
               if (!regexp.test(url)) {
                   alert('Invalid model URL');
                   return sketchfabButton();
               }
               var modelId = url.substring(url.lastIndexOf('/') + 1);
               insert_text('[sketchfab]' + modelId + '[/sketchfab]\n');
           }
       // ]]>
       </script>
       ```

    4. At the end of the template file, before the final `</div><!-- ENDIF -->`, paste the following code:

       ```html
       <input type="button" class="button2" name="sketchfab" value="3D model" onclick="sketchfabButton()" title="Insert a 3d model from Sketchfab" style="background: url('{PHPBB_ROOT_PATH}images/sketchfab/sketchfab.png') no-repeat 2px 50%, url('{T_THEME_PATH}/images/bg_button.gif'); padding-left: 17px;" />
       ```

    4. Submit
    5. Refresh your template cache: *Style › Templates › Actions › Refresh*

    6. Done!

Contact
-------
Please send your questions or feedback to support@sketchfab.com
