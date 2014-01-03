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
clustermap.api.portfolio_company_sites = (function portfolio_company_sites(){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_43604){var state_val_43605 = (state_43604[1]);if((state_val_43605 === 2))
{var inst_43602 = (state_43604[2]);var state_43604__$1 = state_43604;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43604__$1,inst_43602);
} else
{if((state_val_43605 === 1))
{var inst_43600 = clustermap.api.GET.call(null,"/api/bvca/portfolio-company-sites");var state_43604__$1 = state_43604;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43604__$1,2,inst_43600);
} else
{return null;
}
}
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_43609 = (new Array(7));(statearr_43609[0] = state_machine__5792__auto__);
(statearr_43609[1] = 1);
return statearr_43609;
});
var state_machine__5792__auto____1 = (function (state_43604){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_43604);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e43610){if((e43610 instanceof Object))
{var ex__5795__auto__ = e43610;var statearr_43611_43613 = state_43604;(statearr_43611_43613[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43604);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43614 = state_43604;
state_43604 = G__43614;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_43604){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_43604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_43612 = f__5862__auto__.call(null);(statearr_43612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_43612;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
});
clustermap.api.log_portfolio_company_sites = (function log_portfolio_company_sites(){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_43634){var state_val_43635 = (state_43634[1]);if((state_val_43635 === 2))
{var inst_43631 = (state_43634[2]);var inst_43632 = console.log(inst_43631);var state_43634__$1 = state_43634;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43634__$1,inst_43632);
} else
{if((state_val_43635 === 1))
{var inst_43629 = clustermap.api.portfolio_company_sites.call(null);var state_43634__$1 = state_43634;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43634__$1,2,inst_43629);
} else
{return null;
}
}
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_43639 = (new Array(7));(statearr_43639[0] = state_machine__5792__auto__);
(statearr_43639[1] = 1);
return statearr_43639;
});
var state_machine__5792__auto____1 = (function (state_43634){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_43634);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e43640){if((e43640 instanceof Object))
{var ex__5795__auto__ = e43640;var statearr_43641_43643 = state_43634;(statearr_43641_43643[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43634);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43640;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43644 = state_43634;
state_43634 = G__43644;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_43634){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_43634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_43642 = f__5862__auto__.call(null);(statearr_43642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_43642;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
});
