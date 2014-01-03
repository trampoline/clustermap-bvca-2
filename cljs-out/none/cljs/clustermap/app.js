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
clustermap.app.load_sites = (function load_sites(){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_15226){var state_val_15227 = (state_15226[1]);if((state_val_15227 === 2))
{var inst_15218 = (state_15226[2]);var inst_15219 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"portfolio-company-sites","portfolio-company-sites",4166440041),inst_15218);var inst_15220 = cljs.core.deref.call(null,clustermap.app.state);var inst_15221 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_15220);var inst_15222 = cljs.core.deref.call(null,clustermap.app.state);var inst_15223 = new cljs.core.Keyword(null,"portfolio-company-sites","portfolio-company-sites",4166440041).cljs$core$IFn$_invoke$arity$1(inst_15222);var inst_15224 = clustermap.map.display_sites.call(null,inst_15221,inst_15223);var state_15226__$1 = (function (){var statearr_15228 = state_15226;(statearr_15228[7] = inst_15219);
return statearr_15228;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15226__$1,inst_15224);
} else
{if((state_val_15227 === 1))
{var inst_15216 = clustermap.api.portfolio_company_sites.call(null);var state_15226__$1 = state_15226;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15226__$1,2,inst_15216);
} else
{return null;
}
}
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_15232 = (new Array(8));(statearr_15232[0] = state_machine__5792__auto__);
(statearr_15232[1] = 1);
return statearr_15232;
});
var state_machine__5792__auto____1 = (function (state_15226){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_15226);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e15233){if((e15233 instanceof Object))
{var ex__5795__auto__ = e15233;var statearr_15234_15236 = state_15226;(statearr_15234_15236[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15226);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15233;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15237 = state_15226;
state_15226 = G__15237;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_15226){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_15226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_15235 = f__5862__auto__.call(null);(statearr_15235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_15235;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
});
clustermap.app.init = (function init(){clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"map","map",1014012110),clustermap.map.create_map.call(null));
return clustermap.app.load_sites.call(null);
});

//# sourceMappingURL=app.js.map