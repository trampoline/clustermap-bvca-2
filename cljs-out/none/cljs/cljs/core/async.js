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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t53240 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53240 = (function (f,fn_handler,meta53241){
this.f = f;
this.fn_handler = fn_handler;
this.meta53241 = meta53241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53240.cljs$lang$type = true;
cljs.core.async.t53240.cljs$lang$ctorStr = "cljs.core.async/t53240";
cljs.core.async.t53240.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t53240");
});
cljs.core.async.t53240.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t53240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t53240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t53240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53242){var self__ = this;
var _53242__$1 = this;return self__.meta53241;
});
cljs.core.async.t53240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53242,meta53241__$1){var self__ = this;
var _53242__$1 = this;return (new cljs.core.async.t53240(self__.f,self__.fn_handler,meta53241__$1));
});
cljs.core.async.__GT_t53240 = (function __GT_t53240(f__$1,fn_handler__$1,meta53241){return (new cljs.core.async.t53240(f__$1,fn_handler__$1,meta53241));
});
}
return (new cljs.core.async.t53240(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__53244 = buff;if(G__53244)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__53244.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__53244.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__53244);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__53244);
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
{var val_53245 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_53245);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_53245,ret){
return (function (){return fn1.call(null,val_53245);
});})(val_53245,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___53246 = n;var x_53247 = (0);while(true){
if((x_53247 < n__4414__auto___53246))
{(a[x_53247] = (0));
{
var G__53248 = (x_53247 + (1));
x_53247 = G__53248;
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
var G__53249 = (i + (1));
i = G__53249;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t53253 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53253 = (function (flag,alt_flag,meta53254){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta53254 = meta53254;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53253.cljs$lang$type = true;
cljs.core.async.t53253.cljs$lang$ctorStr = "cljs.core.async/t53253";
cljs.core.async.t53253.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t53253");
});})(flag))
;
cljs.core.async.t53253.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t53253.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t53253.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t53253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_53255){var self__ = this;
var _53255__$1 = this;return self__.meta53254;
});})(flag))
;
cljs.core.async.t53253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_53255,meta53254__$1){var self__ = this;
var _53255__$1 = this;return (new cljs.core.async.t53253(self__.flag,self__.alt_flag,meta53254__$1));
});})(flag))
;
cljs.core.async.__GT_t53253 = ((function (flag){
return (function __GT_t53253(flag__$1,alt_flag__$1,meta53254){return (new cljs.core.async.t53253(flag__$1,alt_flag__$1,meta53254));
});})(flag))
;
}
return (new cljs.core.async.t53253(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t53259 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53259 = (function (cb,flag,alt_handler,meta53260){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta53260 = meta53260;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53259.cljs$lang$type = true;
cljs.core.async.t53259.cljs$lang$ctorStr = "cljs.core.async/t53259";
cljs.core.async.t53259.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t53259");
});
cljs.core.async.t53259.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t53259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t53259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t53259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53261){var self__ = this;
var _53261__$1 = this;return self__.meta53260;
});
cljs.core.async.t53259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53261,meta53260__$1){var self__ = this;
var _53261__$1 = this;return (new cljs.core.async.t53259(self__.cb,self__.flag,self__.alt_handler,meta53260__$1));
});
cljs.core.async.__GT_t53259 = (function __GT_t53259(cb__$1,flag__$1,alt_handler__$1,meta53260){return (new cljs.core.async.t53259(cb__$1,flag__$1,alt_handler__$1,meta53260));
});
}
return (new cljs.core.async.t53259(cb,flag,alt_handler,null));
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
return (function (p1__53262_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53262_SHARP_,port], null));
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
var G__53263 = (i + (1));
i = G__53263;
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
var alts_BANG___delegate = function (ports,p__53264){var map__53266 = p__53264;var map__53266__$1 = ((cljs.core.seq_QMARK_.call(null,map__53266))?cljs.core.apply.call(null,cljs.core.hash_map,map__53266):map__53266);var opts = map__53266__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__53264 = null;if (arguments.length > 1) {
  p__53264 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__53264);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__53267){
var ports = cljs.core.first(arglist__53267);
var p__53264 = cljs.core.rest(arglist__53267);
return alts_BANG___delegate(ports,p__53264);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t53275 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53275 = (function (ch,f,map_LT_,meta53276){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta53276 = meta53276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53275.cljs$lang$type = true;
cljs.core.async.t53275.cljs$lang$ctorStr = "cljs.core.async/t53275";
cljs.core.async.t53275.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t53275");
});
cljs.core.async.t53275.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t53275.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t53275.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t53275.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t53278 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53278 = (function (fn1,_,meta53276,ch,f,map_LT_,meta53279){
this.fn1 = fn1;
this._ = _;
this.meta53276 = meta53276;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta53279 = meta53279;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53278.cljs$lang$type = true;
cljs.core.async.t53278.cljs$lang$ctorStr = "cljs.core.async/t53278";
cljs.core.async.t53278.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t53278");
});})(___$1))
;
cljs.core.async.t53278.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t53278.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t53278.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t53278.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__53268_SHARP_){return f1.call(null,(((p1__53268_SHARP_ == null))?null:self__.f.call(null,p1__53268_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t53278.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_53280){var self__ = this;
var _53280__$1 = this;return self__.meta53279;
});})(___$1))
;
cljs.core.async.t53278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_53280,meta53279__$1){var self__ = this;
var _53280__$1 = this;return (new cljs.core.async.t53278(self__.fn1,self__._,self__.meta53276,self__.ch,self__.f,self__.map_LT_,meta53279__$1));
});})(___$1))
;
cljs.core.async.__GT_t53278 = ((function (___$1){
return (function __GT_t53278(fn1__$1,___$2,meta53276__$1,ch__$2,f__$2,map_LT___$2,meta53279){return (new cljs.core.async.t53278(fn1__$1,___$2,meta53276__$1,ch__$2,f__$2,map_LT___$2,meta53279));
});})(___$1))
;
}
return (new cljs.core.async.t53278(fn1,___$1,self__.meta53276,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t53275.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t53275.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t53275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53277){var self__ = this;
var _53277__$1 = this;return self__.meta53276;
});
cljs.core.async.t53275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53277,meta53276__$1){var self__ = this;
var _53277__$1 = this;return (new cljs.core.async.t53275(self__.ch,self__.f,self__.map_LT_,meta53276__$1));
});
cljs.core.async.__GT_t53275 = (function __GT_t53275(ch__$1,f__$1,map_LT___$1,meta53276){return (new cljs.core.async.t53275(ch__$1,f__$1,map_LT___$1,meta53276));
});
}
return (new cljs.core.async.t53275(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t53284 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53284 = (function (ch,f,map_GT_,meta53285){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta53285 = meta53285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53284.cljs$lang$type = true;
cljs.core.async.t53284.cljs$lang$ctorStr = "cljs.core.async/t53284";
cljs.core.async.t53284.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t53284");
});
cljs.core.async.t53284.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t53284.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t53284.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t53284.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t53284.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t53284.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t53284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53286){var self__ = this;
var _53286__$1 = this;return self__.meta53285;
});
cljs.core.async.t53284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53286,meta53285__$1){var self__ = this;
var _53286__$1 = this;return (new cljs.core.async.t53284(self__.ch,self__.f,self__.map_GT_,meta53285__$1));
});
cljs.core.async.__GT_t53284 = (function __GT_t53284(ch__$1,f__$1,map_GT___$1,meta53285){return (new cljs.core.async.t53284(ch__$1,f__$1,map_GT___$1,meta53285));
});
}
return (new cljs.core.async.t53284(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t53290 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53290 = (function (ch,p,filter_GT_,meta53291){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta53291 = meta53291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53290.cljs$lang$type = true;
cljs.core.async.t53290.cljs$lang$ctorStr = "cljs.core.async/t53290";
cljs.core.async.t53290.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t53290");
});
cljs.core.async.t53290.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t53290.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t53290.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t53290.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t53290.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t53290.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t53290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53292){var self__ = this;
var _53292__$1 = this;return self__.meta53291;
});
cljs.core.async.t53290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53292,meta53291__$1){var self__ = this;
var _53292__$1 = this;return (new cljs.core.async.t53290(self__.ch,self__.p,self__.filter_GT_,meta53291__$1));
});
cljs.core.async.__GT_t53290 = (function __GT_t53290(ch__$1,p__$1,filter_GT___$1,meta53291){return (new cljs.core.async.t53290(ch__$1,p__$1,filter_GT___$1,meta53291));
});
}
return (new cljs.core.async.t53290(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___53375 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___53375,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___53375,out){
return (function (state_53354){var state_val_53355 = (state_53354[(1)]);if((state_val_53355 === (7)))
{var inst_53350 = (state_53354[(2)]);var state_53354__$1 = state_53354;var statearr_53356_53376 = state_53354__$1;(statearr_53356_53376[(2)] = inst_53350);
(statearr_53356_53376[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53355 === (1)))
{var state_53354__$1 = state_53354;var statearr_53357_53377 = state_53354__$1;(statearr_53357_53377[(2)] = null);
(statearr_53357_53377[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53355 === (4)))
{var inst_53336 = (state_53354[(7)]);var inst_53336__$1 = (state_53354[(2)]);var inst_53337 = (inst_53336__$1 == null);var state_53354__$1 = (function (){var statearr_53358 = state_53354;(statearr_53358[(7)] = inst_53336__$1);
return statearr_53358;
})();if(cljs.core.truth_(inst_53337))
{var statearr_53359_53378 = state_53354__$1;(statearr_53359_53378[(1)] = (5));
} else
{var statearr_53360_53379 = state_53354__$1;(statearr_53360_53379[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53355 === (6)))
{var inst_53336 = (state_53354[(7)]);var inst_53341 = p.call(null,inst_53336);var state_53354__$1 = state_53354;if(cljs.core.truth_(inst_53341))
{var statearr_53361_53380 = state_53354__$1;(statearr_53361_53380[(1)] = (8));
} else
{var statearr_53362_53381 = state_53354__$1;(statearr_53362_53381[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53355 === (3)))
{var inst_53352 = (state_53354[(2)]);var state_53354__$1 = state_53354;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53354__$1,inst_53352);
} else
{if((state_val_53355 === (2)))
{var state_53354__$1 = state_53354;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53354__$1,(4),ch);
} else
{if((state_val_53355 === (11)))
{var inst_53344 = (state_53354[(2)]);var state_53354__$1 = state_53354;var statearr_53363_53382 = state_53354__$1;(statearr_53363_53382[(2)] = inst_53344);
(statearr_53363_53382[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53355 === (9)))
{var state_53354__$1 = state_53354;var statearr_53364_53383 = state_53354__$1;(statearr_53364_53383[(2)] = null);
(statearr_53364_53383[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53355 === (5)))
{var inst_53339 = cljs.core.async.close_BANG_.call(null,out);var state_53354__$1 = state_53354;var statearr_53365_53384 = state_53354__$1;(statearr_53365_53384[(2)] = inst_53339);
(statearr_53365_53384[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53355 === (10)))
{var inst_53347 = (state_53354[(2)]);var state_53354__$1 = (function (){var statearr_53366 = state_53354;(statearr_53366[(8)] = inst_53347);
return statearr_53366;
})();var statearr_53367_53385 = state_53354__$1;(statearr_53367_53385[(2)] = null);
(statearr_53367_53385[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53355 === (8)))
{var inst_53336 = (state_53354[(7)]);var state_53354__$1 = state_53354;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53354__$1,(11),out,inst_53336);
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
});})(c__5708__auto___53375,out))
;return ((function (switch__5693__auto__,c__5708__auto___53375,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_53371 = [null,null,null,null,null,null,null,null,null];(statearr_53371[(0)] = state_machine__5694__auto__);
(statearr_53371[(1)] = (1));
return statearr_53371;
});
var state_machine__5694__auto____1 = (function (state_53354){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_53354);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53372){if((e53372 instanceof Object))
{var ex__5697__auto__ = e53372;var statearr_53373_53386 = state_53354;(statearr_53373_53386[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53354);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e53372;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53387 = state_53354;
state_53354 = G__53387;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53354){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___53375,out))
})();var state__5710__auto__ = (function (){var statearr_53374 = f__5709__auto__.call(null);(statearr_53374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___53375);
return statearr_53374;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___53375,out))
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
return (function (state_53539){var state_val_53540 = (state_53539[(1)]);if((state_val_53540 === (7)))
{var inst_53535 = (state_53539[(2)]);var state_53539__$1 = state_53539;var statearr_53541_53578 = state_53539__$1;(statearr_53541_53578[(2)] = inst_53535);
(statearr_53541_53578[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53540 === (20)))
{var inst_53510 = (state_53539[(7)]);var inst_53521 = (state_53539[(2)]);var inst_53522 = cljs.core.next.call(null,inst_53510);var inst_53496 = inst_53522;var inst_53497 = null;var inst_53498 = (0);var inst_53499 = (0);var state_53539__$1 = (function (){var statearr_53542 = state_53539;(statearr_53542[(8)] = inst_53497);
(statearr_53542[(9)] = inst_53499);
(statearr_53542[(10)] = inst_53498);
(statearr_53542[(11)] = inst_53496);
(statearr_53542[(12)] = inst_53521);
return statearr_53542;
})();var statearr_53543_53579 = state_53539__$1;(statearr_53543_53579[(2)] = null);
(statearr_53543_53579[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53540 === (1)))
{var state_53539__$1 = state_53539;var statearr_53544_53580 = state_53539__$1;(statearr_53544_53580[(2)] = null);
(statearr_53544_53580[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53540 === (4)))
{var inst_53485 = (state_53539[(13)]);var inst_53485__$1 = (state_53539[(2)]);var inst_53486 = (inst_53485__$1 == null);var state_53539__$1 = (function (){var statearr_53548 = state_53539;(statearr_53548[(13)] = inst_53485__$1);
return statearr_53548;
})();if(cljs.core.truth_(inst_53486))
{var statearr_53549_53581 = state_53539__$1;(statearr_53549_53581[(1)] = (5));
} else
{var statearr_53550_53582 = state_53539__$1;(statearr_53550_53582[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53540 === (15)))
{var state_53539__$1 = state_53539;var statearr_53551_53583 = state_53539__$1;(statearr_53551_53583[(2)] = null);
(statearr_53551_53583[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53540 === (13)))
{var inst_53497 = (state_53539[(8)]);var inst_53499 = (state_53539[(9)]);var inst_53498 = (state_53539[(10)]);var inst_53496 = (state_53539[(11)]);var inst_53506 = (state_53539[(2)]);var inst_53507 = (inst_53499 + (1));var tmp53545 = inst_53497;var tmp53546 = inst_53498;var tmp53547 = inst_53496;var inst_53496__$1 = tmp53547;var inst_53497__$1 = tmp53545;var inst_53498__$1 = tmp53546;var inst_53499__$1 = inst_53507;var state_53539__$1 = (function (){var statearr_53552 = state_53539;(statearr_53552[(8)] = inst_53497__$1);
(statearr_53552[(14)] = inst_53506);
(statearr_53552[(9)] = inst_53499__$1);
(statearr_53552[(10)] = inst_53498__$1);
(statearr_53552[(11)] = inst_53496__$1);
return statearr_53552;
})();var statearr_53553_53584 = state_53539__$1;(statearr_53553_53584[(2)] = null);
(statearr_53553_53584[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53540 === (6)))
{var inst_53485 = (state_53539[(13)]);var inst_53490 = f.call(null,inst_53485);var inst_53495 = cljs.core.seq.call(null,inst_53490);var inst_53496 = inst_53495;var inst_53497 = null;var inst_53498 = (0);var inst_53499 = (0);var state_53539__$1 = (function (){var statearr_53554 = state_53539;(statearr_53554[(8)] = inst_53497);
(statearr_53554[(9)] = inst_53499);
(statearr_53554[(10)] = inst_53498);
(statearr_53554[(11)] = inst_53496);
return statearr_53554;
})();var statearr_53555_53585 = state_53539__$1;(statearr_53555_53585[(2)] = null);
(statearr_53555_53585[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53540 === (17)))
{var inst_53510 = (state_53539[(7)]);var inst_53514 = cljs.core.chunk_first.call(null,inst_53510);var inst_53515 = cljs.core.chunk_rest.call(null,inst_53510);var inst_53516 = cljs.core.count.call(null,inst_53514);var inst_53496 = inst_53515;var inst_53497 = inst_53514;var inst_53498 = inst_53516;var inst_53499 = (0);var state_53539__$1 = (function (){var statearr_53556 = state_53539;(statearr_53556[(8)] = inst_53497);
(statearr_53556[(9)] = inst_53499);
(statearr_53556[(10)] = inst_53498);
(statearr_53556[(11)] = inst_53496);
return statearr_53556;
})();var statearr_53557_53586 = state_53539__$1;(statearr_53557_53586[(2)] = null);
(statearr_53557_53586[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53540 === (3)))
{var inst_53537 = (state_53539[(2)]);var state_53539__$1 = state_53539;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53539__$1,inst_53537);
} else
{if((state_val_53540 === (12)))
{var inst_53530 = (state_53539[(2)]);var state_53539__$1 = state_53539;var statearr_53558_53587 = state_53539__$1;(statearr_53558_53587[(2)] = inst_53530);
(statearr_53558_53587[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53540 === (2)))
{var state_53539__$1 = state_53539;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53539__$1,(4),in$);
} else
{if((state_val_53540 === (19)))
{var inst_53525 = (state_53539[(2)]);var state_53539__$1 = state_53539;var statearr_53559_53588 = state_53539__$1;(statearr_53559_53588[(2)] = inst_53525);
(statearr_53559_53588[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53540 === (11)))
{var inst_53510 = (state_53539[(7)]);var inst_53496 = (state_53539[(11)]);var inst_53510__$1 = cljs.core.seq.call(null,inst_53496);var state_53539__$1 = (function (){var statearr_53560 = state_53539;(statearr_53560[(7)] = inst_53510__$1);
return statearr_53560;
})();if(inst_53510__$1)
{var statearr_53561_53589 = state_53539__$1;(statearr_53561_53589[(1)] = (14));
} else
{var statearr_53562_53590 = state_53539__$1;(statearr_53562_53590[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53540 === (9)))
{var inst_53532 = (state_53539[(2)]);var state_53539__$1 = (function (){var statearr_53563 = state_53539;(statearr_53563[(15)] = inst_53532);
return statearr_53563;
})();var statearr_53564_53591 = state_53539__$1;(statearr_53564_53591[(2)] = null);
(statearr_53564_53591[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53540 === (5)))
{var inst_53488 = cljs.core.async.close_BANG_.call(null,out);var state_53539__$1 = state_53539;var statearr_53565_53592 = state_53539__$1;(statearr_53565_53592[(2)] = inst_53488);
(statearr_53565_53592[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53540 === (14)))
{var inst_53510 = (state_53539[(7)]);var inst_53512 = cljs.core.chunked_seq_QMARK_.call(null,inst_53510);var state_53539__$1 = state_53539;if(inst_53512)
{var statearr_53566_53593 = state_53539__$1;(statearr_53566_53593[(1)] = (17));
} else
{var statearr_53567_53594 = state_53539__$1;(statearr_53567_53594[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53540 === (16)))
{var inst_53528 = (state_53539[(2)]);var state_53539__$1 = state_53539;var statearr_53568_53595 = state_53539__$1;(statearr_53568_53595[(2)] = inst_53528);
(statearr_53568_53595[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53540 === (10)))
{var inst_53497 = (state_53539[(8)]);var inst_53499 = (state_53539[(9)]);var inst_53504 = cljs.core._nth.call(null,inst_53497,inst_53499);var state_53539__$1 = state_53539;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53539__$1,(13),out,inst_53504);
} else
{if((state_val_53540 === (18)))
{var inst_53510 = (state_53539[(7)]);var inst_53519 = cljs.core.first.call(null,inst_53510);var state_53539__$1 = state_53539;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53539__$1,(20),out,inst_53519);
} else
{if((state_val_53540 === (8)))
{var inst_53499 = (state_53539[(9)]);var inst_53498 = (state_53539[(10)]);var inst_53501 = (inst_53499 < inst_53498);var inst_53502 = inst_53501;var state_53539__$1 = state_53539;if(cljs.core.truth_(inst_53502))
{var statearr_53569_53596 = state_53539__$1;(statearr_53569_53596[(1)] = (10));
} else
{var statearr_53570_53597 = state_53539__$1;(statearr_53570_53597[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_53574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53574[(0)] = state_machine__5694__auto__);
(statearr_53574[(1)] = (1));
return statearr_53574;
});
var state_machine__5694__auto____1 = (function (state_53539){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_53539);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53575){if((e53575 instanceof Object))
{var ex__5697__auto__ = e53575;var statearr_53576_53598 = state_53539;(statearr_53576_53598[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53539);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e53575;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53599 = state_53539;
state_53539 = G__53599;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53539){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_53577 = f__5709__auto__.call(null);(statearr_53577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_53577;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___53680 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___53680){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___53680){
return (function (state_53659){var state_val_53660 = (state_53659[(1)]);if((state_val_53660 === (7)))
{var inst_53655 = (state_53659[(2)]);var state_53659__$1 = state_53659;var statearr_53661_53681 = state_53659__$1;(statearr_53661_53681[(2)] = inst_53655);
(statearr_53661_53681[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53660 === (1)))
{var state_53659__$1 = state_53659;var statearr_53662_53682 = state_53659__$1;(statearr_53662_53682[(2)] = null);
(statearr_53662_53682[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53660 === (4)))
{var inst_53642 = (state_53659[(7)]);var inst_53642__$1 = (state_53659[(2)]);var inst_53643 = (inst_53642__$1 == null);var state_53659__$1 = (function (){var statearr_53663 = state_53659;(statearr_53663[(7)] = inst_53642__$1);
return statearr_53663;
})();if(cljs.core.truth_(inst_53643))
{var statearr_53664_53683 = state_53659__$1;(statearr_53664_53683[(1)] = (5));
} else
{var statearr_53665_53684 = state_53659__$1;(statearr_53665_53684[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53660 === (6)))
{var inst_53642 = (state_53659[(7)]);var state_53659__$1 = state_53659;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53659__$1,(11),to,inst_53642);
} else
{if((state_val_53660 === (3)))
{var inst_53657 = (state_53659[(2)]);var state_53659__$1 = state_53659;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53659__$1,inst_53657);
} else
{if((state_val_53660 === (2)))
{var state_53659__$1 = state_53659;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53659__$1,(4),from);
} else
{if((state_val_53660 === (11)))
{var inst_53652 = (state_53659[(2)]);var state_53659__$1 = (function (){var statearr_53666 = state_53659;(statearr_53666[(8)] = inst_53652);
return statearr_53666;
})();var statearr_53667_53685 = state_53659__$1;(statearr_53667_53685[(2)] = null);
(statearr_53667_53685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53660 === (9)))
{var state_53659__$1 = state_53659;var statearr_53668_53686 = state_53659__$1;(statearr_53668_53686[(2)] = null);
(statearr_53668_53686[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53660 === (5)))
{var state_53659__$1 = state_53659;if(cljs.core.truth_(close_QMARK_))
{var statearr_53669_53687 = state_53659__$1;(statearr_53669_53687[(1)] = (8));
} else
{var statearr_53670_53688 = state_53659__$1;(statearr_53670_53688[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53660 === (10)))
{var inst_53649 = (state_53659[(2)]);var state_53659__$1 = state_53659;var statearr_53671_53689 = state_53659__$1;(statearr_53671_53689[(2)] = inst_53649);
(statearr_53671_53689[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53660 === (8)))
{var inst_53646 = cljs.core.async.close_BANG_.call(null,to);var state_53659__$1 = state_53659;var statearr_53672_53690 = state_53659__$1;(statearr_53672_53690[(2)] = inst_53646);
(statearr_53672_53690[(1)] = (10));
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
});})(c__5708__auto___53680))
;return ((function (switch__5693__auto__,c__5708__auto___53680){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_53676 = [null,null,null,null,null,null,null,null,null];(statearr_53676[(0)] = state_machine__5694__auto__);
(statearr_53676[(1)] = (1));
return statearr_53676;
});
var state_machine__5694__auto____1 = (function (state_53659){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_53659);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53677){if((e53677 instanceof Object))
{var ex__5697__auto__ = e53677;var statearr_53678_53691 = state_53659;(statearr_53678_53691[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53659);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e53677;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53692 = state_53659;
state_53659 = G__53692;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53659){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___53680))
})();var state__5710__auto__ = (function (){var statearr_53679 = f__5709__auto__.call(null);(statearr_53679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___53680);
return statearr_53679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___53680))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___53779 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___53779,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___53779,tc,fc){
return (function (state_53757){var state_val_53758 = (state_53757[(1)]);if((state_val_53758 === (7)))
{var inst_53753 = (state_53757[(2)]);var state_53757__$1 = state_53757;var statearr_53759_53780 = state_53757__$1;(statearr_53759_53780[(2)] = inst_53753);
(statearr_53759_53780[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53758 === (1)))
{var state_53757__$1 = state_53757;var statearr_53760_53781 = state_53757__$1;(statearr_53760_53781[(2)] = null);
(statearr_53760_53781[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53758 === (4)))
{var inst_53738 = (state_53757[(7)]);var inst_53738__$1 = (state_53757[(2)]);var inst_53739 = (inst_53738__$1 == null);var state_53757__$1 = (function (){var statearr_53761 = state_53757;(statearr_53761[(7)] = inst_53738__$1);
return statearr_53761;
})();if(cljs.core.truth_(inst_53739))
{var statearr_53762_53782 = state_53757__$1;(statearr_53762_53782[(1)] = (5));
} else
{var statearr_53763_53783 = state_53757__$1;(statearr_53763_53783[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53758 === (6)))
{var inst_53738 = (state_53757[(7)]);var inst_53744 = p.call(null,inst_53738);var state_53757__$1 = state_53757;if(cljs.core.truth_(inst_53744))
{var statearr_53764_53784 = state_53757__$1;(statearr_53764_53784[(1)] = (9));
} else
{var statearr_53765_53785 = state_53757__$1;(statearr_53765_53785[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53758 === (3)))
{var inst_53755 = (state_53757[(2)]);var state_53757__$1 = state_53757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53757__$1,inst_53755);
} else
{if((state_val_53758 === (2)))
{var state_53757__$1 = state_53757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53757__$1,(4),ch);
} else
{if((state_val_53758 === (11)))
{var inst_53738 = (state_53757[(7)]);var inst_53748 = (state_53757[(2)]);var state_53757__$1 = state_53757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53757__$1,(8),inst_53748,inst_53738);
} else
{if((state_val_53758 === (9)))
{var state_53757__$1 = state_53757;var statearr_53766_53786 = state_53757__$1;(statearr_53766_53786[(2)] = tc);
(statearr_53766_53786[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53758 === (5)))
{var inst_53741 = cljs.core.async.close_BANG_.call(null,tc);var inst_53742 = cljs.core.async.close_BANG_.call(null,fc);var state_53757__$1 = (function (){var statearr_53767 = state_53757;(statearr_53767[(8)] = inst_53741);
return statearr_53767;
})();var statearr_53768_53787 = state_53757__$1;(statearr_53768_53787[(2)] = inst_53742);
(statearr_53768_53787[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53758 === (10)))
{var state_53757__$1 = state_53757;var statearr_53769_53788 = state_53757__$1;(statearr_53769_53788[(2)] = fc);
(statearr_53769_53788[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53758 === (8)))
{var inst_53750 = (state_53757[(2)]);var state_53757__$1 = (function (){var statearr_53770 = state_53757;(statearr_53770[(9)] = inst_53750);
return statearr_53770;
})();var statearr_53771_53789 = state_53757__$1;(statearr_53771_53789[(2)] = null);
(statearr_53771_53789[(1)] = (2));
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
});})(c__5708__auto___53779,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___53779,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_53775 = [null,null,null,null,null,null,null,null,null,null];(statearr_53775[(0)] = state_machine__5694__auto__);
(statearr_53775[(1)] = (1));
return statearr_53775;
});
var state_machine__5694__auto____1 = (function (state_53757){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_53757);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53776){if((e53776 instanceof Object))
{var ex__5697__auto__ = e53776;var statearr_53777_53790 = state_53757;(statearr_53777_53790[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53757);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e53776;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53791 = state_53757;
state_53757 = G__53791;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53757){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___53779,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_53778 = f__5709__auto__.call(null);(statearr_53778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___53779);
return statearr_53778;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___53779,tc,fc))
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
return (function (state_53838){var state_val_53839 = (state_53838[(1)]);if((state_val_53839 === (7)))
{var inst_53834 = (state_53838[(2)]);var state_53838__$1 = state_53838;var statearr_53840_53856 = state_53838__$1;(statearr_53840_53856[(2)] = inst_53834);
(statearr_53840_53856[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53839 === (6)))
{var inst_53827 = (state_53838[(7)]);var inst_53824 = (state_53838[(8)]);var inst_53831 = f.call(null,inst_53824,inst_53827);var inst_53824__$1 = inst_53831;var state_53838__$1 = (function (){var statearr_53841 = state_53838;(statearr_53841[(8)] = inst_53824__$1);
return statearr_53841;
})();var statearr_53842_53857 = state_53838__$1;(statearr_53842_53857[(2)] = null);
(statearr_53842_53857[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53839 === (5)))
{var inst_53824 = (state_53838[(8)]);var state_53838__$1 = state_53838;var statearr_53843_53858 = state_53838__$1;(statearr_53843_53858[(2)] = inst_53824);
(statearr_53843_53858[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53839 === (4)))
{var inst_53827 = (state_53838[(7)]);var inst_53827__$1 = (state_53838[(2)]);var inst_53828 = (inst_53827__$1 == null);var state_53838__$1 = (function (){var statearr_53844 = state_53838;(statearr_53844[(7)] = inst_53827__$1);
return statearr_53844;
})();if(cljs.core.truth_(inst_53828))
{var statearr_53845_53859 = state_53838__$1;(statearr_53845_53859[(1)] = (5));
} else
{var statearr_53846_53860 = state_53838__$1;(statearr_53846_53860[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53839 === (3)))
{var inst_53836 = (state_53838[(2)]);var state_53838__$1 = state_53838;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53838__$1,inst_53836);
} else
{if((state_val_53839 === (2)))
{var state_53838__$1 = state_53838;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53838__$1,(4),ch);
} else
{if((state_val_53839 === (1)))
{var inst_53824 = init;var state_53838__$1 = (function (){var statearr_53847 = state_53838;(statearr_53847[(8)] = inst_53824);
return statearr_53847;
})();var statearr_53848_53861 = state_53838__$1;(statearr_53848_53861[(2)] = null);
(statearr_53848_53861[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_53852 = [null,null,null,null,null,null,null,null,null];(statearr_53852[(0)] = state_machine__5694__auto__);
(statearr_53852[(1)] = (1));
return statearr_53852;
});
var state_machine__5694__auto____1 = (function (state_53838){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_53838);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53853){if((e53853 instanceof Object))
{var ex__5697__auto__ = e53853;var statearr_53854_53862 = state_53838;(statearr_53854_53862[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53838);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e53853;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53863 = state_53838;
state_53838 = G__53863;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53838){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_53855 = f__5709__auto__.call(null);(statearr_53855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_53855;
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
return (function (state_53925){var state_val_53926 = (state_53925[(1)]);if((state_val_53926 === (7)))
{var inst_53906 = (state_53925[(7)]);var inst_53911 = (state_53925[(2)]);var inst_53912 = cljs.core.next.call(null,inst_53906);var inst_53906__$1 = inst_53912;var state_53925__$1 = (function (){var statearr_53927 = state_53925;(statearr_53927[(7)] = inst_53906__$1);
(statearr_53927[(8)] = inst_53911);
return statearr_53927;
})();var statearr_53928_53946 = state_53925__$1;(statearr_53928_53946[(2)] = null);
(statearr_53928_53946[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53926 === (1)))
{var inst_53905 = cljs.core.seq.call(null,coll);var inst_53906 = inst_53905;var state_53925__$1 = (function (){var statearr_53929 = state_53925;(statearr_53929[(7)] = inst_53906);
return statearr_53929;
})();var statearr_53930_53947 = state_53925__$1;(statearr_53930_53947[(2)] = null);
(statearr_53930_53947[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53926 === (4)))
{var inst_53906 = (state_53925[(7)]);var inst_53909 = cljs.core.first.call(null,inst_53906);var state_53925__$1 = state_53925;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53925__$1,(7),ch,inst_53909);
} else
{if((state_val_53926 === (6)))
{var inst_53921 = (state_53925[(2)]);var state_53925__$1 = state_53925;var statearr_53931_53948 = state_53925__$1;(statearr_53931_53948[(2)] = inst_53921);
(statearr_53931_53948[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53926 === (3)))
{var inst_53923 = (state_53925[(2)]);var state_53925__$1 = state_53925;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53925__$1,inst_53923);
} else
{if((state_val_53926 === (2)))
{var inst_53906 = (state_53925[(7)]);var state_53925__$1 = state_53925;if(cljs.core.truth_(inst_53906))
{var statearr_53932_53949 = state_53925__$1;(statearr_53932_53949[(1)] = (4));
} else
{var statearr_53933_53950 = state_53925__$1;(statearr_53933_53950[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53926 === (9)))
{var state_53925__$1 = state_53925;var statearr_53934_53951 = state_53925__$1;(statearr_53934_53951[(2)] = null);
(statearr_53934_53951[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53926 === (5)))
{var state_53925__$1 = state_53925;if(cljs.core.truth_(close_QMARK_))
{var statearr_53935_53952 = state_53925__$1;(statearr_53935_53952[(1)] = (8));
} else
{var statearr_53936_53953 = state_53925__$1;(statearr_53936_53953[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53926 === (10)))
{var inst_53919 = (state_53925[(2)]);var state_53925__$1 = state_53925;var statearr_53937_53954 = state_53925__$1;(statearr_53937_53954[(2)] = inst_53919);
(statearr_53937_53954[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53926 === (8)))
{var inst_53916 = cljs.core.async.close_BANG_.call(null,ch);var state_53925__$1 = state_53925;var statearr_53938_53955 = state_53925__$1;(statearr_53938_53955[(2)] = inst_53916);
(statearr_53938_53955[(1)] = (10));
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
var state_machine__5694__auto____0 = (function (){var statearr_53942 = [null,null,null,null,null,null,null,null,null];(statearr_53942[(0)] = state_machine__5694__auto__);
(statearr_53942[(1)] = (1));
return statearr_53942;
});
var state_machine__5694__auto____1 = (function (state_53925){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_53925);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53943){if((e53943 instanceof Object))
{var ex__5697__auto__ = e53943;var statearr_53944_53956 = state_53925;(statearr_53944_53956[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53925);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e53943;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53957 = state_53925;
state_53925 = G__53957;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53925){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_53945 = f__5709__auto__.call(null);(statearr_53945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_53945;
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
cljs.core.async.Mux = (function (){var obj53959 = {};return obj53959;
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
cljs.core.async.Mult = (function (){var obj53961 = {};return obj53961;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t54185 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54185 = (function (cs,ch,mult,meta54186){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta54186 = meta54186;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54185.cljs$lang$type = true;
cljs.core.async.t54185.cljs$lang$ctorStr = "cljs.core.async/t54185";
cljs.core.async.t54185.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t54185");
});})(cs))
;
cljs.core.async.t54185.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t54185.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t54185.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t54185.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t54185.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t54185.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t54185.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_54187){var self__ = this;
var _54187__$1 = this;return self__.meta54186;
});})(cs))
;
cljs.core.async.t54185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_54187,meta54186__$1){var self__ = this;
var _54187__$1 = this;return (new cljs.core.async.t54185(self__.cs,self__.ch,self__.mult,meta54186__$1));
});})(cs))
;
cljs.core.async.__GT_t54185 = ((function (cs){
return (function __GT_t54185(cs__$1,ch__$1,mult__$1,meta54186){return (new cljs.core.async.t54185(cs__$1,ch__$1,mult__$1,meta54186));
});})(cs))
;
}
return (new cljs.core.async.t54185(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___54408 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___54408,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___54408,cs,m,dchan,dctr,done){
return (function (state_54322){var state_val_54323 = (state_54322[(1)]);if((state_val_54323 === (7)))
{var inst_54318 = (state_54322[(2)]);var state_54322__$1 = state_54322;var statearr_54324_54409 = state_54322__$1;(statearr_54324_54409[(2)] = inst_54318);
(statearr_54324_54409[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (20)))
{var inst_54219 = (state_54322[(7)]);var inst_54229 = cljs.core.first.call(null,inst_54219);var inst_54230 = cljs.core.nth.call(null,inst_54229,(0),null);var inst_54231 = cljs.core.nth.call(null,inst_54229,(1),null);var state_54322__$1 = (function (){var statearr_54325 = state_54322;(statearr_54325[(8)] = inst_54230);
return statearr_54325;
})();if(cljs.core.truth_(inst_54231))
{var statearr_54326_54410 = state_54322__$1;(statearr_54326_54410[(1)] = (22));
} else
{var statearr_54327_54411 = state_54322__$1;(statearr_54327_54411[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (27)))
{var inst_54261 = (state_54322[(9)]);var inst_54259 = (state_54322[(10)]);var inst_54266 = cljs.core._nth.call(null,inst_54259,inst_54261);var state_54322__$1 = (function (){var statearr_54328 = state_54322;(statearr_54328[(11)] = inst_54266);
return statearr_54328;
})();var statearr_54329_54412 = state_54322__$1;(statearr_54329_54412[(2)] = null);
(statearr_54329_54412[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (1)))
{var state_54322__$1 = state_54322;var statearr_54330_54413 = state_54322__$1;(statearr_54330_54413[(2)] = null);
(statearr_54330_54413[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (24)))
{var inst_54219 = (state_54322[(7)]);var inst_54236 = (state_54322[(2)]);var inst_54237 = cljs.core.next.call(null,inst_54219);var inst_54199 = inst_54237;var inst_54200 = null;var inst_54201 = (0);var inst_54202 = (0);var state_54322__$1 = (function (){var statearr_54331 = state_54322;(statearr_54331[(12)] = inst_54202);
(statearr_54331[(13)] = inst_54199);
(statearr_54331[(14)] = inst_54201);
(statearr_54331[(15)] = inst_54236);
(statearr_54331[(16)] = inst_54200);
return statearr_54331;
})();var statearr_54332_54414 = state_54322__$1;(statearr_54332_54414[(2)] = null);
(statearr_54332_54414[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (39)))
{var inst_54279 = (state_54322[(17)]);var inst_54297 = (state_54322[(2)]);var inst_54298 = cljs.core.next.call(null,inst_54279);var inst_54258 = inst_54298;var inst_54259 = null;var inst_54260 = (0);var inst_54261 = (0);var state_54322__$1 = (function (){var statearr_54336 = state_54322;(statearr_54336[(18)] = inst_54258);
(statearr_54336[(9)] = inst_54261);
(statearr_54336[(19)] = inst_54297);
(statearr_54336[(10)] = inst_54259);
(statearr_54336[(20)] = inst_54260);
return statearr_54336;
})();var statearr_54337_54415 = state_54322__$1;(statearr_54337_54415[(2)] = null);
(statearr_54337_54415[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (4)))
{var inst_54190 = (state_54322[(21)]);var inst_54190__$1 = (state_54322[(2)]);var inst_54191 = (inst_54190__$1 == null);var state_54322__$1 = (function (){var statearr_54338 = state_54322;(statearr_54338[(21)] = inst_54190__$1);
return statearr_54338;
})();if(cljs.core.truth_(inst_54191))
{var statearr_54339_54416 = state_54322__$1;(statearr_54339_54416[(1)] = (5));
} else
{var statearr_54340_54417 = state_54322__$1;(statearr_54340_54417[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (15)))
{var inst_54202 = (state_54322[(12)]);var inst_54199 = (state_54322[(13)]);var inst_54201 = (state_54322[(14)]);var inst_54200 = (state_54322[(16)]);var inst_54215 = (state_54322[(2)]);var inst_54216 = (inst_54202 + (1));var tmp54333 = inst_54199;var tmp54334 = inst_54201;var tmp54335 = inst_54200;var inst_54199__$1 = tmp54333;var inst_54200__$1 = tmp54335;var inst_54201__$1 = tmp54334;var inst_54202__$1 = inst_54216;var state_54322__$1 = (function (){var statearr_54341 = state_54322;(statearr_54341[(12)] = inst_54202__$1);
(statearr_54341[(13)] = inst_54199__$1);
(statearr_54341[(14)] = inst_54201__$1);
(statearr_54341[(22)] = inst_54215);
(statearr_54341[(16)] = inst_54200__$1);
return statearr_54341;
})();var statearr_54342_54418 = state_54322__$1;(statearr_54342_54418[(2)] = null);
(statearr_54342_54418[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (21)))
{var inst_54240 = (state_54322[(2)]);var state_54322__$1 = state_54322;var statearr_54343_54419 = state_54322__$1;(statearr_54343_54419[(2)] = inst_54240);
(statearr_54343_54419[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (31)))
{var inst_54266 = (state_54322[(11)]);var inst_54267 = (state_54322[(2)]);var inst_54268 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_54269 = cljs.core.async.untap_STAR_.call(null,m,inst_54266);var state_54322__$1 = (function (){var statearr_54344 = state_54322;(statearr_54344[(23)] = inst_54267);
(statearr_54344[(24)] = inst_54268);
return statearr_54344;
})();var statearr_54345_54420 = state_54322__$1;(statearr_54345_54420[(2)] = inst_54269);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54322__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (32)))
{var inst_54190 = (state_54322[(21)]);var inst_54266 = (state_54322[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54322,(31),Object,null,(30));var inst_54273 = cljs.core.async.put_BANG_.call(null,inst_54266,inst_54190,done);var state_54322__$1 = state_54322;var statearr_54346_54421 = state_54322__$1;(statearr_54346_54421[(2)] = inst_54273);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54322__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (40)))
{var inst_54288 = (state_54322[(25)]);var inst_54289 = (state_54322[(2)]);var inst_54290 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_54291 = cljs.core.async.untap_STAR_.call(null,m,inst_54288);var state_54322__$1 = (function (){var statearr_54347 = state_54322;(statearr_54347[(26)] = inst_54290);
(statearr_54347[(27)] = inst_54289);
return statearr_54347;
})();var statearr_54348_54422 = state_54322__$1;(statearr_54348_54422[(2)] = inst_54291);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54322__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (33)))
{var inst_54279 = (state_54322[(17)]);var inst_54281 = cljs.core.chunked_seq_QMARK_.call(null,inst_54279);var state_54322__$1 = state_54322;if(inst_54281)
{var statearr_54349_54423 = state_54322__$1;(statearr_54349_54423[(1)] = (36));
} else
{var statearr_54350_54424 = state_54322__$1;(statearr_54350_54424[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (13)))
{var inst_54209 = (state_54322[(28)]);var inst_54212 = cljs.core.async.close_BANG_.call(null,inst_54209);var state_54322__$1 = state_54322;var statearr_54351_54425 = state_54322__$1;(statearr_54351_54425[(2)] = inst_54212);
(statearr_54351_54425[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (22)))
{var inst_54230 = (state_54322[(8)]);var inst_54233 = cljs.core.async.close_BANG_.call(null,inst_54230);var state_54322__$1 = state_54322;var statearr_54352_54426 = state_54322__$1;(statearr_54352_54426[(2)] = inst_54233);
(statearr_54352_54426[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (36)))
{var inst_54279 = (state_54322[(17)]);var inst_54283 = cljs.core.chunk_first.call(null,inst_54279);var inst_54284 = cljs.core.chunk_rest.call(null,inst_54279);var inst_54285 = cljs.core.count.call(null,inst_54283);var inst_54258 = inst_54284;var inst_54259 = inst_54283;var inst_54260 = inst_54285;var inst_54261 = (0);var state_54322__$1 = (function (){var statearr_54353 = state_54322;(statearr_54353[(18)] = inst_54258);
(statearr_54353[(9)] = inst_54261);
(statearr_54353[(10)] = inst_54259);
(statearr_54353[(20)] = inst_54260);
return statearr_54353;
})();var statearr_54354_54427 = state_54322__$1;(statearr_54354_54427[(2)] = null);
(statearr_54354_54427[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (41)))
{var inst_54190 = (state_54322[(21)]);var inst_54288 = (state_54322[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54322,(40),Object,null,(39));var inst_54295 = cljs.core.async.put_BANG_.call(null,inst_54288,inst_54190,done);var state_54322__$1 = state_54322;var statearr_54355_54428 = state_54322__$1;(statearr_54355_54428[(2)] = inst_54295);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54322__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (43)))
{var state_54322__$1 = state_54322;var statearr_54356_54429 = state_54322__$1;(statearr_54356_54429[(2)] = null);
(statearr_54356_54429[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (29)))
{var inst_54306 = (state_54322[(2)]);var state_54322__$1 = state_54322;var statearr_54357_54430 = state_54322__$1;(statearr_54357_54430[(2)] = inst_54306);
(statearr_54357_54430[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (44)))
{var inst_54315 = (state_54322[(2)]);var state_54322__$1 = (function (){var statearr_54358 = state_54322;(statearr_54358[(29)] = inst_54315);
return statearr_54358;
})();var statearr_54359_54431 = state_54322__$1;(statearr_54359_54431[(2)] = null);
(statearr_54359_54431[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (6)))
{var inst_54250 = (state_54322[(30)]);var inst_54249 = cljs.core.deref.call(null,cs);var inst_54250__$1 = cljs.core.keys.call(null,inst_54249);var inst_54251 = cljs.core.count.call(null,inst_54250__$1);var inst_54252 = cljs.core.reset_BANG_.call(null,dctr,inst_54251);var inst_54257 = cljs.core.seq.call(null,inst_54250__$1);var inst_54258 = inst_54257;var inst_54259 = null;var inst_54260 = (0);var inst_54261 = (0);var state_54322__$1 = (function (){var statearr_54360 = state_54322;(statearr_54360[(30)] = inst_54250__$1);
(statearr_54360[(18)] = inst_54258);
(statearr_54360[(9)] = inst_54261);
(statearr_54360[(31)] = inst_54252);
(statearr_54360[(10)] = inst_54259);
(statearr_54360[(20)] = inst_54260);
return statearr_54360;
})();var statearr_54361_54432 = state_54322__$1;(statearr_54361_54432[(2)] = null);
(statearr_54361_54432[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (28)))
{var inst_54279 = (state_54322[(17)]);var inst_54258 = (state_54322[(18)]);var inst_54279__$1 = cljs.core.seq.call(null,inst_54258);var state_54322__$1 = (function (){var statearr_54362 = state_54322;(statearr_54362[(17)] = inst_54279__$1);
return statearr_54362;
})();if(inst_54279__$1)
{var statearr_54363_54433 = state_54322__$1;(statearr_54363_54433[(1)] = (33));
} else
{var statearr_54364_54434 = state_54322__$1;(statearr_54364_54434[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (25)))
{var inst_54261 = (state_54322[(9)]);var inst_54260 = (state_54322[(20)]);var inst_54263 = (inst_54261 < inst_54260);var inst_54264 = inst_54263;var state_54322__$1 = state_54322;if(cljs.core.truth_(inst_54264))
{var statearr_54365_54435 = state_54322__$1;(statearr_54365_54435[(1)] = (27));
} else
{var statearr_54366_54436 = state_54322__$1;(statearr_54366_54436[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (34)))
{var state_54322__$1 = state_54322;var statearr_54367_54437 = state_54322__$1;(statearr_54367_54437[(2)] = null);
(statearr_54367_54437[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (17)))
{var state_54322__$1 = state_54322;var statearr_54368_54438 = state_54322__$1;(statearr_54368_54438[(2)] = null);
(statearr_54368_54438[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (3)))
{var inst_54320 = (state_54322[(2)]);var state_54322__$1 = state_54322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54322__$1,inst_54320);
} else
{if((state_val_54323 === (12)))
{var inst_54245 = (state_54322[(2)]);var state_54322__$1 = state_54322;var statearr_54369_54439 = state_54322__$1;(statearr_54369_54439[(2)] = inst_54245);
(statearr_54369_54439[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (2)))
{var state_54322__$1 = state_54322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54322__$1,(4),ch);
} else
{if((state_val_54323 === (23)))
{var state_54322__$1 = state_54322;var statearr_54370_54440 = state_54322__$1;(statearr_54370_54440[(2)] = null);
(statearr_54370_54440[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (35)))
{var inst_54304 = (state_54322[(2)]);var state_54322__$1 = state_54322;var statearr_54371_54441 = state_54322__$1;(statearr_54371_54441[(2)] = inst_54304);
(statearr_54371_54441[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (19)))
{var inst_54219 = (state_54322[(7)]);var inst_54223 = cljs.core.chunk_first.call(null,inst_54219);var inst_54224 = cljs.core.chunk_rest.call(null,inst_54219);var inst_54225 = cljs.core.count.call(null,inst_54223);var inst_54199 = inst_54224;var inst_54200 = inst_54223;var inst_54201 = inst_54225;var inst_54202 = (0);var state_54322__$1 = (function (){var statearr_54372 = state_54322;(statearr_54372[(12)] = inst_54202);
(statearr_54372[(13)] = inst_54199);
(statearr_54372[(14)] = inst_54201);
(statearr_54372[(16)] = inst_54200);
return statearr_54372;
})();var statearr_54373_54442 = state_54322__$1;(statearr_54373_54442[(2)] = null);
(statearr_54373_54442[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (11)))
{var inst_54219 = (state_54322[(7)]);var inst_54199 = (state_54322[(13)]);var inst_54219__$1 = cljs.core.seq.call(null,inst_54199);var state_54322__$1 = (function (){var statearr_54374 = state_54322;(statearr_54374[(7)] = inst_54219__$1);
return statearr_54374;
})();if(inst_54219__$1)
{var statearr_54375_54443 = state_54322__$1;(statearr_54375_54443[(1)] = (16));
} else
{var statearr_54376_54444 = state_54322__$1;(statearr_54376_54444[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (9)))
{var inst_54247 = (state_54322[(2)]);var state_54322__$1 = state_54322;var statearr_54377_54445 = state_54322__$1;(statearr_54377_54445[(2)] = inst_54247);
(statearr_54377_54445[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (5)))
{var inst_54197 = cljs.core.deref.call(null,cs);var inst_54198 = cljs.core.seq.call(null,inst_54197);var inst_54199 = inst_54198;var inst_54200 = null;var inst_54201 = (0);var inst_54202 = (0);var state_54322__$1 = (function (){var statearr_54378 = state_54322;(statearr_54378[(12)] = inst_54202);
(statearr_54378[(13)] = inst_54199);
(statearr_54378[(14)] = inst_54201);
(statearr_54378[(16)] = inst_54200);
return statearr_54378;
})();var statearr_54379_54446 = state_54322__$1;(statearr_54379_54446[(2)] = null);
(statearr_54379_54446[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (14)))
{var state_54322__$1 = state_54322;var statearr_54380_54447 = state_54322__$1;(statearr_54380_54447[(2)] = null);
(statearr_54380_54447[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (45)))
{var inst_54312 = (state_54322[(2)]);var state_54322__$1 = state_54322;var statearr_54381_54448 = state_54322__$1;(statearr_54381_54448[(2)] = inst_54312);
(statearr_54381_54448[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (26)))
{var inst_54250 = (state_54322[(30)]);var inst_54308 = (state_54322[(2)]);var inst_54309 = cljs.core.seq.call(null,inst_54250);var state_54322__$1 = (function (){var statearr_54382 = state_54322;(statearr_54382[(32)] = inst_54308);
return statearr_54382;
})();if(inst_54309)
{var statearr_54383_54449 = state_54322__$1;(statearr_54383_54449[(1)] = (42));
} else
{var statearr_54384_54450 = state_54322__$1;(statearr_54384_54450[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (16)))
{var inst_54219 = (state_54322[(7)]);var inst_54221 = cljs.core.chunked_seq_QMARK_.call(null,inst_54219);var state_54322__$1 = state_54322;if(inst_54221)
{var statearr_54388_54451 = state_54322__$1;(statearr_54388_54451[(1)] = (19));
} else
{var statearr_54389_54452 = state_54322__$1;(statearr_54389_54452[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (38)))
{var inst_54301 = (state_54322[(2)]);var state_54322__$1 = state_54322;var statearr_54390_54453 = state_54322__$1;(statearr_54390_54453[(2)] = inst_54301);
(statearr_54390_54453[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (30)))
{var inst_54258 = (state_54322[(18)]);var inst_54261 = (state_54322[(9)]);var inst_54259 = (state_54322[(10)]);var inst_54260 = (state_54322[(20)]);var inst_54275 = (state_54322[(2)]);var inst_54276 = (inst_54261 + (1));var tmp54385 = inst_54258;var tmp54386 = inst_54259;var tmp54387 = inst_54260;var inst_54258__$1 = tmp54385;var inst_54259__$1 = tmp54386;var inst_54260__$1 = tmp54387;var inst_54261__$1 = inst_54276;var state_54322__$1 = (function (){var statearr_54391 = state_54322;(statearr_54391[(18)] = inst_54258__$1);
(statearr_54391[(33)] = inst_54275);
(statearr_54391[(9)] = inst_54261__$1);
(statearr_54391[(10)] = inst_54259__$1);
(statearr_54391[(20)] = inst_54260__$1);
return statearr_54391;
})();var statearr_54392_54454 = state_54322__$1;(statearr_54392_54454[(2)] = null);
(statearr_54392_54454[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (10)))
{var inst_54202 = (state_54322[(12)]);var inst_54200 = (state_54322[(16)]);var inst_54208 = cljs.core._nth.call(null,inst_54200,inst_54202);var inst_54209 = cljs.core.nth.call(null,inst_54208,(0),null);var inst_54210 = cljs.core.nth.call(null,inst_54208,(1),null);var state_54322__$1 = (function (){var statearr_54393 = state_54322;(statearr_54393[(28)] = inst_54209);
return statearr_54393;
})();if(cljs.core.truth_(inst_54210))
{var statearr_54394_54455 = state_54322__$1;(statearr_54394_54455[(1)] = (13));
} else
{var statearr_54395_54456 = state_54322__$1;(statearr_54395_54456[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (18)))
{var inst_54243 = (state_54322[(2)]);var state_54322__$1 = state_54322;var statearr_54396_54457 = state_54322__$1;(statearr_54396_54457[(2)] = inst_54243);
(statearr_54396_54457[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (42)))
{var state_54322__$1 = state_54322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54322__$1,(45),dchan);
} else
{if((state_val_54323 === (37)))
{var inst_54279 = (state_54322[(17)]);var inst_54288 = cljs.core.first.call(null,inst_54279);var state_54322__$1 = (function (){var statearr_54397 = state_54322;(statearr_54397[(25)] = inst_54288);
return statearr_54397;
})();var statearr_54398_54458 = state_54322__$1;(statearr_54398_54458[(2)] = null);
(statearr_54398_54458[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54323 === (8)))
{var inst_54202 = (state_54322[(12)]);var inst_54201 = (state_54322[(14)]);var inst_54204 = (inst_54202 < inst_54201);var inst_54205 = inst_54204;var state_54322__$1 = state_54322;if(cljs.core.truth_(inst_54205))
{var statearr_54399_54459 = state_54322__$1;(statearr_54399_54459[(1)] = (10));
} else
{var statearr_54400_54460 = state_54322__$1;(statearr_54400_54460[(1)] = (11));
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
});})(c__5708__auto___54408,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___54408,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_54404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54404[(0)] = state_machine__5694__auto__);
(statearr_54404[(1)] = (1));
return statearr_54404;
});
var state_machine__5694__auto____1 = (function (state_54322){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_54322);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e54405){if((e54405 instanceof Object))
{var ex__5697__auto__ = e54405;var statearr_54406_54461 = state_54322;(statearr_54406_54461[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54322);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e54405;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54462 = state_54322;
state_54322 = G__54462;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_54322){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_54322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___54408,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_54407 = f__5709__auto__.call(null);(statearr_54407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___54408);
return statearr_54407;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___54408,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj54464 = {};return obj54464;
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
;var m = (function (){if(typeof cljs.core.async.t54574 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54574 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta54575){
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
this.meta54575 = meta54575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54574.cljs$lang$type = true;
cljs.core.async.t54574.cljs$lang$ctorStr = "cljs.core.async/t54574";
cljs.core.async.t54574.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t54574");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54574.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t54574.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54574.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54574.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54574.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54574.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54574.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t54574.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54574.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_54576){var self__ = this;
var _54576__$1 = this;return self__.meta54575;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_54576,meta54575__$1){var self__ = this;
var _54576__$1 = this;return (new cljs.core.async.t54574(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta54575__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t54574 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t54574(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta54575){return (new cljs.core.async.t54574(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta54575));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t54574(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___54683 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___54683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___54683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_54641){var state_val_54642 = (state_54641[(1)]);if((state_val_54642 === (7)))
{var inst_54590 = (state_54641[(7)]);var inst_54595 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54590);var state_54641__$1 = state_54641;var statearr_54643_54684 = state_54641__$1;(statearr_54643_54684[(2)] = inst_54595);
(statearr_54643_54684[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (20)))
{var inst_54605 = (state_54641[(8)]);var state_54641__$1 = state_54641;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54641__$1,(23),out,inst_54605);
} else
{if((state_val_54642 === (1)))
{var inst_54580 = (state_54641[(9)]);var inst_54580__$1 = calc_state.call(null);var inst_54581 = cljs.core.seq_QMARK_.call(null,inst_54580__$1);var state_54641__$1 = (function (){var statearr_54644 = state_54641;(statearr_54644[(9)] = inst_54580__$1);
return statearr_54644;
})();if(inst_54581)
{var statearr_54645_54685 = state_54641__$1;(statearr_54645_54685[(1)] = (2));
} else
{var statearr_54646_54686 = state_54641__$1;(statearr_54646_54686[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (4)))
{var inst_54580 = (state_54641[(9)]);var inst_54586 = (state_54641[(2)]);var inst_54587 = cljs.core.get.call(null,inst_54586,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_54588 = cljs.core.get.call(null,inst_54586,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_54589 = cljs.core.get.call(null,inst_54586,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_54590 = inst_54580;var state_54641__$1 = (function (){var statearr_54647 = state_54641;(statearr_54647[(10)] = inst_54587);
(statearr_54647[(11)] = inst_54588);
(statearr_54647[(12)] = inst_54589);
(statearr_54647[(7)] = inst_54590);
return statearr_54647;
})();var statearr_54648_54687 = state_54641__$1;(statearr_54648_54687[(2)] = null);
(statearr_54648_54687[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (15)))
{var state_54641__$1 = state_54641;var statearr_54649_54688 = state_54641__$1;(statearr_54649_54688[(2)] = null);
(statearr_54649_54688[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (21)))
{var state_54641__$1 = state_54641;var statearr_54650_54689 = state_54641__$1;(statearr_54650_54689[(2)] = null);
(statearr_54650_54689[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (13)))
{var inst_54637 = (state_54641[(2)]);var state_54641__$1 = state_54641;var statearr_54651_54690 = state_54641__$1;(statearr_54651_54690[(2)] = inst_54637);
(statearr_54651_54690[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (22)))
{var inst_54598 = (state_54641[(13)]);var inst_54634 = (state_54641[(2)]);var inst_54590 = inst_54598;var state_54641__$1 = (function (){var statearr_54652 = state_54641;(statearr_54652[(7)] = inst_54590);
(statearr_54652[(14)] = inst_54634);
return statearr_54652;
})();var statearr_54653_54691 = state_54641__$1;(statearr_54653_54691[(2)] = null);
(statearr_54653_54691[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (6)))
{var inst_54639 = (state_54641[(2)]);var state_54641__$1 = state_54641;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54641__$1,inst_54639);
} else
{if((state_val_54642 === (17)))
{var inst_54620 = (state_54641[(15)]);var state_54641__$1 = state_54641;var statearr_54654_54692 = state_54641__$1;(statearr_54654_54692[(2)] = inst_54620);
(statearr_54654_54692[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (3)))
{var inst_54580 = (state_54641[(9)]);var state_54641__$1 = state_54641;var statearr_54655_54693 = state_54641__$1;(statearr_54655_54693[(2)] = inst_54580);
(statearr_54655_54693[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (12)))
{var inst_54601 = (state_54641[(16)]);var inst_54620 = (state_54641[(15)]);var inst_54606 = (state_54641[(17)]);var inst_54620__$1 = inst_54601.call(null,inst_54606);var state_54641__$1 = (function (){var statearr_54656 = state_54641;(statearr_54656[(15)] = inst_54620__$1);
return statearr_54656;
})();if(cljs.core.truth_(inst_54620__$1))
{var statearr_54657_54694 = state_54641__$1;(statearr_54657_54694[(1)] = (17));
} else
{var statearr_54658_54695 = state_54641__$1;(statearr_54658_54695[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (2)))
{var inst_54580 = (state_54641[(9)]);var inst_54583 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54580);var state_54641__$1 = state_54641;var statearr_54659_54696 = state_54641__$1;(statearr_54659_54696[(2)] = inst_54583);
(statearr_54659_54696[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (23)))
{var inst_54631 = (state_54641[(2)]);var state_54641__$1 = state_54641;var statearr_54660_54697 = state_54641__$1;(statearr_54660_54697[(2)] = inst_54631);
(statearr_54660_54697[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (19)))
{var inst_54628 = (state_54641[(2)]);var state_54641__$1 = state_54641;if(cljs.core.truth_(inst_54628))
{var statearr_54661_54698 = state_54641__$1;(statearr_54661_54698[(1)] = (20));
} else
{var statearr_54662_54699 = state_54641__$1;(statearr_54662_54699[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (11)))
{var inst_54605 = (state_54641[(8)]);var inst_54611 = (inst_54605 == null);var state_54641__$1 = state_54641;if(cljs.core.truth_(inst_54611))
{var statearr_54663_54700 = state_54641__$1;(statearr_54663_54700[(1)] = (14));
} else
{var statearr_54664_54701 = state_54641__$1;(statearr_54664_54701[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (9)))
{var inst_54598 = (state_54641[(13)]);var inst_54598__$1 = (state_54641[(2)]);var inst_54599 = cljs.core.get.call(null,inst_54598__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_54600 = cljs.core.get.call(null,inst_54598__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_54601 = cljs.core.get.call(null,inst_54598__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_54641__$1 = (function (){var statearr_54665 = state_54641;(statearr_54665[(16)] = inst_54601);
(statearr_54665[(18)] = inst_54600);
(statearr_54665[(13)] = inst_54598__$1);
return statearr_54665;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_54641__$1,(10),inst_54599);
} else
{if((state_val_54642 === (5)))
{var inst_54590 = (state_54641[(7)]);var inst_54593 = cljs.core.seq_QMARK_.call(null,inst_54590);var state_54641__$1 = state_54641;if(inst_54593)
{var statearr_54666_54702 = state_54641__$1;(statearr_54666_54702[(1)] = (7));
} else
{var statearr_54667_54703 = state_54641__$1;(statearr_54667_54703[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (14)))
{var inst_54606 = (state_54641[(17)]);var inst_54613 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_54606);var state_54641__$1 = state_54641;var statearr_54668_54704 = state_54641__$1;(statearr_54668_54704[(2)] = inst_54613);
(statearr_54668_54704[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (16)))
{var inst_54616 = (state_54641[(2)]);var inst_54617 = calc_state.call(null);var inst_54590 = inst_54617;var state_54641__$1 = (function (){var statearr_54669 = state_54641;(statearr_54669[(7)] = inst_54590);
(statearr_54669[(19)] = inst_54616);
return statearr_54669;
})();var statearr_54670_54705 = state_54641__$1;(statearr_54670_54705[(2)] = null);
(statearr_54670_54705[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (10)))
{var inst_54606 = (state_54641[(17)]);var inst_54605 = (state_54641[(8)]);var inst_54604 = (state_54641[(2)]);var inst_54605__$1 = cljs.core.nth.call(null,inst_54604,(0),null);var inst_54606__$1 = cljs.core.nth.call(null,inst_54604,(1),null);var inst_54607 = (inst_54605__$1 == null);var inst_54608 = cljs.core._EQ_.call(null,inst_54606__$1,change);var inst_54609 = (inst_54607) || (inst_54608);var state_54641__$1 = (function (){var statearr_54671 = state_54641;(statearr_54671[(17)] = inst_54606__$1);
(statearr_54671[(8)] = inst_54605__$1);
return statearr_54671;
})();if(cljs.core.truth_(inst_54609))
{var statearr_54672_54706 = state_54641__$1;(statearr_54672_54706[(1)] = (11));
} else
{var statearr_54673_54707 = state_54641__$1;(statearr_54673_54707[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (18)))
{var inst_54601 = (state_54641[(16)]);var inst_54606 = (state_54641[(17)]);var inst_54600 = (state_54641[(18)]);var inst_54623 = cljs.core.empty_QMARK_.call(null,inst_54601);var inst_54624 = inst_54600.call(null,inst_54606);var inst_54625 = cljs.core.not.call(null,inst_54624);var inst_54626 = (inst_54623) && (inst_54625);var state_54641__$1 = state_54641;var statearr_54674_54708 = state_54641__$1;(statearr_54674_54708[(2)] = inst_54626);
(statearr_54674_54708[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54642 === (8)))
{var inst_54590 = (state_54641[(7)]);var state_54641__$1 = state_54641;var statearr_54675_54709 = state_54641__$1;(statearr_54675_54709[(2)] = inst_54590);
(statearr_54675_54709[(1)] = (9));
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
});})(c__5708__auto___54683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___54683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_54679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54679[(0)] = state_machine__5694__auto__);
(statearr_54679[(1)] = (1));
return statearr_54679;
});
var state_machine__5694__auto____1 = (function (state_54641){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_54641);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e54680){if((e54680 instanceof Object))
{var ex__5697__auto__ = e54680;var statearr_54681_54710 = state_54641;(statearr_54681_54710[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54641);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e54680;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54711 = state_54641;
state_54641 = G__54711;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_54641){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_54641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___54683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_54682 = f__5709__auto__.call(null);(statearr_54682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___54683);
return statearr_54682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___54683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj54713 = {};return obj54713;
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
return (function (p1__54714_SHARP_){if(cljs.core.truth_(p1__54714_SHARP_.call(null,topic)))
{return p1__54714_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__54714_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t54839 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54839 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta54840){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta54840 = meta54840;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54839.cljs$lang$type = true;
cljs.core.async.t54839.cljs$lang$ctorStr = "cljs.core.async/t54839";
cljs.core.async.t54839.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t54839");
});})(mults,ensure_mult))
;
cljs.core.async.t54839.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t54839.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t54839.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t54839.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t54839.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t54839.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t54839.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t54839.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_54841){var self__ = this;
var _54841__$1 = this;return self__.meta54840;
});})(mults,ensure_mult))
;
cljs.core.async.t54839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_54841,meta54840__$1){var self__ = this;
var _54841__$1 = this;return (new cljs.core.async.t54839(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta54840__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t54839 = ((function (mults,ensure_mult){
return (function __GT_t54839(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta54840){return (new cljs.core.async.t54839(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta54840));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t54839(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___54963 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___54963,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___54963,mults,ensure_mult,p){
return (function (state_54915){var state_val_54916 = (state_54915[(1)]);if((state_val_54916 === (7)))
{var inst_54911 = (state_54915[(2)]);var state_54915__$1 = state_54915;var statearr_54917_54964 = state_54915__$1;(statearr_54917_54964[(2)] = inst_54911);
(statearr_54917_54964[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (20)))
{var state_54915__$1 = state_54915;var statearr_54918_54965 = state_54915__$1;(statearr_54918_54965[(2)] = null);
(statearr_54918_54965[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (1)))
{var state_54915__$1 = state_54915;var statearr_54919_54966 = state_54915__$1;(statearr_54919_54966[(2)] = null);
(statearr_54919_54966[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (24)))
{var inst_54844 = (state_54915[(7)]);var inst_54894 = (state_54915[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54915,(23),Object,null,(22));var inst_54901 = cljs.core.async.muxch_STAR_.call(null,inst_54894);var state_54915__$1 = state_54915;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54915__$1,(25),inst_54901,inst_54844);
} else
{if((state_val_54916 === (4)))
{var inst_54844 = (state_54915[(7)]);var inst_54844__$1 = (state_54915[(2)]);var inst_54845 = (inst_54844__$1 == null);var state_54915__$1 = (function (){var statearr_54920 = state_54915;(statearr_54920[(7)] = inst_54844__$1);
return statearr_54920;
})();if(cljs.core.truth_(inst_54845))
{var statearr_54921_54967 = state_54915__$1;(statearr_54921_54967[(1)] = (5));
} else
{var statearr_54922_54968 = state_54915__$1;(statearr_54922_54968[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (15)))
{var inst_54886 = (state_54915[(2)]);var state_54915__$1 = state_54915;var statearr_54923_54969 = state_54915__$1;(statearr_54923_54969[(2)] = inst_54886);
(statearr_54923_54969[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (21)))
{var inst_54908 = (state_54915[(2)]);var state_54915__$1 = (function (){var statearr_54924 = state_54915;(statearr_54924[(9)] = inst_54908);
return statearr_54924;
})();var statearr_54925_54970 = state_54915__$1;(statearr_54925_54970[(2)] = null);
(statearr_54925_54970[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (13)))
{var inst_54868 = (state_54915[(10)]);var inst_54870 = cljs.core.chunked_seq_QMARK_.call(null,inst_54868);var state_54915__$1 = state_54915;if(inst_54870)
{var statearr_54926_54971 = state_54915__$1;(statearr_54926_54971[(1)] = (16));
} else
{var statearr_54927_54972 = state_54915__$1;(statearr_54927_54972[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (22)))
{var inst_54905 = (state_54915[(2)]);var state_54915__$1 = state_54915;var statearr_54928_54973 = state_54915__$1;(statearr_54928_54973[(2)] = inst_54905);
(statearr_54928_54973[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (6)))
{var inst_54892 = (state_54915[(11)]);var inst_54844 = (state_54915[(7)]);var inst_54894 = (state_54915[(8)]);var inst_54892__$1 = topic_fn.call(null,inst_54844);var inst_54893 = cljs.core.deref.call(null,mults);var inst_54894__$1 = cljs.core.get.call(null,inst_54893,inst_54892__$1);var state_54915__$1 = (function (){var statearr_54929 = state_54915;(statearr_54929[(11)] = inst_54892__$1);
(statearr_54929[(8)] = inst_54894__$1);
return statearr_54929;
})();if(cljs.core.truth_(inst_54894__$1))
{var statearr_54930_54974 = state_54915__$1;(statearr_54930_54974[(1)] = (19));
} else
{var statearr_54931_54975 = state_54915__$1;(statearr_54931_54975[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (25)))
{var inst_54903 = (state_54915[(2)]);var state_54915__$1 = state_54915;var statearr_54932_54976 = state_54915__$1;(statearr_54932_54976[(2)] = inst_54903);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54915__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (17)))
{var inst_54868 = (state_54915[(10)]);var inst_54877 = cljs.core.first.call(null,inst_54868);var inst_54878 = cljs.core.async.muxch_STAR_.call(null,inst_54877);var inst_54879 = cljs.core.async.close_BANG_.call(null,inst_54878);var inst_54880 = cljs.core.next.call(null,inst_54868);var inst_54854 = inst_54880;var inst_54855 = null;var inst_54856 = (0);var inst_54857 = (0);var state_54915__$1 = (function (){var statearr_54933 = state_54915;(statearr_54933[(12)] = inst_54855);
(statearr_54933[(13)] = inst_54879);
(statearr_54933[(14)] = inst_54854);
(statearr_54933[(15)] = inst_54857);
(statearr_54933[(16)] = inst_54856);
return statearr_54933;
})();var statearr_54934_54977 = state_54915__$1;(statearr_54934_54977[(2)] = null);
(statearr_54934_54977[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (3)))
{var inst_54913 = (state_54915[(2)]);var state_54915__$1 = state_54915;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54915__$1,inst_54913);
} else
{if((state_val_54916 === (12)))
{var inst_54888 = (state_54915[(2)]);var state_54915__$1 = state_54915;var statearr_54935_54978 = state_54915__$1;(statearr_54935_54978[(2)] = inst_54888);
(statearr_54935_54978[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (2)))
{var state_54915__$1 = state_54915;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54915__$1,(4),ch);
} else
{if((state_val_54916 === (23)))
{var inst_54892 = (state_54915[(11)]);var inst_54896 = (state_54915[(2)]);var inst_54897 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_54892);var state_54915__$1 = (function (){var statearr_54936 = state_54915;(statearr_54936[(17)] = inst_54896);
return statearr_54936;
})();var statearr_54937_54979 = state_54915__$1;(statearr_54937_54979[(2)] = inst_54897);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54915__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (19)))
{var state_54915__$1 = state_54915;var statearr_54938_54980 = state_54915__$1;(statearr_54938_54980[(2)] = null);
(statearr_54938_54980[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (11)))
{var inst_54868 = (state_54915[(10)]);var inst_54854 = (state_54915[(14)]);var inst_54868__$1 = cljs.core.seq.call(null,inst_54854);var state_54915__$1 = (function (){var statearr_54939 = state_54915;(statearr_54939[(10)] = inst_54868__$1);
return statearr_54939;
})();if(inst_54868__$1)
{var statearr_54940_54981 = state_54915__$1;(statearr_54940_54981[(1)] = (13));
} else
{var statearr_54941_54982 = state_54915__$1;(statearr_54941_54982[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (9)))
{var inst_54890 = (state_54915[(2)]);var state_54915__$1 = state_54915;var statearr_54942_54983 = state_54915__$1;(statearr_54942_54983[(2)] = inst_54890);
(statearr_54942_54983[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (5)))
{var inst_54851 = cljs.core.deref.call(null,mults);var inst_54852 = cljs.core.vals.call(null,inst_54851);var inst_54853 = cljs.core.seq.call(null,inst_54852);var inst_54854 = inst_54853;var inst_54855 = null;var inst_54856 = (0);var inst_54857 = (0);var state_54915__$1 = (function (){var statearr_54943 = state_54915;(statearr_54943[(12)] = inst_54855);
(statearr_54943[(14)] = inst_54854);
(statearr_54943[(15)] = inst_54857);
(statearr_54943[(16)] = inst_54856);
return statearr_54943;
})();var statearr_54944_54984 = state_54915__$1;(statearr_54944_54984[(2)] = null);
(statearr_54944_54984[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (14)))
{var state_54915__$1 = state_54915;var statearr_54948_54985 = state_54915__$1;(statearr_54948_54985[(2)] = null);
(statearr_54948_54985[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (16)))
{var inst_54868 = (state_54915[(10)]);var inst_54872 = cljs.core.chunk_first.call(null,inst_54868);var inst_54873 = cljs.core.chunk_rest.call(null,inst_54868);var inst_54874 = cljs.core.count.call(null,inst_54872);var inst_54854 = inst_54873;var inst_54855 = inst_54872;var inst_54856 = inst_54874;var inst_54857 = (0);var state_54915__$1 = (function (){var statearr_54949 = state_54915;(statearr_54949[(12)] = inst_54855);
(statearr_54949[(14)] = inst_54854);
(statearr_54949[(15)] = inst_54857);
(statearr_54949[(16)] = inst_54856);
return statearr_54949;
})();var statearr_54950_54986 = state_54915__$1;(statearr_54950_54986[(2)] = null);
(statearr_54950_54986[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (10)))
{var inst_54855 = (state_54915[(12)]);var inst_54854 = (state_54915[(14)]);var inst_54857 = (state_54915[(15)]);var inst_54856 = (state_54915[(16)]);var inst_54862 = cljs.core._nth.call(null,inst_54855,inst_54857);var inst_54863 = cljs.core.async.muxch_STAR_.call(null,inst_54862);var inst_54864 = cljs.core.async.close_BANG_.call(null,inst_54863);var inst_54865 = (inst_54857 + (1));var tmp54945 = inst_54855;var tmp54946 = inst_54854;var tmp54947 = inst_54856;var inst_54854__$1 = tmp54946;var inst_54855__$1 = tmp54945;var inst_54856__$1 = tmp54947;var inst_54857__$1 = inst_54865;var state_54915__$1 = (function (){var statearr_54951 = state_54915;(statearr_54951[(18)] = inst_54864);
(statearr_54951[(12)] = inst_54855__$1);
(statearr_54951[(14)] = inst_54854__$1);
(statearr_54951[(15)] = inst_54857__$1);
(statearr_54951[(16)] = inst_54856__$1);
return statearr_54951;
})();var statearr_54952_54987 = state_54915__$1;(statearr_54952_54987[(2)] = null);
(statearr_54952_54987[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (18)))
{var inst_54883 = (state_54915[(2)]);var state_54915__$1 = state_54915;var statearr_54953_54988 = state_54915__$1;(statearr_54953_54988[(2)] = inst_54883);
(statearr_54953_54988[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54916 === (8)))
{var inst_54857 = (state_54915[(15)]);var inst_54856 = (state_54915[(16)]);var inst_54859 = (inst_54857 < inst_54856);var inst_54860 = inst_54859;var state_54915__$1 = state_54915;if(cljs.core.truth_(inst_54860))
{var statearr_54954_54989 = state_54915__$1;(statearr_54954_54989[(1)] = (10));
} else
{var statearr_54955_54990 = state_54915__$1;(statearr_54955_54990[(1)] = (11));
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
});})(c__5708__auto___54963,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___54963,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_54959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54959[(0)] = state_machine__5694__auto__);
(statearr_54959[(1)] = (1));
return statearr_54959;
});
var state_machine__5694__auto____1 = (function (state_54915){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_54915);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e54960){if((e54960 instanceof Object))
{var ex__5697__auto__ = e54960;var statearr_54961_54991 = state_54915;(statearr_54961_54991[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54915);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e54960;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54992 = state_54915;
state_54915 = G__54992;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_54915){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_54915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___54963,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_54962 = f__5709__auto__.call(null);(statearr_54962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___54963);
return statearr_54962;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___54963,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___55129 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___55129,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___55129,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_55099){var state_val_55100 = (state_55099[(1)]);if((state_val_55100 === (7)))
{var state_55099__$1 = state_55099;var statearr_55101_55130 = state_55099__$1;(statearr_55101_55130[(2)] = null);
(statearr_55101_55130[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55100 === (1)))
{var state_55099__$1 = state_55099;var statearr_55102_55131 = state_55099__$1;(statearr_55102_55131[(2)] = null);
(statearr_55102_55131[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55100 === (4)))
{var inst_55063 = (state_55099[(7)]);var inst_55065 = (inst_55063 < cnt);var state_55099__$1 = state_55099;if(cljs.core.truth_(inst_55065))
{var statearr_55103_55132 = state_55099__$1;(statearr_55103_55132[(1)] = (6));
} else
{var statearr_55104_55133 = state_55099__$1;(statearr_55104_55133[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55100 === (15)))
{var inst_55095 = (state_55099[(2)]);var state_55099__$1 = state_55099;var statearr_55105_55134 = state_55099__$1;(statearr_55105_55134[(2)] = inst_55095);
(statearr_55105_55134[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55100 === (13)))
{var inst_55088 = cljs.core.async.close_BANG_.call(null,out);var state_55099__$1 = state_55099;var statearr_55106_55135 = state_55099__$1;(statearr_55106_55135[(2)] = inst_55088);
(statearr_55106_55135[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55100 === (6)))
{var state_55099__$1 = state_55099;var statearr_55107_55136 = state_55099__$1;(statearr_55107_55136[(2)] = null);
(statearr_55107_55136[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55100 === (3)))
{var inst_55097 = (state_55099[(2)]);var state_55099__$1 = state_55099;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55099__$1,inst_55097);
} else
{if((state_val_55100 === (12)))
{var inst_55085 = (state_55099[(8)]);var inst_55085__$1 = (state_55099[(2)]);var inst_55086 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_55085__$1);var state_55099__$1 = (function (){var statearr_55108 = state_55099;(statearr_55108[(8)] = inst_55085__$1);
return statearr_55108;
})();if(cljs.core.truth_(inst_55086))
{var statearr_55109_55137 = state_55099__$1;(statearr_55109_55137[(1)] = (13));
} else
{var statearr_55110_55138 = state_55099__$1;(statearr_55110_55138[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55100 === (2)))
{var inst_55062 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_55063 = (0);var state_55099__$1 = (function (){var statearr_55111 = state_55099;(statearr_55111[(7)] = inst_55063);
(statearr_55111[(9)] = inst_55062);
return statearr_55111;
})();var statearr_55112_55139 = state_55099__$1;(statearr_55112_55139[(2)] = null);
(statearr_55112_55139[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55100 === (11)))
{var inst_55063 = (state_55099[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_55099,(10),Object,null,(9));var inst_55072 = chs__$1.call(null,inst_55063);var inst_55073 = done.call(null,inst_55063);var inst_55074 = cljs.core.async.take_BANG_.call(null,inst_55072,inst_55073);var state_55099__$1 = state_55099;var statearr_55113_55140 = state_55099__$1;(statearr_55113_55140[(2)] = inst_55074);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55099__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55100 === (9)))
{var inst_55063 = (state_55099[(7)]);var inst_55076 = (state_55099[(2)]);var inst_55077 = (inst_55063 + (1));var inst_55063__$1 = inst_55077;var state_55099__$1 = (function (){var statearr_55114 = state_55099;(statearr_55114[(10)] = inst_55076);
(statearr_55114[(7)] = inst_55063__$1);
return statearr_55114;
})();var statearr_55115_55141 = state_55099__$1;(statearr_55115_55141[(2)] = null);
(statearr_55115_55141[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55100 === (5)))
{var inst_55083 = (state_55099[(2)]);var state_55099__$1 = (function (){var statearr_55116 = state_55099;(statearr_55116[(11)] = inst_55083);
return statearr_55116;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55099__$1,(12),dchan);
} else
{if((state_val_55100 === (14)))
{var inst_55085 = (state_55099[(8)]);var inst_55090 = cljs.core.apply.call(null,f,inst_55085);var state_55099__$1 = state_55099;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55099__$1,(16),out,inst_55090);
} else
{if((state_val_55100 === (16)))
{var inst_55092 = (state_55099[(2)]);var state_55099__$1 = (function (){var statearr_55117 = state_55099;(statearr_55117[(12)] = inst_55092);
return statearr_55117;
})();var statearr_55118_55142 = state_55099__$1;(statearr_55118_55142[(2)] = null);
(statearr_55118_55142[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55100 === (10)))
{var inst_55067 = (state_55099[(2)]);var inst_55068 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_55099__$1 = (function (){var statearr_55119 = state_55099;(statearr_55119[(13)] = inst_55067);
return statearr_55119;
})();var statearr_55120_55143 = state_55099__$1;(statearr_55120_55143[(2)] = inst_55068);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55099__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55100 === (8)))
{var inst_55081 = (state_55099[(2)]);var state_55099__$1 = state_55099;var statearr_55121_55144 = state_55099__$1;(statearr_55121_55144[(2)] = inst_55081);
(statearr_55121_55144[(1)] = (5));
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
});})(c__5708__auto___55129,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___55129,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55125[(0)] = state_machine__5694__auto__);
(statearr_55125[(1)] = (1));
return statearr_55125;
});
var state_machine__5694__auto____1 = (function (state_55099){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55099);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55126){if((e55126 instanceof Object))
{var ex__5697__auto__ = e55126;var statearr_55127_55145 = state_55099;(statearr_55127_55145[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55099);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55126;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55146 = state_55099;
state_55099 = G__55146;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55099){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___55129,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_55128 = f__5709__auto__.call(null);(statearr_55128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___55129);
return statearr_55128;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___55129,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___55254 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___55254,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___55254,out){
return (function (state_55230){var state_val_55231 = (state_55230[(1)]);if((state_val_55231 === (7)))
{var inst_55209 = (state_55230[(7)]);var inst_55210 = (state_55230[(8)]);var inst_55209__$1 = (state_55230[(2)]);var inst_55210__$1 = cljs.core.nth.call(null,inst_55209__$1,(0),null);var inst_55211 = cljs.core.nth.call(null,inst_55209__$1,(1),null);var inst_55212 = (inst_55210__$1 == null);var state_55230__$1 = (function (){var statearr_55232 = state_55230;(statearr_55232[(7)] = inst_55209__$1);
(statearr_55232[(9)] = inst_55211);
(statearr_55232[(8)] = inst_55210__$1);
return statearr_55232;
})();if(cljs.core.truth_(inst_55212))
{var statearr_55233_55255 = state_55230__$1;(statearr_55233_55255[(1)] = (8));
} else
{var statearr_55234_55256 = state_55230__$1;(statearr_55234_55256[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55231 === (1)))
{var inst_55201 = cljs.core.vec.call(null,chs);var inst_55202 = inst_55201;var state_55230__$1 = (function (){var statearr_55235 = state_55230;(statearr_55235[(10)] = inst_55202);
return statearr_55235;
})();var statearr_55236_55257 = state_55230__$1;(statearr_55236_55257[(2)] = null);
(statearr_55236_55257[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55231 === (4)))
{var inst_55202 = (state_55230[(10)]);var state_55230__$1 = state_55230;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_55230__$1,(7),inst_55202);
} else
{if((state_val_55231 === (6)))
{var inst_55226 = (state_55230[(2)]);var state_55230__$1 = state_55230;var statearr_55237_55258 = state_55230__$1;(statearr_55237_55258[(2)] = inst_55226);
(statearr_55237_55258[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55231 === (3)))
{var inst_55228 = (state_55230[(2)]);var state_55230__$1 = state_55230;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55230__$1,inst_55228);
} else
{if((state_val_55231 === (2)))
{var inst_55202 = (state_55230[(10)]);var inst_55204 = cljs.core.count.call(null,inst_55202);var inst_55205 = (inst_55204 > (0));var state_55230__$1 = state_55230;if(cljs.core.truth_(inst_55205))
{var statearr_55239_55259 = state_55230__$1;(statearr_55239_55259[(1)] = (4));
} else
{var statearr_55240_55260 = state_55230__$1;(statearr_55240_55260[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55231 === (11)))
{var inst_55202 = (state_55230[(10)]);var inst_55219 = (state_55230[(2)]);var tmp55238 = inst_55202;var inst_55202__$1 = tmp55238;var state_55230__$1 = (function (){var statearr_55241 = state_55230;(statearr_55241[(10)] = inst_55202__$1);
(statearr_55241[(11)] = inst_55219);
return statearr_55241;
})();var statearr_55242_55261 = state_55230__$1;(statearr_55242_55261[(2)] = null);
(statearr_55242_55261[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55231 === (9)))
{var inst_55210 = (state_55230[(8)]);var state_55230__$1 = state_55230;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55230__$1,(11),out,inst_55210);
} else
{if((state_val_55231 === (5)))
{var inst_55224 = cljs.core.async.close_BANG_.call(null,out);var state_55230__$1 = state_55230;var statearr_55243_55262 = state_55230__$1;(statearr_55243_55262[(2)] = inst_55224);
(statearr_55243_55262[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55231 === (10)))
{var inst_55222 = (state_55230[(2)]);var state_55230__$1 = state_55230;var statearr_55244_55263 = state_55230__$1;(statearr_55244_55263[(2)] = inst_55222);
(statearr_55244_55263[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55231 === (8)))
{var inst_55202 = (state_55230[(10)]);var inst_55209 = (state_55230[(7)]);var inst_55211 = (state_55230[(9)]);var inst_55210 = (state_55230[(8)]);var inst_55214 = (function (){var c = inst_55211;var v = inst_55210;var vec__55207 = inst_55209;var cs = inst_55202;return ((function (c,v,vec__55207,cs,inst_55202,inst_55209,inst_55211,inst_55210,state_val_55231,c__5708__auto___55254,out){
return (function (p1__55147_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__55147_SHARP_);
});
;})(c,v,vec__55207,cs,inst_55202,inst_55209,inst_55211,inst_55210,state_val_55231,c__5708__auto___55254,out))
})();var inst_55215 = cljs.core.filterv.call(null,inst_55214,inst_55202);var inst_55202__$1 = inst_55215;var state_55230__$1 = (function (){var statearr_55245 = state_55230;(statearr_55245[(10)] = inst_55202__$1);
return statearr_55245;
})();var statearr_55246_55264 = state_55230__$1;(statearr_55246_55264[(2)] = null);
(statearr_55246_55264[(1)] = (2));
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
});})(c__5708__auto___55254,out))
;return ((function (switch__5693__auto__,c__5708__auto___55254,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55250 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55250[(0)] = state_machine__5694__auto__);
(statearr_55250[(1)] = (1));
return statearr_55250;
});
var state_machine__5694__auto____1 = (function (state_55230){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55230);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55251){if((e55251 instanceof Object))
{var ex__5697__auto__ = e55251;var statearr_55252_55265 = state_55230;(statearr_55252_55265[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55230);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55251;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55266 = state_55230;
state_55230 = G__55266;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55230){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___55254,out))
})();var state__5710__auto__ = (function (){var statearr_55253 = f__5709__auto__.call(null);(statearr_55253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___55254);
return statearr_55253;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___55254,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___55359 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___55359,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___55359,out){
return (function (state_55336){var state_val_55337 = (state_55336[(1)]);if((state_val_55337 === (7)))
{var inst_55318 = (state_55336[(7)]);var inst_55318__$1 = (state_55336[(2)]);var inst_55319 = (inst_55318__$1 == null);var inst_55320 = cljs.core.not.call(null,inst_55319);var state_55336__$1 = (function (){var statearr_55338 = state_55336;(statearr_55338[(7)] = inst_55318__$1);
return statearr_55338;
})();if(inst_55320)
{var statearr_55339_55360 = state_55336__$1;(statearr_55339_55360[(1)] = (8));
} else
{var statearr_55340_55361 = state_55336__$1;(statearr_55340_55361[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55337 === (1)))
{var inst_55313 = (0);var state_55336__$1 = (function (){var statearr_55341 = state_55336;(statearr_55341[(8)] = inst_55313);
return statearr_55341;
})();var statearr_55342_55362 = state_55336__$1;(statearr_55342_55362[(2)] = null);
(statearr_55342_55362[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55337 === (4)))
{var state_55336__$1 = state_55336;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55336__$1,(7),ch);
} else
{if((state_val_55337 === (6)))
{var inst_55331 = (state_55336[(2)]);var state_55336__$1 = state_55336;var statearr_55343_55363 = state_55336__$1;(statearr_55343_55363[(2)] = inst_55331);
(statearr_55343_55363[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55337 === (3)))
{var inst_55333 = (state_55336[(2)]);var inst_55334 = cljs.core.async.close_BANG_.call(null,out);var state_55336__$1 = (function (){var statearr_55344 = state_55336;(statearr_55344[(9)] = inst_55333);
return statearr_55344;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55336__$1,inst_55334);
} else
{if((state_val_55337 === (2)))
{var inst_55313 = (state_55336[(8)]);var inst_55315 = (inst_55313 < n);var state_55336__$1 = state_55336;if(cljs.core.truth_(inst_55315))
{var statearr_55345_55364 = state_55336__$1;(statearr_55345_55364[(1)] = (4));
} else
{var statearr_55346_55365 = state_55336__$1;(statearr_55346_55365[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55337 === (11)))
{var inst_55313 = (state_55336[(8)]);var inst_55323 = (state_55336[(2)]);var inst_55324 = (inst_55313 + (1));var inst_55313__$1 = inst_55324;var state_55336__$1 = (function (){var statearr_55347 = state_55336;(statearr_55347[(8)] = inst_55313__$1);
(statearr_55347[(10)] = inst_55323);
return statearr_55347;
})();var statearr_55348_55366 = state_55336__$1;(statearr_55348_55366[(2)] = null);
(statearr_55348_55366[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55337 === (9)))
{var state_55336__$1 = state_55336;var statearr_55349_55367 = state_55336__$1;(statearr_55349_55367[(2)] = null);
(statearr_55349_55367[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55337 === (5)))
{var state_55336__$1 = state_55336;var statearr_55350_55368 = state_55336__$1;(statearr_55350_55368[(2)] = null);
(statearr_55350_55368[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55337 === (10)))
{var inst_55328 = (state_55336[(2)]);var state_55336__$1 = state_55336;var statearr_55351_55369 = state_55336__$1;(statearr_55351_55369[(2)] = inst_55328);
(statearr_55351_55369[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55337 === (8)))
{var inst_55318 = (state_55336[(7)]);var state_55336__$1 = state_55336;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55336__$1,(11),out,inst_55318);
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
});})(c__5708__auto___55359,out))
;return ((function (switch__5693__auto__,c__5708__auto___55359,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55355 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_55355[(0)] = state_machine__5694__auto__);
(statearr_55355[(1)] = (1));
return statearr_55355;
});
var state_machine__5694__auto____1 = (function (state_55336){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55336);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55356){if((e55356 instanceof Object))
{var ex__5697__auto__ = e55356;var statearr_55357_55370 = state_55336;(statearr_55357_55370[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55336);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55356;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55371 = state_55336;
state_55336 = G__55371;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55336){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___55359,out))
})();var state__5710__auto__ = (function (){var statearr_55358 = f__5709__auto__.call(null);(statearr_55358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___55359);
return statearr_55358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___55359,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___55468 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___55468,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___55468,out){
return (function (state_55443){var state_val_55444 = (state_55443[(1)]);if((state_val_55444 === (7)))
{var inst_55438 = (state_55443[(2)]);var state_55443__$1 = state_55443;var statearr_55445_55469 = state_55443__$1;(statearr_55445_55469[(2)] = inst_55438);
(statearr_55445_55469[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55444 === (1)))
{var inst_55420 = null;var state_55443__$1 = (function (){var statearr_55446 = state_55443;(statearr_55446[(7)] = inst_55420);
return statearr_55446;
})();var statearr_55447_55470 = state_55443__$1;(statearr_55447_55470[(2)] = null);
(statearr_55447_55470[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55444 === (4)))
{var inst_55423 = (state_55443[(8)]);var inst_55423__$1 = (state_55443[(2)]);var inst_55424 = (inst_55423__$1 == null);var inst_55425 = cljs.core.not.call(null,inst_55424);var state_55443__$1 = (function (){var statearr_55448 = state_55443;(statearr_55448[(8)] = inst_55423__$1);
return statearr_55448;
})();if(inst_55425)
{var statearr_55449_55471 = state_55443__$1;(statearr_55449_55471[(1)] = (5));
} else
{var statearr_55450_55472 = state_55443__$1;(statearr_55450_55472[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55444 === (6)))
{var state_55443__$1 = state_55443;var statearr_55451_55473 = state_55443__$1;(statearr_55451_55473[(2)] = null);
(statearr_55451_55473[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55444 === (3)))
{var inst_55440 = (state_55443[(2)]);var inst_55441 = cljs.core.async.close_BANG_.call(null,out);var state_55443__$1 = (function (){var statearr_55452 = state_55443;(statearr_55452[(9)] = inst_55440);
return statearr_55452;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55443__$1,inst_55441);
} else
{if((state_val_55444 === (2)))
{var state_55443__$1 = state_55443;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55443__$1,(4),ch);
} else
{if((state_val_55444 === (11)))
{var inst_55423 = (state_55443[(8)]);var inst_55432 = (state_55443[(2)]);var inst_55420 = inst_55423;var state_55443__$1 = (function (){var statearr_55453 = state_55443;(statearr_55453[(10)] = inst_55432);
(statearr_55453[(7)] = inst_55420);
return statearr_55453;
})();var statearr_55454_55474 = state_55443__$1;(statearr_55454_55474[(2)] = null);
(statearr_55454_55474[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55444 === (9)))
{var inst_55423 = (state_55443[(8)]);var state_55443__$1 = state_55443;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55443__$1,(11),out,inst_55423);
} else
{if((state_val_55444 === (5)))
{var inst_55423 = (state_55443[(8)]);var inst_55420 = (state_55443[(7)]);var inst_55427 = cljs.core._EQ_.call(null,inst_55423,inst_55420);var state_55443__$1 = state_55443;if(inst_55427)
{var statearr_55456_55475 = state_55443__$1;(statearr_55456_55475[(1)] = (8));
} else
{var statearr_55457_55476 = state_55443__$1;(statearr_55457_55476[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55444 === (10)))
{var inst_55435 = (state_55443[(2)]);var state_55443__$1 = state_55443;var statearr_55458_55477 = state_55443__$1;(statearr_55458_55477[(2)] = inst_55435);
(statearr_55458_55477[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55444 === (8)))
{var inst_55420 = (state_55443[(7)]);var tmp55455 = inst_55420;var inst_55420__$1 = tmp55455;var state_55443__$1 = (function (){var statearr_55459 = state_55443;(statearr_55459[(7)] = inst_55420__$1);
return statearr_55459;
})();var statearr_55460_55478 = state_55443__$1;(statearr_55460_55478[(2)] = null);
(statearr_55460_55478[(1)] = (2));
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
});})(c__5708__auto___55468,out))
;return ((function (switch__5693__auto__,c__5708__auto___55468,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55464 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_55464[(0)] = state_machine__5694__auto__);
(statearr_55464[(1)] = (1));
return statearr_55464;
});
var state_machine__5694__auto____1 = (function (state_55443){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55443);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55465){if((e55465 instanceof Object))
{var ex__5697__auto__ = e55465;var statearr_55466_55479 = state_55443;(statearr_55466_55479[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55443);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55465;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55480 = state_55443;
state_55443 = G__55480;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55443){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___55468,out))
})();var state__5710__auto__ = (function (){var statearr_55467 = f__5709__auto__.call(null);(statearr_55467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___55468);
return statearr_55467;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___55468,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___55615 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___55615,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___55615,out){
return (function (state_55585){var state_val_55586 = (state_55585[(1)]);if((state_val_55586 === (7)))
{var inst_55581 = (state_55585[(2)]);var state_55585__$1 = state_55585;var statearr_55587_55616 = state_55585__$1;(statearr_55587_55616[(2)] = inst_55581);
(statearr_55587_55616[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55586 === (1)))
{var inst_55548 = (new Array(n));var inst_55549 = inst_55548;var inst_55550 = (0);var state_55585__$1 = (function (){var statearr_55588 = state_55585;(statearr_55588[(7)] = inst_55550);
(statearr_55588[(8)] = inst_55549);
return statearr_55588;
})();var statearr_55589_55617 = state_55585__$1;(statearr_55589_55617[(2)] = null);
(statearr_55589_55617[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55586 === (4)))
{var inst_55553 = (state_55585[(9)]);var inst_55553__$1 = (state_55585[(2)]);var inst_55554 = (inst_55553__$1 == null);var inst_55555 = cljs.core.not.call(null,inst_55554);var state_55585__$1 = (function (){var statearr_55590 = state_55585;(statearr_55590[(9)] = inst_55553__$1);
return statearr_55590;
})();if(inst_55555)
{var statearr_55591_55618 = state_55585__$1;(statearr_55591_55618[(1)] = (5));
} else
{var statearr_55592_55619 = state_55585__$1;(statearr_55592_55619[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55586 === (15)))
{var inst_55575 = (state_55585[(2)]);var state_55585__$1 = state_55585;var statearr_55593_55620 = state_55585__$1;(statearr_55593_55620[(2)] = inst_55575);
(statearr_55593_55620[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55586 === (13)))
{var state_55585__$1 = state_55585;var statearr_55594_55621 = state_55585__$1;(statearr_55594_55621[(2)] = null);
(statearr_55594_55621[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55586 === (6)))
{var inst_55550 = (state_55585[(7)]);var inst_55571 = (inst_55550 > (0));var state_55585__$1 = state_55585;if(cljs.core.truth_(inst_55571))
{var statearr_55595_55622 = state_55585__$1;(statearr_55595_55622[(1)] = (12));
} else
{var statearr_55596_55623 = state_55585__$1;(statearr_55596_55623[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55586 === (3)))
{var inst_55583 = (state_55585[(2)]);var state_55585__$1 = state_55585;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55585__$1,inst_55583);
} else
{if((state_val_55586 === (12)))
{var inst_55549 = (state_55585[(8)]);var inst_55573 = cljs.core.vec.call(null,inst_55549);var state_55585__$1 = state_55585;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55585__$1,(15),out,inst_55573);
} else
{if((state_val_55586 === (2)))
{var state_55585__$1 = state_55585;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55585__$1,(4),ch);
} else
{if((state_val_55586 === (11)))
{var inst_55565 = (state_55585[(2)]);var inst_55566 = (new Array(n));var inst_55549 = inst_55566;var inst_55550 = (0);var state_55585__$1 = (function (){var statearr_55597 = state_55585;(statearr_55597[(7)] = inst_55550);
(statearr_55597[(10)] = inst_55565);
(statearr_55597[(8)] = inst_55549);
return statearr_55597;
})();var statearr_55598_55624 = state_55585__$1;(statearr_55598_55624[(2)] = null);
(statearr_55598_55624[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55586 === (9)))
{var inst_55549 = (state_55585[(8)]);var inst_55563 = cljs.core.vec.call(null,inst_55549);var state_55585__$1 = state_55585;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55585__$1,(11),out,inst_55563);
} else
{if((state_val_55586 === (5)))
{var inst_55558 = (state_55585[(11)]);var inst_55553 = (state_55585[(9)]);var inst_55550 = (state_55585[(7)]);var inst_55549 = (state_55585[(8)]);var inst_55557 = (inst_55549[inst_55550] = inst_55553);var inst_55558__$1 = (inst_55550 + (1));var inst_55559 = (inst_55558__$1 < n);var state_55585__$1 = (function (){var statearr_55599 = state_55585;(statearr_55599[(11)] = inst_55558__$1);
(statearr_55599[(12)] = inst_55557);
return statearr_55599;
})();if(cljs.core.truth_(inst_55559))
{var statearr_55600_55625 = state_55585__$1;(statearr_55600_55625[(1)] = (8));
} else
{var statearr_55601_55626 = state_55585__$1;(statearr_55601_55626[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55586 === (14)))
{var inst_55578 = (state_55585[(2)]);var inst_55579 = cljs.core.async.close_BANG_.call(null,out);var state_55585__$1 = (function (){var statearr_55603 = state_55585;(statearr_55603[(13)] = inst_55578);
return statearr_55603;
})();var statearr_55604_55627 = state_55585__$1;(statearr_55604_55627[(2)] = inst_55579);
(statearr_55604_55627[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55586 === (10)))
{var inst_55569 = (state_55585[(2)]);var state_55585__$1 = state_55585;var statearr_55605_55628 = state_55585__$1;(statearr_55605_55628[(2)] = inst_55569);
(statearr_55605_55628[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55586 === (8)))
{var inst_55558 = (state_55585[(11)]);var inst_55549 = (state_55585[(8)]);var tmp55602 = inst_55549;var inst_55549__$1 = tmp55602;var inst_55550 = inst_55558;var state_55585__$1 = (function (){var statearr_55606 = state_55585;(statearr_55606[(7)] = inst_55550);
(statearr_55606[(8)] = inst_55549__$1);
return statearr_55606;
})();var statearr_55607_55629 = state_55585__$1;(statearr_55607_55629[(2)] = null);
(statearr_55607_55629[(1)] = (2));
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
});})(c__5708__auto___55615,out))
;return ((function (switch__5693__auto__,c__5708__auto___55615,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55611[(0)] = state_machine__5694__auto__);
(statearr_55611[(1)] = (1));
return statearr_55611;
});
var state_machine__5694__auto____1 = (function (state_55585){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55585);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55612){if((e55612 instanceof Object))
{var ex__5697__auto__ = e55612;var statearr_55613_55630 = state_55585;(statearr_55613_55630[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55585);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55612;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55631 = state_55585;
state_55585 = G__55631;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55585){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___55615,out))
})();var state__5710__auto__ = (function (){var statearr_55614 = f__5709__auto__.call(null);(statearr_55614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___55615);
return statearr_55614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___55615,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___55774 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___55774,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___55774,out){
return (function (state_55744){var state_val_55745 = (state_55744[(1)]);if((state_val_55745 === (7)))
{var inst_55740 = (state_55744[(2)]);var state_55744__$1 = state_55744;var statearr_55746_55775 = state_55744__$1;(statearr_55746_55775[(2)] = inst_55740);
(statearr_55746_55775[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55745 === (1)))
{var inst_55703 = [];var inst_55704 = inst_55703;var inst_55705 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_55744__$1 = (function (){var statearr_55747 = state_55744;(statearr_55747[(7)] = inst_55705);
(statearr_55747[(8)] = inst_55704);
return statearr_55747;
})();var statearr_55748_55776 = state_55744__$1;(statearr_55748_55776[(2)] = null);
(statearr_55748_55776[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55745 === (4)))
{var inst_55708 = (state_55744[(9)]);var inst_55708__$1 = (state_55744[(2)]);var inst_55709 = (inst_55708__$1 == null);var inst_55710 = cljs.core.not.call(null,inst_55709);var state_55744__$1 = (function (){var statearr_55749 = state_55744;(statearr_55749[(9)] = inst_55708__$1);
return statearr_55749;
})();if(inst_55710)
{var statearr_55750_55777 = state_55744__$1;(statearr_55750_55777[(1)] = (5));
} else
{var statearr_55751_55778 = state_55744__$1;(statearr_55751_55778[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55745 === (15)))
{var inst_55734 = (state_55744[(2)]);var state_55744__$1 = state_55744;var statearr_55752_55779 = state_55744__$1;(statearr_55752_55779[(2)] = inst_55734);
(statearr_55752_55779[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55745 === (13)))
{var state_55744__$1 = state_55744;var statearr_55753_55780 = state_55744__$1;(statearr_55753_55780[(2)] = null);
(statearr_55753_55780[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55745 === (6)))
{var inst_55704 = (state_55744[(8)]);var inst_55729 = inst_55704.length;var inst_55730 = (inst_55729 > (0));var state_55744__$1 = state_55744;if(cljs.core.truth_(inst_55730))
{var statearr_55754_55781 = state_55744__$1;(statearr_55754_55781[(1)] = (12));
} else
{var statearr_55755_55782 = state_55744__$1;(statearr_55755_55782[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55745 === (3)))
{var inst_55742 = (state_55744[(2)]);var state_55744__$1 = state_55744;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55744__$1,inst_55742);
} else
{if((state_val_55745 === (12)))
{var inst_55704 = (state_55744[(8)]);var inst_55732 = cljs.core.vec.call(null,inst_55704);var state_55744__$1 = state_55744;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55744__$1,(15),out,inst_55732);
} else
{if((state_val_55745 === (2)))
{var state_55744__$1 = state_55744;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55744__$1,(4),ch);
} else
{if((state_val_55745 === (11)))
{var inst_55708 = (state_55744[(9)]);var inst_55712 = (state_55744[(10)]);var inst_55722 = (state_55744[(2)]);var inst_55723 = [];var inst_55724 = inst_55723.push(inst_55708);var inst_55704 = inst_55723;var inst_55705 = inst_55712;var state_55744__$1 = (function (){var statearr_55756 = state_55744;(statearr_55756[(11)] = inst_55724);
(statearr_55756[(12)] = inst_55722);
(statearr_55756[(7)] = inst_55705);
(statearr_55756[(8)] = inst_55704);
return statearr_55756;
})();var statearr_55757_55783 = state_55744__$1;(statearr_55757_55783[(2)] = null);
(statearr_55757_55783[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55745 === (9)))
{var inst_55704 = (state_55744[(8)]);var inst_55720 = cljs.core.vec.call(null,inst_55704);var state_55744__$1 = state_55744;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55744__$1,(11),out,inst_55720);
} else
{if((state_val_55745 === (5)))
{var inst_55708 = (state_55744[(9)]);var inst_55705 = (state_55744[(7)]);var inst_55712 = (state_55744[(10)]);var inst_55712__$1 = f.call(null,inst_55708);var inst_55713 = cljs.core._EQ_.call(null,inst_55712__$1,inst_55705);var inst_55714 = cljs.core.keyword_identical_QMARK_.call(null,inst_55705,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_55715 = (inst_55713) || (inst_55714);var state_55744__$1 = (function (){var statearr_55758 = state_55744;(statearr_55758[(10)] = inst_55712__$1);
return statearr_55758;
})();if(cljs.core.truth_(inst_55715))
{var statearr_55759_55784 = state_55744__$1;(statearr_55759_55784[(1)] = (8));
} else
{var statearr_55760_55785 = state_55744__$1;(statearr_55760_55785[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55745 === (14)))
{var inst_55737 = (state_55744[(2)]);var inst_55738 = cljs.core.async.close_BANG_.call(null,out);var state_55744__$1 = (function (){var statearr_55762 = state_55744;(statearr_55762[(13)] = inst_55737);
return statearr_55762;
})();var statearr_55763_55786 = state_55744__$1;(statearr_55763_55786[(2)] = inst_55738);
(statearr_55763_55786[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55745 === (10)))
{var inst_55727 = (state_55744[(2)]);var state_55744__$1 = state_55744;var statearr_55764_55787 = state_55744__$1;(statearr_55764_55787[(2)] = inst_55727);
(statearr_55764_55787[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55745 === (8)))
{var inst_55708 = (state_55744[(9)]);var inst_55704 = (state_55744[(8)]);var inst_55712 = (state_55744[(10)]);var inst_55717 = inst_55704.push(inst_55708);var tmp55761 = inst_55704;var inst_55704__$1 = tmp55761;var inst_55705 = inst_55712;var state_55744__$1 = (function (){var statearr_55765 = state_55744;(statearr_55765[(7)] = inst_55705);
(statearr_55765[(14)] = inst_55717);
(statearr_55765[(8)] = inst_55704__$1);
return statearr_55765;
})();var statearr_55766_55788 = state_55744__$1;(statearr_55766_55788[(2)] = null);
(statearr_55766_55788[(1)] = (2));
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
});})(c__5708__auto___55774,out))
;return ((function (switch__5693__auto__,c__5708__auto___55774,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55770[(0)] = state_machine__5694__auto__);
(statearr_55770[(1)] = (1));
return statearr_55770;
});
var state_machine__5694__auto____1 = (function (state_55744){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55744);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55771){if((e55771 instanceof Object))
{var ex__5697__auto__ = e55771;var statearr_55772_55789 = state_55744;(statearr_55772_55789[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55744);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55771;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55790 = state_55744;
state_55744 = G__55790;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55744){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___55774,out))
})();var state__5710__auto__ = (function (){var statearr_55773 = f__5709__auto__.call(null);(statearr_55773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___55774);
return statearr_55773;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___55774,out))
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

//# sourceMappingURL=async.js.map