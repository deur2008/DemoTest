import ComponentCreator from "../Components/ComponentCreator";
const { ccclass } = cc._decorator;

@ccclass
export default class RunNumberDemo extends cc.Component {
    private root: cc.Node = null;
    private lab_number: cc.Label = null;
    private btn_runNumber: cc.Button = null;
    private editBox_Src: cc.EditBox = null;
    private editBox_Dst: cc.EditBox = null;

    public initRunNumberDemo(root: cc.Node) {
        this.root = ComponentCreator.createNode(root, "RunNumberDemo");
        this.lab_number = ComponentCreator.createLabel(this.root, "lab_number", "100.000");
        ComponentCreator.createButton(this.root, "btn", "跑分", (btn: cc.Button) => { this.btn_runNumber = btn; });
    }
}
