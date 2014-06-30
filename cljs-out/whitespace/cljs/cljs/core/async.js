// Compiled by ClojureScript 0.0-2227
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14270 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14270 = (function (f,fn_handler,meta14271){
this.f = f;
this.fn_handler = fn_handler;
this.meta14271 = meta14271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14270.cljs$lang$type = true;
cljs.core.async.t14270.cljs$lang$ctorStr = "cljs.core.async/t14270";
cljs.core.async.t14270.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t14270");
});
cljs.core.async.t14270.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14270.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14270.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14272){var self__ = this;
var _14272__$1 = this;return self__.meta14271;
});
cljs.core.async.t14270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14272,meta14271__$1){var self__ = this;
var _14272__$1 = this;return (new cljs.core.async.t14270(self__.f,self__.fn_handler,meta14271__$1));
});
cljs.core.async.__GT_t14270 = (function __GT_t14270(f__$1,fn_handler__$1,meta14271){return (new cljs.core.async.t14270(f__$1,fn_handler__$1,meta14271));
});
}
return (new cljs.core.async.t14270(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14274 = buff;if(G__14274)
{var bit__4191__auto__ = null;if(cljs.core.truth_((function (){var or__3541__auto__ = bit__4191__auto__;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return G__14274.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14274.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14274);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14274);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
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
{var val_14275 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14275);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_14275,ret){
return (function (){return fn1.call(null,val_14275);
});})(val_14275,ret))
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
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3529__auto__ = ret;if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3529__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4397__auto___14276 = n;var x_14277 = 0;while(true){
if((x_14277 < n__4397__auto___14276))
{(a[x_14277] = 0);
{
var G__14278 = (x_14277 + 1);
x_14277 = G__14278;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__14279 = (i + 1);
i = G__14279;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14283 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14283 = (function (flag,alt_flag,meta14284){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14284 = meta14284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14283.cljs$lang$type = true;
cljs.core.async.t14283.cljs$lang$ctorStr = "cljs.core.async/t14283";
cljs.core.async.t14283.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t14283");
});})(flag))
;
cljs.core.async.t14283.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14283.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t14283.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t14283.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14285){var self__ = this;
var _14285__$1 = this;return self__.meta14284;
});})(flag))
;
cljs.core.async.t14283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14285,meta14284__$1){var self__ = this;
var _14285__$1 = this;return (new cljs.core.async.t14283(self__.flag,self__.alt_flag,meta14284__$1));
});})(flag))
;
cljs.core.async.__GT_t14283 = ((function (flag){
return (function __GT_t14283(flag__$1,alt_flag__$1,meta14284){return (new cljs.core.async.t14283(flag__$1,alt_flag__$1,meta14284));
});})(flag))
;
}
return (new cljs.core.async.t14283(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14289 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14289 = (function (cb,flag,alt_handler,meta14290){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14290 = meta14290;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14289.cljs$lang$type = true;
cljs.core.async.t14289.cljs$lang$ctorStr = "cljs.core.async/t14289";
cljs.core.async.t14289.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t14289");
});
cljs.core.async.t14289.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14289.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14289.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14291){var self__ = this;
var _14291__$1 = this;return self__.meta14290;
});
cljs.core.async.t14289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14291,meta14290__$1){var self__ = this;
var _14291__$1 = this;return (new cljs.core.async.t14289(self__.cb,self__.flag,self__.alt_handler,meta14290__$1));
});
cljs.core.async.__GT_t14289 = (function __GT_t14289(cb__$1,flag__$1,alt_handler__$1,meta14290){return (new cljs.core.async.t14289(cb__$1,flag__$1,alt_handler__$1,meta14290));
});
}
return (new cljs.core.async.t14289(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14292_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14292_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3541__auto__ = wport;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14293 = (i + 1);
i = G__14293;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3541__auto__ = ret;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__3529__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3529__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__14294){var map__14296 = p__14294;var map__14296__$1 = ((cljs.core.seq_QMARK_.call(null,map__14296))?cljs.core.apply.call(null,cljs.core.hash_map,map__14296):map__14296);var opts = map__14296__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14294 = null;if (arguments.length > 1) {
  p__14294 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14294);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14297){
var ports = cljs.core.first(arglist__14297);
var p__14294 = cljs.core.rest(arglist__14297);
return alts_BANG___delegate(ports,p__14294);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14305 = (function (ch,f,map_LT_,meta14306){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14306 = meta14306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14305.cljs$lang$type = true;
cljs.core.async.t14305.cljs$lang$ctorStr = "cljs.core.async/t14305";
cljs.core.async.t14305.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t14305");
});
cljs.core.async.t14305.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14305.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14305.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14305.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14308 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14308 = (function (fn1,_,meta14306,ch,f,map_LT_,meta14309){
this.fn1 = fn1;
this._ = _;
this.meta14306 = meta14306;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14309 = meta14309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14308.cljs$lang$type = true;
cljs.core.async.t14308.cljs$lang$ctorStr = "cljs.core.async/t14308";
cljs.core.async.t14308.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t14308");
});})(___$1))
;
cljs.core.async.t14308.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14308.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14308.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14308.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14298_SHARP_){return f1.call(null,(((p1__14298_SHARP_ == null))?null:self__.f.call(null,p1__14298_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14308.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14310){var self__ = this;
var _14310__$1 = this;return self__.meta14309;
});})(___$1))
;
cljs.core.async.t14308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14310,meta14309__$1){var self__ = this;
var _14310__$1 = this;return (new cljs.core.async.t14308(self__.fn1,self__._,self__.meta14306,self__.ch,self__.f,self__.map_LT_,meta14309__$1));
});})(___$1))
;
cljs.core.async.__GT_t14308 = ((function (___$1){
return (function __GT_t14308(fn1__$1,___$2,meta14306__$1,ch__$2,f__$2,map_LT___$2,meta14309){return (new cljs.core.async.t14308(fn1__$1,___$2,meta14306__$1,ch__$2,f__$2,map_LT___$2,meta14309));
});})(___$1))
;
}
return (new cljs.core.async.t14308(fn1,___$1,self__.meta14306,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3529__auto__ = ret;if(cljs.core.truth_(and__3529__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3529__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14305.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14305.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14307){var self__ = this;
var _14307__$1 = this;return self__.meta14306;
});
cljs.core.async.t14305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14307,meta14306__$1){var self__ = this;
var _14307__$1 = this;return (new cljs.core.async.t14305(self__.ch,self__.f,self__.map_LT_,meta14306__$1));
});
cljs.core.async.__GT_t14305 = (function __GT_t14305(ch__$1,f__$1,map_LT___$1,meta14306){return (new cljs.core.async.t14305(ch__$1,f__$1,map_LT___$1,meta14306));
});
}
return (new cljs.core.async.t14305(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14314 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14314 = (function (ch,f,map_GT_,meta14315){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14315 = meta14315;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14314.cljs$lang$type = true;
cljs.core.async.t14314.cljs$lang$ctorStr = "cljs.core.async/t14314";
cljs.core.async.t14314.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t14314");
});
cljs.core.async.t14314.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14314.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14314.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14314.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14314.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14314.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14316){var self__ = this;
var _14316__$1 = this;return self__.meta14315;
});
cljs.core.async.t14314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14316,meta14315__$1){var self__ = this;
var _14316__$1 = this;return (new cljs.core.async.t14314(self__.ch,self__.f,self__.map_GT_,meta14315__$1));
});
cljs.core.async.__GT_t14314 = (function __GT_t14314(ch__$1,f__$1,map_GT___$1,meta14315){return (new cljs.core.async.t14314(ch__$1,f__$1,map_GT___$1,meta14315));
});
}
return (new cljs.core.async.t14314(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14320 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14320 = (function (ch,p,filter_GT_,meta14321){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14321 = meta14321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14320.cljs$lang$type = true;
cljs.core.async.t14320.cljs$lang$ctorStr = "cljs.core.async/t14320";
cljs.core.async.t14320.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t14320");
});
cljs.core.async.t14320.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14320.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14320.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14320.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14320.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14320.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14322){var self__ = this;
var _14322__$1 = this;return self__.meta14321;
});
cljs.core.async.t14320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14322,meta14321__$1){var self__ = this;
var _14322__$1 = this;return (new cljs.core.async.t14320(self__.ch,self__.p,self__.filter_GT_,meta14321__$1));
});
cljs.core.async.__GT_t14320 = (function __GT_t14320(ch__$1,p__$1,filter_GT___$1,meta14321){return (new cljs.core.async.t14320(ch__$1,p__$1,filter_GT___$1,meta14321));
});
}
return (new cljs.core.async.t14320(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___14405 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___14405,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___14405,out){
return (function (state_14384){var state_val_14385 = (state_14384[1]);if((state_val_14385 === 7))
{var inst_14380 = (state_14384[2]);var state_14384__$1 = state_14384;var statearr_14386_14406 = state_14384__$1;(statearr_14386_14406[2] = inst_14380);
(statearr_14386_14406[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 1))
{var state_14384__$1 = state_14384;var statearr_14387_14407 = state_14384__$1;(statearr_14387_14407[2] = null);
(statearr_14387_14407[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 4))
{var inst_14366 = (state_14384[7]);var inst_14366__$1 = (state_14384[2]);var inst_14367 = (inst_14366__$1 == null);var state_14384__$1 = (function (){var statearr_14388 = state_14384;(statearr_14388[7] = inst_14366__$1);
return statearr_14388;
})();if(cljs.core.truth_(inst_14367))
{var statearr_14389_14408 = state_14384__$1;(statearr_14389_14408[1] = 5);
} else
{var statearr_14390_14409 = state_14384__$1;(statearr_14390_14409[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 6))
{var inst_14366 = (state_14384[7]);var inst_14371 = p.call(null,inst_14366);var state_14384__$1 = state_14384;if(cljs.core.truth_(inst_14371))
{var statearr_14391_14410 = state_14384__$1;(statearr_14391_14410[1] = 8);
} else
{var statearr_14392_14411 = state_14384__$1;(statearr_14392_14411[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 3))
{var inst_14382 = (state_14384[2]);var state_14384__$1 = state_14384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14384__$1,inst_14382);
} else
{if((state_val_14385 === 2))
{var state_14384__$1 = state_14384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14384__$1,4,ch);
} else
{if((state_val_14385 === 11))
{var inst_14374 = (state_14384[2]);var state_14384__$1 = state_14384;var statearr_14393_14412 = state_14384__$1;(statearr_14393_14412[2] = inst_14374);
(statearr_14393_14412[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 9))
{var state_14384__$1 = state_14384;var statearr_14394_14413 = state_14384__$1;(statearr_14394_14413[2] = null);
(statearr_14394_14413[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 5))
{var inst_14369 = cljs.core.async.close_BANG_.call(null,out);var state_14384__$1 = state_14384;var statearr_14395_14414 = state_14384__$1;(statearr_14395_14414[2] = inst_14369);
(statearr_14395_14414[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 10))
{var inst_14377 = (state_14384[2]);var state_14384__$1 = (function (){var statearr_14396 = state_14384;(statearr_14396[8] = inst_14377);
return statearr_14396;
})();var statearr_14397_14415 = state_14384__$1;(statearr_14397_14415[2] = null);
(statearr_14397_14415[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 8))
{var inst_14366 = (state_14384[7]);var state_14384__$1 = state_14384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14384__$1,11,out,inst_14366);
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
});})(c__5691__auto___14405,out))
;return ((function (switch__5676__auto__,c__5691__auto___14405,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_14401 = [null,null,null,null,null,null,null,null,null];(statearr_14401[0] = state_machine__5677__auto__);
(statearr_14401[1] = 1);
return statearr_14401;
});
var state_machine__5677__auto____1 = (function (state_14384){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_14384);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e14402){if((e14402 instanceof Object))
{var ex__5680__auto__ = e14402;var statearr_14403_14416 = state_14384;(statearr_14403_14416[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14384);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14402;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14417 = state_14384;
state_14384 = G__14417;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_14384){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_14384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___14405,out))
})();var state__5693__auto__ = (function (){var statearr_14404 = f__5692__auto__.call(null);(statearr_14404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___14405);
return statearr_14404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___14405,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_14569){var state_val_14570 = (state_14569[1]);if((state_val_14570 === 7))
{var inst_14565 = (state_14569[2]);var state_14569__$1 = state_14569;var statearr_14571_14608 = state_14569__$1;(statearr_14571_14608[2] = inst_14565);
(statearr_14571_14608[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 20))
{var inst_14540 = (state_14569[7]);var inst_14551 = (state_14569[2]);var inst_14552 = cljs.core.next.call(null,inst_14540);var inst_14526 = inst_14552;var inst_14527 = null;var inst_14528 = 0;var inst_14529 = 0;var state_14569__$1 = (function (){var statearr_14572 = state_14569;(statearr_14572[8] = inst_14529);
(statearr_14572[9] = inst_14528);
(statearr_14572[10] = inst_14526);
(statearr_14572[11] = inst_14527);
(statearr_14572[12] = inst_14551);
return statearr_14572;
})();var statearr_14573_14609 = state_14569__$1;(statearr_14573_14609[2] = null);
(statearr_14573_14609[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 1))
{var state_14569__$1 = state_14569;var statearr_14574_14610 = state_14569__$1;(statearr_14574_14610[2] = null);
(statearr_14574_14610[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 4))
{var inst_14515 = (state_14569[13]);var inst_14515__$1 = (state_14569[2]);var inst_14516 = (inst_14515__$1 == null);var state_14569__$1 = (function (){var statearr_14578 = state_14569;(statearr_14578[13] = inst_14515__$1);
return statearr_14578;
})();if(cljs.core.truth_(inst_14516))
{var statearr_14579_14611 = state_14569__$1;(statearr_14579_14611[1] = 5);
} else
{var statearr_14580_14612 = state_14569__$1;(statearr_14580_14612[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 15))
{var state_14569__$1 = state_14569;var statearr_14581_14613 = state_14569__$1;(statearr_14581_14613[2] = null);
(statearr_14581_14613[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 13))
{var inst_14529 = (state_14569[8]);var inst_14528 = (state_14569[9]);var inst_14526 = (state_14569[10]);var inst_14527 = (state_14569[11]);var inst_14536 = (state_14569[2]);var inst_14537 = (inst_14529 + 1);var tmp14575 = inst_14528;var tmp14576 = inst_14526;var tmp14577 = inst_14527;var inst_14526__$1 = tmp14576;var inst_14527__$1 = tmp14577;var inst_14528__$1 = tmp14575;var inst_14529__$1 = inst_14537;var state_14569__$1 = (function (){var statearr_14582 = state_14569;(statearr_14582[8] = inst_14529__$1);
(statearr_14582[9] = inst_14528__$1);
(statearr_14582[10] = inst_14526__$1);
(statearr_14582[11] = inst_14527__$1);
(statearr_14582[14] = inst_14536);
return statearr_14582;
})();var statearr_14583_14614 = state_14569__$1;(statearr_14583_14614[2] = null);
(statearr_14583_14614[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 6))
{var inst_14515 = (state_14569[13]);var inst_14520 = f.call(null,inst_14515);var inst_14525 = cljs.core.seq.call(null,inst_14520);var inst_14526 = inst_14525;var inst_14527 = null;var inst_14528 = 0;var inst_14529 = 0;var state_14569__$1 = (function (){var statearr_14584 = state_14569;(statearr_14584[8] = inst_14529);
(statearr_14584[9] = inst_14528);
(statearr_14584[10] = inst_14526);
(statearr_14584[11] = inst_14527);
return statearr_14584;
})();var statearr_14585_14615 = state_14569__$1;(statearr_14585_14615[2] = null);
(statearr_14585_14615[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 17))
{var inst_14540 = (state_14569[7]);var inst_14544 = cljs.core.chunk_first.call(null,inst_14540);var inst_14545 = cljs.core.chunk_rest.call(null,inst_14540);var inst_14546 = cljs.core.count.call(null,inst_14544);var inst_14526 = inst_14545;var inst_14527 = inst_14544;var inst_14528 = inst_14546;var inst_14529 = 0;var state_14569__$1 = (function (){var statearr_14586 = state_14569;(statearr_14586[8] = inst_14529);
(statearr_14586[9] = inst_14528);
(statearr_14586[10] = inst_14526);
(statearr_14586[11] = inst_14527);
return statearr_14586;
})();var statearr_14587_14616 = state_14569__$1;(statearr_14587_14616[2] = null);
(statearr_14587_14616[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 3))
{var inst_14567 = (state_14569[2]);var state_14569__$1 = state_14569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14569__$1,inst_14567);
} else
{if((state_val_14570 === 12))
{var inst_14560 = (state_14569[2]);var state_14569__$1 = state_14569;var statearr_14588_14617 = state_14569__$1;(statearr_14588_14617[2] = inst_14560);
(statearr_14588_14617[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 2))
{var state_14569__$1 = state_14569;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14569__$1,4,in$);
} else
{if((state_val_14570 === 19))
{var inst_14555 = (state_14569[2]);var state_14569__$1 = state_14569;var statearr_14589_14618 = state_14569__$1;(statearr_14589_14618[2] = inst_14555);
(statearr_14589_14618[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 11))
{var inst_14540 = (state_14569[7]);var inst_14526 = (state_14569[10]);var inst_14540__$1 = cljs.core.seq.call(null,inst_14526);var state_14569__$1 = (function (){var statearr_14590 = state_14569;(statearr_14590[7] = inst_14540__$1);
return statearr_14590;
})();if(inst_14540__$1)
{var statearr_14591_14619 = state_14569__$1;(statearr_14591_14619[1] = 14);
} else
{var statearr_14592_14620 = state_14569__$1;(statearr_14592_14620[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 9))
{var inst_14562 = (state_14569[2]);var state_14569__$1 = (function (){var statearr_14593 = state_14569;(statearr_14593[15] = inst_14562);
return statearr_14593;
})();var statearr_14594_14621 = state_14569__$1;(statearr_14594_14621[2] = null);
(statearr_14594_14621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 5))
{var inst_14518 = cljs.core.async.close_BANG_.call(null,out);var state_14569__$1 = state_14569;var statearr_14595_14622 = state_14569__$1;(statearr_14595_14622[2] = inst_14518);
(statearr_14595_14622[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 14))
{var inst_14540 = (state_14569[7]);var inst_14542 = cljs.core.chunked_seq_QMARK_.call(null,inst_14540);var state_14569__$1 = state_14569;if(inst_14542)
{var statearr_14596_14623 = state_14569__$1;(statearr_14596_14623[1] = 17);
} else
{var statearr_14597_14624 = state_14569__$1;(statearr_14597_14624[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 16))
{var inst_14558 = (state_14569[2]);var state_14569__$1 = state_14569;var statearr_14598_14625 = state_14569__$1;(statearr_14598_14625[2] = inst_14558);
(statearr_14598_14625[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 10))
{var inst_14529 = (state_14569[8]);var inst_14527 = (state_14569[11]);var inst_14534 = cljs.core._nth.call(null,inst_14527,inst_14529);var state_14569__$1 = state_14569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14569__$1,13,out,inst_14534);
} else
{if((state_val_14570 === 18))
{var inst_14540 = (state_14569[7]);var inst_14549 = cljs.core.first.call(null,inst_14540);var state_14569__$1 = state_14569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14569__$1,20,out,inst_14549);
} else
{if((state_val_14570 === 8))
{var inst_14529 = (state_14569[8]);var inst_14528 = (state_14569[9]);var inst_14531 = (inst_14529 < inst_14528);var inst_14532 = inst_14531;var state_14569__$1 = state_14569;if(cljs.core.truth_(inst_14532))
{var statearr_14599_14626 = state_14569__$1;(statearr_14599_14626[1] = 10);
} else
{var statearr_14600_14627 = state_14569__$1;(statearr_14600_14627[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_14604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14604[0] = state_machine__5677__auto__);
(statearr_14604[1] = 1);
return statearr_14604;
});
var state_machine__5677__auto____1 = (function (state_14569){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_14569);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e14605){if((e14605 instanceof Object))
{var ex__5680__auto__ = e14605;var statearr_14606_14628 = state_14569;(statearr_14606_14628[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14569);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14605;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14629 = state_14569;
state_14569 = G__14629;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_14569){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_14569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_14607 = f__5692__auto__.call(null);(statearr_14607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_14607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5691__auto___14710 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___14710){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___14710){
return (function (state_14689){var state_val_14690 = (state_14689[1]);if((state_val_14690 === 7))
{var inst_14685 = (state_14689[2]);var state_14689__$1 = state_14689;var statearr_14691_14711 = state_14689__$1;(statearr_14691_14711[2] = inst_14685);
(statearr_14691_14711[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14690 === 1))
{var state_14689__$1 = state_14689;var statearr_14692_14712 = state_14689__$1;(statearr_14692_14712[2] = null);
(statearr_14692_14712[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14690 === 4))
{var inst_14672 = (state_14689[7]);var inst_14672__$1 = (state_14689[2]);var inst_14673 = (inst_14672__$1 == null);var state_14689__$1 = (function (){var statearr_14693 = state_14689;(statearr_14693[7] = inst_14672__$1);
return statearr_14693;
})();if(cljs.core.truth_(inst_14673))
{var statearr_14694_14713 = state_14689__$1;(statearr_14694_14713[1] = 5);
} else
{var statearr_14695_14714 = state_14689__$1;(statearr_14695_14714[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14690 === 6))
{var inst_14672 = (state_14689[7]);var state_14689__$1 = state_14689;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14689__$1,11,to,inst_14672);
} else
{if((state_val_14690 === 3))
{var inst_14687 = (state_14689[2]);var state_14689__$1 = state_14689;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14689__$1,inst_14687);
} else
{if((state_val_14690 === 2))
{var state_14689__$1 = state_14689;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14689__$1,4,from);
} else
{if((state_val_14690 === 11))
{var inst_14682 = (state_14689[2]);var state_14689__$1 = (function (){var statearr_14696 = state_14689;(statearr_14696[8] = inst_14682);
return statearr_14696;
})();var statearr_14697_14715 = state_14689__$1;(statearr_14697_14715[2] = null);
(statearr_14697_14715[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14690 === 9))
{var state_14689__$1 = state_14689;var statearr_14698_14716 = state_14689__$1;(statearr_14698_14716[2] = null);
(statearr_14698_14716[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14690 === 5))
{var state_14689__$1 = state_14689;if(cljs.core.truth_(close_QMARK_))
{var statearr_14699_14717 = state_14689__$1;(statearr_14699_14717[1] = 8);
} else
{var statearr_14700_14718 = state_14689__$1;(statearr_14700_14718[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14690 === 10))
{var inst_14679 = (state_14689[2]);var state_14689__$1 = state_14689;var statearr_14701_14719 = state_14689__$1;(statearr_14701_14719[2] = inst_14679);
(statearr_14701_14719[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14690 === 8))
{var inst_14676 = cljs.core.async.close_BANG_.call(null,to);var state_14689__$1 = state_14689;var statearr_14702_14720 = state_14689__$1;(statearr_14702_14720[2] = inst_14676);
(statearr_14702_14720[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___14710))
;return ((function (switch__5676__auto__,c__5691__auto___14710){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_14706 = [null,null,null,null,null,null,null,null,null];(statearr_14706[0] = state_machine__5677__auto__);
(statearr_14706[1] = 1);
return statearr_14706;
});
var state_machine__5677__auto____1 = (function (state_14689){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_14689);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e14707){if((e14707 instanceof Object))
{var ex__5680__auto__ = e14707;var statearr_14708_14721 = state_14689;(statearr_14708_14721[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14689);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14707;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14722 = state_14689;
state_14689 = G__14722;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_14689){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_14689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___14710))
})();var state__5693__auto__ = (function (){var statearr_14709 = f__5692__auto__.call(null);(statearr_14709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___14710);
return statearr_14709;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___14710))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5691__auto___14809 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___14809,tc,fc){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___14809,tc,fc){
return (function (state_14787){var state_val_14788 = (state_14787[1]);if((state_val_14788 === 7))
{var inst_14783 = (state_14787[2]);var state_14787__$1 = state_14787;var statearr_14789_14810 = state_14787__$1;(statearr_14789_14810[2] = inst_14783);
(statearr_14789_14810[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 1))
{var state_14787__$1 = state_14787;var statearr_14790_14811 = state_14787__$1;(statearr_14790_14811[2] = null);
(statearr_14790_14811[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 4))
{var inst_14768 = (state_14787[7]);var inst_14768__$1 = (state_14787[2]);var inst_14769 = (inst_14768__$1 == null);var state_14787__$1 = (function (){var statearr_14791 = state_14787;(statearr_14791[7] = inst_14768__$1);
return statearr_14791;
})();if(cljs.core.truth_(inst_14769))
{var statearr_14792_14812 = state_14787__$1;(statearr_14792_14812[1] = 5);
} else
{var statearr_14793_14813 = state_14787__$1;(statearr_14793_14813[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 6))
{var inst_14768 = (state_14787[7]);var inst_14774 = p.call(null,inst_14768);var state_14787__$1 = state_14787;if(cljs.core.truth_(inst_14774))
{var statearr_14794_14814 = state_14787__$1;(statearr_14794_14814[1] = 9);
} else
{var statearr_14795_14815 = state_14787__$1;(statearr_14795_14815[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 3))
{var inst_14785 = (state_14787[2]);var state_14787__$1 = state_14787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14787__$1,inst_14785);
} else
{if((state_val_14788 === 2))
{var state_14787__$1 = state_14787;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14787__$1,4,ch);
} else
{if((state_val_14788 === 11))
{var inst_14768 = (state_14787[7]);var inst_14778 = (state_14787[2]);var state_14787__$1 = state_14787;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14787__$1,8,inst_14778,inst_14768);
} else
{if((state_val_14788 === 9))
{var state_14787__$1 = state_14787;var statearr_14796_14816 = state_14787__$1;(statearr_14796_14816[2] = tc);
(statearr_14796_14816[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 5))
{var inst_14771 = cljs.core.async.close_BANG_.call(null,tc);var inst_14772 = cljs.core.async.close_BANG_.call(null,fc);var state_14787__$1 = (function (){var statearr_14797 = state_14787;(statearr_14797[8] = inst_14771);
return statearr_14797;
})();var statearr_14798_14817 = state_14787__$1;(statearr_14798_14817[2] = inst_14772);
(statearr_14798_14817[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 10))
{var state_14787__$1 = state_14787;var statearr_14799_14818 = state_14787__$1;(statearr_14799_14818[2] = fc);
(statearr_14799_14818[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 8))
{var inst_14780 = (state_14787[2]);var state_14787__$1 = (function (){var statearr_14800 = state_14787;(statearr_14800[9] = inst_14780);
return statearr_14800;
})();var statearr_14801_14819 = state_14787__$1;(statearr_14801_14819[2] = null);
(statearr_14801_14819[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___14809,tc,fc))
;return ((function (switch__5676__auto__,c__5691__auto___14809,tc,fc){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_14805 = [null,null,null,null,null,null,null,null,null,null];(statearr_14805[0] = state_machine__5677__auto__);
(statearr_14805[1] = 1);
return statearr_14805;
});
var state_machine__5677__auto____1 = (function (state_14787){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_14787);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e14806){if((e14806 instanceof Object))
{var ex__5680__auto__ = e14806;var statearr_14807_14820 = state_14787;(statearr_14807_14820[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14806;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14821 = state_14787;
state_14787 = G__14821;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_14787){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_14787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___14809,tc,fc))
})();var state__5693__auto__ = (function (){var statearr_14808 = f__5692__auto__.call(null);(statearr_14808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___14809);
return statearr_14808;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___14809,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_14868){var state_val_14869 = (state_14868[1]);if((state_val_14869 === 7))
{var inst_14864 = (state_14868[2]);var state_14868__$1 = state_14868;var statearr_14870_14886 = state_14868__$1;(statearr_14870_14886[2] = inst_14864);
(statearr_14870_14886[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14869 === 6))
{var inst_14857 = (state_14868[7]);var inst_14854 = (state_14868[8]);var inst_14861 = f.call(null,inst_14854,inst_14857);var inst_14854__$1 = inst_14861;var state_14868__$1 = (function (){var statearr_14871 = state_14868;(statearr_14871[8] = inst_14854__$1);
return statearr_14871;
})();var statearr_14872_14887 = state_14868__$1;(statearr_14872_14887[2] = null);
(statearr_14872_14887[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14869 === 5))
{var inst_14854 = (state_14868[8]);var state_14868__$1 = state_14868;var statearr_14873_14888 = state_14868__$1;(statearr_14873_14888[2] = inst_14854);
(statearr_14873_14888[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14869 === 4))
{var inst_14857 = (state_14868[7]);var inst_14857__$1 = (state_14868[2]);var inst_14858 = (inst_14857__$1 == null);var state_14868__$1 = (function (){var statearr_14874 = state_14868;(statearr_14874[7] = inst_14857__$1);
return statearr_14874;
})();if(cljs.core.truth_(inst_14858))
{var statearr_14875_14889 = state_14868__$1;(statearr_14875_14889[1] = 5);
} else
{var statearr_14876_14890 = state_14868__$1;(statearr_14876_14890[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14869 === 3))
{var inst_14866 = (state_14868[2]);var state_14868__$1 = state_14868;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14868__$1,inst_14866);
} else
{if((state_val_14869 === 2))
{var state_14868__$1 = state_14868;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14868__$1,4,ch);
} else
{if((state_val_14869 === 1))
{var inst_14854 = init;var state_14868__$1 = (function (){var statearr_14877 = state_14868;(statearr_14877[8] = inst_14854);
return statearr_14877;
})();var statearr_14878_14891 = state_14868__$1;(statearr_14878_14891[2] = null);
(statearr_14878_14891[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_14882 = [null,null,null,null,null,null,null,null,null];(statearr_14882[0] = state_machine__5677__auto__);
(statearr_14882[1] = 1);
return statearr_14882;
});
var state_machine__5677__auto____1 = (function (state_14868){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_14868);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e14883){if((e14883 instanceof Object))
{var ex__5680__auto__ = e14883;var statearr_14884_14892 = state_14868;(statearr_14884_14892[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14868);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14893 = state_14868;
state_14868 = G__14893;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_14868){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_14868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_14885 = f__5692__auto__.call(null);(statearr_14885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_14885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_14955){var state_val_14956 = (state_14955[1]);if((state_val_14956 === 7))
{var inst_14936 = (state_14955[7]);var inst_14941 = (state_14955[2]);var inst_14942 = cljs.core.next.call(null,inst_14936);var inst_14936__$1 = inst_14942;var state_14955__$1 = (function (){var statearr_14957 = state_14955;(statearr_14957[7] = inst_14936__$1);
(statearr_14957[8] = inst_14941);
return statearr_14957;
})();var statearr_14958_14976 = state_14955__$1;(statearr_14958_14976[2] = null);
(statearr_14958_14976[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14956 === 1))
{var inst_14935 = cljs.core.seq.call(null,coll);var inst_14936 = inst_14935;var state_14955__$1 = (function (){var statearr_14959 = state_14955;(statearr_14959[7] = inst_14936);
return statearr_14959;
})();var statearr_14960_14977 = state_14955__$1;(statearr_14960_14977[2] = null);
(statearr_14960_14977[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14956 === 4))
{var inst_14936 = (state_14955[7]);var inst_14939 = cljs.core.first.call(null,inst_14936);var state_14955__$1 = state_14955;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14955__$1,7,ch,inst_14939);
} else
{if((state_val_14956 === 6))
{var inst_14951 = (state_14955[2]);var state_14955__$1 = state_14955;var statearr_14961_14978 = state_14955__$1;(statearr_14961_14978[2] = inst_14951);
(statearr_14961_14978[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14956 === 3))
{var inst_14953 = (state_14955[2]);var state_14955__$1 = state_14955;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14955__$1,inst_14953);
} else
{if((state_val_14956 === 2))
{var inst_14936 = (state_14955[7]);var state_14955__$1 = state_14955;if(cljs.core.truth_(inst_14936))
{var statearr_14962_14979 = state_14955__$1;(statearr_14962_14979[1] = 4);
} else
{var statearr_14963_14980 = state_14955__$1;(statearr_14963_14980[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14956 === 9))
{var state_14955__$1 = state_14955;var statearr_14964_14981 = state_14955__$1;(statearr_14964_14981[2] = null);
(statearr_14964_14981[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14956 === 5))
{var state_14955__$1 = state_14955;if(cljs.core.truth_(close_QMARK_))
{var statearr_14965_14982 = state_14955__$1;(statearr_14965_14982[1] = 8);
} else
{var statearr_14966_14983 = state_14955__$1;(statearr_14966_14983[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14956 === 10))
{var inst_14949 = (state_14955[2]);var state_14955__$1 = state_14955;var statearr_14967_14984 = state_14955__$1;(statearr_14967_14984[2] = inst_14949);
(statearr_14967_14984[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14956 === 8))
{var inst_14946 = cljs.core.async.close_BANG_.call(null,ch);var state_14955__$1 = state_14955;var statearr_14968_14985 = state_14955__$1;(statearr_14968_14985[2] = inst_14946);
(statearr_14968_14985[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_14972 = [null,null,null,null,null,null,null,null,null];(statearr_14972[0] = state_machine__5677__auto__);
(statearr_14972[1] = 1);
return statearr_14972;
});
var state_machine__5677__auto____1 = (function (state_14955){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_14955);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e14973){if((e14973 instanceof Object))
{var ex__5680__auto__ = e14973;var statearr_14974_14986 = state_14955;(statearr_14974_14986[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14955);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14973;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14987 = state_14955;
state_14955 = G__14987;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_14955){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_14955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_14975 = f__5692__auto__.call(null);(statearr_14975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_14975;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj14989 = {};return obj14989;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3529__auto__ = _;if(and__3529__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4168__auto__ = (((_ == null))?null:_);return (function (){var or__3541__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14991 = {};return obj14991;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15215 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15215 = (function (cs,ch,mult,meta15216){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15216 = meta15216;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15215.cljs$lang$type = true;
cljs.core.async.t15215.cljs$lang$ctorStr = "cljs.core.async/t15215";
cljs.core.async.t15215.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t15215");
});})(cs))
;
cljs.core.async.t15215.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15215.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15215.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15215.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15215.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15215.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15215.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15217){var self__ = this;
var _15217__$1 = this;return self__.meta15216;
});})(cs))
;
cljs.core.async.t15215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15217,meta15216__$1){var self__ = this;
var _15217__$1 = this;return (new cljs.core.async.t15215(self__.cs,self__.ch,self__.mult,meta15216__$1));
});})(cs))
;
cljs.core.async.__GT_t15215 = ((function (cs){
return (function __GT_t15215(cs__$1,ch__$1,mult__$1,meta15216){return (new cljs.core.async.t15215(cs__$1,ch__$1,mult__$1,meta15216));
});})(cs))
;
}
return (new cljs.core.async.t15215(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5691__auto___15438 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___15438,cs,m,dchan,dctr,done){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___15438,cs,m,dchan,dctr,done){
return (function (state_15352){var state_val_15353 = (state_15352[1]);if((state_val_15353 === 7))
{var inst_15348 = (state_15352[2]);var state_15352__$1 = state_15352;var statearr_15354_15439 = state_15352__$1;(statearr_15354_15439[2] = inst_15348);
(statearr_15354_15439[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 20))
{var inst_15249 = (state_15352[7]);var inst_15259 = cljs.core.first.call(null,inst_15249);var inst_15260 = cljs.core.nth.call(null,inst_15259,0,null);var inst_15261 = cljs.core.nth.call(null,inst_15259,1,null);var state_15352__$1 = (function (){var statearr_15355 = state_15352;(statearr_15355[8] = inst_15260);
return statearr_15355;
})();if(cljs.core.truth_(inst_15261))
{var statearr_15356_15440 = state_15352__$1;(statearr_15356_15440[1] = 22);
} else
{var statearr_15357_15441 = state_15352__$1;(statearr_15357_15441[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 27))
{var inst_15289 = (state_15352[9]);var inst_15291 = (state_15352[10]);var inst_15296 = cljs.core._nth.call(null,inst_15289,inst_15291);var state_15352__$1 = (function (){var statearr_15358 = state_15352;(statearr_15358[11] = inst_15296);
return statearr_15358;
})();var statearr_15359_15442 = state_15352__$1;(statearr_15359_15442[2] = null);
(statearr_15359_15442[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 1))
{var state_15352__$1 = state_15352;var statearr_15360_15443 = state_15352__$1;(statearr_15360_15443[2] = null);
(statearr_15360_15443[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 24))
{var inst_15249 = (state_15352[7]);var inst_15266 = (state_15352[2]);var inst_15267 = cljs.core.next.call(null,inst_15249);var inst_15229 = inst_15267;var inst_15230 = null;var inst_15231 = 0;var inst_15232 = 0;var state_15352__$1 = (function (){var statearr_15361 = state_15352;(statearr_15361[12] = inst_15266);
(statearr_15361[13] = inst_15231);
(statearr_15361[14] = inst_15229);
(statearr_15361[15] = inst_15230);
(statearr_15361[16] = inst_15232);
return statearr_15361;
})();var statearr_15362_15444 = state_15352__$1;(statearr_15362_15444[2] = null);
(statearr_15362_15444[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 39))
{var inst_15309 = (state_15352[17]);var inst_15327 = (state_15352[2]);var inst_15328 = cljs.core.next.call(null,inst_15309);var inst_15288 = inst_15328;var inst_15289 = null;var inst_15290 = 0;var inst_15291 = 0;var state_15352__$1 = (function (){var statearr_15366 = state_15352;(statearr_15366[9] = inst_15289);
(statearr_15366[10] = inst_15291);
(statearr_15366[18] = inst_15288);
(statearr_15366[19] = inst_15290);
(statearr_15366[20] = inst_15327);
return statearr_15366;
})();var statearr_15367_15445 = state_15352__$1;(statearr_15367_15445[2] = null);
(statearr_15367_15445[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 4))
{var inst_15220 = (state_15352[21]);var inst_15220__$1 = (state_15352[2]);var inst_15221 = (inst_15220__$1 == null);var state_15352__$1 = (function (){var statearr_15368 = state_15352;(statearr_15368[21] = inst_15220__$1);
return statearr_15368;
})();if(cljs.core.truth_(inst_15221))
{var statearr_15369_15446 = state_15352__$1;(statearr_15369_15446[1] = 5);
} else
{var statearr_15370_15447 = state_15352__$1;(statearr_15370_15447[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 15))
{var inst_15231 = (state_15352[13]);var inst_15229 = (state_15352[14]);var inst_15230 = (state_15352[15]);var inst_15232 = (state_15352[16]);var inst_15245 = (state_15352[2]);var inst_15246 = (inst_15232 + 1);var tmp15363 = inst_15231;var tmp15364 = inst_15229;var tmp15365 = inst_15230;var inst_15229__$1 = tmp15364;var inst_15230__$1 = tmp15365;var inst_15231__$1 = tmp15363;var inst_15232__$1 = inst_15246;var state_15352__$1 = (function (){var statearr_15371 = state_15352;(statearr_15371[13] = inst_15231__$1);
(statearr_15371[14] = inst_15229__$1);
(statearr_15371[22] = inst_15245);
(statearr_15371[15] = inst_15230__$1);
(statearr_15371[16] = inst_15232__$1);
return statearr_15371;
})();var statearr_15372_15448 = state_15352__$1;(statearr_15372_15448[2] = null);
(statearr_15372_15448[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 21))
{var inst_15270 = (state_15352[2]);var state_15352__$1 = state_15352;var statearr_15373_15449 = state_15352__$1;(statearr_15373_15449[2] = inst_15270);
(statearr_15373_15449[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 31))
{var inst_15296 = (state_15352[11]);var inst_15297 = (state_15352[2]);var inst_15298 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15299 = cljs.core.async.untap_STAR_.call(null,m,inst_15296);var state_15352__$1 = (function (){var statearr_15374 = state_15352;(statearr_15374[23] = inst_15297);
(statearr_15374[24] = inst_15298);
return statearr_15374;
})();var statearr_15375_15450 = state_15352__$1;(statearr_15375_15450[2] = inst_15299);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15352__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 32))
{var inst_15220 = (state_15352[21]);var inst_15296 = (state_15352[11]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15352,31,Object,null,30);var inst_15303 = cljs.core.async.put_BANG_.call(null,inst_15296,inst_15220,done);var state_15352__$1 = state_15352;var statearr_15376_15451 = state_15352__$1;(statearr_15376_15451[2] = inst_15303);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15352__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 40))
{var inst_15318 = (state_15352[25]);var inst_15319 = (state_15352[2]);var inst_15320 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15321 = cljs.core.async.untap_STAR_.call(null,m,inst_15318);var state_15352__$1 = (function (){var statearr_15377 = state_15352;(statearr_15377[26] = inst_15319);
(statearr_15377[27] = inst_15320);
return statearr_15377;
})();var statearr_15378_15452 = state_15352__$1;(statearr_15378_15452[2] = inst_15321);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15352__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 33))
{var inst_15309 = (state_15352[17]);var inst_15311 = cljs.core.chunked_seq_QMARK_.call(null,inst_15309);var state_15352__$1 = state_15352;if(inst_15311)
{var statearr_15379_15453 = state_15352__$1;(statearr_15379_15453[1] = 36);
} else
{var statearr_15380_15454 = state_15352__$1;(statearr_15380_15454[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 13))
{var inst_15239 = (state_15352[28]);var inst_15242 = cljs.core.async.close_BANG_.call(null,inst_15239);var state_15352__$1 = state_15352;var statearr_15381_15455 = state_15352__$1;(statearr_15381_15455[2] = inst_15242);
(statearr_15381_15455[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 22))
{var inst_15260 = (state_15352[8]);var inst_15263 = cljs.core.async.close_BANG_.call(null,inst_15260);var state_15352__$1 = state_15352;var statearr_15382_15456 = state_15352__$1;(statearr_15382_15456[2] = inst_15263);
(statearr_15382_15456[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 36))
{var inst_15309 = (state_15352[17]);var inst_15313 = cljs.core.chunk_first.call(null,inst_15309);var inst_15314 = cljs.core.chunk_rest.call(null,inst_15309);var inst_15315 = cljs.core.count.call(null,inst_15313);var inst_15288 = inst_15314;var inst_15289 = inst_15313;var inst_15290 = inst_15315;var inst_15291 = 0;var state_15352__$1 = (function (){var statearr_15383 = state_15352;(statearr_15383[9] = inst_15289);
(statearr_15383[10] = inst_15291);
(statearr_15383[18] = inst_15288);
(statearr_15383[19] = inst_15290);
return statearr_15383;
})();var statearr_15384_15457 = state_15352__$1;(statearr_15384_15457[2] = null);
(statearr_15384_15457[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 41))
{var inst_15318 = (state_15352[25]);var inst_15220 = (state_15352[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15352,40,Object,null,39);var inst_15325 = cljs.core.async.put_BANG_.call(null,inst_15318,inst_15220,done);var state_15352__$1 = state_15352;var statearr_15385_15458 = state_15352__$1;(statearr_15385_15458[2] = inst_15325);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15352__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 43))
{var state_15352__$1 = state_15352;var statearr_15386_15459 = state_15352__$1;(statearr_15386_15459[2] = null);
(statearr_15386_15459[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 29))
{var inst_15336 = (state_15352[2]);var state_15352__$1 = state_15352;var statearr_15387_15460 = state_15352__$1;(statearr_15387_15460[2] = inst_15336);
(statearr_15387_15460[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 44))
{var inst_15345 = (state_15352[2]);var state_15352__$1 = (function (){var statearr_15388 = state_15352;(statearr_15388[29] = inst_15345);
return statearr_15388;
})();var statearr_15389_15461 = state_15352__$1;(statearr_15389_15461[2] = null);
(statearr_15389_15461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 6))
{var inst_15280 = (state_15352[30]);var inst_15279 = cljs.core.deref.call(null,cs);var inst_15280__$1 = cljs.core.keys.call(null,inst_15279);var inst_15281 = cljs.core.count.call(null,inst_15280__$1);var inst_15282 = cljs.core.reset_BANG_.call(null,dctr,inst_15281);var inst_15287 = cljs.core.seq.call(null,inst_15280__$1);var inst_15288 = inst_15287;var inst_15289 = null;var inst_15290 = 0;var inst_15291 = 0;var state_15352__$1 = (function (){var statearr_15390 = state_15352;(statearr_15390[9] = inst_15289);
(statearr_15390[31] = inst_15282);
(statearr_15390[10] = inst_15291);
(statearr_15390[18] = inst_15288);
(statearr_15390[19] = inst_15290);
(statearr_15390[30] = inst_15280__$1);
return statearr_15390;
})();var statearr_15391_15462 = state_15352__$1;(statearr_15391_15462[2] = null);
(statearr_15391_15462[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 28))
{var inst_15288 = (state_15352[18]);var inst_15309 = (state_15352[17]);var inst_15309__$1 = cljs.core.seq.call(null,inst_15288);var state_15352__$1 = (function (){var statearr_15392 = state_15352;(statearr_15392[17] = inst_15309__$1);
return statearr_15392;
})();if(inst_15309__$1)
{var statearr_15393_15463 = state_15352__$1;(statearr_15393_15463[1] = 33);
} else
{var statearr_15394_15464 = state_15352__$1;(statearr_15394_15464[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 25))
{var inst_15291 = (state_15352[10]);var inst_15290 = (state_15352[19]);var inst_15293 = (inst_15291 < inst_15290);var inst_15294 = inst_15293;var state_15352__$1 = state_15352;if(cljs.core.truth_(inst_15294))
{var statearr_15395_15465 = state_15352__$1;(statearr_15395_15465[1] = 27);
} else
{var statearr_15396_15466 = state_15352__$1;(statearr_15396_15466[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 34))
{var state_15352__$1 = state_15352;var statearr_15397_15467 = state_15352__$1;(statearr_15397_15467[2] = null);
(statearr_15397_15467[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 17))
{var state_15352__$1 = state_15352;var statearr_15398_15468 = state_15352__$1;(statearr_15398_15468[2] = null);
(statearr_15398_15468[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 3))
{var inst_15350 = (state_15352[2]);var state_15352__$1 = state_15352;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15352__$1,inst_15350);
} else
{if((state_val_15353 === 12))
{var inst_15275 = (state_15352[2]);var state_15352__$1 = state_15352;var statearr_15399_15469 = state_15352__$1;(statearr_15399_15469[2] = inst_15275);
(statearr_15399_15469[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 2))
{var state_15352__$1 = state_15352;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15352__$1,4,ch);
} else
{if((state_val_15353 === 23))
{var state_15352__$1 = state_15352;var statearr_15400_15470 = state_15352__$1;(statearr_15400_15470[2] = null);
(statearr_15400_15470[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 35))
{var inst_15334 = (state_15352[2]);var state_15352__$1 = state_15352;var statearr_15401_15471 = state_15352__$1;(statearr_15401_15471[2] = inst_15334);
(statearr_15401_15471[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 19))
{var inst_15249 = (state_15352[7]);var inst_15253 = cljs.core.chunk_first.call(null,inst_15249);var inst_15254 = cljs.core.chunk_rest.call(null,inst_15249);var inst_15255 = cljs.core.count.call(null,inst_15253);var inst_15229 = inst_15254;var inst_15230 = inst_15253;var inst_15231 = inst_15255;var inst_15232 = 0;var state_15352__$1 = (function (){var statearr_15402 = state_15352;(statearr_15402[13] = inst_15231);
(statearr_15402[14] = inst_15229);
(statearr_15402[15] = inst_15230);
(statearr_15402[16] = inst_15232);
return statearr_15402;
})();var statearr_15403_15472 = state_15352__$1;(statearr_15403_15472[2] = null);
(statearr_15403_15472[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 11))
{var inst_15249 = (state_15352[7]);var inst_15229 = (state_15352[14]);var inst_15249__$1 = cljs.core.seq.call(null,inst_15229);var state_15352__$1 = (function (){var statearr_15404 = state_15352;(statearr_15404[7] = inst_15249__$1);
return statearr_15404;
})();if(inst_15249__$1)
{var statearr_15405_15473 = state_15352__$1;(statearr_15405_15473[1] = 16);
} else
{var statearr_15406_15474 = state_15352__$1;(statearr_15406_15474[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 9))
{var inst_15277 = (state_15352[2]);var state_15352__$1 = state_15352;var statearr_15407_15475 = state_15352__$1;(statearr_15407_15475[2] = inst_15277);
(statearr_15407_15475[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 5))
{var inst_15227 = cljs.core.deref.call(null,cs);var inst_15228 = cljs.core.seq.call(null,inst_15227);var inst_15229 = inst_15228;var inst_15230 = null;var inst_15231 = 0;var inst_15232 = 0;var state_15352__$1 = (function (){var statearr_15408 = state_15352;(statearr_15408[13] = inst_15231);
(statearr_15408[14] = inst_15229);
(statearr_15408[15] = inst_15230);
(statearr_15408[16] = inst_15232);
return statearr_15408;
})();var statearr_15409_15476 = state_15352__$1;(statearr_15409_15476[2] = null);
(statearr_15409_15476[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 14))
{var state_15352__$1 = state_15352;var statearr_15410_15477 = state_15352__$1;(statearr_15410_15477[2] = null);
(statearr_15410_15477[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 45))
{var inst_15342 = (state_15352[2]);var state_15352__$1 = state_15352;var statearr_15411_15478 = state_15352__$1;(statearr_15411_15478[2] = inst_15342);
(statearr_15411_15478[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 26))
{var inst_15280 = (state_15352[30]);var inst_15338 = (state_15352[2]);var inst_15339 = cljs.core.seq.call(null,inst_15280);var state_15352__$1 = (function (){var statearr_15412 = state_15352;(statearr_15412[32] = inst_15338);
return statearr_15412;
})();if(inst_15339)
{var statearr_15413_15479 = state_15352__$1;(statearr_15413_15479[1] = 42);
} else
{var statearr_15414_15480 = state_15352__$1;(statearr_15414_15480[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 16))
{var inst_15249 = (state_15352[7]);var inst_15251 = cljs.core.chunked_seq_QMARK_.call(null,inst_15249);var state_15352__$1 = state_15352;if(inst_15251)
{var statearr_15418_15481 = state_15352__$1;(statearr_15418_15481[1] = 19);
} else
{var statearr_15419_15482 = state_15352__$1;(statearr_15419_15482[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 38))
{var inst_15331 = (state_15352[2]);var state_15352__$1 = state_15352;var statearr_15420_15483 = state_15352__$1;(statearr_15420_15483[2] = inst_15331);
(statearr_15420_15483[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 30))
{var inst_15289 = (state_15352[9]);var inst_15291 = (state_15352[10]);var inst_15288 = (state_15352[18]);var inst_15290 = (state_15352[19]);var inst_15305 = (state_15352[2]);var inst_15306 = (inst_15291 + 1);var tmp15415 = inst_15289;var tmp15416 = inst_15288;var tmp15417 = inst_15290;var inst_15288__$1 = tmp15416;var inst_15289__$1 = tmp15415;var inst_15290__$1 = tmp15417;var inst_15291__$1 = inst_15306;var state_15352__$1 = (function (){var statearr_15421 = state_15352;(statearr_15421[9] = inst_15289__$1);
(statearr_15421[10] = inst_15291__$1);
(statearr_15421[18] = inst_15288__$1);
(statearr_15421[19] = inst_15290__$1);
(statearr_15421[33] = inst_15305);
return statearr_15421;
})();var statearr_15422_15484 = state_15352__$1;(statearr_15422_15484[2] = null);
(statearr_15422_15484[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 10))
{var inst_15230 = (state_15352[15]);var inst_15232 = (state_15352[16]);var inst_15238 = cljs.core._nth.call(null,inst_15230,inst_15232);var inst_15239 = cljs.core.nth.call(null,inst_15238,0,null);var inst_15240 = cljs.core.nth.call(null,inst_15238,1,null);var state_15352__$1 = (function (){var statearr_15423 = state_15352;(statearr_15423[28] = inst_15239);
return statearr_15423;
})();if(cljs.core.truth_(inst_15240))
{var statearr_15424_15485 = state_15352__$1;(statearr_15424_15485[1] = 13);
} else
{var statearr_15425_15486 = state_15352__$1;(statearr_15425_15486[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 18))
{var inst_15273 = (state_15352[2]);var state_15352__$1 = state_15352;var statearr_15426_15487 = state_15352__$1;(statearr_15426_15487[2] = inst_15273);
(statearr_15426_15487[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 42))
{var state_15352__$1 = state_15352;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15352__$1,45,dchan);
} else
{if((state_val_15353 === 37))
{var inst_15309 = (state_15352[17]);var inst_15318 = cljs.core.first.call(null,inst_15309);var state_15352__$1 = (function (){var statearr_15427 = state_15352;(statearr_15427[25] = inst_15318);
return statearr_15427;
})();var statearr_15428_15488 = state_15352__$1;(statearr_15428_15488[2] = null);
(statearr_15428_15488[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 8))
{var inst_15231 = (state_15352[13]);var inst_15232 = (state_15352[16]);var inst_15234 = (inst_15232 < inst_15231);var inst_15235 = inst_15234;var state_15352__$1 = state_15352;if(cljs.core.truth_(inst_15235))
{var statearr_15429_15489 = state_15352__$1;(statearr_15429_15489[1] = 10);
} else
{var statearr_15430_15490 = state_15352__$1;(statearr_15430_15490[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___15438,cs,m,dchan,dctr,done))
;return ((function (switch__5676__auto__,c__5691__auto___15438,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_15434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15434[0] = state_machine__5677__auto__);
(statearr_15434[1] = 1);
return statearr_15434;
});
var state_machine__5677__auto____1 = (function (state_15352){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_15352);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e15435){if((e15435 instanceof Object))
{var ex__5680__auto__ = e15435;var statearr_15436_15491 = state_15352;(statearr_15436_15491[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15352);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15435;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15492 = state_15352;
state_15352 = G__15492;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_15352){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_15352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___15438,cs,m,dchan,dctr,done))
})();var state__5693__auto__ = (function (){var statearr_15437 = f__5692__auto__.call(null);(statearr_15437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___15438);
return statearr_15437;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___15438,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj15494 = {};return obj15494;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t15604 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15604 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15605){
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
this.meta15605 = meta15605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15604.cljs$lang$type = true;
cljs.core.async.t15604.cljs$lang$ctorStr = "cljs.core.async/t15604";
cljs.core.async.t15604.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t15604");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15604.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15604.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15604.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15604.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15604.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15604.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15604.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15604.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15606){var self__ = this;
var _15606__$1 = this;return self__.meta15605;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15606,meta15605__$1){var self__ = this;
var _15606__$1 = this;return (new cljs.core.async.t15604(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15605__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15604 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15604(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15605){return (new cljs.core.async.t15604(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15605));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15604(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5691__auto___15713 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___15713,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___15713,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15671){var state_val_15672 = (state_15671[1]);if((state_val_15672 === 7))
{var inst_15620 = (state_15671[7]);var inst_15625 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15620);var state_15671__$1 = state_15671;var statearr_15673_15714 = state_15671__$1;(statearr_15673_15714[2] = inst_15625);
(statearr_15673_15714[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 20))
{var inst_15635 = (state_15671[8]);var state_15671__$1 = state_15671;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15671__$1,23,out,inst_15635);
} else
{if((state_val_15672 === 1))
{var inst_15610 = (state_15671[9]);var inst_15610__$1 = calc_state.call(null);var inst_15611 = cljs.core.seq_QMARK_.call(null,inst_15610__$1);var state_15671__$1 = (function (){var statearr_15674 = state_15671;(statearr_15674[9] = inst_15610__$1);
return statearr_15674;
})();if(inst_15611)
{var statearr_15675_15715 = state_15671__$1;(statearr_15675_15715[1] = 2);
} else
{var statearr_15676_15716 = state_15671__$1;(statearr_15676_15716[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 4))
{var inst_15610 = (state_15671[9]);var inst_15616 = (state_15671[2]);var inst_15617 = cljs.core.get.call(null,inst_15616,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15618 = cljs.core.get.call(null,inst_15616,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15619 = cljs.core.get.call(null,inst_15616,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15620 = inst_15610;var state_15671__$1 = (function (){var statearr_15677 = state_15671;(statearr_15677[10] = inst_15618);
(statearr_15677[11] = inst_15617);
(statearr_15677[7] = inst_15620);
(statearr_15677[12] = inst_15619);
return statearr_15677;
})();var statearr_15678_15717 = state_15671__$1;(statearr_15678_15717[2] = null);
(statearr_15678_15717[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 15))
{var state_15671__$1 = state_15671;var statearr_15679_15718 = state_15671__$1;(statearr_15679_15718[2] = null);
(statearr_15679_15718[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 21))
{var state_15671__$1 = state_15671;var statearr_15680_15719 = state_15671__$1;(statearr_15680_15719[2] = null);
(statearr_15680_15719[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 13))
{var inst_15667 = (state_15671[2]);var state_15671__$1 = state_15671;var statearr_15681_15720 = state_15671__$1;(statearr_15681_15720[2] = inst_15667);
(statearr_15681_15720[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 22))
{var inst_15628 = (state_15671[13]);var inst_15664 = (state_15671[2]);var inst_15620 = inst_15628;var state_15671__$1 = (function (){var statearr_15682 = state_15671;(statearr_15682[7] = inst_15620);
(statearr_15682[14] = inst_15664);
return statearr_15682;
})();var statearr_15683_15721 = state_15671__$1;(statearr_15683_15721[2] = null);
(statearr_15683_15721[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 6))
{var inst_15669 = (state_15671[2]);var state_15671__$1 = state_15671;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15671__$1,inst_15669);
} else
{if((state_val_15672 === 17))
{var inst_15650 = (state_15671[15]);var state_15671__$1 = state_15671;var statearr_15684_15722 = state_15671__$1;(statearr_15684_15722[2] = inst_15650);
(statearr_15684_15722[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 3))
{var inst_15610 = (state_15671[9]);var state_15671__$1 = state_15671;var statearr_15685_15723 = state_15671__$1;(statearr_15685_15723[2] = inst_15610);
(statearr_15685_15723[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 12))
{var inst_15631 = (state_15671[16]);var inst_15650 = (state_15671[15]);var inst_15636 = (state_15671[17]);var inst_15650__$1 = inst_15631.call(null,inst_15636);var state_15671__$1 = (function (){var statearr_15686 = state_15671;(statearr_15686[15] = inst_15650__$1);
return statearr_15686;
})();if(cljs.core.truth_(inst_15650__$1))
{var statearr_15687_15724 = state_15671__$1;(statearr_15687_15724[1] = 17);
} else
{var statearr_15688_15725 = state_15671__$1;(statearr_15688_15725[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 2))
{var inst_15610 = (state_15671[9]);var inst_15613 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15610);var state_15671__$1 = state_15671;var statearr_15689_15726 = state_15671__$1;(statearr_15689_15726[2] = inst_15613);
(statearr_15689_15726[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 23))
{var inst_15661 = (state_15671[2]);var state_15671__$1 = state_15671;var statearr_15690_15727 = state_15671__$1;(statearr_15690_15727[2] = inst_15661);
(statearr_15690_15727[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 19))
{var inst_15658 = (state_15671[2]);var state_15671__$1 = state_15671;if(cljs.core.truth_(inst_15658))
{var statearr_15691_15728 = state_15671__$1;(statearr_15691_15728[1] = 20);
} else
{var statearr_15692_15729 = state_15671__$1;(statearr_15692_15729[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 11))
{var inst_15635 = (state_15671[8]);var inst_15641 = (inst_15635 == null);var state_15671__$1 = state_15671;if(cljs.core.truth_(inst_15641))
{var statearr_15693_15730 = state_15671__$1;(statearr_15693_15730[1] = 14);
} else
{var statearr_15694_15731 = state_15671__$1;(statearr_15694_15731[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 9))
{var inst_15628 = (state_15671[13]);var inst_15628__$1 = (state_15671[2]);var inst_15629 = cljs.core.get.call(null,inst_15628__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15630 = cljs.core.get.call(null,inst_15628__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15631 = cljs.core.get.call(null,inst_15628__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15671__$1 = (function (){var statearr_15695 = state_15671;(statearr_15695[13] = inst_15628__$1);
(statearr_15695[16] = inst_15631);
(statearr_15695[18] = inst_15630);
return statearr_15695;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15671__$1,10,inst_15629);
} else
{if((state_val_15672 === 5))
{var inst_15620 = (state_15671[7]);var inst_15623 = cljs.core.seq_QMARK_.call(null,inst_15620);var state_15671__$1 = state_15671;if(inst_15623)
{var statearr_15696_15732 = state_15671__$1;(statearr_15696_15732[1] = 7);
} else
{var statearr_15697_15733 = state_15671__$1;(statearr_15697_15733[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 14))
{var inst_15636 = (state_15671[17]);var inst_15643 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15636);var state_15671__$1 = state_15671;var statearr_15698_15734 = state_15671__$1;(statearr_15698_15734[2] = inst_15643);
(statearr_15698_15734[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 16))
{var inst_15646 = (state_15671[2]);var inst_15647 = calc_state.call(null);var inst_15620 = inst_15647;var state_15671__$1 = (function (){var statearr_15699 = state_15671;(statearr_15699[19] = inst_15646);
(statearr_15699[7] = inst_15620);
return statearr_15699;
})();var statearr_15700_15735 = state_15671__$1;(statearr_15700_15735[2] = null);
(statearr_15700_15735[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 10))
{var inst_15635 = (state_15671[8]);var inst_15636 = (state_15671[17]);var inst_15634 = (state_15671[2]);var inst_15635__$1 = cljs.core.nth.call(null,inst_15634,0,null);var inst_15636__$1 = cljs.core.nth.call(null,inst_15634,1,null);var inst_15637 = (inst_15635__$1 == null);var inst_15638 = cljs.core._EQ_.call(null,inst_15636__$1,change);var inst_15639 = (inst_15637) || (inst_15638);var state_15671__$1 = (function (){var statearr_15701 = state_15671;(statearr_15701[8] = inst_15635__$1);
(statearr_15701[17] = inst_15636__$1);
return statearr_15701;
})();if(cljs.core.truth_(inst_15639))
{var statearr_15702_15736 = state_15671__$1;(statearr_15702_15736[1] = 11);
} else
{var statearr_15703_15737 = state_15671__$1;(statearr_15703_15737[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 18))
{var inst_15631 = (state_15671[16]);var inst_15630 = (state_15671[18]);var inst_15636 = (state_15671[17]);var inst_15653 = cljs.core.empty_QMARK_.call(null,inst_15631);var inst_15654 = inst_15630.call(null,inst_15636);var inst_15655 = cljs.core.not.call(null,inst_15654);var inst_15656 = (inst_15653) && (inst_15655);var state_15671__$1 = state_15671;var statearr_15704_15738 = state_15671__$1;(statearr_15704_15738[2] = inst_15656);
(statearr_15704_15738[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15672 === 8))
{var inst_15620 = (state_15671[7]);var state_15671__$1 = state_15671;var statearr_15705_15739 = state_15671__$1;(statearr_15705_15739[2] = inst_15620);
(statearr_15705_15739[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___15713,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5676__auto__,c__5691__auto___15713,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_15709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15709[0] = state_machine__5677__auto__);
(statearr_15709[1] = 1);
return statearr_15709;
});
var state_machine__5677__auto____1 = (function (state_15671){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_15671);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e15710){if((e15710 instanceof Object))
{var ex__5680__auto__ = e15710;var statearr_15711_15740 = state_15671;(statearr_15711_15740[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15671);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15741 = state_15671;
state_15671 = G__15741;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_15671){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_15671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___15713,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5693__auto__ = (function (){var statearr_15712 = f__5692__auto__.call(null);(statearr_15712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___15713);
return statearr_15712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___15713,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj15743 = {};return obj15743;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
return (function (topic){var or__3541__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3541__auto__,mults){
return (function (p1__15744_SHARP_){if(cljs.core.truth_(p1__15744_SHARP_.call(null,topic)))
{return p1__15744_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15744_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3541__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15869 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15869 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15870){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15870 = meta15870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15869.cljs$lang$type = true;
cljs.core.async.t15869.cljs$lang$ctorStr = "cljs.core.async/t15869";
cljs.core.async.t15869.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t15869");
});})(mults,ensure_mult))
;
cljs.core.async.t15869.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15869.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15869.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15869.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15869.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15869.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15869.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15871){var self__ = this;
var _15871__$1 = this;return self__.meta15870;
});})(mults,ensure_mult))
;
cljs.core.async.t15869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15871,meta15870__$1){var self__ = this;
var _15871__$1 = this;return (new cljs.core.async.t15869(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15870__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15869 = ((function (mults,ensure_mult){
return (function __GT_t15869(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15870){return (new cljs.core.async.t15869(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15870));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15869(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5691__auto___15993 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___15993,mults,ensure_mult,p){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___15993,mults,ensure_mult,p){
return (function (state_15945){var state_val_15946 = (state_15945[1]);if((state_val_15946 === 7))
{var inst_15941 = (state_15945[2]);var state_15945__$1 = state_15945;var statearr_15947_15994 = state_15945__$1;(statearr_15947_15994[2] = inst_15941);
(statearr_15947_15994[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 20))
{var state_15945__$1 = state_15945;var statearr_15948_15995 = state_15945__$1;(statearr_15948_15995[2] = null);
(statearr_15948_15995[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 1))
{var state_15945__$1 = state_15945;var statearr_15949_15996 = state_15945__$1;(statearr_15949_15996[2] = null);
(statearr_15949_15996[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 24))
{var inst_15924 = (state_15945[7]);var inst_15874 = (state_15945[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15945,23,Object,null,22);var inst_15931 = cljs.core.async.muxch_STAR_.call(null,inst_15924);var state_15945__$1 = state_15945;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15945__$1,25,inst_15931,inst_15874);
} else
{if((state_val_15946 === 4))
{var inst_15874 = (state_15945[8]);var inst_15874__$1 = (state_15945[2]);var inst_15875 = (inst_15874__$1 == null);var state_15945__$1 = (function (){var statearr_15950 = state_15945;(statearr_15950[8] = inst_15874__$1);
return statearr_15950;
})();if(cljs.core.truth_(inst_15875))
{var statearr_15951_15997 = state_15945__$1;(statearr_15951_15997[1] = 5);
} else
{var statearr_15952_15998 = state_15945__$1;(statearr_15952_15998[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 15))
{var inst_15916 = (state_15945[2]);var state_15945__$1 = state_15945;var statearr_15953_15999 = state_15945__$1;(statearr_15953_15999[2] = inst_15916);
(statearr_15953_15999[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 21))
{var inst_15938 = (state_15945[2]);var state_15945__$1 = (function (){var statearr_15954 = state_15945;(statearr_15954[9] = inst_15938);
return statearr_15954;
})();var statearr_15955_16000 = state_15945__$1;(statearr_15955_16000[2] = null);
(statearr_15955_16000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 13))
{var inst_15898 = (state_15945[10]);var inst_15900 = cljs.core.chunked_seq_QMARK_.call(null,inst_15898);var state_15945__$1 = state_15945;if(inst_15900)
{var statearr_15956_16001 = state_15945__$1;(statearr_15956_16001[1] = 16);
} else
{var statearr_15957_16002 = state_15945__$1;(statearr_15957_16002[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 22))
{var inst_15935 = (state_15945[2]);var state_15945__$1 = state_15945;var statearr_15958_16003 = state_15945__$1;(statearr_15958_16003[2] = inst_15935);
(statearr_15958_16003[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 6))
{var inst_15922 = (state_15945[11]);var inst_15924 = (state_15945[7]);var inst_15874 = (state_15945[8]);var inst_15922__$1 = topic_fn.call(null,inst_15874);var inst_15923 = cljs.core.deref.call(null,mults);var inst_15924__$1 = cljs.core.get.call(null,inst_15923,inst_15922__$1);var state_15945__$1 = (function (){var statearr_15959 = state_15945;(statearr_15959[11] = inst_15922__$1);
(statearr_15959[7] = inst_15924__$1);
return statearr_15959;
})();if(cljs.core.truth_(inst_15924__$1))
{var statearr_15960_16004 = state_15945__$1;(statearr_15960_16004[1] = 19);
} else
{var statearr_15961_16005 = state_15945__$1;(statearr_15961_16005[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 25))
{var inst_15933 = (state_15945[2]);var state_15945__$1 = state_15945;var statearr_15962_16006 = state_15945__$1;(statearr_15962_16006[2] = inst_15933);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15945__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 17))
{var inst_15898 = (state_15945[10]);var inst_15907 = cljs.core.first.call(null,inst_15898);var inst_15908 = cljs.core.async.muxch_STAR_.call(null,inst_15907);var inst_15909 = cljs.core.async.close_BANG_.call(null,inst_15908);var inst_15910 = cljs.core.next.call(null,inst_15898);var inst_15884 = inst_15910;var inst_15885 = null;var inst_15886 = 0;var inst_15887 = 0;var state_15945__$1 = (function (){var statearr_15963 = state_15945;(statearr_15963[12] = inst_15909);
(statearr_15963[13] = inst_15887);
(statearr_15963[14] = inst_15886);
(statearr_15963[15] = inst_15885);
(statearr_15963[16] = inst_15884);
return statearr_15963;
})();var statearr_15964_16007 = state_15945__$1;(statearr_15964_16007[2] = null);
(statearr_15964_16007[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 3))
{var inst_15943 = (state_15945[2]);var state_15945__$1 = state_15945;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15945__$1,inst_15943);
} else
{if((state_val_15946 === 12))
{var inst_15918 = (state_15945[2]);var state_15945__$1 = state_15945;var statearr_15965_16008 = state_15945__$1;(statearr_15965_16008[2] = inst_15918);
(statearr_15965_16008[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 2))
{var state_15945__$1 = state_15945;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15945__$1,4,ch);
} else
{if((state_val_15946 === 23))
{var inst_15922 = (state_15945[11]);var inst_15926 = (state_15945[2]);var inst_15927 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15922);var state_15945__$1 = (function (){var statearr_15966 = state_15945;(statearr_15966[17] = inst_15926);
return statearr_15966;
})();var statearr_15967_16009 = state_15945__$1;(statearr_15967_16009[2] = inst_15927);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15945__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 19))
{var state_15945__$1 = state_15945;var statearr_15968_16010 = state_15945__$1;(statearr_15968_16010[2] = null);
(statearr_15968_16010[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 11))
{var inst_15884 = (state_15945[16]);var inst_15898 = (state_15945[10]);var inst_15898__$1 = cljs.core.seq.call(null,inst_15884);var state_15945__$1 = (function (){var statearr_15969 = state_15945;(statearr_15969[10] = inst_15898__$1);
return statearr_15969;
})();if(inst_15898__$1)
{var statearr_15970_16011 = state_15945__$1;(statearr_15970_16011[1] = 13);
} else
{var statearr_15971_16012 = state_15945__$1;(statearr_15971_16012[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 9))
{var inst_15920 = (state_15945[2]);var state_15945__$1 = state_15945;var statearr_15972_16013 = state_15945__$1;(statearr_15972_16013[2] = inst_15920);
(statearr_15972_16013[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 5))
{var inst_15881 = cljs.core.deref.call(null,mults);var inst_15882 = cljs.core.vals.call(null,inst_15881);var inst_15883 = cljs.core.seq.call(null,inst_15882);var inst_15884 = inst_15883;var inst_15885 = null;var inst_15886 = 0;var inst_15887 = 0;var state_15945__$1 = (function (){var statearr_15973 = state_15945;(statearr_15973[13] = inst_15887);
(statearr_15973[14] = inst_15886);
(statearr_15973[15] = inst_15885);
(statearr_15973[16] = inst_15884);
return statearr_15973;
})();var statearr_15974_16014 = state_15945__$1;(statearr_15974_16014[2] = null);
(statearr_15974_16014[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 14))
{var state_15945__$1 = state_15945;var statearr_15978_16015 = state_15945__$1;(statearr_15978_16015[2] = null);
(statearr_15978_16015[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 16))
{var inst_15898 = (state_15945[10]);var inst_15902 = cljs.core.chunk_first.call(null,inst_15898);var inst_15903 = cljs.core.chunk_rest.call(null,inst_15898);var inst_15904 = cljs.core.count.call(null,inst_15902);var inst_15884 = inst_15903;var inst_15885 = inst_15902;var inst_15886 = inst_15904;var inst_15887 = 0;var state_15945__$1 = (function (){var statearr_15979 = state_15945;(statearr_15979[13] = inst_15887);
(statearr_15979[14] = inst_15886);
(statearr_15979[15] = inst_15885);
(statearr_15979[16] = inst_15884);
return statearr_15979;
})();var statearr_15980_16016 = state_15945__$1;(statearr_15980_16016[2] = null);
(statearr_15980_16016[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 10))
{var inst_15887 = (state_15945[13]);var inst_15886 = (state_15945[14]);var inst_15885 = (state_15945[15]);var inst_15884 = (state_15945[16]);var inst_15892 = cljs.core._nth.call(null,inst_15885,inst_15887);var inst_15893 = cljs.core.async.muxch_STAR_.call(null,inst_15892);var inst_15894 = cljs.core.async.close_BANG_.call(null,inst_15893);var inst_15895 = (inst_15887 + 1);var tmp15975 = inst_15886;var tmp15976 = inst_15885;var tmp15977 = inst_15884;var inst_15884__$1 = tmp15977;var inst_15885__$1 = tmp15976;var inst_15886__$1 = tmp15975;var inst_15887__$1 = inst_15895;var state_15945__$1 = (function (){var statearr_15981 = state_15945;(statearr_15981[13] = inst_15887__$1);
(statearr_15981[14] = inst_15886__$1);
(statearr_15981[18] = inst_15894);
(statearr_15981[15] = inst_15885__$1);
(statearr_15981[16] = inst_15884__$1);
return statearr_15981;
})();var statearr_15982_16017 = state_15945__$1;(statearr_15982_16017[2] = null);
(statearr_15982_16017[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 18))
{var inst_15913 = (state_15945[2]);var state_15945__$1 = state_15945;var statearr_15983_16018 = state_15945__$1;(statearr_15983_16018[2] = inst_15913);
(statearr_15983_16018[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15946 === 8))
{var inst_15887 = (state_15945[13]);var inst_15886 = (state_15945[14]);var inst_15889 = (inst_15887 < inst_15886);var inst_15890 = inst_15889;var state_15945__$1 = state_15945;if(cljs.core.truth_(inst_15890))
{var statearr_15984_16019 = state_15945__$1;(statearr_15984_16019[1] = 10);
} else
{var statearr_15985_16020 = state_15945__$1;(statearr_15985_16020[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___15993,mults,ensure_mult,p))
;return ((function (switch__5676__auto__,c__5691__auto___15993,mults,ensure_mult,p){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_15989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15989[0] = state_machine__5677__auto__);
(statearr_15989[1] = 1);
return statearr_15989;
});
var state_machine__5677__auto____1 = (function (state_15945){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_15945);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e15990){if((e15990 instanceof Object))
{var ex__5680__auto__ = e15990;var statearr_15991_16021 = state_15945;(statearr_15991_16021[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15945);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15990;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16022 = state_15945;
state_15945 = G__16022;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_15945){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_15945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___15993,mults,ensure_mult,p))
})();var state__5693__auto__ = (function (){var statearr_15992 = f__5692__auto__.call(null);(statearr_15992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___15993);
return statearr_15992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___15993,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5691__auto___16159 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___16159,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___16159,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16129){var state_val_16130 = (state_16129[1]);if((state_val_16130 === 7))
{var state_16129__$1 = state_16129;var statearr_16131_16160 = state_16129__$1;(statearr_16131_16160[2] = null);
(statearr_16131_16160[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16130 === 1))
{var state_16129__$1 = state_16129;var statearr_16132_16161 = state_16129__$1;(statearr_16132_16161[2] = null);
(statearr_16132_16161[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16130 === 4))
{var inst_16093 = (state_16129[7]);var inst_16095 = (inst_16093 < cnt);var state_16129__$1 = state_16129;if(cljs.core.truth_(inst_16095))
{var statearr_16133_16162 = state_16129__$1;(statearr_16133_16162[1] = 6);
} else
{var statearr_16134_16163 = state_16129__$1;(statearr_16134_16163[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16130 === 15))
{var inst_16125 = (state_16129[2]);var state_16129__$1 = state_16129;var statearr_16135_16164 = state_16129__$1;(statearr_16135_16164[2] = inst_16125);
(statearr_16135_16164[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16130 === 13))
{var inst_16118 = cljs.core.async.close_BANG_.call(null,out);var state_16129__$1 = state_16129;var statearr_16136_16165 = state_16129__$1;(statearr_16136_16165[2] = inst_16118);
(statearr_16136_16165[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16130 === 6))
{var state_16129__$1 = state_16129;var statearr_16137_16166 = state_16129__$1;(statearr_16137_16166[2] = null);
(statearr_16137_16166[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16130 === 3))
{var inst_16127 = (state_16129[2]);var state_16129__$1 = state_16129;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16129__$1,inst_16127);
} else
{if((state_val_16130 === 12))
{var inst_16115 = (state_16129[8]);var inst_16115__$1 = (state_16129[2]);var inst_16116 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16115__$1);var state_16129__$1 = (function (){var statearr_16138 = state_16129;(statearr_16138[8] = inst_16115__$1);
return statearr_16138;
})();if(cljs.core.truth_(inst_16116))
{var statearr_16139_16167 = state_16129__$1;(statearr_16139_16167[1] = 13);
} else
{var statearr_16140_16168 = state_16129__$1;(statearr_16140_16168[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16130 === 2))
{var inst_16092 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16093 = 0;var state_16129__$1 = (function (){var statearr_16141 = state_16129;(statearr_16141[9] = inst_16092);
(statearr_16141[7] = inst_16093);
return statearr_16141;
})();var statearr_16142_16169 = state_16129__$1;(statearr_16142_16169[2] = null);
(statearr_16142_16169[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16130 === 11))
{var inst_16093 = (state_16129[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16129,10,Object,null,9);var inst_16102 = chs__$1.call(null,inst_16093);var inst_16103 = done.call(null,inst_16093);var inst_16104 = cljs.core.async.take_BANG_.call(null,inst_16102,inst_16103);var state_16129__$1 = state_16129;var statearr_16143_16170 = state_16129__$1;(statearr_16143_16170[2] = inst_16104);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16129__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16130 === 9))
{var inst_16093 = (state_16129[7]);var inst_16106 = (state_16129[2]);var inst_16107 = (inst_16093 + 1);var inst_16093__$1 = inst_16107;var state_16129__$1 = (function (){var statearr_16144 = state_16129;(statearr_16144[7] = inst_16093__$1);
(statearr_16144[10] = inst_16106);
return statearr_16144;
})();var statearr_16145_16171 = state_16129__$1;(statearr_16145_16171[2] = null);
(statearr_16145_16171[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16130 === 5))
{var inst_16113 = (state_16129[2]);var state_16129__$1 = (function (){var statearr_16146 = state_16129;(statearr_16146[11] = inst_16113);
return statearr_16146;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16129__$1,12,dchan);
} else
{if((state_val_16130 === 14))
{var inst_16115 = (state_16129[8]);var inst_16120 = cljs.core.apply.call(null,f,inst_16115);var state_16129__$1 = state_16129;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16129__$1,16,out,inst_16120);
} else
{if((state_val_16130 === 16))
{var inst_16122 = (state_16129[2]);var state_16129__$1 = (function (){var statearr_16147 = state_16129;(statearr_16147[12] = inst_16122);
return statearr_16147;
})();var statearr_16148_16172 = state_16129__$1;(statearr_16148_16172[2] = null);
(statearr_16148_16172[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16130 === 10))
{var inst_16097 = (state_16129[2]);var inst_16098 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16129__$1 = (function (){var statearr_16149 = state_16129;(statearr_16149[13] = inst_16097);
return statearr_16149;
})();var statearr_16150_16173 = state_16129__$1;(statearr_16150_16173[2] = inst_16098);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16129__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16130 === 8))
{var inst_16111 = (state_16129[2]);var state_16129__$1 = state_16129;var statearr_16151_16174 = state_16129__$1;(statearr_16151_16174[2] = inst_16111);
(statearr_16151_16174[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___16159,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5676__auto__,c__5691__auto___16159,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_16155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16155[0] = state_machine__5677__auto__);
(statearr_16155[1] = 1);
return statearr_16155;
});
var state_machine__5677__auto____1 = (function (state_16129){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_16129);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e16156){if((e16156 instanceof Object))
{var ex__5680__auto__ = e16156;var statearr_16157_16175 = state_16129;(statearr_16157_16175[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16129);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16176 = state_16129;
state_16129 = G__16176;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_16129){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_16129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___16159,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5693__auto__ = (function (){var statearr_16158 = f__5692__auto__.call(null);(statearr_16158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___16159);
return statearr_16158;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___16159,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___16284 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___16284,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___16284,out){
return (function (state_16260){var state_val_16261 = (state_16260[1]);if((state_val_16261 === 7))
{var inst_16240 = (state_16260[7]);var inst_16239 = (state_16260[8]);var inst_16239__$1 = (state_16260[2]);var inst_16240__$1 = cljs.core.nth.call(null,inst_16239__$1,0,null);var inst_16241 = cljs.core.nth.call(null,inst_16239__$1,1,null);var inst_16242 = (inst_16240__$1 == null);var state_16260__$1 = (function (){var statearr_16262 = state_16260;(statearr_16262[7] = inst_16240__$1);
(statearr_16262[8] = inst_16239__$1);
(statearr_16262[9] = inst_16241);
return statearr_16262;
})();if(cljs.core.truth_(inst_16242))
{var statearr_16263_16285 = state_16260__$1;(statearr_16263_16285[1] = 8);
} else
{var statearr_16264_16286 = state_16260__$1;(statearr_16264_16286[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16261 === 1))
{var inst_16231 = cljs.core.vec.call(null,chs);var inst_16232 = inst_16231;var state_16260__$1 = (function (){var statearr_16265 = state_16260;(statearr_16265[10] = inst_16232);
return statearr_16265;
})();var statearr_16266_16287 = state_16260__$1;(statearr_16266_16287[2] = null);
(statearr_16266_16287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16261 === 4))
{var inst_16232 = (state_16260[10]);var state_16260__$1 = state_16260;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16260__$1,7,inst_16232);
} else
{if((state_val_16261 === 6))
{var inst_16256 = (state_16260[2]);var state_16260__$1 = state_16260;var statearr_16267_16288 = state_16260__$1;(statearr_16267_16288[2] = inst_16256);
(statearr_16267_16288[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16261 === 3))
{var inst_16258 = (state_16260[2]);var state_16260__$1 = state_16260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16260__$1,inst_16258);
} else
{if((state_val_16261 === 2))
{var inst_16232 = (state_16260[10]);var inst_16234 = cljs.core.count.call(null,inst_16232);var inst_16235 = (inst_16234 > 0);var state_16260__$1 = state_16260;if(cljs.core.truth_(inst_16235))
{var statearr_16269_16289 = state_16260__$1;(statearr_16269_16289[1] = 4);
} else
{var statearr_16270_16290 = state_16260__$1;(statearr_16270_16290[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16261 === 11))
{var inst_16232 = (state_16260[10]);var inst_16249 = (state_16260[2]);var tmp16268 = inst_16232;var inst_16232__$1 = tmp16268;var state_16260__$1 = (function (){var statearr_16271 = state_16260;(statearr_16271[10] = inst_16232__$1);
(statearr_16271[11] = inst_16249);
return statearr_16271;
})();var statearr_16272_16291 = state_16260__$1;(statearr_16272_16291[2] = null);
(statearr_16272_16291[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16261 === 9))
{var inst_16240 = (state_16260[7]);var state_16260__$1 = state_16260;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16260__$1,11,out,inst_16240);
} else
{if((state_val_16261 === 5))
{var inst_16254 = cljs.core.async.close_BANG_.call(null,out);var state_16260__$1 = state_16260;var statearr_16273_16292 = state_16260__$1;(statearr_16273_16292[2] = inst_16254);
(statearr_16273_16292[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16261 === 10))
{var inst_16252 = (state_16260[2]);var state_16260__$1 = state_16260;var statearr_16274_16293 = state_16260__$1;(statearr_16274_16293[2] = inst_16252);
(statearr_16274_16293[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16261 === 8))
{var inst_16240 = (state_16260[7]);var inst_16239 = (state_16260[8]);var inst_16232 = (state_16260[10]);var inst_16241 = (state_16260[9]);var inst_16244 = (function (){var c = inst_16241;var v = inst_16240;var vec__16237 = inst_16239;var cs = inst_16232;return ((function (c,v,vec__16237,cs,inst_16240,inst_16239,inst_16232,inst_16241,state_val_16261,c__5691__auto___16284,out){
return (function (p1__16177_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16177_SHARP_);
});
;})(c,v,vec__16237,cs,inst_16240,inst_16239,inst_16232,inst_16241,state_val_16261,c__5691__auto___16284,out))
})();var inst_16245 = cljs.core.filterv.call(null,inst_16244,inst_16232);var inst_16232__$1 = inst_16245;var state_16260__$1 = (function (){var statearr_16275 = state_16260;(statearr_16275[10] = inst_16232__$1);
return statearr_16275;
})();var statearr_16276_16294 = state_16260__$1;(statearr_16276_16294[2] = null);
(statearr_16276_16294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___16284,out))
;return ((function (switch__5676__auto__,c__5691__auto___16284,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_16280 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16280[0] = state_machine__5677__auto__);
(statearr_16280[1] = 1);
return statearr_16280;
});
var state_machine__5677__auto____1 = (function (state_16260){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_16260);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e16281){if((e16281 instanceof Object))
{var ex__5680__auto__ = e16281;var statearr_16282_16295 = state_16260;(statearr_16282_16295[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16260);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16281;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16296 = state_16260;
state_16260 = G__16296;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_16260){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_16260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___16284,out))
})();var state__5693__auto__ = (function (){var statearr_16283 = f__5692__auto__.call(null);(statearr_16283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___16284);
return statearr_16283;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___16284,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___16389 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___16389,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___16389,out){
return (function (state_16366){var state_val_16367 = (state_16366[1]);if((state_val_16367 === 7))
{var inst_16348 = (state_16366[7]);var inst_16348__$1 = (state_16366[2]);var inst_16349 = (inst_16348__$1 == null);var inst_16350 = cljs.core.not.call(null,inst_16349);var state_16366__$1 = (function (){var statearr_16368 = state_16366;(statearr_16368[7] = inst_16348__$1);
return statearr_16368;
})();if(inst_16350)
{var statearr_16369_16390 = state_16366__$1;(statearr_16369_16390[1] = 8);
} else
{var statearr_16370_16391 = state_16366__$1;(statearr_16370_16391[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 1))
{var inst_16343 = 0;var state_16366__$1 = (function (){var statearr_16371 = state_16366;(statearr_16371[8] = inst_16343);
return statearr_16371;
})();var statearr_16372_16392 = state_16366__$1;(statearr_16372_16392[2] = null);
(statearr_16372_16392[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 4))
{var state_16366__$1 = state_16366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16366__$1,7,ch);
} else
{if((state_val_16367 === 6))
{var inst_16361 = (state_16366[2]);var state_16366__$1 = state_16366;var statearr_16373_16393 = state_16366__$1;(statearr_16373_16393[2] = inst_16361);
(statearr_16373_16393[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 3))
{var inst_16363 = (state_16366[2]);var inst_16364 = cljs.core.async.close_BANG_.call(null,out);var state_16366__$1 = (function (){var statearr_16374 = state_16366;(statearr_16374[9] = inst_16363);
return statearr_16374;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16366__$1,inst_16364);
} else
{if((state_val_16367 === 2))
{var inst_16343 = (state_16366[8]);var inst_16345 = (inst_16343 < n);var state_16366__$1 = state_16366;if(cljs.core.truth_(inst_16345))
{var statearr_16375_16394 = state_16366__$1;(statearr_16375_16394[1] = 4);
} else
{var statearr_16376_16395 = state_16366__$1;(statearr_16376_16395[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 11))
{var inst_16343 = (state_16366[8]);var inst_16353 = (state_16366[2]);var inst_16354 = (inst_16343 + 1);var inst_16343__$1 = inst_16354;var state_16366__$1 = (function (){var statearr_16377 = state_16366;(statearr_16377[8] = inst_16343__$1);
(statearr_16377[10] = inst_16353);
return statearr_16377;
})();var statearr_16378_16396 = state_16366__$1;(statearr_16378_16396[2] = null);
(statearr_16378_16396[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 9))
{var state_16366__$1 = state_16366;var statearr_16379_16397 = state_16366__$1;(statearr_16379_16397[2] = null);
(statearr_16379_16397[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 5))
{var state_16366__$1 = state_16366;var statearr_16380_16398 = state_16366__$1;(statearr_16380_16398[2] = null);
(statearr_16380_16398[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 10))
{var inst_16358 = (state_16366[2]);var state_16366__$1 = state_16366;var statearr_16381_16399 = state_16366__$1;(statearr_16381_16399[2] = inst_16358);
(statearr_16381_16399[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 8))
{var inst_16348 = (state_16366[7]);var state_16366__$1 = state_16366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16366__$1,11,out,inst_16348);
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
});})(c__5691__auto___16389,out))
;return ((function (switch__5676__auto__,c__5691__auto___16389,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_16385 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16385[0] = state_machine__5677__auto__);
(statearr_16385[1] = 1);
return statearr_16385;
});
var state_machine__5677__auto____1 = (function (state_16366){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_16366);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e16386){if((e16386 instanceof Object))
{var ex__5680__auto__ = e16386;var statearr_16387_16400 = state_16366;(statearr_16387_16400[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16366);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16386;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16401 = state_16366;
state_16366 = G__16401;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_16366){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_16366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___16389,out))
})();var state__5693__auto__ = (function (){var statearr_16388 = f__5692__auto__.call(null);(statearr_16388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___16389);
return statearr_16388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___16389,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___16498 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___16498,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___16498,out){
return (function (state_16473){var state_val_16474 = (state_16473[1]);if((state_val_16474 === 7))
{var inst_16468 = (state_16473[2]);var state_16473__$1 = state_16473;var statearr_16475_16499 = state_16473__$1;(statearr_16475_16499[2] = inst_16468);
(statearr_16475_16499[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16474 === 1))
{var inst_16450 = null;var state_16473__$1 = (function (){var statearr_16476 = state_16473;(statearr_16476[7] = inst_16450);
return statearr_16476;
})();var statearr_16477_16500 = state_16473__$1;(statearr_16477_16500[2] = null);
(statearr_16477_16500[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16474 === 4))
{var inst_16453 = (state_16473[8]);var inst_16453__$1 = (state_16473[2]);var inst_16454 = (inst_16453__$1 == null);var inst_16455 = cljs.core.not.call(null,inst_16454);var state_16473__$1 = (function (){var statearr_16478 = state_16473;(statearr_16478[8] = inst_16453__$1);
return statearr_16478;
})();if(inst_16455)
{var statearr_16479_16501 = state_16473__$1;(statearr_16479_16501[1] = 5);
} else
{var statearr_16480_16502 = state_16473__$1;(statearr_16480_16502[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16474 === 6))
{var state_16473__$1 = state_16473;var statearr_16481_16503 = state_16473__$1;(statearr_16481_16503[2] = null);
(statearr_16481_16503[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16474 === 3))
{var inst_16470 = (state_16473[2]);var inst_16471 = cljs.core.async.close_BANG_.call(null,out);var state_16473__$1 = (function (){var statearr_16482 = state_16473;(statearr_16482[9] = inst_16470);
return statearr_16482;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16473__$1,inst_16471);
} else
{if((state_val_16474 === 2))
{var state_16473__$1 = state_16473;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16473__$1,4,ch);
} else
{if((state_val_16474 === 11))
{var inst_16453 = (state_16473[8]);var inst_16462 = (state_16473[2]);var inst_16450 = inst_16453;var state_16473__$1 = (function (){var statearr_16483 = state_16473;(statearr_16483[10] = inst_16462);
(statearr_16483[7] = inst_16450);
return statearr_16483;
})();var statearr_16484_16504 = state_16473__$1;(statearr_16484_16504[2] = null);
(statearr_16484_16504[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16474 === 9))
{var inst_16453 = (state_16473[8]);var state_16473__$1 = state_16473;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16473__$1,11,out,inst_16453);
} else
{if((state_val_16474 === 5))
{var inst_16450 = (state_16473[7]);var inst_16453 = (state_16473[8]);var inst_16457 = cljs.core._EQ_.call(null,inst_16453,inst_16450);var state_16473__$1 = state_16473;if(inst_16457)
{var statearr_16486_16505 = state_16473__$1;(statearr_16486_16505[1] = 8);
} else
{var statearr_16487_16506 = state_16473__$1;(statearr_16487_16506[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16474 === 10))
{var inst_16465 = (state_16473[2]);var state_16473__$1 = state_16473;var statearr_16488_16507 = state_16473__$1;(statearr_16488_16507[2] = inst_16465);
(statearr_16488_16507[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16474 === 8))
{var inst_16450 = (state_16473[7]);var tmp16485 = inst_16450;var inst_16450__$1 = tmp16485;var state_16473__$1 = (function (){var statearr_16489 = state_16473;(statearr_16489[7] = inst_16450__$1);
return statearr_16489;
})();var statearr_16490_16508 = state_16473__$1;(statearr_16490_16508[2] = null);
(statearr_16490_16508[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___16498,out))
;return ((function (switch__5676__auto__,c__5691__auto___16498,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_16494 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16494[0] = state_machine__5677__auto__);
(statearr_16494[1] = 1);
return statearr_16494;
});
var state_machine__5677__auto____1 = (function (state_16473){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_16473);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e16495){if((e16495 instanceof Object))
{var ex__5680__auto__ = e16495;var statearr_16496_16509 = state_16473;(statearr_16496_16509[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16473);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16495;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16510 = state_16473;
state_16473 = G__16510;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_16473){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_16473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___16498,out))
})();var state__5693__auto__ = (function (){var statearr_16497 = f__5692__auto__.call(null);(statearr_16497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___16498);
return statearr_16497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___16498,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___16645 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___16645,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___16645,out){
return (function (state_16615){var state_val_16616 = (state_16615[1]);if((state_val_16616 === 7))
{var inst_16611 = (state_16615[2]);var state_16615__$1 = state_16615;var statearr_16617_16646 = state_16615__$1;(statearr_16617_16646[2] = inst_16611);
(statearr_16617_16646[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16616 === 1))
{var inst_16578 = (new Array(n));var inst_16579 = inst_16578;var inst_16580 = 0;var state_16615__$1 = (function (){var statearr_16618 = state_16615;(statearr_16618[7] = inst_16579);
(statearr_16618[8] = inst_16580);
return statearr_16618;
})();var statearr_16619_16647 = state_16615__$1;(statearr_16619_16647[2] = null);
(statearr_16619_16647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16616 === 4))
{var inst_16583 = (state_16615[9]);var inst_16583__$1 = (state_16615[2]);var inst_16584 = (inst_16583__$1 == null);var inst_16585 = cljs.core.not.call(null,inst_16584);var state_16615__$1 = (function (){var statearr_16620 = state_16615;(statearr_16620[9] = inst_16583__$1);
return statearr_16620;
})();if(inst_16585)
{var statearr_16621_16648 = state_16615__$1;(statearr_16621_16648[1] = 5);
} else
{var statearr_16622_16649 = state_16615__$1;(statearr_16622_16649[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16616 === 15))
{var inst_16605 = (state_16615[2]);var state_16615__$1 = state_16615;var statearr_16623_16650 = state_16615__$1;(statearr_16623_16650[2] = inst_16605);
(statearr_16623_16650[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16616 === 13))
{var state_16615__$1 = state_16615;var statearr_16624_16651 = state_16615__$1;(statearr_16624_16651[2] = null);
(statearr_16624_16651[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16616 === 6))
{var inst_16580 = (state_16615[8]);var inst_16601 = (inst_16580 > 0);var state_16615__$1 = state_16615;if(cljs.core.truth_(inst_16601))
{var statearr_16625_16652 = state_16615__$1;(statearr_16625_16652[1] = 12);
} else
{var statearr_16626_16653 = state_16615__$1;(statearr_16626_16653[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16616 === 3))
{var inst_16613 = (state_16615[2]);var state_16615__$1 = state_16615;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16615__$1,inst_16613);
} else
{if((state_val_16616 === 12))
{var inst_16579 = (state_16615[7]);var inst_16603 = cljs.core.vec.call(null,inst_16579);var state_16615__$1 = state_16615;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16615__$1,15,out,inst_16603);
} else
{if((state_val_16616 === 2))
{var state_16615__$1 = state_16615;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16615__$1,4,ch);
} else
{if((state_val_16616 === 11))
{var inst_16595 = (state_16615[2]);var inst_16596 = (new Array(n));var inst_16579 = inst_16596;var inst_16580 = 0;var state_16615__$1 = (function (){var statearr_16627 = state_16615;(statearr_16627[7] = inst_16579);
(statearr_16627[10] = inst_16595);
(statearr_16627[8] = inst_16580);
return statearr_16627;
})();var statearr_16628_16654 = state_16615__$1;(statearr_16628_16654[2] = null);
(statearr_16628_16654[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16616 === 9))
{var inst_16579 = (state_16615[7]);var inst_16593 = cljs.core.vec.call(null,inst_16579);var state_16615__$1 = state_16615;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16615__$1,11,out,inst_16593);
} else
{if((state_val_16616 === 5))
{var inst_16579 = (state_16615[7]);var inst_16583 = (state_16615[9]);var inst_16580 = (state_16615[8]);var inst_16588 = (state_16615[11]);var inst_16587 = (inst_16579[inst_16580] = inst_16583);var inst_16588__$1 = (inst_16580 + 1);var inst_16589 = (inst_16588__$1 < n);var state_16615__$1 = (function (){var statearr_16629 = state_16615;(statearr_16629[12] = inst_16587);
(statearr_16629[11] = inst_16588__$1);
return statearr_16629;
})();if(cljs.core.truth_(inst_16589))
{var statearr_16630_16655 = state_16615__$1;(statearr_16630_16655[1] = 8);
} else
{var statearr_16631_16656 = state_16615__$1;(statearr_16631_16656[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16616 === 14))
{var inst_16608 = (state_16615[2]);var inst_16609 = cljs.core.async.close_BANG_.call(null,out);var state_16615__$1 = (function (){var statearr_16633 = state_16615;(statearr_16633[13] = inst_16608);
return statearr_16633;
})();var statearr_16634_16657 = state_16615__$1;(statearr_16634_16657[2] = inst_16609);
(statearr_16634_16657[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16616 === 10))
{var inst_16599 = (state_16615[2]);var state_16615__$1 = state_16615;var statearr_16635_16658 = state_16615__$1;(statearr_16635_16658[2] = inst_16599);
(statearr_16635_16658[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16616 === 8))
{var inst_16579 = (state_16615[7]);var inst_16588 = (state_16615[11]);var tmp16632 = inst_16579;var inst_16579__$1 = tmp16632;var inst_16580 = inst_16588;var state_16615__$1 = (function (){var statearr_16636 = state_16615;(statearr_16636[7] = inst_16579__$1);
(statearr_16636[8] = inst_16580);
return statearr_16636;
})();var statearr_16637_16659 = state_16615__$1;(statearr_16637_16659[2] = null);
(statearr_16637_16659[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___16645,out))
;return ((function (switch__5676__auto__,c__5691__auto___16645,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_16641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16641[0] = state_machine__5677__auto__);
(statearr_16641[1] = 1);
return statearr_16641;
});
var state_machine__5677__auto____1 = (function (state_16615){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_16615);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e16642){if((e16642 instanceof Object))
{var ex__5680__auto__ = e16642;var statearr_16643_16660 = state_16615;(statearr_16643_16660[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16615);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16642;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16661 = state_16615;
state_16615 = G__16661;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_16615){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_16615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___16645,out))
})();var state__5693__auto__ = (function (){var statearr_16644 = f__5692__auto__.call(null);(statearr_16644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___16645);
return statearr_16644;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___16645,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___16804 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___16804,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___16804,out){
return (function (state_16774){var state_val_16775 = (state_16774[1]);if((state_val_16775 === 7))
{var inst_16770 = (state_16774[2]);var state_16774__$1 = state_16774;var statearr_16776_16805 = state_16774__$1;(statearr_16776_16805[2] = inst_16770);
(statearr_16776_16805[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16775 === 1))
{var inst_16733 = [];var inst_16734 = inst_16733;var inst_16735 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16774__$1 = (function (){var statearr_16777 = state_16774;(statearr_16777[7] = inst_16735);
(statearr_16777[8] = inst_16734);
return statearr_16777;
})();var statearr_16778_16806 = state_16774__$1;(statearr_16778_16806[2] = null);
(statearr_16778_16806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16775 === 4))
{var inst_16738 = (state_16774[9]);var inst_16738__$1 = (state_16774[2]);var inst_16739 = (inst_16738__$1 == null);var inst_16740 = cljs.core.not.call(null,inst_16739);var state_16774__$1 = (function (){var statearr_16779 = state_16774;(statearr_16779[9] = inst_16738__$1);
return statearr_16779;
})();if(inst_16740)
{var statearr_16780_16807 = state_16774__$1;(statearr_16780_16807[1] = 5);
} else
{var statearr_16781_16808 = state_16774__$1;(statearr_16781_16808[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16775 === 15))
{var inst_16764 = (state_16774[2]);var state_16774__$1 = state_16774;var statearr_16782_16809 = state_16774__$1;(statearr_16782_16809[2] = inst_16764);
(statearr_16782_16809[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16775 === 13))
{var state_16774__$1 = state_16774;var statearr_16783_16810 = state_16774__$1;(statearr_16783_16810[2] = null);
(statearr_16783_16810[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16775 === 6))
{var inst_16734 = (state_16774[8]);var inst_16759 = inst_16734.length;var inst_16760 = (inst_16759 > 0);var state_16774__$1 = state_16774;if(cljs.core.truth_(inst_16760))
{var statearr_16784_16811 = state_16774__$1;(statearr_16784_16811[1] = 12);
} else
{var statearr_16785_16812 = state_16774__$1;(statearr_16785_16812[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16775 === 3))
{var inst_16772 = (state_16774[2]);var state_16774__$1 = state_16774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16774__$1,inst_16772);
} else
{if((state_val_16775 === 12))
{var inst_16734 = (state_16774[8]);var inst_16762 = cljs.core.vec.call(null,inst_16734);var state_16774__$1 = state_16774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16774__$1,15,out,inst_16762);
} else
{if((state_val_16775 === 2))
{var state_16774__$1 = state_16774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16774__$1,4,ch);
} else
{if((state_val_16775 === 11))
{var inst_16738 = (state_16774[9]);var inst_16742 = (state_16774[10]);var inst_16752 = (state_16774[2]);var inst_16753 = [];var inst_16754 = inst_16753.push(inst_16738);var inst_16734 = inst_16753;var inst_16735 = inst_16742;var state_16774__$1 = (function (){var statearr_16786 = state_16774;(statearr_16786[7] = inst_16735);
(statearr_16786[11] = inst_16754);
(statearr_16786[8] = inst_16734);
(statearr_16786[12] = inst_16752);
return statearr_16786;
})();var statearr_16787_16813 = state_16774__$1;(statearr_16787_16813[2] = null);
(statearr_16787_16813[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16775 === 9))
{var inst_16734 = (state_16774[8]);var inst_16750 = cljs.core.vec.call(null,inst_16734);var state_16774__$1 = state_16774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16774__$1,11,out,inst_16750);
} else
{if((state_val_16775 === 5))
{var inst_16735 = (state_16774[7]);var inst_16738 = (state_16774[9]);var inst_16742 = (state_16774[10]);var inst_16742__$1 = f.call(null,inst_16738);var inst_16743 = cljs.core._EQ_.call(null,inst_16742__$1,inst_16735);var inst_16744 = cljs.core.keyword_identical_QMARK_.call(null,inst_16735,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16745 = (inst_16743) || (inst_16744);var state_16774__$1 = (function (){var statearr_16788 = state_16774;(statearr_16788[10] = inst_16742__$1);
return statearr_16788;
})();if(cljs.core.truth_(inst_16745))
{var statearr_16789_16814 = state_16774__$1;(statearr_16789_16814[1] = 8);
} else
{var statearr_16790_16815 = state_16774__$1;(statearr_16790_16815[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16775 === 14))
{var inst_16767 = (state_16774[2]);var inst_16768 = cljs.core.async.close_BANG_.call(null,out);var state_16774__$1 = (function (){var statearr_16792 = state_16774;(statearr_16792[13] = inst_16767);
return statearr_16792;
})();var statearr_16793_16816 = state_16774__$1;(statearr_16793_16816[2] = inst_16768);
(statearr_16793_16816[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16775 === 10))
{var inst_16757 = (state_16774[2]);var state_16774__$1 = state_16774;var statearr_16794_16817 = state_16774__$1;(statearr_16794_16817[2] = inst_16757);
(statearr_16794_16817[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16775 === 8))
{var inst_16734 = (state_16774[8]);var inst_16738 = (state_16774[9]);var inst_16742 = (state_16774[10]);var inst_16747 = inst_16734.push(inst_16738);var tmp16791 = inst_16734;var inst_16734__$1 = tmp16791;var inst_16735 = inst_16742;var state_16774__$1 = (function (){var statearr_16795 = state_16774;(statearr_16795[7] = inst_16735);
(statearr_16795[8] = inst_16734__$1);
(statearr_16795[14] = inst_16747);
return statearr_16795;
})();var statearr_16796_16818 = state_16774__$1;(statearr_16796_16818[2] = null);
(statearr_16796_16818[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___16804,out))
;return ((function (switch__5676__auto__,c__5691__auto___16804,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_16800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16800[0] = state_machine__5677__auto__);
(statearr_16800[1] = 1);
return statearr_16800;
});
var state_machine__5677__auto____1 = (function (state_16774){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_16774);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e16801){if((e16801 instanceof Object))
{var ex__5680__auto__ = e16801;var statearr_16802_16819 = state_16774;(statearr_16802_16819[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16774);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16801;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16820 = state_16774;
state_16774 = G__16820;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_16774){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_16774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___16804,out))
})();var state__5693__auto__ = (function (){var statearr_16803 = f__5692__auto__.call(null);(statearr_16803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___16804);
return statearr_16803;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___16804,out))
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
