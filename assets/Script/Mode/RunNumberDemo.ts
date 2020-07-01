import NumberPrecision from "../Plugin/NumberPrecision";

const { ccclass } = cc._decorator;

@ccclass
export default class RunNumberDemo extends cc.Component {
    private lab_number: cc.Label = null;
    private editBox_src: cc.EditBox = null;
    private editBox_dst: cc.EditBox = null;
    private editBox_duration: cc.EditBox = null;
    private toggle_decimal: cc.Toggle = null;
    private btn_runNumber: cc.Button = null;


    start() {
        // this.b
    }

    private runNumber() {
        let src: number = Number(this.editBox_src.string);
        let dst: number = Number(this.editBox_dst.string);
        let duration: number = Number(this.editBox_duration.string);

        let runDecimal: boolean = this.toggle_decimal.isChecked;

        let tic: number = 0.032;
        let count: number = 0;
        let times: number = Math.floor(duration / tic);

        let hasDecimal: boolean = src.toString().includes(".") || dst.toString().includes(".");
        this.lab_number.string = this.editBox_src.string;

        let decimalLength: number = 0;
        if (hasDecimal) {
            if (src.toString().includes(".")) {
                decimalLength = src.toString().split(".")[1].length;
            }
            if (dst.toString().includes(".")) {
                let dstDecimal: number = dst.toString().split(".")[1].length;
                if (dstDecimal > decimalLength) {
                    decimalLength = dstDecimal;
                }
            }
        }

        let _action: cc.FiniteTimeAction[] = [];


        // cc.repeat(
        //     cc.sequence(cc.callFunc(() => {
        count++;
        let percent = count / times;
        let runningNumber: number = src;
        if (runDecimal) {
            runningNumber = Math.round((src + (dst - src) * percent) * 1000) / 1000;
        }
        else {

        }
        //         let targetAmount = (Math.round((src + (dst - src) * percent) * decimalPoint) / decimalPoint).toString();

        //         targetAmount = NumberPrecision.divide(Math.floor(NumberPrecision.times(Number(targetAmount), Game.Inst.DecimalPoint)), Game.Inst.DecimalPoint).toString();
        //         if (targetAmount.includes(".")) {
        //             targetAmount = this.PreventRunDecimal(Number(targetAmount.toString().split(".")[0]), src);
        //         }
        //         this.lab_number.string = prefix + targetAmount;

        //     }), cc.delayTime(tic))
        //     , times),
    }
}
