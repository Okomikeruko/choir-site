import consumer from '../cable'

consumer.subscriptions.create("MessageChannel", {
  connected() {
    console.log("Connected to MessageChannel");
  },

  disconnected() {
  },

  received(data) {
    this.updateUnreadBadge(data.unread_count)

    const tableId = '#messages-datatable';
    const table = $(tableId);
    if (table.length > 0 && $.fn.DataTable.isDataTable(tableId)) {
      const dt = table.DataTable();
      dt.ajax.reload(null, false);
    }
  },

  updateUnreadBadge(count) {
    const badge = document.querySelector("#unread-messages-badge");
    if (badge) {
      badge.textContent = count;
      badge.classList.toggle('d-none', count === 0);
    }
  }
});
