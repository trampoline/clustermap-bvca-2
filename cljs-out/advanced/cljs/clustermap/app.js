// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.map');
goog.require('clustermap.map');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clustermap.app.state,(function (s){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,key,value);
}));
});
clustermap.app.load_sites = (function load_sites(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16718){var state_val_16719 = (state_16718[1]);if((state_val_16719 === 2))
{var inst_16710 = (state_16718[2]);var inst_16711 = clustermap.app.set_state(cljs.core.constant$keyword$106,inst_16710);var inst_16712 = cljs.core.deref(clustermap.app.state);var inst_16713 = cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(inst_16712);var inst_16714 = cljs.core.deref(clustermap.app.state);var inst_16715 = cljs.core.constant$keyword$106.cljs$core$IFn$_invoke$arity$1(inst_16714);var inst_16716 = clustermap.map.display_sites(inst_16713,inst_16715);var state_16718__$1 = (function (){var statearr_16720 = state_16718;(statearr_16720[7] = inst_16711);
return statearr_16720;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_16718__$1,inst_16716);
} else
{if((state_val_16719 === 1))
{var inst_16708 = clustermap.api.portfolio_company_sites();var state_16718__$1 = state_16718;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16718__$1,2,inst_16708);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_16724 = [null,null,null,null,null,null,null,null];(statearr_16724[0] = state_machine__5507__auto__);
(statearr_16724[1] = 1);
return statearr_16724;
});
var state_machine__5507__auto____1 = (function (state_16718){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_16718);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16725){if((e16725 instanceof Object))
{var ex__5510__auto__ = e16725;var statearr_16726_16728 = state_16718;(statearr_16726_16728[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16718);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e16725;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__16729 = state_16718;
state_16718 = G__16729;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16718){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16727 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_16727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_16727;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.init = (function init(){return setTimeout((function (){clustermap.app.set_state(cljs.core.constant$keyword$107,clustermap.map.create_map());
return clustermap.app.load_sites();
}),1000);
});
