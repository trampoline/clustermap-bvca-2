// Compiled by ClojureScript 0.0-2080
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('purnam.cljs');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('purnam.cljs');
goog.require('purnam.cljs');
goog.require('cljs.core.async');
clustermap.api.GET = (function GET(url){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,purnam.cljs.js_lookup.cljs$core$IFn$_invoke$arity$2((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText())),"data"));
return cljs.core.async.close_BANG_(ch);
}));
return ch;
});
clustermap.api.portfolio_company_sites = (function portfolio_company_sites(){var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_28829){var state_val_28830 = (state_28829[1]);if((state_val_28830 === 2))
{var inst_28827 = (state_28829[2]);var state_28829__$1 = state_28829;return cljs.core.async.impl.ioc_helpers.return_chan(state_28829__$1,inst_28827);
} else
{if((state_val_28830 === 1))
{var inst_28825 = clustermap.api.GET("/api/bvca/portfolio-company-sites");var state_28829__$1 = state_28829;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28829__$1,2,inst_28825);
} else
{return null;
}
}
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_28834 = (new Array(7));(statearr_28834[0] = state_machine__5792__auto__);
(statearr_28834[1] = 1);
return statearr_28834;
});
var state_machine__5792__auto____1 = (function (state_28829){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_28829);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e28835){if((e28835 instanceof Object))
{var ex__5795__auto__ = e28835;var statearr_28836_28838 = state_28829;(statearr_28836_28838[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_28829);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e28835;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$77))
{{
var G__28839 = state_28829;
state_28829 = G__28839;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_28829){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_28829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_28837 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_28837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_28837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
}));
return c__5861__auto__;
});
clustermap.api.log_portfolio_company_sites = (function log_portfolio_company_sites(){var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_28859){var state_val_28860 = (state_28859[1]);if((state_val_28860 === 2))
{var inst_28856 = (state_28859[2]);var inst_28857 = console.log(inst_28856);var state_28859__$1 = state_28859;return cljs.core.async.impl.ioc_helpers.return_chan(state_28859__$1,inst_28857);
} else
{if((state_val_28860 === 1))
{var inst_28854 = clustermap.api.portfolio_company_sites();var state_28859__$1 = state_28859;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28859__$1,2,inst_28854);
} else
{return null;
}
}
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_28864 = (new Array(7));(statearr_28864[0] = state_machine__5792__auto__);
(statearr_28864[1] = 1);
return statearr_28864;
});
var state_machine__5792__auto____1 = (function (state_28859){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_28859);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e28865){if((e28865 instanceof Object))
{var ex__5795__auto__ = e28865;var statearr_28866_28868 = state_28859;(statearr_28866_28868[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_28859);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e28865;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$77))
{{
var G__28869 = state_28859;
state_28859 = G__28869;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_28859){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_28859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_28867 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_28867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_28867;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
}));
return c__5861__auto__;
});
