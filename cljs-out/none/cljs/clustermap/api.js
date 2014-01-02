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
clustermap.api.portfolio_company_sites = (function portfolio_company_sites(){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_20810){var state_val_20811 = (state_20810[1]);if((state_val_20811 === 2))
{var inst_20808 = (state_20810[2]);var state_20810__$1 = state_20810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20810__$1,inst_20808);
} else
{if((state_val_20811 === 1))
{var inst_20806 = clustermap.api.GET.call(null,"/api/bvca/portfolio-company-sites");var state_20810__$1 = state_20810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20810__$1,2,inst_20806);
} else
{return null;
}
}
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_20815 = (new Array(7));(statearr_20815[0] = state_machine__5792__auto__);
(statearr_20815[1] = 1);
return statearr_20815;
});
var state_machine__5792__auto____1 = (function (state_20810){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_20810);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e20816){if((e20816 instanceof Object))
{var ex__5795__auto__ = e20816;var statearr_20817_20819 = state_20810;(statearr_20817_20819[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20810);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20820 = state_20810;
state_20810 = G__20820;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_20810){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_20810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_20818 = f__5862__auto__.call(null);(statearr_20818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_20818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
});
clustermap.api.log_portfolio_company_sites = (function log_portfolio_company_sites(){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_20840){var state_val_20841 = (state_20840[1]);if((state_val_20841 === 2))
{var inst_20837 = (state_20840[2]);var inst_20838 = console.log(inst_20837);var state_20840__$1 = state_20840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20840__$1,inst_20838);
} else
{if((state_val_20841 === 1))
{var inst_20835 = clustermap.api.portfolio_company_sites.call(null);var state_20840__$1 = state_20840;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20840__$1,2,inst_20835);
} else
{return null;
}
}
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_20845 = (new Array(7));(statearr_20845[0] = state_machine__5792__auto__);
(statearr_20845[1] = 1);
return statearr_20845;
});
var state_machine__5792__auto____1 = (function (state_20840){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_20840);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e20846){if((e20846 instanceof Object))
{var ex__5795__auto__ = e20846;var statearr_20847_20849 = state_20840;(statearr_20847_20849[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20840);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20846;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20850 = state_20840;
state_20840 = G__20850;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_20840){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_20840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_20848 = f__5862__auto__.call(null);(statearr_20848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_20848;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
});

//# sourceMappingURL=api.js.map