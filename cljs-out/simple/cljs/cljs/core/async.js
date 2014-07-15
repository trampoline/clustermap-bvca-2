// Compiled by ClojureScript 0.0-2261
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25643 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25643 = (function (f,fn_handler,meta25644){
this.f = f;
this.fn_handler = fn_handler;
this.meta25644 = meta25644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25643.cljs$lang$type = true;
cljs.core.async.t25643.cljs$lang$ctorStr = "cljs.core.async/t25643";
cljs.core.async.t25643.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t25643");
});
cljs.core.async.t25643.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25643.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25643.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25645){var self__ = this;
var _25645__$1 = this;return self__.meta25644;
});
cljs.core.async.t25643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25645,meta25644__$1){var self__ = this;
var _25645__$1 = this;return (new cljs.core.async.t25643(self__.f,self__.fn_handler,meta25644__$1));
});
cljs.core.async.__GT_t25643 = (function __GT_t25643(f__$1,fn_handler__$1,meta25644){return (new cljs.core.async.t25643(f__$1,fn_handler__$1,meta25644));
});
}
return (new cljs.core.async.t25643(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25647 = buff;if(G__25647)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__25647.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25647.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25647);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25647);
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
{var val_25648 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_25648);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_25648,ret){
return (function (){return fn1.call(null,val_25648);
});})(val_25648,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3531__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___25649 = n;var x_25650 = (0);while(true){
if((x_25650 < n__4399__auto___25649))
{(a[x_25650] = (0));
{
var G__25651 = (x_25650 + (1));
x_25650 = G__25651;
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
var G__25652 = (i + (1));
i = G__25652;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25656 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25656 = (function (flag,alt_flag,meta25657){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25657 = meta25657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25656.cljs$lang$type = true;
cljs.core.async.t25656.cljs$lang$ctorStr = "cljs.core.async/t25656";
cljs.core.async.t25656.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t25656");
});})(flag))
;
cljs.core.async.t25656.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t25656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t25656.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25658){var self__ = this;
var _25658__$1 = this;return self__.meta25657;
});})(flag))
;
cljs.core.async.t25656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25658,meta25657__$1){var self__ = this;
var _25658__$1 = this;return (new cljs.core.async.t25656(self__.flag,self__.alt_flag,meta25657__$1));
});})(flag))
;
cljs.core.async.__GT_t25656 = ((function (flag){
return (function __GT_t25656(flag__$1,alt_flag__$1,meta25657){return (new cljs.core.async.t25656(flag__$1,alt_flag__$1,meta25657));
});})(flag))
;
}
return (new cljs.core.async.t25656(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25662 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25662 = (function (cb,flag,alt_handler,meta25663){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25663 = meta25663;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25662.cljs$lang$type = true;
cljs.core.async.t25662.cljs$lang$ctorStr = "cljs.core.async/t25662";
cljs.core.async.t25662.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t25662");
});
cljs.core.async.t25662.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25662.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25662.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25664){var self__ = this;
var _25664__$1 = this;return self__.meta25663;
});
cljs.core.async.t25662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25664,meta25663__$1){var self__ = this;
var _25664__$1 = this;return (new cljs.core.async.t25662(self__.cb,self__.flag,self__.alt_handler,meta25663__$1));
});
cljs.core.async.__GT_t25662 = (function __GT_t25662(cb__$1,flag__$1,alt_handler__$1,meta25663){return (new cljs.core.async.t25662(cb__$1,flag__$1,alt_handler__$1,meta25663));
});
}
return (new cljs.core.async.t25662(cb,flag,alt_handler,null));
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
return (function (p1__25665_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25665_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__25666 = (i + (1));
i = G__25666;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3531__auto__;
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
var alts_BANG___delegate = function (ports,p__25667){var map__25669 = p__25667;var map__25669__$1 = ((cljs.core.seq_QMARK_.call(null,map__25669))?cljs.core.apply.call(null,cljs.core.hash_map,map__25669):map__25669);var opts = map__25669__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__25667 = null;if (arguments.length > 1) {
  p__25667 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25667);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25670){
var ports = cljs.core.first(arglist__25670);
var p__25667 = cljs.core.rest(arglist__25670);
return alts_BANG___delegate(ports,p__25667);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25678 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25678 = (function (ch,f,map_LT_,meta25679){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25679 = meta25679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25678.cljs$lang$type = true;
cljs.core.async.t25678.cljs$lang$ctorStr = "cljs.core.async/t25678";
cljs.core.async.t25678.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t25678");
});
cljs.core.async.t25678.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25678.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t25678.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25678.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25681 = (function (fn1,_,meta25679,ch,f,map_LT_,meta25682){
this.fn1 = fn1;
this._ = _;
this.meta25679 = meta25679;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25682 = meta25682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25681.cljs$lang$type = true;
cljs.core.async.t25681.cljs$lang$ctorStr = "cljs.core.async/t25681";
cljs.core.async.t25681.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t25681");
});})(___$1))
;
cljs.core.async.t25681.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25681.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25671_SHARP_){return f1.call(null,(((p1__25671_SHARP_ == null))?null:self__.f.call(null,p1__25671_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25683){var self__ = this;
var _25683__$1 = this;return self__.meta25682;
});})(___$1))
;
cljs.core.async.t25681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25683,meta25682__$1){var self__ = this;
var _25683__$1 = this;return (new cljs.core.async.t25681(self__.fn1,self__._,self__.meta25679,self__.ch,self__.f,self__.map_LT_,meta25682__$1));
});})(___$1))
;
cljs.core.async.__GT_t25681 = ((function (___$1){
return (function __GT_t25681(fn1__$1,___$2,meta25679__$1,ch__$2,f__$2,map_LT___$2,meta25682){return (new cljs.core.async.t25681(fn1__$1,___$2,meta25679__$1,ch__$2,f__$2,map_LT___$2,meta25682));
});})(___$1))
;
}
return (new cljs.core.async.t25681(fn1,___$1,self__.meta25679,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t25678.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25678.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25680){var self__ = this;
var _25680__$1 = this;return self__.meta25679;
});
cljs.core.async.t25678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25680,meta25679__$1){var self__ = this;
var _25680__$1 = this;return (new cljs.core.async.t25678(self__.ch,self__.f,self__.map_LT_,meta25679__$1));
});
cljs.core.async.__GT_t25678 = (function __GT_t25678(ch__$1,f__$1,map_LT___$1,meta25679){return (new cljs.core.async.t25678(ch__$1,f__$1,map_LT___$1,meta25679));
});
}
return (new cljs.core.async.t25678(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25687 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25687 = (function (ch,f,map_GT_,meta25688){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25688 = meta25688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25687.cljs$lang$type = true;
cljs.core.async.t25687.cljs$lang$ctorStr = "cljs.core.async/t25687";
cljs.core.async.t25687.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t25687");
});
cljs.core.async.t25687.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25687.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t25687.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25687.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25687.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25687.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25689){var self__ = this;
var _25689__$1 = this;return self__.meta25688;
});
cljs.core.async.t25687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25689,meta25688__$1){var self__ = this;
var _25689__$1 = this;return (new cljs.core.async.t25687(self__.ch,self__.f,self__.map_GT_,meta25688__$1));
});
cljs.core.async.__GT_t25687 = (function __GT_t25687(ch__$1,f__$1,map_GT___$1,meta25688){return (new cljs.core.async.t25687(ch__$1,f__$1,map_GT___$1,meta25688));
});
}
return (new cljs.core.async.t25687(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25693 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25693 = (function (ch,p,filter_GT_,meta25694){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25694 = meta25694;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25693.cljs$lang$type = true;
cljs.core.async.t25693.cljs$lang$ctorStr = "cljs.core.async/t25693";
cljs.core.async.t25693.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t25693");
});
cljs.core.async.t25693.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25693.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t25693.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25693.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25693.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25693.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25695){var self__ = this;
var _25695__$1 = this;return self__.meta25694;
});
cljs.core.async.t25693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25695,meta25694__$1){var self__ = this;
var _25695__$1 = this;return (new cljs.core.async.t25693(self__.ch,self__.p,self__.filter_GT_,meta25694__$1));
});
cljs.core.async.__GT_t25693 = (function __GT_t25693(ch__$1,p__$1,filter_GT___$1,meta25694){return (new cljs.core.async.t25693(ch__$1,p__$1,filter_GT___$1,meta25694));
});
}
return (new cljs.core.async.t25693(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___25778 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___25778,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___25778,out){
return (function (state_25757){var state_val_25758 = (state_25757[(1)]);if((state_val_25758 === (7)))
{var inst_25753 = (state_25757[(2)]);var state_25757__$1 = state_25757;var statearr_25759_25779 = state_25757__$1;(statearr_25759_25779[(2)] = inst_25753);
(statearr_25759_25779[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25758 === (1)))
{var state_25757__$1 = state_25757;var statearr_25760_25780 = state_25757__$1;(statearr_25760_25780[(2)] = null);
(statearr_25760_25780[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25758 === (4)))
{var inst_25739 = (state_25757[(7)]);var inst_25739__$1 = (state_25757[(2)]);var inst_25740 = (inst_25739__$1 == null);var state_25757__$1 = (function (){var statearr_25761 = state_25757;(statearr_25761[(7)] = inst_25739__$1);
return statearr_25761;
})();if(cljs.core.truth_(inst_25740))
{var statearr_25762_25781 = state_25757__$1;(statearr_25762_25781[(1)] = (5));
} else
{var statearr_25763_25782 = state_25757__$1;(statearr_25763_25782[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25758 === (6)))
{var inst_25739 = (state_25757[(7)]);var inst_25744 = p.call(null,inst_25739);var state_25757__$1 = state_25757;if(cljs.core.truth_(inst_25744))
{var statearr_25764_25783 = state_25757__$1;(statearr_25764_25783[(1)] = (8));
} else
{var statearr_25765_25784 = state_25757__$1;(statearr_25765_25784[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25758 === (3)))
{var inst_25755 = (state_25757[(2)]);var state_25757__$1 = state_25757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25757__$1,inst_25755);
} else
{if((state_val_25758 === (2)))
{var state_25757__$1 = state_25757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25757__$1,(4),ch);
} else
{if((state_val_25758 === (11)))
{var inst_25747 = (state_25757[(2)]);var state_25757__$1 = state_25757;var statearr_25766_25785 = state_25757__$1;(statearr_25766_25785[(2)] = inst_25747);
(statearr_25766_25785[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25758 === (9)))
{var state_25757__$1 = state_25757;var statearr_25767_25786 = state_25757__$1;(statearr_25767_25786[(2)] = null);
(statearr_25767_25786[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25758 === (5)))
{var inst_25742 = cljs.core.async.close_BANG_.call(null,out);var state_25757__$1 = state_25757;var statearr_25768_25787 = state_25757__$1;(statearr_25768_25787[(2)] = inst_25742);
(statearr_25768_25787[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25758 === (10)))
{var inst_25750 = (state_25757[(2)]);var state_25757__$1 = (function (){var statearr_25769 = state_25757;(statearr_25769[(8)] = inst_25750);
return statearr_25769;
})();var statearr_25770_25788 = state_25757__$1;(statearr_25770_25788[(2)] = null);
(statearr_25770_25788[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25758 === (8)))
{var inst_25739 = (state_25757[(7)]);var state_25757__$1 = state_25757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25757__$1,(11),out,inst_25739);
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
});})(c__5693__auto___25778,out))
;return ((function (switch__5678__auto__,c__5693__auto___25778,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_25774 = [null,null,null,null,null,null,null,null,null];(statearr_25774[(0)] = state_machine__5679__auto__);
(statearr_25774[(1)] = (1));
return statearr_25774;
});
var state_machine__5679__auto____1 = (function (state_25757){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_25757);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e25775){if((e25775 instanceof Object))
{var ex__5682__auto__ = e25775;var statearr_25776_25789 = state_25757;(statearr_25776_25789[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25757);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25775;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25790 = state_25757;
state_25757 = G__25790;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_25757){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_25757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___25778,out))
})();var state__5695__auto__ = (function (){var statearr_25777 = f__5694__auto__.call(null);(statearr_25777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___25778);
return statearr_25777;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___25778,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_25942){var state_val_25943 = (state_25942[(1)]);if((state_val_25943 === (7)))
{var inst_25938 = (state_25942[(2)]);var state_25942__$1 = state_25942;var statearr_25944_25981 = state_25942__$1;(statearr_25944_25981[(2)] = inst_25938);
(statearr_25944_25981[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (20)))
{var inst_25913 = (state_25942[(7)]);var inst_25924 = (state_25942[(2)]);var inst_25925 = cljs.core.next.call(null,inst_25913);var inst_25899 = inst_25925;var inst_25900 = null;var inst_25901 = (0);var inst_25902 = (0);var state_25942__$1 = (function (){var statearr_25945 = state_25942;(statearr_25945[(8)] = inst_25902);
(statearr_25945[(9)] = inst_25924);
(statearr_25945[(10)] = inst_25899);
(statearr_25945[(11)] = inst_25901);
(statearr_25945[(12)] = inst_25900);
return statearr_25945;
})();var statearr_25946_25982 = state_25942__$1;(statearr_25946_25982[(2)] = null);
(statearr_25946_25982[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (1)))
{var state_25942__$1 = state_25942;var statearr_25947_25983 = state_25942__$1;(statearr_25947_25983[(2)] = null);
(statearr_25947_25983[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (4)))
{var inst_25888 = (state_25942[(13)]);var inst_25888__$1 = (state_25942[(2)]);var inst_25889 = (inst_25888__$1 == null);var state_25942__$1 = (function (){var statearr_25951 = state_25942;(statearr_25951[(13)] = inst_25888__$1);
return statearr_25951;
})();if(cljs.core.truth_(inst_25889))
{var statearr_25952_25984 = state_25942__$1;(statearr_25952_25984[(1)] = (5));
} else
{var statearr_25953_25985 = state_25942__$1;(statearr_25953_25985[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (15)))
{var state_25942__$1 = state_25942;var statearr_25954_25986 = state_25942__$1;(statearr_25954_25986[(2)] = null);
(statearr_25954_25986[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (13)))
{var inst_25902 = (state_25942[(8)]);var inst_25899 = (state_25942[(10)]);var inst_25901 = (state_25942[(11)]);var inst_25900 = (state_25942[(12)]);var inst_25909 = (state_25942[(2)]);var inst_25910 = (inst_25902 + (1));var tmp25948 = inst_25899;var tmp25949 = inst_25901;var tmp25950 = inst_25900;var inst_25899__$1 = tmp25948;var inst_25900__$1 = tmp25950;var inst_25901__$1 = tmp25949;var inst_25902__$1 = inst_25910;var state_25942__$1 = (function (){var statearr_25955 = state_25942;(statearr_25955[(8)] = inst_25902__$1);
(statearr_25955[(10)] = inst_25899__$1);
(statearr_25955[(11)] = inst_25901__$1);
(statearr_25955[(14)] = inst_25909);
(statearr_25955[(12)] = inst_25900__$1);
return statearr_25955;
})();var statearr_25956_25987 = state_25942__$1;(statearr_25956_25987[(2)] = null);
(statearr_25956_25987[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (6)))
{var inst_25888 = (state_25942[(13)]);var inst_25893 = f.call(null,inst_25888);var inst_25898 = cljs.core.seq.call(null,inst_25893);var inst_25899 = inst_25898;var inst_25900 = null;var inst_25901 = (0);var inst_25902 = (0);var state_25942__$1 = (function (){var statearr_25957 = state_25942;(statearr_25957[(8)] = inst_25902);
(statearr_25957[(10)] = inst_25899);
(statearr_25957[(11)] = inst_25901);
(statearr_25957[(12)] = inst_25900);
return statearr_25957;
})();var statearr_25958_25988 = state_25942__$1;(statearr_25958_25988[(2)] = null);
(statearr_25958_25988[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (17)))
{var inst_25913 = (state_25942[(7)]);var inst_25917 = cljs.core.chunk_first.call(null,inst_25913);var inst_25918 = cljs.core.chunk_rest.call(null,inst_25913);var inst_25919 = cljs.core.count.call(null,inst_25917);var inst_25899 = inst_25918;var inst_25900 = inst_25917;var inst_25901 = inst_25919;var inst_25902 = (0);var state_25942__$1 = (function (){var statearr_25959 = state_25942;(statearr_25959[(8)] = inst_25902);
(statearr_25959[(10)] = inst_25899);
(statearr_25959[(11)] = inst_25901);
(statearr_25959[(12)] = inst_25900);
return statearr_25959;
})();var statearr_25960_25989 = state_25942__$1;(statearr_25960_25989[(2)] = null);
(statearr_25960_25989[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (3)))
{var inst_25940 = (state_25942[(2)]);var state_25942__$1 = state_25942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25942__$1,inst_25940);
} else
{if((state_val_25943 === (12)))
{var inst_25933 = (state_25942[(2)]);var state_25942__$1 = state_25942;var statearr_25961_25990 = state_25942__$1;(statearr_25961_25990[(2)] = inst_25933);
(statearr_25961_25990[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (2)))
{var state_25942__$1 = state_25942;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25942__$1,(4),in$);
} else
{if((state_val_25943 === (19)))
{var inst_25928 = (state_25942[(2)]);var state_25942__$1 = state_25942;var statearr_25962_25991 = state_25942__$1;(statearr_25962_25991[(2)] = inst_25928);
(statearr_25962_25991[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (11)))
{var inst_25913 = (state_25942[(7)]);var inst_25899 = (state_25942[(10)]);var inst_25913__$1 = cljs.core.seq.call(null,inst_25899);var state_25942__$1 = (function (){var statearr_25963 = state_25942;(statearr_25963[(7)] = inst_25913__$1);
return statearr_25963;
})();if(inst_25913__$1)
{var statearr_25964_25992 = state_25942__$1;(statearr_25964_25992[(1)] = (14));
} else
{var statearr_25965_25993 = state_25942__$1;(statearr_25965_25993[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (9)))
{var inst_25935 = (state_25942[(2)]);var state_25942__$1 = (function (){var statearr_25966 = state_25942;(statearr_25966[(15)] = inst_25935);
return statearr_25966;
})();var statearr_25967_25994 = state_25942__$1;(statearr_25967_25994[(2)] = null);
(statearr_25967_25994[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (5)))
{var inst_25891 = cljs.core.async.close_BANG_.call(null,out);var state_25942__$1 = state_25942;var statearr_25968_25995 = state_25942__$1;(statearr_25968_25995[(2)] = inst_25891);
(statearr_25968_25995[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (14)))
{var inst_25913 = (state_25942[(7)]);var inst_25915 = cljs.core.chunked_seq_QMARK_.call(null,inst_25913);var state_25942__$1 = state_25942;if(inst_25915)
{var statearr_25969_25996 = state_25942__$1;(statearr_25969_25996[(1)] = (17));
} else
{var statearr_25970_25997 = state_25942__$1;(statearr_25970_25997[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (16)))
{var inst_25931 = (state_25942[(2)]);var state_25942__$1 = state_25942;var statearr_25971_25998 = state_25942__$1;(statearr_25971_25998[(2)] = inst_25931);
(statearr_25971_25998[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (10)))
{var inst_25902 = (state_25942[(8)]);var inst_25900 = (state_25942[(12)]);var inst_25907 = cljs.core._nth.call(null,inst_25900,inst_25902);var state_25942__$1 = state_25942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25942__$1,(13),out,inst_25907);
} else
{if((state_val_25943 === (18)))
{var inst_25913 = (state_25942[(7)]);var inst_25922 = cljs.core.first.call(null,inst_25913);var state_25942__$1 = state_25942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25942__$1,(20),out,inst_25922);
} else
{if((state_val_25943 === (8)))
{var inst_25902 = (state_25942[(8)]);var inst_25901 = (state_25942[(11)]);var inst_25904 = (inst_25902 < inst_25901);var inst_25905 = inst_25904;var state_25942__$1 = state_25942;if(cljs.core.truth_(inst_25905))
{var statearr_25972_25999 = state_25942__$1;(statearr_25972_25999[(1)] = (10));
} else
{var statearr_25973_26000 = state_25942__$1;(statearr_25973_26000[(1)] = (11));
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_25977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25977[(0)] = state_machine__5679__auto__);
(statearr_25977[(1)] = (1));
return statearr_25977;
});
var state_machine__5679__auto____1 = (function (state_25942){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_25942);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e25978){if((e25978 instanceof Object))
{var ex__5682__auto__ = e25978;var statearr_25979_26001 = state_25942;(statearr_25979_26001[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25942);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25978;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26002 = state_25942;
state_25942 = G__26002;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_25942){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_25942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_25980 = f__5694__auto__.call(null);(statearr_25980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_25980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___26083 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___26083){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___26083){
return (function (state_26062){var state_val_26063 = (state_26062[(1)]);if((state_val_26063 === (7)))
{var inst_26058 = (state_26062[(2)]);var state_26062__$1 = state_26062;var statearr_26064_26084 = state_26062__$1;(statearr_26064_26084[(2)] = inst_26058);
(statearr_26064_26084[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26063 === (1)))
{var state_26062__$1 = state_26062;var statearr_26065_26085 = state_26062__$1;(statearr_26065_26085[(2)] = null);
(statearr_26065_26085[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26063 === (4)))
{var inst_26045 = (state_26062[(7)]);var inst_26045__$1 = (state_26062[(2)]);var inst_26046 = (inst_26045__$1 == null);var state_26062__$1 = (function (){var statearr_26066 = state_26062;(statearr_26066[(7)] = inst_26045__$1);
return statearr_26066;
})();if(cljs.core.truth_(inst_26046))
{var statearr_26067_26086 = state_26062__$1;(statearr_26067_26086[(1)] = (5));
} else
{var statearr_26068_26087 = state_26062__$1;(statearr_26068_26087[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26063 === (6)))
{var inst_26045 = (state_26062[(7)]);var state_26062__$1 = state_26062;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26062__$1,(11),to,inst_26045);
} else
{if((state_val_26063 === (3)))
{var inst_26060 = (state_26062[(2)]);var state_26062__$1 = state_26062;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26062__$1,inst_26060);
} else
{if((state_val_26063 === (2)))
{var state_26062__$1 = state_26062;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26062__$1,(4),from);
} else
{if((state_val_26063 === (11)))
{var inst_26055 = (state_26062[(2)]);var state_26062__$1 = (function (){var statearr_26069 = state_26062;(statearr_26069[(8)] = inst_26055);
return statearr_26069;
})();var statearr_26070_26088 = state_26062__$1;(statearr_26070_26088[(2)] = null);
(statearr_26070_26088[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26063 === (9)))
{var state_26062__$1 = state_26062;var statearr_26071_26089 = state_26062__$1;(statearr_26071_26089[(2)] = null);
(statearr_26071_26089[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26063 === (5)))
{var state_26062__$1 = state_26062;if(cljs.core.truth_(close_QMARK_))
{var statearr_26072_26090 = state_26062__$1;(statearr_26072_26090[(1)] = (8));
} else
{var statearr_26073_26091 = state_26062__$1;(statearr_26073_26091[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26063 === (10)))
{var inst_26052 = (state_26062[(2)]);var state_26062__$1 = state_26062;var statearr_26074_26092 = state_26062__$1;(statearr_26074_26092[(2)] = inst_26052);
(statearr_26074_26092[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26063 === (8)))
{var inst_26049 = cljs.core.async.close_BANG_.call(null,to);var state_26062__$1 = state_26062;var statearr_26075_26093 = state_26062__$1;(statearr_26075_26093[(2)] = inst_26049);
(statearr_26075_26093[(1)] = (10));
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
});})(c__5693__auto___26083))
;return ((function (switch__5678__auto__,c__5693__auto___26083){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_26079 = [null,null,null,null,null,null,null,null,null];(statearr_26079[(0)] = state_machine__5679__auto__);
(statearr_26079[(1)] = (1));
return statearr_26079;
});
var state_machine__5679__auto____1 = (function (state_26062){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_26062);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e26080){if((e26080 instanceof Object))
{var ex__5682__auto__ = e26080;var statearr_26081_26094 = state_26062;(statearr_26081_26094[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26062);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26080;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26095 = state_26062;
state_26062 = G__26095;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_26062){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_26062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___26083))
})();var state__5695__auto__ = (function (){var statearr_26082 = f__5694__auto__.call(null);(statearr_26082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___26083);
return statearr_26082;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___26083))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___26182 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___26182,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___26182,tc,fc){
return (function (state_26160){var state_val_26161 = (state_26160[(1)]);if((state_val_26161 === (7)))
{var inst_26156 = (state_26160[(2)]);var state_26160__$1 = state_26160;var statearr_26162_26183 = state_26160__$1;(statearr_26162_26183[(2)] = inst_26156);
(statearr_26162_26183[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26161 === (1)))
{var state_26160__$1 = state_26160;var statearr_26163_26184 = state_26160__$1;(statearr_26163_26184[(2)] = null);
(statearr_26163_26184[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26161 === (4)))
{var inst_26141 = (state_26160[(7)]);var inst_26141__$1 = (state_26160[(2)]);var inst_26142 = (inst_26141__$1 == null);var state_26160__$1 = (function (){var statearr_26164 = state_26160;(statearr_26164[(7)] = inst_26141__$1);
return statearr_26164;
})();if(cljs.core.truth_(inst_26142))
{var statearr_26165_26185 = state_26160__$1;(statearr_26165_26185[(1)] = (5));
} else
{var statearr_26166_26186 = state_26160__$1;(statearr_26166_26186[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26161 === (6)))
{var inst_26141 = (state_26160[(7)]);var inst_26147 = p.call(null,inst_26141);var state_26160__$1 = state_26160;if(cljs.core.truth_(inst_26147))
{var statearr_26167_26187 = state_26160__$1;(statearr_26167_26187[(1)] = (9));
} else
{var statearr_26168_26188 = state_26160__$1;(statearr_26168_26188[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26161 === (3)))
{var inst_26158 = (state_26160[(2)]);var state_26160__$1 = state_26160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26160__$1,inst_26158);
} else
{if((state_val_26161 === (2)))
{var state_26160__$1 = state_26160;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26160__$1,(4),ch);
} else
{if((state_val_26161 === (11)))
{var inst_26141 = (state_26160[(7)]);var inst_26151 = (state_26160[(2)]);var state_26160__$1 = state_26160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26160__$1,(8),inst_26151,inst_26141);
} else
{if((state_val_26161 === (9)))
{var state_26160__$1 = state_26160;var statearr_26169_26189 = state_26160__$1;(statearr_26169_26189[(2)] = tc);
(statearr_26169_26189[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26161 === (5)))
{var inst_26144 = cljs.core.async.close_BANG_.call(null,tc);var inst_26145 = cljs.core.async.close_BANG_.call(null,fc);var state_26160__$1 = (function (){var statearr_26170 = state_26160;(statearr_26170[(8)] = inst_26144);
return statearr_26170;
})();var statearr_26171_26190 = state_26160__$1;(statearr_26171_26190[(2)] = inst_26145);
(statearr_26171_26190[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26161 === (10)))
{var state_26160__$1 = state_26160;var statearr_26172_26191 = state_26160__$1;(statearr_26172_26191[(2)] = fc);
(statearr_26172_26191[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26161 === (8)))
{var inst_26153 = (state_26160[(2)]);var state_26160__$1 = (function (){var statearr_26173 = state_26160;(statearr_26173[(9)] = inst_26153);
return statearr_26173;
})();var statearr_26174_26192 = state_26160__$1;(statearr_26174_26192[(2)] = null);
(statearr_26174_26192[(1)] = (2));
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
});})(c__5693__auto___26182,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___26182,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_26178 = [null,null,null,null,null,null,null,null,null,null];(statearr_26178[(0)] = state_machine__5679__auto__);
(statearr_26178[(1)] = (1));
return statearr_26178;
});
var state_machine__5679__auto____1 = (function (state_26160){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_26160);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e26179){if((e26179 instanceof Object))
{var ex__5682__auto__ = e26179;var statearr_26180_26193 = state_26160;(statearr_26180_26193[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26160);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26179;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26194 = state_26160;
state_26160 = G__26194;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_26160){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_26160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___26182,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_26181 = f__5694__auto__.call(null);(statearr_26181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___26182);
return statearr_26181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___26182,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_26241){var state_val_26242 = (state_26241[(1)]);if((state_val_26242 === (7)))
{var inst_26237 = (state_26241[(2)]);var state_26241__$1 = state_26241;var statearr_26243_26259 = state_26241__$1;(statearr_26243_26259[(2)] = inst_26237);
(statearr_26243_26259[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26242 === (6)))
{var inst_26227 = (state_26241[(7)]);var inst_26230 = (state_26241[(8)]);var inst_26234 = f.call(null,inst_26227,inst_26230);var inst_26227__$1 = inst_26234;var state_26241__$1 = (function (){var statearr_26244 = state_26241;(statearr_26244[(7)] = inst_26227__$1);
return statearr_26244;
})();var statearr_26245_26260 = state_26241__$1;(statearr_26245_26260[(2)] = null);
(statearr_26245_26260[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26242 === (5)))
{var inst_26227 = (state_26241[(7)]);var state_26241__$1 = state_26241;var statearr_26246_26261 = state_26241__$1;(statearr_26246_26261[(2)] = inst_26227);
(statearr_26246_26261[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26242 === (4)))
{var inst_26230 = (state_26241[(8)]);var inst_26230__$1 = (state_26241[(2)]);var inst_26231 = (inst_26230__$1 == null);var state_26241__$1 = (function (){var statearr_26247 = state_26241;(statearr_26247[(8)] = inst_26230__$1);
return statearr_26247;
})();if(cljs.core.truth_(inst_26231))
{var statearr_26248_26262 = state_26241__$1;(statearr_26248_26262[(1)] = (5));
} else
{var statearr_26249_26263 = state_26241__$1;(statearr_26249_26263[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26242 === (3)))
{var inst_26239 = (state_26241[(2)]);var state_26241__$1 = state_26241;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26241__$1,inst_26239);
} else
{if((state_val_26242 === (2)))
{var state_26241__$1 = state_26241;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26241__$1,(4),ch);
} else
{if((state_val_26242 === (1)))
{var inst_26227 = init;var state_26241__$1 = (function (){var statearr_26250 = state_26241;(statearr_26250[(7)] = inst_26227);
return statearr_26250;
})();var statearr_26251_26264 = state_26241__$1;(statearr_26251_26264[(2)] = null);
(statearr_26251_26264[(1)] = (2));
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_26255 = [null,null,null,null,null,null,null,null,null];(statearr_26255[(0)] = state_machine__5679__auto__);
(statearr_26255[(1)] = (1));
return statearr_26255;
});
var state_machine__5679__auto____1 = (function (state_26241){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_26241);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e26256){if((e26256 instanceof Object))
{var ex__5682__auto__ = e26256;var statearr_26257_26265 = state_26241;(statearr_26257_26265[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26241);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26256;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26266 = state_26241;
state_26241 = G__26266;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_26241){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_26241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_26258 = f__5694__auto__.call(null);(statearr_26258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_26258;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_26328){var state_val_26329 = (state_26328[(1)]);if((state_val_26329 === (7)))
{var inst_26309 = (state_26328[(7)]);var inst_26314 = (state_26328[(2)]);var inst_26315 = cljs.core.next.call(null,inst_26309);var inst_26309__$1 = inst_26315;var state_26328__$1 = (function (){var statearr_26330 = state_26328;(statearr_26330[(8)] = inst_26314);
(statearr_26330[(7)] = inst_26309__$1);
return statearr_26330;
})();var statearr_26331_26349 = state_26328__$1;(statearr_26331_26349[(2)] = null);
(statearr_26331_26349[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26329 === (1)))
{var inst_26308 = cljs.core.seq.call(null,coll);var inst_26309 = inst_26308;var state_26328__$1 = (function (){var statearr_26332 = state_26328;(statearr_26332[(7)] = inst_26309);
return statearr_26332;
})();var statearr_26333_26350 = state_26328__$1;(statearr_26333_26350[(2)] = null);
(statearr_26333_26350[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26329 === (4)))
{var inst_26309 = (state_26328[(7)]);var inst_26312 = cljs.core.first.call(null,inst_26309);var state_26328__$1 = state_26328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26328__$1,(7),ch,inst_26312);
} else
{if((state_val_26329 === (6)))
{var inst_26324 = (state_26328[(2)]);var state_26328__$1 = state_26328;var statearr_26334_26351 = state_26328__$1;(statearr_26334_26351[(2)] = inst_26324);
(statearr_26334_26351[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26329 === (3)))
{var inst_26326 = (state_26328[(2)]);var state_26328__$1 = state_26328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26328__$1,inst_26326);
} else
{if((state_val_26329 === (2)))
{var inst_26309 = (state_26328[(7)]);var state_26328__$1 = state_26328;if(cljs.core.truth_(inst_26309))
{var statearr_26335_26352 = state_26328__$1;(statearr_26335_26352[(1)] = (4));
} else
{var statearr_26336_26353 = state_26328__$1;(statearr_26336_26353[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26329 === (9)))
{var state_26328__$1 = state_26328;var statearr_26337_26354 = state_26328__$1;(statearr_26337_26354[(2)] = null);
(statearr_26337_26354[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26329 === (5)))
{var state_26328__$1 = state_26328;if(cljs.core.truth_(close_QMARK_))
{var statearr_26338_26355 = state_26328__$1;(statearr_26338_26355[(1)] = (8));
} else
{var statearr_26339_26356 = state_26328__$1;(statearr_26339_26356[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26329 === (10)))
{var inst_26322 = (state_26328[(2)]);var state_26328__$1 = state_26328;var statearr_26340_26357 = state_26328__$1;(statearr_26340_26357[(2)] = inst_26322);
(statearr_26340_26357[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26329 === (8)))
{var inst_26319 = cljs.core.async.close_BANG_.call(null,ch);var state_26328__$1 = state_26328;var statearr_26341_26358 = state_26328__$1;(statearr_26341_26358[(2)] = inst_26319);
(statearr_26341_26358[(1)] = (10));
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_26345 = [null,null,null,null,null,null,null,null,null];(statearr_26345[(0)] = state_machine__5679__auto__);
(statearr_26345[(1)] = (1));
return statearr_26345;
});
var state_machine__5679__auto____1 = (function (state_26328){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_26328);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e26346){if((e26346 instanceof Object))
{var ex__5682__auto__ = e26346;var statearr_26347_26359 = state_26328;(statearr_26347_26359[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26328);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26360 = state_26328;
state_26328 = G__26360;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_26328){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_26328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_26348 = f__5694__auto__.call(null);(statearr_26348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_26348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
cljs.core.async.Mux = (function (){var obj26362 = {};return obj26362;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj26364 = {};return obj26364;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26588 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26588 = (function (cs,ch,mult,meta26589){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26589 = meta26589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26588.cljs$lang$type = true;
cljs.core.async.t26588.cljs$lang$ctorStr = "cljs.core.async/t26588";
cljs.core.async.t26588.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t26588");
});})(cs))
;
cljs.core.async.t26588.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26588.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26588.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26588.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26588.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26588.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26590){var self__ = this;
var _26590__$1 = this;return self__.meta26589;
});})(cs))
;
cljs.core.async.t26588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26590,meta26589__$1){var self__ = this;
var _26590__$1 = this;return (new cljs.core.async.t26588(self__.cs,self__.ch,self__.mult,meta26589__$1));
});})(cs))
;
cljs.core.async.__GT_t26588 = ((function (cs){
return (function __GT_t26588(cs__$1,ch__$1,mult__$1,meta26589){return (new cljs.core.async.t26588(cs__$1,ch__$1,mult__$1,meta26589));
});})(cs))
;
}
return (new cljs.core.async.t26588(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___26811 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___26811,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___26811,cs,m,dchan,dctr,done){
return (function (state_26725){var state_val_26726 = (state_26725[(1)]);if((state_val_26726 === (7)))
{var inst_26721 = (state_26725[(2)]);var state_26725__$1 = state_26725;var statearr_26727_26812 = state_26725__$1;(statearr_26727_26812[(2)] = inst_26721);
(statearr_26727_26812[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (20)))
{var inst_26622 = (state_26725[(7)]);var inst_26632 = cljs.core.first.call(null,inst_26622);var inst_26633 = cljs.core.nth.call(null,inst_26632,(0),null);var inst_26634 = cljs.core.nth.call(null,inst_26632,(1),null);var state_26725__$1 = (function (){var statearr_26728 = state_26725;(statearr_26728[(8)] = inst_26633);
return statearr_26728;
})();if(cljs.core.truth_(inst_26634))
{var statearr_26729_26813 = state_26725__$1;(statearr_26729_26813[(1)] = (22));
} else
{var statearr_26730_26814 = state_26725__$1;(statearr_26730_26814[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (27)))
{var inst_26664 = (state_26725[(9)]);var inst_26662 = (state_26725[(10)]);var inst_26669 = cljs.core._nth.call(null,inst_26662,inst_26664);var state_26725__$1 = (function (){var statearr_26731 = state_26725;(statearr_26731[(11)] = inst_26669);
return statearr_26731;
})();var statearr_26732_26815 = state_26725__$1;(statearr_26732_26815[(2)] = null);
(statearr_26732_26815[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (1)))
{var state_26725__$1 = state_26725;var statearr_26733_26816 = state_26725__$1;(statearr_26733_26816[(2)] = null);
(statearr_26733_26816[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (24)))
{var inst_26622 = (state_26725[(7)]);var inst_26639 = (state_26725[(2)]);var inst_26640 = cljs.core.next.call(null,inst_26622);var inst_26602 = inst_26640;var inst_26603 = null;var inst_26604 = (0);var inst_26605 = (0);var state_26725__$1 = (function (){var statearr_26734 = state_26725;(statearr_26734[(12)] = inst_26603);
(statearr_26734[(13)] = inst_26602);
(statearr_26734[(14)] = inst_26605);
(statearr_26734[(15)] = inst_26604);
(statearr_26734[(16)] = inst_26639);
return statearr_26734;
})();var statearr_26735_26817 = state_26725__$1;(statearr_26735_26817[(2)] = null);
(statearr_26735_26817[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (39)))
{var inst_26682 = (state_26725[(17)]);var inst_26700 = (state_26725[(2)]);var inst_26701 = cljs.core.next.call(null,inst_26682);var inst_26661 = inst_26701;var inst_26662 = null;var inst_26663 = (0);var inst_26664 = (0);var state_26725__$1 = (function (){var statearr_26739 = state_26725;(statearr_26739[(9)] = inst_26664);
(statearr_26739[(18)] = inst_26661);
(statearr_26739[(19)] = inst_26700);
(statearr_26739[(20)] = inst_26663);
(statearr_26739[(10)] = inst_26662);
return statearr_26739;
})();var statearr_26740_26818 = state_26725__$1;(statearr_26740_26818[(2)] = null);
(statearr_26740_26818[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (4)))
{var inst_26593 = (state_26725[(21)]);var inst_26593__$1 = (state_26725[(2)]);var inst_26594 = (inst_26593__$1 == null);var state_26725__$1 = (function (){var statearr_26741 = state_26725;(statearr_26741[(21)] = inst_26593__$1);
return statearr_26741;
})();if(cljs.core.truth_(inst_26594))
{var statearr_26742_26819 = state_26725__$1;(statearr_26742_26819[(1)] = (5));
} else
{var statearr_26743_26820 = state_26725__$1;(statearr_26743_26820[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (15)))
{var inst_26603 = (state_26725[(12)]);var inst_26602 = (state_26725[(13)]);var inst_26605 = (state_26725[(14)]);var inst_26604 = (state_26725[(15)]);var inst_26618 = (state_26725[(2)]);var inst_26619 = (inst_26605 + (1));var tmp26736 = inst_26603;var tmp26737 = inst_26602;var tmp26738 = inst_26604;var inst_26602__$1 = tmp26737;var inst_26603__$1 = tmp26736;var inst_26604__$1 = tmp26738;var inst_26605__$1 = inst_26619;var state_26725__$1 = (function (){var statearr_26744 = state_26725;(statearr_26744[(12)] = inst_26603__$1);
(statearr_26744[(13)] = inst_26602__$1);
(statearr_26744[(14)] = inst_26605__$1);
(statearr_26744[(15)] = inst_26604__$1);
(statearr_26744[(22)] = inst_26618);
return statearr_26744;
})();var statearr_26745_26821 = state_26725__$1;(statearr_26745_26821[(2)] = null);
(statearr_26745_26821[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (21)))
{var inst_26643 = (state_26725[(2)]);var state_26725__$1 = state_26725;var statearr_26746_26822 = state_26725__$1;(statearr_26746_26822[(2)] = inst_26643);
(statearr_26746_26822[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (31)))
{var inst_26669 = (state_26725[(11)]);var inst_26670 = (state_26725[(2)]);var inst_26671 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26672 = cljs.core.async.untap_STAR_.call(null,m,inst_26669);var state_26725__$1 = (function (){var statearr_26747 = state_26725;(statearr_26747[(23)] = inst_26671);
(statearr_26747[(24)] = inst_26670);
return statearr_26747;
})();var statearr_26748_26823 = state_26725__$1;(statearr_26748_26823[(2)] = inst_26672);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26725__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (32)))
{var inst_26593 = (state_26725[(21)]);var inst_26669 = (state_26725[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26725,(31),Object,null,(30));var inst_26676 = cljs.core.async.put_BANG_.call(null,inst_26669,inst_26593,done);var state_26725__$1 = state_26725;var statearr_26749_26824 = state_26725__$1;(statearr_26749_26824[(2)] = inst_26676);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26725__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (40)))
{var inst_26691 = (state_26725[(25)]);var inst_26692 = (state_26725[(2)]);var inst_26693 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26694 = cljs.core.async.untap_STAR_.call(null,m,inst_26691);var state_26725__$1 = (function (){var statearr_26750 = state_26725;(statearr_26750[(26)] = inst_26693);
(statearr_26750[(27)] = inst_26692);
return statearr_26750;
})();var statearr_26751_26825 = state_26725__$1;(statearr_26751_26825[(2)] = inst_26694);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26725__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (33)))
{var inst_26682 = (state_26725[(17)]);var inst_26684 = cljs.core.chunked_seq_QMARK_.call(null,inst_26682);var state_26725__$1 = state_26725;if(inst_26684)
{var statearr_26752_26826 = state_26725__$1;(statearr_26752_26826[(1)] = (36));
} else
{var statearr_26753_26827 = state_26725__$1;(statearr_26753_26827[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (13)))
{var inst_26612 = (state_26725[(28)]);var inst_26615 = cljs.core.async.close_BANG_.call(null,inst_26612);var state_26725__$1 = state_26725;var statearr_26754_26828 = state_26725__$1;(statearr_26754_26828[(2)] = inst_26615);
(statearr_26754_26828[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (22)))
{var inst_26633 = (state_26725[(8)]);var inst_26636 = cljs.core.async.close_BANG_.call(null,inst_26633);var state_26725__$1 = state_26725;var statearr_26755_26829 = state_26725__$1;(statearr_26755_26829[(2)] = inst_26636);
(statearr_26755_26829[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (36)))
{var inst_26682 = (state_26725[(17)]);var inst_26686 = cljs.core.chunk_first.call(null,inst_26682);var inst_26687 = cljs.core.chunk_rest.call(null,inst_26682);var inst_26688 = cljs.core.count.call(null,inst_26686);var inst_26661 = inst_26687;var inst_26662 = inst_26686;var inst_26663 = inst_26688;var inst_26664 = (0);var state_26725__$1 = (function (){var statearr_26756 = state_26725;(statearr_26756[(9)] = inst_26664);
(statearr_26756[(18)] = inst_26661);
(statearr_26756[(20)] = inst_26663);
(statearr_26756[(10)] = inst_26662);
return statearr_26756;
})();var statearr_26757_26830 = state_26725__$1;(statearr_26757_26830[(2)] = null);
(statearr_26757_26830[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (41)))
{var inst_26691 = (state_26725[(25)]);var inst_26593 = (state_26725[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26725,(40),Object,null,(39));var inst_26698 = cljs.core.async.put_BANG_.call(null,inst_26691,inst_26593,done);var state_26725__$1 = state_26725;var statearr_26758_26831 = state_26725__$1;(statearr_26758_26831[(2)] = inst_26698);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26725__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (43)))
{var state_26725__$1 = state_26725;var statearr_26759_26832 = state_26725__$1;(statearr_26759_26832[(2)] = null);
(statearr_26759_26832[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (29)))
{var inst_26709 = (state_26725[(2)]);var state_26725__$1 = state_26725;var statearr_26760_26833 = state_26725__$1;(statearr_26760_26833[(2)] = inst_26709);
(statearr_26760_26833[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (44)))
{var inst_26718 = (state_26725[(2)]);var state_26725__$1 = (function (){var statearr_26761 = state_26725;(statearr_26761[(29)] = inst_26718);
return statearr_26761;
})();var statearr_26762_26834 = state_26725__$1;(statearr_26762_26834[(2)] = null);
(statearr_26762_26834[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (6)))
{var inst_26653 = (state_26725[(30)]);var inst_26652 = cljs.core.deref.call(null,cs);var inst_26653__$1 = cljs.core.keys.call(null,inst_26652);var inst_26654 = cljs.core.count.call(null,inst_26653__$1);var inst_26655 = cljs.core.reset_BANG_.call(null,dctr,inst_26654);var inst_26660 = cljs.core.seq.call(null,inst_26653__$1);var inst_26661 = inst_26660;var inst_26662 = null;var inst_26663 = (0);var inst_26664 = (0);var state_26725__$1 = (function (){var statearr_26763 = state_26725;(statearr_26763[(9)] = inst_26664);
(statearr_26763[(30)] = inst_26653__$1);
(statearr_26763[(18)] = inst_26661);
(statearr_26763[(31)] = inst_26655);
(statearr_26763[(20)] = inst_26663);
(statearr_26763[(10)] = inst_26662);
return statearr_26763;
})();var statearr_26764_26835 = state_26725__$1;(statearr_26764_26835[(2)] = null);
(statearr_26764_26835[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (28)))
{var inst_26682 = (state_26725[(17)]);var inst_26661 = (state_26725[(18)]);var inst_26682__$1 = cljs.core.seq.call(null,inst_26661);var state_26725__$1 = (function (){var statearr_26765 = state_26725;(statearr_26765[(17)] = inst_26682__$1);
return statearr_26765;
})();if(inst_26682__$1)
{var statearr_26766_26836 = state_26725__$1;(statearr_26766_26836[(1)] = (33));
} else
{var statearr_26767_26837 = state_26725__$1;(statearr_26767_26837[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (25)))
{var inst_26664 = (state_26725[(9)]);var inst_26663 = (state_26725[(20)]);var inst_26666 = (inst_26664 < inst_26663);var inst_26667 = inst_26666;var state_26725__$1 = state_26725;if(cljs.core.truth_(inst_26667))
{var statearr_26768_26838 = state_26725__$1;(statearr_26768_26838[(1)] = (27));
} else
{var statearr_26769_26839 = state_26725__$1;(statearr_26769_26839[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (34)))
{var state_26725__$1 = state_26725;var statearr_26770_26840 = state_26725__$1;(statearr_26770_26840[(2)] = null);
(statearr_26770_26840[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (17)))
{var state_26725__$1 = state_26725;var statearr_26771_26841 = state_26725__$1;(statearr_26771_26841[(2)] = null);
(statearr_26771_26841[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (3)))
{var inst_26723 = (state_26725[(2)]);var state_26725__$1 = state_26725;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26725__$1,inst_26723);
} else
{if((state_val_26726 === (12)))
{var inst_26648 = (state_26725[(2)]);var state_26725__$1 = state_26725;var statearr_26772_26842 = state_26725__$1;(statearr_26772_26842[(2)] = inst_26648);
(statearr_26772_26842[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (2)))
{var state_26725__$1 = state_26725;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26725__$1,(4),ch);
} else
{if((state_val_26726 === (23)))
{var state_26725__$1 = state_26725;var statearr_26773_26843 = state_26725__$1;(statearr_26773_26843[(2)] = null);
(statearr_26773_26843[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (35)))
{var inst_26707 = (state_26725[(2)]);var state_26725__$1 = state_26725;var statearr_26774_26844 = state_26725__$1;(statearr_26774_26844[(2)] = inst_26707);
(statearr_26774_26844[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (19)))
{var inst_26622 = (state_26725[(7)]);var inst_26626 = cljs.core.chunk_first.call(null,inst_26622);var inst_26627 = cljs.core.chunk_rest.call(null,inst_26622);var inst_26628 = cljs.core.count.call(null,inst_26626);var inst_26602 = inst_26627;var inst_26603 = inst_26626;var inst_26604 = inst_26628;var inst_26605 = (0);var state_26725__$1 = (function (){var statearr_26775 = state_26725;(statearr_26775[(12)] = inst_26603);
(statearr_26775[(13)] = inst_26602);
(statearr_26775[(14)] = inst_26605);
(statearr_26775[(15)] = inst_26604);
return statearr_26775;
})();var statearr_26776_26845 = state_26725__$1;(statearr_26776_26845[(2)] = null);
(statearr_26776_26845[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (11)))
{var inst_26602 = (state_26725[(13)]);var inst_26622 = (state_26725[(7)]);var inst_26622__$1 = cljs.core.seq.call(null,inst_26602);var state_26725__$1 = (function (){var statearr_26777 = state_26725;(statearr_26777[(7)] = inst_26622__$1);
return statearr_26777;
})();if(inst_26622__$1)
{var statearr_26778_26846 = state_26725__$1;(statearr_26778_26846[(1)] = (16));
} else
{var statearr_26779_26847 = state_26725__$1;(statearr_26779_26847[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (9)))
{var inst_26650 = (state_26725[(2)]);var state_26725__$1 = state_26725;var statearr_26780_26848 = state_26725__$1;(statearr_26780_26848[(2)] = inst_26650);
(statearr_26780_26848[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (5)))
{var inst_26600 = cljs.core.deref.call(null,cs);var inst_26601 = cljs.core.seq.call(null,inst_26600);var inst_26602 = inst_26601;var inst_26603 = null;var inst_26604 = (0);var inst_26605 = (0);var state_26725__$1 = (function (){var statearr_26781 = state_26725;(statearr_26781[(12)] = inst_26603);
(statearr_26781[(13)] = inst_26602);
(statearr_26781[(14)] = inst_26605);
(statearr_26781[(15)] = inst_26604);
return statearr_26781;
})();var statearr_26782_26849 = state_26725__$1;(statearr_26782_26849[(2)] = null);
(statearr_26782_26849[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (14)))
{var state_26725__$1 = state_26725;var statearr_26783_26850 = state_26725__$1;(statearr_26783_26850[(2)] = null);
(statearr_26783_26850[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (45)))
{var inst_26715 = (state_26725[(2)]);var state_26725__$1 = state_26725;var statearr_26784_26851 = state_26725__$1;(statearr_26784_26851[(2)] = inst_26715);
(statearr_26784_26851[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (26)))
{var inst_26653 = (state_26725[(30)]);var inst_26711 = (state_26725[(2)]);var inst_26712 = cljs.core.seq.call(null,inst_26653);var state_26725__$1 = (function (){var statearr_26785 = state_26725;(statearr_26785[(32)] = inst_26711);
return statearr_26785;
})();if(inst_26712)
{var statearr_26786_26852 = state_26725__$1;(statearr_26786_26852[(1)] = (42));
} else
{var statearr_26787_26853 = state_26725__$1;(statearr_26787_26853[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (16)))
{var inst_26622 = (state_26725[(7)]);var inst_26624 = cljs.core.chunked_seq_QMARK_.call(null,inst_26622);var state_26725__$1 = state_26725;if(inst_26624)
{var statearr_26791_26854 = state_26725__$1;(statearr_26791_26854[(1)] = (19));
} else
{var statearr_26792_26855 = state_26725__$1;(statearr_26792_26855[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (38)))
{var inst_26704 = (state_26725[(2)]);var state_26725__$1 = state_26725;var statearr_26793_26856 = state_26725__$1;(statearr_26793_26856[(2)] = inst_26704);
(statearr_26793_26856[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (30)))
{var inst_26664 = (state_26725[(9)]);var inst_26661 = (state_26725[(18)]);var inst_26663 = (state_26725[(20)]);var inst_26662 = (state_26725[(10)]);var inst_26678 = (state_26725[(2)]);var inst_26679 = (inst_26664 + (1));var tmp26788 = inst_26661;var tmp26789 = inst_26663;var tmp26790 = inst_26662;var inst_26661__$1 = tmp26788;var inst_26662__$1 = tmp26790;var inst_26663__$1 = tmp26789;var inst_26664__$1 = inst_26679;var state_26725__$1 = (function (){var statearr_26794 = state_26725;(statearr_26794[(9)] = inst_26664__$1);
(statearr_26794[(33)] = inst_26678);
(statearr_26794[(18)] = inst_26661__$1);
(statearr_26794[(20)] = inst_26663__$1);
(statearr_26794[(10)] = inst_26662__$1);
return statearr_26794;
})();var statearr_26795_26857 = state_26725__$1;(statearr_26795_26857[(2)] = null);
(statearr_26795_26857[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (10)))
{var inst_26603 = (state_26725[(12)]);var inst_26605 = (state_26725[(14)]);var inst_26611 = cljs.core._nth.call(null,inst_26603,inst_26605);var inst_26612 = cljs.core.nth.call(null,inst_26611,(0),null);var inst_26613 = cljs.core.nth.call(null,inst_26611,(1),null);var state_26725__$1 = (function (){var statearr_26796 = state_26725;(statearr_26796[(28)] = inst_26612);
return statearr_26796;
})();if(cljs.core.truth_(inst_26613))
{var statearr_26797_26858 = state_26725__$1;(statearr_26797_26858[(1)] = (13));
} else
{var statearr_26798_26859 = state_26725__$1;(statearr_26798_26859[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (18)))
{var inst_26646 = (state_26725[(2)]);var state_26725__$1 = state_26725;var statearr_26799_26860 = state_26725__$1;(statearr_26799_26860[(2)] = inst_26646);
(statearr_26799_26860[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (42)))
{var state_26725__$1 = state_26725;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26725__$1,(45),dchan);
} else
{if((state_val_26726 === (37)))
{var inst_26682 = (state_26725[(17)]);var inst_26691 = cljs.core.first.call(null,inst_26682);var state_26725__$1 = (function (){var statearr_26800 = state_26725;(statearr_26800[(25)] = inst_26691);
return statearr_26800;
})();var statearr_26801_26861 = state_26725__$1;(statearr_26801_26861[(2)] = null);
(statearr_26801_26861[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26726 === (8)))
{var inst_26605 = (state_26725[(14)]);var inst_26604 = (state_26725[(15)]);var inst_26607 = (inst_26605 < inst_26604);var inst_26608 = inst_26607;var state_26725__$1 = state_26725;if(cljs.core.truth_(inst_26608))
{var statearr_26802_26862 = state_26725__$1;(statearr_26802_26862[(1)] = (10));
} else
{var statearr_26803_26863 = state_26725__$1;(statearr_26803_26863[(1)] = (11));
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
});})(c__5693__auto___26811,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___26811,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_26807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26807[(0)] = state_machine__5679__auto__);
(statearr_26807[(1)] = (1));
return statearr_26807;
});
var state_machine__5679__auto____1 = (function (state_26725){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_26725);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e26808){if((e26808 instanceof Object))
{var ex__5682__auto__ = e26808;var statearr_26809_26864 = state_26725;(statearr_26809_26864[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26725);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26808;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26865 = state_26725;
state_26725 = G__26865;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_26725){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_26725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___26811,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_26810 = f__5694__auto__.call(null);(statearr_26810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___26811);
return statearr_26810;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___26811,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj26867 = {};return obj26867;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t26977 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26977 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26978){
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
this.meta26978 = meta26978;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26977.cljs$lang$type = true;
cljs.core.async.t26977.cljs$lang$ctorStr = "cljs.core.async/t26977";
cljs.core.async.t26977.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t26977");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26977.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26977.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26977.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26977.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26977.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26977.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26977.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26977.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26977.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26979){var self__ = this;
var _26979__$1 = this;return self__.meta26978;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26979,meta26978__$1){var self__ = this;
var _26979__$1 = this;return (new cljs.core.async.t26977(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26978__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26977 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26977(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26978){return (new cljs.core.async.t26977(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26978));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26977(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___27086 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27086,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27086,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27044){var state_val_27045 = (state_27044[(1)]);if((state_val_27045 === (7)))
{var inst_26993 = (state_27044[(7)]);var inst_26998 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26993);var state_27044__$1 = state_27044;var statearr_27046_27087 = state_27044__$1;(statearr_27046_27087[(2)] = inst_26998);
(statearr_27046_27087[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (20)))
{var inst_27008 = (state_27044[(8)]);var state_27044__$1 = state_27044;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27044__$1,(23),out,inst_27008);
} else
{if((state_val_27045 === (1)))
{var inst_26983 = (state_27044[(9)]);var inst_26983__$1 = calc_state.call(null);var inst_26984 = cljs.core.seq_QMARK_.call(null,inst_26983__$1);var state_27044__$1 = (function (){var statearr_27047 = state_27044;(statearr_27047[(9)] = inst_26983__$1);
return statearr_27047;
})();if(inst_26984)
{var statearr_27048_27088 = state_27044__$1;(statearr_27048_27088[(1)] = (2));
} else
{var statearr_27049_27089 = state_27044__$1;(statearr_27049_27089[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (4)))
{var inst_26983 = (state_27044[(9)]);var inst_26989 = (state_27044[(2)]);var inst_26990 = cljs.core.get.call(null,inst_26989,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_26991 = cljs.core.get.call(null,inst_26989,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_26992 = cljs.core.get.call(null,inst_26989,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_26993 = inst_26983;var state_27044__$1 = (function (){var statearr_27050 = state_27044;(statearr_27050[(10)] = inst_26991);
(statearr_27050[(11)] = inst_26992);
(statearr_27050[(12)] = inst_26990);
(statearr_27050[(7)] = inst_26993);
return statearr_27050;
})();var statearr_27051_27090 = state_27044__$1;(statearr_27051_27090[(2)] = null);
(statearr_27051_27090[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (15)))
{var state_27044__$1 = state_27044;var statearr_27052_27091 = state_27044__$1;(statearr_27052_27091[(2)] = null);
(statearr_27052_27091[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (21)))
{var state_27044__$1 = state_27044;var statearr_27053_27092 = state_27044__$1;(statearr_27053_27092[(2)] = null);
(statearr_27053_27092[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (13)))
{var inst_27040 = (state_27044[(2)]);var state_27044__$1 = state_27044;var statearr_27054_27093 = state_27044__$1;(statearr_27054_27093[(2)] = inst_27040);
(statearr_27054_27093[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (22)))
{var inst_27001 = (state_27044[(13)]);var inst_27037 = (state_27044[(2)]);var inst_26993 = inst_27001;var state_27044__$1 = (function (){var statearr_27055 = state_27044;(statearr_27055[(14)] = inst_27037);
(statearr_27055[(7)] = inst_26993);
return statearr_27055;
})();var statearr_27056_27094 = state_27044__$1;(statearr_27056_27094[(2)] = null);
(statearr_27056_27094[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (6)))
{var inst_27042 = (state_27044[(2)]);var state_27044__$1 = state_27044;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27044__$1,inst_27042);
} else
{if((state_val_27045 === (17)))
{var inst_27023 = (state_27044[(15)]);var state_27044__$1 = state_27044;var statearr_27057_27095 = state_27044__$1;(statearr_27057_27095[(2)] = inst_27023);
(statearr_27057_27095[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (3)))
{var inst_26983 = (state_27044[(9)]);var state_27044__$1 = state_27044;var statearr_27058_27096 = state_27044__$1;(statearr_27058_27096[(2)] = inst_26983);
(statearr_27058_27096[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (12)))
{var inst_27023 = (state_27044[(15)]);var inst_27004 = (state_27044[(16)]);var inst_27009 = (state_27044[(17)]);var inst_27023__$1 = inst_27004.call(null,inst_27009);var state_27044__$1 = (function (){var statearr_27059 = state_27044;(statearr_27059[(15)] = inst_27023__$1);
return statearr_27059;
})();if(cljs.core.truth_(inst_27023__$1))
{var statearr_27060_27097 = state_27044__$1;(statearr_27060_27097[(1)] = (17));
} else
{var statearr_27061_27098 = state_27044__$1;(statearr_27061_27098[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (2)))
{var inst_26983 = (state_27044[(9)]);var inst_26986 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26983);var state_27044__$1 = state_27044;var statearr_27062_27099 = state_27044__$1;(statearr_27062_27099[(2)] = inst_26986);
(statearr_27062_27099[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (23)))
{var inst_27034 = (state_27044[(2)]);var state_27044__$1 = state_27044;var statearr_27063_27100 = state_27044__$1;(statearr_27063_27100[(2)] = inst_27034);
(statearr_27063_27100[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (19)))
{var inst_27031 = (state_27044[(2)]);var state_27044__$1 = state_27044;if(cljs.core.truth_(inst_27031))
{var statearr_27064_27101 = state_27044__$1;(statearr_27064_27101[(1)] = (20));
} else
{var statearr_27065_27102 = state_27044__$1;(statearr_27065_27102[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (11)))
{var inst_27008 = (state_27044[(8)]);var inst_27014 = (inst_27008 == null);var state_27044__$1 = state_27044;if(cljs.core.truth_(inst_27014))
{var statearr_27066_27103 = state_27044__$1;(statearr_27066_27103[(1)] = (14));
} else
{var statearr_27067_27104 = state_27044__$1;(statearr_27067_27104[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (9)))
{var inst_27001 = (state_27044[(13)]);var inst_27001__$1 = (state_27044[(2)]);var inst_27002 = cljs.core.get.call(null,inst_27001__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_27003 = cljs.core.get.call(null,inst_27001__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_27004 = cljs.core.get.call(null,inst_27001__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_27044__$1 = (function (){var statearr_27068 = state_27044;(statearr_27068[(16)] = inst_27004);
(statearr_27068[(18)] = inst_27003);
(statearr_27068[(13)] = inst_27001__$1);
return statearr_27068;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27044__$1,(10),inst_27002);
} else
{if((state_val_27045 === (5)))
{var inst_26993 = (state_27044[(7)]);var inst_26996 = cljs.core.seq_QMARK_.call(null,inst_26993);var state_27044__$1 = state_27044;if(inst_26996)
{var statearr_27069_27105 = state_27044__$1;(statearr_27069_27105[(1)] = (7));
} else
{var statearr_27070_27106 = state_27044__$1;(statearr_27070_27106[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (14)))
{var inst_27009 = (state_27044[(17)]);var inst_27016 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27009);var state_27044__$1 = state_27044;var statearr_27071_27107 = state_27044__$1;(statearr_27071_27107[(2)] = inst_27016);
(statearr_27071_27107[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (16)))
{var inst_27019 = (state_27044[(2)]);var inst_27020 = calc_state.call(null);var inst_26993 = inst_27020;var state_27044__$1 = (function (){var statearr_27072 = state_27044;(statearr_27072[(19)] = inst_27019);
(statearr_27072[(7)] = inst_26993);
return statearr_27072;
})();var statearr_27073_27108 = state_27044__$1;(statearr_27073_27108[(2)] = null);
(statearr_27073_27108[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (10)))
{var inst_27008 = (state_27044[(8)]);var inst_27009 = (state_27044[(17)]);var inst_27007 = (state_27044[(2)]);var inst_27008__$1 = cljs.core.nth.call(null,inst_27007,(0),null);var inst_27009__$1 = cljs.core.nth.call(null,inst_27007,(1),null);var inst_27010 = (inst_27008__$1 == null);var inst_27011 = cljs.core._EQ_.call(null,inst_27009__$1,change);var inst_27012 = (inst_27010) || (inst_27011);var state_27044__$1 = (function (){var statearr_27074 = state_27044;(statearr_27074[(8)] = inst_27008__$1);
(statearr_27074[(17)] = inst_27009__$1);
return statearr_27074;
})();if(cljs.core.truth_(inst_27012))
{var statearr_27075_27109 = state_27044__$1;(statearr_27075_27109[(1)] = (11));
} else
{var statearr_27076_27110 = state_27044__$1;(statearr_27076_27110[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (18)))
{var inst_27004 = (state_27044[(16)]);var inst_27003 = (state_27044[(18)]);var inst_27009 = (state_27044[(17)]);var inst_27026 = cljs.core.empty_QMARK_.call(null,inst_27004);var inst_27027 = inst_27003.call(null,inst_27009);var inst_27028 = cljs.core.not.call(null,inst_27027);var inst_27029 = (inst_27026) && (inst_27028);var state_27044__$1 = state_27044;var statearr_27077_27111 = state_27044__$1;(statearr_27077_27111[(2)] = inst_27029);
(statearr_27077_27111[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27045 === (8)))
{var inst_26993 = (state_27044[(7)]);var state_27044__$1 = state_27044;var statearr_27078_27112 = state_27044__$1;(statearr_27078_27112[(2)] = inst_26993);
(statearr_27078_27112[(1)] = (9));
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
});})(c__5693__auto___27086,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___27086,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27082[(0)] = state_machine__5679__auto__);
(statearr_27082[(1)] = (1));
return statearr_27082;
});
var state_machine__5679__auto____1 = (function (state_27044){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27044);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27083){if((e27083 instanceof Object))
{var ex__5682__auto__ = e27083;var statearr_27084_27113 = state_27044;(statearr_27084_27113[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27044);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27083;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27114 = state_27044;
state_27044 = G__27114;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27044){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27086,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_27085 = f__5694__auto__.call(null);(statearr_27085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27086);
return statearr_27085;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27086,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj27116 = {};return obj27116;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
return (function (topic){var or__3543__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3543__auto__,mults){
return (function (p1__27117_SHARP_){if(cljs.core.truth_(p1__27117_SHARP_.call(null,topic)))
{return p1__27117_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__27117_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27242 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27242 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27243){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27243 = meta27243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27242.cljs$lang$type = true;
cljs.core.async.t27242.cljs$lang$ctorStr = "cljs.core.async/t27242";
cljs.core.async.t27242.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27242");
});})(mults,ensure_mult))
;
cljs.core.async.t27242.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27242.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27242.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27242.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t27242.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27242.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27242.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27244){var self__ = this;
var _27244__$1 = this;return self__.meta27243;
});})(mults,ensure_mult))
;
cljs.core.async.t27242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27244,meta27243__$1){var self__ = this;
var _27244__$1 = this;return (new cljs.core.async.t27242(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27243__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27242 = ((function (mults,ensure_mult){
return (function __GT_t27242(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27243){return (new cljs.core.async.t27242(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27243));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27242(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___27366 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27366,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27366,mults,ensure_mult,p){
return (function (state_27318){var state_val_27319 = (state_27318[(1)]);if((state_val_27319 === (7)))
{var inst_27314 = (state_27318[(2)]);var state_27318__$1 = state_27318;var statearr_27320_27367 = state_27318__$1;(statearr_27320_27367[(2)] = inst_27314);
(statearr_27320_27367[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (20)))
{var state_27318__$1 = state_27318;var statearr_27321_27368 = state_27318__$1;(statearr_27321_27368[(2)] = null);
(statearr_27321_27368[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (1)))
{var state_27318__$1 = state_27318;var statearr_27322_27369 = state_27318__$1;(statearr_27322_27369[(2)] = null);
(statearr_27322_27369[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (24)))
{var inst_27297 = (state_27318[(7)]);var inst_27247 = (state_27318[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27318,(23),Object,null,(22));var inst_27304 = cljs.core.async.muxch_STAR_.call(null,inst_27297);var state_27318__$1 = state_27318;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27318__$1,(25),inst_27304,inst_27247);
} else
{if((state_val_27319 === (4)))
{var inst_27247 = (state_27318[(8)]);var inst_27247__$1 = (state_27318[(2)]);var inst_27248 = (inst_27247__$1 == null);var state_27318__$1 = (function (){var statearr_27323 = state_27318;(statearr_27323[(8)] = inst_27247__$1);
return statearr_27323;
})();if(cljs.core.truth_(inst_27248))
{var statearr_27324_27370 = state_27318__$1;(statearr_27324_27370[(1)] = (5));
} else
{var statearr_27325_27371 = state_27318__$1;(statearr_27325_27371[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (15)))
{var inst_27289 = (state_27318[(2)]);var state_27318__$1 = state_27318;var statearr_27326_27372 = state_27318__$1;(statearr_27326_27372[(2)] = inst_27289);
(statearr_27326_27372[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (21)))
{var inst_27311 = (state_27318[(2)]);var state_27318__$1 = (function (){var statearr_27327 = state_27318;(statearr_27327[(9)] = inst_27311);
return statearr_27327;
})();var statearr_27328_27373 = state_27318__$1;(statearr_27328_27373[(2)] = null);
(statearr_27328_27373[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (13)))
{var inst_27271 = (state_27318[(10)]);var inst_27273 = cljs.core.chunked_seq_QMARK_.call(null,inst_27271);var state_27318__$1 = state_27318;if(inst_27273)
{var statearr_27329_27374 = state_27318__$1;(statearr_27329_27374[(1)] = (16));
} else
{var statearr_27330_27375 = state_27318__$1;(statearr_27330_27375[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (22)))
{var inst_27308 = (state_27318[(2)]);var state_27318__$1 = state_27318;var statearr_27331_27376 = state_27318__$1;(statearr_27331_27376[(2)] = inst_27308);
(statearr_27331_27376[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (6)))
{var inst_27295 = (state_27318[(11)]);var inst_27297 = (state_27318[(7)]);var inst_27247 = (state_27318[(8)]);var inst_27295__$1 = topic_fn.call(null,inst_27247);var inst_27296 = cljs.core.deref.call(null,mults);var inst_27297__$1 = cljs.core.get.call(null,inst_27296,inst_27295__$1);var state_27318__$1 = (function (){var statearr_27332 = state_27318;(statearr_27332[(11)] = inst_27295__$1);
(statearr_27332[(7)] = inst_27297__$1);
return statearr_27332;
})();if(cljs.core.truth_(inst_27297__$1))
{var statearr_27333_27377 = state_27318__$1;(statearr_27333_27377[(1)] = (19));
} else
{var statearr_27334_27378 = state_27318__$1;(statearr_27334_27378[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (25)))
{var inst_27306 = (state_27318[(2)]);var state_27318__$1 = state_27318;var statearr_27335_27379 = state_27318__$1;(statearr_27335_27379[(2)] = inst_27306);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27318__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (17)))
{var inst_27271 = (state_27318[(10)]);var inst_27280 = cljs.core.first.call(null,inst_27271);var inst_27281 = cljs.core.async.muxch_STAR_.call(null,inst_27280);var inst_27282 = cljs.core.async.close_BANG_.call(null,inst_27281);var inst_27283 = cljs.core.next.call(null,inst_27271);var inst_27257 = inst_27283;var inst_27258 = null;var inst_27259 = (0);var inst_27260 = (0);var state_27318__$1 = (function (){var statearr_27336 = state_27318;(statearr_27336[(12)] = inst_27259);
(statearr_27336[(13)] = inst_27257);
(statearr_27336[(14)] = inst_27258);
(statearr_27336[(15)] = inst_27260);
(statearr_27336[(16)] = inst_27282);
return statearr_27336;
})();var statearr_27337_27380 = state_27318__$1;(statearr_27337_27380[(2)] = null);
(statearr_27337_27380[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (3)))
{var inst_27316 = (state_27318[(2)]);var state_27318__$1 = state_27318;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27318__$1,inst_27316);
} else
{if((state_val_27319 === (12)))
{var inst_27291 = (state_27318[(2)]);var state_27318__$1 = state_27318;var statearr_27338_27381 = state_27318__$1;(statearr_27338_27381[(2)] = inst_27291);
(statearr_27338_27381[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (2)))
{var state_27318__$1 = state_27318;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27318__$1,(4),ch);
} else
{if((state_val_27319 === (23)))
{var inst_27295 = (state_27318[(11)]);var inst_27299 = (state_27318[(2)]);var inst_27300 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27295);var state_27318__$1 = (function (){var statearr_27339 = state_27318;(statearr_27339[(17)] = inst_27299);
return statearr_27339;
})();var statearr_27340_27382 = state_27318__$1;(statearr_27340_27382[(2)] = inst_27300);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27318__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (19)))
{var state_27318__$1 = state_27318;var statearr_27341_27383 = state_27318__$1;(statearr_27341_27383[(2)] = null);
(statearr_27341_27383[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (11)))
{var inst_27257 = (state_27318[(13)]);var inst_27271 = (state_27318[(10)]);var inst_27271__$1 = cljs.core.seq.call(null,inst_27257);var state_27318__$1 = (function (){var statearr_27342 = state_27318;(statearr_27342[(10)] = inst_27271__$1);
return statearr_27342;
})();if(inst_27271__$1)
{var statearr_27343_27384 = state_27318__$1;(statearr_27343_27384[(1)] = (13));
} else
{var statearr_27344_27385 = state_27318__$1;(statearr_27344_27385[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (9)))
{var inst_27293 = (state_27318[(2)]);var state_27318__$1 = state_27318;var statearr_27345_27386 = state_27318__$1;(statearr_27345_27386[(2)] = inst_27293);
(statearr_27345_27386[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (5)))
{var inst_27254 = cljs.core.deref.call(null,mults);var inst_27255 = cljs.core.vals.call(null,inst_27254);var inst_27256 = cljs.core.seq.call(null,inst_27255);var inst_27257 = inst_27256;var inst_27258 = null;var inst_27259 = (0);var inst_27260 = (0);var state_27318__$1 = (function (){var statearr_27346 = state_27318;(statearr_27346[(12)] = inst_27259);
(statearr_27346[(13)] = inst_27257);
(statearr_27346[(14)] = inst_27258);
(statearr_27346[(15)] = inst_27260);
return statearr_27346;
})();var statearr_27347_27387 = state_27318__$1;(statearr_27347_27387[(2)] = null);
(statearr_27347_27387[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (14)))
{var state_27318__$1 = state_27318;var statearr_27351_27388 = state_27318__$1;(statearr_27351_27388[(2)] = null);
(statearr_27351_27388[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (16)))
{var inst_27271 = (state_27318[(10)]);var inst_27275 = cljs.core.chunk_first.call(null,inst_27271);var inst_27276 = cljs.core.chunk_rest.call(null,inst_27271);var inst_27277 = cljs.core.count.call(null,inst_27275);var inst_27257 = inst_27276;var inst_27258 = inst_27275;var inst_27259 = inst_27277;var inst_27260 = (0);var state_27318__$1 = (function (){var statearr_27352 = state_27318;(statearr_27352[(12)] = inst_27259);
(statearr_27352[(13)] = inst_27257);
(statearr_27352[(14)] = inst_27258);
(statearr_27352[(15)] = inst_27260);
return statearr_27352;
})();var statearr_27353_27389 = state_27318__$1;(statearr_27353_27389[(2)] = null);
(statearr_27353_27389[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (10)))
{var inst_27259 = (state_27318[(12)]);var inst_27257 = (state_27318[(13)]);var inst_27258 = (state_27318[(14)]);var inst_27260 = (state_27318[(15)]);var inst_27265 = cljs.core._nth.call(null,inst_27258,inst_27260);var inst_27266 = cljs.core.async.muxch_STAR_.call(null,inst_27265);var inst_27267 = cljs.core.async.close_BANG_.call(null,inst_27266);var inst_27268 = (inst_27260 + (1));var tmp27348 = inst_27259;var tmp27349 = inst_27257;var tmp27350 = inst_27258;var inst_27257__$1 = tmp27349;var inst_27258__$1 = tmp27350;var inst_27259__$1 = tmp27348;var inst_27260__$1 = inst_27268;var state_27318__$1 = (function (){var statearr_27354 = state_27318;(statearr_27354[(12)] = inst_27259__$1);
(statearr_27354[(13)] = inst_27257__$1);
(statearr_27354[(14)] = inst_27258__$1);
(statearr_27354[(15)] = inst_27260__$1);
(statearr_27354[(18)] = inst_27267);
return statearr_27354;
})();var statearr_27355_27390 = state_27318__$1;(statearr_27355_27390[(2)] = null);
(statearr_27355_27390[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (18)))
{var inst_27286 = (state_27318[(2)]);var state_27318__$1 = state_27318;var statearr_27356_27391 = state_27318__$1;(statearr_27356_27391[(2)] = inst_27286);
(statearr_27356_27391[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27319 === (8)))
{var inst_27259 = (state_27318[(12)]);var inst_27260 = (state_27318[(15)]);var inst_27262 = (inst_27260 < inst_27259);var inst_27263 = inst_27262;var state_27318__$1 = state_27318;if(cljs.core.truth_(inst_27263))
{var statearr_27357_27392 = state_27318__$1;(statearr_27357_27392[(1)] = (10));
} else
{var statearr_27358_27393 = state_27318__$1;(statearr_27358_27393[(1)] = (11));
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
});})(c__5693__auto___27366,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___27366,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27362[(0)] = state_machine__5679__auto__);
(statearr_27362[(1)] = (1));
return statearr_27362;
});
var state_machine__5679__auto____1 = (function (state_27318){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27318);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27363){if((e27363 instanceof Object))
{var ex__5682__auto__ = e27363;var statearr_27364_27394 = state_27318;(statearr_27364_27394[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27318);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27395 = state_27318;
state_27318 = G__27395;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27318){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27366,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_27365 = f__5694__auto__.call(null);(statearr_27365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27366);
return statearr_27365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27366,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___27532 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27532,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27532,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27502){var state_val_27503 = (state_27502[(1)]);if((state_val_27503 === (7)))
{var state_27502__$1 = state_27502;var statearr_27504_27533 = state_27502__$1;(statearr_27504_27533[(2)] = null);
(statearr_27504_27533[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27503 === (1)))
{var state_27502__$1 = state_27502;var statearr_27505_27534 = state_27502__$1;(statearr_27505_27534[(2)] = null);
(statearr_27505_27534[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27503 === (4)))
{var inst_27466 = (state_27502[(7)]);var inst_27468 = (inst_27466 < cnt);var state_27502__$1 = state_27502;if(cljs.core.truth_(inst_27468))
{var statearr_27506_27535 = state_27502__$1;(statearr_27506_27535[(1)] = (6));
} else
{var statearr_27507_27536 = state_27502__$1;(statearr_27507_27536[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27503 === (15)))
{var inst_27498 = (state_27502[(2)]);var state_27502__$1 = state_27502;var statearr_27508_27537 = state_27502__$1;(statearr_27508_27537[(2)] = inst_27498);
(statearr_27508_27537[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27503 === (13)))
{var inst_27491 = cljs.core.async.close_BANG_.call(null,out);var state_27502__$1 = state_27502;var statearr_27509_27538 = state_27502__$1;(statearr_27509_27538[(2)] = inst_27491);
(statearr_27509_27538[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27503 === (6)))
{var state_27502__$1 = state_27502;var statearr_27510_27539 = state_27502__$1;(statearr_27510_27539[(2)] = null);
(statearr_27510_27539[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27503 === (3)))
{var inst_27500 = (state_27502[(2)]);var state_27502__$1 = state_27502;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27502__$1,inst_27500);
} else
{if((state_val_27503 === (12)))
{var inst_27488 = (state_27502[(8)]);var inst_27488__$1 = (state_27502[(2)]);var inst_27489 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27488__$1);var state_27502__$1 = (function (){var statearr_27511 = state_27502;(statearr_27511[(8)] = inst_27488__$1);
return statearr_27511;
})();if(cljs.core.truth_(inst_27489))
{var statearr_27512_27540 = state_27502__$1;(statearr_27512_27540[(1)] = (13));
} else
{var statearr_27513_27541 = state_27502__$1;(statearr_27513_27541[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27503 === (2)))
{var inst_27465 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27466 = (0);var state_27502__$1 = (function (){var statearr_27514 = state_27502;(statearr_27514[(7)] = inst_27466);
(statearr_27514[(9)] = inst_27465);
return statearr_27514;
})();var statearr_27515_27542 = state_27502__$1;(statearr_27515_27542[(2)] = null);
(statearr_27515_27542[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27503 === (11)))
{var inst_27466 = (state_27502[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27502,(10),Object,null,(9));var inst_27475 = chs__$1.call(null,inst_27466);var inst_27476 = done.call(null,inst_27466);var inst_27477 = cljs.core.async.take_BANG_.call(null,inst_27475,inst_27476);var state_27502__$1 = state_27502;var statearr_27516_27543 = state_27502__$1;(statearr_27516_27543[(2)] = inst_27477);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27502__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27503 === (9)))
{var inst_27466 = (state_27502[(7)]);var inst_27479 = (state_27502[(2)]);var inst_27480 = (inst_27466 + (1));var inst_27466__$1 = inst_27480;var state_27502__$1 = (function (){var statearr_27517 = state_27502;(statearr_27517[(7)] = inst_27466__$1);
(statearr_27517[(10)] = inst_27479);
return statearr_27517;
})();var statearr_27518_27544 = state_27502__$1;(statearr_27518_27544[(2)] = null);
(statearr_27518_27544[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27503 === (5)))
{var inst_27486 = (state_27502[(2)]);var state_27502__$1 = (function (){var statearr_27519 = state_27502;(statearr_27519[(11)] = inst_27486);
return statearr_27519;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27502__$1,(12),dchan);
} else
{if((state_val_27503 === (14)))
{var inst_27488 = (state_27502[(8)]);var inst_27493 = cljs.core.apply.call(null,f,inst_27488);var state_27502__$1 = state_27502;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27502__$1,(16),out,inst_27493);
} else
{if((state_val_27503 === (16)))
{var inst_27495 = (state_27502[(2)]);var state_27502__$1 = (function (){var statearr_27520 = state_27502;(statearr_27520[(12)] = inst_27495);
return statearr_27520;
})();var statearr_27521_27545 = state_27502__$1;(statearr_27521_27545[(2)] = null);
(statearr_27521_27545[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27503 === (10)))
{var inst_27470 = (state_27502[(2)]);var inst_27471 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27502__$1 = (function (){var statearr_27522 = state_27502;(statearr_27522[(13)] = inst_27470);
return statearr_27522;
})();var statearr_27523_27546 = state_27502__$1;(statearr_27523_27546[(2)] = inst_27471);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27502__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27503 === (8)))
{var inst_27484 = (state_27502[(2)]);var state_27502__$1 = state_27502;var statearr_27524_27547 = state_27502__$1;(statearr_27524_27547[(2)] = inst_27484);
(statearr_27524_27547[(1)] = (5));
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
});})(c__5693__auto___27532,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___27532,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27528[(0)] = state_machine__5679__auto__);
(statearr_27528[(1)] = (1));
return statearr_27528;
});
var state_machine__5679__auto____1 = (function (state_27502){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27502);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27529){if((e27529 instanceof Object))
{var ex__5682__auto__ = e27529;var statearr_27530_27548 = state_27502;(statearr_27530_27548[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27502);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27549 = state_27502;
state_27502 = G__27549;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27502){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27532,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_27531 = f__5694__auto__.call(null);(statearr_27531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27532);
return statearr_27531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27532,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___27657 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27657,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27657,out){
return (function (state_27633){var state_val_27634 = (state_27633[(1)]);if((state_val_27634 === (7)))
{var inst_27612 = (state_27633[(7)]);var inst_27613 = (state_27633[(8)]);var inst_27612__$1 = (state_27633[(2)]);var inst_27613__$1 = cljs.core.nth.call(null,inst_27612__$1,(0),null);var inst_27614 = cljs.core.nth.call(null,inst_27612__$1,(1),null);var inst_27615 = (inst_27613__$1 == null);var state_27633__$1 = (function (){var statearr_27635 = state_27633;(statearr_27635[(7)] = inst_27612__$1);
(statearr_27635[(8)] = inst_27613__$1);
(statearr_27635[(9)] = inst_27614);
return statearr_27635;
})();if(cljs.core.truth_(inst_27615))
{var statearr_27636_27658 = state_27633__$1;(statearr_27636_27658[(1)] = (8));
} else
{var statearr_27637_27659 = state_27633__$1;(statearr_27637_27659[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27634 === (1)))
{var inst_27604 = cljs.core.vec.call(null,chs);var inst_27605 = inst_27604;var state_27633__$1 = (function (){var statearr_27638 = state_27633;(statearr_27638[(10)] = inst_27605);
return statearr_27638;
})();var statearr_27639_27660 = state_27633__$1;(statearr_27639_27660[(2)] = null);
(statearr_27639_27660[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27634 === (4)))
{var inst_27605 = (state_27633[(10)]);var state_27633__$1 = state_27633;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27633__$1,(7),inst_27605);
} else
{if((state_val_27634 === (6)))
{var inst_27629 = (state_27633[(2)]);var state_27633__$1 = state_27633;var statearr_27640_27661 = state_27633__$1;(statearr_27640_27661[(2)] = inst_27629);
(statearr_27640_27661[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27634 === (3)))
{var inst_27631 = (state_27633[(2)]);var state_27633__$1 = state_27633;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27633__$1,inst_27631);
} else
{if((state_val_27634 === (2)))
{var inst_27605 = (state_27633[(10)]);var inst_27607 = cljs.core.count.call(null,inst_27605);var inst_27608 = (inst_27607 > (0));var state_27633__$1 = state_27633;if(cljs.core.truth_(inst_27608))
{var statearr_27642_27662 = state_27633__$1;(statearr_27642_27662[(1)] = (4));
} else
{var statearr_27643_27663 = state_27633__$1;(statearr_27643_27663[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27634 === (11)))
{var inst_27605 = (state_27633[(10)]);var inst_27622 = (state_27633[(2)]);var tmp27641 = inst_27605;var inst_27605__$1 = tmp27641;var state_27633__$1 = (function (){var statearr_27644 = state_27633;(statearr_27644[(11)] = inst_27622);
(statearr_27644[(10)] = inst_27605__$1);
return statearr_27644;
})();var statearr_27645_27664 = state_27633__$1;(statearr_27645_27664[(2)] = null);
(statearr_27645_27664[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27634 === (9)))
{var inst_27613 = (state_27633[(8)]);var state_27633__$1 = state_27633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27633__$1,(11),out,inst_27613);
} else
{if((state_val_27634 === (5)))
{var inst_27627 = cljs.core.async.close_BANG_.call(null,out);var state_27633__$1 = state_27633;var statearr_27646_27665 = state_27633__$1;(statearr_27646_27665[(2)] = inst_27627);
(statearr_27646_27665[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27634 === (10)))
{var inst_27625 = (state_27633[(2)]);var state_27633__$1 = state_27633;var statearr_27647_27666 = state_27633__$1;(statearr_27647_27666[(2)] = inst_27625);
(statearr_27647_27666[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27634 === (8)))
{var inst_27612 = (state_27633[(7)]);var inst_27605 = (state_27633[(10)]);var inst_27613 = (state_27633[(8)]);var inst_27614 = (state_27633[(9)]);var inst_27617 = (function (){var c = inst_27614;var v = inst_27613;var vec__27610 = inst_27612;var cs = inst_27605;return ((function (c,v,vec__27610,cs,inst_27612,inst_27605,inst_27613,inst_27614,state_val_27634,c__5693__auto___27657,out){
return (function (p1__27550_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27550_SHARP_);
});
;})(c,v,vec__27610,cs,inst_27612,inst_27605,inst_27613,inst_27614,state_val_27634,c__5693__auto___27657,out))
})();var inst_27618 = cljs.core.filterv.call(null,inst_27617,inst_27605);var inst_27605__$1 = inst_27618;var state_27633__$1 = (function (){var statearr_27648 = state_27633;(statearr_27648[(10)] = inst_27605__$1);
return statearr_27648;
})();var statearr_27649_27667 = state_27633__$1;(statearr_27649_27667[(2)] = null);
(statearr_27649_27667[(1)] = (2));
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
});})(c__5693__auto___27657,out))
;return ((function (switch__5678__auto__,c__5693__auto___27657,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27653 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27653[(0)] = state_machine__5679__auto__);
(statearr_27653[(1)] = (1));
return statearr_27653;
});
var state_machine__5679__auto____1 = (function (state_27633){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27633);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27654){if((e27654 instanceof Object))
{var ex__5682__auto__ = e27654;var statearr_27655_27668 = state_27633;(statearr_27655_27668[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27633);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27654;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27669 = state_27633;
state_27633 = G__27669;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27633){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27657,out))
})();var state__5695__auto__ = (function (){var statearr_27656 = f__5694__auto__.call(null);(statearr_27656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27657);
return statearr_27656;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27657,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___27762 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27762,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27762,out){
return (function (state_27739){var state_val_27740 = (state_27739[(1)]);if((state_val_27740 === (7)))
{var inst_27721 = (state_27739[(7)]);var inst_27721__$1 = (state_27739[(2)]);var inst_27722 = (inst_27721__$1 == null);var inst_27723 = cljs.core.not.call(null,inst_27722);var state_27739__$1 = (function (){var statearr_27741 = state_27739;(statearr_27741[(7)] = inst_27721__$1);
return statearr_27741;
})();if(inst_27723)
{var statearr_27742_27763 = state_27739__$1;(statearr_27742_27763[(1)] = (8));
} else
{var statearr_27743_27764 = state_27739__$1;(statearr_27743_27764[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27740 === (1)))
{var inst_27716 = (0);var state_27739__$1 = (function (){var statearr_27744 = state_27739;(statearr_27744[(8)] = inst_27716);
return statearr_27744;
})();var statearr_27745_27765 = state_27739__$1;(statearr_27745_27765[(2)] = null);
(statearr_27745_27765[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27740 === (4)))
{var state_27739__$1 = state_27739;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27739__$1,(7),ch);
} else
{if((state_val_27740 === (6)))
{var inst_27734 = (state_27739[(2)]);var state_27739__$1 = state_27739;var statearr_27746_27766 = state_27739__$1;(statearr_27746_27766[(2)] = inst_27734);
(statearr_27746_27766[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27740 === (3)))
{var inst_27736 = (state_27739[(2)]);var inst_27737 = cljs.core.async.close_BANG_.call(null,out);var state_27739__$1 = (function (){var statearr_27747 = state_27739;(statearr_27747[(9)] = inst_27736);
return statearr_27747;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27739__$1,inst_27737);
} else
{if((state_val_27740 === (2)))
{var inst_27716 = (state_27739[(8)]);var inst_27718 = (inst_27716 < n);var state_27739__$1 = state_27739;if(cljs.core.truth_(inst_27718))
{var statearr_27748_27767 = state_27739__$1;(statearr_27748_27767[(1)] = (4));
} else
{var statearr_27749_27768 = state_27739__$1;(statearr_27749_27768[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27740 === (11)))
{var inst_27716 = (state_27739[(8)]);var inst_27726 = (state_27739[(2)]);var inst_27727 = (inst_27716 + (1));var inst_27716__$1 = inst_27727;var state_27739__$1 = (function (){var statearr_27750 = state_27739;(statearr_27750[(10)] = inst_27726);
(statearr_27750[(8)] = inst_27716__$1);
return statearr_27750;
})();var statearr_27751_27769 = state_27739__$1;(statearr_27751_27769[(2)] = null);
(statearr_27751_27769[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27740 === (9)))
{var state_27739__$1 = state_27739;var statearr_27752_27770 = state_27739__$1;(statearr_27752_27770[(2)] = null);
(statearr_27752_27770[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27740 === (5)))
{var state_27739__$1 = state_27739;var statearr_27753_27771 = state_27739__$1;(statearr_27753_27771[(2)] = null);
(statearr_27753_27771[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27740 === (10)))
{var inst_27731 = (state_27739[(2)]);var state_27739__$1 = state_27739;var statearr_27754_27772 = state_27739__$1;(statearr_27754_27772[(2)] = inst_27731);
(statearr_27754_27772[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27740 === (8)))
{var inst_27721 = (state_27739[(7)]);var state_27739__$1 = state_27739;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27739__$1,(11),out,inst_27721);
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
});})(c__5693__auto___27762,out))
;return ((function (switch__5678__auto__,c__5693__auto___27762,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27758 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27758[(0)] = state_machine__5679__auto__);
(statearr_27758[(1)] = (1));
return statearr_27758;
});
var state_machine__5679__auto____1 = (function (state_27739){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27739);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27759){if((e27759 instanceof Object))
{var ex__5682__auto__ = e27759;var statearr_27760_27773 = state_27739;(statearr_27760_27773[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27739);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27759;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27774 = state_27739;
state_27739 = G__27774;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27739){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27762,out))
})();var state__5695__auto__ = (function (){var statearr_27761 = f__5694__auto__.call(null);(statearr_27761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27762);
return statearr_27761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27762,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___27871 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27871,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27871,out){
return (function (state_27846){var state_val_27847 = (state_27846[(1)]);if((state_val_27847 === (7)))
{var inst_27841 = (state_27846[(2)]);var state_27846__$1 = state_27846;var statearr_27848_27872 = state_27846__$1;(statearr_27848_27872[(2)] = inst_27841);
(statearr_27848_27872[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27847 === (1)))
{var inst_27823 = null;var state_27846__$1 = (function (){var statearr_27849 = state_27846;(statearr_27849[(7)] = inst_27823);
return statearr_27849;
})();var statearr_27850_27873 = state_27846__$1;(statearr_27850_27873[(2)] = null);
(statearr_27850_27873[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27847 === (4)))
{var inst_27826 = (state_27846[(8)]);var inst_27826__$1 = (state_27846[(2)]);var inst_27827 = (inst_27826__$1 == null);var inst_27828 = cljs.core.not.call(null,inst_27827);var state_27846__$1 = (function (){var statearr_27851 = state_27846;(statearr_27851[(8)] = inst_27826__$1);
return statearr_27851;
})();if(inst_27828)
{var statearr_27852_27874 = state_27846__$1;(statearr_27852_27874[(1)] = (5));
} else
{var statearr_27853_27875 = state_27846__$1;(statearr_27853_27875[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27847 === (6)))
{var state_27846__$1 = state_27846;var statearr_27854_27876 = state_27846__$1;(statearr_27854_27876[(2)] = null);
(statearr_27854_27876[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27847 === (3)))
{var inst_27843 = (state_27846[(2)]);var inst_27844 = cljs.core.async.close_BANG_.call(null,out);var state_27846__$1 = (function (){var statearr_27855 = state_27846;(statearr_27855[(9)] = inst_27843);
return statearr_27855;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27846__$1,inst_27844);
} else
{if((state_val_27847 === (2)))
{var state_27846__$1 = state_27846;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27846__$1,(4),ch);
} else
{if((state_val_27847 === (11)))
{var inst_27826 = (state_27846[(8)]);var inst_27835 = (state_27846[(2)]);var inst_27823 = inst_27826;var state_27846__$1 = (function (){var statearr_27856 = state_27846;(statearr_27856[(7)] = inst_27823);
(statearr_27856[(10)] = inst_27835);
return statearr_27856;
})();var statearr_27857_27877 = state_27846__$1;(statearr_27857_27877[(2)] = null);
(statearr_27857_27877[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27847 === (9)))
{var inst_27826 = (state_27846[(8)]);var state_27846__$1 = state_27846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27846__$1,(11),out,inst_27826);
} else
{if((state_val_27847 === (5)))
{var inst_27826 = (state_27846[(8)]);var inst_27823 = (state_27846[(7)]);var inst_27830 = cljs.core._EQ_.call(null,inst_27826,inst_27823);var state_27846__$1 = state_27846;if(inst_27830)
{var statearr_27859_27878 = state_27846__$1;(statearr_27859_27878[(1)] = (8));
} else
{var statearr_27860_27879 = state_27846__$1;(statearr_27860_27879[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27847 === (10)))
{var inst_27838 = (state_27846[(2)]);var state_27846__$1 = state_27846;var statearr_27861_27880 = state_27846__$1;(statearr_27861_27880[(2)] = inst_27838);
(statearr_27861_27880[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27847 === (8)))
{var inst_27823 = (state_27846[(7)]);var tmp27858 = inst_27823;var inst_27823__$1 = tmp27858;var state_27846__$1 = (function (){var statearr_27862 = state_27846;(statearr_27862[(7)] = inst_27823__$1);
return statearr_27862;
})();var statearr_27863_27881 = state_27846__$1;(statearr_27863_27881[(2)] = null);
(statearr_27863_27881[(1)] = (2));
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
});})(c__5693__auto___27871,out))
;return ((function (switch__5678__auto__,c__5693__auto___27871,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27867 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27867[(0)] = state_machine__5679__auto__);
(statearr_27867[(1)] = (1));
return statearr_27867;
});
var state_machine__5679__auto____1 = (function (state_27846){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27846);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27868){if((e27868 instanceof Object))
{var ex__5682__auto__ = e27868;var statearr_27869_27882 = state_27846;(statearr_27869_27882[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27846);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27868;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27883 = state_27846;
state_27846 = G__27883;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27846){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27871,out))
})();var state__5695__auto__ = (function (){var statearr_27870 = f__5694__auto__.call(null);(statearr_27870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27871);
return statearr_27870;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27871,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___28018 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28018,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28018,out){
return (function (state_27988){var state_val_27989 = (state_27988[(1)]);if((state_val_27989 === (7)))
{var inst_27984 = (state_27988[(2)]);var state_27988__$1 = state_27988;var statearr_27990_28019 = state_27988__$1;(statearr_27990_28019[(2)] = inst_27984);
(statearr_27990_28019[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27989 === (1)))
{var inst_27951 = (new Array(n));var inst_27952 = inst_27951;var inst_27953 = (0);var state_27988__$1 = (function (){var statearr_27991 = state_27988;(statearr_27991[(7)] = inst_27952);
(statearr_27991[(8)] = inst_27953);
return statearr_27991;
})();var statearr_27992_28020 = state_27988__$1;(statearr_27992_28020[(2)] = null);
(statearr_27992_28020[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27989 === (4)))
{var inst_27956 = (state_27988[(9)]);var inst_27956__$1 = (state_27988[(2)]);var inst_27957 = (inst_27956__$1 == null);var inst_27958 = cljs.core.not.call(null,inst_27957);var state_27988__$1 = (function (){var statearr_27993 = state_27988;(statearr_27993[(9)] = inst_27956__$1);
return statearr_27993;
})();if(inst_27958)
{var statearr_27994_28021 = state_27988__$1;(statearr_27994_28021[(1)] = (5));
} else
{var statearr_27995_28022 = state_27988__$1;(statearr_27995_28022[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27989 === (15)))
{var inst_27978 = (state_27988[(2)]);var state_27988__$1 = state_27988;var statearr_27996_28023 = state_27988__$1;(statearr_27996_28023[(2)] = inst_27978);
(statearr_27996_28023[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27989 === (13)))
{var state_27988__$1 = state_27988;var statearr_27997_28024 = state_27988__$1;(statearr_27997_28024[(2)] = null);
(statearr_27997_28024[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27989 === (6)))
{var inst_27953 = (state_27988[(8)]);var inst_27974 = (inst_27953 > (0));var state_27988__$1 = state_27988;if(cljs.core.truth_(inst_27974))
{var statearr_27998_28025 = state_27988__$1;(statearr_27998_28025[(1)] = (12));
} else
{var statearr_27999_28026 = state_27988__$1;(statearr_27999_28026[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27989 === (3)))
{var inst_27986 = (state_27988[(2)]);var state_27988__$1 = state_27988;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27988__$1,inst_27986);
} else
{if((state_val_27989 === (12)))
{var inst_27952 = (state_27988[(7)]);var inst_27976 = cljs.core.vec.call(null,inst_27952);var state_27988__$1 = state_27988;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27988__$1,(15),out,inst_27976);
} else
{if((state_val_27989 === (2)))
{var state_27988__$1 = state_27988;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27988__$1,(4),ch);
} else
{if((state_val_27989 === (11)))
{var inst_27968 = (state_27988[(2)]);var inst_27969 = (new Array(n));var inst_27952 = inst_27969;var inst_27953 = (0);var state_27988__$1 = (function (){var statearr_28000 = state_27988;(statearr_28000[(7)] = inst_27952);
(statearr_28000[(10)] = inst_27968);
(statearr_28000[(8)] = inst_27953);
return statearr_28000;
})();var statearr_28001_28027 = state_27988__$1;(statearr_28001_28027[(2)] = null);
(statearr_28001_28027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27989 === (9)))
{var inst_27952 = (state_27988[(7)]);var inst_27966 = cljs.core.vec.call(null,inst_27952);var state_27988__$1 = state_27988;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27988__$1,(11),out,inst_27966);
} else
{if((state_val_27989 === (5)))
{var inst_27956 = (state_27988[(9)]);var inst_27952 = (state_27988[(7)]);var inst_27961 = (state_27988[(11)]);var inst_27953 = (state_27988[(8)]);var inst_27960 = (inst_27952[inst_27953] = inst_27956);var inst_27961__$1 = (inst_27953 + (1));var inst_27962 = (inst_27961__$1 < n);var state_27988__$1 = (function (){var statearr_28002 = state_27988;(statearr_28002[(11)] = inst_27961__$1);
(statearr_28002[(12)] = inst_27960);
return statearr_28002;
})();if(cljs.core.truth_(inst_27962))
{var statearr_28003_28028 = state_27988__$1;(statearr_28003_28028[(1)] = (8));
} else
{var statearr_28004_28029 = state_27988__$1;(statearr_28004_28029[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27989 === (14)))
{var inst_27981 = (state_27988[(2)]);var inst_27982 = cljs.core.async.close_BANG_.call(null,out);var state_27988__$1 = (function (){var statearr_28006 = state_27988;(statearr_28006[(13)] = inst_27981);
return statearr_28006;
})();var statearr_28007_28030 = state_27988__$1;(statearr_28007_28030[(2)] = inst_27982);
(statearr_28007_28030[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27989 === (10)))
{var inst_27972 = (state_27988[(2)]);var state_27988__$1 = state_27988;var statearr_28008_28031 = state_27988__$1;(statearr_28008_28031[(2)] = inst_27972);
(statearr_28008_28031[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27989 === (8)))
{var inst_27952 = (state_27988[(7)]);var inst_27961 = (state_27988[(11)]);var tmp28005 = inst_27952;var inst_27952__$1 = tmp28005;var inst_27953 = inst_27961;var state_27988__$1 = (function (){var statearr_28009 = state_27988;(statearr_28009[(7)] = inst_27952__$1);
(statearr_28009[(8)] = inst_27953);
return statearr_28009;
})();var statearr_28010_28032 = state_27988__$1;(statearr_28010_28032[(2)] = null);
(statearr_28010_28032[(1)] = (2));
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
});})(c__5693__auto___28018,out))
;return ((function (switch__5678__auto__,c__5693__auto___28018,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28014[(0)] = state_machine__5679__auto__);
(statearr_28014[(1)] = (1));
return statearr_28014;
});
var state_machine__5679__auto____1 = (function (state_27988){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27988);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28015){if((e28015 instanceof Object))
{var ex__5682__auto__ = e28015;var statearr_28016_28033 = state_27988;(statearr_28016_28033[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27988);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28034 = state_27988;
state_27988 = G__28034;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27988){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28018,out))
})();var state__5695__auto__ = (function (){var statearr_28017 = f__5694__auto__.call(null);(statearr_28017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28018);
return statearr_28017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28018,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___28177 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28177,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28177,out){
return (function (state_28147){var state_val_28148 = (state_28147[(1)]);if((state_val_28148 === (7)))
{var inst_28143 = (state_28147[(2)]);var state_28147__$1 = state_28147;var statearr_28149_28178 = state_28147__$1;(statearr_28149_28178[(2)] = inst_28143);
(statearr_28149_28178[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28148 === (1)))
{var inst_28106 = [];var inst_28107 = inst_28106;var inst_28108 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_28147__$1 = (function (){var statearr_28150 = state_28147;(statearr_28150[(7)] = inst_28108);
(statearr_28150[(8)] = inst_28107);
return statearr_28150;
})();var statearr_28151_28179 = state_28147__$1;(statearr_28151_28179[(2)] = null);
(statearr_28151_28179[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28148 === (4)))
{var inst_28111 = (state_28147[(9)]);var inst_28111__$1 = (state_28147[(2)]);var inst_28112 = (inst_28111__$1 == null);var inst_28113 = cljs.core.not.call(null,inst_28112);var state_28147__$1 = (function (){var statearr_28152 = state_28147;(statearr_28152[(9)] = inst_28111__$1);
return statearr_28152;
})();if(inst_28113)
{var statearr_28153_28180 = state_28147__$1;(statearr_28153_28180[(1)] = (5));
} else
{var statearr_28154_28181 = state_28147__$1;(statearr_28154_28181[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28148 === (15)))
{var inst_28137 = (state_28147[(2)]);var state_28147__$1 = state_28147;var statearr_28155_28182 = state_28147__$1;(statearr_28155_28182[(2)] = inst_28137);
(statearr_28155_28182[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28148 === (13)))
{var state_28147__$1 = state_28147;var statearr_28156_28183 = state_28147__$1;(statearr_28156_28183[(2)] = null);
(statearr_28156_28183[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28148 === (6)))
{var inst_28107 = (state_28147[(8)]);var inst_28132 = inst_28107.length;var inst_28133 = (inst_28132 > (0));var state_28147__$1 = state_28147;if(cljs.core.truth_(inst_28133))
{var statearr_28157_28184 = state_28147__$1;(statearr_28157_28184[(1)] = (12));
} else
{var statearr_28158_28185 = state_28147__$1;(statearr_28158_28185[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28148 === (3)))
{var inst_28145 = (state_28147[(2)]);var state_28147__$1 = state_28147;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28147__$1,inst_28145);
} else
{if((state_val_28148 === (12)))
{var inst_28107 = (state_28147[(8)]);var inst_28135 = cljs.core.vec.call(null,inst_28107);var state_28147__$1 = state_28147;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28147__$1,(15),out,inst_28135);
} else
{if((state_val_28148 === (2)))
{var state_28147__$1 = state_28147;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28147__$1,(4),ch);
} else
{if((state_val_28148 === (11)))
{var inst_28111 = (state_28147[(9)]);var inst_28115 = (state_28147[(10)]);var inst_28125 = (state_28147[(2)]);var inst_28126 = [];var inst_28127 = inst_28126.push(inst_28111);var inst_28107 = inst_28126;var inst_28108 = inst_28115;var state_28147__$1 = (function (){var statearr_28159 = state_28147;(statearr_28159[(7)] = inst_28108);
(statearr_28159[(8)] = inst_28107);
(statearr_28159[(11)] = inst_28125);
(statearr_28159[(12)] = inst_28127);
return statearr_28159;
})();var statearr_28160_28186 = state_28147__$1;(statearr_28160_28186[(2)] = null);
(statearr_28160_28186[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28148 === (9)))
{var inst_28107 = (state_28147[(8)]);var inst_28123 = cljs.core.vec.call(null,inst_28107);var state_28147__$1 = state_28147;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28147__$1,(11),out,inst_28123);
} else
{if((state_val_28148 === (5)))
{var inst_28111 = (state_28147[(9)]);var inst_28115 = (state_28147[(10)]);var inst_28108 = (state_28147[(7)]);var inst_28115__$1 = f.call(null,inst_28111);var inst_28116 = cljs.core._EQ_.call(null,inst_28115__$1,inst_28108);var inst_28117 = cljs.core.keyword_identical_QMARK_.call(null,inst_28108,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_28118 = (inst_28116) || (inst_28117);var state_28147__$1 = (function (){var statearr_28161 = state_28147;(statearr_28161[(10)] = inst_28115__$1);
return statearr_28161;
})();if(cljs.core.truth_(inst_28118))
{var statearr_28162_28187 = state_28147__$1;(statearr_28162_28187[(1)] = (8));
} else
{var statearr_28163_28188 = state_28147__$1;(statearr_28163_28188[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28148 === (14)))
{var inst_28140 = (state_28147[(2)]);var inst_28141 = cljs.core.async.close_BANG_.call(null,out);var state_28147__$1 = (function (){var statearr_28165 = state_28147;(statearr_28165[(13)] = inst_28140);
return statearr_28165;
})();var statearr_28166_28189 = state_28147__$1;(statearr_28166_28189[(2)] = inst_28141);
(statearr_28166_28189[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28148 === (10)))
{var inst_28130 = (state_28147[(2)]);var state_28147__$1 = state_28147;var statearr_28167_28190 = state_28147__$1;(statearr_28167_28190[(2)] = inst_28130);
(statearr_28167_28190[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28148 === (8)))
{var inst_28111 = (state_28147[(9)]);var inst_28115 = (state_28147[(10)]);var inst_28107 = (state_28147[(8)]);var inst_28120 = inst_28107.push(inst_28111);var tmp28164 = inst_28107;var inst_28107__$1 = tmp28164;var inst_28108 = inst_28115;var state_28147__$1 = (function (){var statearr_28168 = state_28147;(statearr_28168[(14)] = inst_28120);
(statearr_28168[(7)] = inst_28108);
(statearr_28168[(8)] = inst_28107__$1);
return statearr_28168;
})();var statearr_28169_28191 = state_28147__$1;(statearr_28169_28191[(2)] = null);
(statearr_28169_28191[(1)] = (2));
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
});})(c__5693__auto___28177,out))
;return ((function (switch__5678__auto__,c__5693__auto___28177,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28173[(0)] = state_machine__5679__auto__);
(statearr_28173[(1)] = (1));
return statearr_28173;
});
var state_machine__5679__auto____1 = (function (state_28147){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28147);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28174){if((e28174 instanceof Object))
{var ex__5682__auto__ = e28174;var statearr_28175_28192 = state_28147;(statearr_28175_28192[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28147);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28174;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28193 = state_28147;
state_28147 = G__28193;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28147){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28177,out))
})();var state__5695__auto__ = (function (){var statearr_28176 = f__5694__auto__.call(null);(statearr_28176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28177);
return statearr_28176;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28177,out))
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
