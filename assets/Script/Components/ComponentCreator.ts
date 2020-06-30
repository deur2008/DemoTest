const { ccclass } = cc._decorator;

@ccclass
export default class ComponentCreator extends cc.Component {

    public static createNode(root: cc.Node, name: string = "newNode"): cc.Node {
        let node: cc.Node = cc.instantiate(new cc.Node(name));
        root.addChild(node);
        return node;
    }

    public static createLabel(root: cc.Node, name: string = "label", str: string = "", pos: cc.Vec2 = cc.v2(0, 0)): cc.Label {
        let lab: cc.Node = cc.instantiate(new cc.Node(name));
        lab.position = pos;
        lab.addComponent(cc.Label);
        lab.getComponent(cc.Label).string = str;
        root.addChild(lab);
        return lab.getComponent(cc.Label);
    }

    public static createButton(root: cc.Node, name: string = "button", labStr: string = "button", callback?: Function) {
        cc.loader.loadRes("Prefabs/button", (error: Error, prefab) => {
            let buttonNode: cc.Node = cc.instantiate(prefab);
            buttonNode.name = name;
            buttonNode.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = labStr
            root.addChild(buttonNode);
            callback(buttonNode.getComponent(cc.Button));
        });
    }
    public static createEditbox(root: cc.Node, name: string = "button", labStr: string = "button", callback?: Function) {
        cc.loader.loadRes("Prefabs/editbox", (error: Error, prefab) => {
            let editboxNode: cc.Node = cc.instantiate(prefab);
            editboxNode.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = labStr
            editboxNode.name = name;
            root.addChild(editboxNode);
            callback(editboxNode.getComponent(cc.EditBox));
        });
    }
}
