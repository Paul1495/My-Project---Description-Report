//Data Source
export const description_data = [{
    ID: 1,
    Date: "25/02/2023",
    Factory: 'VNA',
    GarmentFactory: 'MOD-C10-18',
    Line: 'MOD-C10',
    Shift: "Ca ngày",
    ProductOrder: '000020141337',
    CopyProductOrder: '000020141337',//Set group
    Style: 'V01CG0061621-J5B_2503',
    SaleOrder: 'A160114569',
    Customer: 'Nike',
    Application: '10',
    Color: 'W18',
    DateOut: '27/12/2022',
    Measurment: '32B',
    QuantityOfOrder: '730',
    Increase: 30,
    Cumulation: 305,
    QuantityOfLack: 455,
    QuantityAsShift: 208,
    QuantityOfMachine: '10,18',
    Note:'',
    User: 'A456789- Trần Thùy L',
    TimeToUse:'28/10/2022 9:30:00 AM',

  }, {
    ID: 2,
    Date: "25/02/2023",
    Factory: 'VNB',
    GarmentFactory: 'MOD-C10-19',
    Line: 'MOD-C11',
    Shift: "Ca đêm",
    ProductOrder: '000020141337',
    CopyProductOrder: '000020141337',//Set group
    Style: 'V01CG0061621-J5B_2503',
    SaleOrder: 'A160114569',
    Customer: 'Nike',
    Application: '10',
    Color: 'W18',
    DateOut: '27/12/2022',
    Measurment: '32C',
    QuantityOfOrder: 597,
    Increase: 30,
    Cumulation: 100,
    QuantityOfLack: 497,
    QuantityAsShift: 97,
    QuantityOfMachine: '12',
    Note:'',
    User: 'A456789- Trần Thùy L',
    TimeToUse:'28/10/2022 9:30:00 AM',

  }, {
    ID: 3,
    Date: "25/02/2023",
    Factory: 'VNB',
    GarmentFactory: 'MOD-C10-18',
    Line: 'MOD-C11',
    Shift: "Ca đêm",
    ProductOrder: '000020141337',
    CopyProductOrder: '000020141337',//Set group
    Style: 'V01CG0061621-J5B_2503',
    SaleOrder: 'A160114569',
    Customer: 'Nike',
    Application: '10',
    Color: 'W18',
    DateOut: '27/12/2022',
    Measurment: '32D',
    QuantityOfOrder: 464,
    Increase: '',
    Cumulation: 0,
    QuantityOfLack: 464,
    QuantityAsShift: '',
    QuantityOfMachine: '',
    Note:'',
    User: 'A456789- Trần Thùy L',
    TimeToUse:'28/10/2022 9:30:00 AM',
  
  },{
    ID: 4,
    Date: "25/02/2023",
    Factory: 'VNB',
    GarmentFactory: 'MOD-C10-18',
    Line: 'MOD-C11',
    Shift: "Ca ngày",
    ProductOrder: '000020141337',
    CopyProductOrder: '000020141337',//Set group
    Style: 'V01CG0061621-J5B_2503',
    SaleOrder: 'A160114569',
    Customer: 'Nike',
    Application: '10',
    Color: 'W18',
    DateOut: '27/12/2022',
    Measurment: '36B',
    QuantityOfOrder: '994',
    Increase: 30,
    Cumulation: 305,
    QuantityOfLack: 455,
    QuantityAsShift: 208,
    QuantityOfMachine: '10,18',
    Note:'',
    User: 'A456789- Trần Thùy L',
    TimeToUse:'28/10/2022 9:30:00 AM',
},{
    ID: 5,
    Date: "25/02/2023",
    Factory: 'VNB',
    GarmentFactory: 'MOD-C10-18',
    Line: 'MOD-C11',
    Shift: "Ca ngày",
    ProductOrder: '000020141456',
    CopyProductOrder: '000020141456',//Set group
    Style: 'V01CG0061621-J5B_2503',
    SaleOrder: 'A160114569',
    Customer: 'Nike',
    Application: '10',
    Color: 'W18',
    DateOut: '27/12/2022',
    Measurment: '36B',
    QuantityOfOrder: '994',
    Increase: 30,
    Cumulation: 305,
    QuantityOfLack: 455,
    QuantityAsShift: 208,
    QuantityOfMachine: '10,18',
    Note:'',
    User: 'A456789- Trần Thanh Ly',
    TimeToUse:'28/10/2022 9:30:00 AM',
},{
        ID: 6,
        Date: "25/02/2023",
        Factory: 'VNB',
        GarmentFactory: 'MOD-C10-18',
        Line: 'MOD-C11',
        Shift: "Ca ngày",
        ProductOrder: '000020141456',
        CopyProductOrder: '000020141456',//Set group
        Style: 'V01CG0061621-J5B_2503',
        SaleOrder: 'A160114569',
        Customer: 'Nike',
        Application: '10',
        Color: 'W18',
        DateOut: '27/12/2022',
        Measurment: '36B',
        QuantityOfOrder: 994,
        Increase: 30,
        Cumulation: 305,
        QuantityOfLack: 455,
        QuantityAsShift: 208,
        QuantityOfMachine: '10,18',
        Note:'',
        User: 'A456789- Nguyễn Tuyên L',
        TimeToUse:'28/10/2022 9:30:00 AM',
}];



