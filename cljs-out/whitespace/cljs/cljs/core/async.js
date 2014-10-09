// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t19339 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19339 = (function (f,fn_handler,meta19340){
this.f = f;
this.fn_handler = fn_handler;
this.meta19340 = meta19340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19339.cljs$lang$type = true;
cljs.core.async.t19339.cljs$lang$ctorStr = "cljs.core.async/t19339";
cljs.core.async.t19339.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19339");
});
cljs.core.async.t19339.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t19339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t19339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19341){var self__ = this;
var _19341__$1 = this;return self__.meta19340;
});
cljs.core.async.t19339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19341,meta19340__$1){var self__ = this;
var _19341__$1 = this;return (new cljs.core.async.t19339(self__.f,self__.fn_handler,meta19340__$1));
});
cljs.core.async.__GT_t19339 = (function __GT_t19339(f__$1,fn_handler__$1,meta19340){return (new cljs.core.async.t19339(f__$1,fn_handler__$1,meta19340));
});
}
return (new cljs.core.async.t19339(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__19343 = buff;if(G__19343)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__19343.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__19343.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19343);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19343);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_19344 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_19344);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_19344,ret){
return (function (){return fn1.call(null,val_19344);
});})(val_19344,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3546__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___19345 = n;var x_19346 = (0);while(true){
if((x_19346 < n__4414__auto___19345))
{(a[x_19346] = (0));
{
var G__19347 = (x_19346 + (1));
x_19346 = G__19347;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__19348 = (i + (1));
i = G__19348;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t19352 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19352 = (function (flag,alt_flag,meta19353){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19353 = meta19353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19352.cljs$lang$type = true;
cljs.core.async.t19352.cljs$lang$ctorStr = "cljs.core.async/t19352";
cljs.core.async.t19352.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19352");
});})(flag))
;
cljs.core.async.t19352.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t19352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t19352.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19354){var self__ = this;
var _19354__$1 = this;return self__.meta19353;
});})(flag))
;
cljs.core.async.t19352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19354,meta19353__$1){var self__ = this;
var _19354__$1 = this;return (new cljs.core.async.t19352(self__.flag,self__.alt_flag,meta19353__$1));
});})(flag))
;
cljs.core.async.__GT_t19352 = ((function (flag){
return (function __GT_t19352(flag__$1,alt_flag__$1,meta19353){return (new cljs.core.async.t19352(flag__$1,alt_flag__$1,meta19353));
});})(flag))
;
}
return (new cljs.core.async.t19352(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t19358 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19358 = (function (cb,flag,alt_handler,meta19359){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19359 = meta19359;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19358.cljs$lang$type = true;
cljs.core.async.t19358.cljs$lang$ctorStr = "cljs.core.async/t19358";
cljs.core.async.t19358.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19358");
});
cljs.core.async.t19358.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19358.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t19358.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t19358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19360){var self__ = this;
var _19360__$1 = this;return self__.meta19359;
});
cljs.core.async.t19358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19360,meta19359__$1){var self__ = this;
var _19360__$1 = this;return (new cljs.core.async.t19358(self__.cb,self__.flag,self__.alt_handler,meta19359__$1));
});
cljs.core.async.__GT_t19358 = (function __GT_t19358(cb__$1,flag__$1,alt_handler__$1,meta19359){return (new cljs.core.async.t19358(cb__$1,flag__$1,alt_handler__$1,meta19359));
});
}
return (new cljs.core.async.t19358(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19361_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19361_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3558__auto__ = wport;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__19362 = (i + (1));
i = G__19362;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3558__auto__ = ret;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3546__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3546__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__19363){var map__19365 = p__19363;var map__19365__$1 = ((cljs.core.seq_QMARK_.call(null,map__19365))?cljs.core.apply.call(null,cljs.core.hash_map,map__19365):map__19365);var opts = map__19365__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__19363 = null;if (arguments.length > 1) {
  p__19363 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__19363);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19366){
var ports = cljs.core.first(arglist__19366);
var p__19363 = cljs.core.rest(arglist__19366);
return alts_BANG___delegate(ports,p__19363);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t19374 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19374 = (function (ch,f,map_LT_,meta19375){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19375 = meta19375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19374.cljs$lang$type = true;
cljs.core.async.t19374.cljs$lang$ctorStr = "cljs.core.async/t19374";
cljs.core.async.t19374.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19374");
});
cljs.core.async.t19374.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19374.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t19374.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19374.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t19377 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19377 = (function (fn1,_,meta19375,ch,f,map_LT_,meta19378){
this.fn1 = fn1;
this._ = _;
this.meta19375 = meta19375;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19378 = meta19378;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19377.cljs$lang$type = true;
cljs.core.async.t19377.cljs$lang$ctorStr = "cljs.core.async/t19377";
cljs.core.async.t19377.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19377");
});})(___$1))
;
cljs.core.async.t19377.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t19377.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t19377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__19367_SHARP_){return f1.call(null,(((p1__19367_SHARP_ == null))?null:self__.f.call(null,p1__19367_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t19377.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19379){var self__ = this;
var _19379__$1 = this;return self__.meta19378;
});})(___$1))
;
cljs.core.async.t19377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19379,meta19378__$1){var self__ = this;
var _19379__$1 = this;return (new cljs.core.async.t19377(self__.fn1,self__._,self__.meta19375,self__.ch,self__.f,self__.map_LT_,meta19378__$1));
});})(___$1))
;
cljs.core.async.__GT_t19377 = ((function (___$1){
return (function __GT_t19377(fn1__$1,___$2,meta19375__$1,ch__$2,f__$2,map_LT___$2,meta19378){return (new cljs.core.async.t19377(fn1__$1,___$2,meta19375__$1,ch__$2,f__$2,map_LT___$2,meta19378));
});})(___$1))
;
}
return (new cljs.core.async.t19377(fn1,___$1,self__.meta19375,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t19374.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19374.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19376){var self__ = this;
var _19376__$1 = this;return self__.meta19375;
});
cljs.core.async.t19374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19376,meta19375__$1){var self__ = this;
var _19376__$1 = this;return (new cljs.core.async.t19374(self__.ch,self__.f,self__.map_LT_,meta19375__$1));
});
cljs.core.async.__GT_t19374 = (function __GT_t19374(ch__$1,f__$1,map_LT___$1,meta19375){return (new cljs.core.async.t19374(ch__$1,f__$1,map_LT___$1,meta19375));
});
}
return (new cljs.core.async.t19374(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t19383 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19383 = (function (ch,f,map_GT_,meta19384){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19384 = meta19384;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19383.cljs$lang$type = true;
cljs.core.async.t19383.cljs$lang$ctorStr = "cljs.core.async/t19383";
cljs.core.async.t19383.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19383");
});
cljs.core.async.t19383.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19383.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t19383.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19383.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19383.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19383.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19385){var self__ = this;
var _19385__$1 = this;return self__.meta19384;
});
cljs.core.async.t19383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19385,meta19384__$1){var self__ = this;
var _19385__$1 = this;return (new cljs.core.async.t19383(self__.ch,self__.f,self__.map_GT_,meta19384__$1));
});
cljs.core.async.__GT_t19383 = (function __GT_t19383(ch__$1,f__$1,map_GT___$1,meta19384){return (new cljs.core.async.t19383(ch__$1,f__$1,map_GT___$1,meta19384));
});
}
return (new cljs.core.async.t19383(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t19389 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19389 = (function (ch,p,filter_GT_,meta19390){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19390 = meta19390;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19389.cljs$lang$type = true;
cljs.core.async.t19389.cljs$lang$ctorStr = "cljs.core.async/t19389";
cljs.core.async.t19389.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19389");
});
cljs.core.async.t19389.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19389.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t19389.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19389.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19389.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19389.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19391){var self__ = this;
var _19391__$1 = this;return self__.meta19390;
});
cljs.core.async.t19389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19391,meta19390__$1){var self__ = this;
var _19391__$1 = this;return (new cljs.core.async.t19389(self__.ch,self__.p,self__.filter_GT_,meta19390__$1));
});
cljs.core.async.__GT_t19389 = (function __GT_t19389(ch__$1,p__$1,filter_GT___$1,meta19390){return (new cljs.core.async.t19389(ch__$1,p__$1,filter_GT___$1,meta19390));
});
}
return (new cljs.core.async.t19389(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___19474 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___19474,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___19474,out){
return (function (state_19453){var state_val_19454 = (state_19453[(1)]);if((state_val_19454 === (7)))
{var inst_19449 = (state_19453[(2)]);var state_19453__$1 = state_19453;var statearr_19455_19475 = state_19453__$1;(statearr_19455_19475[(2)] = inst_19449);
(statearr_19455_19475[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19454 === (1)))
{var state_19453__$1 = state_19453;var statearr_19456_19476 = state_19453__$1;(statearr_19456_19476[(2)] = null);
(statearr_19456_19476[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19454 === (4)))
{var inst_19435 = (state_19453[(7)]);var inst_19435__$1 = (state_19453[(2)]);var inst_19436 = (inst_19435__$1 == null);var state_19453__$1 = (function (){var statearr_19457 = state_19453;(statearr_19457[(7)] = inst_19435__$1);
return statearr_19457;
})();if(cljs.core.truth_(inst_19436))
{var statearr_19458_19477 = state_19453__$1;(statearr_19458_19477[(1)] = (5));
} else
{var statearr_19459_19478 = state_19453__$1;(statearr_19459_19478[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19454 === (6)))
{var inst_19435 = (state_19453[(7)]);var inst_19440 = p.call(null,inst_19435);var state_19453__$1 = state_19453;if(cljs.core.truth_(inst_19440))
{var statearr_19460_19479 = state_19453__$1;(statearr_19460_19479[(1)] = (8));
} else
{var statearr_19461_19480 = state_19453__$1;(statearr_19461_19480[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19454 === (3)))
{var inst_19451 = (state_19453[(2)]);var state_19453__$1 = state_19453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19453__$1,inst_19451);
} else
{if((state_val_19454 === (2)))
{var state_19453__$1 = state_19453;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19453__$1,(4),ch);
} else
{if((state_val_19454 === (11)))
{var inst_19443 = (state_19453[(2)]);var state_19453__$1 = state_19453;var statearr_19462_19481 = state_19453__$1;(statearr_19462_19481[(2)] = inst_19443);
(statearr_19462_19481[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19454 === (9)))
{var state_19453__$1 = state_19453;var statearr_19463_19482 = state_19453__$1;(statearr_19463_19482[(2)] = null);
(statearr_19463_19482[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19454 === (5)))
{var inst_19438 = cljs.core.async.close_BANG_.call(null,out);var state_19453__$1 = state_19453;var statearr_19464_19483 = state_19453__$1;(statearr_19464_19483[(2)] = inst_19438);
(statearr_19464_19483[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19454 === (10)))
{var inst_19446 = (state_19453[(2)]);var state_19453__$1 = (function (){var statearr_19465 = state_19453;(statearr_19465[(8)] = inst_19446);
return statearr_19465;
})();var statearr_19466_19484 = state_19453__$1;(statearr_19466_19484[(2)] = null);
(statearr_19466_19484[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19454 === (8)))
{var inst_19435 = (state_19453[(7)]);var state_19453__$1 = state_19453;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19453__$1,(11),out,inst_19435);
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
});})(c__5708__auto___19474,out))
;return ((function (switch__5693__auto__,c__5708__auto___19474,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19470 = [null,null,null,null,null,null,null,null,null];(statearr_19470[(0)] = state_machine__5694__auto__);
(statearr_19470[(1)] = (1));
return statearr_19470;
});
var state_machine__5694__auto____1 = (function (state_19453){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19453);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19471){if((e19471 instanceof Object))
{var ex__5697__auto__ = e19471;var statearr_19472_19485 = state_19453;(statearr_19472_19485[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19453);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19471;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19486 = state_19453;
state_19453 = G__19486;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19453){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___19474,out))
})();var state__5710__auto__ = (function (){var statearr_19473 = f__5709__auto__.call(null);(statearr_19473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___19474);
return statearr_19473;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___19474,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_19638){var state_val_19639 = (state_19638[(1)]);if((state_val_19639 === (7)))
{var inst_19634 = (state_19638[(2)]);var state_19638__$1 = state_19638;var statearr_19640_19677 = state_19638__$1;(statearr_19640_19677[(2)] = inst_19634);
(statearr_19640_19677[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (20)))
{var inst_19609 = (state_19638[(7)]);var inst_19620 = (state_19638[(2)]);var inst_19621 = cljs.core.next.call(null,inst_19609);var inst_19595 = inst_19621;var inst_19596 = null;var inst_19597 = (0);var inst_19598 = (0);var state_19638__$1 = (function (){var statearr_19641 = state_19638;(statearr_19641[(8)] = inst_19620);
(statearr_19641[(9)] = inst_19597);
(statearr_19641[(10)] = inst_19598);
(statearr_19641[(11)] = inst_19595);
(statearr_19641[(12)] = inst_19596);
return statearr_19641;
})();var statearr_19642_19678 = state_19638__$1;(statearr_19642_19678[(2)] = null);
(statearr_19642_19678[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (1)))
{var state_19638__$1 = state_19638;var statearr_19643_19679 = state_19638__$1;(statearr_19643_19679[(2)] = null);
(statearr_19643_19679[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (4)))
{var inst_19584 = (state_19638[(13)]);var inst_19584__$1 = (state_19638[(2)]);var inst_19585 = (inst_19584__$1 == null);var state_19638__$1 = (function (){var statearr_19647 = state_19638;(statearr_19647[(13)] = inst_19584__$1);
return statearr_19647;
})();if(cljs.core.truth_(inst_19585))
{var statearr_19648_19680 = state_19638__$1;(statearr_19648_19680[(1)] = (5));
} else
{var statearr_19649_19681 = state_19638__$1;(statearr_19649_19681[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (15)))
{var state_19638__$1 = state_19638;var statearr_19650_19682 = state_19638__$1;(statearr_19650_19682[(2)] = null);
(statearr_19650_19682[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (13)))
{var inst_19597 = (state_19638[(9)]);var inst_19598 = (state_19638[(10)]);var inst_19595 = (state_19638[(11)]);var inst_19596 = (state_19638[(12)]);var inst_19605 = (state_19638[(2)]);var inst_19606 = (inst_19598 + (1));var tmp19644 = inst_19597;var tmp19645 = inst_19595;var tmp19646 = inst_19596;var inst_19595__$1 = tmp19645;var inst_19596__$1 = tmp19646;var inst_19597__$1 = tmp19644;var inst_19598__$1 = inst_19606;var state_19638__$1 = (function (){var statearr_19651 = state_19638;(statearr_19651[(9)] = inst_19597__$1);
(statearr_19651[(10)] = inst_19598__$1);
(statearr_19651[(14)] = inst_19605);
(statearr_19651[(11)] = inst_19595__$1);
(statearr_19651[(12)] = inst_19596__$1);
return statearr_19651;
})();var statearr_19652_19683 = state_19638__$1;(statearr_19652_19683[(2)] = null);
(statearr_19652_19683[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (6)))
{var inst_19584 = (state_19638[(13)]);var inst_19589 = f.call(null,inst_19584);var inst_19594 = cljs.core.seq.call(null,inst_19589);var inst_19595 = inst_19594;var inst_19596 = null;var inst_19597 = (0);var inst_19598 = (0);var state_19638__$1 = (function (){var statearr_19653 = state_19638;(statearr_19653[(9)] = inst_19597);
(statearr_19653[(10)] = inst_19598);
(statearr_19653[(11)] = inst_19595);
(statearr_19653[(12)] = inst_19596);
return statearr_19653;
})();var statearr_19654_19684 = state_19638__$1;(statearr_19654_19684[(2)] = null);
(statearr_19654_19684[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (17)))
{var inst_19609 = (state_19638[(7)]);var inst_19613 = cljs.core.chunk_first.call(null,inst_19609);var inst_19614 = cljs.core.chunk_rest.call(null,inst_19609);var inst_19615 = cljs.core.count.call(null,inst_19613);var inst_19595 = inst_19614;var inst_19596 = inst_19613;var inst_19597 = inst_19615;var inst_19598 = (0);var state_19638__$1 = (function (){var statearr_19655 = state_19638;(statearr_19655[(9)] = inst_19597);
(statearr_19655[(10)] = inst_19598);
(statearr_19655[(11)] = inst_19595);
(statearr_19655[(12)] = inst_19596);
return statearr_19655;
})();var statearr_19656_19685 = state_19638__$1;(statearr_19656_19685[(2)] = null);
(statearr_19656_19685[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (3)))
{var inst_19636 = (state_19638[(2)]);var state_19638__$1 = state_19638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19638__$1,inst_19636);
} else
{if((state_val_19639 === (12)))
{var inst_19629 = (state_19638[(2)]);var state_19638__$1 = state_19638;var statearr_19657_19686 = state_19638__$1;(statearr_19657_19686[(2)] = inst_19629);
(statearr_19657_19686[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (2)))
{var state_19638__$1 = state_19638;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19638__$1,(4),in$);
} else
{if((state_val_19639 === (19)))
{var inst_19624 = (state_19638[(2)]);var state_19638__$1 = state_19638;var statearr_19658_19687 = state_19638__$1;(statearr_19658_19687[(2)] = inst_19624);
(statearr_19658_19687[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (11)))
{var inst_19609 = (state_19638[(7)]);var inst_19595 = (state_19638[(11)]);var inst_19609__$1 = cljs.core.seq.call(null,inst_19595);var state_19638__$1 = (function (){var statearr_19659 = state_19638;(statearr_19659[(7)] = inst_19609__$1);
return statearr_19659;
})();if(inst_19609__$1)
{var statearr_19660_19688 = state_19638__$1;(statearr_19660_19688[(1)] = (14));
} else
{var statearr_19661_19689 = state_19638__$1;(statearr_19661_19689[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (9)))
{var inst_19631 = (state_19638[(2)]);var state_19638__$1 = (function (){var statearr_19662 = state_19638;(statearr_19662[(15)] = inst_19631);
return statearr_19662;
})();var statearr_19663_19690 = state_19638__$1;(statearr_19663_19690[(2)] = null);
(statearr_19663_19690[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (5)))
{var inst_19587 = cljs.core.async.close_BANG_.call(null,out);var state_19638__$1 = state_19638;var statearr_19664_19691 = state_19638__$1;(statearr_19664_19691[(2)] = inst_19587);
(statearr_19664_19691[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (14)))
{var inst_19609 = (state_19638[(7)]);var inst_19611 = cljs.core.chunked_seq_QMARK_.call(null,inst_19609);var state_19638__$1 = state_19638;if(inst_19611)
{var statearr_19665_19692 = state_19638__$1;(statearr_19665_19692[(1)] = (17));
} else
{var statearr_19666_19693 = state_19638__$1;(statearr_19666_19693[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (16)))
{var inst_19627 = (state_19638[(2)]);var state_19638__$1 = state_19638;var statearr_19667_19694 = state_19638__$1;(statearr_19667_19694[(2)] = inst_19627);
(statearr_19667_19694[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19639 === (10)))
{var inst_19598 = (state_19638[(10)]);var inst_19596 = (state_19638[(12)]);var inst_19603 = cljs.core._nth.call(null,inst_19596,inst_19598);var state_19638__$1 = state_19638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19638__$1,(13),out,inst_19603);
} else
{if((state_val_19639 === (18)))
{var inst_19609 = (state_19638[(7)]);var inst_19618 = cljs.core.first.call(null,inst_19609);var state_19638__$1 = state_19638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19638__$1,(20),out,inst_19618);
} else
{if((state_val_19639 === (8)))
{var inst_19597 = (state_19638[(9)]);var inst_19598 = (state_19638[(10)]);var inst_19600 = (inst_19598 < inst_19597);var inst_19601 = inst_19600;var state_19638__$1 = state_19638;if(cljs.core.truth_(inst_19601))
{var statearr_19668_19695 = state_19638__$1;(statearr_19668_19695[(1)] = (10));
} else
{var statearr_19669_19696 = state_19638__$1;(statearr_19669_19696[(1)] = (11));
}
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19673[(0)] = state_machine__5694__auto__);
(statearr_19673[(1)] = (1));
return statearr_19673;
});
var state_machine__5694__auto____1 = (function (state_19638){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19638);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19674){if((e19674 instanceof Object))
{var ex__5697__auto__ = e19674;var statearr_19675_19697 = state_19638;(statearr_19675_19697[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19638);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19674;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19698 = state_19638;
state_19638 = G__19698;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19638){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_19676 = f__5709__auto__.call(null);(statearr_19676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19676;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___19779 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___19779){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___19779){
return (function (state_19758){var state_val_19759 = (state_19758[(1)]);if((state_val_19759 === (7)))
{var inst_19754 = (state_19758[(2)]);var state_19758__$1 = state_19758;var statearr_19760_19780 = state_19758__$1;(statearr_19760_19780[(2)] = inst_19754);
(statearr_19760_19780[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19759 === (1)))
{var state_19758__$1 = state_19758;var statearr_19761_19781 = state_19758__$1;(statearr_19761_19781[(2)] = null);
(statearr_19761_19781[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19759 === (4)))
{var inst_19741 = (state_19758[(7)]);var inst_19741__$1 = (state_19758[(2)]);var inst_19742 = (inst_19741__$1 == null);var state_19758__$1 = (function (){var statearr_19762 = state_19758;(statearr_19762[(7)] = inst_19741__$1);
return statearr_19762;
})();if(cljs.core.truth_(inst_19742))
{var statearr_19763_19782 = state_19758__$1;(statearr_19763_19782[(1)] = (5));
} else
{var statearr_19764_19783 = state_19758__$1;(statearr_19764_19783[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19759 === (6)))
{var inst_19741 = (state_19758[(7)]);var state_19758__$1 = state_19758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19758__$1,(11),to,inst_19741);
} else
{if((state_val_19759 === (3)))
{var inst_19756 = (state_19758[(2)]);var state_19758__$1 = state_19758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19758__$1,inst_19756);
} else
{if((state_val_19759 === (2)))
{var state_19758__$1 = state_19758;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19758__$1,(4),from);
} else
{if((state_val_19759 === (11)))
{var inst_19751 = (state_19758[(2)]);var state_19758__$1 = (function (){var statearr_19765 = state_19758;(statearr_19765[(8)] = inst_19751);
return statearr_19765;
})();var statearr_19766_19784 = state_19758__$1;(statearr_19766_19784[(2)] = null);
(statearr_19766_19784[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19759 === (9)))
{var state_19758__$1 = state_19758;var statearr_19767_19785 = state_19758__$1;(statearr_19767_19785[(2)] = null);
(statearr_19767_19785[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19759 === (5)))
{var state_19758__$1 = state_19758;if(cljs.core.truth_(close_QMARK_))
{var statearr_19768_19786 = state_19758__$1;(statearr_19768_19786[(1)] = (8));
} else
{var statearr_19769_19787 = state_19758__$1;(statearr_19769_19787[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19759 === (10)))
{var inst_19748 = (state_19758[(2)]);var state_19758__$1 = state_19758;var statearr_19770_19788 = state_19758__$1;(statearr_19770_19788[(2)] = inst_19748);
(statearr_19770_19788[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19759 === (8)))
{var inst_19745 = cljs.core.async.close_BANG_.call(null,to);var state_19758__$1 = state_19758;var statearr_19771_19789 = state_19758__$1;(statearr_19771_19789[(2)] = inst_19745);
(statearr_19771_19789[(1)] = (10));
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
});})(c__5708__auto___19779))
;return ((function (switch__5693__auto__,c__5708__auto___19779){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19775 = [null,null,null,null,null,null,null,null,null];(statearr_19775[(0)] = state_machine__5694__auto__);
(statearr_19775[(1)] = (1));
return statearr_19775;
});
var state_machine__5694__auto____1 = (function (state_19758){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19758);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19776){if((e19776 instanceof Object))
{var ex__5697__auto__ = e19776;var statearr_19777_19790 = state_19758;(statearr_19777_19790[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19758);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19776;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19791 = state_19758;
state_19758 = G__19791;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19758){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___19779))
})();var state__5710__auto__ = (function (){var statearr_19778 = f__5709__auto__.call(null);(statearr_19778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___19779);
return statearr_19778;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___19779))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___19878 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___19878,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___19878,tc,fc){
return (function (state_19856){var state_val_19857 = (state_19856[(1)]);if((state_val_19857 === (7)))
{var inst_19852 = (state_19856[(2)]);var state_19856__$1 = state_19856;var statearr_19858_19879 = state_19856__$1;(statearr_19858_19879[(2)] = inst_19852);
(statearr_19858_19879[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19857 === (1)))
{var state_19856__$1 = state_19856;var statearr_19859_19880 = state_19856__$1;(statearr_19859_19880[(2)] = null);
(statearr_19859_19880[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19857 === (4)))
{var inst_19837 = (state_19856[(7)]);var inst_19837__$1 = (state_19856[(2)]);var inst_19838 = (inst_19837__$1 == null);var state_19856__$1 = (function (){var statearr_19860 = state_19856;(statearr_19860[(7)] = inst_19837__$1);
return statearr_19860;
})();if(cljs.core.truth_(inst_19838))
{var statearr_19861_19881 = state_19856__$1;(statearr_19861_19881[(1)] = (5));
} else
{var statearr_19862_19882 = state_19856__$1;(statearr_19862_19882[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19857 === (6)))
{var inst_19837 = (state_19856[(7)]);var inst_19843 = p.call(null,inst_19837);var state_19856__$1 = state_19856;if(cljs.core.truth_(inst_19843))
{var statearr_19863_19883 = state_19856__$1;(statearr_19863_19883[(1)] = (9));
} else
{var statearr_19864_19884 = state_19856__$1;(statearr_19864_19884[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19857 === (3)))
{var inst_19854 = (state_19856[(2)]);var state_19856__$1 = state_19856;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19856__$1,inst_19854);
} else
{if((state_val_19857 === (2)))
{var state_19856__$1 = state_19856;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19856__$1,(4),ch);
} else
{if((state_val_19857 === (11)))
{var inst_19837 = (state_19856[(7)]);var inst_19847 = (state_19856[(2)]);var state_19856__$1 = state_19856;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19856__$1,(8),inst_19847,inst_19837);
} else
{if((state_val_19857 === (9)))
{var state_19856__$1 = state_19856;var statearr_19865_19885 = state_19856__$1;(statearr_19865_19885[(2)] = tc);
(statearr_19865_19885[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19857 === (5)))
{var inst_19840 = cljs.core.async.close_BANG_.call(null,tc);var inst_19841 = cljs.core.async.close_BANG_.call(null,fc);var state_19856__$1 = (function (){var statearr_19866 = state_19856;(statearr_19866[(8)] = inst_19840);
return statearr_19866;
})();var statearr_19867_19886 = state_19856__$1;(statearr_19867_19886[(2)] = inst_19841);
(statearr_19867_19886[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19857 === (10)))
{var state_19856__$1 = state_19856;var statearr_19868_19887 = state_19856__$1;(statearr_19868_19887[(2)] = fc);
(statearr_19868_19887[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19857 === (8)))
{var inst_19849 = (state_19856[(2)]);var state_19856__$1 = (function (){var statearr_19869 = state_19856;(statearr_19869[(9)] = inst_19849);
return statearr_19869;
})();var statearr_19870_19888 = state_19856__$1;(statearr_19870_19888[(2)] = null);
(statearr_19870_19888[(1)] = (2));
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
});})(c__5708__auto___19878,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___19878,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19874 = [null,null,null,null,null,null,null,null,null,null];(statearr_19874[(0)] = state_machine__5694__auto__);
(statearr_19874[(1)] = (1));
return statearr_19874;
});
var state_machine__5694__auto____1 = (function (state_19856){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19856);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19875){if((e19875 instanceof Object))
{var ex__5697__auto__ = e19875;var statearr_19876_19889 = state_19856;(statearr_19876_19889[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19856);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19875;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19890 = state_19856;
state_19856 = G__19890;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19856){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___19878,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_19877 = f__5709__auto__.call(null);(statearr_19877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___19878);
return statearr_19877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___19878,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_19937){var state_val_19938 = (state_19937[(1)]);if((state_val_19938 === (7)))
{var inst_19933 = (state_19937[(2)]);var state_19937__$1 = state_19937;var statearr_19939_19955 = state_19937__$1;(statearr_19939_19955[(2)] = inst_19933);
(statearr_19939_19955[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19938 === (6)))
{var inst_19923 = (state_19937[(7)]);var inst_19926 = (state_19937[(8)]);var inst_19930 = f.call(null,inst_19923,inst_19926);var inst_19923__$1 = inst_19930;var state_19937__$1 = (function (){var statearr_19940 = state_19937;(statearr_19940[(7)] = inst_19923__$1);
return statearr_19940;
})();var statearr_19941_19956 = state_19937__$1;(statearr_19941_19956[(2)] = null);
(statearr_19941_19956[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19938 === (5)))
{var inst_19923 = (state_19937[(7)]);var state_19937__$1 = state_19937;var statearr_19942_19957 = state_19937__$1;(statearr_19942_19957[(2)] = inst_19923);
(statearr_19942_19957[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19938 === (4)))
{var inst_19926 = (state_19937[(8)]);var inst_19926__$1 = (state_19937[(2)]);var inst_19927 = (inst_19926__$1 == null);var state_19937__$1 = (function (){var statearr_19943 = state_19937;(statearr_19943[(8)] = inst_19926__$1);
return statearr_19943;
})();if(cljs.core.truth_(inst_19927))
{var statearr_19944_19958 = state_19937__$1;(statearr_19944_19958[(1)] = (5));
} else
{var statearr_19945_19959 = state_19937__$1;(statearr_19945_19959[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19938 === (3)))
{var inst_19935 = (state_19937[(2)]);var state_19937__$1 = state_19937;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19937__$1,inst_19935);
} else
{if((state_val_19938 === (2)))
{var state_19937__$1 = state_19937;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19937__$1,(4),ch);
} else
{if((state_val_19938 === (1)))
{var inst_19923 = init;var state_19937__$1 = (function (){var statearr_19946 = state_19937;(statearr_19946[(7)] = inst_19923);
return statearr_19946;
})();var statearr_19947_19960 = state_19937__$1;(statearr_19947_19960[(2)] = null);
(statearr_19947_19960[(1)] = (2));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19951 = [null,null,null,null,null,null,null,null,null];(statearr_19951[(0)] = state_machine__5694__auto__);
(statearr_19951[(1)] = (1));
return statearr_19951;
});
var state_machine__5694__auto____1 = (function (state_19937){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19937);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19952){if((e19952 instanceof Object))
{var ex__5697__auto__ = e19952;var statearr_19953_19961 = state_19937;(statearr_19953_19961[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19937);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19952;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19962 = state_19937;
state_19937 = G__19962;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19937){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_19954 = f__5709__auto__.call(null);(statearr_19954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19954;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_20024){var state_val_20025 = (state_20024[(1)]);if((state_val_20025 === (7)))
{var inst_20005 = (state_20024[(7)]);var inst_20010 = (state_20024[(2)]);var inst_20011 = cljs.core.next.call(null,inst_20005);var inst_20005__$1 = inst_20011;var state_20024__$1 = (function (){var statearr_20026 = state_20024;(statearr_20026[(8)] = inst_20010);
(statearr_20026[(7)] = inst_20005__$1);
return statearr_20026;
})();var statearr_20027_20045 = state_20024__$1;(statearr_20027_20045[(2)] = null);
(statearr_20027_20045[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20025 === (1)))
{var inst_20004 = cljs.core.seq.call(null,coll);var inst_20005 = inst_20004;var state_20024__$1 = (function (){var statearr_20028 = state_20024;(statearr_20028[(7)] = inst_20005);
return statearr_20028;
})();var statearr_20029_20046 = state_20024__$1;(statearr_20029_20046[(2)] = null);
(statearr_20029_20046[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20025 === (4)))
{var inst_20005 = (state_20024[(7)]);var inst_20008 = cljs.core.first.call(null,inst_20005);var state_20024__$1 = state_20024;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20024__$1,(7),ch,inst_20008);
} else
{if((state_val_20025 === (6)))
{var inst_20020 = (state_20024[(2)]);var state_20024__$1 = state_20024;var statearr_20030_20047 = state_20024__$1;(statearr_20030_20047[(2)] = inst_20020);
(statearr_20030_20047[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20025 === (3)))
{var inst_20022 = (state_20024[(2)]);var state_20024__$1 = state_20024;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20024__$1,inst_20022);
} else
{if((state_val_20025 === (2)))
{var inst_20005 = (state_20024[(7)]);var state_20024__$1 = state_20024;if(cljs.core.truth_(inst_20005))
{var statearr_20031_20048 = state_20024__$1;(statearr_20031_20048[(1)] = (4));
} else
{var statearr_20032_20049 = state_20024__$1;(statearr_20032_20049[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20025 === (9)))
{var state_20024__$1 = state_20024;var statearr_20033_20050 = state_20024__$1;(statearr_20033_20050[(2)] = null);
(statearr_20033_20050[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20025 === (5)))
{var state_20024__$1 = state_20024;if(cljs.core.truth_(close_QMARK_))
{var statearr_20034_20051 = state_20024__$1;(statearr_20034_20051[(1)] = (8));
} else
{var statearr_20035_20052 = state_20024__$1;(statearr_20035_20052[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20025 === (10)))
{var inst_20018 = (state_20024[(2)]);var state_20024__$1 = state_20024;var statearr_20036_20053 = state_20024__$1;(statearr_20036_20053[(2)] = inst_20018);
(statearr_20036_20053[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20025 === (8)))
{var inst_20015 = cljs.core.async.close_BANG_.call(null,ch);var state_20024__$1 = state_20024;var statearr_20037_20054 = state_20024__$1;(statearr_20037_20054[(2)] = inst_20015);
(statearr_20037_20054[(1)] = (10));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_20041 = [null,null,null,null,null,null,null,null,null];(statearr_20041[(0)] = state_machine__5694__auto__);
(statearr_20041[(1)] = (1));
return statearr_20041;
});
var state_machine__5694__auto____1 = (function (state_20024){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_20024);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e20042){if((e20042 instanceof Object))
{var ex__5697__auto__ = e20042;var statearr_20043_20055 = state_20024;(statearr_20043_20055[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20024);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20042;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20056 = state_20024;
state_20024 = G__20056;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_20024){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_20024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_20044 = f__5709__auto__.call(null);(statearr_20044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_20044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj20058 = {};return obj20058;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3546__auto__ = _;if(and__3546__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4185__auto__ = (((_ == null))?null:_);return (function (){var or__3558__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj20060 = {};return obj20060;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t20284 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20284 = (function (cs,ch,mult,meta20285){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20285 = meta20285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20284.cljs$lang$type = true;
cljs.core.async.t20284.cljs$lang$ctorStr = "cljs.core.async/t20284";
cljs.core.async.t20284.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t20284");
});})(cs))
;
cljs.core.async.t20284.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t20284.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t20284.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t20284.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t20284.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20284.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t20284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20286){var self__ = this;
var _20286__$1 = this;return self__.meta20285;
});})(cs))
;
cljs.core.async.t20284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20286,meta20285__$1){var self__ = this;
var _20286__$1 = this;return (new cljs.core.async.t20284(self__.cs,self__.ch,self__.mult,meta20285__$1));
});})(cs))
;
cljs.core.async.__GT_t20284 = ((function (cs){
return (function __GT_t20284(cs__$1,ch__$1,mult__$1,meta20285){return (new cljs.core.async.t20284(cs__$1,ch__$1,mult__$1,meta20285));
});})(cs))
;
}
return (new cljs.core.async.t20284(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___20507 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___20507,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___20507,cs,m,dchan,dctr,done){
return (function (state_20421){var state_val_20422 = (state_20421[(1)]);if((state_val_20422 === (7)))
{var inst_20417 = (state_20421[(2)]);var state_20421__$1 = state_20421;var statearr_20423_20508 = state_20421__$1;(statearr_20423_20508[(2)] = inst_20417);
(statearr_20423_20508[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (20)))
{var inst_20318 = (state_20421[(7)]);var inst_20328 = cljs.core.first.call(null,inst_20318);var inst_20329 = cljs.core.nth.call(null,inst_20328,(0),null);var inst_20330 = cljs.core.nth.call(null,inst_20328,(1),null);var state_20421__$1 = (function (){var statearr_20424 = state_20421;(statearr_20424[(8)] = inst_20329);
return statearr_20424;
})();if(cljs.core.truth_(inst_20330))
{var statearr_20425_20509 = state_20421__$1;(statearr_20425_20509[(1)] = (22));
} else
{var statearr_20426_20510 = state_20421__$1;(statearr_20426_20510[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (27)))
{var inst_20358 = (state_20421[(9)]);var inst_20360 = (state_20421[(10)]);var inst_20365 = cljs.core._nth.call(null,inst_20358,inst_20360);var state_20421__$1 = (function (){var statearr_20427 = state_20421;(statearr_20427[(11)] = inst_20365);
return statearr_20427;
})();var statearr_20428_20511 = state_20421__$1;(statearr_20428_20511[(2)] = null);
(statearr_20428_20511[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (1)))
{var state_20421__$1 = state_20421;var statearr_20429_20512 = state_20421__$1;(statearr_20429_20512[(2)] = null);
(statearr_20429_20512[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (24)))
{var inst_20318 = (state_20421[(7)]);var inst_20335 = (state_20421[(2)]);var inst_20336 = cljs.core.next.call(null,inst_20318);var inst_20298 = inst_20336;var inst_20299 = null;var inst_20300 = (0);var inst_20301 = (0);var state_20421__$1 = (function (){var statearr_20430 = state_20421;(statearr_20430[(12)] = inst_20335);
(statearr_20430[(13)] = inst_20299);
(statearr_20430[(14)] = inst_20301);
(statearr_20430[(15)] = inst_20298);
(statearr_20430[(16)] = inst_20300);
return statearr_20430;
})();var statearr_20431_20513 = state_20421__$1;(statearr_20431_20513[(2)] = null);
(statearr_20431_20513[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (39)))
{var inst_20378 = (state_20421[(17)]);var inst_20396 = (state_20421[(2)]);var inst_20397 = cljs.core.next.call(null,inst_20378);var inst_20357 = inst_20397;var inst_20358 = null;var inst_20359 = (0);var inst_20360 = (0);var state_20421__$1 = (function (){var statearr_20435 = state_20421;(statearr_20435[(9)] = inst_20358);
(statearr_20435[(18)] = inst_20396);
(statearr_20435[(19)] = inst_20357);
(statearr_20435[(20)] = inst_20359);
(statearr_20435[(10)] = inst_20360);
return statearr_20435;
})();var statearr_20436_20514 = state_20421__$1;(statearr_20436_20514[(2)] = null);
(statearr_20436_20514[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (4)))
{var inst_20289 = (state_20421[(21)]);var inst_20289__$1 = (state_20421[(2)]);var inst_20290 = (inst_20289__$1 == null);var state_20421__$1 = (function (){var statearr_20437 = state_20421;(statearr_20437[(21)] = inst_20289__$1);
return statearr_20437;
})();if(cljs.core.truth_(inst_20290))
{var statearr_20438_20515 = state_20421__$1;(statearr_20438_20515[(1)] = (5));
} else
{var statearr_20439_20516 = state_20421__$1;(statearr_20439_20516[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (15)))
{var inst_20299 = (state_20421[(13)]);var inst_20301 = (state_20421[(14)]);var inst_20298 = (state_20421[(15)]);var inst_20300 = (state_20421[(16)]);var inst_20314 = (state_20421[(2)]);var inst_20315 = (inst_20301 + (1));var tmp20432 = inst_20299;var tmp20433 = inst_20298;var tmp20434 = inst_20300;var inst_20298__$1 = tmp20433;var inst_20299__$1 = tmp20432;var inst_20300__$1 = tmp20434;var inst_20301__$1 = inst_20315;var state_20421__$1 = (function (){var statearr_20440 = state_20421;(statearr_20440[(22)] = inst_20314);
(statearr_20440[(13)] = inst_20299__$1);
(statearr_20440[(14)] = inst_20301__$1);
(statearr_20440[(15)] = inst_20298__$1);
(statearr_20440[(16)] = inst_20300__$1);
return statearr_20440;
})();var statearr_20441_20517 = state_20421__$1;(statearr_20441_20517[(2)] = null);
(statearr_20441_20517[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (21)))
{var inst_20339 = (state_20421[(2)]);var state_20421__$1 = state_20421;var statearr_20442_20518 = state_20421__$1;(statearr_20442_20518[(2)] = inst_20339);
(statearr_20442_20518[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (31)))
{var inst_20365 = (state_20421[(11)]);var inst_20366 = (state_20421[(2)]);var inst_20367 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_20368 = cljs.core.async.untap_STAR_.call(null,m,inst_20365);var state_20421__$1 = (function (){var statearr_20443 = state_20421;(statearr_20443[(23)] = inst_20367);
(statearr_20443[(24)] = inst_20366);
return statearr_20443;
})();var statearr_20444_20519 = state_20421__$1;(statearr_20444_20519[(2)] = inst_20368);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20421__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (32)))
{var inst_20365 = (state_20421[(11)]);var inst_20289 = (state_20421[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20421,(31),Object,null,(30));var inst_20372 = cljs.core.async.put_BANG_.call(null,inst_20365,inst_20289,done);var state_20421__$1 = state_20421;var statearr_20445_20520 = state_20421__$1;(statearr_20445_20520[(2)] = inst_20372);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20421__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (40)))
{var inst_20387 = (state_20421[(25)]);var inst_20388 = (state_20421[(2)]);var inst_20389 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_20390 = cljs.core.async.untap_STAR_.call(null,m,inst_20387);var state_20421__$1 = (function (){var statearr_20446 = state_20421;(statearr_20446[(26)] = inst_20389);
(statearr_20446[(27)] = inst_20388);
return statearr_20446;
})();var statearr_20447_20521 = state_20421__$1;(statearr_20447_20521[(2)] = inst_20390);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20421__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (33)))
{var inst_20378 = (state_20421[(17)]);var inst_20380 = cljs.core.chunked_seq_QMARK_.call(null,inst_20378);var state_20421__$1 = state_20421;if(inst_20380)
{var statearr_20448_20522 = state_20421__$1;(statearr_20448_20522[(1)] = (36));
} else
{var statearr_20449_20523 = state_20421__$1;(statearr_20449_20523[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (13)))
{var inst_20308 = (state_20421[(28)]);var inst_20311 = cljs.core.async.close_BANG_.call(null,inst_20308);var state_20421__$1 = state_20421;var statearr_20450_20524 = state_20421__$1;(statearr_20450_20524[(2)] = inst_20311);
(statearr_20450_20524[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (22)))
{var inst_20329 = (state_20421[(8)]);var inst_20332 = cljs.core.async.close_BANG_.call(null,inst_20329);var state_20421__$1 = state_20421;var statearr_20451_20525 = state_20421__$1;(statearr_20451_20525[(2)] = inst_20332);
(statearr_20451_20525[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (36)))
{var inst_20378 = (state_20421[(17)]);var inst_20382 = cljs.core.chunk_first.call(null,inst_20378);var inst_20383 = cljs.core.chunk_rest.call(null,inst_20378);var inst_20384 = cljs.core.count.call(null,inst_20382);var inst_20357 = inst_20383;var inst_20358 = inst_20382;var inst_20359 = inst_20384;var inst_20360 = (0);var state_20421__$1 = (function (){var statearr_20452 = state_20421;(statearr_20452[(9)] = inst_20358);
(statearr_20452[(19)] = inst_20357);
(statearr_20452[(20)] = inst_20359);
(statearr_20452[(10)] = inst_20360);
return statearr_20452;
})();var statearr_20453_20526 = state_20421__$1;(statearr_20453_20526[(2)] = null);
(statearr_20453_20526[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (41)))
{var inst_20387 = (state_20421[(25)]);var inst_20289 = (state_20421[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20421,(40),Object,null,(39));var inst_20394 = cljs.core.async.put_BANG_.call(null,inst_20387,inst_20289,done);var state_20421__$1 = state_20421;var statearr_20454_20527 = state_20421__$1;(statearr_20454_20527[(2)] = inst_20394);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20421__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (43)))
{var state_20421__$1 = state_20421;var statearr_20455_20528 = state_20421__$1;(statearr_20455_20528[(2)] = null);
(statearr_20455_20528[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (29)))
{var inst_20405 = (state_20421[(2)]);var state_20421__$1 = state_20421;var statearr_20456_20529 = state_20421__$1;(statearr_20456_20529[(2)] = inst_20405);
(statearr_20456_20529[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (44)))
{var inst_20414 = (state_20421[(2)]);var state_20421__$1 = (function (){var statearr_20457 = state_20421;(statearr_20457[(29)] = inst_20414);
return statearr_20457;
})();var statearr_20458_20530 = state_20421__$1;(statearr_20458_20530[(2)] = null);
(statearr_20458_20530[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (6)))
{var inst_20349 = (state_20421[(30)]);var inst_20348 = cljs.core.deref.call(null,cs);var inst_20349__$1 = cljs.core.keys.call(null,inst_20348);var inst_20350 = cljs.core.count.call(null,inst_20349__$1);var inst_20351 = cljs.core.reset_BANG_.call(null,dctr,inst_20350);var inst_20356 = cljs.core.seq.call(null,inst_20349__$1);var inst_20357 = inst_20356;var inst_20358 = null;var inst_20359 = (0);var inst_20360 = (0);var state_20421__$1 = (function (){var statearr_20459 = state_20421;(statearr_20459[(9)] = inst_20358);
(statearr_20459[(30)] = inst_20349__$1);
(statearr_20459[(19)] = inst_20357);
(statearr_20459[(20)] = inst_20359);
(statearr_20459[(31)] = inst_20351);
(statearr_20459[(10)] = inst_20360);
return statearr_20459;
})();var statearr_20460_20531 = state_20421__$1;(statearr_20460_20531[(2)] = null);
(statearr_20460_20531[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (28)))
{var inst_20357 = (state_20421[(19)]);var inst_20378 = (state_20421[(17)]);var inst_20378__$1 = cljs.core.seq.call(null,inst_20357);var state_20421__$1 = (function (){var statearr_20461 = state_20421;(statearr_20461[(17)] = inst_20378__$1);
return statearr_20461;
})();if(inst_20378__$1)
{var statearr_20462_20532 = state_20421__$1;(statearr_20462_20532[(1)] = (33));
} else
{var statearr_20463_20533 = state_20421__$1;(statearr_20463_20533[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (25)))
{var inst_20359 = (state_20421[(20)]);var inst_20360 = (state_20421[(10)]);var inst_20362 = (inst_20360 < inst_20359);var inst_20363 = inst_20362;var state_20421__$1 = state_20421;if(cljs.core.truth_(inst_20363))
{var statearr_20464_20534 = state_20421__$1;(statearr_20464_20534[(1)] = (27));
} else
{var statearr_20465_20535 = state_20421__$1;(statearr_20465_20535[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (34)))
{var state_20421__$1 = state_20421;var statearr_20466_20536 = state_20421__$1;(statearr_20466_20536[(2)] = null);
(statearr_20466_20536[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (17)))
{var state_20421__$1 = state_20421;var statearr_20467_20537 = state_20421__$1;(statearr_20467_20537[(2)] = null);
(statearr_20467_20537[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (3)))
{var inst_20419 = (state_20421[(2)]);var state_20421__$1 = state_20421;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20421__$1,inst_20419);
} else
{if((state_val_20422 === (12)))
{var inst_20344 = (state_20421[(2)]);var state_20421__$1 = state_20421;var statearr_20468_20538 = state_20421__$1;(statearr_20468_20538[(2)] = inst_20344);
(statearr_20468_20538[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (2)))
{var state_20421__$1 = state_20421;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20421__$1,(4),ch);
} else
{if((state_val_20422 === (23)))
{var state_20421__$1 = state_20421;var statearr_20469_20539 = state_20421__$1;(statearr_20469_20539[(2)] = null);
(statearr_20469_20539[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (35)))
{var inst_20403 = (state_20421[(2)]);var state_20421__$1 = state_20421;var statearr_20470_20540 = state_20421__$1;(statearr_20470_20540[(2)] = inst_20403);
(statearr_20470_20540[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (19)))
{var inst_20318 = (state_20421[(7)]);var inst_20322 = cljs.core.chunk_first.call(null,inst_20318);var inst_20323 = cljs.core.chunk_rest.call(null,inst_20318);var inst_20324 = cljs.core.count.call(null,inst_20322);var inst_20298 = inst_20323;var inst_20299 = inst_20322;var inst_20300 = inst_20324;var inst_20301 = (0);var state_20421__$1 = (function (){var statearr_20471 = state_20421;(statearr_20471[(13)] = inst_20299);
(statearr_20471[(14)] = inst_20301);
(statearr_20471[(15)] = inst_20298);
(statearr_20471[(16)] = inst_20300);
return statearr_20471;
})();var statearr_20472_20541 = state_20421__$1;(statearr_20472_20541[(2)] = null);
(statearr_20472_20541[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (11)))
{var inst_20318 = (state_20421[(7)]);var inst_20298 = (state_20421[(15)]);var inst_20318__$1 = cljs.core.seq.call(null,inst_20298);var state_20421__$1 = (function (){var statearr_20473 = state_20421;(statearr_20473[(7)] = inst_20318__$1);
return statearr_20473;
})();if(inst_20318__$1)
{var statearr_20474_20542 = state_20421__$1;(statearr_20474_20542[(1)] = (16));
} else
{var statearr_20475_20543 = state_20421__$1;(statearr_20475_20543[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (9)))
{var inst_20346 = (state_20421[(2)]);var state_20421__$1 = state_20421;var statearr_20476_20544 = state_20421__$1;(statearr_20476_20544[(2)] = inst_20346);
(statearr_20476_20544[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (5)))
{var inst_20296 = cljs.core.deref.call(null,cs);var inst_20297 = cljs.core.seq.call(null,inst_20296);var inst_20298 = inst_20297;var inst_20299 = null;var inst_20300 = (0);var inst_20301 = (0);var state_20421__$1 = (function (){var statearr_20477 = state_20421;(statearr_20477[(13)] = inst_20299);
(statearr_20477[(14)] = inst_20301);
(statearr_20477[(15)] = inst_20298);
(statearr_20477[(16)] = inst_20300);
return statearr_20477;
})();var statearr_20478_20545 = state_20421__$1;(statearr_20478_20545[(2)] = null);
(statearr_20478_20545[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (14)))
{var state_20421__$1 = state_20421;var statearr_20479_20546 = state_20421__$1;(statearr_20479_20546[(2)] = null);
(statearr_20479_20546[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (45)))
{var inst_20411 = (state_20421[(2)]);var state_20421__$1 = state_20421;var statearr_20480_20547 = state_20421__$1;(statearr_20480_20547[(2)] = inst_20411);
(statearr_20480_20547[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (26)))
{var inst_20349 = (state_20421[(30)]);var inst_20407 = (state_20421[(2)]);var inst_20408 = cljs.core.seq.call(null,inst_20349);var state_20421__$1 = (function (){var statearr_20481 = state_20421;(statearr_20481[(32)] = inst_20407);
return statearr_20481;
})();if(inst_20408)
{var statearr_20482_20548 = state_20421__$1;(statearr_20482_20548[(1)] = (42));
} else
{var statearr_20483_20549 = state_20421__$1;(statearr_20483_20549[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (16)))
{var inst_20318 = (state_20421[(7)]);var inst_20320 = cljs.core.chunked_seq_QMARK_.call(null,inst_20318);var state_20421__$1 = state_20421;if(inst_20320)
{var statearr_20487_20550 = state_20421__$1;(statearr_20487_20550[(1)] = (19));
} else
{var statearr_20488_20551 = state_20421__$1;(statearr_20488_20551[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (38)))
{var inst_20400 = (state_20421[(2)]);var state_20421__$1 = state_20421;var statearr_20489_20552 = state_20421__$1;(statearr_20489_20552[(2)] = inst_20400);
(statearr_20489_20552[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (30)))
{var inst_20358 = (state_20421[(9)]);var inst_20357 = (state_20421[(19)]);var inst_20359 = (state_20421[(20)]);var inst_20360 = (state_20421[(10)]);var inst_20374 = (state_20421[(2)]);var inst_20375 = (inst_20360 + (1));var tmp20484 = inst_20358;var tmp20485 = inst_20357;var tmp20486 = inst_20359;var inst_20357__$1 = tmp20485;var inst_20358__$1 = tmp20484;var inst_20359__$1 = tmp20486;var inst_20360__$1 = inst_20375;var state_20421__$1 = (function (){var statearr_20490 = state_20421;(statearr_20490[(9)] = inst_20358__$1);
(statearr_20490[(19)] = inst_20357__$1);
(statearr_20490[(33)] = inst_20374);
(statearr_20490[(20)] = inst_20359__$1);
(statearr_20490[(10)] = inst_20360__$1);
return statearr_20490;
})();var statearr_20491_20553 = state_20421__$1;(statearr_20491_20553[(2)] = null);
(statearr_20491_20553[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (10)))
{var inst_20299 = (state_20421[(13)]);var inst_20301 = (state_20421[(14)]);var inst_20307 = cljs.core._nth.call(null,inst_20299,inst_20301);var inst_20308 = cljs.core.nth.call(null,inst_20307,(0),null);var inst_20309 = cljs.core.nth.call(null,inst_20307,(1),null);var state_20421__$1 = (function (){var statearr_20492 = state_20421;(statearr_20492[(28)] = inst_20308);
return statearr_20492;
})();if(cljs.core.truth_(inst_20309))
{var statearr_20493_20554 = state_20421__$1;(statearr_20493_20554[(1)] = (13));
} else
{var statearr_20494_20555 = state_20421__$1;(statearr_20494_20555[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (18)))
{var inst_20342 = (state_20421[(2)]);var state_20421__$1 = state_20421;var statearr_20495_20556 = state_20421__$1;(statearr_20495_20556[(2)] = inst_20342);
(statearr_20495_20556[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (42)))
{var state_20421__$1 = state_20421;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20421__$1,(45),dchan);
} else
{if((state_val_20422 === (37)))
{var inst_20378 = (state_20421[(17)]);var inst_20387 = cljs.core.first.call(null,inst_20378);var state_20421__$1 = (function (){var statearr_20496 = state_20421;(statearr_20496[(25)] = inst_20387);
return statearr_20496;
})();var statearr_20497_20557 = state_20421__$1;(statearr_20497_20557[(2)] = null);
(statearr_20497_20557[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20422 === (8)))
{var inst_20301 = (state_20421[(14)]);var inst_20300 = (state_20421[(16)]);var inst_20303 = (inst_20301 < inst_20300);var inst_20304 = inst_20303;var state_20421__$1 = state_20421;if(cljs.core.truth_(inst_20304))
{var statearr_20498_20558 = state_20421__$1;(statearr_20498_20558[(1)] = (10));
} else
{var statearr_20499_20559 = state_20421__$1;(statearr_20499_20559[(1)] = (11));
}
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
});})(c__5708__auto___20507,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___20507,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_20503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20503[(0)] = state_machine__5694__auto__);
(statearr_20503[(1)] = (1));
return statearr_20503;
});
var state_machine__5694__auto____1 = (function (state_20421){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_20421);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e20504){if((e20504 instanceof Object))
{var ex__5697__auto__ = e20504;var statearr_20505_20560 = state_20421;(statearr_20505_20560[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20421);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20504;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20561 = state_20421;
state_20421 = G__20561;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_20421){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_20421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___20507,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_20506 = f__5709__auto__.call(null);(statearr_20506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___20507);
return statearr_20506;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___20507,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj20563 = {};return obj20563;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t20673 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20673 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20674){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20674 = meta20674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20673.cljs$lang$type = true;
cljs.core.async.t20673.cljs$lang$ctorStr = "cljs.core.async/t20673";
cljs.core.async.t20673.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t20673");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20673.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t20673.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20673.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20673.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20673.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20673.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20673.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20673.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20675){var self__ = this;
var _20675__$1 = this;return self__.meta20674;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20675,meta20674__$1){var self__ = this;
var _20675__$1 = this;return (new cljs.core.async.t20673(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20674__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t20673 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20673(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20674){return (new cljs.core.async.t20673(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20674));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t20673(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___20782 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___20782,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___20782,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20740){var state_val_20741 = (state_20740[(1)]);if((state_val_20741 === (7)))
{var inst_20689 = (state_20740[(7)]);var inst_20694 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20689);var state_20740__$1 = state_20740;var statearr_20742_20783 = state_20740__$1;(statearr_20742_20783[(2)] = inst_20694);
(statearr_20742_20783[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (20)))
{var inst_20704 = (state_20740[(8)]);var state_20740__$1 = state_20740;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20740__$1,(23),out,inst_20704);
} else
{if((state_val_20741 === (1)))
{var inst_20679 = (state_20740[(9)]);var inst_20679__$1 = calc_state.call(null);var inst_20680 = cljs.core.seq_QMARK_.call(null,inst_20679__$1);var state_20740__$1 = (function (){var statearr_20743 = state_20740;(statearr_20743[(9)] = inst_20679__$1);
return statearr_20743;
})();if(inst_20680)
{var statearr_20744_20784 = state_20740__$1;(statearr_20744_20784[(1)] = (2));
} else
{var statearr_20745_20785 = state_20740__$1;(statearr_20745_20785[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (4)))
{var inst_20679 = (state_20740[(9)]);var inst_20685 = (state_20740[(2)]);var inst_20686 = cljs.core.get.call(null,inst_20685,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20687 = cljs.core.get.call(null,inst_20685,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20688 = cljs.core.get.call(null,inst_20685,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_20689 = inst_20679;var state_20740__$1 = (function (){var statearr_20746 = state_20740;(statearr_20746[(7)] = inst_20689);
(statearr_20746[(10)] = inst_20686);
(statearr_20746[(11)] = inst_20688);
(statearr_20746[(12)] = inst_20687);
return statearr_20746;
})();var statearr_20747_20786 = state_20740__$1;(statearr_20747_20786[(2)] = null);
(statearr_20747_20786[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (15)))
{var state_20740__$1 = state_20740;var statearr_20748_20787 = state_20740__$1;(statearr_20748_20787[(2)] = null);
(statearr_20748_20787[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (21)))
{var state_20740__$1 = state_20740;var statearr_20749_20788 = state_20740__$1;(statearr_20749_20788[(2)] = null);
(statearr_20749_20788[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (13)))
{var inst_20736 = (state_20740[(2)]);var state_20740__$1 = state_20740;var statearr_20750_20789 = state_20740__$1;(statearr_20750_20789[(2)] = inst_20736);
(statearr_20750_20789[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (22)))
{var inst_20697 = (state_20740[(13)]);var inst_20733 = (state_20740[(2)]);var inst_20689 = inst_20697;var state_20740__$1 = (function (){var statearr_20751 = state_20740;(statearr_20751[(7)] = inst_20689);
(statearr_20751[(14)] = inst_20733);
return statearr_20751;
})();var statearr_20752_20790 = state_20740__$1;(statearr_20752_20790[(2)] = null);
(statearr_20752_20790[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (6)))
{var inst_20738 = (state_20740[(2)]);var state_20740__$1 = state_20740;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20740__$1,inst_20738);
} else
{if((state_val_20741 === (17)))
{var inst_20719 = (state_20740[(15)]);var state_20740__$1 = state_20740;var statearr_20753_20791 = state_20740__$1;(statearr_20753_20791[(2)] = inst_20719);
(statearr_20753_20791[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (3)))
{var inst_20679 = (state_20740[(9)]);var state_20740__$1 = state_20740;var statearr_20754_20792 = state_20740__$1;(statearr_20754_20792[(2)] = inst_20679);
(statearr_20754_20792[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (12)))
{var inst_20700 = (state_20740[(16)]);var inst_20705 = (state_20740[(17)]);var inst_20719 = (state_20740[(15)]);var inst_20719__$1 = inst_20700.call(null,inst_20705);var state_20740__$1 = (function (){var statearr_20755 = state_20740;(statearr_20755[(15)] = inst_20719__$1);
return statearr_20755;
})();if(cljs.core.truth_(inst_20719__$1))
{var statearr_20756_20793 = state_20740__$1;(statearr_20756_20793[(1)] = (17));
} else
{var statearr_20757_20794 = state_20740__$1;(statearr_20757_20794[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (2)))
{var inst_20679 = (state_20740[(9)]);var inst_20682 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20679);var state_20740__$1 = state_20740;var statearr_20758_20795 = state_20740__$1;(statearr_20758_20795[(2)] = inst_20682);
(statearr_20758_20795[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (23)))
{var inst_20730 = (state_20740[(2)]);var state_20740__$1 = state_20740;var statearr_20759_20796 = state_20740__$1;(statearr_20759_20796[(2)] = inst_20730);
(statearr_20759_20796[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (19)))
{var inst_20727 = (state_20740[(2)]);var state_20740__$1 = state_20740;if(cljs.core.truth_(inst_20727))
{var statearr_20760_20797 = state_20740__$1;(statearr_20760_20797[(1)] = (20));
} else
{var statearr_20761_20798 = state_20740__$1;(statearr_20761_20798[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (11)))
{var inst_20704 = (state_20740[(8)]);var inst_20710 = (inst_20704 == null);var state_20740__$1 = state_20740;if(cljs.core.truth_(inst_20710))
{var statearr_20762_20799 = state_20740__$1;(statearr_20762_20799[(1)] = (14));
} else
{var statearr_20763_20800 = state_20740__$1;(statearr_20763_20800[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (9)))
{var inst_20697 = (state_20740[(13)]);var inst_20697__$1 = (state_20740[(2)]);var inst_20698 = cljs.core.get.call(null,inst_20697__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20699 = cljs.core.get.call(null,inst_20697__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20700 = cljs.core.get.call(null,inst_20697__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_20740__$1 = (function (){var statearr_20764 = state_20740;(statearr_20764[(13)] = inst_20697__$1);
(statearr_20764[(16)] = inst_20700);
(statearr_20764[(18)] = inst_20699);
return statearr_20764;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20740__$1,(10),inst_20698);
} else
{if((state_val_20741 === (5)))
{var inst_20689 = (state_20740[(7)]);var inst_20692 = cljs.core.seq_QMARK_.call(null,inst_20689);var state_20740__$1 = state_20740;if(inst_20692)
{var statearr_20765_20801 = state_20740__$1;(statearr_20765_20801[(1)] = (7));
} else
{var statearr_20766_20802 = state_20740__$1;(statearr_20766_20802[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (14)))
{var inst_20705 = (state_20740[(17)]);var inst_20712 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20705);var state_20740__$1 = state_20740;var statearr_20767_20803 = state_20740__$1;(statearr_20767_20803[(2)] = inst_20712);
(statearr_20767_20803[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (16)))
{var inst_20715 = (state_20740[(2)]);var inst_20716 = calc_state.call(null);var inst_20689 = inst_20716;var state_20740__$1 = (function (){var statearr_20768 = state_20740;(statearr_20768[(7)] = inst_20689);
(statearr_20768[(19)] = inst_20715);
return statearr_20768;
})();var statearr_20769_20804 = state_20740__$1;(statearr_20769_20804[(2)] = null);
(statearr_20769_20804[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (10)))
{var inst_20704 = (state_20740[(8)]);var inst_20705 = (state_20740[(17)]);var inst_20703 = (state_20740[(2)]);var inst_20704__$1 = cljs.core.nth.call(null,inst_20703,(0),null);var inst_20705__$1 = cljs.core.nth.call(null,inst_20703,(1),null);var inst_20706 = (inst_20704__$1 == null);var inst_20707 = cljs.core._EQ_.call(null,inst_20705__$1,change);var inst_20708 = (inst_20706) || (inst_20707);var state_20740__$1 = (function (){var statearr_20770 = state_20740;(statearr_20770[(8)] = inst_20704__$1);
(statearr_20770[(17)] = inst_20705__$1);
return statearr_20770;
})();if(cljs.core.truth_(inst_20708))
{var statearr_20771_20805 = state_20740__$1;(statearr_20771_20805[(1)] = (11));
} else
{var statearr_20772_20806 = state_20740__$1;(statearr_20772_20806[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (18)))
{var inst_20700 = (state_20740[(16)]);var inst_20705 = (state_20740[(17)]);var inst_20699 = (state_20740[(18)]);var inst_20722 = cljs.core.empty_QMARK_.call(null,inst_20700);var inst_20723 = inst_20699.call(null,inst_20705);var inst_20724 = cljs.core.not.call(null,inst_20723);var inst_20725 = (inst_20722) && (inst_20724);var state_20740__$1 = state_20740;var statearr_20773_20807 = state_20740__$1;(statearr_20773_20807[(2)] = inst_20725);
(statearr_20773_20807[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20741 === (8)))
{var inst_20689 = (state_20740[(7)]);var state_20740__$1 = state_20740;var statearr_20774_20808 = state_20740__$1;(statearr_20774_20808[(2)] = inst_20689);
(statearr_20774_20808[(1)] = (9));
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
});})(c__5708__auto___20782,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___20782,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_20778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20778[(0)] = state_machine__5694__auto__);
(statearr_20778[(1)] = (1));
return statearr_20778;
});
var state_machine__5694__auto____1 = (function (state_20740){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_20740);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e20779){if((e20779 instanceof Object))
{var ex__5697__auto__ = e20779;var statearr_20780_20809 = state_20740;(statearr_20780_20809[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20740);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20779;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20810 = state_20740;
state_20740 = G__20810;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_20740){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_20740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___20782,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_20781 = f__5709__auto__.call(null);(statearr_20781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___20782);
return statearr_20781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___20782,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj20812 = {};return obj20812;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3558__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3558__auto__,mults){
return (function (p1__20813_SHARP_){if(cljs.core.truth_(p1__20813_SHARP_.call(null,topic)))
{return p1__20813_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__20813_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t20938 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20938 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20939){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20939 = meta20939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20938.cljs$lang$type = true;
cljs.core.async.t20938.cljs$lang$ctorStr = "cljs.core.async/t20938";
cljs.core.async.t20938.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t20938");
});})(mults,ensure_mult))
;
cljs.core.async.t20938.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t20938.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t20938.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t20938.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t20938.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t20938.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20938.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t20938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20940){var self__ = this;
var _20940__$1 = this;return self__.meta20939;
});})(mults,ensure_mult))
;
cljs.core.async.t20938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20940,meta20939__$1){var self__ = this;
var _20940__$1 = this;return (new cljs.core.async.t20938(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20939__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t20938 = ((function (mults,ensure_mult){
return (function __GT_t20938(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20939){return (new cljs.core.async.t20938(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20939));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t20938(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___21062 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21062,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21062,mults,ensure_mult,p){
return (function (state_21014){var state_val_21015 = (state_21014[(1)]);if((state_val_21015 === (7)))
{var inst_21010 = (state_21014[(2)]);var state_21014__$1 = state_21014;var statearr_21016_21063 = state_21014__$1;(statearr_21016_21063[(2)] = inst_21010);
(statearr_21016_21063[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (20)))
{var state_21014__$1 = state_21014;var statearr_21017_21064 = state_21014__$1;(statearr_21017_21064[(2)] = null);
(statearr_21017_21064[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (1)))
{var state_21014__$1 = state_21014;var statearr_21018_21065 = state_21014__$1;(statearr_21018_21065[(2)] = null);
(statearr_21018_21065[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (24)))
{var inst_20993 = (state_21014[(7)]);var inst_20943 = (state_21014[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21014,(23),Object,null,(22));var inst_21000 = cljs.core.async.muxch_STAR_.call(null,inst_20993);var state_21014__$1 = state_21014;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21014__$1,(25),inst_21000,inst_20943);
} else
{if((state_val_21015 === (4)))
{var inst_20943 = (state_21014[(8)]);var inst_20943__$1 = (state_21014[(2)]);var inst_20944 = (inst_20943__$1 == null);var state_21014__$1 = (function (){var statearr_21019 = state_21014;(statearr_21019[(8)] = inst_20943__$1);
return statearr_21019;
})();if(cljs.core.truth_(inst_20944))
{var statearr_21020_21066 = state_21014__$1;(statearr_21020_21066[(1)] = (5));
} else
{var statearr_21021_21067 = state_21014__$1;(statearr_21021_21067[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (15)))
{var inst_20985 = (state_21014[(2)]);var state_21014__$1 = state_21014;var statearr_21022_21068 = state_21014__$1;(statearr_21022_21068[(2)] = inst_20985);
(statearr_21022_21068[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (21)))
{var inst_21007 = (state_21014[(2)]);var state_21014__$1 = (function (){var statearr_21023 = state_21014;(statearr_21023[(9)] = inst_21007);
return statearr_21023;
})();var statearr_21024_21069 = state_21014__$1;(statearr_21024_21069[(2)] = null);
(statearr_21024_21069[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (13)))
{var inst_20967 = (state_21014[(10)]);var inst_20969 = cljs.core.chunked_seq_QMARK_.call(null,inst_20967);var state_21014__$1 = state_21014;if(inst_20969)
{var statearr_21025_21070 = state_21014__$1;(statearr_21025_21070[(1)] = (16));
} else
{var statearr_21026_21071 = state_21014__$1;(statearr_21026_21071[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (22)))
{var inst_21004 = (state_21014[(2)]);var state_21014__$1 = state_21014;var statearr_21027_21072 = state_21014__$1;(statearr_21027_21072[(2)] = inst_21004);
(statearr_21027_21072[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (6)))
{var inst_20993 = (state_21014[(7)]);var inst_20943 = (state_21014[(8)]);var inst_20991 = (state_21014[(11)]);var inst_20991__$1 = topic_fn.call(null,inst_20943);var inst_20992 = cljs.core.deref.call(null,mults);var inst_20993__$1 = cljs.core.get.call(null,inst_20992,inst_20991__$1);var state_21014__$1 = (function (){var statearr_21028 = state_21014;(statearr_21028[(7)] = inst_20993__$1);
(statearr_21028[(11)] = inst_20991__$1);
return statearr_21028;
})();if(cljs.core.truth_(inst_20993__$1))
{var statearr_21029_21073 = state_21014__$1;(statearr_21029_21073[(1)] = (19));
} else
{var statearr_21030_21074 = state_21014__$1;(statearr_21030_21074[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (25)))
{var inst_21002 = (state_21014[(2)]);var state_21014__$1 = state_21014;var statearr_21031_21075 = state_21014__$1;(statearr_21031_21075[(2)] = inst_21002);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21014__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (17)))
{var inst_20967 = (state_21014[(10)]);var inst_20976 = cljs.core.first.call(null,inst_20967);var inst_20977 = cljs.core.async.muxch_STAR_.call(null,inst_20976);var inst_20978 = cljs.core.async.close_BANG_.call(null,inst_20977);var inst_20979 = cljs.core.next.call(null,inst_20967);var inst_20953 = inst_20979;var inst_20954 = null;var inst_20955 = (0);var inst_20956 = (0);var state_21014__$1 = (function (){var statearr_21032 = state_21014;(statearr_21032[(12)] = inst_20956);
(statearr_21032[(13)] = inst_20954);
(statearr_21032[(14)] = inst_20955);
(statearr_21032[(15)] = inst_20978);
(statearr_21032[(16)] = inst_20953);
return statearr_21032;
})();var statearr_21033_21076 = state_21014__$1;(statearr_21033_21076[(2)] = null);
(statearr_21033_21076[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (3)))
{var inst_21012 = (state_21014[(2)]);var state_21014__$1 = state_21014;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21014__$1,inst_21012);
} else
{if((state_val_21015 === (12)))
{var inst_20987 = (state_21014[(2)]);var state_21014__$1 = state_21014;var statearr_21034_21077 = state_21014__$1;(statearr_21034_21077[(2)] = inst_20987);
(statearr_21034_21077[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (2)))
{var state_21014__$1 = state_21014;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21014__$1,(4),ch);
} else
{if((state_val_21015 === (23)))
{var inst_20991 = (state_21014[(11)]);var inst_20995 = (state_21014[(2)]);var inst_20996 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20991);var state_21014__$1 = (function (){var statearr_21035 = state_21014;(statearr_21035[(17)] = inst_20995);
return statearr_21035;
})();var statearr_21036_21078 = state_21014__$1;(statearr_21036_21078[(2)] = inst_20996);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21014__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (19)))
{var state_21014__$1 = state_21014;var statearr_21037_21079 = state_21014__$1;(statearr_21037_21079[(2)] = null);
(statearr_21037_21079[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (11)))
{var inst_20967 = (state_21014[(10)]);var inst_20953 = (state_21014[(16)]);var inst_20967__$1 = cljs.core.seq.call(null,inst_20953);var state_21014__$1 = (function (){var statearr_21038 = state_21014;(statearr_21038[(10)] = inst_20967__$1);
return statearr_21038;
})();if(inst_20967__$1)
{var statearr_21039_21080 = state_21014__$1;(statearr_21039_21080[(1)] = (13));
} else
{var statearr_21040_21081 = state_21014__$1;(statearr_21040_21081[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (9)))
{var inst_20989 = (state_21014[(2)]);var state_21014__$1 = state_21014;var statearr_21041_21082 = state_21014__$1;(statearr_21041_21082[(2)] = inst_20989);
(statearr_21041_21082[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (5)))
{var inst_20950 = cljs.core.deref.call(null,mults);var inst_20951 = cljs.core.vals.call(null,inst_20950);var inst_20952 = cljs.core.seq.call(null,inst_20951);var inst_20953 = inst_20952;var inst_20954 = null;var inst_20955 = (0);var inst_20956 = (0);var state_21014__$1 = (function (){var statearr_21042 = state_21014;(statearr_21042[(12)] = inst_20956);
(statearr_21042[(13)] = inst_20954);
(statearr_21042[(14)] = inst_20955);
(statearr_21042[(16)] = inst_20953);
return statearr_21042;
})();var statearr_21043_21083 = state_21014__$1;(statearr_21043_21083[(2)] = null);
(statearr_21043_21083[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (14)))
{var state_21014__$1 = state_21014;var statearr_21047_21084 = state_21014__$1;(statearr_21047_21084[(2)] = null);
(statearr_21047_21084[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (16)))
{var inst_20967 = (state_21014[(10)]);var inst_20971 = cljs.core.chunk_first.call(null,inst_20967);var inst_20972 = cljs.core.chunk_rest.call(null,inst_20967);var inst_20973 = cljs.core.count.call(null,inst_20971);var inst_20953 = inst_20972;var inst_20954 = inst_20971;var inst_20955 = inst_20973;var inst_20956 = (0);var state_21014__$1 = (function (){var statearr_21048 = state_21014;(statearr_21048[(12)] = inst_20956);
(statearr_21048[(13)] = inst_20954);
(statearr_21048[(14)] = inst_20955);
(statearr_21048[(16)] = inst_20953);
return statearr_21048;
})();var statearr_21049_21085 = state_21014__$1;(statearr_21049_21085[(2)] = null);
(statearr_21049_21085[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (10)))
{var inst_20956 = (state_21014[(12)]);var inst_20954 = (state_21014[(13)]);var inst_20955 = (state_21014[(14)]);var inst_20953 = (state_21014[(16)]);var inst_20961 = cljs.core._nth.call(null,inst_20954,inst_20956);var inst_20962 = cljs.core.async.muxch_STAR_.call(null,inst_20961);var inst_20963 = cljs.core.async.close_BANG_.call(null,inst_20962);var inst_20964 = (inst_20956 + (1));var tmp21044 = inst_20954;var tmp21045 = inst_20955;var tmp21046 = inst_20953;var inst_20953__$1 = tmp21046;var inst_20954__$1 = tmp21044;var inst_20955__$1 = tmp21045;var inst_20956__$1 = inst_20964;var state_21014__$1 = (function (){var statearr_21050 = state_21014;(statearr_21050[(12)] = inst_20956__$1);
(statearr_21050[(13)] = inst_20954__$1);
(statearr_21050[(14)] = inst_20955__$1);
(statearr_21050[(18)] = inst_20963);
(statearr_21050[(16)] = inst_20953__$1);
return statearr_21050;
})();var statearr_21051_21086 = state_21014__$1;(statearr_21051_21086[(2)] = null);
(statearr_21051_21086[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (18)))
{var inst_20982 = (state_21014[(2)]);var state_21014__$1 = state_21014;var statearr_21052_21087 = state_21014__$1;(statearr_21052_21087[(2)] = inst_20982);
(statearr_21052_21087[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21015 === (8)))
{var inst_20956 = (state_21014[(12)]);var inst_20955 = (state_21014[(14)]);var inst_20958 = (inst_20956 < inst_20955);var inst_20959 = inst_20958;var state_21014__$1 = state_21014;if(cljs.core.truth_(inst_20959))
{var statearr_21053_21088 = state_21014__$1;(statearr_21053_21088[(1)] = (10));
} else
{var statearr_21054_21089 = state_21014__$1;(statearr_21054_21089[(1)] = (11));
}
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
}
}
});})(c__5708__auto___21062,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___21062,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21058[(0)] = state_machine__5694__auto__);
(statearr_21058[(1)] = (1));
return statearr_21058;
});
var state_machine__5694__auto____1 = (function (state_21014){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21014);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21059){if((e21059 instanceof Object))
{var ex__5697__auto__ = e21059;var statearr_21060_21090 = state_21014;(statearr_21060_21090[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21014);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21059;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21091 = state_21014;
state_21014 = G__21091;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21014){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21062,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_21061 = f__5709__auto__.call(null);(statearr_21061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21062);
return statearr_21061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21062,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5708__auto___21228 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21228,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21228,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21198){var state_val_21199 = (state_21198[(1)]);if((state_val_21199 === (7)))
{var state_21198__$1 = state_21198;var statearr_21200_21229 = state_21198__$1;(statearr_21200_21229[(2)] = null);
(statearr_21200_21229[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21199 === (1)))
{var state_21198__$1 = state_21198;var statearr_21201_21230 = state_21198__$1;(statearr_21201_21230[(2)] = null);
(statearr_21201_21230[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21199 === (4)))
{var inst_21162 = (state_21198[(7)]);var inst_21164 = (inst_21162 < cnt);var state_21198__$1 = state_21198;if(cljs.core.truth_(inst_21164))
{var statearr_21202_21231 = state_21198__$1;(statearr_21202_21231[(1)] = (6));
} else
{var statearr_21203_21232 = state_21198__$1;(statearr_21203_21232[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21199 === (15)))
{var inst_21194 = (state_21198[(2)]);var state_21198__$1 = state_21198;var statearr_21204_21233 = state_21198__$1;(statearr_21204_21233[(2)] = inst_21194);
(statearr_21204_21233[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21199 === (13)))
{var inst_21187 = cljs.core.async.close_BANG_.call(null,out);var state_21198__$1 = state_21198;var statearr_21205_21234 = state_21198__$1;(statearr_21205_21234[(2)] = inst_21187);
(statearr_21205_21234[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21199 === (6)))
{var state_21198__$1 = state_21198;var statearr_21206_21235 = state_21198__$1;(statearr_21206_21235[(2)] = null);
(statearr_21206_21235[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21199 === (3)))
{var inst_21196 = (state_21198[(2)]);var state_21198__$1 = state_21198;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21198__$1,inst_21196);
} else
{if((state_val_21199 === (12)))
{var inst_21184 = (state_21198[(8)]);var inst_21184__$1 = (state_21198[(2)]);var inst_21185 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21184__$1);var state_21198__$1 = (function (){var statearr_21207 = state_21198;(statearr_21207[(8)] = inst_21184__$1);
return statearr_21207;
})();if(cljs.core.truth_(inst_21185))
{var statearr_21208_21236 = state_21198__$1;(statearr_21208_21236[(1)] = (13));
} else
{var statearr_21209_21237 = state_21198__$1;(statearr_21209_21237[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21199 === (2)))
{var inst_21161 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_21162 = (0);var state_21198__$1 = (function (){var statearr_21210 = state_21198;(statearr_21210[(7)] = inst_21162);
(statearr_21210[(9)] = inst_21161);
return statearr_21210;
})();var statearr_21211_21238 = state_21198__$1;(statearr_21211_21238[(2)] = null);
(statearr_21211_21238[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21199 === (11)))
{var inst_21162 = (state_21198[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21198,(10),Object,null,(9));var inst_21171 = chs__$1.call(null,inst_21162);var inst_21172 = done.call(null,inst_21162);var inst_21173 = cljs.core.async.take_BANG_.call(null,inst_21171,inst_21172);var state_21198__$1 = state_21198;var statearr_21212_21239 = state_21198__$1;(statearr_21212_21239[(2)] = inst_21173);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21198__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21199 === (9)))
{var inst_21162 = (state_21198[(7)]);var inst_21175 = (state_21198[(2)]);var inst_21176 = (inst_21162 + (1));var inst_21162__$1 = inst_21176;var state_21198__$1 = (function (){var statearr_21213 = state_21198;(statearr_21213[(10)] = inst_21175);
(statearr_21213[(7)] = inst_21162__$1);
return statearr_21213;
})();var statearr_21214_21240 = state_21198__$1;(statearr_21214_21240[(2)] = null);
(statearr_21214_21240[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21199 === (5)))
{var inst_21182 = (state_21198[(2)]);var state_21198__$1 = (function (){var statearr_21215 = state_21198;(statearr_21215[(11)] = inst_21182);
return statearr_21215;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21198__$1,(12),dchan);
} else
{if((state_val_21199 === (14)))
{var inst_21184 = (state_21198[(8)]);var inst_21189 = cljs.core.apply.call(null,f,inst_21184);var state_21198__$1 = state_21198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21198__$1,(16),out,inst_21189);
} else
{if((state_val_21199 === (16)))
{var inst_21191 = (state_21198[(2)]);var state_21198__$1 = (function (){var statearr_21216 = state_21198;(statearr_21216[(12)] = inst_21191);
return statearr_21216;
})();var statearr_21217_21241 = state_21198__$1;(statearr_21217_21241[(2)] = null);
(statearr_21217_21241[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21199 === (10)))
{var inst_21166 = (state_21198[(2)]);var inst_21167 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_21198__$1 = (function (){var statearr_21218 = state_21198;(statearr_21218[(13)] = inst_21166);
return statearr_21218;
})();var statearr_21219_21242 = state_21198__$1;(statearr_21219_21242[(2)] = inst_21167);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21198__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21199 === (8)))
{var inst_21180 = (state_21198[(2)]);var state_21198__$1 = state_21198;var statearr_21220_21243 = state_21198__$1;(statearr_21220_21243[(2)] = inst_21180);
(statearr_21220_21243[(1)] = (5));
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
});})(c__5708__auto___21228,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___21228,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21224[(0)] = state_machine__5694__auto__);
(statearr_21224[(1)] = (1));
return statearr_21224;
});
var state_machine__5694__auto____1 = (function (state_21198){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21198);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21225){if((e21225 instanceof Object))
{var ex__5697__auto__ = e21225;var statearr_21226_21244 = state_21198;(statearr_21226_21244[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21198);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21225;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21245 = state_21198;
state_21198 = G__21245;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21198){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21228,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_21227 = f__5709__auto__.call(null);(statearr_21227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21228);
return statearr_21227;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21228,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___21353 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21353,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21353,out){
return (function (state_21329){var state_val_21330 = (state_21329[(1)]);if((state_val_21330 === (7)))
{var inst_21309 = (state_21329[(7)]);var inst_21308 = (state_21329[(8)]);var inst_21308__$1 = (state_21329[(2)]);var inst_21309__$1 = cljs.core.nth.call(null,inst_21308__$1,(0),null);var inst_21310 = cljs.core.nth.call(null,inst_21308__$1,(1),null);var inst_21311 = (inst_21309__$1 == null);var state_21329__$1 = (function (){var statearr_21331 = state_21329;(statearr_21331[(7)] = inst_21309__$1);
(statearr_21331[(9)] = inst_21310);
(statearr_21331[(8)] = inst_21308__$1);
return statearr_21331;
})();if(cljs.core.truth_(inst_21311))
{var statearr_21332_21354 = state_21329__$1;(statearr_21332_21354[(1)] = (8));
} else
{var statearr_21333_21355 = state_21329__$1;(statearr_21333_21355[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21330 === (1)))
{var inst_21300 = cljs.core.vec.call(null,chs);var inst_21301 = inst_21300;var state_21329__$1 = (function (){var statearr_21334 = state_21329;(statearr_21334[(10)] = inst_21301);
return statearr_21334;
})();var statearr_21335_21356 = state_21329__$1;(statearr_21335_21356[(2)] = null);
(statearr_21335_21356[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21330 === (4)))
{var inst_21301 = (state_21329[(10)]);var state_21329__$1 = state_21329;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21329__$1,(7),inst_21301);
} else
{if((state_val_21330 === (6)))
{var inst_21325 = (state_21329[(2)]);var state_21329__$1 = state_21329;var statearr_21336_21357 = state_21329__$1;(statearr_21336_21357[(2)] = inst_21325);
(statearr_21336_21357[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21330 === (3)))
{var inst_21327 = (state_21329[(2)]);var state_21329__$1 = state_21329;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21329__$1,inst_21327);
} else
{if((state_val_21330 === (2)))
{var inst_21301 = (state_21329[(10)]);var inst_21303 = cljs.core.count.call(null,inst_21301);var inst_21304 = (inst_21303 > (0));var state_21329__$1 = state_21329;if(cljs.core.truth_(inst_21304))
{var statearr_21338_21358 = state_21329__$1;(statearr_21338_21358[(1)] = (4));
} else
{var statearr_21339_21359 = state_21329__$1;(statearr_21339_21359[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21330 === (11)))
{var inst_21301 = (state_21329[(10)]);var inst_21318 = (state_21329[(2)]);var tmp21337 = inst_21301;var inst_21301__$1 = tmp21337;var state_21329__$1 = (function (){var statearr_21340 = state_21329;(statearr_21340[(10)] = inst_21301__$1);
(statearr_21340[(11)] = inst_21318);
return statearr_21340;
})();var statearr_21341_21360 = state_21329__$1;(statearr_21341_21360[(2)] = null);
(statearr_21341_21360[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21330 === (9)))
{var inst_21309 = (state_21329[(7)]);var state_21329__$1 = state_21329;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21329__$1,(11),out,inst_21309);
} else
{if((state_val_21330 === (5)))
{var inst_21323 = cljs.core.async.close_BANG_.call(null,out);var state_21329__$1 = state_21329;var statearr_21342_21361 = state_21329__$1;(statearr_21342_21361[(2)] = inst_21323);
(statearr_21342_21361[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21330 === (10)))
{var inst_21321 = (state_21329[(2)]);var state_21329__$1 = state_21329;var statearr_21343_21362 = state_21329__$1;(statearr_21343_21362[(2)] = inst_21321);
(statearr_21343_21362[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21330 === (8)))
{var inst_21301 = (state_21329[(10)]);var inst_21309 = (state_21329[(7)]);var inst_21310 = (state_21329[(9)]);var inst_21308 = (state_21329[(8)]);var inst_21313 = (function (){var c = inst_21310;var v = inst_21309;var vec__21306 = inst_21308;var cs = inst_21301;return ((function (c,v,vec__21306,cs,inst_21301,inst_21309,inst_21310,inst_21308,state_val_21330,c__5708__auto___21353,out){
return (function (p1__21246_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__21246_SHARP_);
});
;})(c,v,vec__21306,cs,inst_21301,inst_21309,inst_21310,inst_21308,state_val_21330,c__5708__auto___21353,out))
})();var inst_21314 = cljs.core.filterv.call(null,inst_21313,inst_21301);var inst_21301__$1 = inst_21314;var state_21329__$1 = (function (){var statearr_21344 = state_21329;(statearr_21344[(10)] = inst_21301__$1);
return statearr_21344;
})();var statearr_21345_21363 = state_21329__$1;(statearr_21345_21363[(2)] = null);
(statearr_21345_21363[(1)] = (2));
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
});})(c__5708__auto___21353,out))
;return ((function (switch__5693__auto__,c__5708__auto___21353,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21349 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21349[(0)] = state_machine__5694__auto__);
(statearr_21349[(1)] = (1));
return statearr_21349;
});
var state_machine__5694__auto____1 = (function (state_21329){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21329);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21350){if((e21350 instanceof Object))
{var ex__5697__auto__ = e21350;var statearr_21351_21364 = state_21329;(statearr_21351_21364[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21329);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21350;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21365 = state_21329;
state_21329 = G__21365;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21329){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21353,out))
})();var state__5710__auto__ = (function (){var statearr_21352 = f__5709__auto__.call(null);(statearr_21352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21353);
return statearr_21352;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21353,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___21458 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21458,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21458,out){
return (function (state_21435){var state_val_21436 = (state_21435[(1)]);if((state_val_21436 === (7)))
{var inst_21417 = (state_21435[(7)]);var inst_21417__$1 = (state_21435[(2)]);var inst_21418 = (inst_21417__$1 == null);var inst_21419 = cljs.core.not.call(null,inst_21418);var state_21435__$1 = (function (){var statearr_21437 = state_21435;(statearr_21437[(7)] = inst_21417__$1);
return statearr_21437;
})();if(inst_21419)
{var statearr_21438_21459 = state_21435__$1;(statearr_21438_21459[(1)] = (8));
} else
{var statearr_21439_21460 = state_21435__$1;(statearr_21439_21460[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21436 === (1)))
{var inst_21412 = (0);var state_21435__$1 = (function (){var statearr_21440 = state_21435;(statearr_21440[(8)] = inst_21412);
return statearr_21440;
})();var statearr_21441_21461 = state_21435__$1;(statearr_21441_21461[(2)] = null);
(statearr_21441_21461[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21436 === (4)))
{var state_21435__$1 = state_21435;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21435__$1,(7),ch);
} else
{if((state_val_21436 === (6)))
{var inst_21430 = (state_21435[(2)]);var state_21435__$1 = state_21435;var statearr_21442_21462 = state_21435__$1;(statearr_21442_21462[(2)] = inst_21430);
(statearr_21442_21462[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21436 === (3)))
{var inst_21432 = (state_21435[(2)]);var inst_21433 = cljs.core.async.close_BANG_.call(null,out);var state_21435__$1 = (function (){var statearr_21443 = state_21435;(statearr_21443[(9)] = inst_21432);
return statearr_21443;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21435__$1,inst_21433);
} else
{if((state_val_21436 === (2)))
{var inst_21412 = (state_21435[(8)]);var inst_21414 = (inst_21412 < n);var state_21435__$1 = state_21435;if(cljs.core.truth_(inst_21414))
{var statearr_21444_21463 = state_21435__$1;(statearr_21444_21463[(1)] = (4));
} else
{var statearr_21445_21464 = state_21435__$1;(statearr_21445_21464[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21436 === (11)))
{var inst_21412 = (state_21435[(8)]);var inst_21422 = (state_21435[(2)]);var inst_21423 = (inst_21412 + (1));var inst_21412__$1 = inst_21423;var state_21435__$1 = (function (){var statearr_21446 = state_21435;(statearr_21446[(10)] = inst_21422);
(statearr_21446[(8)] = inst_21412__$1);
return statearr_21446;
})();var statearr_21447_21465 = state_21435__$1;(statearr_21447_21465[(2)] = null);
(statearr_21447_21465[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21436 === (9)))
{var state_21435__$1 = state_21435;var statearr_21448_21466 = state_21435__$1;(statearr_21448_21466[(2)] = null);
(statearr_21448_21466[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21436 === (5)))
{var state_21435__$1 = state_21435;var statearr_21449_21467 = state_21435__$1;(statearr_21449_21467[(2)] = null);
(statearr_21449_21467[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21436 === (10)))
{var inst_21427 = (state_21435[(2)]);var state_21435__$1 = state_21435;var statearr_21450_21468 = state_21435__$1;(statearr_21450_21468[(2)] = inst_21427);
(statearr_21450_21468[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21436 === (8)))
{var inst_21417 = (state_21435[(7)]);var state_21435__$1 = state_21435;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21435__$1,(11),out,inst_21417);
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
});})(c__5708__auto___21458,out))
;return ((function (switch__5693__auto__,c__5708__auto___21458,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21454 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21454[(0)] = state_machine__5694__auto__);
(statearr_21454[(1)] = (1));
return statearr_21454;
});
var state_machine__5694__auto____1 = (function (state_21435){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21435);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21455){if((e21455 instanceof Object))
{var ex__5697__auto__ = e21455;var statearr_21456_21469 = state_21435;(statearr_21456_21469[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21435);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21455;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21470 = state_21435;
state_21435 = G__21470;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21435){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21458,out))
})();var state__5710__auto__ = (function (){var statearr_21457 = f__5709__auto__.call(null);(statearr_21457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21458);
return statearr_21457;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21458,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___21567 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21567,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21567,out){
return (function (state_21542){var state_val_21543 = (state_21542[(1)]);if((state_val_21543 === (7)))
{var inst_21537 = (state_21542[(2)]);var state_21542__$1 = state_21542;var statearr_21544_21568 = state_21542__$1;(statearr_21544_21568[(2)] = inst_21537);
(statearr_21544_21568[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21543 === (1)))
{var inst_21519 = null;var state_21542__$1 = (function (){var statearr_21545 = state_21542;(statearr_21545[(7)] = inst_21519);
return statearr_21545;
})();var statearr_21546_21569 = state_21542__$1;(statearr_21546_21569[(2)] = null);
(statearr_21546_21569[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21543 === (4)))
{var inst_21522 = (state_21542[(8)]);var inst_21522__$1 = (state_21542[(2)]);var inst_21523 = (inst_21522__$1 == null);var inst_21524 = cljs.core.not.call(null,inst_21523);var state_21542__$1 = (function (){var statearr_21547 = state_21542;(statearr_21547[(8)] = inst_21522__$1);
return statearr_21547;
})();if(inst_21524)
{var statearr_21548_21570 = state_21542__$1;(statearr_21548_21570[(1)] = (5));
} else
{var statearr_21549_21571 = state_21542__$1;(statearr_21549_21571[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21543 === (6)))
{var state_21542__$1 = state_21542;var statearr_21550_21572 = state_21542__$1;(statearr_21550_21572[(2)] = null);
(statearr_21550_21572[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21543 === (3)))
{var inst_21539 = (state_21542[(2)]);var inst_21540 = cljs.core.async.close_BANG_.call(null,out);var state_21542__$1 = (function (){var statearr_21551 = state_21542;(statearr_21551[(9)] = inst_21539);
return statearr_21551;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21542__$1,inst_21540);
} else
{if((state_val_21543 === (2)))
{var state_21542__$1 = state_21542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21542__$1,(4),ch);
} else
{if((state_val_21543 === (11)))
{var inst_21522 = (state_21542[(8)]);var inst_21531 = (state_21542[(2)]);var inst_21519 = inst_21522;var state_21542__$1 = (function (){var statearr_21552 = state_21542;(statearr_21552[(10)] = inst_21531);
(statearr_21552[(7)] = inst_21519);
return statearr_21552;
})();var statearr_21553_21573 = state_21542__$1;(statearr_21553_21573[(2)] = null);
(statearr_21553_21573[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21543 === (9)))
{var inst_21522 = (state_21542[(8)]);var state_21542__$1 = state_21542;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21542__$1,(11),out,inst_21522);
} else
{if((state_val_21543 === (5)))
{var inst_21519 = (state_21542[(7)]);var inst_21522 = (state_21542[(8)]);var inst_21526 = cljs.core._EQ_.call(null,inst_21522,inst_21519);var state_21542__$1 = state_21542;if(inst_21526)
{var statearr_21555_21574 = state_21542__$1;(statearr_21555_21574[(1)] = (8));
} else
{var statearr_21556_21575 = state_21542__$1;(statearr_21556_21575[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21543 === (10)))
{var inst_21534 = (state_21542[(2)]);var state_21542__$1 = state_21542;var statearr_21557_21576 = state_21542__$1;(statearr_21557_21576[(2)] = inst_21534);
(statearr_21557_21576[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21543 === (8)))
{var inst_21519 = (state_21542[(7)]);var tmp21554 = inst_21519;var inst_21519__$1 = tmp21554;var state_21542__$1 = (function (){var statearr_21558 = state_21542;(statearr_21558[(7)] = inst_21519__$1);
return statearr_21558;
})();var statearr_21559_21577 = state_21542__$1;(statearr_21559_21577[(2)] = null);
(statearr_21559_21577[(1)] = (2));
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
});})(c__5708__auto___21567,out))
;return ((function (switch__5693__auto__,c__5708__auto___21567,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21563 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21563[(0)] = state_machine__5694__auto__);
(statearr_21563[(1)] = (1));
return statearr_21563;
});
var state_machine__5694__auto____1 = (function (state_21542){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21542);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21564){if((e21564 instanceof Object))
{var ex__5697__auto__ = e21564;var statearr_21565_21578 = state_21542;(statearr_21565_21578[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21542);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21564;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21579 = state_21542;
state_21542 = G__21579;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21542){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21567,out))
})();var state__5710__auto__ = (function (){var statearr_21566 = f__5709__auto__.call(null);(statearr_21566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21567);
return statearr_21566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21567,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___21714 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21714,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21714,out){
return (function (state_21684){var state_val_21685 = (state_21684[(1)]);if((state_val_21685 === (7)))
{var inst_21680 = (state_21684[(2)]);var state_21684__$1 = state_21684;var statearr_21686_21715 = state_21684__$1;(statearr_21686_21715[(2)] = inst_21680);
(statearr_21686_21715[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21685 === (1)))
{var inst_21647 = (new Array(n));var inst_21648 = inst_21647;var inst_21649 = (0);var state_21684__$1 = (function (){var statearr_21687 = state_21684;(statearr_21687[(7)] = inst_21649);
(statearr_21687[(8)] = inst_21648);
return statearr_21687;
})();var statearr_21688_21716 = state_21684__$1;(statearr_21688_21716[(2)] = null);
(statearr_21688_21716[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21685 === (4)))
{var inst_21652 = (state_21684[(9)]);var inst_21652__$1 = (state_21684[(2)]);var inst_21653 = (inst_21652__$1 == null);var inst_21654 = cljs.core.not.call(null,inst_21653);var state_21684__$1 = (function (){var statearr_21689 = state_21684;(statearr_21689[(9)] = inst_21652__$1);
return statearr_21689;
})();if(inst_21654)
{var statearr_21690_21717 = state_21684__$1;(statearr_21690_21717[(1)] = (5));
} else
{var statearr_21691_21718 = state_21684__$1;(statearr_21691_21718[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21685 === (15)))
{var inst_21674 = (state_21684[(2)]);var state_21684__$1 = state_21684;var statearr_21692_21719 = state_21684__$1;(statearr_21692_21719[(2)] = inst_21674);
(statearr_21692_21719[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21685 === (13)))
{var state_21684__$1 = state_21684;var statearr_21693_21720 = state_21684__$1;(statearr_21693_21720[(2)] = null);
(statearr_21693_21720[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21685 === (6)))
{var inst_21649 = (state_21684[(7)]);var inst_21670 = (inst_21649 > (0));var state_21684__$1 = state_21684;if(cljs.core.truth_(inst_21670))
{var statearr_21694_21721 = state_21684__$1;(statearr_21694_21721[(1)] = (12));
} else
{var statearr_21695_21722 = state_21684__$1;(statearr_21695_21722[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21685 === (3)))
{var inst_21682 = (state_21684[(2)]);var state_21684__$1 = state_21684;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21684__$1,inst_21682);
} else
{if((state_val_21685 === (12)))
{var inst_21648 = (state_21684[(8)]);var inst_21672 = cljs.core.vec.call(null,inst_21648);var state_21684__$1 = state_21684;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21684__$1,(15),out,inst_21672);
} else
{if((state_val_21685 === (2)))
{var state_21684__$1 = state_21684;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21684__$1,(4),ch);
} else
{if((state_val_21685 === (11)))
{var inst_21664 = (state_21684[(2)]);var inst_21665 = (new Array(n));var inst_21648 = inst_21665;var inst_21649 = (0);var state_21684__$1 = (function (){var statearr_21696 = state_21684;(statearr_21696[(10)] = inst_21664);
(statearr_21696[(7)] = inst_21649);
(statearr_21696[(8)] = inst_21648);
return statearr_21696;
})();var statearr_21697_21723 = state_21684__$1;(statearr_21697_21723[(2)] = null);
(statearr_21697_21723[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21685 === (9)))
{var inst_21648 = (state_21684[(8)]);var inst_21662 = cljs.core.vec.call(null,inst_21648);var state_21684__$1 = state_21684;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21684__$1,(11),out,inst_21662);
} else
{if((state_val_21685 === (5)))
{var inst_21657 = (state_21684[(11)]);var inst_21649 = (state_21684[(7)]);var inst_21648 = (state_21684[(8)]);var inst_21652 = (state_21684[(9)]);var inst_21656 = (inst_21648[inst_21649] = inst_21652);var inst_21657__$1 = (inst_21649 + (1));var inst_21658 = (inst_21657__$1 < n);var state_21684__$1 = (function (){var statearr_21698 = state_21684;(statearr_21698[(11)] = inst_21657__$1);
(statearr_21698[(12)] = inst_21656);
return statearr_21698;
})();if(cljs.core.truth_(inst_21658))
{var statearr_21699_21724 = state_21684__$1;(statearr_21699_21724[(1)] = (8));
} else
{var statearr_21700_21725 = state_21684__$1;(statearr_21700_21725[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21685 === (14)))
{var inst_21677 = (state_21684[(2)]);var inst_21678 = cljs.core.async.close_BANG_.call(null,out);var state_21684__$1 = (function (){var statearr_21702 = state_21684;(statearr_21702[(13)] = inst_21677);
return statearr_21702;
})();var statearr_21703_21726 = state_21684__$1;(statearr_21703_21726[(2)] = inst_21678);
(statearr_21703_21726[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21685 === (10)))
{var inst_21668 = (state_21684[(2)]);var state_21684__$1 = state_21684;var statearr_21704_21727 = state_21684__$1;(statearr_21704_21727[(2)] = inst_21668);
(statearr_21704_21727[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21685 === (8)))
{var inst_21657 = (state_21684[(11)]);var inst_21648 = (state_21684[(8)]);var tmp21701 = inst_21648;var inst_21648__$1 = tmp21701;var inst_21649 = inst_21657;var state_21684__$1 = (function (){var statearr_21705 = state_21684;(statearr_21705[(7)] = inst_21649);
(statearr_21705[(8)] = inst_21648__$1);
return statearr_21705;
})();var statearr_21706_21728 = state_21684__$1;(statearr_21706_21728[(2)] = null);
(statearr_21706_21728[(1)] = (2));
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
});})(c__5708__auto___21714,out))
;return ((function (switch__5693__auto__,c__5708__auto___21714,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21710[(0)] = state_machine__5694__auto__);
(statearr_21710[(1)] = (1));
return statearr_21710;
});
var state_machine__5694__auto____1 = (function (state_21684){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21684);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21711){if((e21711 instanceof Object))
{var ex__5697__auto__ = e21711;var statearr_21712_21729 = state_21684;(statearr_21712_21729[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21684);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21711;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21730 = state_21684;
state_21684 = G__21730;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21684){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21714,out))
})();var state__5710__auto__ = (function (){var statearr_21713 = f__5709__auto__.call(null);(statearr_21713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21714);
return statearr_21713;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21714,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___21873 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21873,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21873,out){
return (function (state_21843){var state_val_21844 = (state_21843[(1)]);if((state_val_21844 === (7)))
{var inst_21839 = (state_21843[(2)]);var state_21843__$1 = state_21843;var statearr_21845_21874 = state_21843__$1;(statearr_21845_21874[(2)] = inst_21839);
(statearr_21845_21874[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21844 === (1)))
{var inst_21802 = [];var inst_21803 = inst_21802;var inst_21804 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_21843__$1 = (function (){var statearr_21846 = state_21843;(statearr_21846[(7)] = inst_21803);
(statearr_21846[(8)] = inst_21804);
return statearr_21846;
})();var statearr_21847_21875 = state_21843__$1;(statearr_21847_21875[(2)] = null);
(statearr_21847_21875[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21844 === (4)))
{var inst_21807 = (state_21843[(9)]);var inst_21807__$1 = (state_21843[(2)]);var inst_21808 = (inst_21807__$1 == null);var inst_21809 = cljs.core.not.call(null,inst_21808);var state_21843__$1 = (function (){var statearr_21848 = state_21843;(statearr_21848[(9)] = inst_21807__$1);
return statearr_21848;
})();if(inst_21809)
{var statearr_21849_21876 = state_21843__$1;(statearr_21849_21876[(1)] = (5));
} else
{var statearr_21850_21877 = state_21843__$1;(statearr_21850_21877[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21844 === (15)))
{var inst_21833 = (state_21843[(2)]);var state_21843__$1 = state_21843;var statearr_21851_21878 = state_21843__$1;(statearr_21851_21878[(2)] = inst_21833);
(statearr_21851_21878[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21844 === (13)))
{var state_21843__$1 = state_21843;var statearr_21852_21879 = state_21843__$1;(statearr_21852_21879[(2)] = null);
(statearr_21852_21879[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21844 === (6)))
{var inst_21803 = (state_21843[(7)]);var inst_21828 = inst_21803.length;var inst_21829 = (inst_21828 > (0));var state_21843__$1 = state_21843;if(cljs.core.truth_(inst_21829))
{var statearr_21853_21880 = state_21843__$1;(statearr_21853_21880[(1)] = (12));
} else
{var statearr_21854_21881 = state_21843__$1;(statearr_21854_21881[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21844 === (3)))
{var inst_21841 = (state_21843[(2)]);var state_21843__$1 = state_21843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21843__$1,inst_21841);
} else
{if((state_val_21844 === (12)))
{var inst_21803 = (state_21843[(7)]);var inst_21831 = cljs.core.vec.call(null,inst_21803);var state_21843__$1 = state_21843;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21843__$1,(15),out,inst_21831);
} else
{if((state_val_21844 === (2)))
{var state_21843__$1 = state_21843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21843__$1,(4),ch);
} else
{if((state_val_21844 === (11)))
{var inst_21807 = (state_21843[(9)]);var inst_21811 = (state_21843[(10)]);var inst_21821 = (state_21843[(2)]);var inst_21822 = [];var inst_21823 = inst_21822.push(inst_21807);var inst_21803 = inst_21822;var inst_21804 = inst_21811;var state_21843__$1 = (function (){var statearr_21855 = state_21843;(statearr_21855[(11)] = inst_21821);
(statearr_21855[(7)] = inst_21803);
(statearr_21855[(12)] = inst_21823);
(statearr_21855[(8)] = inst_21804);
return statearr_21855;
})();var statearr_21856_21882 = state_21843__$1;(statearr_21856_21882[(2)] = null);
(statearr_21856_21882[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21844 === (9)))
{var inst_21803 = (state_21843[(7)]);var inst_21819 = cljs.core.vec.call(null,inst_21803);var state_21843__$1 = state_21843;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21843__$1,(11),out,inst_21819);
} else
{if((state_val_21844 === (5)))
{var inst_21807 = (state_21843[(9)]);var inst_21811 = (state_21843[(10)]);var inst_21804 = (state_21843[(8)]);var inst_21811__$1 = f.call(null,inst_21807);var inst_21812 = cljs.core._EQ_.call(null,inst_21811__$1,inst_21804);var inst_21813 = cljs.core.keyword_identical_QMARK_.call(null,inst_21804,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_21814 = (inst_21812) || (inst_21813);var state_21843__$1 = (function (){var statearr_21857 = state_21843;(statearr_21857[(10)] = inst_21811__$1);
return statearr_21857;
})();if(cljs.core.truth_(inst_21814))
{var statearr_21858_21883 = state_21843__$1;(statearr_21858_21883[(1)] = (8));
} else
{var statearr_21859_21884 = state_21843__$1;(statearr_21859_21884[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21844 === (14)))
{var inst_21836 = (state_21843[(2)]);var inst_21837 = cljs.core.async.close_BANG_.call(null,out);var state_21843__$1 = (function (){var statearr_21861 = state_21843;(statearr_21861[(13)] = inst_21836);
return statearr_21861;
})();var statearr_21862_21885 = state_21843__$1;(statearr_21862_21885[(2)] = inst_21837);
(statearr_21862_21885[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21844 === (10)))
{var inst_21826 = (state_21843[(2)]);var state_21843__$1 = state_21843;var statearr_21863_21886 = state_21843__$1;(statearr_21863_21886[(2)] = inst_21826);
(statearr_21863_21886[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21844 === (8)))
{var inst_21807 = (state_21843[(9)]);var inst_21811 = (state_21843[(10)]);var inst_21803 = (state_21843[(7)]);var inst_21816 = inst_21803.push(inst_21807);var tmp21860 = inst_21803;var inst_21803__$1 = tmp21860;var inst_21804 = inst_21811;var state_21843__$1 = (function (){var statearr_21864 = state_21843;(statearr_21864[(14)] = inst_21816);
(statearr_21864[(7)] = inst_21803__$1);
(statearr_21864[(8)] = inst_21804);
return statearr_21864;
})();var statearr_21865_21887 = state_21843__$1;(statearr_21865_21887[(2)] = null);
(statearr_21865_21887[(1)] = (2));
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
});})(c__5708__auto___21873,out))
;return ((function (switch__5693__auto__,c__5708__auto___21873,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21869[(0)] = state_machine__5694__auto__);
(statearr_21869[(1)] = (1));
return statearr_21869;
});
var state_machine__5694__auto____1 = (function (state_21843){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21843);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21870){if((e21870 instanceof Object))
{var ex__5697__auto__ = e21870;var statearr_21871_21888 = state_21843;(statearr_21871_21888[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21843);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21870;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21889 = state_21843;
state_21843 = G__21889;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21843){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21873,out))
})();var state__5710__auto__ = (function (){var statearr_21872 = f__5709__auto__.call(null);(statearr_21872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21873);
return statearr_21872;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21873,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
