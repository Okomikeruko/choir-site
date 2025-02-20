App.messages = App.cable.subscriptions.create("MessageChannel", {
  connected: function() {
    console.log("Connected to MessageChannel");
  },

  disconnected: function() {
  },

  received: function(data) {
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
