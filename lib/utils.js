var pluginPath = sketch.scriptPath.substring(0, sketch.scriptPath.lastIndexOf('/'))
var okCode = 1000

// Creates an alert using the CocoaScript COSAlertWindow class
function createAlertBase(messageText,informativeText) {
  var alert = [COSAlertWindow new]

  var icon = [[NSImage alloc] initByReferencingFile: pluginPath + '/lib/logo_pointGrid.icns']
  [alert setIcon:icon]

  [alert setMessageText:messageText]
  [alert setInformativeText:informativeText]

  return alert
}

function createArtboard(name,height,width,xPosition,yPosition) {
    var artboard = [[MSArtboardGroup alloc] init]
    artboard = [selectedArtboard copy]

    [doc addLayer:artboard]

    [[artboard frame] setX:xPosition]
    [[artboard frame] setY:yPosition]
    [[artboard frame] setWidth:width]
    [[artboard frame] setHeight:height]

    [artboard setName:name]

    return artboard
}

function createSelect (items) {
	var comboBox = [[NSPopUpButton alloc] initWithFrame:NSMakeRect(0, 0, 300, 25)]
	[comboBox addItemsWithTitles: items]
	[comboBox selectItemAtIndex: 0]
	return comboBox
}

function createTextFieldWithIntValue(value) {
    
    var textfield = [[NSTextField alloc] initWithFrame:NSMakeRect(0, 0, 300, 24)]
    var formatter = [[NSNumberFormatter alloc] init]
    [textfield setFormatter:formatter]

    if (value) {
        [textfield setStringValue:value]
    }

    return textfield
}

function setLayoutSettings(artboard, originalLayout, layoutWidth, numberOfColumns, columnWidth, horizontalOffset) {
    var layout = [[MSLayoutGrid alloc] init]
    layout = [originalLayout copy]

    [layout setTotalWidth: layoutWidth]
    [layout setHorizontalOffset: horizontalOffset]
    [layout setColumnWidth: columnWidth]
    [artboard setLayout:layout]
}

function showDialog(message) {
    var alert = createAlertBase("PointGrid",message)

    [alert runModal]
}