//Data Columns
export const columns_data = [
  { 
      dataField: "Date",
      caption: "时间 Thời gian",
      dataType: "date",
      width: 100,
  }, {
      dataField: "Factory",
      caption: "厂别 Nhà máy",
      width: 80,
  }, {
      dataField: "GarmentFactory",
      caption: "车间 Xưởng",
      width: 130,
  }, {
      dataField: "Line",
      caption: "线别 Chuyền",
      width: 200,
  },
  {
      dataField: "Shift",
      caption: "班次 Ca làm việc",
      width: 80,
  },
  {
    dataField: "CopyProductOrder",
    caption: "CopyProductOrder",
    name: "ProductGroup",
    visible: false,
    groupIndex: 0,//Set group Item 
  },
  {
      dataField: "ProductOrder",
      caption: "制单号 Đơn sản xuất",
      width: 130,
  }, {
      dataField: "Style",
      caption: "款号 Mã hàng",
  }, {
    dataField: "SaleOrder",
    caption: "销售单号 SO",
    width: 120,
}, {
    dataField: "Customer",
    caption: "客户 Khách hàng",
    width: 90,
}, {
    dataField: "Application",
    caption: "项目 Hạng mục ",
    dateType: "number",
    width: 100,
}, {
    dataField: "Color",
    caption: "颜色 Màu sắc",
    width: 80,
},
{
    dataField: "DateOut",
    caption: "出货日期 Ngày xuất hàng",
    dataType:"date",
    width: 80,
},
{
    dataField: "Measurment",
    caption: "尺码 Kích cỡ",
    width: 100,
}, {
    dataField: "QuantityOfOrder",
    caption: "订单数量 Số lượng đặt hàng",
    dataType: "number",
    width: 100,
    dataType:"number",
}, {
    dataField: "Increase",
    caption: "补数 Bù liệu ",
    dateType: "number",
    width: 100,
}, {
    dataField: "Cumulation",
    caption: "累计产量 Sản lượng tích lũy ",
    dataType:"number",
    width: 100,
}, {
    dataField: "QuantityOfLack",
    caption: "定型欠数 Định hình thiếu",
    dataType:"number",
    width: 100,
}, {
    dataField: "QuantityAsShift",
    caption: "班次产量 Sản lượng theo ca ",
    dataType:"number",
    width: 100,
}, {
    dataField: "QuantityOfMachine",
    caption: "定型机台号 Số máy định hình",
    width: 100,
}, {
    dataField: "Note",
    caption: "备注 Chú thích",
    width: 100,
}, {
    dataField: "User",
    caption: "操作人员 Người thao tác",
    width: 120,
}, {
    dataField: "TimeToUse",
    caption: "操作时间 Thời gian thao tác",
    dataType:"date",
    width: 90,
}];



//Data Summary
export const summary_data = [
  {
      column: "QuantityOfOrder",
      summaryType: "sum",
      displayFormat: "{0}",
      showInGroupFooter: true,
      alignByColumn: true
  }, {
    column: "Increase",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},
{
  column: "Cumulation",
  summaryType: "sum",
  displayFormat: "{0}",
  showInGroupFooter: true,
  alignByColumn: true
},
{
  column: "QuantityOfLack",
  summaryType: "sum",
  displayFormat: "{0}",
  showInGroupFooter: true,
  alignByColumn: true
},
{
  column: "QuantityAsShift",
  summaryType: "sum",
  displayFormat: "{0}",
  showInGroupFooter: true,
  alignByColumn: true
}];



  