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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,null,cljs.core.constant$keyword$192,null,cljs.core.constant$keyword$176,null,cljs.core.constant$keyword$193,"boo"], null));
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clustermap.app.state,(function (s){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,key,value);
}));
});
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19319){var state_val_19320 = (state_19319[1]);if((state_val_19320 === 2))
{var inst_19316 = (state_19319[2]);var inst_19317 = clustermap.app.set_state(cljs.core.constant$keyword$176,inst_19316);var state_19319__$1 = state_19319;return cljs.core.async.impl.ioc_helpers.return_chan(state_19319__$1,inst_19317);
} else
{if((state_val_19320 === 1))
{var inst_19314 = clustermap.api.all_portfolio_companies_summary();var state_19319__$1 = state_19319;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19319__$1,2,inst_19314);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19324 = [null,null,null,null,null,null,null];(statearr_19324[0] = state_machine__5507__auto__);
(statearr_19324[1] = 1);
return statearr_19324;
});
var state_machine__5507__auto____1 = (function (state_19319){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19319);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19325){if((e19325 instanceof Object))
{var ex__5510__auto__ = e19325;var statearr_19326_19328 = state_19319;(statearr_19326_19328[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19319);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e19325;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__19329 = state_19319;
state_19319 = G__19329;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19319){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19327 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19327;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19360){var state_val_19361 = (state_19360[1]);if((state_val_19361 === 2))
{var inst_19352 = (state_19360[2]);var inst_19353 = clustermap.app.set_state(cljs.core.constant$keyword$192,inst_19352);var inst_19354 = cljs.core.deref(clustermap.app.state);var inst_19355 = cljs.core.constant$keyword$194.cljs$core$IFn$_invoke$arity$1(inst_19354);var inst_19356 = cljs.core.deref(clustermap.app.state);var inst_19357 = cljs.core.constant$keyword$192.cljs$core$IFn$_invoke$arity$1(inst_19356);var inst_19358 = clustermap.map.display_sites(inst_19355,inst_19357);var state_19360__$1 = (function (){var statearr_19362 = state_19360;(statearr_19362[7] = inst_19353);
return statearr_19362;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_19360__$1,inst_19358);
} else
{if((state_val_19361 === 1))
{var inst_19350 = clustermap.api.all_portfolio_company_sites();var state_19360__$1 = state_19360;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19360__$1,2,inst_19350);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19366 = [null,null,null,null,null,null,null,null];(statearr_19366[0] = state_machine__5507__auto__);
(statearr_19366[1] = 1);
return statearr_19366;
});
var state_machine__5507__auto____1 = (function (state_19360){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19360);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19367){if((e19367 instanceof Object))
{var ex__5510__auto__ = e19367;var statearr_19368_19370 = state_19360;(statearr_19368_19370[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19360);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e19367;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__19371 = state_19360;
state_19360 = G__19371;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19360){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19369 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19369;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.do_init = (function do_init(){clustermap.app.set_state(cljs.core.constant$keyword$194,clustermap.map.create_map());
clustermap.app.load_all_portfolio_companies_summary();
return clustermap.map_report.mount(clustermap.app.state);
});
clustermap.app.init = (function init(){if(cljs.core.truth_(config.repl))
{return setTimeout(clustermap.app.do_init,2000);
} else
{if(true)
{return clustermap.app.do_init();
} else
{return null;
}
}
});
