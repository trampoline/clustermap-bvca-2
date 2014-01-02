// Compiled by ClojureScript 0.0-2080
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('purnam.cljs');
goog.require('cljs.core.async');
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
clustermap.api.portfolio_company_sites = (function portfolio_company_sites(){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_28397){var state_val_28398 = (state_28397[1]);if((state_val_28398 === 2))
{var inst_28395 = (state_28397[2]);var state_28397__$1 = state_28397;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28397__$1,inst_28395);
} else
{if((state_val_28398 === 1))
{var inst_28393 = clustermap.api.GET.call(null,"/api/bvca/portfolio-company-sites");var state_28397__$1 = state_28397;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28397__$1,2,inst_28393);
} else
{return null;
}
}
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_28402 = (new Array(7));(statearr_28402[0] = state_machine__5792__auto__);
(statearr_28402[1] = 1);
return statearr_28402;
});
var state_machine__5792__auto____1 = (function (state_28397){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_28397);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e28403){if((e28403 instanceof Object))
{var ex__5795__auto__ = e28403;var statearr_28404_28406 = state_28397;(statearr_28404_28406[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28397);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28403;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28407 = state_28397;
state_28397 = G__28407;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_28397){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_28397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_28405 = f__5862__auto__.call(null);(statearr_28405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_28405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
});
clustermap.api.log_portfolio_company_sites = (function log_portfolio_company_sites(){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_28427){var state_val_28428 = (state_28427[1]);if((state_val_28428 === 2))
{var inst_28424 = (state_28427[2]);var inst_28425 = console.log(inst_28424);var state_28427__$1 = state_28427;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28427__$1,inst_28425);
} else
{if((state_val_28428 === 1))
{var inst_28422 = clustermap.api.portfolio_company_sites.call(null);var state_28427__$1 = state_28427;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28427__$1,2,inst_28422);
} else
{return null;
}
}
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_28432 = (new Array(7));(statearr_28432[0] = state_machine__5792__auto__);
(statearr_28432[1] = 1);
return statearr_28432;
});
var state_machine__5792__auto____1 = (function (state_28427){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_28427);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e28433){if((e28433 instanceof Object))
{var ex__5795__auto__ = e28433;var statearr_28434_28436 = state_28427;(statearr_28434_28436[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28427);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28433;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28437 = state_28427;
state_28427 = G__28437;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_28427){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_28427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_28435 = f__5862__auto__.call(null);(statearr_28435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_28435;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
});
