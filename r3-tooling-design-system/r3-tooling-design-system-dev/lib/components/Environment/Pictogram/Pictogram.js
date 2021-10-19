var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import AstronautFishing from '../../../assets/img/pictogram/pictogram--astronaut--fishing.svg';
import AstronautFlight from '../../../assets/img/pictogram/pictogram--astronaut--flight.svg';
import AstronautHello from '../../../assets/img/pictogram/pictogram--astronaut--hello.svg';
import AstronautSittingOnPlanet from '../../../assets/img/pictogram/pictogram--astronaut--sitting_on_planet.svg';
import AstronautWave from '../../../assets/img/pictogram/pictogram--astronaut--wave.svg';
import AstronautWithFlag from '../../../assets/img/pictogram/pictogram--astronaut--with_flag.svg';
import EssentialsAccept from '../../../assets/img/pictogram/pictogram--essentials--accept.svg';
import EssentialsAdd from '../../../assets/img/pictogram/pictogram--essentials--add.svg';
import EssentialsAirplane from '../../../assets/img/pictogram/pictogram--essentials--airplane.svg';
import EssentialsBattery from '../../../assets/img/pictogram/pictogram--essentials--battery.svg';
import EssentialsCalendar from '../../../assets/img/pictogram/pictogram--essentials--calendar.svg';
import EssentialsClock from '../../../assets/img/pictogram/pictogram--essentials--clock.svg';
import EssentialsCode from '../../../assets/img/pictogram/pictogram--essentials--code.svg';
import EssentialsCompass from '../../../assets/img/pictogram/pictogram--essentials--compass.svg';
import EssentialsDecline from '../../../assets/img/pictogram/pictogram--essentials--decline.svg';
import EssentialsDiamond from '../../../assets/img/pictogram/pictogram--essentials--diamond.svg';
import EssentialsEarth from '../../../assets/img/pictogram/pictogram--essentials--earth.svg';
import EssentialsHide from '../../../assets/img/pictogram/pictogram--essentials--hide.svg';
import EssentialsHome from '../../../assets/img/pictogram/pictogram--essentials--home.svg';
import EssentialsLightbulb from '../../../assets/img/pictogram/pictogram--essentials--lightbulb.svg';
import EssentialsLock from '../../../assets/img/pictogram/pictogram--essentials--lock.svg';
import EssentialsNetwork from '../../../assets/img/pictogram/pictogram--essentials--network.svg';
import EssentialsNotification from '../../../assets/img/pictogram/pictogram--essentials--notification.svg';
import EssentialsPowerButton from '../../../assets/img/pictogram/pictogram--essentials--power_button.svg';
import EssentialsProfile from '../../../assets/img/pictogram/pictogram--essentials--profile.svg';
import EssentialsRefresh from '../../../assets/img/pictogram/pictogram--essentials--refresh.svg';
import EssentialsRemove from '../../../assets/img/pictogram/pictogram--essentials--remove.svg';
import EssentialsSecurity from '../../../assets/img/pictogram/pictogram--essentials--security.svg';
import EssentialsShow from '../../../assets/img/pictogram/pictogram--essentials--show.svg';
import EssentialsStyleCode from '../../../assets/img/pictogram/pictogram--essentials--style_code.svg';
import EssentialsTools from '../../../assets/img/pictogram/pictogram--essentials--tools.svg';
import EssentialsWaiting from '../../../assets/img/pictogram/pictogram--essentials--waiting.svg';
import EssentialsWarning from '../../../assets/img/pictogram/pictogram--essentials--warning.svg';
import EssentialsWriteMessage from '../../../assets/img/pictogram/pictogram--essentials--write_message.svg';
import EssentialsWrite from '../../../assets/img/pictogram/pictogram--essentials--write.svg';
import FileApprove from '../../../assets/img/pictogram/pictogram--files--approve.svg';
import FileDelete from '../../../assets/img/pictogram/pictogram--files--delete.svg';
import FileEdit from '../../../assets/img/pictogram/pictogram--files--edit.svg';
import FileLoading from '../../../assets/img/pictogram/pictogram--files--loading.svg';
import FileLock from '../../../assets/img/pictogram/pictogram--files--lock.svg';
import FileOptions from '../../../assets/img/pictogram/pictogram--files--options.svg';
import FileSearch from '../../../assets/img/pictogram/pictogram--files--search.svg';
import FileUnlock from '../../../assets/img/pictogram/pictogram--files--unlock.svg';
import FinanceAnalysis from '../../../assets/img/pictogram/pictogram--finance--analysis.svg';
import FinanceBankCheque from '../../../assets/img/pictogram/pictogram--finance--bank_cheque.svg';
import FinanceCashAnalysis from '../../../assets/img/pictogram/pictogram--finance--cash_analysis.svg';
import FinanceCreditCard from '../../../assets/img/pictogram/pictogram--finance--credit_card.svg';
import FinanceGlobalCurrency from '../../../assets/img/pictogram/pictogram--finance--global_currency.svg';
import FinanceGlobalFunding from '../../../assets/img/pictogram/pictogram--finance--global_funding.svg';
import FinanceInvestmentBanking from '../../../assets/img/pictogram/pictogram--finance--investment_banking.svg';
import FinanceInvoice from '../../../assets/img/pictogram/pictogram--finance--invoice.svg';
import FinanceMoneyAnalysis from '../../../assets/img/pictogram/pictogram--finance--money_analysis.svg';
import FinanceMoneyBag from '../../../assets/img/pictogram/pictogram--finance--money_bag.svg';
import FinanceMoneyGrowthAnalysis from '../../../assets/img/pictogram/pictogram--finance--money_growth_analysis.svg';
import FinanceMoneyGrowthGraph from '../../../assets/img/pictogram/pictogram--finance--money_growth_graph.svg';
import FinanceMoneyGrowthTrend from '../../../assets/img/pictogram/pictogram--finance--money_growth_trend.svg';
import FinanceMoneyGrowth from '../../../assets/img/pictogram/pictogram--finance--money_growth.svg';
import FinancePercentageInvestment from '../../../assets/img/pictogram/pictogram--finance--percentage_investment.svg';
import FinancePiggyBank from '../../../assets/img/pictogram/pictogram--finance--piggy_bank.svg';
import FinanceSafeInvestment from '../../../assets/img/pictogram/pictogram--finance--safe_investment.svg';
import FinanceSearchingForCash from '../../../assets/img/pictogram/pictogram--finance--searching_for_cash.svg';
import FinanceSecurity from '../../../assets/img/pictogram/pictogram--finance--security.svg';
import FinanceTimeIsMoney from '../../../assets/img/pictogram/pictogram--finance--time_is_money.svg';
import FinanceWallet from '../../../assets/img/pictogram/pictogram--finance--wallet.svg';
import FolderApprove from '../../../assets/img/pictogram/pictogram--folders--approve.svg';
import FolderDelete from '../../../assets/img/pictogram/pictogram--folders--delete.svg';
import FolderEdit from '../../../assets/img/pictogram/pictogram--folders--edit.svg';
import FolderLoading from '../../../assets/img/pictogram/pictogram--folders--loading.svg';
import FolderLock from '../../../assets/img/pictogram/pictogram--folders--lock.svg';
import FolderOptions from '../../../assets/img/pictogram/pictogram--folders--options.svg';
import FolderSearch from '../../../assets/img/pictogram/pictogram--folders--search.svg';
import FolderUnlock from '../../../assets/img/pictogram/pictogram--folders--unlock.svg';
import Wireless404 from '../../../assets/img/pictogram/pictogram--wireless--404.svg';
import WirelessAchievement from '../../../assets/img/pictogram/pictogram--wireless--achievement.svg';
import WirelessBrowserSearch from '../../../assets/img/pictogram/pictogram--wireless--browser_search.svg';
import WirelessBug from '../../../assets/img/pictogram/pictogram--wireless--bug.svg';
import WirelessCloud from '../../../assets/img/pictogram/pictogram--wireless--cloud.svg';
import WirelessDownloadFiles from '../../../assets/img/pictogram/pictogram--wireless--download_files.svg';
import WirelessDownload from '../../../assets/img/pictogram/pictogram--wireless--download.svg';
import WirelessEmail from '../../../assets/img/pictogram/pictogram--wireless--email.svg';
import WirelessEnergy from '../../../assets/img/pictogram/pictogram--wireless--energy.svg';
import WirelessGlobal from '../../../assets/img/pictogram/pictogram--wireless--global.svg';
import WirelessHistory from '../../../assets/img/pictogram/pictogram--wireless--history.svg';
import WirelessInternet from '../../../assets/img/pictogram/pictogram--wireless--internet.svg';
import WirelessLoading from '../../../assets/img/pictogram/pictogram--wireless--loading.svg';
import WirelessLocked from '../../../assets/img/pictogram/pictogram--wireless--locked.svg';
import WirelessMark from '../../../assets/img/pictogram/pictogram--wireless--mark.svg';
import WirelessPassword from '../../../assets/img/pictogram/pictogram--wireless--password.svg';
import WirelessPrinter from '../../../assets/img/pictogram/pictogram--wireless--printer.svg';
import WirelessProtected from '../../../assets/img/pictogram/pictogram--wireless--protected.svg';
import WirelessReceiving from '../../../assets/img/pictogram/pictogram--wireless--receiving.svg';
import WirelessSave from '../../../assets/img/pictogram/pictogram--wireless--save.svg';
import WirelessSearchResults from '../../../assets/img/pictogram/pictogram--wireless--search_results.svg';
import WirelessSearch from '../../../assets/img/pictogram/pictogram--wireless--search.svg';
import WirelessSecured from '../../../assets/img/pictogram/pictogram--wireless--secured.svg';
import WirelessSending from '../../../assets/img/pictogram/pictogram--wireless--sending.svg';
import WirelessSettings from '../../../assets/img/pictogram/pictogram--wireless--settings.svg';
import WirelessTimedOut from '../../../assets/img/pictogram/pictogram--wireless--timed_out.svg';
import WirelessUnavailable from '../../../assets/img/pictogram/pictogram--wireless--unavailable.svg';
import WirelessUnlocked from '../../../assets/img/pictogram/pictogram--wireless--unlocked.svg';
import WirelessView from '../../../assets/img/pictogram/pictogram--wireless--view.svg';
import WirelessWaiting from '../../../assets/img/pictogram/pictogram--wireless--waiting.svg';
import WirelessWireless from '../../../assets/img/pictogram/pictogram--wireless--wireless.svg';
import WirelessWorldConnection from '../../../assets/img/pictogram/pictogram--wireless--world_connection.svg';
var Pictogram = function (_a) {
    var alt = _a.alt, _b = _a.className, className = _b === void 0 ? '' : _b, icon = _a.icon, otherProps = __rest(_a, ["alt", "className", "icon"]);
    var iconSrc = {
        AstronautFishing: AstronautFishing,
        AstronautFlight: AstronautFlight,
        AstronautHello: AstronautHello,
        AstronautSittingOnPlanet: AstronautSittingOnPlanet,
        AstronautWave: AstronautWave,
        AstronautWithFlag: AstronautWithFlag,
        EssentialsAccept: EssentialsAccept,
        EssentialsAdd: EssentialsAdd,
        EssentialsAirplane: EssentialsAirplane,
        EssentialsBattery: EssentialsBattery,
        EssentialsCalendar: EssentialsCalendar,
        EssentialsClock: EssentialsClock,
        EssentialsCode: EssentialsCode,
        EssentialsCompass: EssentialsCompass,
        EssentialsDecline: EssentialsDecline,
        EssentialsDiamond: EssentialsDiamond,
        EssentialsEarth: EssentialsEarth,
        EssentialsHide: EssentialsHide,
        EssentialsHome: EssentialsHome,
        EssentialsLightbulb: EssentialsLightbulb,
        EssentialsLock: EssentialsLock,
        EssentialsNetwork: EssentialsNetwork,
        EssentialsNotification: EssentialsNotification,
        EssentialsPowerButton: EssentialsPowerButton,
        EssentialsProfile: EssentialsProfile,
        EssentialsRefresh: EssentialsRefresh,
        EssentialsRemove: EssentialsRemove,
        EssentialsSecurity: EssentialsSecurity,
        EssentialsShow: EssentialsShow,
        EssentialsStyleCode: EssentialsStyleCode,
        EssentialsTools: EssentialsTools,
        EssentialsWaiting: EssentialsWaiting,
        EssentialsWarning: EssentialsWarning,
        EssentialsWrite: EssentialsWrite,
        EssentialsWriteMessage: EssentialsWriteMessage,
        FileApprove: FileApprove,
        FileDelete: FileDelete,
        FileEdit: FileEdit,
        FileLoading: FileLoading,
        FileLock: FileLock,
        FileOptions: FileOptions,
        FileSearch: FileSearch,
        FileUnlock: FileUnlock,
        FinanceAnalysis: FinanceAnalysis,
        FinanceBankCheque: FinanceBankCheque,
        FinanceCashAnalysis: FinanceCashAnalysis,
        FinanceCreditCard: FinanceCreditCard,
        FinanceGlobalCurrency: FinanceGlobalCurrency,
        FinanceGlobalFunding: FinanceGlobalFunding,
        FinanceInvestmentBanking: FinanceInvestmentBanking,
        FinanceInvoice: FinanceInvoice,
        FinanceMoneyAnalysis: FinanceMoneyAnalysis,
        FinanceMoneyBag: FinanceMoneyBag,
        FinanceMoneyGrowth: FinanceMoneyGrowth,
        FinanceMoneyGrowthAnalysis: FinanceMoneyGrowthAnalysis,
        FinanceMoneyGrowthGraph: FinanceMoneyGrowthGraph,
        FinanceMoneyGrowthTrend: FinanceMoneyGrowthTrend,
        FinancePercentageInvestment: FinancePercentageInvestment,
        FinancePiggyBank: FinancePiggyBank,
        FinanceSafeInvestment: FinanceSafeInvestment,
        FinanceSearchingForCash: FinanceSearchingForCash,
        FinanceSecurity: FinanceSecurity,
        FinanceTimeIsMoney: FinanceTimeIsMoney,
        FinanceWallet: FinanceWallet,
        FolderApprove: FolderApprove,
        FolderDelete: FolderDelete,
        FolderEdit: FolderEdit,
        FolderLoading: FolderLoading,
        FolderLock: FolderLock,
        FolderOptions: FolderOptions,
        FolderSearch: FolderSearch,
        FolderUnlock: FolderUnlock,
        Wireless404: Wireless404,
        WirelessAchievement: WirelessAchievement,
        WirelessBrowserSearch: WirelessBrowserSearch,
        WirelessBug: WirelessBug,
        WirelessCloud: WirelessCloud,
        WirelessDownload: WirelessDownload,
        WirelessDownloadFiles: WirelessDownloadFiles,
        WirelessEmail: WirelessEmail,
        WirelessEnergy: WirelessEnergy,
        WirelessGlobal: WirelessGlobal,
        WirelessHistory: WirelessHistory,
        WirelessInternet: WirelessInternet,
        WirelessLoading: WirelessLoading,
        WirelessLocked: WirelessLocked,
        WirelessMark: WirelessMark,
        WirelessPassword: WirelessPassword,
        WirelessPrinter: WirelessPrinter,
        WirelessProtected: WirelessProtected,
        WirelessReceiving: WirelessReceiving,
        WirelessSave: WirelessSave,
        WirelessSearch: WirelessSearch,
        WirelessSearchResults: WirelessSearchResults,
        WirelessSecured: WirelessSecured,
        WirelessSending: WirelessSending,
        WirelessSettings: WirelessSettings,
        WirelessTimedOut: WirelessTimedOut,
        WirelessUnavailable: WirelessUnavailable,
        WirelessUnlocked: WirelessUnlocked,
        WirelessView: WirelessView,
        WirelessWaiting: WirelessWaiting,
        WirelessWireless: WirelessWireless,
        WirelessWorldConnection: WirelessWorldConnection,
    };
    return (_jsx("img", __assign({ className: className }, otherProps, { alt: alt, src: iconSrc[icon] }), void 0));
};
export default Pictogram;
//# sourceMappingURL=Pictogram.js.map