// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__19648){var map__19650 = p__19648;var map__19650__$1 = ((cljs.core.seq_QMARK_(map__19650))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19650):map__19650);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19650__$1,cljs.core.constant$keyword$208);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$189,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__19648 = null;if (arguments.length > 1) {
  p__19648 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__19648);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__19651){
var url = cljs.core.first(arglist__19651);
var p__19648 = cljs.core.rest(arglist__19651);
return GET__delegate(url,p__19648);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19784){var state_val_19785 = (state_19784[1]);if((state_val_19785 === 1))
{var state_19784__$1 = state_19784;var statearr_19786_19822 = state_19784__$1;(statearr_19786_19822[2] = null);
(statearr_19786_19822[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_19785 === 2))
{var state_19784__$1 = state_19784;if(true)
{var statearr_19787_19823 = state_19784__$1;(statearr_19787_19823[1] = 4);
} else
{var statearr_19788_19824 = state_19784__$1;(statearr_19788_19824[1] = 5);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_19785 === 3))
{var inst_19782 = (state_19784[2]);var state_19784__$1 = state_19784;return cljs.core.async.impl.ioc_helpers.return_chan(state_19784__$1,inst_19782);
} else
{if((state_val_19785 === 4))
{var state_19784__$1 = state_19784;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19784__$1,7,ocomm);
} else
{if((state_val_19785 === 5))
{var state_19784__$1 = state_19784;var statearr_19789_19825 = state_19784__$1;(statearr_19789_19825[2] = null);
(statearr_19789_19825[1] = 6);
return cljs.core.constant$keyword$194;
} else
{if((state_val_19785 === 6))
{var inst_19780 = (state_19784[2]);var state_19784__$1 = state_19784;var statearr_19790_19826 = state_19784__$1;(statearr_19790_19826[2] = inst_19780);
(statearr_19790_19826[1] = 3);
return cljs.core.constant$keyword$194;
} else
{if((state_val_19785 === 7))
{var inst_19742 = (state_19784[7]);var inst_19741 = (state_19784[2]);var inst_19742__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19741,0,null);var inst_19743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19741,1,null);var inst_19744 = cljs.core.sequential_QMARK_(inst_19742__$1);var state_19784__$1 = (function (){var statearr_19791 = state_19784;(statearr_19791[7] = inst_19742__$1);
(statearr_19791[8] = inst_19743);
return statearr_19791;
})();if(inst_19744)
{var statearr_19792_19827 = state_19784__$1;(statearr_19792_19827[1] = 8);
} else
{var statearr_19793_19828 = state_19784__$1;(statearr_19793_19828[1] = 9);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_19785 === 8))
{var inst_19742 = (state_19784[7]);var inst_19746 = inst_19742;var inst_19747 = cljs.core.PersistentVector.EMPTY;var state_19784__$1 = (function (){var statearr_19794 = state_19784;(statearr_19794[9] = inst_19747);
(statearr_19794[10] = inst_19746);
return statearr_19794;
})();var statearr_19795_19829 = state_19784__$1;(statearr_19795_19829[2] = null);
(statearr_19795_19829[1] = 11);
return cljs.core.constant$keyword$194;
} else
{if((state_val_19785 === 9))
{var inst_19742 = (state_19784[7]);var state_19784__$1 = state_19784;if(cljs.core.truth_(inst_19742))
{var statearr_19796_19830 = state_19784__$1;(statearr_19796_19830[1] = 20);
} else
{var statearr_19797_19831 = state_19784__$1;(statearr_19797_19831[1] = 21);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_19785 === 10))
{var inst_19743 = (state_19784[8]);var inst_19775 = (state_19784[2]);var inst_19776 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_19775,inst_19743);var state_19784__$1 = (function (){var statearr_19798 = state_19784;(statearr_19798[11] = inst_19776);
return statearr_19798;
})();var statearr_19799_19832 = state_19784__$1;(statearr_19799_19832[2] = null);
(statearr_19799_19832[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_19785 === 11))
{var inst_19746 = (state_19784[10]);var inst_19749 = cljs.core.empty_QMARK_(inst_19746);var state_19784__$1 = state_19784;if(inst_19749)
{var statearr_19800_19833 = state_19784__$1;(statearr_19800_19833[1] = 13);
} else
{var statearr_19801_19834 = state_19784__$1;(statearr_19801_19834[1] = 14);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_19785 === 12))
{var inst_19766 = (state_19784[2]);var state_19784__$1 = state_19784;var statearr_19802_19835 = state_19784__$1;(statearr_19802_19835[2] = inst_19766);
(statearr_19802_19835[1] = 10);
return cljs.core.constant$keyword$194;
} else
{if((state_val_19785 === 13))
{var inst_19747 = (state_19784[9]);var state_19784__$1 = state_19784;var statearr_19803_19836 = state_19784__$1;(statearr_19803_19836[2] = inst_19747);
(statearr_19803_19836[1] = 15);
return cljs.core.constant$keyword$194;
} else
{if((state_val_19785 === 14))
{var inst_19746 = (state_19784[10]);var inst_19752 = cljs.core.rest(inst_19746);var inst_19753 = cljs.core.first(inst_19746);var state_19784__$1 = (function (){var statearr_19804 = state_19784;(statearr_19804[12] = inst_19752);
return statearr_19804;
})();if(cljs.core.truth_(inst_19753))
{var statearr_19805_19837 = state_19784__$1;(statearr_19805_19837[1] = 16);
} else
{var statearr_19806_19838 = state_19784__$1;(statearr_19806_19838[1] = 17);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_19785 === 15))
{var inst_19764 = (state_19784[2]);var state_19784__$1 = state_19784;var statearr_19807_19839 = state_19784__$1;(statearr_19807_19839[2] = inst_19764);
(statearr_19807_19839[1] = 12);
return cljs.core.constant$keyword$194;
} else
{if((state_val_19785 === 16))
{var inst_19746 = (state_19784[10]);var inst_19755 = cljs.core.first(inst_19746);var state_19784__$1 = state_19784;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19784__$1,19,inst_19755);
} else
{if((state_val_19785 === 17))
{var state_19784__$1 = state_19784;var statearr_19808_19840 = state_19784__$1;(statearr_19808_19840[2] = null);
(statearr_19808_19840[1] = 18);
return cljs.core.constant$keyword$194;
} else
{if((state_val_19785 === 18))
{var inst_19747 = (state_19784[9]);var inst_19752 = (state_19784[12]);var inst_19760 = (state_19784[2]);var inst_19761 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19747,inst_19760);var inst_19746 = inst_19752;var inst_19747__$1 = inst_19761;var state_19784__$1 = (function (){var statearr_19809 = state_19784;(statearr_19809[9] = inst_19747__$1);
(statearr_19809[10] = inst_19746);
return statearr_19809;
})();var statearr_19810_19841 = state_19784__$1;(statearr_19810_19841[2] = null);
(statearr_19810_19841[1] = 11);
return cljs.core.constant$keyword$194;
} else
{if((state_val_19785 === 19))
{var inst_19757 = (state_19784[2]);var state_19784__$1 = state_19784;var statearr_19811_19842 = state_19784__$1;(statearr_19811_19842[2] = inst_19757);
(statearr_19811_19842[1] = 18);
return cljs.core.constant$keyword$194;
} else
{if((state_val_19785 === 20))
{var inst_19742 = (state_19784[7]);var state_19784__$1 = state_19784;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19784__$1,23,inst_19742);
} else
{if((state_val_19785 === 21))
{var state_19784__$1 = state_19784;var statearr_19812_19843 = state_19784__$1;(statearr_19812_19843[2] = null);
(statearr_19812_19843[1] = 22);
return cljs.core.constant$keyword$194;
} else
{if((state_val_19785 === 22))
{var inst_19773 = (state_19784[2]);var state_19784__$1 = state_19784;var statearr_19813_19844 = state_19784__$1;(statearr_19813_19844[2] = inst_19773);
(statearr_19813_19844[1] = 10);
return cljs.core.constant$keyword$194;
} else
{if((state_val_19785 === 23))
{var inst_19770 = (state_19784[2]);var state_19784__$1 = state_19784;var statearr_19814_19845 = state_19784__$1;(statearr_19814_19845[2] = inst_19770);
(statearr_19814_19845[1] = 22);
return cljs.core.constant$keyword$194;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19818 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19818[0] = state_machine__5507__auto__);
(statearr_19818[1] = 1);
return statearr_19818;
});
var state_machine__5507__auto____1 = (function (state_19784){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19784);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19819){if((e19819 instanceof Object))
{var ex__5510__auto__ = e19819;var statearr_19820_19846 = state_19784;(statearr_19820_19846[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19784);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e19819;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__19847 = state_19784;
state_19784 = G__19847;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19784){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19821 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(1));var _ = clustermap.api.ordered_api_results(ocomm,result_handler);return (function() { 
var G__19850__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__19849 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19849,0,null);var result_handler_args = cljs.core.nthnext(vec__19849,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__19850 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19850__delegate.call(this,req_args);};
G__19850.cljs$lang$maxFixedArity = 0;
G__19850.cljs$lang$applyTo = (function (arglist__19851){
var req_args = cljs.core.seq(arglist__19851);
return G__19850__delegate(req_args);
});
G__19850.cljs$core$IFn$_invoke$arity$variadic = G__19850__delegate;
return G__19850;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19869){var state_val_19870 = (state_19869[1]);if((state_val_19870 === 2))
{var inst_19866 = (state_19869[2]);var inst_19867 = console.log(inst_19866);var state_19869__$1 = state_19869;return cljs.core.async.impl.ioc_helpers.return_chan(state_19869__$1,inst_19867);
} else
{if((state_val_19870 === 1))
{var state_19869__$1 = state_19869;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19869__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19874 = [null,null,null,null,null,null,null];(statearr_19874[0] = state_machine__5507__auto__);
(statearr_19874[1] = 1);
return statearr_19874;
});
var state_machine__5507__auto____1 = (function (state_19869){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19869);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19875){if((e19875 instanceof Object))
{var ex__5510__auto__ = e19875;var statearr_19876_19878 = state_19869;(statearr_19876_19878[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19869);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e19875;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__19879 = state_19869;
state_19869 = G__19879;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19869){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19877 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__19880){
var f = cljs.core.first(arglist__19880);
var args = cljs.core.rest(arglist__19880);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19883){var vec__19884 = p__19883;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19884,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19884,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
}),m));
});
clustermap.api.api_prefix = config.api.prefix;
clustermap.api.search = (function search(q){if((cljs.core.count(clojure.string.trim(q)) > 0))
{return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituencies = (function constituencies(){return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies"], 0));
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/constituencies/"),cljs.core.str(id)].join(''));
});
clustermap.api.portfolio_companies_summary = (function portfolio_companies_summary(){return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/portfolio-companies-summary"], 0));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__19885){var vec__19887 = p__19885;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19887,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__19885 = null;if (arguments.length > 0) {
  p__19885 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__19885);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__19888){
var p__19885 = cljs.core.seq(arglist__19888);
return portfolio_company_sites__delegate(p__19885);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__19889){var vec__19891 = p__19889;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19891,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__19889 = null;if (arguments.length > 0) {
  p__19889 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__19889);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__19892){
var p__19889 = cljs.core.seq(arglist__19892);
return portfolio_company_locations__delegate(p__19889);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__19893){var vec__19895 = p__19893;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19895,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__19893 = null;if (arguments.length > 0) {
  p__19893 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__19893);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__19896){
var p__19893 = cljs.core.seq(arglist__19896);
return portfolio_company_stats__delegate(p__19893);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__19897){var vec__19899 = p__19897;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19899,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__19897 = null;if (arguments.length > 0) {
  p__19897 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__19897);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__19900){
var p__19897 = cljs.core.seq(arglist__19900);
return portfolio_company_site_stats__delegate(p__19897);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__19901){var vec__19903 = p__19901;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19903,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__19901 = null;if (arguments.length > 0) {
  p__19901 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__19901);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__19904){
var p__19901 = cljs.core.seq(arglist__19904);
return portfolio_company_site_account_timelines__delegate(p__19901);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__19905){var vec__19907 = p__19905;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19907,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__19905 = null;if (arguments.length > 0) {
  p__19905 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__19905);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__19908){
var p__19905 = cljs.core.seq(arglist__19908);
return portfolio_company_account_stats__delegate(p__19905);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
clustermap.api.investor_companies_summary = (function investor_companies_summary(){return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/investor-companies-summary"], 0));
});
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_index = (function() { 
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,[cljs.core.str("/api/boundaryline-collection-index/"),cljs.core.str(id)].join(''),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__19909){
var id = cljs.core.first(arglist__19909);
var opts = cljs.core.rest(arglist__19909);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,[cljs.core.str("/api/boundarylines/"),cljs.core.str(id),cljs.core.str("/"),cljs.core.str(tolerance)].join(''),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__19910){
var id = cljs.core.first(arglist__19910);
arglist__19910 = cljs.core.next(arglist__19910);
var tolerance = cljs.core.first(arglist__19910);
var opts = cljs.core.rest(arglist__19910);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
