import showModal from "discourse/lib/show-modal";
import { confirmAction } from "../lib/new-topic-form-helper";

export default Ember.Component.extend({
  classNames: ["ntf-field-poll", "ntf-field-btn"],

  actions: {
    createPoll() {
      // :D
      const setValue = (val) => {
        this.set("value", val);
      };

      const toolbarEvent = {
        getText() { return ""; },
        addText: setValue
      };

      const modal = showModal("poll-ui-builder");

      modal.setProperties({
        toolbarEvent
      });
    },

    removePoll() {
      const message = I18n.t("new_topic_form.confirm_delete_poll");
      const cb = () => this.set("value", null);

      confirmAction(message, cb);
    }
  }
});
