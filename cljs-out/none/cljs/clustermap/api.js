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
clustermap.api.GET = (function GET(url){var ch = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,ch,purnam.cljs.js_lookup.call(null,JSON.parse.call(null,event.target.getResponseText()),"data"));
return cljs.core.async.close_BANG_.call(null,ch);
}));
return ch;
});
clustermap.api.portfolio_company_sites = (function portfolio_company_sites(){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_14039){var state_val_14040 = (state_14039[1]);if((state_val_14040 === 2))
{var inst_14037 = (state_14039[2]);var state_14039__$1 = state_14039;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14039__$1,inst_14037);
} else
{if((state_val_14040 === 1))
{var inst_14035 = clustermap.api.GET.call(null,"/api/bvca/portfolio-company-sites");var state_14039__$1 = state_14039;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14039__$1,2,inst_14035);
} else
{return null;
}
}
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_14044 = (new Array(7));(statearr_14044[0] = state_machine__5792__auto__);
(statearr_14044[1] = 1);
return statearr_14044;
});
var state_machine__5792__auto____1 = (function (state_14039){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_14039);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e14045){if((e14045 instanceof Object))
{var ex__5795__auto__ = e14045;var statearr_14046_14048 = state_14039;(statearr_14046_14048[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14039);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14045;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14049 = state_14039;
state_14039 = G__14049;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_14039){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_14039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_14047 = f__5862__auto__.call(null);(statearr_14047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_14047;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
});
clustermap.api.log_portfolio_company_sites = (function log_portfolio_company_sites(){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_14069){var state_val_14070 = (state_14069[1]);if((state_val_14070 === 2))
{var inst_14066 = (state_14069[2]);var inst_14067 = console.log(inst_14066);var state_14069__$1 = state_14069;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14069__$1,inst_14067);
} else
{if((state_val_14070 === 1))
{var inst_14064 = clustermap.api.portfolio_company_sites.call(null);var state_14069__$1 = state_14069;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14069__$1,2,inst_14064);
} else
{return null;
}
}
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_14074 = (new Array(7));(statearr_14074[0] = state_machine__5792__auto__);
(statearr_14074[1] = 1);
return statearr_14074;
});
var state_machine__5792__auto____1 = (function (state_14069){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_14069);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e14075){if((e14075 instanceof Object))
{var ex__5795__auto__ = e14075;var statearr_14076_14078 = state_14069;(statearr_14076_14078[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14069);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14079 = state_14069;
state_14069 = G__14079;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_14069){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_14069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_14077 = f__5862__auto__.call(null);(statearr_14077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_14077;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
});

//# sourceMappingURL=api.js.map