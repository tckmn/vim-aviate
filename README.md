# vim-aviate

Pop out text boxes from your web browser into full-fledged Vim instances. Soar
to new text-editing levels.

## Quickstart

1. Install `client.user.js`. (In Chrome, this is easy; simply drag'n'drop the
   file into `chrome://extensions`.) You only have to do this once.

2. Start the server (run `./server.sh` **from the Aviate directory**
   (important!)). You can then safely exit the terminal you've started it from,
   and it should still be running. You will have to do this every time you
   reboot (or you could just set it to run at startup).

3. Done! Simply press Alt+V in any `<textarea>` to pop it out into Vim. When
   you're finished editing, `:wq` and click the "Done" button to dump the text
   back into the web browser.

Note: If you don't have / want to use the default `x-terminal-emulator`, you
also may have to edit the `cmd.sh` file. For example, if you're using OS X,
change `cmd.sh` to

    oascript -e 'tell application "Terminal" to do script "vim %s"'

Or, for example, if you want to use xterm:

    xterm -e 'vim %s'

etc.
