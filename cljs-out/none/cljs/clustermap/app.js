// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.map_report');
goog.require('clustermap.map');
goog.require('clustermap.map');
goog.require('om.core');
goog.require('clustermap.map_report');
goog.require('om.dom');
goog.require('cljs.core.async');
clustermap.app.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),null,new cljs.core.Keyword(null,"value","value",1125876963),null], null),new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"message","message",1968829305),"boo"], null));
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return cljs.core.assoc.call(null,s,key,value);
}));
});
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15627){var state_val_15628 = (state_15627[1]);if((state_val_15628 === 2))
{var inst_15624 = (state_15627[2]);var inst_15625 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),inst_15624);var state_15627__$1 = state_15627;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15627__$1,inst_15625);
} else
{if((state_val_15628 === 1))
{var inst_15622 = clustermap.api.all_portfolio_companies_summary.call(null);var state_15627__$1 = state_15627;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15627__$1,2,inst_15622);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15632 = [null,null,null,null,null,null,null];(statearr_15632[0] = state_machine__5507__auto__);
(statearr_15632[1] = 1);
return statearr_15632;
});
var state_machine__5507__auto____1 = (function (state_15627){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15627);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15633){if((e15633 instanceof Object))
{var ex__5510__auto__ = e15633;var statearr_15634_15636 = state_15627;(statearr_15634_15636[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15627);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15633;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15637 = state_15627;
state_15627 = G__15637;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15627){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15635 = f__5522__auto__.call(null);(statearr_15635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_15635;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15668){var state_val_15669 = (state_15668[1]);if((state_val_15669 === 2))
{var inst_15660 = (state_15668[2]);var inst_15661 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),inst_15660);var inst_15662 = cljs.core.deref.call(null,clustermap.app.state);var inst_15663 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_15662);var inst_15664 = cljs.core.deref.call(null,clustermap.app.state);var inst_15665 = new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797).cljs$core$IFn$_invoke$arity$1(inst_15664);var inst_15666 = clustermap.map.display_sites.call(null,inst_15663,inst_15665);var state_15668__$1 = (function (){var statearr_15670 = state_15668;(statearr_15670[7] = inst_15661);
return statearr_15670;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15668__$1,inst_15666);
} else
{if((state_val_15669 === 1))
{var inst_15658 = clustermap.api.all_portfolio_company_sites.call(null);var state_15668__$1 = state_15668;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15668__$1,2,inst_15658);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15674 = [null,null,null,null,null,null,null,null];(statearr_15674[0] = state_machine__5507__auto__);
(statearr_15674[1] = 1);
return statearr_15674;
});
var state_machine__5507__auto____1 = (function (state_15668){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15668);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15675){if((e15675 instanceof Object))
{var ex__5510__auto__ = e15675;var statearr_15676_15678 = state_15668;(statearr_15676_15678[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15668);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15675;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15679 = state_15668;
state_15668 = G__15679;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15668){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15677 = f__5522__auto__.call(null);(statearr_15677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_15677;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.do_init = (function do_init(){clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"map","map",1014012110),clustermap.map.create_map.call(null));
clustermap.app.load_all_portfolio_company_sites.call(null);
return clustermap.map_report.mount.call(null,clustermap.app.state);
});
clustermap.app.init = (function init(){if(cljs.core.truth_(config.repl))
{return setTimeout(clustermap.app.do_init,1000);
} else
{if(true)
{return clustermap.app.do_init.call(null);
} else
{return null;
}
}
});

//# sourceMappingURL=app.js.map