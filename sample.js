var urlapi = new ej.data.DataManager({
  url: 'https://ej2services.syncfusion.com/js/development/api/UrlDataSource',
  adaptor: new ej.data.UrlAdaptor()
});
var grid = new ej.grids.Grid({
  dataSource: hierarchyOrderdata,
rowRenderingMode: 'Vertical',
enableAdaptiveUI: true,
allowPaging: true,
allowSorting: true,
// height: 200,
allowFiltering: true,
filterSettings: { type: 'Excel' },
pageSettings: { pageSize: 90, pageSizes: true },
allowGrouping: true,
height: '100%',
load: () => {
  if (!ej.base.Browser.isDevice) {
      grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
  }
},
editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
toolbar: ['Search'],
columns: [
  {
      field: 'OrderID', headerText: 'Order ID', width: 180, isPrimaryKey: true,
      validationRules: { required: true, number: true }
  },
  { field: 'Freight', width: 180, format: 'C2', editType: 'numericedit', validationRules: { required: true, number: true } },
  { field: 'ShipName', headerText: 'Name', width: 180, validationRules: { required: true } },
  { field: 'ShipCity', headerText: 'Ship City', width: 180, validationRules: { required: true } },
]
});
if (ej.base.Browser.isDevice) {
grid.appendTo('#adaptivedevice');
(document.getElementsByClassName('e-mobile-layout')[0]).style.display = 'none';
} else {
// grid.appendTo('#Grid');
grid.appendTo('#adaptivebrowser');

}

// enable/disable vertical row direction
let directionChange = new ej.buttons.CheckBox({
change: (e) => {
if (e.checked) {
  grid.rowRenderingMode = 'Horizontal';
} else {
  grid.rowRenderingMode = 'Vertical';
}
}
});
directionChange.appendTo('#fullscreen');