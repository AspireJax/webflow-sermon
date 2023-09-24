import { runFillIn } from '$utils/fill-in';
import { runNotesEditor } from '$utils/notes-editor';

window.Webflow = window.Webflow || [];
window.Webflow.push(() => {
  runFillIn();
  runNotesEditor();
});
