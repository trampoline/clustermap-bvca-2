// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
clustermap.api.GET = (function GET(url){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"]));
return cljs.core.async.close_BANG_(ch);
}));
return ch;
});
clustermap.api.all_portfolio_company_sites = (function all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18534){var state_val_18535 = (state_18534[1]);if((state_val_18535 === 2))
{var inst_18532 = (state_18534[2]);var state_18534__$1 = state_18534;return cljs.core.async.impl.ioc_helpers.return_chan(state_18534__$1,inst_18532);
} else
{if((state_val_18535 === 1))
{var inst_18530 = clustermap.api.GET("/api/bvca/all-portfolio-company-sites");var state_18534__$1 = state_18534;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18534__$1,2,inst_18530);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18539 = [null,null,null,null,null,null,null];(statearr_18539[0] = state_machine__5507__auto__);
(statearr_18539[1] = 1);
return statearr_18539;
});
var state_machine__5507__auto____1 = (function (state_18534){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18534);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18540){if((e18540 instanceof Object))
{var ex__5510__auto__ = e18540;var statearr_18541_18543 = state_18534;(statearr_18541_18543[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18534);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e18540;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__18544 = state_18534;
state_18534 = G__18544;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18534){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18542 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18542;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.all_constituencies = (function all_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18562){var state_val_18563 = (state_18562[1]);if((state_val_18563 === 2))
{var inst_18560 = (state_18562[2]);var state_18562__$1 = state_18562;return cljs.core.async.impl.ioc_helpers.return_chan(state_18562__$1,inst_18560);
} else
{if((state_val_18563 === 1))
{var inst_18558 = clustermap.api.GET("/api/bvca/all-constituencies");var state_18562__$1 = state_18562;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18562__$1,2,inst_18558);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18567 = [null,null,null,null,null,null,null];(statearr_18567[0] = state_machine__5507__auto__);
(statearr_18567[1] = 1);
return statearr_18567;
});
var state_machine__5507__auto____1 = (function (state_18562){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18562);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18568){if((e18568 instanceof Object))
{var ex__5510__auto__ = e18568;var statearr_18569_18571 = state_18562;(statearr_18569_18571[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18562);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e18568;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__18572 = state_18562;
state_18562 = G__18572;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18562){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18570 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18570;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.constituency_detail = (function constituency_detail(id){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18592){var state_val_18593 = (state_18592[1]);if((state_val_18593 === 2))
{var inst_18590 = (state_18592[2]);var state_18592__$1 = state_18592;return cljs.core.async.impl.ioc_helpers.return_chan(state_18592__$1,inst_18590);
} else
{if((state_val_18593 === 1))
{var inst_18587 = [cljs.core.str("/api/bvca/constituency-detail/"),cljs.core.str(id)].join('');var inst_18588 = clustermap.api.GET(inst_18587);var state_18592__$1 = state_18592;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18592__$1,2,inst_18588);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18597 = [null,null,null,null,null,null,null];(statearr_18597[0] = state_machine__5507__auto__);
(statearr_18597[1] = 1);
return statearr_18597;
});
var state_machine__5507__auto____1 = (function (state_18592){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18592);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18598){if((e18598 instanceof Object))
{var ex__5510__auto__ = e18598;var statearr_18599_18601 = state_18592;(statearr_18599_18601[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18592);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e18598;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__18602 = state_18592;
state_18592 = G__18602;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18592){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18600 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.all_portfolio_companies_summary = (function all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18620){var state_val_18621 = (state_18620[1]);if((state_val_18621 === 2))
{var inst_18618 = (state_18620[2]);var state_18620__$1 = state_18620;return cljs.core.async.impl.ioc_helpers.return_chan(state_18620__$1,inst_18618);
} else
{if((state_val_18621 === 1))
{var inst_18616 = clustermap.api.GET("/api/bvca/all-portfolio-companies-summary");var state_18620__$1 = state_18620;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18620__$1,2,inst_18616);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18625 = [null,null,null,null,null,null,null];(statearr_18625[0] = state_machine__5507__auto__);
(statearr_18625[1] = 1);
return statearr_18625;
});
var state_machine__5507__auto____1 = (function (state_18620){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18620);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18626){if((e18626 instanceof Object))
{var ex__5510__auto__ = e18626;var statearr_18627_18629 = state_18620;(statearr_18627_18629[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18620);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e18626;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__18630 = state_18620;
state_18620 = G__18630;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18620){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18628 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.portfolio_company_detail = (function portfolio_company_detail(id){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18650){var state_val_18651 = (state_18650[1]);if((state_val_18651 === 2))
{var inst_18648 = (state_18650[2]);var state_18650__$1 = state_18650;return cljs.core.async.impl.ioc_helpers.return_chan(state_18650__$1,inst_18648);
} else
{if((state_val_18651 === 1))
{var inst_18645 = [cljs.core.str("/api/bvca/portfolio-company-detail/"),cljs.core.str(id)].join('');var inst_18646 = clustermap.api.GET(inst_18645);var state_18650__$1 = state_18650;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18650__$1,2,inst_18646);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18655 = [null,null,null,null,null,null,null];(statearr_18655[0] = state_machine__5507__auto__);
(statearr_18655[1] = 1);
return statearr_18655;
});
var state_machine__5507__auto____1 = (function (state_18650){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18650);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18656){if((e18656 instanceof Object))
{var ex__5510__auto__ = e18656;var statearr_18657_18659 = state_18650;(statearr_18657_18659[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18650);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e18656;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__18660 = state_18650;
state_18650 = G__18660;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18650){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18658 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18658;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.all_investor_companies_summary = (function all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18678){var state_val_18679 = (state_18678[1]);if((state_val_18679 === 2))
{var inst_18676 = (state_18678[2]);var state_18678__$1 = state_18678;return cljs.core.async.impl.ioc_helpers.return_chan(state_18678__$1,inst_18676);
} else
{if((state_val_18679 === 1))
{var inst_18674 = clustermap.api.GET("/api/bvca/all-investor-companies-summary");var state_18678__$1 = state_18678;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18678__$1,2,inst_18674);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18683 = [null,null,null,null,null,null,null];(statearr_18683[0] = state_machine__5507__auto__);
(statearr_18683[1] = 1);
return statearr_18683;
});
var state_machine__5507__auto____1 = (function (state_18678){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18678);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18684){if((e18684 instanceof Object))
{var ex__5510__auto__ = e18684;var statearr_18685_18687 = state_18678;(statearr_18685_18687[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18678);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e18684;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__18688 = state_18678;
state_18678 = G__18688;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18678){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18686 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18686;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.api.investor_company_detail = (function investor_company_detail(id){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18708){var state_val_18709 = (state_18708[1]);if((state_val_18709 === 2))
{var inst_18706 = (state_18708[2]);var state_18708__$1 = state_18708;return cljs.core.async.impl.ioc_helpers.return_chan(state_18708__$1,inst_18706);
} else
{if((state_val_18709 === 1))
{var inst_18703 = [cljs.core.str("/api/bvca/investor-company-detail/"),cljs.core.str(id)].join('');var inst_18704 = clustermap.api.GET(inst_18703);var state_18708__$1 = state_18708;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18708__$1,2,inst_18704);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18713 = [null,null,null,null,null,null,null];(statearr_18713[0] = state_machine__5507__auto__);
(statearr_18713[1] = 1);
return statearr_18713;
});
var state_machine__5507__auto____1 = (function (state_18708){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18708);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18714){if((e18714 instanceof Object))
{var ex__5510__auto__ = e18714;var statearr_18715_18717 = state_18708;(statearr_18715_18717[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18708);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e18714;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__18718 = state_18708;
state_18708 = G__18718;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18708){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18716 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18716;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
