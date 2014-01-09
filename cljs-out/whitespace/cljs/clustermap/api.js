// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
clustermap.api.GET = (function GET(url){var ch = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,ch,(JSON.parse.call(null,event.target.getResponseText())["data"]));
return cljs.core.async.close_BANG_.call(null,ch);
}));
return ch;
});
clustermap.api.all_portfolio_company_sites = (function all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27502){var state_val_27503 = (state_27502[1]);if((state_val_27503 === 2))
{var inst_27500 = (state_27502[2]);var state_27502__$1 = state_27502;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27502__$1,inst_27500);
} else
{if((state_val_27503 === 1))
{var inst_27498 = clustermap.api.GET.call(null,"/api/bvca/all-portfolio-company-sites");var state_27502__$1 = state_27502;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27502__$1,2,inst_27498);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_27507 = [null,null,null,null,null,null,null];(statearr_27507[0] = state_machine__5507__auto__);
(statearr_27507[1] = 1);
return statearr_27507;
});
var state_machine__5507__auto____1 = (function (state_27502){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27502);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27508){if((e27508 instanceof Object))
{var ex__5510__auto__ = e27508;var statearr_27509_27511 = state_27502;(statearr_27509_27511[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27502);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27508;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27512 = state_27502;
state_27502 = G__27512;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27502){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27510 = f__5522__auto__.call(null);(statearr_27510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_27510;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.all_constituencies = (function all_constituencies(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27530){var state_val_27531 = (state_27530[1]);if((state_val_27531 === 2))
{var inst_27528 = (state_27530[2]);var state_27530__$1 = state_27530;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27530__$1,inst_27528);
} else
{if((state_val_27531 === 1))
{var inst_27526 = clustermap.api.GET.call(null,"/api/bvca/all-constituencies");var state_27530__$1 = state_27530;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27530__$1,2,inst_27526);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_27535 = [null,null,null,null,null,null,null];(statearr_27535[0] = state_machine__5507__auto__);
(statearr_27535[1] = 1);
return statearr_27535;
});
var state_machine__5507__auto____1 = (function (state_27530){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27530);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27536){if((e27536 instanceof Object))
{var ex__5510__auto__ = e27536;var statearr_27537_27539 = state_27530;(statearr_27537_27539[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27530);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27536;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27540 = state_27530;
state_27530 = G__27540;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27530){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27538 = f__5522__auto__.call(null);(statearr_27538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_27538;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.constituency_detail = (function constituency_detail(id){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27560){var state_val_27561 = (state_27560[1]);if((state_val_27561 === 2))
{var inst_27558 = (state_27560[2]);var state_27560__$1 = state_27560;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27560__$1,inst_27558);
} else
{if((state_val_27561 === 1))
{var inst_27555 = [cljs.core.str("/api/bvca/constituency-detail/"),cljs.core.str(id)].join('');var inst_27556 = clustermap.api.GET.call(null,inst_27555);var state_27560__$1 = state_27560;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27560__$1,2,inst_27556);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_27565 = [null,null,null,null,null,null,null];(statearr_27565[0] = state_machine__5507__auto__);
(statearr_27565[1] = 1);
return statearr_27565;
});
var state_machine__5507__auto____1 = (function (state_27560){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27560);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27566){if((e27566 instanceof Object))
{var ex__5510__auto__ = e27566;var statearr_27567_27569 = state_27560;(statearr_27567_27569[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27560);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27566;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27570 = state_27560;
state_27560 = G__27570;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27560){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27568 = f__5522__auto__.call(null);(statearr_27568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_27568;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.all_portfolio_companies_summary = (function all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27588){var state_val_27589 = (state_27588[1]);if((state_val_27589 === 2))
{var inst_27586 = (state_27588[2]);var state_27588__$1 = state_27588;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27588__$1,inst_27586);
} else
{if((state_val_27589 === 1))
{var inst_27584 = clustermap.api.GET.call(null,"/api/bvca/all-portfolio-companies-summary");var state_27588__$1 = state_27588;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27588__$1,2,inst_27584);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_27593 = [null,null,null,null,null,null,null];(statearr_27593[0] = state_machine__5507__auto__);
(statearr_27593[1] = 1);
return statearr_27593;
});
var state_machine__5507__auto____1 = (function (state_27588){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27588);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27594){if((e27594 instanceof Object))
{var ex__5510__auto__ = e27594;var statearr_27595_27597 = state_27588;(statearr_27595_27597[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27588);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27594;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27598 = state_27588;
state_27588 = G__27598;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27588){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27596 = f__5522__auto__.call(null);(statearr_27596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_27596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.portfolio_company_detail = (function portfolio_company_detail(id){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27618){var state_val_27619 = (state_27618[1]);if((state_val_27619 === 2))
{var inst_27616 = (state_27618[2]);var state_27618__$1 = state_27618;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27618__$1,inst_27616);
} else
{if((state_val_27619 === 1))
{var inst_27613 = [cljs.core.str("/api/bvca/portfolio-company-detail/"),cljs.core.str(id)].join('');var inst_27614 = clustermap.api.GET.call(null,inst_27613);var state_27618__$1 = state_27618;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27618__$1,2,inst_27614);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_27623 = [null,null,null,null,null,null,null];(statearr_27623[0] = state_machine__5507__auto__);
(statearr_27623[1] = 1);
return statearr_27623;
});
var state_machine__5507__auto____1 = (function (state_27618){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27618);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27624){if((e27624 instanceof Object))
{var ex__5510__auto__ = e27624;var statearr_27625_27627 = state_27618;(statearr_27625_27627[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27618);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27624;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27628 = state_27618;
state_27618 = G__27628;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27618){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27626 = f__5522__auto__.call(null);(statearr_27626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_27626;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.all_investor_companies_summary = (function all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27646){var state_val_27647 = (state_27646[1]);if((state_val_27647 === 2))
{var inst_27644 = (state_27646[2]);var state_27646__$1 = state_27646;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27646__$1,inst_27644);
} else
{if((state_val_27647 === 1))
{var inst_27642 = clustermap.api.GET.call(null,"/api/bvca/all-investor-companies-summary");var state_27646__$1 = state_27646;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27646__$1,2,inst_27642);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_27651 = [null,null,null,null,null,null,null];(statearr_27651[0] = state_machine__5507__auto__);
(statearr_27651[1] = 1);
return statearr_27651;
});
var state_machine__5507__auto____1 = (function (state_27646){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27646);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27652){if((e27652 instanceof Object))
{var ex__5510__auto__ = e27652;var statearr_27653_27655 = state_27646;(statearr_27653_27655[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27646);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27652;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27656 = state_27646;
state_27646 = G__27656;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27646){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27654 = f__5522__auto__.call(null);(statearr_27654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_27654;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.investor_company_detail = (function investor_company_detail(id){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27676){var state_val_27677 = (state_27676[1]);if((state_val_27677 === 2))
{var inst_27674 = (state_27676[2]);var state_27676__$1 = state_27676;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27676__$1,inst_27674);
} else
{if((state_val_27677 === 1))
{var inst_27671 = [cljs.core.str("/api/bvca/investor-company-detail/"),cljs.core.str(id)].join('');var inst_27672 = clustermap.api.GET.call(null,inst_27671);var state_27676__$1 = state_27676;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27676__$1,2,inst_27672);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_27681 = [null,null,null,null,null,null,null];(statearr_27681[0] = state_machine__5507__auto__);
(statearr_27681[1] = 1);
return statearr_27681;
});
var state_machine__5507__auto____1 = (function (state_27676){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27676);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27682){if((e27682 instanceof Object))
{var ex__5510__auto__ = e27682;var statearr_27683_27685 = state_27676;(statearr_27683_27685[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27676);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27682;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27686 = state_27676;
state_27676 = G__27686;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27676){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27684 = f__5522__auto__.call(null);(statearr_27684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_27684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
