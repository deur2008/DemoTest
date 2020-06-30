const { ccclass, property } = cc._decorator;

export enum BarState {
    Hide,
    Show
}

@ccclass
export default class DemoTest extends cc.Component {
    @property(cc.Animation) private btn_HamburgerAnimation: cc.Animation = null;
    @property(cc.Node) private dark: cc.Node = null;
    @property(cc.Node) private scrollViewBar: cc.Node = null;
    @property(cc.Node) private fixedWindow: cc.Node = null;

    private _barState: BarState = BarState.Hide;
    private _isBarMoving: boolean = false;

    start() {
        this.scrollViewBar.opacity = 0;
        this.fixedWindow.opacity = 255;
    }

    public onScrollViewBarToggle() {
        if (this._isBarMoving) {
            return;
        }

        let _action: cc.FiniteTimeAction[] = [];
        this._isBarMoving = true;
        switch (this._barState) {
            case BarState.Hide:
                _action.push(cc.callFunc(() => { this.scrollViewBar.opacity = 255; }));
                _action.push(cc.callFunc(() => { this.btn_HamburgerAnimation.play("buttonAnimation"); }));
                _action.push(cc.callFunc(() => { this.dark.runAction(cc.fadeTo(0.35, 135)); }));
                _action.push(cc.moveTo(0.35, cc.v2(-540, -25)).easing(cc.easeBackOut()));
                _action.push(cc.delayTime(0.35));
                _action.push(cc.callFunc(() => { this._barState = BarState.Show; }));
                _action.push(cc.callFunc(() => { this._isBarMoving = false; }));
                break;
            case BarState.Show:
                _action.push(cc.callFunc(() => { this.btn_HamburgerAnimation.play("buttonAnimationReverse"); }));
                _action.push(cc.callFunc(() => { this.dark.runAction(cc.fadeTo(0.35, 0)); }));
                _action.push(cc.moveTo(0.35, cc.v2(-780, -25)).easing(cc.easeBackOut()));
                _action.push(cc.delayTime(0.35));
                _action.push(cc.callFunc(() => { this._barState = BarState.Hide; }));
                _action.push(cc.callFunc(() => { this.scrollViewBar.opacity = 0; }));
                _action.push(cc.callFunc(() => { this._isBarMoving = false; }));
                break;
            default:
                break;
        }
        this.scrollViewBar.runAction(cc.sequence(_action));
    }

    public hideScrollViewBar() {
        if (this._barState == BarState.Show) {
            this.onScrollViewBarToggle();
        }
    }
}
