// Compiled by ClojureScript 0.0-2080
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('purnam.cljs');
goog.require('clustermap.map');
goog.require('clustermap.map');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('purnam.cljs');
goog.require('purnam.cljs');
clustermap.app.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return cljs.core.assoc.call(null,s,key,value);
}));
});
clustermap.app.load_sites = (function load_sites(){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_44776){var state_val_44777 = (state_44776[1]);if((state_val_44777 === 2))
{var inst_44768 = (state_44776[2]);var inst_44769 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"portfolio-company-sites","portfolio-company-sites",4166440041),inst_44768);var inst_44770 = cljs.core.deref.call(null,clustermap.app.state);var inst_44771 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_44770);var inst_44772 = cljs.core.deref.call(null,clustermap.app.state);var inst_44773 = new cljs.core.Keyword(null,"portfolio-company-sites","portfolio-company-sites",4166440041).cljs$core$IFn$_invoke$arity$1(inst_44772);var inst_44774 = clustermap.map.display_sites.call(null,inst_44771,inst_44773);var state_44776__$1 = (function (){var statearr_44778 = state_44776;(statearr_44778[7] = inst_44769);
return statearr_44778;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44776__$1,inst_44774);
} else
{if((state_val_44777 === 1))
{var inst_44766 = clustermap.api.portfolio_company_sites.call(null);var state_44776__$1 = state_44776;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44776__$1,2,inst_44766);
} else
{return null;
}
}
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_44782 = (new Array(8));(statearr_44782[0] = state_machine__5792__auto__);
(statearr_44782[1] = 1);
return statearr_44782;
});
var state_machine__5792__auto____1 = (function (state_44776){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_44776);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e44783){if((e44783 instanceof Object))
{var ex__5795__auto__ = e44783;var statearr_44784_44786 = state_44776;(statearr_44784_44786[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44776);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44783;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44787 = state_44776;
state_44776 = G__44787;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_44776){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_44776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_44785 = f__5862__auto__.call(null);(statearr_44785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_44785;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
});
clustermap.app.init = (function init(){clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"map","map",1014012110),clustermap.map.create_map.call(null));
return clustermap.app.load_sites.call(null);
});
