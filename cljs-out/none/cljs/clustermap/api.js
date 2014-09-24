// Compiled by ClojureScript 0.0-2322
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
clustermap.api.AJAX = (function() { 
var AJAX__delegate = function (url,p__47830){var map__47834 = p__47830;var map__47834__$1 = ((cljs.core.seq_QMARK_.call(null,map__47834))?cljs.core.apply.call(null,cljs.core.hash_map,map__47834):map__47834);var opts = map__47834__$1;var content = cljs.core.get.call(null,map__47834__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__47834__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__47834__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__47834,map__47834__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__47834,map__47834__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__47834,map__47834__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__47834,map__47834__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__47836 = method;var G__47836__$1 = (((G__47836 == null))?null:cljs.core.name.call(null,G__47836));var G__47836__$2 = (((G__47836__$1 == null))?null:clojure.string.upper_case.call(null,G__47836__$1));return G__47836__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__47830 = null;if (arguments.length > 1) {
  p__47830 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__47830);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__47837){
var url = cljs.core.first(arglist__47837);
var p__47830 = cljs.core.rest(arglist__47837);
return AJAX__delegate(url,p__47830);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__47838){var map__47840 = p__47838;var map__47840__$1 = ((cljs.core.seq_QMARK_.call(null,map__47840))?cljs.core.apply.call(null,cljs.core.hash_map,map__47840):map__47840);var opts = map__47840__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__47838 = null;if (arguments.length > 1) {
  p__47838 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__47838);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__47841){
var url = cljs.core.first(arglist__47841);
var p__47838 = cljs.core.rest(arglist__47841);
return GET__delegate(url,p__47838);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__47842){var map__47844 = p__47842;var map__47844__$1 = ((cljs.core.seq_QMARK_.call(null,map__47844))?cljs.core.apply.call(null,cljs.core.hash_map,map__47844):map__47844);var opts = map__47844__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__47842 = null;if (arguments.length > 2) {
  p__47842 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__47842);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__47845){
var url = cljs.core.first(arglist__47845);
arglist__47845 = cljs.core.next(arglist__47845);
var content = cljs.core.first(arglist__47845);
var p__47842 = cljs.core.rest(arglist__47845);
return POST__delegate(url,content,p__47842);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__47846){var map__47848 = p__47846;var map__47848__$1 = ((cljs.core.seq_QMARK_.call(null,map__47848))?cljs.core.apply.call(null,cljs.core.hash_map,map__47848):map__47848);var opts = map__47848__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__47846 = null;if (arguments.length > 2) {
  p__47846 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__47846);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__47849){
var url = cljs.core.first(arglist__47849);
arglist__47849 = cljs.core.next(arglist__47849);
var content = cljs.core.first(arglist__47849);
var p__47846 = cljs.core.rest(arglist__47849);
return PUT__delegate(url,content,p__47846);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_47984){var state_val_47985 = (state_47984[(1)]);if((state_val_47985 === (7)))
{var inst_47941 = (state_47984[(7)]);var inst_47940 = (state_47984[(2)]);var inst_47941__$1 = cljs.core.nth.call(null,inst_47940,(0),null);var inst_47942 = cljs.core.nth.call(null,inst_47940,(1),null);var inst_47943 = cljs.core.sequential_QMARK_.call(null,inst_47941__$1);var state_47984__$1 = (function (){var statearr_47986 = state_47984;(statearr_47986[(8)] = inst_47942);
(statearr_47986[(7)] = inst_47941__$1);
return statearr_47986;
})();if(inst_47943)
{var statearr_47987_48022 = state_47984__$1;(statearr_47987_48022[(1)] = (8));
} else
{var statearr_47988_48023 = state_47984__$1;(statearr_47988_48023[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47985 === (20)))
{var inst_47941 = (state_47984[(7)]);var state_47984__$1 = state_47984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47984__$1,(23),inst_47941);
} else
{if((state_val_47985 === (1)))
{var state_47984__$1 = state_47984;var statearr_47989_48024 = state_47984__$1;(statearr_47989_48024[(2)] = null);
(statearr_47989_48024[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47985 === (4)))
{var state_47984__$1 = state_47984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47984__$1,(7),ocomm);
} else
{if((state_val_47985 === (15)))
{var inst_47964 = (state_47984[(2)]);var state_47984__$1 = state_47984;var statearr_47990_48025 = state_47984__$1;(statearr_47990_48025[(2)] = inst_47964);
(statearr_47990_48025[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47985 === (21)))
{var state_47984__$1 = state_47984;var statearr_47991_48026 = state_47984__$1;(statearr_47991_48026[(2)] = null);
(statearr_47991_48026[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47985 === (13)))
{var inst_47947 = (state_47984[(9)]);var state_47984__$1 = state_47984;var statearr_47992_48027 = state_47984__$1;(statearr_47992_48027[(2)] = inst_47947);
(statearr_47992_48027[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47985 === (22)))
{var inst_47973 = (state_47984[(2)]);var state_47984__$1 = state_47984;var statearr_47993_48028 = state_47984__$1;(statearr_47993_48028[(2)] = inst_47973);
(statearr_47993_48028[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47985 === (6)))
{var inst_47980 = (state_47984[(2)]);var state_47984__$1 = state_47984;var statearr_47994_48029 = state_47984__$1;(statearr_47994_48029[(2)] = inst_47980);
(statearr_47994_48029[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47985 === (17)))
{var state_47984__$1 = state_47984;var statearr_47995_48030 = state_47984__$1;(statearr_47995_48030[(2)] = null);
(statearr_47995_48030[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47985 === (3)))
{var inst_47982 = (state_47984[(2)]);var state_47984__$1 = state_47984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47984__$1,inst_47982);
} else
{if((state_val_47985 === (12)))
{var inst_47966 = (state_47984[(2)]);var state_47984__$1 = state_47984;var statearr_47996_48031 = state_47984__$1;(statearr_47996_48031[(2)] = inst_47966);
(statearr_47996_48031[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47985 === (2)))
{var state_47984__$1 = state_47984;var statearr_47997_48032 = state_47984__$1;(statearr_47997_48032[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47985 === (23)))
{var inst_47970 = (state_47984[(2)]);var state_47984__$1 = state_47984;var statearr_47999_48033 = state_47984__$1;(statearr_47999_48033[(2)] = inst_47970);
(statearr_47999_48033[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47985 === (19)))
{var inst_47957 = (state_47984[(2)]);var state_47984__$1 = state_47984;var statearr_48000_48034 = state_47984__$1;(statearr_48000_48034[(2)] = inst_47957);
(statearr_48000_48034[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47985 === (11)))
{var inst_47946 = (state_47984[(10)]);var inst_47949 = cljs.core.empty_QMARK_.call(null,inst_47946);var state_47984__$1 = state_47984;if(inst_47949)
{var statearr_48001_48035 = state_47984__$1;(statearr_48001_48035[(1)] = (13));
} else
{var statearr_48002_48036 = state_47984__$1;(statearr_48002_48036[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47985 === (9)))
{var inst_47941 = (state_47984[(7)]);var state_47984__$1 = state_47984;if(cljs.core.truth_(inst_47941))
{var statearr_48003_48037 = state_47984__$1;(statearr_48003_48037[(1)] = (20));
} else
{var statearr_48004_48038 = state_47984__$1;(statearr_48004_48038[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47985 === (5)))
{var state_47984__$1 = state_47984;var statearr_48005_48039 = state_47984__$1;(statearr_48005_48039[(2)] = null);
(statearr_48005_48039[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47985 === (14)))
{var inst_47946 = (state_47984[(10)]);var inst_47952 = cljs.core.rest.call(null,inst_47946);var inst_47953 = cljs.core.first.call(null,inst_47946);var state_47984__$1 = (function (){var statearr_48006 = state_47984;(statearr_48006[(11)] = inst_47952);
return statearr_48006;
})();if(cljs.core.truth_(inst_47953))
{var statearr_48007_48040 = state_47984__$1;(statearr_48007_48040[(1)] = (16));
} else
{var statearr_48008_48041 = state_47984__$1;(statearr_48008_48041[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47985 === (16)))
{var inst_47946 = (state_47984[(10)]);var inst_47955 = cljs.core.first.call(null,inst_47946);var state_47984__$1 = state_47984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47984__$1,(19),inst_47955);
} else
{if((state_val_47985 === (10)))
{var inst_47942 = (state_47984[(8)]);var inst_47975 = (state_47984[(2)]);var inst_47976 = cljs.core.apply.call(null,handler,inst_47975,inst_47942);var state_47984__$1 = (function (){var statearr_48009 = state_47984;(statearr_48009[(12)] = inst_47976);
return statearr_48009;
})();var statearr_48010_48042 = state_47984__$1;(statearr_48010_48042[(2)] = null);
(statearr_48010_48042[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47985 === (18)))
{var inst_47952 = (state_47984[(11)]);var inst_47947 = (state_47984[(9)]);var inst_47960 = (state_47984[(2)]);var inst_47961 = cljs.core.conj.call(null,inst_47947,inst_47960);var inst_47946 = inst_47952;var inst_47947__$1 = inst_47961;var state_47984__$1 = (function (){var statearr_48011 = state_47984;(statearr_48011[(9)] = inst_47947__$1);
(statearr_48011[(10)] = inst_47946);
return statearr_48011;
})();var statearr_48012_48043 = state_47984__$1;(statearr_48012_48043[(2)] = null);
(statearr_48012_48043[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47985 === (8)))
{var inst_47941 = (state_47984[(7)]);var inst_47945 = cljs.core.PersistentVector.EMPTY;var inst_47946 = inst_47941;var inst_47947 = inst_47945;var state_47984__$1 = (function (){var statearr_48013 = state_47984;(statearr_48013[(9)] = inst_47947);
(statearr_48013[(10)] = inst_47946);
return statearr_48013;
})();var statearr_48014_48044 = state_47984__$1;(statearr_48014_48044[(2)] = null);
(statearr_48014_48044[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_48018 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48018[(0)] = state_machine__5694__auto__);
(statearr_48018[(1)] = (1));
return statearr_48018;
});
var state_machine__5694__auto____1 = (function (state_47984){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_47984);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e48019){if((e48019 instanceof Object))
{var ex__5697__auto__ = e48019;var statearr_48020_48045 = state_47984;(statearr_48020_48045[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47984);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e48019;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48046 = state_47984;
state_47984 = G__48046;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_47984){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_47984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_48021 = f__5709__auto__.call(null);(statearr_48021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_48021;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__48049__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__48048 = rseq;var rcomm = cljs.core.nth.call(null,vec__48048,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__48048,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__48049 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__48049__delegate.call(this,req_args);};
G__48049.cljs$lang$maxFixedArity = 0;
G__48049.cljs$lang$applyTo = (function (arglist__48050){
var req_args = cljs.core.seq(arglist__48050);
return G__48049__delegate(req_args);
});
G__48049.cljs$core$IFn$_invoke$arity$variadic = G__48049__delegate;
return G__48049;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,ch){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,ch){
return (function (state_48068){var state_val_48069 = (state_48068[(1)]);if((state_val_48069 === (2)))
{var inst_48065 = (state_48068[(2)]);var inst_48066 = console.log(inst_48065);var state_48068__$1 = state_48068;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48068__$1,inst_48066);
} else
{if((state_val_48069 === (1)))
{var state_48068__$1 = state_48068;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48068__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_48073 = [null,null,null,null,null,null,null];(statearr_48073[(0)] = state_machine__5694__auto__);
(statearr_48073[(1)] = (1));
return statearr_48073;
});
var state_machine__5694__auto____1 = (function (state_48068){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_48068);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e48074){if((e48074 instanceof Object))
{var ex__5697__auto__ = e48074;var statearr_48075_48077 = state_48068;(statearr_48075_48077[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48068);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e48074;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48078 = state_48068;
state_48068 = G__48078;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_48068){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_48068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_48076 = f__5709__auto__.call(null);(statearr_48076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_48076;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,ch))
);
return c__5708__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__48079){
var f = cljs.core.first(arglist__48079);
var args = cljs.core.rest(arglist__48079);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__48082){var vec__48083 = p__48082;var k = cljs.core.nth.call(null,vec__48083,(0),null);var v = cljs.core.nth.call(null,vec__48083,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5708__auto___48110 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___48110,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___48110,r){
return (function (state_48101){var state_val_48102 = (state_48101[(1)]);if((state_val_48102 === (2)))
{var inst_48098 = (state_48101[(2)]);var inst_48099 = cljs.core.reset_BANG_.call(null,r,inst_48098);var state_48101__$1 = state_48101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48101__$1,inst_48099);
} else
{if((state_val_48102 === (1)))
{var state_48101__$1 = state_48101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48101__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___48110,r))
;return ((function (switch__5693__auto__,c__5708__auto___48110,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_48106 = [null,null,null,null,null,null,null];(statearr_48106[(0)] = state_machine__5694__auto__);
(statearr_48106[(1)] = (1));
return statearr_48106;
});
var state_machine__5694__auto____1 = (function (state_48101){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_48101);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e48107){if((e48107 instanceof Object))
{var ex__5697__auto__ = e48107;var statearr_48108_48111 = state_48101;(statearr_48108_48111[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48101);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e48107;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48112 = state_48101;
state_48101 = G__48112;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_48101){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_48101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___48110,r))
})();var state__5710__auto__ = (function (){var statearr_48109 = f__5709__auto__.call(null);(statearr_48109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___48110);
return statearr_48109;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___48110,r))
);
return r;
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundarylines/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__48113){
var id = cljs.core.first(arglist__48113);
arglist__48113 = cljs.core.next(arglist__48113);
var tolerance = cljs.core.first(arglist__48113);
var opts = cljs.core.rest(arglist__48113);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_index = (function() { 
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,id))),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__48114){
var id = cljs.core.first(arglist__48114);
var opts = cljs.core.rest(arglist__48114);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
/**
* fetch a whole set of boundarylines in one api hit
* @param {...*} var_args
*/
clustermap.api.boundaryline_set = (function() { 
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),ids,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__48115){
var ids = cljs.core.first(arglist__48115);
arglist__48115 = cljs.core.next(arglist__48115);
var tolerance = cljs.core.first(arglist__48115);
var opts = cljs.core.rest(arglist__48115);
return boundaryline_set__delegate(ids,tolerance,opts);
});
boundaryline_set.cljs$core$IFn$_invoke$arity$variadic = boundaryline_set__delegate;
return boundaryline_set;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_view = (function() { 
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__48116){var map__48118 = p__48116;var map__48118__$1 = ((cljs.core.seq_QMARK_.call(null,map__48118))?cljs.core.apply.call(null,cljs.core.hash_map,map__48118):map__48118);var opts = map__48118__$1;var boundaryline_ids = cljs.core.get.call(null,map__48118__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__48116 = null;if (arguments.length > 3) {
  p__48116 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__48116);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__48119){
var collection_id = cljs.core.first(arglist__48119);
arglist__48119 = cljs.core.next(arglist__48119);
var tolerance = cljs.core.first(arglist__48119);
arglist__48119 = cljs.core.next(arglist__48119);
var bounds = cljs.core.first(arglist__48119);
var p__48116 = cljs.core.rest(arglist__48119);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__48116);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__48120){var vec__48122 = p__48120;var type_ids = cljs.core.nth.call(null,vec__48122,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__48120 = null;if (arguments.length > 6) {
  p__48120 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__48120);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__48123){
var index = cljs.core.first(arglist__48123);
arglist__48123 = cljs.core.next(arglist__48123);
var type = cljs.core.first(arglist__48123);
arglist__48123 = cljs.core.next(arglist__48123);
var blcoll = cljs.core.first(arglist__48123);
arglist__48123 = cljs.core.next(arglist__48123);
var attr = cljs.core.first(arglist__48123);
arglist__48123 = cljs.core.next(arglist__48123);
var filter = cljs.core.first(arglist__48123);
arglist__48123 = cljs.core.next(arglist__48123);
var bounds = cljs.core.first(arglist__48123);
var p__48120 = cljs.core.rest(arglist__48123);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__48120);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__48124){var vec__48126 = p__48124;var type_ids = cljs.core.nth.call(null,vec__48126,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__48124 = null;if (arguments.length > 5) {
  p__48124 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__48124);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__48127){
var index = cljs.core.first(arglist__48127);
arglist__48127 = cljs.core.next(arglist__48127);
var type = cljs.core.first(arglist__48127);
arglist__48127 = cljs.core.next(arglist__48127);
var statsattrs = cljs.core.first(arglist__48127);
arglist__48127 = cljs.core.next(arglist__48127);
var filter = cljs.core.first(arglist__48127);
arglist__48127 = cljs.core.next(arglist__48127);
var bounds = cljs.core.first(arglist__48127);
var p__48124 = cljs.core.rest(arglist__48127);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__48124);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__48128){var vec__48130 = p__48128;var type_ids = cljs.core.nth.call(null,vec__48130,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__48128 = null;if (arguments.length > 7) {
  p__48128 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__48128);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__48131){
var index = cljs.core.first(arglist__48131);
arglist__48131 = cljs.core.next(arglist__48131);
var type = cljs.core.first(arglist__48131);
arglist__48131 = cljs.core.next(arglist__48131);
var location_attr = cljs.core.first(arglist__48131);
arglist__48131 = cljs.core.next(arglist__48131);
var attrs = cljs.core.first(arglist__48131);
arglist__48131 = cljs.core.next(arglist__48131);
var max_count = cljs.core.first(arglist__48131);
arglist__48131 = cljs.core.next(arglist__48131);
var filter = cljs.core.first(arglist__48131);
arglist__48131 = cljs.core.next(arglist__48131);
var bounds = cljs.core.first(arglist__48131);
var p__48128 = cljs.core.rest(arglist__48131);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__48128);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > (0)))
{return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/constituencies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__48132){var vec__48134 = p__48132;var type_ids = cljs.core.nth.call(null,vec__48134,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__48132 = null;if (arguments.length > 0) {
  p__48132 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__48132);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__48135){
var p__48132 = cljs.core.seq(arglist__48135);
return portfolio_company_sites__delegate(p__48132);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__48136){var vec__48138 = p__48136;var type_ids = cljs.core.nth.call(null,vec__48138,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__48136 = null;if (arguments.length > 0) {
  p__48136 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__48136);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__48139){
var p__48136 = cljs.core.seq(arglist__48139);
return portfolio_company_sites_by_company__delegate(p__48136);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__48140){var vec__48142 = p__48140;var type_ids = cljs.core.nth.call(null,vec__48142,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__48140 = null;if (arguments.length > 0) {
  p__48140 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__48140);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__48143){
var p__48140 = cljs.core.seq(arglist__48143);
return portfolio_company_locations__delegate(p__48140);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__48144){var vec__48146 = p__48144;var type_ids = cljs.core.nth.call(null,vec__48146,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__48144 = null;if (arguments.length > 0) {
  p__48144 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__48144);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__48147){
var p__48144 = cljs.core.seq(arglist__48147);
return portfolio_company_site_stats__delegate(p__48144);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__48148){var vec__48150 = p__48148;var type_ids = cljs.core.nth.call(null,vec__48150,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__48148 = null;if (arguments.length > 0) {
  p__48148 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__48148);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__48151){
var p__48148 = cljs.core.seq(arglist__48151);
return portfolio_company_site_account_timelines__delegate(p__48148);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investor-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__48152){var vec__48154 = p__48152;var type_ids = cljs.core.nth.call(null,vec__48154,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__48152 = null;if (arguments.length > 0) {
  p__48152 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__48152);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__48155){
var p__48152 = cljs.core.seq(arglist__48155);
return investment_account_timelines__delegate(p__48152);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__48156){var vec__48158 = p__48156;var type_ids = cljs.core.nth.call(null,vec__48158,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__48156 = null;if (arguments.length > 0) {
  p__48156 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__48156);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__48159){
var p__48156 = cljs.core.seq(arglist__48159);
return investment_stats__delegate(p__48156);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__48160){var vec__48162 = p__48160;var type_ids = cljs.core.nth.call(null,vec__48162,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__48160 = null;if (arguments.length > 0) {
  p__48160 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__48160);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__48163){
var p__48160 = cljs.core.seq(arglist__48163);
return investment_aggs__delegate(p__48160);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__48164){var vec__48166 = p__48164;var type_ids = cljs.core.nth.call(null,vec__48166,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__48164 = null;if (arguments.length > 0) {
  p__48164 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__48164);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__48167){
var p__48164 = cljs.core.seq(arglist__48167);
return investments__delegate(p__48164);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map