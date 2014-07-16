// Compiled by ClojureScript 0.0-2261
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
var AJAX__delegate = function (url,p__21809){var map__21813 = p__21809;var map__21813__$1 = ((cljs.core.seq_QMARK_.call(null,map__21813))?cljs.core.apply.call(null,cljs.core.hash_map,map__21813):map__21813);var content = cljs.core.get.call(null,map__21813__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__21813__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__21813__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__21813,map__21813__$1,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__21813,map__21813__$1,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__21813,map__21813__$1,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__21813,map__21813__$1,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__21815 = method;var G__21815__$1 = (((G__21815 == null))?null:cljs.core.name.call(null,G__21815));var G__21815__$2 = (((G__21815__$1 == null))?null:clojure.string.upper_case.call(null,G__21815__$1));return G__21815__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__21809 = null;if (arguments.length > 1) {
  p__21809 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__21809);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__21816){
var url = cljs.core.first(arglist__21816);
var p__21809 = cljs.core.rest(arglist__21816);
return AJAX__delegate(url,p__21809);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__21817){var map__21819 = p__21817;var map__21819__$1 = ((cljs.core.seq_QMARK_.call(null,map__21819))?cljs.core.apply.call(null,cljs.core.hash_map,map__21819):map__21819);var opts = map__21819__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__21817 = null;if (arguments.length > 1) {
  p__21817 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__21817);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__21820){
var url = cljs.core.first(arglist__21820);
var p__21817 = cljs.core.rest(arglist__21820);
return GET__delegate(url,p__21817);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__21821){var map__21823 = p__21821;var map__21823__$1 = ((cljs.core.seq_QMARK_.call(null,map__21823))?cljs.core.apply.call(null,cljs.core.hash_map,map__21823):map__21823);var opts = map__21823__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__21821 = null;if (arguments.length > 2) {
  p__21821 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__21821);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__21824){
var url = cljs.core.first(arglist__21824);
arglist__21824 = cljs.core.next(arglist__21824);
var content = cljs.core.first(arglist__21824);
var p__21821 = cljs.core.rest(arglist__21824);
return POST__delegate(url,content,p__21821);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__21825){var map__21827 = p__21825;var map__21827__$1 = ((cljs.core.seq_QMARK_.call(null,map__21827))?cljs.core.apply.call(null,cljs.core.hash_map,map__21827):map__21827);var opts = map__21827__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__21825 = null;if (arguments.length > 2) {
  p__21825 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__21825);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__21828){
var url = cljs.core.first(arglist__21828);
arglist__21828 = cljs.core.next(arglist__21828);
var content = cljs.core.first(arglist__21828);
var p__21825 = cljs.core.rest(arglist__21828);
return PUT__delegate(url,content,p__21825);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_21961){var state_val_21962 = (state_21961[(1)]);if((state_val_21962 === (7)))
{var inst_21919 = (state_21961[(7)]);var inst_21918 = (state_21961[(2)]);var inst_21919__$1 = cljs.core.nth.call(null,inst_21918,(0),null);var inst_21920 = cljs.core.nth.call(null,inst_21918,(1),null);var inst_21921 = cljs.core.sequential_QMARK_.call(null,inst_21919__$1);var state_21961__$1 = (function (){var statearr_21963 = state_21961;(statearr_21963[(8)] = inst_21920);
(statearr_21963[(7)] = inst_21919__$1);
return statearr_21963;
})();if(inst_21921)
{var statearr_21964_21999 = state_21961__$1;(statearr_21964_21999[(1)] = (8));
} else
{var statearr_21965_22000 = state_21961__$1;(statearr_21965_22000[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (20)))
{var inst_21919 = (state_21961[(7)]);var state_21961__$1 = state_21961;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21961__$1,(23),inst_21919);
} else
{if((state_val_21962 === (1)))
{var state_21961__$1 = state_21961;var statearr_21966_22001 = state_21961__$1;(statearr_21966_22001[(2)] = null);
(statearr_21966_22001[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (4)))
{var state_21961__$1 = state_21961;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21961__$1,(7),ocomm);
} else
{if((state_val_21962 === (15)))
{var inst_21941 = (state_21961[(2)]);var state_21961__$1 = state_21961;var statearr_21967_22002 = state_21961__$1;(statearr_21967_22002[(2)] = inst_21941);
(statearr_21967_22002[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (21)))
{var state_21961__$1 = state_21961;var statearr_21968_22003 = state_21961__$1;(statearr_21968_22003[(2)] = null);
(statearr_21968_22003[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (13)))
{var inst_21924 = (state_21961[(9)]);var state_21961__$1 = state_21961;var statearr_21969_22004 = state_21961__$1;(statearr_21969_22004[(2)] = inst_21924);
(statearr_21969_22004[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (22)))
{var inst_21950 = (state_21961[(2)]);var state_21961__$1 = state_21961;var statearr_21970_22005 = state_21961__$1;(statearr_21970_22005[(2)] = inst_21950);
(statearr_21970_22005[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (6)))
{var inst_21957 = (state_21961[(2)]);var state_21961__$1 = state_21961;var statearr_21971_22006 = state_21961__$1;(statearr_21971_22006[(2)] = inst_21957);
(statearr_21971_22006[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (17)))
{var state_21961__$1 = state_21961;var statearr_21972_22007 = state_21961__$1;(statearr_21972_22007[(2)] = null);
(statearr_21972_22007[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (3)))
{var inst_21959 = (state_21961[(2)]);var state_21961__$1 = state_21961;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21961__$1,inst_21959);
} else
{if((state_val_21962 === (12)))
{var inst_21943 = (state_21961[(2)]);var state_21961__$1 = state_21961;var statearr_21973_22008 = state_21961__$1;(statearr_21973_22008[(2)] = inst_21943);
(statearr_21973_22008[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (2)))
{var state_21961__$1 = state_21961;if(true)
{var statearr_21974_22009 = state_21961__$1;(statearr_21974_22009[(1)] = (4));
} else
{var statearr_21975_22010 = state_21961__$1;(statearr_21975_22010[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (23)))
{var inst_21947 = (state_21961[(2)]);var state_21961__$1 = state_21961;var statearr_21976_22011 = state_21961__$1;(statearr_21976_22011[(2)] = inst_21947);
(statearr_21976_22011[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (19)))
{var inst_21934 = (state_21961[(2)]);var state_21961__$1 = state_21961;var statearr_21977_22012 = state_21961__$1;(statearr_21977_22012[(2)] = inst_21934);
(statearr_21977_22012[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (11)))
{var inst_21923 = (state_21961[(10)]);var inst_21926 = cljs.core.empty_QMARK_.call(null,inst_21923);var state_21961__$1 = state_21961;if(inst_21926)
{var statearr_21978_22013 = state_21961__$1;(statearr_21978_22013[(1)] = (13));
} else
{var statearr_21979_22014 = state_21961__$1;(statearr_21979_22014[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (9)))
{var inst_21919 = (state_21961[(7)]);var state_21961__$1 = state_21961;if(cljs.core.truth_(inst_21919))
{var statearr_21980_22015 = state_21961__$1;(statearr_21980_22015[(1)] = (20));
} else
{var statearr_21981_22016 = state_21961__$1;(statearr_21981_22016[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (5)))
{var state_21961__$1 = state_21961;var statearr_21982_22017 = state_21961__$1;(statearr_21982_22017[(2)] = null);
(statearr_21982_22017[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (14)))
{var inst_21923 = (state_21961[(10)]);var inst_21929 = cljs.core.rest.call(null,inst_21923);var inst_21930 = cljs.core.first.call(null,inst_21923);var state_21961__$1 = (function (){var statearr_21983 = state_21961;(statearr_21983[(11)] = inst_21929);
return statearr_21983;
})();if(cljs.core.truth_(inst_21930))
{var statearr_21984_22018 = state_21961__$1;(statearr_21984_22018[(1)] = (16));
} else
{var statearr_21985_22019 = state_21961__$1;(statearr_21985_22019[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (16)))
{var inst_21923 = (state_21961[(10)]);var inst_21932 = cljs.core.first.call(null,inst_21923);var state_21961__$1 = state_21961;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21961__$1,(19),inst_21932);
} else
{if((state_val_21962 === (10)))
{var inst_21920 = (state_21961[(8)]);var inst_21952 = (state_21961[(2)]);var inst_21953 = cljs.core.apply.call(null,handler,inst_21952,inst_21920);var state_21961__$1 = (function (){var statearr_21986 = state_21961;(statearr_21986[(12)] = inst_21953);
return statearr_21986;
})();var statearr_21987_22020 = state_21961__$1;(statearr_21987_22020[(2)] = null);
(statearr_21987_22020[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (18)))
{var inst_21924 = (state_21961[(9)]);var inst_21929 = (state_21961[(11)]);var inst_21937 = (state_21961[(2)]);var inst_21938 = cljs.core.conj.call(null,inst_21924,inst_21937);var inst_21923 = inst_21929;var inst_21924__$1 = inst_21938;var state_21961__$1 = (function (){var statearr_21988 = state_21961;(statearr_21988[(9)] = inst_21924__$1);
(statearr_21988[(10)] = inst_21923);
return statearr_21988;
})();var statearr_21989_22021 = state_21961__$1;(statearr_21989_22021[(2)] = null);
(statearr_21989_22021[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (8)))
{var inst_21919 = (state_21961[(7)]);var inst_21923 = inst_21919;var inst_21924 = cljs.core.PersistentVector.EMPTY;var state_21961__$1 = (function (){var statearr_21990 = state_21961;(statearr_21990[(9)] = inst_21924);
(statearr_21990[(10)] = inst_21923);
return statearr_21990;
})();var statearr_21991_22022 = state_21961__$1;(statearr_21991_22022[(2)] = null);
(statearr_21991_22022[(1)] = (11));
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_21995 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21995[(0)] = state_machine__5679__auto__);
(statearr_21995[(1)] = (1));
return statearr_21995;
});
var state_machine__5679__auto____1 = (function (state_21961){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_21961);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e21996){if((e21996 instanceof Object))
{var ex__5682__auto__ = e21996;var statearr_21997_22023 = state_21961;(statearr_21997_22023[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21961);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22024 = state_21961;
state_21961 = G__22024;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_21961){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_21961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_21998 = f__5694__auto__.call(null);(statearr_21998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_21998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var G__22027__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__22026 = rseq;var rcomm = cljs.core.nth.call(null,vec__22026,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__22026,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__22027 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22027__delegate.call(this,req_args);};
G__22027.cljs$lang$maxFixedArity = 0;
G__22027.cljs$lang$applyTo = (function (arglist__22028){
var req_args = cljs.core.seq(arglist__22028);
return G__22027__delegate(req_args);
});
G__22027.cljs$core$IFn$_invoke$arity$variadic = G__22027__delegate;
return G__22027;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,ch){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,ch){
return (function (state_22046){var state_val_22047 = (state_22046[(1)]);if((state_val_22047 === (2)))
{var inst_22043 = (state_22046[(2)]);var inst_22044 = console.log(inst_22043);var state_22046__$1 = state_22046;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22046__$1,inst_22044);
} else
{if((state_val_22047 === (1)))
{var state_22046__$1 = state_22046;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22046__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_22051 = [null,null,null,null,null,null,null];(statearr_22051[(0)] = state_machine__5679__auto__);
(statearr_22051[(1)] = (1));
return statearr_22051;
});
var state_machine__5679__auto____1 = (function (state_22046){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_22046);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e22052){if((e22052 instanceof Object))
{var ex__5682__auto__ = e22052;var statearr_22053_22055 = state_22046;(statearr_22053_22055[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22046);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22052;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22056 = state_22046;
state_22046 = G__22056;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_22046){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_22046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_22054 = f__5694__auto__.call(null);(statearr_22054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_22054;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,ch))
);
return c__5693__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__22057){
var f = cljs.core.first(arglist__22057);
var args = cljs.core.rest(arglist__22057);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__22060){var vec__22061 = p__22060;var k = cljs.core.nth.call(null,vec__22061,(0),null);var v = cljs.core.nth.call(null,vec__22061,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___22088 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___22088,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___22088,r){
return (function (state_22079){var state_val_22080 = (state_22079[(1)]);if((state_val_22080 === (2)))
{var inst_22076 = (state_22079[(2)]);var inst_22077 = cljs.core.reset_BANG_.call(null,r,inst_22076);var state_22079__$1 = state_22079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22079__$1,inst_22077);
} else
{if((state_val_22080 === (1)))
{var state_22079__$1 = state_22079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22079__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___22088,r))
;return ((function (switch__5678__auto__,c__5693__auto___22088,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_22084 = [null,null,null,null,null,null,null];(statearr_22084[(0)] = state_machine__5679__auto__);
(statearr_22084[(1)] = (1));
return statearr_22084;
});
var state_machine__5679__auto____1 = (function (state_22079){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_22079);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e22085){if((e22085 instanceof Object))
{var ex__5682__auto__ = e22085;var statearr_22086_22089 = state_22079;(statearr_22086_22089[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22079);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22085;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22090 = state_22079;
state_22079 = G__22090;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_22079){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_22079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___22088,r))
})();var state__5695__auto__ = (function (){var statearr_22087 = f__5694__auto__.call(null);(statearr_22087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___22088);
return statearr_22087;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___22088,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__22091){
var id = cljs.core.first(arglist__22091);
arglist__22091 = cljs.core.next(arglist__22091);
var tolerance = cljs.core.first(arglist__22091);
var opts = cljs.core.rest(arglist__22091);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__22092){
var id = cljs.core.first(arglist__22092);
var opts = cljs.core.rest(arglist__22092);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,p__22093){var vec__22095 = p__22093;var type_ids = cljs.core.nth.call(null,vec__22095,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,var_args){
var p__22093 = null;if (arguments.length > 5) {
  p__22093 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,p__22093);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 5;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__22096){
var index = cljs.core.first(arglist__22096);
arglist__22096 = cljs.core.next(arglist__22096);
var type = cljs.core.first(arglist__22096);
arglist__22096 = cljs.core.next(arglist__22096);
var blcoll = cljs.core.first(arglist__22096);
arglist__22096 = cljs.core.next(arglist__22096);
var attr = cljs.core.first(arglist__22096);
arglist__22096 = cljs.core.next(arglist__22096);
var filter = cljs.core.first(arglist__22096);
var p__22093 = cljs.core.rest(arglist__22096);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,p__22093);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
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
var portfolio_company_sites__delegate = function (p__22097){var vec__22099 = p__22097;var type_ids = cljs.core.nth.call(null,vec__22099,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__22097 = null;if (arguments.length > 0) {
  p__22097 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__22097);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__22100){
var p__22097 = cljs.core.seq(arglist__22100);
return portfolio_company_sites__delegate(p__22097);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__22101){var vec__22103 = p__22101;var type_ids = cljs.core.nth.call(null,vec__22103,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__22101 = null;if (arguments.length > 0) {
  p__22101 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__22101);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__22104){
var p__22101 = cljs.core.seq(arglist__22104);
return portfolio_company_sites_by_company__delegate(p__22101);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__22105){var vec__22107 = p__22105;var type_ids = cljs.core.nth.call(null,vec__22107,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__22105 = null;if (arguments.length > 0) {
  p__22105 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__22105);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__22108){
var p__22105 = cljs.core.seq(arglist__22108);
return portfolio_company_locations__delegate(p__22105);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__22109){var vec__22111 = p__22109;var type_ids = cljs.core.nth.call(null,vec__22111,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__22109 = null;if (arguments.length > 0) {
  p__22109 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__22109);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__22112){
var p__22109 = cljs.core.seq(arglist__22112);
return portfolio_company_site_stats__delegate(p__22109);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__22113){var vec__22115 = p__22113;var type_ids = cljs.core.nth.call(null,vec__22115,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__22113 = null;if (arguments.length > 0) {
  p__22113 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__22113);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__22116){
var p__22113 = cljs.core.seq(arglist__22116);
return portfolio_company_site_account_timelines__delegate(p__22113);
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
var investment_account_timelines__delegate = function (p__22117){var vec__22119 = p__22117;var type_ids = cljs.core.nth.call(null,vec__22119,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__22117 = null;if (arguments.length > 0) {
  p__22117 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__22117);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__22120){
var p__22117 = cljs.core.seq(arglist__22120);
return investment_account_timelines__delegate(p__22117);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__22121){var vec__22123 = p__22121;var type_ids = cljs.core.nth.call(null,vec__22123,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__22121 = null;if (arguments.length > 0) {
  p__22121 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__22121);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__22124){
var p__22121 = cljs.core.seq(arglist__22124);
return investment_stats__delegate(p__22121);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__22125){var vec__22127 = p__22125;var type_ids = cljs.core.nth.call(null,vec__22127,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__22125 = null;if (arguments.length > 0) {
  p__22125 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__22125);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__22128){
var p__22125 = cljs.core.seq(arglist__22128);
return investment_aggs__delegate(p__22125);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__22129){var vec__22131 = p__22129;var type_ids = cljs.core.nth.call(null,vec__22131,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__22129 = null;if (arguments.length > 0) {
  p__22129 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__22129);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__22132){
var p__22129 = cljs.core.seq(arglist__22132);
return investments__delegate(p__22129);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
