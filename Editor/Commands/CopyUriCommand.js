Type.registerNamespace("Extensions");
 
Extensions.CopyUri = function Extensions$CopyUri() {
    Type.enableInterface(this, "Extensions.CopyUri");
    this.addInterface("Tridion.Cme.Command", ["CopyUri"]);
};
 
Extensions.CopyUri.prototype.isAvailable = function CopyUri$isAvailable(selection) {
    return true;
}
 
Extensions.CopyUri.prototype.isEnabled = function CopyUri$isEnabled(selection) {
    if (selection.getItems().length > 1)
        return false;
    else
        return true;
}
 
Extensions.CopyUri.prototype._execute = function CopyUri$_execute(selection) {
    selectedItem = selection.getItems()[0];
    prompt("Copy the Item ID using Ctrl/Cmd + C:", selection.getItems()[0]);
}