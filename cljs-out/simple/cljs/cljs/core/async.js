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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14276 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14276 = (function (f,fn_handler,meta14277){
this.f = f;
this.fn_handler = fn_handler;
this.meta14277 = meta14277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14276.cljs$lang$type = true;
cljs.core.async.t14276.cljs$lang$ctorStr = "cljs.core.async/t14276";
cljs.core.async.t14276.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t14276");
});
cljs.core.async.t14276.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14278){var self__ = this;
var _14278__$1 = this;return self__.meta14277;
});
cljs.core.async.t14276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14278,meta14277__$1){var self__ = this;
var _14278__$1 = this;return (new cljs.core.async.t14276(self__.f,self__.fn_handler,meta14277__$1));
});
cljs.core.async.__GT_t14276 = (function __GT_t14276(f__$1,fn_handler__$1,meta14277){return (new cljs.core.async.t14276(f__$1,fn_handler__$1,meta14277));
});
}
return (new cljs.core.async.t14276(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14280 = buff;if(G__14280)
{var bit__4189__auto__ = null;if(cljs.core.truth_((function (){var or__3539__auto__ = bit__4189__auto__;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return G__14280.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14280.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14280);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14280);
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
{var val_14281 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14281);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_14281,ret){
return (function (){return fn1.call(null,val_14281);
});})(val_14281,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3527__auto__ = ret;if(cljs.core.truth_(and__3527__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3527__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4395__auto___14282 = n;var x_14283 = 0;while(true){
if((x_14283 < n__4395__auto___14282))
{(a[x_14283] = 0);
{
var G__14284 = (x_14283 + 1);
x_14283 = G__14284;
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
var G__14285 = (i + 1);
i = G__14285;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14289 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14289 = (function (flag,alt_flag,meta14290){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14290 = meta14290;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14289.cljs$lang$type = true;
cljs.core.async.t14289.cljs$lang$ctorStr = "cljs.core.async/t14289";
cljs.core.async.t14289.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t14289");
});})(flag))
;
cljs.core.async.t14289.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14289.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t14289.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t14289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14291){var self__ = this;
var _14291__$1 = this;return self__.meta14290;
});})(flag))
;
cljs.core.async.t14289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14291,meta14290__$1){var self__ = this;
var _14291__$1 = this;return (new cljs.core.async.t14289(self__.flag,self__.alt_flag,meta14290__$1));
});})(flag))
;
cljs.core.async.__GT_t14289 = ((function (flag){
return (function __GT_t14289(flag__$1,alt_flag__$1,meta14290){return (new cljs.core.async.t14289(flag__$1,alt_flag__$1,meta14290));
});})(flag))
;
}
return (new cljs.core.async.t14289(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14295 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14295 = (function (cb,flag,alt_handler,meta14296){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14296 = meta14296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14295.cljs$lang$type = true;
cljs.core.async.t14295.cljs$lang$ctorStr = "cljs.core.async/t14295";
cljs.core.async.t14295.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t14295");
});
cljs.core.async.t14295.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14295.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14295.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14297){var self__ = this;
var _14297__$1 = this;return self__.meta14296;
});
cljs.core.async.t14295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14297,meta14296__$1){var self__ = this;
var _14297__$1 = this;return (new cljs.core.async.t14295(self__.cb,self__.flag,self__.alt_handler,meta14296__$1));
});
cljs.core.async.__GT_t14295 = (function __GT_t14295(cb__$1,flag__$1,alt_handler__$1,meta14296){return (new cljs.core.async.t14295(cb__$1,flag__$1,alt_handler__$1,meta14296));
});
}
return (new cljs.core.async.t14295(cb,flag,alt_handler,null));
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
return (function (p1__14298_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14298_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3539__auto__ = wport;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14299 = (i + 1);
i = G__14299;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3539__auto__ = ret;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__3527__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3527__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3527__auto__;
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
var alts_BANG___delegate = function (ports,p__14300){var map__14302 = p__14300;var map__14302__$1 = ((cljs.core.seq_QMARK_.call(null,map__14302))?cljs.core.apply.call(null,cljs.core.hash_map,map__14302):map__14302);var opts = map__14302__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14300 = null;if (arguments.length > 1) {
  p__14300 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14300);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14303){
var ports = cljs.core.first(arglist__14303);
var p__14300 = cljs.core.rest(arglist__14303);
return alts_BANG___delegate(ports,p__14300);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14311 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14311 = (function (ch,f,map_LT_,meta14312){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14312 = meta14312;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14311.cljs$lang$type = true;
cljs.core.async.t14311.cljs$lang$ctorStr = "cljs.core.async/t14311";
cljs.core.async.t14311.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t14311");
});
cljs.core.async.t14311.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14311.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14311.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14311.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14314 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14314 = (function (fn1,_,meta14312,ch,f,map_LT_,meta14315){
this.fn1 = fn1;
this._ = _;
this.meta14312 = meta14312;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14315 = meta14315;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14314.cljs$lang$type = true;
cljs.core.async.t14314.cljs$lang$ctorStr = "cljs.core.async/t14314";
cljs.core.async.t14314.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t14314");
});})(___$1))
;
cljs.core.async.t14314.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14314.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14314.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14314.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14304_SHARP_){return f1.call(null,(((p1__14304_SHARP_ == null))?null:self__.f.call(null,p1__14304_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14314.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14316){var self__ = this;
var _14316__$1 = this;return self__.meta14315;
});})(___$1))
;
cljs.core.async.t14314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14316,meta14315__$1){var self__ = this;
var _14316__$1 = this;return (new cljs.core.async.t14314(self__.fn1,self__._,self__.meta14312,self__.ch,self__.f,self__.map_LT_,meta14315__$1));
});})(___$1))
;
cljs.core.async.__GT_t14314 = ((function (___$1){
return (function __GT_t14314(fn1__$1,___$2,meta14312__$1,ch__$2,f__$2,map_LT___$2,meta14315){return (new cljs.core.async.t14314(fn1__$1,___$2,meta14312__$1,ch__$2,f__$2,map_LT___$2,meta14315));
});})(___$1))
;
}
return (new cljs.core.async.t14314(fn1,___$1,self__.meta14312,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3527__auto__ = ret;if(cljs.core.truth_(and__3527__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3527__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14311.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14311.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14313){var self__ = this;
var _14313__$1 = this;return self__.meta14312;
});
cljs.core.async.t14311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14313,meta14312__$1){var self__ = this;
var _14313__$1 = this;return (new cljs.core.async.t14311(self__.ch,self__.f,self__.map_LT_,meta14312__$1));
});
cljs.core.async.__GT_t14311 = (function __GT_t14311(ch__$1,f__$1,map_LT___$1,meta14312){return (new cljs.core.async.t14311(ch__$1,f__$1,map_LT___$1,meta14312));
});
}
return (new cljs.core.async.t14311(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14320 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14320 = (function (ch,f,map_GT_,meta14321){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14321 = meta14321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14320.cljs$lang$type = true;
cljs.core.async.t14320.cljs$lang$ctorStr = "cljs.core.async/t14320";
cljs.core.async.t14320.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t14320");
});
cljs.core.async.t14320.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14320.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
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
var _14322__$1 = this;return (new cljs.core.async.t14320(self__.ch,self__.f,self__.map_GT_,meta14321__$1));
});
cljs.core.async.__GT_t14320 = (function __GT_t14320(ch__$1,f__$1,map_GT___$1,meta14321){return (new cljs.core.async.t14320(ch__$1,f__$1,map_GT___$1,meta14321));
});
}
return (new cljs.core.async.t14320(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14326 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14326 = (function (ch,p,filter_GT_,meta14327){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14327 = meta14327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14326.cljs$lang$type = true;
cljs.core.async.t14326.cljs$lang$ctorStr = "cljs.core.async/t14326";
cljs.core.async.t14326.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t14326");
});
cljs.core.async.t14326.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14326.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14326.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14326.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14326.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14326.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14328){var self__ = this;
var _14328__$1 = this;return self__.meta14327;
});
cljs.core.async.t14326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14328,meta14327__$1){var self__ = this;
var _14328__$1 = this;return (new cljs.core.async.t14326(self__.ch,self__.p,self__.filter_GT_,meta14327__$1));
});
cljs.core.async.__GT_t14326 = (function __GT_t14326(ch__$1,p__$1,filter_GT___$1,meta14327){return (new cljs.core.async.t14326(ch__$1,p__$1,filter_GT___$1,meta14327));
});
}
return (new cljs.core.async.t14326(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___14411 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___14411,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___14411,out){
return (function (state_14390){var state_val_14391 = (state_14390[1]);if((state_val_14391 === 7))
{var inst_14386 = (state_14390[2]);var state_14390__$1 = state_14390;var statearr_14392_14412 = state_14390__$1;(statearr_14392_14412[2] = inst_14386);
(statearr_14392_14412[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14391 === 1))
{var state_14390__$1 = state_14390;var statearr_14393_14413 = state_14390__$1;(statearr_14393_14413[2] = null);
(statearr_14393_14413[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14391 === 4))
{var inst_14372 = (state_14390[7]);var inst_14372__$1 = (state_14390[2]);var inst_14373 = (inst_14372__$1 == null);var state_14390__$1 = (function (){var statearr_14394 = state_14390;(statearr_14394[7] = inst_14372__$1);
return statearr_14394;
})();if(cljs.core.truth_(inst_14373))
{var statearr_14395_14414 = state_14390__$1;(statearr_14395_14414[1] = 5);
} else
{var statearr_14396_14415 = state_14390__$1;(statearr_14396_14415[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14391 === 6))
{var inst_14372 = (state_14390[7]);var inst_14377 = p.call(null,inst_14372);var state_14390__$1 = state_14390;if(cljs.core.truth_(inst_14377))
{var statearr_14397_14416 = state_14390__$1;(statearr_14397_14416[1] = 8);
} else
{var statearr_14398_14417 = state_14390__$1;(statearr_14398_14417[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14391 === 3))
{var inst_14388 = (state_14390[2]);var state_14390__$1 = state_14390;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14390__$1,inst_14388);
} else
{if((state_val_14391 === 2))
{var state_14390__$1 = state_14390;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14390__$1,4,ch);
} else
{if((state_val_14391 === 11))
{var inst_14380 = (state_14390[2]);var state_14390__$1 = state_14390;var statearr_14399_14418 = state_14390__$1;(statearr_14399_14418[2] = inst_14380);
(statearr_14399_14418[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14391 === 9))
{var state_14390__$1 = state_14390;var statearr_14400_14419 = state_14390__$1;(statearr_14400_14419[2] = null);
(statearr_14400_14419[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14391 === 5))
{var inst_14375 = cljs.core.async.close_BANG_.call(null,out);var state_14390__$1 = state_14390;var statearr_14401_14420 = state_14390__$1;(statearr_14401_14420[2] = inst_14375);
(statearr_14401_14420[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14391 === 10))
{var inst_14383 = (state_14390[2]);var state_14390__$1 = (function (){var statearr_14402 = state_14390;(statearr_14402[8] = inst_14383);
return statearr_14402;
})();var statearr_14403_14421 = state_14390__$1;(statearr_14403_14421[2] = null);
(statearr_14403_14421[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14391 === 8))
{var inst_14372 = (state_14390[7]);var state_14390__$1 = state_14390;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14390__$1,11,out,inst_14372);
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
});})(c__5689__auto___14411,out))
;return ((function (switch__5674__auto__,c__5689__auto___14411,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_14407 = [null,null,null,null,null,null,null,null,null];(statearr_14407[0] = state_machine__5675__auto__);
(statearr_14407[1] = 1);
return statearr_14407;
});
var state_machine__5675__auto____1 = (function (state_14390){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_14390);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e14408){if((e14408 instanceof Object))
{var ex__5678__auto__ = e14408;var statearr_14409_14422 = state_14390;(statearr_14409_14422[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14390);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14408;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14423 = state_14390;
state_14390 = G__14423;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_14390){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_14390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___14411,out))
})();var state__5691__auto__ = (function (){var statearr_14410 = f__5690__auto__.call(null);(statearr_14410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___14411);
return statearr_14410;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___14411,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_14575){var state_val_14576 = (state_14575[1]);if((state_val_14576 === 7))
{var inst_14571 = (state_14575[2]);var state_14575__$1 = state_14575;var statearr_14577_14614 = state_14575__$1;(statearr_14577_14614[2] = inst_14571);
(statearr_14577_14614[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14576 === 20))
{var inst_14546 = (state_14575[7]);var inst_14557 = (state_14575[2]);var inst_14558 = cljs.core.next.call(null,inst_14546);var inst_14532 = inst_14558;var inst_14533 = null;var inst_14534 = 0;var inst_14535 = 0;var state_14575__$1 = (function (){var statearr_14578 = state_14575;(statearr_14578[8] = inst_14532);
(statearr_14578[9] = inst_14533);
(statearr_14578[10] = inst_14557);
(statearr_14578[11] = inst_14535);
(statearr_14578[12] = inst_14534);
return statearr_14578;
})();var statearr_14579_14615 = state_14575__$1;(statearr_14579_14615[2] = null);
(statearr_14579_14615[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14576 === 1))
{var state_14575__$1 = state_14575;var statearr_14580_14616 = state_14575__$1;(statearr_14580_14616[2] = null);
(statearr_14580_14616[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14576 === 4))
{var inst_14521 = (state_14575[13]);var inst_14521__$1 = (state_14575[2]);var inst_14522 = (inst_14521__$1 == null);var state_14575__$1 = (function (){var statearr_14584 = state_14575;(statearr_14584[13] = inst_14521__$1);
return statearr_14584;
})();if(cljs.core.truth_(inst_14522))
{var statearr_14585_14617 = state_14575__$1;(statearr_14585_14617[1] = 5);
} else
{var statearr_14586_14618 = state_14575__$1;(statearr_14586_14618[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14576 === 15))
{var state_14575__$1 = state_14575;var statearr_14587_14619 = state_14575__$1;(statearr_14587_14619[2] = null);
(statearr_14587_14619[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14576 === 13))
{var inst_14532 = (state_14575[8]);var inst_14533 = (state_14575[9]);var inst_14535 = (state_14575[11]);var inst_14534 = (state_14575[12]);var inst_14542 = (state_14575[2]);var inst_14543 = (inst_14535 + 1);var tmp14581 = inst_14532;var tmp14582 = inst_14533;var tmp14583 = inst_14534;var inst_14532__$1 = tmp14581;var inst_14533__$1 = tmp14582;var inst_14534__$1 = tmp14583;var inst_14535__$1 = inst_14543;var state_14575__$1 = (function (){var statearr_14588 = state_14575;(statearr_14588[8] = inst_14532__$1);
(statearr_14588[9] = inst_14533__$1);
(statearr_14588[14] = inst_14542);
(statearr_14588[11] = inst_14535__$1);
(statearr_14588[12] = inst_14534__$1);
return statearr_14588;
})();var statearr_14589_14620 = state_14575__$1;(statearr_14589_14620[2] = null);
(statearr_14589_14620[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14576 === 6))
{var inst_14521 = (state_14575[13]);var inst_14526 = f.call(null,inst_14521);var inst_14531 = cljs.core.seq.call(null,inst_14526);var inst_14532 = inst_14531;var inst_14533 = null;var inst_14534 = 0;var inst_14535 = 0;var state_14575__$1 = (function (){var statearr_14590 = state_14575;(statearr_14590[8] = inst_14532);
(statearr_14590[9] = inst_14533);
(statearr_14590[11] = inst_14535);
(statearr_14590[12] = inst_14534);
return statearr_14590;
})();var statearr_14591_14621 = state_14575__$1;(statearr_14591_14621[2] = null);
(statearr_14591_14621[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14576 === 17))
{var inst_14546 = (state_14575[7]);var inst_14550 = cljs.core.chunk_first.call(null,inst_14546);var inst_14551 = cljs.core.chunk_rest.call(null,inst_14546);var inst_14552 = cljs.core.count.call(null,inst_14550);var inst_14532 = inst_14551;var inst_14533 = inst_14550;var inst_14534 = inst_14552;var inst_14535 = 0;var state_14575__$1 = (function (){var statearr_14592 = state_14575;(statearr_14592[8] = inst_14532);
(statearr_14592[9] = inst_14533);
(statearr_14592[11] = inst_14535);
(statearr_14592[12] = inst_14534);
return statearr_14592;
})();var statearr_14593_14622 = state_14575__$1;(statearr_14593_14622[2] = null);
(statearr_14593_14622[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14576 === 3))
{var inst_14573 = (state_14575[2]);var state_14575__$1 = state_14575;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14575__$1,inst_14573);
} else
{if((state_val_14576 === 12))
{var inst_14566 = (state_14575[2]);var state_14575__$1 = state_14575;var statearr_14594_14623 = state_14575__$1;(statearr_14594_14623[2] = inst_14566);
(statearr_14594_14623[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14576 === 2))
{var state_14575__$1 = state_14575;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14575__$1,4,in$);
} else
{if((state_val_14576 === 19))
{var inst_14561 = (state_14575[2]);var state_14575__$1 = state_14575;var statearr_14595_14624 = state_14575__$1;(statearr_14595_14624[2] = inst_14561);
(statearr_14595_14624[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14576 === 11))
{var inst_14532 = (state_14575[8]);var inst_14546 = (state_14575[7]);var inst_14546__$1 = cljs.core.seq.call(null,inst_14532);var state_14575__$1 = (function (){var statearr_14596 = state_14575;(statearr_14596[7] = inst_14546__$1);
return statearr_14596;
})();if(inst_14546__$1)
{var statearr_14597_14625 = state_14575__$1;(statearr_14597_14625[1] = 14);
} else
{var statearr_14598_14626 = state_14575__$1;(statearr_14598_14626[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14576 === 9))
{var inst_14568 = (state_14575[2]);var state_14575__$1 = (function (){var statearr_14599 = state_14575;(statearr_14599[15] = inst_14568);
return statearr_14599;
})();var statearr_14600_14627 = state_14575__$1;(statearr_14600_14627[2] = null);
(statearr_14600_14627[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14576 === 5))
{var inst_14524 = cljs.core.async.close_BANG_.call(null,out);var state_14575__$1 = state_14575;var statearr_14601_14628 = state_14575__$1;(statearr_14601_14628[2] = inst_14524);
(statearr_14601_14628[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14576 === 14))
{var inst_14546 = (state_14575[7]);var inst_14548 = cljs.core.chunked_seq_QMARK_.call(null,inst_14546);var state_14575__$1 = state_14575;if(inst_14548)
{var statearr_14602_14629 = state_14575__$1;(statearr_14602_14629[1] = 17);
} else
{var statearr_14603_14630 = state_14575__$1;(statearr_14603_14630[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14576 === 16))
{var inst_14564 = (state_14575[2]);var state_14575__$1 = state_14575;var statearr_14604_14631 = state_14575__$1;(statearr_14604_14631[2] = inst_14564);
(statearr_14604_14631[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14576 === 10))
{var inst_14533 = (state_14575[9]);var inst_14535 = (state_14575[11]);var inst_14540 = cljs.core._nth.call(null,inst_14533,inst_14535);var state_14575__$1 = state_14575;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14575__$1,13,out,inst_14540);
} else
{if((state_val_14576 === 18))
{var inst_14546 = (state_14575[7]);var inst_14555 = cljs.core.first.call(null,inst_14546);var state_14575__$1 = state_14575;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14575__$1,20,out,inst_14555);
} else
{if((state_val_14576 === 8))
{var inst_14535 = (state_14575[11]);var inst_14534 = (state_14575[12]);var inst_14537 = (inst_14535 < inst_14534);var inst_14538 = inst_14537;var state_14575__$1 = state_14575;if(cljs.core.truth_(inst_14538))
{var statearr_14605_14632 = state_14575__$1;(statearr_14605_14632[1] = 10);
} else
{var statearr_14606_14633 = state_14575__$1;(statearr_14606_14633[1] = 11);
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_14610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14610[0] = state_machine__5675__auto__);
(statearr_14610[1] = 1);
return statearr_14610;
});
var state_machine__5675__auto____1 = (function (state_14575){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_14575);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e14611){if((e14611 instanceof Object))
{var ex__5678__auto__ = e14611;var statearr_14612_14634 = state_14575;(statearr_14612_14634[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14575);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14635 = state_14575;
state_14575 = G__14635;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_14575){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_14575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_14613 = f__5690__auto__.call(null);(statearr_14613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_14613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5689__auto___14716 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___14716){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___14716){
return (function (state_14695){var state_val_14696 = (state_14695[1]);if((state_val_14696 === 7))
{var inst_14691 = (state_14695[2]);var state_14695__$1 = state_14695;var statearr_14697_14717 = state_14695__$1;(statearr_14697_14717[2] = inst_14691);
(statearr_14697_14717[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14696 === 1))
{var state_14695__$1 = state_14695;var statearr_14698_14718 = state_14695__$1;(statearr_14698_14718[2] = null);
(statearr_14698_14718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14696 === 4))
{var inst_14678 = (state_14695[7]);var inst_14678__$1 = (state_14695[2]);var inst_14679 = (inst_14678__$1 == null);var state_14695__$1 = (function (){var statearr_14699 = state_14695;(statearr_14699[7] = inst_14678__$1);
return statearr_14699;
})();if(cljs.core.truth_(inst_14679))
{var statearr_14700_14719 = state_14695__$1;(statearr_14700_14719[1] = 5);
} else
{var statearr_14701_14720 = state_14695__$1;(statearr_14701_14720[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14696 === 6))
{var inst_14678 = (state_14695[7]);var state_14695__$1 = state_14695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14695__$1,11,to,inst_14678);
} else
{if((state_val_14696 === 3))
{var inst_14693 = (state_14695[2]);var state_14695__$1 = state_14695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14695__$1,inst_14693);
} else
{if((state_val_14696 === 2))
{var state_14695__$1 = state_14695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14695__$1,4,from);
} else
{if((state_val_14696 === 11))
{var inst_14688 = (state_14695[2]);var state_14695__$1 = (function (){var statearr_14702 = state_14695;(statearr_14702[8] = inst_14688);
return statearr_14702;
})();var statearr_14703_14721 = state_14695__$1;(statearr_14703_14721[2] = null);
(statearr_14703_14721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14696 === 9))
{var state_14695__$1 = state_14695;var statearr_14704_14722 = state_14695__$1;(statearr_14704_14722[2] = null);
(statearr_14704_14722[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14696 === 5))
{var state_14695__$1 = state_14695;if(cljs.core.truth_(close_QMARK_))
{var statearr_14705_14723 = state_14695__$1;(statearr_14705_14723[1] = 8);
} else
{var statearr_14706_14724 = state_14695__$1;(statearr_14706_14724[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14696 === 10))
{var inst_14685 = (state_14695[2]);var state_14695__$1 = state_14695;var statearr_14707_14725 = state_14695__$1;(statearr_14707_14725[2] = inst_14685);
(statearr_14707_14725[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14696 === 8))
{var inst_14682 = cljs.core.async.close_BANG_.call(null,to);var state_14695__$1 = state_14695;var statearr_14708_14726 = state_14695__$1;(statearr_14708_14726[2] = inst_14682);
(statearr_14708_14726[1] = 10);
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
});})(c__5689__auto___14716))
;return ((function (switch__5674__auto__,c__5689__auto___14716){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_14712 = [null,null,null,null,null,null,null,null,null];(statearr_14712[0] = state_machine__5675__auto__);
(statearr_14712[1] = 1);
return statearr_14712;
});
var state_machine__5675__auto____1 = (function (state_14695){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_14695);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e14713){if((e14713 instanceof Object))
{var ex__5678__auto__ = e14713;var statearr_14714_14727 = state_14695;(statearr_14714_14727[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14695);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14713;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14728 = state_14695;
state_14695 = G__14728;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_14695){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_14695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___14716))
})();var state__5691__auto__ = (function (){var statearr_14715 = f__5690__auto__.call(null);(statearr_14715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___14716);
return statearr_14715;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___14716))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5689__auto___14815 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___14815,tc,fc){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___14815,tc,fc){
return (function (state_14793){var state_val_14794 = (state_14793[1]);if((state_val_14794 === 7))
{var inst_14789 = (state_14793[2]);var state_14793__$1 = state_14793;var statearr_14795_14816 = state_14793__$1;(statearr_14795_14816[2] = inst_14789);
(statearr_14795_14816[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14794 === 1))
{var state_14793__$1 = state_14793;var statearr_14796_14817 = state_14793__$1;(statearr_14796_14817[2] = null);
(statearr_14796_14817[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14794 === 4))
{var inst_14774 = (state_14793[7]);var inst_14774__$1 = (state_14793[2]);var inst_14775 = (inst_14774__$1 == null);var state_14793__$1 = (function (){var statearr_14797 = state_14793;(statearr_14797[7] = inst_14774__$1);
return statearr_14797;
})();if(cljs.core.truth_(inst_14775))
{var statearr_14798_14818 = state_14793__$1;(statearr_14798_14818[1] = 5);
} else
{var statearr_14799_14819 = state_14793__$1;(statearr_14799_14819[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14794 === 6))
{var inst_14774 = (state_14793[7]);var inst_14780 = p.call(null,inst_14774);var state_14793__$1 = state_14793;if(cljs.core.truth_(inst_14780))
{var statearr_14800_14820 = state_14793__$1;(statearr_14800_14820[1] = 9);
} else
{var statearr_14801_14821 = state_14793__$1;(statearr_14801_14821[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14794 === 3))
{var inst_14791 = (state_14793[2]);var state_14793__$1 = state_14793;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14793__$1,inst_14791);
} else
{if((state_val_14794 === 2))
{var state_14793__$1 = state_14793;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14793__$1,4,ch);
} else
{if((state_val_14794 === 11))
{var inst_14774 = (state_14793[7]);var inst_14784 = (state_14793[2]);var state_14793__$1 = state_14793;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14793__$1,8,inst_14784,inst_14774);
} else
{if((state_val_14794 === 9))
{var state_14793__$1 = state_14793;var statearr_14802_14822 = state_14793__$1;(statearr_14802_14822[2] = tc);
(statearr_14802_14822[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14794 === 5))
{var inst_14777 = cljs.core.async.close_BANG_.call(null,tc);var inst_14778 = cljs.core.async.close_BANG_.call(null,fc);var state_14793__$1 = (function (){var statearr_14803 = state_14793;(statearr_14803[8] = inst_14777);
return statearr_14803;
})();var statearr_14804_14823 = state_14793__$1;(statearr_14804_14823[2] = inst_14778);
(statearr_14804_14823[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14794 === 10))
{var state_14793__$1 = state_14793;var statearr_14805_14824 = state_14793__$1;(statearr_14805_14824[2] = fc);
(statearr_14805_14824[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14794 === 8))
{var inst_14786 = (state_14793[2]);var state_14793__$1 = (function (){var statearr_14806 = state_14793;(statearr_14806[9] = inst_14786);
return statearr_14806;
})();var statearr_14807_14825 = state_14793__$1;(statearr_14807_14825[2] = null);
(statearr_14807_14825[1] = 2);
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
});})(c__5689__auto___14815,tc,fc))
;return ((function (switch__5674__auto__,c__5689__auto___14815,tc,fc){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_14811 = [null,null,null,null,null,null,null,null,null,null];(statearr_14811[0] = state_machine__5675__auto__);
(statearr_14811[1] = 1);
return statearr_14811;
});
var state_machine__5675__auto____1 = (function (state_14793){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_14793);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e14812){if((e14812 instanceof Object))
{var ex__5678__auto__ = e14812;var statearr_14813_14826 = state_14793;(statearr_14813_14826[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14793);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14812;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14827 = state_14793;
state_14793 = G__14827;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_14793){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_14793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___14815,tc,fc))
})();var state__5691__auto__ = (function (){var statearr_14814 = f__5690__auto__.call(null);(statearr_14814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___14815);
return statearr_14814;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___14815,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_14874){var state_val_14875 = (state_14874[1]);if((state_val_14875 === 7))
{var inst_14870 = (state_14874[2]);var state_14874__$1 = state_14874;var statearr_14876_14892 = state_14874__$1;(statearr_14876_14892[2] = inst_14870);
(statearr_14876_14892[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14875 === 6))
{var inst_14860 = (state_14874[7]);var inst_14863 = (state_14874[8]);var inst_14867 = f.call(null,inst_14860,inst_14863);var inst_14860__$1 = inst_14867;var state_14874__$1 = (function (){var statearr_14877 = state_14874;(statearr_14877[7] = inst_14860__$1);
return statearr_14877;
})();var statearr_14878_14893 = state_14874__$1;(statearr_14878_14893[2] = null);
(statearr_14878_14893[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14875 === 5))
{var inst_14860 = (state_14874[7]);var state_14874__$1 = state_14874;var statearr_14879_14894 = state_14874__$1;(statearr_14879_14894[2] = inst_14860);
(statearr_14879_14894[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14875 === 4))
{var inst_14863 = (state_14874[8]);var inst_14863__$1 = (state_14874[2]);var inst_14864 = (inst_14863__$1 == null);var state_14874__$1 = (function (){var statearr_14880 = state_14874;(statearr_14880[8] = inst_14863__$1);
return statearr_14880;
})();if(cljs.core.truth_(inst_14864))
{var statearr_14881_14895 = state_14874__$1;(statearr_14881_14895[1] = 5);
} else
{var statearr_14882_14896 = state_14874__$1;(statearr_14882_14896[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14875 === 3))
{var inst_14872 = (state_14874[2]);var state_14874__$1 = state_14874;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14874__$1,inst_14872);
} else
{if((state_val_14875 === 2))
{var state_14874__$1 = state_14874;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14874__$1,4,ch);
} else
{if((state_val_14875 === 1))
{var inst_14860 = init;var state_14874__$1 = (function (){var statearr_14883 = state_14874;(statearr_14883[7] = inst_14860);
return statearr_14883;
})();var statearr_14884_14897 = state_14874__$1;(statearr_14884_14897[2] = null);
(statearr_14884_14897[1] = 2);
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_14888 = [null,null,null,null,null,null,null,null,null];(statearr_14888[0] = state_machine__5675__auto__);
(statearr_14888[1] = 1);
return statearr_14888;
});
var state_machine__5675__auto____1 = (function (state_14874){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_14874);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e14889){if((e14889 instanceof Object))
{var ex__5678__auto__ = e14889;var statearr_14890_14898 = state_14874;(statearr_14890_14898[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14874);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14889;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14899 = state_14874;
state_14874 = G__14899;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_14874){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_14874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_14891 = f__5690__auto__.call(null);(statearr_14891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_14891;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_14961){var state_val_14962 = (state_14961[1]);if((state_val_14962 === 7))
{var inst_14942 = (state_14961[7]);var inst_14947 = (state_14961[2]);var inst_14948 = cljs.core.next.call(null,inst_14942);var inst_14942__$1 = inst_14948;var state_14961__$1 = (function (){var statearr_14963 = state_14961;(statearr_14963[8] = inst_14947);
(statearr_14963[7] = inst_14942__$1);
return statearr_14963;
})();var statearr_14964_14982 = state_14961__$1;(statearr_14964_14982[2] = null);
(statearr_14964_14982[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14962 === 1))
{var inst_14941 = cljs.core.seq.call(null,coll);var inst_14942 = inst_14941;var state_14961__$1 = (function (){var statearr_14965 = state_14961;(statearr_14965[7] = inst_14942);
return statearr_14965;
})();var statearr_14966_14983 = state_14961__$1;(statearr_14966_14983[2] = null);
(statearr_14966_14983[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14962 === 4))
{var inst_14942 = (state_14961[7]);var inst_14945 = cljs.core.first.call(null,inst_14942);var state_14961__$1 = state_14961;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14961__$1,7,ch,inst_14945);
} else
{if((state_val_14962 === 6))
{var inst_14957 = (state_14961[2]);var state_14961__$1 = state_14961;var statearr_14967_14984 = state_14961__$1;(statearr_14967_14984[2] = inst_14957);
(statearr_14967_14984[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14962 === 3))
{var inst_14959 = (state_14961[2]);var state_14961__$1 = state_14961;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14961__$1,inst_14959);
} else
{if((state_val_14962 === 2))
{var inst_14942 = (state_14961[7]);var state_14961__$1 = state_14961;if(cljs.core.truth_(inst_14942))
{var statearr_14968_14985 = state_14961__$1;(statearr_14968_14985[1] = 4);
} else
{var statearr_14969_14986 = state_14961__$1;(statearr_14969_14986[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14962 === 9))
{var state_14961__$1 = state_14961;var statearr_14970_14987 = state_14961__$1;(statearr_14970_14987[2] = null);
(statearr_14970_14987[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14962 === 5))
{var state_14961__$1 = state_14961;if(cljs.core.truth_(close_QMARK_))
{var statearr_14971_14988 = state_14961__$1;(statearr_14971_14988[1] = 8);
} else
{var statearr_14972_14989 = state_14961__$1;(statearr_14972_14989[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14962 === 10))
{var inst_14955 = (state_14961[2]);var state_14961__$1 = state_14961;var statearr_14973_14990 = state_14961__$1;(statearr_14973_14990[2] = inst_14955);
(statearr_14973_14990[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14962 === 8))
{var inst_14952 = cljs.core.async.close_BANG_.call(null,ch);var state_14961__$1 = state_14961;var statearr_14974_14991 = state_14961__$1;(statearr_14974_14991[2] = inst_14952);
(statearr_14974_14991[1] = 10);
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_14978 = [null,null,null,null,null,null,null,null,null];(statearr_14978[0] = state_machine__5675__auto__);
(statearr_14978[1] = 1);
return statearr_14978;
});
var state_machine__5675__auto____1 = (function (state_14961){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_14961);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e14979){if((e14979 instanceof Object))
{var ex__5678__auto__ = e14979;var statearr_14980_14992 = state_14961;(statearr_14980_14992[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14961);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14979;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14993 = state_14961;
state_14961 = G__14993;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_14961){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_14961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_14981 = f__5690__auto__.call(null);(statearr_14981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_14981;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
cljs.core.async.Mux = (function (){var obj14995 = {};return obj14995;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3527__auto__ = _;if(and__3527__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4166__auto__ = (((_ == null))?null:_);return (function (){var or__3539__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14997 = {};return obj14997;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15221 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15221 = (function (cs,ch,mult,meta15222){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15222 = meta15222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15221.cljs$lang$type = true;
cljs.core.async.t15221.cljs$lang$ctorStr = "cljs.core.async/t15221";
cljs.core.async.t15221.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t15221");
});})(cs))
;
cljs.core.async.t15221.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15221.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15221.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15221.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15221.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15221.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15223){var self__ = this;
var _15223__$1 = this;return self__.meta15222;
});})(cs))
;
cljs.core.async.t15221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15223,meta15222__$1){var self__ = this;
var _15223__$1 = this;return (new cljs.core.async.t15221(self__.cs,self__.ch,self__.mult,meta15222__$1));
});})(cs))
;
cljs.core.async.__GT_t15221 = ((function (cs){
return (function __GT_t15221(cs__$1,ch__$1,mult__$1,meta15222){return (new cljs.core.async.t15221(cs__$1,ch__$1,mult__$1,meta15222));
});})(cs))
;
}
return (new cljs.core.async.t15221(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5689__auto___15444 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___15444,cs,m,dchan,dctr,done){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___15444,cs,m,dchan,dctr,done){
return (function (state_15358){var state_val_15359 = (state_15358[1]);if((state_val_15359 === 7))
{var inst_15354 = (state_15358[2]);var state_15358__$1 = state_15358;var statearr_15360_15445 = state_15358__$1;(statearr_15360_15445[2] = inst_15354);
(statearr_15360_15445[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 20))
{var inst_15255 = (state_15358[7]);var inst_15265 = cljs.core.first.call(null,inst_15255);var inst_15266 = cljs.core.nth.call(null,inst_15265,0,null);var inst_15267 = cljs.core.nth.call(null,inst_15265,1,null);var state_15358__$1 = (function (){var statearr_15361 = state_15358;(statearr_15361[8] = inst_15266);
return statearr_15361;
})();if(cljs.core.truth_(inst_15267))
{var statearr_15362_15446 = state_15358__$1;(statearr_15362_15446[1] = 22);
} else
{var statearr_15363_15447 = state_15358__$1;(statearr_15363_15447[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 27))
{var inst_15297 = (state_15358[9]);var inst_15295 = (state_15358[10]);var inst_15302 = cljs.core._nth.call(null,inst_15295,inst_15297);var state_15358__$1 = (function (){var statearr_15364 = state_15358;(statearr_15364[11] = inst_15302);
return statearr_15364;
})();var statearr_15365_15448 = state_15358__$1;(statearr_15365_15448[2] = null);
(statearr_15365_15448[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 1))
{var state_15358__$1 = state_15358;var statearr_15366_15449 = state_15358__$1;(statearr_15366_15449[2] = null);
(statearr_15366_15449[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 24))
{var inst_15255 = (state_15358[7]);var inst_15272 = (state_15358[2]);var inst_15273 = cljs.core.next.call(null,inst_15255);var inst_15235 = inst_15273;var inst_15236 = null;var inst_15237 = 0;var inst_15238 = 0;var state_15358__$1 = (function (){var statearr_15367 = state_15358;(statearr_15367[12] = inst_15272);
(statearr_15367[13] = inst_15238);
(statearr_15367[14] = inst_15237);
(statearr_15367[15] = inst_15236);
(statearr_15367[16] = inst_15235);
return statearr_15367;
})();var statearr_15368_15450 = state_15358__$1;(statearr_15368_15450[2] = null);
(statearr_15368_15450[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 39))
{var inst_15315 = (state_15358[17]);var inst_15333 = (state_15358[2]);var inst_15334 = cljs.core.next.call(null,inst_15315);var inst_15294 = inst_15334;var inst_15295 = null;var inst_15296 = 0;var inst_15297 = 0;var state_15358__$1 = (function (){var statearr_15372 = state_15358;(statearr_15372[18] = inst_15333);
(statearr_15372[9] = inst_15297);
(statearr_15372[10] = inst_15295);
(statearr_15372[19] = inst_15296);
(statearr_15372[20] = inst_15294);
return statearr_15372;
})();var statearr_15373_15451 = state_15358__$1;(statearr_15373_15451[2] = null);
(statearr_15373_15451[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 4))
{var inst_15226 = (state_15358[21]);var inst_15226__$1 = (state_15358[2]);var inst_15227 = (inst_15226__$1 == null);var state_15358__$1 = (function (){var statearr_15374 = state_15358;(statearr_15374[21] = inst_15226__$1);
return statearr_15374;
})();if(cljs.core.truth_(inst_15227))
{var statearr_15375_15452 = state_15358__$1;(statearr_15375_15452[1] = 5);
} else
{var statearr_15376_15453 = state_15358__$1;(statearr_15376_15453[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 15))
{var inst_15238 = (state_15358[13]);var inst_15237 = (state_15358[14]);var inst_15236 = (state_15358[15]);var inst_15235 = (state_15358[16]);var inst_15251 = (state_15358[2]);var inst_15252 = (inst_15238 + 1);var tmp15369 = inst_15237;var tmp15370 = inst_15236;var tmp15371 = inst_15235;var inst_15235__$1 = tmp15371;var inst_15236__$1 = tmp15370;var inst_15237__$1 = tmp15369;var inst_15238__$1 = inst_15252;var state_15358__$1 = (function (){var statearr_15377 = state_15358;(statearr_15377[13] = inst_15238__$1);
(statearr_15377[22] = inst_15251);
(statearr_15377[14] = inst_15237__$1);
(statearr_15377[15] = inst_15236__$1);
(statearr_15377[16] = inst_15235__$1);
return statearr_15377;
})();var statearr_15378_15454 = state_15358__$1;(statearr_15378_15454[2] = null);
(statearr_15378_15454[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 21))
{var inst_15276 = (state_15358[2]);var state_15358__$1 = state_15358;var statearr_15379_15455 = state_15358__$1;(statearr_15379_15455[2] = inst_15276);
(statearr_15379_15455[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 31))
{var inst_15302 = (state_15358[11]);var inst_15303 = (state_15358[2]);var inst_15304 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15305 = cljs.core.async.untap_STAR_.call(null,m,inst_15302);var state_15358__$1 = (function (){var statearr_15380 = state_15358;(statearr_15380[23] = inst_15304);
(statearr_15380[24] = inst_15303);
return statearr_15380;
})();var statearr_15381_15456 = state_15358__$1;(statearr_15381_15456[2] = inst_15305);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15358__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 32))
{var inst_15302 = (state_15358[11]);var inst_15226 = (state_15358[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15358,31,Object,null,30);var inst_15309 = cljs.core.async.put_BANG_.call(null,inst_15302,inst_15226,done);var state_15358__$1 = state_15358;var statearr_15382_15457 = state_15358__$1;(statearr_15382_15457[2] = inst_15309);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15358__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 40))
{var inst_15324 = (state_15358[25]);var inst_15325 = (state_15358[2]);var inst_15326 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15327 = cljs.core.async.untap_STAR_.call(null,m,inst_15324);var state_15358__$1 = (function (){var statearr_15383 = state_15358;(statearr_15383[26] = inst_15326);
(statearr_15383[27] = inst_15325);
return statearr_15383;
})();var statearr_15384_15458 = state_15358__$1;(statearr_15384_15458[2] = inst_15327);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15358__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 33))
{var inst_15315 = (state_15358[17]);var inst_15317 = cljs.core.chunked_seq_QMARK_.call(null,inst_15315);var state_15358__$1 = state_15358;if(inst_15317)
{var statearr_15385_15459 = state_15358__$1;(statearr_15385_15459[1] = 36);
} else
{var statearr_15386_15460 = state_15358__$1;(statearr_15386_15460[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 13))
{var inst_15245 = (state_15358[28]);var inst_15248 = cljs.core.async.close_BANG_.call(null,inst_15245);var state_15358__$1 = state_15358;var statearr_15387_15461 = state_15358__$1;(statearr_15387_15461[2] = inst_15248);
(statearr_15387_15461[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 22))
{var inst_15266 = (state_15358[8]);var inst_15269 = cljs.core.async.close_BANG_.call(null,inst_15266);var state_15358__$1 = state_15358;var statearr_15388_15462 = state_15358__$1;(statearr_15388_15462[2] = inst_15269);
(statearr_15388_15462[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 36))
{var inst_15315 = (state_15358[17]);var inst_15319 = cljs.core.chunk_first.call(null,inst_15315);var inst_15320 = cljs.core.chunk_rest.call(null,inst_15315);var inst_15321 = cljs.core.count.call(null,inst_15319);var inst_15294 = inst_15320;var inst_15295 = inst_15319;var inst_15296 = inst_15321;var inst_15297 = 0;var state_15358__$1 = (function (){var statearr_15389 = state_15358;(statearr_15389[9] = inst_15297);
(statearr_15389[10] = inst_15295);
(statearr_15389[19] = inst_15296);
(statearr_15389[20] = inst_15294);
return statearr_15389;
})();var statearr_15390_15463 = state_15358__$1;(statearr_15390_15463[2] = null);
(statearr_15390_15463[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 41))
{var inst_15324 = (state_15358[25]);var inst_15226 = (state_15358[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15358,40,Object,null,39);var inst_15331 = cljs.core.async.put_BANG_.call(null,inst_15324,inst_15226,done);var state_15358__$1 = state_15358;var statearr_15391_15464 = state_15358__$1;(statearr_15391_15464[2] = inst_15331);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15358__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 43))
{var state_15358__$1 = state_15358;var statearr_15392_15465 = state_15358__$1;(statearr_15392_15465[2] = null);
(statearr_15392_15465[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 29))
{var inst_15342 = (state_15358[2]);var state_15358__$1 = state_15358;var statearr_15393_15466 = state_15358__$1;(statearr_15393_15466[2] = inst_15342);
(statearr_15393_15466[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 44))
{var inst_15351 = (state_15358[2]);var state_15358__$1 = (function (){var statearr_15394 = state_15358;(statearr_15394[29] = inst_15351);
return statearr_15394;
})();var statearr_15395_15467 = state_15358__$1;(statearr_15395_15467[2] = null);
(statearr_15395_15467[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 6))
{var inst_15286 = (state_15358[30]);var inst_15285 = cljs.core.deref.call(null,cs);var inst_15286__$1 = cljs.core.keys.call(null,inst_15285);var inst_15287 = cljs.core.count.call(null,inst_15286__$1);var inst_15288 = cljs.core.reset_BANG_.call(null,dctr,inst_15287);var inst_15293 = cljs.core.seq.call(null,inst_15286__$1);var inst_15294 = inst_15293;var inst_15295 = null;var inst_15296 = 0;var inst_15297 = 0;var state_15358__$1 = (function (){var statearr_15396 = state_15358;(statearr_15396[31] = inst_15288);
(statearr_15396[9] = inst_15297);
(statearr_15396[30] = inst_15286__$1);
(statearr_15396[10] = inst_15295);
(statearr_15396[19] = inst_15296);
(statearr_15396[20] = inst_15294);
return statearr_15396;
})();var statearr_15397_15468 = state_15358__$1;(statearr_15397_15468[2] = null);
(statearr_15397_15468[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 28))
{var inst_15315 = (state_15358[17]);var inst_15294 = (state_15358[20]);var inst_15315__$1 = cljs.core.seq.call(null,inst_15294);var state_15358__$1 = (function (){var statearr_15398 = state_15358;(statearr_15398[17] = inst_15315__$1);
return statearr_15398;
})();if(inst_15315__$1)
{var statearr_15399_15469 = state_15358__$1;(statearr_15399_15469[1] = 33);
} else
{var statearr_15400_15470 = state_15358__$1;(statearr_15400_15470[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 25))
{var inst_15297 = (state_15358[9]);var inst_15296 = (state_15358[19]);var inst_15299 = (inst_15297 < inst_15296);var inst_15300 = inst_15299;var state_15358__$1 = state_15358;if(cljs.core.truth_(inst_15300))
{var statearr_15401_15471 = state_15358__$1;(statearr_15401_15471[1] = 27);
} else
{var statearr_15402_15472 = state_15358__$1;(statearr_15402_15472[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 34))
{var state_15358__$1 = state_15358;var statearr_15403_15473 = state_15358__$1;(statearr_15403_15473[2] = null);
(statearr_15403_15473[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 17))
{var state_15358__$1 = state_15358;var statearr_15404_15474 = state_15358__$1;(statearr_15404_15474[2] = null);
(statearr_15404_15474[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 3))
{var inst_15356 = (state_15358[2]);var state_15358__$1 = state_15358;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15358__$1,inst_15356);
} else
{if((state_val_15359 === 12))
{var inst_15281 = (state_15358[2]);var state_15358__$1 = state_15358;var statearr_15405_15475 = state_15358__$1;(statearr_15405_15475[2] = inst_15281);
(statearr_15405_15475[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 2))
{var state_15358__$1 = state_15358;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15358__$1,4,ch);
} else
{if((state_val_15359 === 23))
{var state_15358__$1 = state_15358;var statearr_15406_15476 = state_15358__$1;(statearr_15406_15476[2] = null);
(statearr_15406_15476[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 35))
{var inst_15340 = (state_15358[2]);var state_15358__$1 = state_15358;var statearr_15407_15477 = state_15358__$1;(statearr_15407_15477[2] = inst_15340);
(statearr_15407_15477[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 19))
{var inst_15255 = (state_15358[7]);var inst_15259 = cljs.core.chunk_first.call(null,inst_15255);var inst_15260 = cljs.core.chunk_rest.call(null,inst_15255);var inst_15261 = cljs.core.count.call(null,inst_15259);var inst_15235 = inst_15260;var inst_15236 = inst_15259;var inst_15237 = inst_15261;var inst_15238 = 0;var state_15358__$1 = (function (){var statearr_15408 = state_15358;(statearr_15408[13] = inst_15238);
(statearr_15408[14] = inst_15237);
(statearr_15408[15] = inst_15236);
(statearr_15408[16] = inst_15235);
return statearr_15408;
})();var statearr_15409_15478 = state_15358__$1;(statearr_15409_15478[2] = null);
(statearr_15409_15478[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 11))
{var inst_15255 = (state_15358[7]);var inst_15235 = (state_15358[16]);var inst_15255__$1 = cljs.core.seq.call(null,inst_15235);var state_15358__$1 = (function (){var statearr_15410 = state_15358;(statearr_15410[7] = inst_15255__$1);
return statearr_15410;
})();if(inst_15255__$1)
{var statearr_15411_15479 = state_15358__$1;(statearr_15411_15479[1] = 16);
} else
{var statearr_15412_15480 = state_15358__$1;(statearr_15412_15480[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 9))
{var inst_15283 = (state_15358[2]);var state_15358__$1 = state_15358;var statearr_15413_15481 = state_15358__$1;(statearr_15413_15481[2] = inst_15283);
(statearr_15413_15481[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 5))
{var inst_15233 = cljs.core.deref.call(null,cs);var inst_15234 = cljs.core.seq.call(null,inst_15233);var inst_15235 = inst_15234;var inst_15236 = null;var inst_15237 = 0;var inst_15238 = 0;var state_15358__$1 = (function (){var statearr_15414 = state_15358;(statearr_15414[13] = inst_15238);
(statearr_15414[14] = inst_15237);
(statearr_15414[15] = inst_15236);
(statearr_15414[16] = inst_15235);
return statearr_15414;
})();var statearr_15415_15482 = state_15358__$1;(statearr_15415_15482[2] = null);
(statearr_15415_15482[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 14))
{var state_15358__$1 = state_15358;var statearr_15416_15483 = state_15358__$1;(statearr_15416_15483[2] = null);
(statearr_15416_15483[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 45))
{var inst_15348 = (state_15358[2]);var state_15358__$1 = state_15358;var statearr_15417_15484 = state_15358__$1;(statearr_15417_15484[2] = inst_15348);
(statearr_15417_15484[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 26))
{var inst_15286 = (state_15358[30]);var inst_15344 = (state_15358[2]);var inst_15345 = cljs.core.seq.call(null,inst_15286);var state_15358__$1 = (function (){var statearr_15418 = state_15358;(statearr_15418[32] = inst_15344);
return statearr_15418;
})();if(inst_15345)
{var statearr_15419_15485 = state_15358__$1;(statearr_15419_15485[1] = 42);
} else
{var statearr_15420_15486 = state_15358__$1;(statearr_15420_15486[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 16))
{var inst_15255 = (state_15358[7]);var inst_15257 = cljs.core.chunked_seq_QMARK_.call(null,inst_15255);var state_15358__$1 = state_15358;if(inst_15257)
{var statearr_15424_15487 = state_15358__$1;(statearr_15424_15487[1] = 19);
} else
{var statearr_15425_15488 = state_15358__$1;(statearr_15425_15488[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 38))
{var inst_15337 = (state_15358[2]);var state_15358__$1 = state_15358;var statearr_15426_15489 = state_15358__$1;(statearr_15426_15489[2] = inst_15337);
(statearr_15426_15489[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 30))
{var inst_15297 = (state_15358[9]);var inst_15295 = (state_15358[10]);var inst_15296 = (state_15358[19]);var inst_15294 = (state_15358[20]);var inst_15311 = (state_15358[2]);var inst_15312 = (inst_15297 + 1);var tmp15421 = inst_15295;var tmp15422 = inst_15296;var tmp15423 = inst_15294;var inst_15294__$1 = tmp15423;var inst_15295__$1 = tmp15421;var inst_15296__$1 = tmp15422;var inst_15297__$1 = inst_15312;var state_15358__$1 = (function (){var statearr_15427 = state_15358;(statearr_15427[33] = inst_15311);
(statearr_15427[9] = inst_15297__$1);
(statearr_15427[10] = inst_15295__$1);
(statearr_15427[19] = inst_15296__$1);
(statearr_15427[20] = inst_15294__$1);
return statearr_15427;
})();var statearr_15428_15490 = state_15358__$1;(statearr_15428_15490[2] = null);
(statearr_15428_15490[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 10))
{var inst_15238 = (state_15358[13]);var inst_15236 = (state_15358[15]);var inst_15244 = cljs.core._nth.call(null,inst_15236,inst_15238);var inst_15245 = cljs.core.nth.call(null,inst_15244,0,null);var inst_15246 = cljs.core.nth.call(null,inst_15244,1,null);var state_15358__$1 = (function (){var statearr_15429 = state_15358;(statearr_15429[28] = inst_15245);
return statearr_15429;
})();if(cljs.core.truth_(inst_15246))
{var statearr_15430_15491 = state_15358__$1;(statearr_15430_15491[1] = 13);
} else
{var statearr_15431_15492 = state_15358__$1;(statearr_15431_15492[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 18))
{var inst_15279 = (state_15358[2]);var state_15358__$1 = state_15358;var statearr_15432_15493 = state_15358__$1;(statearr_15432_15493[2] = inst_15279);
(statearr_15432_15493[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 42))
{var state_15358__$1 = state_15358;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15358__$1,45,dchan);
} else
{if((state_val_15359 === 37))
{var inst_15315 = (state_15358[17]);var inst_15324 = cljs.core.first.call(null,inst_15315);var state_15358__$1 = (function (){var statearr_15433 = state_15358;(statearr_15433[25] = inst_15324);
return statearr_15433;
})();var statearr_15434_15494 = state_15358__$1;(statearr_15434_15494[2] = null);
(statearr_15434_15494[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15359 === 8))
{var inst_15238 = (state_15358[13]);var inst_15237 = (state_15358[14]);var inst_15240 = (inst_15238 < inst_15237);var inst_15241 = inst_15240;var state_15358__$1 = state_15358;if(cljs.core.truth_(inst_15241))
{var statearr_15435_15495 = state_15358__$1;(statearr_15435_15495[1] = 10);
} else
{var statearr_15436_15496 = state_15358__$1;(statearr_15436_15496[1] = 11);
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
});})(c__5689__auto___15444,cs,m,dchan,dctr,done))
;return ((function (switch__5674__auto__,c__5689__auto___15444,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_15440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15440[0] = state_machine__5675__auto__);
(statearr_15440[1] = 1);
return statearr_15440;
});
var state_machine__5675__auto____1 = (function (state_15358){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_15358);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e15441){if((e15441 instanceof Object))
{var ex__5678__auto__ = e15441;var statearr_15442_15497 = state_15358;(statearr_15442_15497[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15358);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15441;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15498 = state_15358;
state_15358 = G__15498;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_15358){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_15358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___15444,cs,m,dchan,dctr,done))
})();var state__5691__auto__ = (function (){var statearr_15443 = f__5690__auto__.call(null);(statearr_15443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___15444);
return statearr_15443;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___15444,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj15500 = {};return obj15500;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t15610 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15610 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15611){
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
this.meta15611 = meta15611;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15610.cljs$lang$type = true;
cljs.core.async.t15610.cljs$lang$ctorStr = "cljs.core.async/t15610";
cljs.core.async.t15610.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t15610");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15610.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15610.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15610.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15610.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15610.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15610.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15610.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15610.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15610.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15612){var self__ = this;
var _15612__$1 = this;return self__.meta15611;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15612,meta15611__$1){var self__ = this;
var _15612__$1 = this;return (new cljs.core.async.t15610(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15611__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15610 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15610(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15611){return (new cljs.core.async.t15610(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15611));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15610(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5689__auto___15719 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___15719,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___15719,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15677){var state_val_15678 = (state_15677[1]);if((state_val_15678 === 7))
{var inst_15626 = (state_15677[7]);var inst_15631 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15626);var state_15677__$1 = state_15677;var statearr_15679_15720 = state_15677__$1;(statearr_15679_15720[2] = inst_15631);
(statearr_15679_15720[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 20))
{var inst_15641 = (state_15677[8]);var state_15677__$1 = state_15677;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15677__$1,23,out,inst_15641);
} else
{if((state_val_15678 === 1))
{var inst_15616 = (state_15677[9]);var inst_15616__$1 = calc_state.call(null);var inst_15617 = cljs.core.seq_QMARK_.call(null,inst_15616__$1);var state_15677__$1 = (function (){var statearr_15680 = state_15677;(statearr_15680[9] = inst_15616__$1);
return statearr_15680;
})();if(inst_15617)
{var statearr_15681_15721 = state_15677__$1;(statearr_15681_15721[1] = 2);
} else
{var statearr_15682_15722 = state_15677__$1;(statearr_15682_15722[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 4))
{var inst_15616 = (state_15677[9]);var inst_15622 = (state_15677[2]);var inst_15623 = cljs.core.get.call(null,inst_15622,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15624 = cljs.core.get.call(null,inst_15622,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15625 = cljs.core.get.call(null,inst_15622,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15626 = inst_15616;var state_15677__$1 = (function (){var statearr_15683 = state_15677;(statearr_15683[10] = inst_15623);
(statearr_15683[11] = inst_15625);
(statearr_15683[12] = inst_15624);
(statearr_15683[7] = inst_15626);
return statearr_15683;
})();var statearr_15684_15723 = state_15677__$1;(statearr_15684_15723[2] = null);
(statearr_15684_15723[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 15))
{var state_15677__$1 = state_15677;var statearr_15685_15724 = state_15677__$1;(statearr_15685_15724[2] = null);
(statearr_15685_15724[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 21))
{var state_15677__$1 = state_15677;var statearr_15686_15725 = state_15677__$1;(statearr_15686_15725[2] = null);
(statearr_15686_15725[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 13))
{var inst_15673 = (state_15677[2]);var state_15677__$1 = state_15677;var statearr_15687_15726 = state_15677__$1;(statearr_15687_15726[2] = inst_15673);
(statearr_15687_15726[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 22))
{var inst_15634 = (state_15677[13]);var inst_15670 = (state_15677[2]);var inst_15626 = inst_15634;var state_15677__$1 = (function (){var statearr_15688 = state_15677;(statearr_15688[7] = inst_15626);
(statearr_15688[14] = inst_15670);
return statearr_15688;
})();var statearr_15689_15727 = state_15677__$1;(statearr_15689_15727[2] = null);
(statearr_15689_15727[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 6))
{var inst_15675 = (state_15677[2]);var state_15677__$1 = state_15677;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15677__$1,inst_15675);
} else
{if((state_val_15678 === 17))
{var inst_15656 = (state_15677[15]);var state_15677__$1 = state_15677;var statearr_15690_15728 = state_15677__$1;(statearr_15690_15728[2] = inst_15656);
(statearr_15690_15728[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 3))
{var inst_15616 = (state_15677[9]);var state_15677__$1 = state_15677;var statearr_15691_15729 = state_15677__$1;(statearr_15691_15729[2] = inst_15616);
(statearr_15691_15729[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 12))
{var inst_15656 = (state_15677[15]);var inst_15637 = (state_15677[16]);var inst_15642 = (state_15677[17]);var inst_15656__$1 = inst_15637.call(null,inst_15642);var state_15677__$1 = (function (){var statearr_15692 = state_15677;(statearr_15692[15] = inst_15656__$1);
return statearr_15692;
})();if(cljs.core.truth_(inst_15656__$1))
{var statearr_15693_15730 = state_15677__$1;(statearr_15693_15730[1] = 17);
} else
{var statearr_15694_15731 = state_15677__$1;(statearr_15694_15731[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 2))
{var inst_15616 = (state_15677[9]);var inst_15619 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15616);var state_15677__$1 = state_15677;var statearr_15695_15732 = state_15677__$1;(statearr_15695_15732[2] = inst_15619);
(statearr_15695_15732[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 23))
{var inst_15667 = (state_15677[2]);var state_15677__$1 = state_15677;var statearr_15696_15733 = state_15677__$1;(statearr_15696_15733[2] = inst_15667);
(statearr_15696_15733[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 19))
{var inst_15664 = (state_15677[2]);var state_15677__$1 = state_15677;if(cljs.core.truth_(inst_15664))
{var statearr_15697_15734 = state_15677__$1;(statearr_15697_15734[1] = 20);
} else
{var statearr_15698_15735 = state_15677__$1;(statearr_15698_15735[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 11))
{var inst_15641 = (state_15677[8]);var inst_15647 = (inst_15641 == null);var state_15677__$1 = state_15677;if(cljs.core.truth_(inst_15647))
{var statearr_15699_15736 = state_15677__$1;(statearr_15699_15736[1] = 14);
} else
{var statearr_15700_15737 = state_15677__$1;(statearr_15700_15737[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 9))
{var inst_15634 = (state_15677[13]);var inst_15634__$1 = (state_15677[2]);var inst_15635 = cljs.core.get.call(null,inst_15634__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15636 = cljs.core.get.call(null,inst_15634__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15637 = cljs.core.get.call(null,inst_15634__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15677__$1 = (function (){var statearr_15701 = state_15677;(statearr_15701[16] = inst_15637);
(statearr_15701[13] = inst_15634__$1);
(statearr_15701[18] = inst_15636);
return statearr_15701;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15677__$1,10,inst_15635);
} else
{if((state_val_15678 === 5))
{var inst_15626 = (state_15677[7]);var inst_15629 = cljs.core.seq_QMARK_.call(null,inst_15626);var state_15677__$1 = state_15677;if(inst_15629)
{var statearr_15702_15738 = state_15677__$1;(statearr_15702_15738[1] = 7);
} else
{var statearr_15703_15739 = state_15677__$1;(statearr_15703_15739[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 14))
{var inst_15642 = (state_15677[17]);var inst_15649 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15642);var state_15677__$1 = state_15677;var statearr_15704_15740 = state_15677__$1;(statearr_15704_15740[2] = inst_15649);
(statearr_15704_15740[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 16))
{var inst_15652 = (state_15677[2]);var inst_15653 = calc_state.call(null);var inst_15626 = inst_15653;var state_15677__$1 = (function (){var statearr_15705 = state_15677;(statearr_15705[7] = inst_15626);
(statearr_15705[19] = inst_15652);
return statearr_15705;
})();var statearr_15706_15741 = state_15677__$1;(statearr_15706_15741[2] = null);
(statearr_15706_15741[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 10))
{var inst_15642 = (state_15677[17]);var inst_15641 = (state_15677[8]);var inst_15640 = (state_15677[2]);var inst_15641__$1 = cljs.core.nth.call(null,inst_15640,0,null);var inst_15642__$1 = cljs.core.nth.call(null,inst_15640,1,null);var inst_15643 = (inst_15641__$1 == null);var inst_15644 = cljs.core._EQ_.call(null,inst_15642__$1,change);var inst_15645 = (inst_15643) || (inst_15644);var state_15677__$1 = (function (){var statearr_15707 = state_15677;(statearr_15707[17] = inst_15642__$1);
(statearr_15707[8] = inst_15641__$1);
return statearr_15707;
})();if(cljs.core.truth_(inst_15645))
{var statearr_15708_15742 = state_15677__$1;(statearr_15708_15742[1] = 11);
} else
{var statearr_15709_15743 = state_15677__$1;(statearr_15709_15743[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 18))
{var inst_15637 = (state_15677[16]);var inst_15642 = (state_15677[17]);var inst_15636 = (state_15677[18]);var inst_15659 = cljs.core.empty_QMARK_.call(null,inst_15637);var inst_15660 = inst_15636.call(null,inst_15642);var inst_15661 = cljs.core.not.call(null,inst_15660);var inst_15662 = (inst_15659) && (inst_15661);var state_15677__$1 = state_15677;var statearr_15710_15744 = state_15677__$1;(statearr_15710_15744[2] = inst_15662);
(statearr_15710_15744[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15678 === 8))
{var inst_15626 = (state_15677[7]);var state_15677__$1 = state_15677;var statearr_15711_15745 = state_15677__$1;(statearr_15711_15745[2] = inst_15626);
(statearr_15711_15745[1] = 9);
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
});})(c__5689__auto___15719,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5674__auto__,c__5689__auto___15719,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_15715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15715[0] = state_machine__5675__auto__);
(statearr_15715[1] = 1);
return statearr_15715;
});
var state_machine__5675__auto____1 = (function (state_15677){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_15677);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e15716){if((e15716 instanceof Object))
{var ex__5678__auto__ = e15716;var statearr_15717_15746 = state_15677;(statearr_15717_15746[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15677);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15716;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15747 = state_15677;
state_15677 = G__15747;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_15677){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_15677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___15719,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5691__auto__ = (function (){var statearr_15718 = f__5690__auto__.call(null);(statearr_15718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___15719);
return statearr_15718;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___15719,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj15749 = {};return obj15749;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
return (function (topic){var or__3539__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3539__auto__,mults){
return (function (p1__15750_SHARP_){if(cljs.core.truth_(p1__15750_SHARP_.call(null,topic)))
{return p1__15750_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15750_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3539__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15875 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15875 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15876){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15876 = meta15876;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15875.cljs$lang$type = true;
cljs.core.async.t15875.cljs$lang$ctorStr = "cljs.core.async/t15875";
cljs.core.async.t15875.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t15875");
});})(mults,ensure_mult))
;
cljs.core.async.t15875.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15875.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15875.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15875.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15875.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15875.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15875.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15877){var self__ = this;
var _15877__$1 = this;return self__.meta15876;
});})(mults,ensure_mult))
;
cljs.core.async.t15875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15877,meta15876__$1){var self__ = this;
var _15877__$1 = this;return (new cljs.core.async.t15875(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15876__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15875 = ((function (mults,ensure_mult){
return (function __GT_t15875(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15876){return (new cljs.core.async.t15875(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15876));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15875(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5689__auto___15999 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___15999,mults,ensure_mult,p){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___15999,mults,ensure_mult,p){
return (function (state_15951){var state_val_15952 = (state_15951[1]);if((state_val_15952 === 7))
{var inst_15947 = (state_15951[2]);var state_15951__$1 = state_15951;var statearr_15953_16000 = state_15951__$1;(statearr_15953_16000[2] = inst_15947);
(statearr_15953_16000[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 20))
{var state_15951__$1 = state_15951;var statearr_15954_16001 = state_15951__$1;(statearr_15954_16001[2] = null);
(statearr_15954_16001[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 1))
{var state_15951__$1 = state_15951;var statearr_15955_16002 = state_15951__$1;(statearr_15955_16002[2] = null);
(statearr_15955_16002[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 24))
{var inst_15930 = (state_15951[7]);var inst_15880 = (state_15951[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15951,23,Object,null,22);var inst_15937 = cljs.core.async.muxch_STAR_.call(null,inst_15930);var state_15951__$1 = state_15951;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15951__$1,25,inst_15937,inst_15880);
} else
{if((state_val_15952 === 4))
{var inst_15880 = (state_15951[8]);var inst_15880__$1 = (state_15951[2]);var inst_15881 = (inst_15880__$1 == null);var state_15951__$1 = (function (){var statearr_15956 = state_15951;(statearr_15956[8] = inst_15880__$1);
return statearr_15956;
})();if(cljs.core.truth_(inst_15881))
{var statearr_15957_16003 = state_15951__$1;(statearr_15957_16003[1] = 5);
} else
{var statearr_15958_16004 = state_15951__$1;(statearr_15958_16004[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 15))
{var inst_15922 = (state_15951[2]);var state_15951__$1 = state_15951;var statearr_15959_16005 = state_15951__$1;(statearr_15959_16005[2] = inst_15922);
(statearr_15959_16005[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 21))
{var inst_15944 = (state_15951[2]);var state_15951__$1 = (function (){var statearr_15960 = state_15951;(statearr_15960[9] = inst_15944);
return statearr_15960;
})();var statearr_15961_16006 = state_15951__$1;(statearr_15961_16006[2] = null);
(statearr_15961_16006[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 13))
{var inst_15904 = (state_15951[10]);var inst_15906 = cljs.core.chunked_seq_QMARK_.call(null,inst_15904);var state_15951__$1 = state_15951;if(inst_15906)
{var statearr_15962_16007 = state_15951__$1;(statearr_15962_16007[1] = 16);
} else
{var statearr_15963_16008 = state_15951__$1;(statearr_15963_16008[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 22))
{var inst_15941 = (state_15951[2]);var state_15951__$1 = state_15951;var statearr_15964_16009 = state_15951__$1;(statearr_15964_16009[2] = inst_15941);
(statearr_15964_16009[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 6))
{var inst_15928 = (state_15951[11]);var inst_15930 = (state_15951[7]);var inst_15880 = (state_15951[8]);var inst_15928__$1 = topic_fn.call(null,inst_15880);var inst_15929 = cljs.core.deref.call(null,mults);var inst_15930__$1 = cljs.core.get.call(null,inst_15929,inst_15928__$1);var state_15951__$1 = (function (){var statearr_15965 = state_15951;(statearr_15965[11] = inst_15928__$1);
(statearr_15965[7] = inst_15930__$1);
return statearr_15965;
})();if(cljs.core.truth_(inst_15930__$1))
{var statearr_15966_16010 = state_15951__$1;(statearr_15966_16010[1] = 19);
} else
{var statearr_15967_16011 = state_15951__$1;(statearr_15967_16011[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 25))
{var inst_15939 = (state_15951[2]);var state_15951__$1 = state_15951;var statearr_15968_16012 = state_15951__$1;(statearr_15968_16012[2] = inst_15939);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15951__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 17))
{var inst_15904 = (state_15951[10]);var inst_15913 = cljs.core.first.call(null,inst_15904);var inst_15914 = cljs.core.async.muxch_STAR_.call(null,inst_15913);var inst_15915 = cljs.core.async.close_BANG_.call(null,inst_15914);var inst_15916 = cljs.core.next.call(null,inst_15904);var inst_15890 = inst_15916;var inst_15891 = null;var inst_15892 = 0;var inst_15893 = 0;var state_15951__$1 = (function (){var statearr_15969 = state_15951;(statearr_15969[12] = inst_15893);
(statearr_15969[13] = inst_15915);
(statearr_15969[14] = inst_15892);
(statearr_15969[15] = inst_15890);
(statearr_15969[16] = inst_15891);
return statearr_15969;
})();var statearr_15970_16013 = state_15951__$1;(statearr_15970_16013[2] = null);
(statearr_15970_16013[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 3))
{var inst_15949 = (state_15951[2]);var state_15951__$1 = state_15951;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15951__$1,inst_15949);
} else
{if((state_val_15952 === 12))
{var inst_15924 = (state_15951[2]);var state_15951__$1 = state_15951;var statearr_15971_16014 = state_15951__$1;(statearr_15971_16014[2] = inst_15924);
(statearr_15971_16014[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 2))
{var state_15951__$1 = state_15951;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15951__$1,4,ch);
} else
{if((state_val_15952 === 23))
{var inst_15928 = (state_15951[11]);var inst_15932 = (state_15951[2]);var inst_15933 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15928);var state_15951__$1 = (function (){var statearr_15972 = state_15951;(statearr_15972[17] = inst_15932);
return statearr_15972;
})();var statearr_15973_16015 = state_15951__$1;(statearr_15973_16015[2] = inst_15933);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15951__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 19))
{var state_15951__$1 = state_15951;var statearr_15974_16016 = state_15951__$1;(statearr_15974_16016[2] = null);
(statearr_15974_16016[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 11))
{var inst_15904 = (state_15951[10]);var inst_15890 = (state_15951[15]);var inst_15904__$1 = cljs.core.seq.call(null,inst_15890);var state_15951__$1 = (function (){var statearr_15975 = state_15951;(statearr_15975[10] = inst_15904__$1);
return statearr_15975;
})();if(inst_15904__$1)
{var statearr_15976_16017 = state_15951__$1;(statearr_15976_16017[1] = 13);
} else
{var statearr_15977_16018 = state_15951__$1;(statearr_15977_16018[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 9))
{var inst_15926 = (state_15951[2]);var state_15951__$1 = state_15951;var statearr_15978_16019 = state_15951__$1;(statearr_15978_16019[2] = inst_15926);
(statearr_15978_16019[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 5))
{var inst_15887 = cljs.core.deref.call(null,mults);var inst_15888 = cljs.core.vals.call(null,inst_15887);var inst_15889 = cljs.core.seq.call(null,inst_15888);var inst_15890 = inst_15889;var inst_15891 = null;var inst_15892 = 0;var inst_15893 = 0;var state_15951__$1 = (function (){var statearr_15979 = state_15951;(statearr_15979[12] = inst_15893);
(statearr_15979[14] = inst_15892);
(statearr_15979[15] = inst_15890);
(statearr_15979[16] = inst_15891);
return statearr_15979;
})();var statearr_15980_16020 = state_15951__$1;(statearr_15980_16020[2] = null);
(statearr_15980_16020[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 14))
{var state_15951__$1 = state_15951;var statearr_15984_16021 = state_15951__$1;(statearr_15984_16021[2] = null);
(statearr_15984_16021[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 16))
{var inst_15904 = (state_15951[10]);var inst_15908 = cljs.core.chunk_first.call(null,inst_15904);var inst_15909 = cljs.core.chunk_rest.call(null,inst_15904);var inst_15910 = cljs.core.count.call(null,inst_15908);var inst_15890 = inst_15909;var inst_15891 = inst_15908;var inst_15892 = inst_15910;var inst_15893 = 0;var state_15951__$1 = (function (){var statearr_15985 = state_15951;(statearr_15985[12] = inst_15893);
(statearr_15985[14] = inst_15892);
(statearr_15985[15] = inst_15890);
(statearr_15985[16] = inst_15891);
return statearr_15985;
})();var statearr_15986_16022 = state_15951__$1;(statearr_15986_16022[2] = null);
(statearr_15986_16022[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 10))
{var inst_15893 = (state_15951[12]);var inst_15892 = (state_15951[14]);var inst_15890 = (state_15951[15]);var inst_15891 = (state_15951[16]);var inst_15898 = cljs.core._nth.call(null,inst_15891,inst_15893);var inst_15899 = cljs.core.async.muxch_STAR_.call(null,inst_15898);var inst_15900 = cljs.core.async.close_BANG_.call(null,inst_15899);var inst_15901 = (inst_15893 + 1);var tmp15981 = inst_15892;var tmp15982 = inst_15890;var tmp15983 = inst_15891;var inst_15890__$1 = tmp15982;var inst_15891__$1 = tmp15983;var inst_15892__$1 = tmp15981;var inst_15893__$1 = inst_15901;var state_15951__$1 = (function (){var statearr_15987 = state_15951;(statearr_15987[12] = inst_15893__$1);
(statearr_15987[14] = inst_15892__$1);
(statearr_15987[15] = inst_15890__$1);
(statearr_15987[18] = inst_15900);
(statearr_15987[16] = inst_15891__$1);
return statearr_15987;
})();var statearr_15988_16023 = state_15951__$1;(statearr_15988_16023[2] = null);
(statearr_15988_16023[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 18))
{var inst_15919 = (state_15951[2]);var state_15951__$1 = state_15951;var statearr_15989_16024 = state_15951__$1;(statearr_15989_16024[2] = inst_15919);
(statearr_15989_16024[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15952 === 8))
{var inst_15893 = (state_15951[12]);var inst_15892 = (state_15951[14]);var inst_15895 = (inst_15893 < inst_15892);var inst_15896 = inst_15895;var state_15951__$1 = state_15951;if(cljs.core.truth_(inst_15896))
{var statearr_15990_16025 = state_15951__$1;(statearr_15990_16025[1] = 10);
} else
{var statearr_15991_16026 = state_15951__$1;(statearr_15991_16026[1] = 11);
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
});})(c__5689__auto___15999,mults,ensure_mult,p))
;return ((function (switch__5674__auto__,c__5689__auto___15999,mults,ensure_mult,p){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_15995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15995[0] = state_machine__5675__auto__);
(statearr_15995[1] = 1);
return statearr_15995;
});
var state_machine__5675__auto____1 = (function (state_15951){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_15951);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e15996){if((e15996 instanceof Object))
{var ex__5678__auto__ = e15996;var statearr_15997_16027 = state_15951;(statearr_15997_16027[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15951);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16028 = state_15951;
state_15951 = G__16028;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_15951){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_15951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___15999,mults,ensure_mult,p))
})();var state__5691__auto__ = (function (){var statearr_15998 = f__5690__auto__.call(null);(statearr_15998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___15999);
return statearr_15998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___15999,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5689__auto___16165 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___16165,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___16165,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16135){var state_val_16136 = (state_16135[1]);if((state_val_16136 === 7))
{var state_16135__$1 = state_16135;var statearr_16137_16166 = state_16135__$1;(statearr_16137_16166[2] = null);
(statearr_16137_16166[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16136 === 1))
{var state_16135__$1 = state_16135;var statearr_16138_16167 = state_16135__$1;(statearr_16138_16167[2] = null);
(statearr_16138_16167[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16136 === 4))
{var inst_16099 = (state_16135[7]);var inst_16101 = (inst_16099 < cnt);var state_16135__$1 = state_16135;if(cljs.core.truth_(inst_16101))
{var statearr_16139_16168 = state_16135__$1;(statearr_16139_16168[1] = 6);
} else
{var statearr_16140_16169 = state_16135__$1;(statearr_16140_16169[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16136 === 15))
{var inst_16131 = (state_16135[2]);var state_16135__$1 = state_16135;var statearr_16141_16170 = state_16135__$1;(statearr_16141_16170[2] = inst_16131);
(statearr_16141_16170[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16136 === 13))
{var inst_16124 = cljs.core.async.close_BANG_.call(null,out);var state_16135__$1 = state_16135;var statearr_16142_16171 = state_16135__$1;(statearr_16142_16171[2] = inst_16124);
(statearr_16142_16171[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16136 === 6))
{var state_16135__$1 = state_16135;var statearr_16143_16172 = state_16135__$1;(statearr_16143_16172[2] = null);
(statearr_16143_16172[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16136 === 3))
{var inst_16133 = (state_16135[2]);var state_16135__$1 = state_16135;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16135__$1,inst_16133);
} else
{if((state_val_16136 === 12))
{var inst_16121 = (state_16135[8]);var inst_16121__$1 = (state_16135[2]);var inst_16122 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16121__$1);var state_16135__$1 = (function (){var statearr_16144 = state_16135;(statearr_16144[8] = inst_16121__$1);
return statearr_16144;
})();if(cljs.core.truth_(inst_16122))
{var statearr_16145_16173 = state_16135__$1;(statearr_16145_16173[1] = 13);
} else
{var statearr_16146_16174 = state_16135__$1;(statearr_16146_16174[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16136 === 2))
{var inst_16098 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16099 = 0;var state_16135__$1 = (function (){var statearr_16147 = state_16135;(statearr_16147[7] = inst_16099);
(statearr_16147[9] = inst_16098);
return statearr_16147;
})();var statearr_16148_16175 = state_16135__$1;(statearr_16148_16175[2] = null);
(statearr_16148_16175[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16136 === 11))
{var inst_16099 = (state_16135[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16135,10,Object,null,9);var inst_16108 = chs__$1.call(null,inst_16099);var inst_16109 = done.call(null,inst_16099);var inst_16110 = cljs.core.async.take_BANG_.call(null,inst_16108,inst_16109);var state_16135__$1 = state_16135;var statearr_16149_16176 = state_16135__$1;(statearr_16149_16176[2] = inst_16110);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16135__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16136 === 9))
{var inst_16099 = (state_16135[7]);var inst_16112 = (state_16135[2]);var inst_16113 = (inst_16099 + 1);var inst_16099__$1 = inst_16113;var state_16135__$1 = (function (){var statearr_16150 = state_16135;(statearr_16150[10] = inst_16112);
(statearr_16150[7] = inst_16099__$1);
return statearr_16150;
})();var statearr_16151_16177 = state_16135__$1;(statearr_16151_16177[2] = null);
(statearr_16151_16177[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16136 === 5))
{var inst_16119 = (state_16135[2]);var state_16135__$1 = (function (){var statearr_16152 = state_16135;(statearr_16152[11] = inst_16119);
return statearr_16152;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16135__$1,12,dchan);
} else
{if((state_val_16136 === 14))
{var inst_16121 = (state_16135[8]);var inst_16126 = cljs.core.apply.call(null,f,inst_16121);var state_16135__$1 = state_16135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16135__$1,16,out,inst_16126);
} else
{if((state_val_16136 === 16))
{var inst_16128 = (state_16135[2]);var state_16135__$1 = (function (){var statearr_16153 = state_16135;(statearr_16153[12] = inst_16128);
return statearr_16153;
})();var statearr_16154_16178 = state_16135__$1;(statearr_16154_16178[2] = null);
(statearr_16154_16178[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16136 === 10))
{var inst_16103 = (state_16135[2]);var inst_16104 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16135__$1 = (function (){var statearr_16155 = state_16135;(statearr_16155[13] = inst_16103);
return statearr_16155;
})();var statearr_16156_16179 = state_16135__$1;(statearr_16156_16179[2] = inst_16104);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16135__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16136 === 8))
{var inst_16117 = (state_16135[2]);var state_16135__$1 = state_16135;var statearr_16157_16180 = state_16135__$1;(statearr_16157_16180[2] = inst_16117);
(statearr_16157_16180[1] = 5);
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
});})(c__5689__auto___16165,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5674__auto__,c__5689__auto___16165,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_16161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16161[0] = state_machine__5675__auto__);
(statearr_16161[1] = 1);
return statearr_16161;
});
var state_machine__5675__auto____1 = (function (state_16135){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_16135);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e16162){if((e16162 instanceof Object))
{var ex__5678__auto__ = e16162;var statearr_16163_16181 = state_16135;(statearr_16163_16181[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16135);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16162;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16182 = state_16135;
state_16135 = G__16182;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_16135){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_16135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___16165,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5691__auto__ = (function (){var statearr_16164 = f__5690__auto__.call(null);(statearr_16164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___16165);
return statearr_16164;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___16165,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___16290 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___16290,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___16290,out){
return (function (state_16266){var state_val_16267 = (state_16266[1]);if((state_val_16267 === 7))
{var inst_16246 = (state_16266[7]);var inst_16245 = (state_16266[8]);var inst_16245__$1 = (state_16266[2]);var inst_16246__$1 = cljs.core.nth.call(null,inst_16245__$1,0,null);var inst_16247 = cljs.core.nth.call(null,inst_16245__$1,1,null);var inst_16248 = (inst_16246__$1 == null);var state_16266__$1 = (function (){var statearr_16268 = state_16266;(statearr_16268[7] = inst_16246__$1);
(statearr_16268[9] = inst_16247);
(statearr_16268[8] = inst_16245__$1);
return statearr_16268;
})();if(cljs.core.truth_(inst_16248))
{var statearr_16269_16291 = state_16266__$1;(statearr_16269_16291[1] = 8);
} else
{var statearr_16270_16292 = state_16266__$1;(statearr_16270_16292[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16267 === 1))
{var inst_16237 = cljs.core.vec.call(null,chs);var inst_16238 = inst_16237;var state_16266__$1 = (function (){var statearr_16271 = state_16266;(statearr_16271[10] = inst_16238);
return statearr_16271;
})();var statearr_16272_16293 = state_16266__$1;(statearr_16272_16293[2] = null);
(statearr_16272_16293[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16267 === 4))
{var inst_16238 = (state_16266[10]);var state_16266__$1 = state_16266;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16266__$1,7,inst_16238);
} else
{if((state_val_16267 === 6))
{var inst_16262 = (state_16266[2]);var state_16266__$1 = state_16266;var statearr_16273_16294 = state_16266__$1;(statearr_16273_16294[2] = inst_16262);
(statearr_16273_16294[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16267 === 3))
{var inst_16264 = (state_16266[2]);var state_16266__$1 = state_16266;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16266__$1,inst_16264);
} else
{if((state_val_16267 === 2))
{var inst_16238 = (state_16266[10]);var inst_16240 = cljs.core.count.call(null,inst_16238);var inst_16241 = (inst_16240 > 0);var state_16266__$1 = state_16266;if(cljs.core.truth_(inst_16241))
{var statearr_16275_16295 = state_16266__$1;(statearr_16275_16295[1] = 4);
} else
{var statearr_16276_16296 = state_16266__$1;(statearr_16276_16296[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16267 === 11))
{var inst_16238 = (state_16266[10]);var inst_16255 = (state_16266[2]);var tmp16274 = inst_16238;var inst_16238__$1 = tmp16274;var state_16266__$1 = (function (){var statearr_16277 = state_16266;(statearr_16277[10] = inst_16238__$1);
(statearr_16277[11] = inst_16255);
return statearr_16277;
})();var statearr_16278_16297 = state_16266__$1;(statearr_16278_16297[2] = null);
(statearr_16278_16297[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16267 === 9))
{var inst_16246 = (state_16266[7]);var state_16266__$1 = state_16266;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16266__$1,11,out,inst_16246);
} else
{if((state_val_16267 === 5))
{var inst_16260 = cljs.core.async.close_BANG_.call(null,out);var state_16266__$1 = state_16266;var statearr_16279_16298 = state_16266__$1;(statearr_16279_16298[2] = inst_16260);
(statearr_16279_16298[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16267 === 10))
{var inst_16258 = (state_16266[2]);var state_16266__$1 = state_16266;var statearr_16280_16299 = state_16266__$1;(statearr_16280_16299[2] = inst_16258);
(statearr_16280_16299[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16267 === 8))
{var inst_16246 = (state_16266[7]);var inst_16247 = (state_16266[9]);var inst_16238 = (state_16266[10]);var inst_16245 = (state_16266[8]);var inst_16250 = (function (){var c = inst_16247;var v = inst_16246;var vec__16243 = inst_16245;var cs = inst_16238;return ((function (c,v,vec__16243,cs,inst_16246,inst_16247,inst_16238,inst_16245,state_val_16267,c__5689__auto___16290,out){
return (function (p1__16183_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16183_SHARP_);
});
;})(c,v,vec__16243,cs,inst_16246,inst_16247,inst_16238,inst_16245,state_val_16267,c__5689__auto___16290,out))
})();var inst_16251 = cljs.core.filterv.call(null,inst_16250,inst_16238);var inst_16238__$1 = inst_16251;var state_16266__$1 = (function (){var statearr_16281 = state_16266;(statearr_16281[10] = inst_16238__$1);
return statearr_16281;
})();var statearr_16282_16300 = state_16266__$1;(statearr_16282_16300[2] = null);
(statearr_16282_16300[1] = 2);
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
});})(c__5689__auto___16290,out))
;return ((function (switch__5674__auto__,c__5689__auto___16290,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_16286 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16286[0] = state_machine__5675__auto__);
(statearr_16286[1] = 1);
return statearr_16286;
});
var state_machine__5675__auto____1 = (function (state_16266){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_16266);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e16287){if((e16287 instanceof Object))
{var ex__5678__auto__ = e16287;var statearr_16288_16301 = state_16266;(statearr_16288_16301[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16266);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16287;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16302 = state_16266;
state_16266 = G__16302;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_16266){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_16266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___16290,out))
})();var state__5691__auto__ = (function (){var statearr_16289 = f__5690__auto__.call(null);(statearr_16289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___16290);
return statearr_16289;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___16290,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___16395 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___16395,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___16395,out){
return (function (state_16372){var state_val_16373 = (state_16372[1]);if((state_val_16373 === 7))
{var inst_16354 = (state_16372[7]);var inst_16354__$1 = (state_16372[2]);var inst_16355 = (inst_16354__$1 == null);var inst_16356 = cljs.core.not.call(null,inst_16355);var state_16372__$1 = (function (){var statearr_16374 = state_16372;(statearr_16374[7] = inst_16354__$1);
return statearr_16374;
})();if(inst_16356)
{var statearr_16375_16396 = state_16372__$1;(statearr_16375_16396[1] = 8);
} else
{var statearr_16376_16397 = state_16372__$1;(statearr_16376_16397[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16373 === 1))
{var inst_16349 = 0;var state_16372__$1 = (function (){var statearr_16377 = state_16372;(statearr_16377[8] = inst_16349);
return statearr_16377;
})();var statearr_16378_16398 = state_16372__$1;(statearr_16378_16398[2] = null);
(statearr_16378_16398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16373 === 4))
{var state_16372__$1 = state_16372;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16372__$1,7,ch);
} else
{if((state_val_16373 === 6))
{var inst_16367 = (state_16372[2]);var state_16372__$1 = state_16372;var statearr_16379_16399 = state_16372__$1;(statearr_16379_16399[2] = inst_16367);
(statearr_16379_16399[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16373 === 3))
{var inst_16369 = (state_16372[2]);var inst_16370 = cljs.core.async.close_BANG_.call(null,out);var state_16372__$1 = (function (){var statearr_16380 = state_16372;(statearr_16380[9] = inst_16369);
return statearr_16380;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16372__$1,inst_16370);
} else
{if((state_val_16373 === 2))
{var inst_16349 = (state_16372[8]);var inst_16351 = (inst_16349 < n);var state_16372__$1 = state_16372;if(cljs.core.truth_(inst_16351))
{var statearr_16381_16400 = state_16372__$1;(statearr_16381_16400[1] = 4);
} else
{var statearr_16382_16401 = state_16372__$1;(statearr_16382_16401[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16373 === 11))
{var inst_16349 = (state_16372[8]);var inst_16359 = (state_16372[2]);var inst_16360 = (inst_16349 + 1);var inst_16349__$1 = inst_16360;var state_16372__$1 = (function (){var statearr_16383 = state_16372;(statearr_16383[10] = inst_16359);
(statearr_16383[8] = inst_16349__$1);
return statearr_16383;
})();var statearr_16384_16402 = state_16372__$1;(statearr_16384_16402[2] = null);
(statearr_16384_16402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16373 === 9))
{var state_16372__$1 = state_16372;var statearr_16385_16403 = state_16372__$1;(statearr_16385_16403[2] = null);
(statearr_16385_16403[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16373 === 5))
{var state_16372__$1 = state_16372;var statearr_16386_16404 = state_16372__$1;(statearr_16386_16404[2] = null);
(statearr_16386_16404[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16373 === 10))
{var inst_16364 = (state_16372[2]);var state_16372__$1 = state_16372;var statearr_16387_16405 = state_16372__$1;(statearr_16387_16405[2] = inst_16364);
(statearr_16387_16405[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16373 === 8))
{var inst_16354 = (state_16372[7]);var state_16372__$1 = state_16372;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16372__$1,11,out,inst_16354);
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
});})(c__5689__auto___16395,out))
;return ((function (switch__5674__auto__,c__5689__auto___16395,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_16391 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16391[0] = state_machine__5675__auto__);
(statearr_16391[1] = 1);
return statearr_16391;
});
var state_machine__5675__auto____1 = (function (state_16372){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_16372);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e16392){if((e16392 instanceof Object))
{var ex__5678__auto__ = e16392;var statearr_16393_16406 = state_16372;(statearr_16393_16406[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16372);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16392;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16407 = state_16372;
state_16372 = G__16407;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_16372){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_16372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___16395,out))
})();var state__5691__auto__ = (function (){var statearr_16394 = f__5690__auto__.call(null);(statearr_16394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___16395);
return statearr_16394;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___16395,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___16504 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___16504,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___16504,out){
return (function (state_16479){var state_val_16480 = (state_16479[1]);if((state_val_16480 === 7))
{var inst_16474 = (state_16479[2]);var state_16479__$1 = state_16479;var statearr_16481_16505 = state_16479__$1;(statearr_16481_16505[2] = inst_16474);
(statearr_16481_16505[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16480 === 1))
{var inst_16456 = null;var state_16479__$1 = (function (){var statearr_16482 = state_16479;(statearr_16482[7] = inst_16456);
return statearr_16482;
})();var statearr_16483_16506 = state_16479__$1;(statearr_16483_16506[2] = null);
(statearr_16483_16506[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16480 === 4))
{var inst_16459 = (state_16479[8]);var inst_16459__$1 = (state_16479[2]);var inst_16460 = (inst_16459__$1 == null);var inst_16461 = cljs.core.not.call(null,inst_16460);var state_16479__$1 = (function (){var statearr_16484 = state_16479;(statearr_16484[8] = inst_16459__$1);
return statearr_16484;
})();if(inst_16461)
{var statearr_16485_16507 = state_16479__$1;(statearr_16485_16507[1] = 5);
} else
{var statearr_16486_16508 = state_16479__$1;(statearr_16486_16508[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16480 === 6))
{var state_16479__$1 = state_16479;var statearr_16487_16509 = state_16479__$1;(statearr_16487_16509[2] = null);
(statearr_16487_16509[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16480 === 3))
{var inst_16476 = (state_16479[2]);var inst_16477 = cljs.core.async.close_BANG_.call(null,out);var state_16479__$1 = (function (){var statearr_16488 = state_16479;(statearr_16488[9] = inst_16476);
return statearr_16488;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16479__$1,inst_16477);
} else
{if((state_val_16480 === 2))
{var state_16479__$1 = state_16479;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16479__$1,4,ch);
} else
{if((state_val_16480 === 11))
{var inst_16459 = (state_16479[8]);var inst_16468 = (state_16479[2]);var inst_16456 = inst_16459;var state_16479__$1 = (function (){var statearr_16489 = state_16479;(statearr_16489[7] = inst_16456);
(statearr_16489[10] = inst_16468);
return statearr_16489;
})();var statearr_16490_16510 = state_16479__$1;(statearr_16490_16510[2] = null);
(statearr_16490_16510[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16480 === 9))
{var inst_16459 = (state_16479[8]);var state_16479__$1 = state_16479;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16479__$1,11,out,inst_16459);
} else
{if((state_val_16480 === 5))
{var inst_16459 = (state_16479[8]);var inst_16456 = (state_16479[7]);var inst_16463 = cljs.core._EQ_.call(null,inst_16459,inst_16456);var state_16479__$1 = state_16479;if(inst_16463)
{var statearr_16492_16511 = state_16479__$1;(statearr_16492_16511[1] = 8);
} else
{var statearr_16493_16512 = state_16479__$1;(statearr_16493_16512[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16480 === 10))
{var inst_16471 = (state_16479[2]);var state_16479__$1 = state_16479;var statearr_16494_16513 = state_16479__$1;(statearr_16494_16513[2] = inst_16471);
(statearr_16494_16513[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16480 === 8))
{var inst_16456 = (state_16479[7]);var tmp16491 = inst_16456;var inst_16456__$1 = tmp16491;var state_16479__$1 = (function (){var statearr_16495 = state_16479;(statearr_16495[7] = inst_16456__$1);
return statearr_16495;
})();var statearr_16496_16514 = state_16479__$1;(statearr_16496_16514[2] = null);
(statearr_16496_16514[1] = 2);
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
});})(c__5689__auto___16504,out))
;return ((function (switch__5674__auto__,c__5689__auto___16504,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_16500 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16500[0] = state_machine__5675__auto__);
(statearr_16500[1] = 1);
return statearr_16500;
});
var state_machine__5675__auto____1 = (function (state_16479){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_16479);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e16501){if((e16501 instanceof Object))
{var ex__5678__auto__ = e16501;var statearr_16502_16515 = state_16479;(statearr_16502_16515[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16479);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16501;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16516 = state_16479;
state_16479 = G__16516;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_16479){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_16479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___16504,out))
})();var state__5691__auto__ = (function (){var statearr_16503 = f__5690__auto__.call(null);(statearr_16503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___16504);
return statearr_16503;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___16504,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___16651 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___16651,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___16651,out){
return (function (state_16621){var state_val_16622 = (state_16621[1]);if((state_val_16622 === 7))
{var inst_16617 = (state_16621[2]);var state_16621__$1 = state_16621;var statearr_16623_16652 = state_16621__$1;(statearr_16623_16652[2] = inst_16617);
(statearr_16623_16652[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16622 === 1))
{var inst_16584 = (new Array(n));var inst_16585 = inst_16584;var inst_16586 = 0;var state_16621__$1 = (function (){var statearr_16624 = state_16621;(statearr_16624[7] = inst_16585);
(statearr_16624[8] = inst_16586);
return statearr_16624;
})();var statearr_16625_16653 = state_16621__$1;(statearr_16625_16653[2] = null);
(statearr_16625_16653[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16622 === 4))
{var inst_16589 = (state_16621[9]);var inst_16589__$1 = (state_16621[2]);var inst_16590 = (inst_16589__$1 == null);var inst_16591 = cljs.core.not.call(null,inst_16590);var state_16621__$1 = (function (){var statearr_16626 = state_16621;(statearr_16626[9] = inst_16589__$1);
return statearr_16626;
})();if(inst_16591)
{var statearr_16627_16654 = state_16621__$1;(statearr_16627_16654[1] = 5);
} else
{var statearr_16628_16655 = state_16621__$1;(statearr_16628_16655[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16622 === 15))
{var inst_16611 = (state_16621[2]);var state_16621__$1 = state_16621;var statearr_16629_16656 = state_16621__$1;(statearr_16629_16656[2] = inst_16611);
(statearr_16629_16656[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16622 === 13))
{var state_16621__$1 = state_16621;var statearr_16630_16657 = state_16621__$1;(statearr_16630_16657[2] = null);
(statearr_16630_16657[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16622 === 6))
{var inst_16586 = (state_16621[8]);var inst_16607 = (inst_16586 > 0);var state_16621__$1 = state_16621;if(cljs.core.truth_(inst_16607))
{var statearr_16631_16658 = state_16621__$1;(statearr_16631_16658[1] = 12);
} else
{var statearr_16632_16659 = state_16621__$1;(statearr_16632_16659[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16622 === 3))
{var inst_16619 = (state_16621[2]);var state_16621__$1 = state_16621;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16621__$1,inst_16619);
} else
{if((state_val_16622 === 12))
{var inst_16585 = (state_16621[7]);var inst_16609 = cljs.core.vec.call(null,inst_16585);var state_16621__$1 = state_16621;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16621__$1,15,out,inst_16609);
} else
{if((state_val_16622 === 2))
{var state_16621__$1 = state_16621;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16621__$1,4,ch);
} else
{if((state_val_16622 === 11))
{var inst_16601 = (state_16621[2]);var inst_16602 = (new Array(n));var inst_16585 = inst_16602;var inst_16586 = 0;var state_16621__$1 = (function (){var statearr_16633 = state_16621;(statearr_16633[7] = inst_16585);
(statearr_16633[10] = inst_16601);
(statearr_16633[8] = inst_16586);
return statearr_16633;
})();var statearr_16634_16660 = state_16621__$1;(statearr_16634_16660[2] = null);
(statearr_16634_16660[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16622 === 9))
{var inst_16585 = (state_16621[7]);var inst_16599 = cljs.core.vec.call(null,inst_16585);var state_16621__$1 = state_16621;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16621__$1,11,out,inst_16599);
} else
{if((state_val_16622 === 5))
{var inst_16585 = (state_16621[7]);var inst_16594 = (state_16621[11]);var inst_16589 = (state_16621[9]);var inst_16586 = (state_16621[8]);var inst_16593 = (inst_16585[inst_16586] = inst_16589);var inst_16594__$1 = (inst_16586 + 1);var inst_16595 = (inst_16594__$1 < n);var state_16621__$1 = (function (){var statearr_16635 = state_16621;(statearr_16635[12] = inst_16593);
(statearr_16635[11] = inst_16594__$1);
return statearr_16635;
})();if(cljs.core.truth_(inst_16595))
{var statearr_16636_16661 = state_16621__$1;(statearr_16636_16661[1] = 8);
} else
{var statearr_16637_16662 = state_16621__$1;(statearr_16637_16662[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16622 === 14))
{var inst_16614 = (state_16621[2]);var inst_16615 = cljs.core.async.close_BANG_.call(null,out);var state_16621__$1 = (function (){var statearr_16639 = state_16621;(statearr_16639[13] = inst_16614);
return statearr_16639;
})();var statearr_16640_16663 = state_16621__$1;(statearr_16640_16663[2] = inst_16615);
(statearr_16640_16663[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16622 === 10))
{var inst_16605 = (state_16621[2]);var state_16621__$1 = state_16621;var statearr_16641_16664 = state_16621__$1;(statearr_16641_16664[2] = inst_16605);
(statearr_16641_16664[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16622 === 8))
{var inst_16585 = (state_16621[7]);var inst_16594 = (state_16621[11]);var tmp16638 = inst_16585;var inst_16585__$1 = tmp16638;var inst_16586 = inst_16594;var state_16621__$1 = (function (){var statearr_16642 = state_16621;(statearr_16642[7] = inst_16585__$1);
(statearr_16642[8] = inst_16586);
return statearr_16642;
})();var statearr_16643_16665 = state_16621__$1;(statearr_16643_16665[2] = null);
(statearr_16643_16665[1] = 2);
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
});})(c__5689__auto___16651,out))
;return ((function (switch__5674__auto__,c__5689__auto___16651,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_16647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16647[0] = state_machine__5675__auto__);
(statearr_16647[1] = 1);
return statearr_16647;
});
var state_machine__5675__auto____1 = (function (state_16621){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_16621);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e16648){if((e16648 instanceof Object))
{var ex__5678__auto__ = e16648;var statearr_16649_16666 = state_16621;(statearr_16649_16666[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16621);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16648;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16667 = state_16621;
state_16621 = G__16667;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_16621){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_16621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___16651,out))
})();var state__5691__auto__ = (function (){var statearr_16650 = f__5690__auto__.call(null);(statearr_16650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___16651);
return statearr_16650;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___16651,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___16810 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___16810,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___16810,out){
return (function (state_16780){var state_val_16781 = (state_16780[1]);if((state_val_16781 === 7))
{var inst_16776 = (state_16780[2]);var state_16780__$1 = state_16780;var statearr_16782_16811 = state_16780__$1;(statearr_16782_16811[2] = inst_16776);
(statearr_16782_16811[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16781 === 1))
{var inst_16739 = [];var inst_16740 = inst_16739;var inst_16741 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16780__$1 = (function (){var statearr_16783 = state_16780;(statearr_16783[7] = inst_16741);
(statearr_16783[8] = inst_16740);
return statearr_16783;
})();var statearr_16784_16812 = state_16780__$1;(statearr_16784_16812[2] = null);
(statearr_16784_16812[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16781 === 4))
{var inst_16744 = (state_16780[9]);var inst_16744__$1 = (state_16780[2]);var inst_16745 = (inst_16744__$1 == null);var inst_16746 = cljs.core.not.call(null,inst_16745);var state_16780__$1 = (function (){var statearr_16785 = state_16780;(statearr_16785[9] = inst_16744__$1);
return statearr_16785;
})();if(inst_16746)
{var statearr_16786_16813 = state_16780__$1;(statearr_16786_16813[1] = 5);
} else
{var statearr_16787_16814 = state_16780__$1;(statearr_16787_16814[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16781 === 15))
{var inst_16770 = (state_16780[2]);var state_16780__$1 = state_16780;var statearr_16788_16815 = state_16780__$1;(statearr_16788_16815[2] = inst_16770);
(statearr_16788_16815[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16781 === 13))
{var state_16780__$1 = state_16780;var statearr_16789_16816 = state_16780__$1;(statearr_16789_16816[2] = null);
(statearr_16789_16816[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16781 === 6))
{var inst_16740 = (state_16780[8]);var inst_16765 = inst_16740.length;var inst_16766 = (inst_16765 > 0);var state_16780__$1 = state_16780;if(cljs.core.truth_(inst_16766))
{var statearr_16790_16817 = state_16780__$1;(statearr_16790_16817[1] = 12);
} else
{var statearr_16791_16818 = state_16780__$1;(statearr_16791_16818[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16781 === 3))
{var inst_16778 = (state_16780[2]);var state_16780__$1 = state_16780;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16780__$1,inst_16778);
} else
{if((state_val_16781 === 12))
{var inst_16740 = (state_16780[8]);var inst_16768 = cljs.core.vec.call(null,inst_16740);var state_16780__$1 = state_16780;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16780__$1,15,out,inst_16768);
} else
{if((state_val_16781 === 2))
{var state_16780__$1 = state_16780;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16780__$1,4,ch);
} else
{if((state_val_16781 === 11))
{var inst_16744 = (state_16780[9]);var inst_16748 = (state_16780[10]);var inst_16758 = (state_16780[2]);var inst_16759 = [];var inst_16760 = inst_16759.push(inst_16744);var inst_16740 = inst_16759;var inst_16741 = inst_16748;var state_16780__$1 = (function (){var statearr_16792 = state_16780;(statearr_16792[7] = inst_16741);
(statearr_16792[8] = inst_16740);
(statearr_16792[11] = inst_16760);
(statearr_16792[12] = inst_16758);
return statearr_16792;
})();var statearr_16793_16819 = state_16780__$1;(statearr_16793_16819[2] = null);
(statearr_16793_16819[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16781 === 9))
{var inst_16740 = (state_16780[8]);var inst_16756 = cljs.core.vec.call(null,inst_16740);var state_16780__$1 = state_16780;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16780__$1,11,out,inst_16756);
} else
{if((state_val_16781 === 5))
{var inst_16741 = (state_16780[7]);var inst_16744 = (state_16780[9]);var inst_16748 = (state_16780[10]);var inst_16748__$1 = f.call(null,inst_16744);var inst_16749 = cljs.core._EQ_.call(null,inst_16748__$1,inst_16741);var inst_16750 = cljs.core.keyword_identical_QMARK_.call(null,inst_16741,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16751 = (inst_16749) || (inst_16750);var state_16780__$1 = (function (){var statearr_16794 = state_16780;(statearr_16794[10] = inst_16748__$1);
return statearr_16794;
})();if(cljs.core.truth_(inst_16751))
{var statearr_16795_16820 = state_16780__$1;(statearr_16795_16820[1] = 8);
} else
{var statearr_16796_16821 = state_16780__$1;(statearr_16796_16821[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16781 === 14))
{var inst_16773 = (state_16780[2]);var inst_16774 = cljs.core.async.close_BANG_.call(null,out);var state_16780__$1 = (function (){var statearr_16798 = state_16780;(statearr_16798[13] = inst_16773);
return statearr_16798;
})();var statearr_16799_16822 = state_16780__$1;(statearr_16799_16822[2] = inst_16774);
(statearr_16799_16822[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16781 === 10))
{var inst_16763 = (state_16780[2]);var state_16780__$1 = state_16780;var statearr_16800_16823 = state_16780__$1;(statearr_16800_16823[2] = inst_16763);
(statearr_16800_16823[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16781 === 8))
{var inst_16744 = (state_16780[9]);var inst_16740 = (state_16780[8]);var inst_16748 = (state_16780[10]);var inst_16753 = inst_16740.push(inst_16744);var tmp16797 = inst_16740;var inst_16740__$1 = tmp16797;var inst_16741 = inst_16748;var state_16780__$1 = (function (){var statearr_16801 = state_16780;(statearr_16801[7] = inst_16741);
(statearr_16801[8] = inst_16740__$1);
(statearr_16801[14] = inst_16753);
return statearr_16801;
})();var statearr_16802_16824 = state_16780__$1;(statearr_16802_16824[2] = null);
(statearr_16802_16824[1] = 2);
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
});})(c__5689__auto___16810,out))
;return ((function (switch__5674__auto__,c__5689__auto___16810,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_16806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16806[0] = state_machine__5675__auto__);
(statearr_16806[1] = 1);
return statearr_16806;
});
var state_machine__5675__auto____1 = (function (state_16780){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_16780);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e16807){if((e16807 instanceof Object))
{var ex__5678__auto__ = e16807;var statearr_16808_16825 = state_16780;(statearr_16808_16825[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16780);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16807;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16826 = state_16780;
state_16780 = G__16826;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_16780){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_16780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___16810,out))
})();var state__5691__auto__ = (function (){var statearr_16809 = f__5690__auto__.call(null);(statearr_16809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___16810);
return statearr_16809;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___16810,out))
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
