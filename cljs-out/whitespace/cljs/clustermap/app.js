// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.map');
goog.require('clustermap.map');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
clustermap.app.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return cljs.core.assoc.call(null,s,key,value);
}));
});
clustermap.app.load_sites = (function load_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24621){var state_val_24622 = (state_24621[1]);if((state_val_24622 === 2))
{var inst_24613 = (state_24621[2]);var inst_24614 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"portfolio-company-sites","portfolio-company-sites",4166440041),inst_24613);var inst_24615 = cljs.core.deref.call(null,clustermap.app.state);var inst_24616 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_24615);var inst_24617 = cljs.core.deref.call(null,clustermap.app.state);var inst_24618 = new cljs.core.Keyword(null,"portfolio-company-sites","portfolio-company-sites",4166440041).cljs$core$IFn$_invoke$arity$1(inst_24617);var inst_24619 = clustermap.map.display_sites.call(null,inst_24616,inst_24618);var state_24621__$1 = (function (){var statearr_24623 = state_24621;(statearr_24623[7] = inst_24614);
return statearr_24623;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24621__$1,inst_24619);
} else
{if((state_val_24622 === 1))
{var inst_24611 = clustermap.api.portfolio_company_sites.call(null);var state_24621__$1 = state_24621;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24621__$1,2,inst_24611);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_24627 = [null,null,null,null,null,null,null,null];(statearr_24627[0] = state_machine__5507__auto__);
(statearr_24627[1] = 1);
return statearr_24627;
});
var state_machine__5507__auto____1 = (function (state_24621){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_24621);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24628){if((e24628 instanceof Object))
{var ex__5510__auto__ = e24628;var statearr_24629_24631 = state_24621;(statearr_24629_24631[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24621);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24628;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24632 = state_24621;
state_24621 = G__24632;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24621){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24630 = f__5522__auto__.call(null);(statearr_24630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24630;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.init = (function init(){return setTimeout((function (){clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"map","map",1014012110),clustermap.map.create_map.call(null));
return clustermap.app.load_sites.call(null);
}),1000);
});
