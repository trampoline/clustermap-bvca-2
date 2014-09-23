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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t53144 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53144 = (function (f,fn_handler,meta53145){
this.f = f;
this.fn_handler = fn_handler;
this.meta53145 = meta53145;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53144.cljs$lang$type = true;
cljs.core.async.t53144.cljs$lang$ctorStr = "cljs.core.async/t53144";
cljs.core.async.t53144.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t53144");
});
cljs.core.async.t53144.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t53144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t53144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t53144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53146){var self__ = this;
var _53146__$1 = this;return self__.meta53145;
});
cljs.core.async.t53144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53146,meta53145__$1){var self__ = this;
var _53146__$1 = this;return (new cljs.core.async.t53144(self__.f,self__.fn_handler,meta53145__$1));
});
cljs.core.async.__GT_t53144 = (function __GT_t53144(f__$1,fn_handler__$1,meta53145){return (new cljs.core.async.t53144(f__$1,fn_handler__$1,meta53145));
});
}
return (new cljs.core.async.t53144(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__53148 = buff;if(G__53148)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__53148.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__53148.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__53148);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__53148);
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
{var val_53149 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_53149);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_53149,ret){
return (function (){return fn1.call(null,val_53149);
});})(val_53149,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___53150 = n;var x_53151 = (0);while(true){
if((x_53151 < n__4414__auto___53150))
{(a[x_53151] = (0));
{
var G__53152 = (x_53151 + (1));
x_53151 = G__53152;
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
var G__53153 = (i + (1));
i = G__53153;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t53157 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53157 = (function (flag,alt_flag,meta53158){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta53158 = meta53158;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53157.cljs$lang$type = true;
cljs.core.async.t53157.cljs$lang$ctorStr = "cljs.core.async/t53157";
cljs.core.async.t53157.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t53157");
});})(flag))
;
cljs.core.async.t53157.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t53157.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t53157.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t53157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_53159){var self__ = this;
var _53159__$1 = this;return self__.meta53158;
});})(flag))
;
cljs.core.async.t53157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_53159,meta53158__$1){var self__ = this;
var _53159__$1 = this;return (new cljs.core.async.t53157(self__.flag,self__.alt_flag,meta53158__$1));
});})(flag))
;
cljs.core.async.__GT_t53157 = ((function (flag){
return (function __GT_t53157(flag__$1,alt_flag__$1,meta53158){return (new cljs.core.async.t53157(flag__$1,alt_flag__$1,meta53158));
});})(flag))
;
}
return (new cljs.core.async.t53157(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t53163 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53163 = (function (cb,flag,alt_handler,meta53164){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta53164 = meta53164;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53163.cljs$lang$type = true;
cljs.core.async.t53163.cljs$lang$ctorStr = "cljs.core.async/t53163";
cljs.core.async.t53163.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t53163");
});
cljs.core.async.t53163.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t53163.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t53163.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t53163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53165){var self__ = this;
var _53165__$1 = this;return self__.meta53164;
});
cljs.core.async.t53163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53165,meta53164__$1){var self__ = this;
var _53165__$1 = this;return (new cljs.core.async.t53163(self__.cb,self__.flag,self__.alt_handler,meta53164__$1));
});
cljs.core.async.__GT_t53163 = (function __GT_t53163(cb__$1,flag__$1,alt_handler__$1,meta53164){return (new cljs.core.async.t53163(cb__$1,flag__$1,alt_handler__$1,meta53164));
});
}
return (new cljs.core.async.t53163(cb,flag,alt_handler,null));
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
return (function (p1__53166_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53166_SHARP_,port], null));
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
var G__53167 = (i + (1));
i = G__53167;
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
var alts_BANG___delegate = function (ports,p__53168){var map__53170 = p__53168;var map__53170__$1 = ((cljs.core.seq_QMARK_.call(null,map__53170))?cljs.core.apply.call(null,cljs.core.hash_map,map__53170):map__53170);var opts = map__53170__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__53168 = null;if (arguments.length > 1) {
  p__53168 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__53168);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__53171){
var ports = cljs.core.first(arglist__53171);
var p__53168 = cljs.core.rest(arglist__53171);
return alts_BANG___delegate(ports,p__53168);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t53179 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53179 = (function (ch,f,map_LT_,meta53180){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta53180 = meta53180;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53179.cljs$lang$type = true;
cljs.core.async.t53179.cljs$lang$ctorStr = "cljs.core.async/t53179";
cljs.core.async.t53179.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t53179");
});
cljs.core.async.t53179.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t53179.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t53179.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t53179.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t53182 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53182 = (function (fn1,_,meta53180,ch,f,map_LT_,meta53183){
this.fn1 = fn1;
this._ = _;
this.meta53180 = meta53180;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta53183 = meta53183;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53182.cljs$lang$type = true;
cljs.core.async.t53182.cljs$lang$ctorStr = "cljs.core.async/t53182";
cljs.core.async.t53182.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t53182");
});})(___$1))
;
cljs.core.async.t53182.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t53182.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t53182.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t53182.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__53172_SHARP_){return f1.call(null,(((p1__53172_SHARP_ == null))?null:self__.f.call(null,p1__53172_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t53182.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_53184){var self__ = this;
var _53184__$1 = this;return self__.meta53183;
});})(___$1))
;
cljs.core.async.t53182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_53184,meta53183__$1){var self__ = this;
var _53184__$1 = this;return (new cljs.core.async.t53182(self__.fn1,self__._,self__.meta53180,self__.ch,self__.f,self__.map_LT_,meta53183__$1));
});})(___$1))
;
cljs.core.async.__GT_t53182 = ((function (___$1){
return (function __GT_t53182(fn1__$1,___$2,meta53180__$1,ch__$2,f__$2,map_LT___$2,meta53183){return (new cljs.core.async.t53182(fn1__$1,___$2,meta53180__$1,ch__$2,f__$2,map_LT___$2,meta53183));
});})(___$1))
;
}
return (new cljs.core.async.t53182(fn1,___$1,self__.meta53180,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t53179.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t53179.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t53179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53181){var self__ = this;
var _53181__$1 = this;return self__.meta53180;
});
cljs.core.async.t53179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53181,meta53180__$1){var self__ = this;
var _53181__$1 = this;return (new cljs.core.async.t53179(self__.ch,self__.f,self__.map_LT_,meta53180__$1));
});
cljs.core.async.__GT_t53179 = (function __GT_t53179(ch__$1,f__$1,map_LT___$1,meta53180){return (new cljs.core.async.t53179(ch__$1,f__$1,map_LT___$1,meta53180));
});
}
return (new cljs.core.async.t53179(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t53188 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53188 = (function (ch,f,map_GT_,meta53189){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta53189 = meta53189;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53188.cljs$lang$type = true;
cljs.core.async.t53188.cljs$lang$ctorStr = "cljs.core.async/t53188";
cljs.core.async.t53188.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t53188");
});
cljs.core.async.t53188.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t53188.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t53188.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t53188.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t53188.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t53188.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t53188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53190){var self__ = this;
var _53190__$1 = this;return self__.meta53189;
});
cljs.core.async.t53188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53190,meta53189__$1){var self__ = this;
var _53190__$1 = this;return (new cljs.core.async.t53188(self__.ch,self__.f,self__.map_GT_,meta53189__$1));
});
cljs.core.async.__GT_t53188 = (function __GT_t53188(ch__$1,f__$1,map_GT___$1,meta53189){return (new cljs.core.async.t53188(ch__$1,f__$1,map_GT___$1,meta53189));
});
}
return (new cljs.core.async.t53188(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t53194 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53194 = (function (ch,p,filter_GT_,meta53195){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta53195 = meta53195;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53194.cljs$lang$type = true;
cljs.core.async.t53194.cljs$lang$ctorStr = "cljs.core.async/t53194";
cljs.core.async.t53194.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t53194");
});
cljs.core.async.t53194.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t53194.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t53194.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t53194.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t53194.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t53194.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t53194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53196){var self__ = this;
var _53196__$1 = this;return self__.meta53195;
});
cljs.core.async.t53194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53196,meta53195__$1){var self__ = this;
var _53196__$1 = this;return (new cljs.core.async.t53194(self__.ch,self__.p,self__.filter_GT_,meta53195__$1));
});
cljs.core.async.__GT_t53194 = (function __GT_t53194(ch__$1,p__$1,filter_GT___$1,meta53195){return (new cljs.core.async.t53194(ch__$1,p__$1,filter_GT___$1,meta53195));
});
}
return (new cljs.core.async.t53194(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___53279 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___53279,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___53279,out){
return (function (state_53258){var state_val_53259 = (state_53258[(1)]);if((state_val_53259 === (7)))
{var inst_53254 = (state_53258[(2)]);var state_53258__$1 = state_53258;var statearr_53260_53280 = state_53258__$1;(statearr_53260_53280[(2)] = inst_53254);
(statearr_53260_53280[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53259 === (1)))
{var state_53258__$1 = state_53258;var statearr_53261_53281 = state_53258__$1;(statearr_53261_53281[(2)] = null);
(statearr_53261_53281[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53259 === (4)))
{var inst_53240 = (state_53258[(7)]);var inst_53240__$1 = (state_53258[(2)]);var inst_53241 = (inst_53240__$1 == null);var state_53258__$1 = (function (){var statearr_53262 = state_53258;(statearr_53262[(7)] = inst_53240__$1);
return statearr_53262;
})();if(cljs.core.truth_(inst_53241))
{var statearr_53263_53282 = state_53258__$1;(statearr_53263_53282[(1)] = (5));
} else
{var statearr_53264_53283 = state_53258__$1;(statearr_53264_53283[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53259 === (6)))
{var inst_53240 = (state_53258[(7)]);var inst_53245 = p.call(null,inst_53240);var state_53258__$1 = state_53258;if(cljs.core.truth_(inst_53245))
{var statearr_53265_53284 = state_53258__$1;(statearr_53265_53284[(1)] = (8));
} else
{var statearr_53266_53285 = state_53258__$1;(statearr_53266_53285[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53259 === (3)))
{var inst_53256 = (state_53258[(2)]);var state_53258__$1 = state_53258;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53258__$1,inst_53256);
} else
{if((state_val_53259 === (2)))
{var state_53258__$1 = state_53258;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53258__$1,(4),ch);
} else
{if((state_val_53259 === (11)))
{var inst_53248 = (state_53258[(2)]);var state_53258__$1 = state_53258;var statearr_53267_53286 = state_53258__$1;(statearr_53267_53286[(2)] = inst_53248);
(statearr_53267_53286[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53259 === (9)))
{var state_53258__$1 = state_53258;var statearr_53268_53287 = state_53258__$1;(statearr_53268_53287[(2)] = null);
(statearr_53268_53287[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53259 === (5)))
{var inst_53243 = cljs.core.async.close_BANG_.call(null,out);var state_53258__$1 = state_53258;var statearr_53269_53288 = state_53258__$1;(statearr_53269_53288[(2)] = inst_53243);
(statearr_53269_53288[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53259 === (10)))
{var inst_53251 = (state_53258[(2)]);var state_53258__$1 = (function (){var statearr_53270 = state_53258;(statearr_53270[(8)] = inst_53251);
return statearr_53270;
})();var statearr_53271_53289 = state_53258__$1;(statearr_53271_53289[(2)] = null);
(statearr_53271_53289[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53259 === (8)))
{var inst_53240 = (state_53258[(7)]);var state_53258__$1 = state_53258;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53258__$1,(11),out,inst_53240);
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
});})(c__5708__auto___53279,out))
;return ((function (switch__5693__auto__,c__5708__auto___53279,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_53275 = [null,null,null,null,null,null,null,null,null];(statearr_53275[(0)] = state_machine__5694__auto__);
(statearr_53275[(1)] = (1));
return statearr_53275;
});
var state_machine__5694__auto____1 = (function (state_53258){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_53258);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53276){if((e53276 instanceof Object))
{var ex__5697__auto__ = e53276;var statearr_53277_53290 = state_53258;(statearr_53277_53290[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53258);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e53276;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53291 = state_53258;
state_53258 = G__53291;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53258){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___53279,out))
})();var state__5710__auto__ = (function (){var statearr_53278 = f__5709__auto__.call(null);(statearr_53278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___53279);
return statearr_53278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___53279,out))
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
return (function (state_53443){var state_val_53444 = (state_53443[(1)]);if((state_val_53444 === (7)))
{var inst_53439 = (state_53443[(2)]);var state_53443__$1 = state_53443;var statearr_53445_53482 = state_53443__$1;(statearr_53445_53482[(2)] = inst_53439);
(statearr_53445_53482[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53444 === (20)))
{var inst_53414 = (state_53443[(7)]);var inst_53425 = (state_53443[(2)]);var inst_53426 = cljs.core.next.call(null,inst_53414);var inst_53400 = inst_53426;var inst_53401 = null;var inst_53402 = (0);var inst_53403 = (0);var state_53443__$1 = (function (){var statearr_53446 = state_53443;(statearr_53446[(8)] = inst_53400);
(statearr_53446[(9)] = inst_53403);
(statearr_53446[(10)] = inst_53402);
(statearr_53446[(11)] = inst_53401);
(statearr_53446[(12)] = inst_53425);
return statearr_53446;
})();var statearr_53447_53483 = state_53443__$1;(statearr_53447_53483[(2)] = null);
(statearr_53447_53483[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53444 === (1)))
{var state_53443__$1 = state_53443;var statearr_53448_53484 = state_53443__$1;(statearr_53448_53484[(2)] = null);
(statearr_53448_53484[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53444 === (4)))
{var inst_53389 = (state_53443[(13)]);var inst_53389__$1 = (state_53443[(2)]);var inst_53390 = (inst_53389__$1 == null);var state_53443__$1 = (function (){var statearr_53452 = state_53443;(statearr_53452[(13)] = inst_53389__$1);
return statearr_53452;
})();if(cljs.core.truth_(inst_53390))
{var statearr_53453_53485 = state_53443__$1;(statearr_53453_53485[(1)] = (5));
} else
{var statearr_53454_53486 = state_53443__$1;(statearr_53454_53486[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53444 === (15)))
{var state_53443__$1 = state_53443;var statearr_53455_53487 = state_53443__$1;(statearr_53455_53487[(2)] = null);
(statearr_53455_53487[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53444 === (13)))
{var inst_53400 = (state_53443[(8)]);var inst_53403 = (state_53443[(9)]);var inst_53402 = (state_53443[(10)]);var inst_53401 = (state_53443[(11)]);var inst_53410 = (state_53443[(2)]);var inst_53411 = (inst_53403 + (1));var tmp53449 = inst_53400;var tmp53450 = inst_53402;var tmp53451 = inst_53401;var inst_53400__$1 = tmp53449;var inst_53401__$1 = tmp53451;var inst_53402__$1 = tmp53450;var inst_53403__$1 = inst_53411;var state_53443__$1 = (function (){var statearr_53456 = state_53443;(statearr_53456[(8)] = inst_53400__$1);
(statearr_53456[(9)] = inst_53403__$1);
(statearr_53456[(10)] = inst_53402__$1);
(statearr_53456[(14)] = inst_53410);
(statearr_53456[(11)] = inst_53401__$1);
return statearr_53456;
})();var statearr_53457_53488 = state_53443__$1;(statearr_53457_53488[(2)] = null);
(statearr_53457_53488[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53444 === (6)))
{var inst_53389 = (state_53443[(13)]);var inst_53394 = f.call(null,inst_53389);var inst_53399 = cljs.core.seq.call(null,inst_53394);var inst_53400 = inst_53399;var inst_53401 = null;var inst_53402 = (0);var inst_53403 = (0);var state_53443__$1 = (function (){var statearr_53458 = state_53443;(statearr_53458[(8)] = inst_53400);
(statearr_53458[(9)] = inst_53403);
(statearr_53458[(10)] = inst_53402);
(statearr_53458[(11)] = inst_53401);
return statearr_53458;
})();var statearr_53459_53489 = state_53443__$1;(statearr_53459_53489[(2)] = null);
(statearr_53459_53489[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53444 === (17)))
{var inst_53414 = (state_53443[(7)]);var inst_53418 = cljs.core.chunk_first.call(null,inst_53414);var inst_53419 = cljs.core.chunk_rest.call(null,inst_53414);var inst_53420 = cljs.core.count.call(null,inst_53418);var inst_53400 = inst_53419;var inst_53401 = inst_53418;var inst_53402 = inst_53420;var inst_53403 = (0);var state_53443__$1 = (function (){var statearr_53460 = state_53443;(statearr_53460[(8)] = inst_53400);
(statearr_53460[(9)] = inst_53403);
(statearr_53460[(10)] = inst_53402);
(statearr_53460[(11)] = inst_53401);
return statearr_53460;
})();var statearr_53461_53490 = state_53443__$1;(statearr_53461_53490[(2)] = null);
(statearr_53461_53490[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53444 === (3)))
{var inst_53441 = (state_53443[(2)]);var state_53443__$1 = state_53443;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53443__$1,inst_53441);
} else
{if((state_val_53444 === (12)))
{var inst_53434 = (state_53443[(2)]);var state_53443__$1 = state_53443;var statearr_53462_53491 = state_53443__$1;(statearr_53462_53491[(2)] = inst_53434);
(statearr_53462_53491[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53444 === (2)))
{var state_53443__$1 = state_53443;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53443__$1,(4),in$);
} else
{if((state_val_53444 === (19)))
{var inst_53429 = (state_53443[(2)]);var state_53443__$1 = state_53443;var statearr_53463_53492 = state_53443__$1;(statearr_53463_53492[(2)] = inst_53429);
(statearr_53463_53492[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53444 === (11)))
{var inst_53400 = (state_53443[(8)]);var inst_53414 = (state_53443[(7)]);var inst_53414__$1 = cljs.core.seq.call(null,inst_53400);var state_53443__$1 = (function (){var statearr_53464 = state_53443;(statearr_53464[(7)] = inst_53414__$1);
return statearr_53464;
})();if(inst_53414__$1)
{var statearr_53465_53493 = state_53443__$1;(statearr_53465_53493[(1)] = (14));
} else
{var statearr_53466_53494 = state_53443__$1;(statearr_53466_53494[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53444 === (9)))
{var inst_53436 = (state_53443[(2)]);var state_53443__$1 = (function (){var statearr_53467 = state_53443;(statearr_53467[(15)] = inst_53436);
return statearr_53467;
})();var statearr_53468_53495 = state_53443__$1;(statearr_53468_53495[(2)] = null);
(statearr_53468_53495[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53444 === (5)))
{var inst_53392 = cljs.core.async.close_BANG_.call(null,out);var state_53443__$1 = state_53443;var statearr_53469_53496 = state_53443__$1;(statearr_53469_53496[(2)] = inst_53392);
(statearr_53469_53496[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53444 === (14)))
{var inst_53414 = (state_53443[(7)]);var inst_53416 = cljs.core.chunked_seq_QMARK_.call(null,inst_53414);var state_53443__$1 = state_53443;if(inst_53416)
{var statearr_53470_53497 = state_53443__$1;(statearr_53470_53497[(1)] = (17));
} else
{var statearr_53471_53498 = state_53443__$1;(statearr_53471_53498[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53444 === (16)))
{var inst_53432 = (state_53443[(2)]);var state_53443__$1 = state_53443;var statearr_53472_53499 = state_53443__$1;(statearr_53472_53499[(2)] = inst_53432);
(statearr_53472_53499[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53444 === (10)))
{var inst_53403 = (state_53443[(9)]);var inst_53401 = (state_53443[(11)]);var inst_53408 = cljs.core._nth.call(null,inst_53401,inst_53403);var state_53443__$1 = state_53443;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53443__$1,(13),out,inst_53408);
} else
{if((state_val_53444 === (18)))
{var inst_53414 = (state_53443[(7)]);var inst_53423 = cljs.core.first.call(null,inst_53414);var state_53443__$1 = state_53443;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53443__$1,(20),out,inst_53423);
} else
{if((state_val_53444 === (8)))
{var inst_53403 = (state_53443[(9)]);var inst_53402 = (state_53443[(10)]);var inst_53405 = (inst_53403 < inst_53402);var inst_53406 = inst_53405;var state_53443__$1 = state_53443;if(cljs.core.truth_(inst_53406))
{var statearr_53473_53500 = state_53443__$1;(statearr_53473_53500[(1)] = (10));
} else
{var statearr_53474_53501 = state_53443__$1;(statearr_53474_53501[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_53478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53478[(0)] = state_machine__5694__auto__);
(statearr_53478[(1)] = (1));
return statearr_53478;
});
var state_machine__5694__auto____1 = (function (state_53443){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_53443);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53479){if((e53479 instanceof Object))
{var ex__5697__auto__ = e53479;var statearr_53480_53502 = state_53443;(statearr_53480_53502[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53443);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e53479;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53503 = state_53443;
state_53443 = G__53503;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53443){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_53481 = f__5709__auto__.call(null);(statearr_53481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_53481;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___53584 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___53584){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___53584){
return (function (state_53563){var state_val_53564 = (state_53563[(1)]);if((state_val_53564 === (7)))
{var inst_53559 = (state_53563[(2)]);var state_53563__$1 = state_53563;var statearr_53565_53585 = state_53563__$1;(statearr_53565_53585[(2)] = inst_53559);
(statearr_53565_53585[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53564 === (1)))
{var state_53563__$1 = state_53563;var statearr_53566_53586 = state_53563__$1;(statearr_53566_53586[(2)] = null);
(statearr_53566_53586[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53564 === (4)))
{var inst_53546 = (state_53563[(7)]);var inst_53546__$1 = (state_53563[(2)]);var inst_53547 = (inst_53546__$1 == null);var state_53563__$1 = (function (){var statearr_53567 = state_53563;(statearr_53567[(7)] = inst_53546__$1);
return statearr_53567;
})();if(cljs.core.truth_(inst_53547))
{var statearr_53568_53587 = state_53563__$1;(statearr_53568_53587[(1)] = (5));
} else
{var statearr_53569_53588 = state_53563__$1;(statearr_53569_53588[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53564 === (6)))
{var inst_53546 = (state_53563[(7)]);var state_53563__$1 = state_53563;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53563__$1,(11),to,inst_53546);
} else
{if((state_val_53564 === (3)))
{var inst_53561 = (state_53563[(2)]);var state_53563__$1 = state_53563;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53563__$1,inst_53561);
} else
{if((state_val_53564 === (2)))
{var state_53563__$1 = state_53563;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53563__$1,(4),from);
} else
{if((state_val_53564 === (11)))
{var inst_53556 = (state_53563[(2)]);var state_53563__$1 = (function (){var statearr_53570 = state_53563;(statearr_53570[(8)] = inst_53556);
return statearr_53570;
})();var statearr_53571_53589 = state_53563__$1;(statearr_53571_53589[(2)] = null);
(statearr_53571_53589[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53564 === (9)))
{var state_53563__$1 = state_53563;var statearr_53572_53590 = state_53563__$1;(statearr_53572_53590[(2)] = null);
(statearr_53572_53590[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53564 === (5)))
{var state_53563__$1 = state_53563;if(cljs.core.truth_(close_QMARK_))
{var statearr_53573_53591 = state_53563__$1;(statearr_53573_53591[(1)] = (8));
} else
{var statearr_53574_53592 = state_53563__$1;(statearr_53574_53592[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53564 === (10)))
{var inst_53553 = (state_53563[(2)]);var state_53563__$1 = state_53563;var statearr_53575_53593 = state_53563__$1;(statearr_53575_53593[(2)] = inst_53553);
(statearr_53575_53593[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53564 === (8)))
{var inst_53550 = cljs.core.async.close_BANG_.call(null,to);var state_53563__$1 = state_53563;var statearr_53576_53594 = state_53563__$1;(statearr_53576_53594[(2)] = inst_53550);
(statearr_53576_53594[(1)] = (10));
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
});})(c__5708__auto___53584))
;return ((function (switch__5693__auto__,c__5708__auto___53584){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_53580 = [null,null,null,null,null,null,null,null,null];(statearr_53580[(0)] = state_machine__5694__auto__);
(statearr_53580[(1)] = (1));
return statearr_53580;
});
var state_machine__5694__auto____1 = (function (state_53563){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_53563);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53581){if((e53581 instanceof Object))
{var ex__5697__auto__ = e53581;var statearr_53582_53595 = state_53563;(statearr_53582_53595[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53563);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e53581;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53596 = state_53563;
state_53563 = G__53596;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53563){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___53584))
})();var state__5710__auto__ = (function (){var statearr_53583 = f__5709__auto__.call(null);(statearr_53583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___53584);
return statearr_53583;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___53584))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___53683 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___53683,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___53683,tc,fc){
return (function (state_53661){var state_val_53662 = (state_53661[(1)]);if((state_val_53662 === (7)))
{var inst_53657 = (state_53661[(2)]);var state_53661__$1 = state_53661;var statearr_53663_53684 = state_53661__$1;(statearr_53663_53684[(2)] = inst_53657);
(statearr_53663_53684[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53662 === (1)))
{var state_53661__$1 = state_53661;var statearr_53664_53685 = state_53661__$1;(statearr_53664_53685[(2)] = null);
(statearr_53664_53685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53662 === (4)))
{var inst_53642 = (state_53661[(7)]);var inst_53642__$1 = (state_53661[(2)]);var inst_53643 = (inst_53642__$1 == null);var state_53661__$1 = (function (){var statearr_53665 = state_53661;(statearr_53665[(7)] = inst_53642__$1);
return statearr_53665;
})();if(cljs.core.truth_(inst_53643))
{var statearr_53666_53686 = state_53661__$1;(statearr_53666_53686[(1)] = (5));
} else
{var statearr_53667_53687 = state_53661__$1;(statearr_53667_53687[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53662 === (6)))
{var inst_53642 = (state_53661[(7)]);var inst_53648 = p.call(null,inst_53642);var state_53661__$1 = state_53661;if(cljs.core.truth_(inst_53648))
{var statearr_53668_53688 = state_53661__$1;(statearr_53668_53688[(1)] = (9));
} else
{var statearr_53669_53689 = state_53661__$1;(statearr_53669_53689[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53662 === (3)))
{var inst_53659 = (state_53661[(2)]);var state_53661__$1 = state_53661;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53661__$1,inst_53659);
} else
{if((state_val_53662 === (2)))
{var state_53661__$1 = state_53661;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53661__$1,(4),ch);
} else
{if((state_val_53662 === (11)))
{var inst_53642 = (state_53661[(7)]);var inst_53652 = (state_53661[(2)]);var state_53661__$1 = state_53661;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53661__$1,(8),inst_53652,inst_53642);
} else
{if((state_val_53662 === (9)))
{var state_53661__$1 = state_53661;var statearr_53670_53690 = state_53661__$1;(statearr_53670_53690[(2)] = tc);
(statearr_53670_53690[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53662 === (5)))
{var inst_53645 = cljs.core.async.close_BANG_.call(null,tc);var inst_53646 = cljs.core.async.close_BANG_.call(null,fc);var state_53661__$1 = (function (){var statearr_53671 = state_53661;(statearr_53671[(8)] = inst_53645);
return statearr_53671;
})();var statearr_53672_53691 = state_53661__$1;(statearr_53672_53691[(2)] = inst_53646);
(statearr_53672_53691[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53662 === (10)))
{var state_53661__$1 = state_53661;var statearr_53673_53692 = state_53661__$1;(statearr_53673_53692[(2)] = fc);
(statearr_53673_53692[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53662 === (8)))
{var inst_53654 = (state_53661[(2)]);var state_53661__$1 = (function (){var statearr_53674 = state_53661;(statearr_53674[(9)] = inst_53654);
return statearr_53674;
})();var statearr_53675_53693 = state_53661__$1;(statearr_53675_53693[(2)] = null);
(statearr_53675_53693[(1)] = (2));
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
});})(c__5708__auto___53683,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___53683,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_53679 = [null,null,null,null,null,null,null,null,null,null];(statearr_53679[(0)] = state_machine__5694__auto__);
(statearr_53679[(1)] = (1));
return statearr_53679;
});
var state_machine__5694__auto____1 = (function (state_53661){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_53661);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53680){if((e53680 instanceof Object))
{var ex__5697__auto__ = e53680;var statearr_53681_53694 = state_53661;(statearr_53681_53694[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53661);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e53680;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53695 = state_53661;
state_53661 = G__53695;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53661){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___53683,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_53682 = f__5709__auto__.call(null);(statearr_53682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___53683);
return statearr_53682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___53683,tc,fc))
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
return (function (state_53742){var state_val_53743 = (state_53742[(1)]);if((state_val_53743 === (7)))
{var inst_53738 = (state_53742[(2)]);var state_53742__$1 = state_53742;var statearr_53744_53760 = state_53742__$1;(statearr_53744_53760[(2)] = inst_53738);
(statearr_53744_53760[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53743 === (6)))
{var inst_53731 = (state_53742[(7)]);var inst_53728 = (state_53742[(8)]);var inst_53735 = f.call(null,inst_53728,inst_53731);var inst_53728__$1 = inst_53735;var state_53742__$1 = (function (){var statearr_53745 = state_53742;(statearr_53745[(8)] = inst_53728__$1);
return statearr_53745;
})();var statearr_53746_53761 = state_53742__$1;(statearr_53746_53761[(2)] = null);
(statearr_53746_53761[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53743 === (5)))
{var inst_53728 = (state_53742[(8)]);var state_53742__$1 = state_53742;var statearr_53747_53762 = state_53742__$1;(statearr_53747_53762[(2)] = inst_53728);
(statearr_53747_53762[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53743 === (4)))
{var inst_53731 = (state_53742[(7)]);var inst_53731__$1 = (state_53742[(2)]);var inst_53732 = (inst_53731__$1 == null);var state_53742__$1 = (function (){var statearr_53748 = state_53742;(statearr_53748[(7)] = inst_53731__$1);
return statearr_53748;
})();if(cljs.core.truth_(inst_53732))
{var statearr_53749_53763 = state_53742__$1;(statearr_53749_53763[(1)] = (5));
} else
{var statearr_53750_53764 = state_53742__$1;(statearr_53750_53764[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53743 === (3)))
{var inst_53740 = (state_53742[(2)]);var state_53742__$1 = state_53742;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53742__$1,inst_53740);
} else
{if((state_val_53743 === (2)))
{var state_53742__$1 = state_53742;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53742__$1,(4),ch);
} else
{if((state_val_53743 === (1)))
{var inst_53728 = init;var state_53742__$1 = (function (){var statearr_53751 = state_53742;(statearr_53751[(8)] = inst_53728);
return statearr_53751;
})();var statearr_53752_53765 = state_53742__$1;(statearr_53752_53765[(2)] = null);
(statearr_53752_53765[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_53756 = [null,null,null,null,null,null,null,null,null];(statearr_53756[(0)] = state_machine__5694__auto__);
(statearr_53756[(1)] = (1));
return statearr_53756;
});
var state_machine__5694__auto____1 = (function (state_53742){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_53742);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53757){if((e53757 instanceof Object))
{var ex__5697__auto__ = e53757;var statearr_53758_53766 = state_53742;(statearr_53758_53766[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53742);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e53757;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53767 = state_53742;
state_53742 = G__53767;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53742){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_53759 = f__5709__auto__.call(null);(statearr_53759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_53759;
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
return (function (state_53829){var state_val_53830 = (state_53829[(1)]);if((state_val_53830 === (7)))
{var inst_53810 = (state_53829[(7)]);var inst_53815 = (state_53829[(2)]);var inst_53816 = cljs.core.next.call(null,inst_53810);var inst_53810__$1 = inst_53816;var state_53829__$1 = (function (){var statearr_53831 = state_53829;(statearr_53831[(8)] = inst_53815);
(statearr_53831[(7)] = inst_53810__$1);
return statearr_53831;
})();var statearr_53832_53850 = state_53829__$1;(statearr_53832_53850[(2)] = null);
(statearr_53832_53850[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53830 === (1)))
{var inst_53809 = cljs.core.seq.call(null,coll);var inst_53810 = inst_53809;var state_53829__$1 = (function (){var statearr_53833 = state_53829;(statearr_53833[(7)] = inst_53810);
return statearr_53833;
})();var statearr_53834_53851 = state_53829__$1;(statearr_53834_53851[(2)] = null);
(statearr_53834_53851[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53830 === (4)))
{var inst_53810 = (state_53829[(7)]);var inst_53813 = cljs.core.first.call(null,inst_53810);var state_53829__$1 = state_53829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53829__$1,(7),ch,inst_53813);
} else
{if((state_val_53830 === (6)))
{var inst_53825 = (state_53829[(2)]);var state_53829__$1 = state_53829;var statearr_53835_53852 = state_53829__$1;(statearr_53835_53852[(2)] = inst_53825);
(statearr_53835_53852[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53830 === (3)))
{var inst_53827 = (state_53829[(2)]);var state_53829__$1 = state_53829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53829__$1,inst_53827);
} else
{if((state_val_53830 === (2)))
{var inst_53810 = (state_53829[(7)]);var state_53829__$1 = state_53829;if(cljs.core.truth_(inst_53810))
{var statearr_53836_53853 = state_53829__$1;(statearr_53836_53853[(1)] = (4));
} else
{var statearr_53837_53854 = state_53829__$1;(statearr_53837_53854[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53830 === (9)))
{var state_53829__$1 = state_53829;var statearr_53838_53855 = state_53829__$1;(statearr_53838_53855[(2)] = null);
(statearr_53838_53855[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53830 === (5)))
{var state_53829__$1 = state_53829;if(cljs.core.truth_(close_QMARK_))
{var statearr_53839_53856 = state_53829__$1;(statearr_53839_53856[(1)] = (8));
} else
{var statearr_53840_53857 = state_53829__$1;(statearr_53840_53857[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53830 === (10)))
{var inst_53823 = (state_53829[(2)]);var state_53829__$1 = state_53829;var statearr_53841_53858 = state_53829__$1;(statearr_53841_53858[(2)] = inst_53823);
(statearr_53841_53858[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53830 === (8)))
{var inst_53820 = cljs.core.async.close_BANG_.call(null,ch);var state_53829__$1 = state_53829;var statearr_53842_53859 = state_53829__$1;(statearr_53842_53859[(2)] = inst_53820);
(statearr_53842_53859[(1)] = (10));
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
var state_machine__5694__auto____0 = (function (){var statearr_53846 = [null,null,null,null,null,null,null,null,null];(statearr_53846[(0)] = state_machine__5694__auto__);
(statearr_53846[(1)] = (1));
return statearr_53846;
});
var state_machine__5694__auto____1 = (function (state_53829){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_53829);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53847){if((e53847 instanceof Object))
{var ex__5697__auto__ = e53847;var statearr_53848_53860 = state_53829;(statearr_53848_53860[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53829);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e53847;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53861 = state_53829;
state_53829 = G__53861;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53829){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_53849 = f__5709__auto__.call(null);(statearr_53849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_53849;
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
cljs.core.async.Mux = (function (){var obj53863 = {};return obj53863;
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
cljs.core.async.Mult = (function (){var obj53865 = {};return obj53865;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t54089 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54089 = (function (cs,ch,mult,meta54090){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta54090 = meta54090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54089.cljs$lang$type = true;
cljs.core.async.t54089.cljs$lang$ctorStr = "cljs.core.async/t54089";
cljs.core.async.t54089.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t54089");
});})(cs))
;
cljs.core.async.t54089.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t54089.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t54089.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t54089.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t54089.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t54089.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t54089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_54091){var self__ = this;
var _54091__$1 = this;return self__.meta54090;
});})(cs))
;
cljs.core.async.t54089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_54091,meta54090__$1){var self__ = this;
var _54091__$1 = this;return (new cljs.core.async.t54089(self__.cs,self__.ch,self__.mult,meta54090__$1));
});})(cs))
;
cljs.core.async.__GT_t54089 = ((function (cs){
return (function __GT_t54089(cs__$1,ch__$1,mult__$1,meta54090){return (new cljs.core.async.t54089(cs__$1,ch__$1,mult__$1,meta54090));
});})(cs))
;
}
return (new cljs.core.async.t54089(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___54312 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___54312,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___54312,cs,m,dchan,dctr,done){
return (function (state_54226){var state_val_54227 = (state_54226[(1)]);if((state_val_54227 === (7)))
{var inst_54222 = (state_54226[(2)]);var state_54226__$1 = state_54226;var statearr_54228_54313 = state_54226__$1;(statearr_54228_54313[(2)] = inst_54222);
(statearr_54228_54313[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (20)))
{var inst_54123 = (state_54226[(7)]);var inst_54133 = cljs.core.first.call(null,inst_54123);var inst_54134 = cljs.core.nth.call(null,inst_54133,(0),null);var inst_54135 = cljs.core.nth.call(null,inst_54133,(1),null);var state_54226__$1 = (function (){var statearr_54229 = state_54226;(statearr_54229[(8)] = inst_54134);
return statearr_54229;
})();if(cljs.core.truth_(inst_54135))
{var statearr_54230_54314 = state_54226__$1;(statearr_54230_54314[(1)] = (22));
} else
{var statearr_54231_54315 = state_54226__$1;(statearr_54231_54315[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (27)))
{var inst_54165 = (state_54226[(9)]);var inst_54163 = (state_54226[(10)]);var inst_54170 = cljs.core._nth.call(null,inst_54163,inst_54165);var state_54226__$1 = (function (){var statearr_54232 = state_54226;(statearr_54232[(11)] = inst_54170);
return statearr_54232;
})();var statearr_54233_54316 = state_54226__$1;(statearr_54233_54316[(2)] = null);
(statearr_54233_54316[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (1)))
{var state_54226__$1 = state_54226;var statearr_54234_54317 = state_54226__$1;(statearr_54234_54317[(2)] = null);
(statearr_54234_54317[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (24)))
{var inst_54123 = (state_54226[(7)]);var inst_54140 = (state_54226[(2)]);var inst_54141 = cljs.core.next.call(null,inst_54123);var inst_54103 = inst_54141;var inst_54104 = null;var inst_54105 = (0);var inst_54106 = (0);var state_54226__$1 = (function (){var statearr_54235 = state_54226;(statearr_54235[(12)] = inst_54106);
(statearr_54235[(13)] = inst_54104);
(statearr_54235[(14)] = inst_54103);
(statearr_54235[(15)] = inst_54105);
(statearr_54235[(16)] = inst_54140);
return statearr_54235;
})();var statearr_54236_54318 = state_54226__$1;(statearr_54236_54318[(2)] = null);
(statearr_54236_54318[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (39)))
{var inst_54183 = (state_54226[(17)]);var inst_54201 = (state_54226[(2)]);var inst_54202 = cljs.core.next.call(null,inst_54183);var inst_54162 = inst_54202;var inst_54163 = null;var inst_54164 = (0);var inst_54165 = (0);var state_54226__$1 = (function (){var statearr_54240 = state_54226;(statearr_54240[(18)] = inst_54162);
(statearr_54240[(9)] = inst_54165);
(statearr_54240[(19)] = inst_54201);
(statearr_54240[(20)] = inst_54164);
(statearr_54240[(10)] = inst_54163);
return statearr_54240;
})();var statearr_54241_54319 = state_54226__$1;(statearr_54241_54319[(2)] = null);
(statearr_54241_54319[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (4)))
{var inst_54094 = (state_54226[(21)]);var inst_54094__$1 = (state_54226[(2)]);var inst_54095 = (inst_54094__$1 == null);var state_54226__$1 = (function (){var statearr_54242 = state_54226;(statearr_54242[(21)] = inst_54094__$1);
return statearr_54242;
})();if(cljs.core.truth_(inst_54095))
{var statearr_54243_54320 = state_54226__$1;(statearr_54243_54320[(1)] = (5));
} else
{var statearr_54244_54321 = state_54226__$1;(statearr_54244_54321[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (15)))
{var inst_54106 = (state_54226[(12)]);var inst_54104 = (state_54226[(13)]);var inst_54103 = (state_54226[(14)]);var inst_54105 = (state_54226[(15)]);var inst_54119 = (state_54226[(2)]);var inst_54120 = (inst_54106 + (1));var tmp54237 = inst_54104;var tmp54238 = inst_54103;var tmp54239 = inst_54105;var inst_54103__$1 = tmp54238;var inst_54104__$1 = tmp54237;var inst_54105__$1 = tmp54239;var inst_54106__$1 = inst_54120;var state_54226__$1 = (function (){var statearr_54245 = state_54226;(statearr_54245[(12)] = inst_54106__$1);
(statearr_54245[(13)] = inst_54104__$1);
(statearr_54245[(14)] = inst_54103__$1);
(statearr_54245[(15)] = inst_54105__$1);
(statearr_54245[(22)] = inst_54119);
return statearr_54245;
})();var statearr_54246_54322 = state_54226__$1;(statearr_54246_54322[(2)] = null);
(statearr_54246_54322[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (21)))
{var inst_54144 = (state_54226[(2)]);var state_54226__$1 = state_54226;var statearr_54247_54323 = state_54226__$1;(statearr_54247_54323[(2)] = inst_54144);
(statearr_54247_54323[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (31)))
{var inst_54170 = (state_54226[(11)]);var inst_54171 = (state_54226[(2)]);var inst_54172 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_54173 = cljs.core.async.untap_STAR_.call(null,m,inst_54170);var state_54226__$1 = (function (){var statearr_54248 = state_54226;(statearr_54248[(23)] = inst_54172);
(statearr_54248[(24)] = inst_54171);
return statearr_54248;
})();var statearr_54249_54324 = state_54226__$1;(statearr_54249_54324[(2)] = inst_54173);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54226__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (32)))
{var inst_54094 = (state_54226[(21)]);var inst_54170 = (state_54226[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54226,(31),Object,null,(30));var inst_54177 = cljs.core.async.put_BANG_.call(null,inst_54170,inst_54094,done);var state_54226__$1 = state_54226;var statearr_54250_54325 = state_54226__$1;(statearr_54250_54325[(2)] = inst_54177);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54226__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (40)))
{var inst_54192 = (state_54226[(25)]);var inst_54193 = (state_54226[(2)]);var inst_54194 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_54195 = cljs.core.async.untap_STAR_.call(null,m,inst_54192);var state_54226__$1 = (function (){var statearr_54251 = state_54226;(statearr_54251[(26)] = inst_54193);
(statearr_54251[(27)] = inst_54194);
return statearr_54251;
})();var statearr_54252_54326 = state_54226__$1;(statearr_54252_54326[(2)] = inst_54195);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54226__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (33)))
{var inst_54183 = (state_54226[(17)]);var inst_54185 = cljs.core.chunked_seq_QMARK_.call(null,inst_54183);var state_54226__$1 = state_54226;if(inst_54185)
{var statearr_54253_54327 = state_54226__$1;(statearr_54253_54327[(1)] = (36));
} else
{var statearr_54254_54328 = state_54226__$1;(statearr_54254_54328[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (13)))
{var inst_54113 = (state_54226[(28)]);var inst_54116 = cljs.core.async.close_BANG_.call(null,inst_54113);var state_54226__$1 = state_54226;var statearr_54255_54329 = state_54226__$1;(statearr_54255_54329[(2)] = inst_54116);
(statearr_54255_54329[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (22)))
{var inst_54134 = (state_54226[(8)]);var inst_54137 = cljs.core.async.close_BANG_.call(null,inst_54134);var state_54226__$1 = state_54226;var statearr_54256_54330 = state_54226__$1;(statearr_54256_54330[(2)] = inst_54137);
(statearr_54256_54330[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (36)))
{var inst_54183 = (state_54226[(17)]);var inst_54187 = cljs.core.chunk_first.call(null,inst_54183);var inst_54188 = cljs.core.chunk_rest.call(null,inst_54183);var inst_54189 = cljs.core.count.call(null,inst_54187);var inst_54162 = inst_54188;var inst_54163 = inst_54187;var inst_54164 = inst_54189;var inst_54165 = (0);var state_54226__$1 = (function (){var statearr_54257 = state_54226;(statearr_54257[(18)] = inst_54162);
(statearr_54257[(9)] = inst_54165);
(statearr_54257[(20)] = inst_54164);
(statearr_54257[(10)] = inst_54163);
return statearr_54257;
})();var statearr_54258_54331 = state_54226__$1;(statearr_54258_54331[(2)] = null);
(statearr_54258_54331[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (41)))
{var inst_54094 = (state_54226[(21)]);var inst_54192 = (state_54226[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54226,(40),Object,null,(39));var inst_54199 = cljs.core.async.put_BANG_.call(null,inst_54192,inst_54094,done);var state_54226__$1 = state_54226;var statearr_54259_54332 = state_54226__$1;(statearr_54259_54332[(2)] = inst_54199);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54226__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (43)))
{var state_54226__$1 = state_54226;var statearr_54260_54333 = state_54226__$1;(statearr_54260_54333[(2)] = null);
(statearr_54260_54333[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (29)))
{var inst_54210 = (state_54226[(2)]);var state_54226__$1 = state_54226;var statearr_54261_54334 = state_54226__$1;(statearr_54261_54334[(2)] = inst_54210);
(statearr_54261_54334[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (44)))
{var inst_54219 = (state_54226[(2)]);var state_54226__$1 = (function (){var statearr_54262 = state_54226;(statearr_54262[(29)] = inst_54219);
return statearr_54262;
})();var statearr_54263_54335 = state_54226__$1;(statearr_54263_54335[(2)] = null);
(statearr_54263_54335[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (6)))
{var inst_54154 = (state_54226[(30)]);var inst_54153 = cljs.core.deref.call(null,cs);var inst_54154__$1 = cljs.core.keys.call(null,inst_54153);var inst_54155 = cljs.core.count.call(null,inst_54154__$1);var inst_54156 = cljs.core.reset_BANG_.call(null,dctr,inst_54155);var inst_54161 = cljs.core.seq.call(null,inst_54154__$1);var inst_54162 = inst_54161;var inst_54163 = null;var inst_54164 = (0);var inst_54165 = (0);var state_54226__$1 = (function (){var statearr_54264 = state_54226;(statearr_54264[(18)] = inst_54162);
(statearr_54264[(30)] = inst_54154__$1);
(statearr_54264[(9)] = inst_54165);
(statearr_54264[(20)] = inst_54164);
(statearr_54264[(10)] = inst_54163);
(statearr_54264[(31)] = inst_54156);
return statearr_54264;
})();var statearr_54265_54336 = state_54226__$1;(statearr_54265_54336[(2)] = null);
(statearr_54265_54336[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (28)))
{var inst_54162 = (state_54226[(18)]);var inst_54183 = (state_54226[(17)]);var inst_54183__$1 = cljs.core.seq.call(null,inst_54162);var state_54226__$1 = (function (){var statearr_54266 = state_54226;(statearr_54266[(17)] = inst_54183__$1);
return statearr_54266;
})();if(inst_54183__$1)
{var statearr_54267_54337 = state_54226__$1;(statearr_54267_54337[(1)] = (33));
} else
{var statearr_54268_54338 = state_54226__$1;(statearr_54268_54338[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (25)))
{var inst_54165 = (state_54226[(9)]);var inst_54164 = (state_54226[(20)]);var inst_54167 = (inst_54165 < inst_54164);var inst_54168 = inst_54167;var state_54226__$1 = state_54226;if(cljs.core.truth_(inst_54168))
{var statearr_54269_54339 = state_54226__$1;(statearr_54269_54339[(1)] = (27));
} else
{var statearr_54270_54340 = state_54226__$1;(statearr_54270_54340[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (34)))
{var state_54226__$1 = state_54226;var statearr_54271_54341 = state_54226__$1;(statearr_54271_54341[(2)] = null);
(statearr_54271_54341[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (17)))
{var state_54226__$1 = state_54226;var statearr_54272_54342 = state_54226__$1;(statearr_54272_54342[(2)] = null);
(statearr_54272_54342[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (3)))
{var inst_54224 = (state_54226[(2)]);var state_54226__$1 = state_54226;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54226__$1,inst_54224);
} else
{if((state_val_54227 === (12)))
{var inst_54149 = (state_54226[(2)]);var state_54226__$1 = state_54226;var statearr_54273_54343 = state_54226__$1;(statearr_54273_54343[(2)] = inst_54149);
(statearr_54273_54343[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (2)))
{var state_54226__$1 = state_54226;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54226__$1,(4),ch);
} else
{if((state_val_54227 === (23)))
{var state_54226__$1 = state_54226;var statearr_54274_54344 = state_54226__$1;(statearr_54274_54344[(2)] = null);
(statearr_54274_54344[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (35)))
{var inst_54208 = (state_54226[(2)]);var state_54226__$1 = state_54226;var statearr_54275_54345 = state_54226__$1;(statearr_54275_54345[(2)] = inst_54208);
(statearr_54275_54345[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (19)))
{var inst_54123 = (state_54226[(7)]);var inst_54127 = cljs.core.chunk_first.call(null,inst_54123);var inst_54128 = cljs.core.chunk_rest.call(null,inst_54123);var inst_54129 = cljs.core.count.call(null,inst_54127);var inst_54103 = inst_54128;var inst_54104 = inst_54127;var inst_54105 = inst_54129;var inst_54106 = (0);var state_54226__$1 = (function (){var statearr_54276 = state_54226;(statearr_54276[(12)] = inst_54106);
(statearr_54276[(13)] = inst_54104);
(statearr_54276[(14)] = inst_54103);
(statearr_54276[(15)] = inst_54105);
return statearr_54276;
})();var statearr_54277_54346 = state_54226__$1;(statearr_54277_54346[(2)] = null);
(statearr_54277_54346[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (11)))
{var inst_54123 = (state_54226[(7)]);var inst_54103 = (state_54226[(14)]);var inst_54123__$1 = cljs.core.seq.call(null,inst_54103);var state_54226__$1 = (function (){var statearr_54278 = state_54226;(statearr_54278[(7)] = inst_54123__$1);
return statearr_54278;
})();if(inst_54123__$1)
{var statearr_54279_54347 = state_54226__$1;(statearr_54279_54347[(1)] = (16));
} else
{var statearr_54280_54348 = state_54226__$1;(statearr_54280_54348[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (9)))
{var inst_54151 = (state_54226[(2)]);var state_54226__$1 = state_54226;var statearr_54281_54349 = state_54226__$1;(statearr_54281_54349[(2)] = inst_54151);
(statearr_54281_54349[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (5)))
{var inst_54101 = cljs.core.deref.call(null,cs);var inst_54102 = cljs.core.seq.call(null,inst_54101);var inst_54103 = inst_54102;var inst_54104 = null;var inst_54105 = (0);var inst_54106 = (0);var state_54226__$1 = (function (){var statearr_54282 = state_54226;(statearr_54282[(12)] = inst_54106);
(statearr_54282[(13)] = inst_54104);
(statearr_54282[(14)] = inst_54103);
(statearr_54282[(15)] = inst_54105);
return statearr_54282;
})();var statearr_54283_54350 = state_54226__$1;(statearr_54283_54350[(2)] = null);
(statearr_54283_54350[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (14)))
{var state_54226__$1 = state_54226;var statearr_54284_54351 = state_54226__$1;(statearr_54284_54351[(2)] = null);
(statearr_54284_54351[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (45)))
{var inst_54216 = (state_54226[(2)]);var state_54226__$1 = state_54226;var statearr_54285_54352 = state_54226__$1;(statearr_54285_54352[(2)] = inst_54216);
(statearr_54285_54352[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (26)))
{var inst_54154 = (state_54226[(30)]);var inst_54212 = (state_54226[(2)]);var inst_54213 = cljs.core.seq.call(null,inst_54154);var state_54226__$1 = (function (){var statearr_54286 = state_54226;(statearr_54286[(32)] = inst_54212);
return statearr_54286;
})();if(inst_54213)
{var statearr_54287_54353 = state_54226__$1;(statearr_54287_54353[(1)] = (42));
} else
{var statearr_54288_54354 = state_54226__$1;(statearr_54288_54354[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (16)))
{var inst_54123 = (state_54226[(7)]);var inst_54125 = cljs.core.chunked_seq_QMARK_.call(null,inst_54123);var state_54226__$1 = state_54226;if(inst_54125)
{var statearr_54292_54355 = state_54226__$1;(statearr_54292_54355[(1)] = (19));
} else
{var statearr_54293_54356 = state_54226__$1;(statearr_54293_54356[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (38)))
{var inst_54205 = (state_54226[(2)]);var state_54226__$1 = state_54226;var statearr_54294_54357 = state_54226__$1;(statearr_54294_54357[(2)] = inst_54205);
(statearr_54294_54357[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (30)))
{var inst_54162 = (state_54226[(18)]);var inst_54165 = (state_54226[(9)]);var inst_54164 = (state_54226[(20)]);var inst_54163 = (state_54226[(10)]);var inst_54179 = (state_54226[(2)]);var inst_54180 = (inst_54165 + (1));var tmp54289 = inst_54162;var tmp54290 = inst_54164;var tmp54291 = inst_54163;var inst_54162__$1 = tmp54289;var inst_54163__$1 = tmp54291;var inst_54164__$1 = tmp54290;var inst_54165__$1 = inst_54180;var state_54226__$1 = (function (){var statearr_54295 = state_54226;(statearr_54295[(33)] = inst_54179);
(statearr_54295[(18)] = inst_54162__$1);
(statearr_54295[(9)] = inst_54165__$1);
(statearr_54295[(20)] = inst_54164__$1);
(statearr_54295[(10)] = inst_54163__$1);
return statearr_54295;
})();var statearr_54296_54358 = state_54226__$1;(statearr_54296_54358[(2)] = null);
(statearr_54296_54358[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (10)))
{var inst_54106 = (state_54226[(12)]);var inst_54104 = (state_54226[(13)]);var inst_54112 = cljs.core._nth.call(null,inst_54104,inst_54106);var inst_54113 = cljs.core.nth.call(null,inst_54112,(0),null);var inst_54114 = cljs.core.nth.call(null,inst_54112,(1),null);var state_54226__$1 = (function (){var statearr_54297 = state_54226;(statearr_54297[(28)] = inst_54113);
return statearr_54297;
})();if(cljs.core.truth_(inst_54114))
{var statearr_54298_54359 = state_54226__$1;(statearr_54298_54359[(1)] = (13));
} else
{var statearr_54299_54360 = state_54226__$1;(statearr_54299_54360[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (18)))
{var inst_54147 = (state_54226[(2)]);var state_54226__$1 = state_54226;var statearr_54300_54361 = state_54226__$1;(statearr_54300_54361[(2)] = inst_54147);
(statearr_54300_54361[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (42)))
{var state_54226__$1 = state_54226;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54226__$1,(45),dchan);
} else
{if((state_val_54227 === (37)))
{var inst_54183 = (state_54226[(17)]);var inst_54192 = cljs.core.first.call(null,inst_54183);var state_54226__$1 = (function (){var statearr_54301 = state_54226;(statearr_54301[(25)] = inst_54192);
return statearr_54301;
})();var statearr_54302_54362 = state_54226__$1;(statearr_54302_54362[(2)] = null);
(statearr_54302_54362[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54227 === (8)))
{var inst_54106 = (state_54226[(12)]);var inst_54105 = (state_54226[(15)]);var inst_54108 = (inst_54106 < inst_54105);var inst_54109 = inst_54108;var state_54226__$1 = state_54226;if(cljs.core.truth_(inst_54109))
{var statearr_54303_54363 = state_54226__$1;(statearr_54303_54363[(1)] = (10));
} else
{var statearr_54304_54364 = state_54226__$1;(statearr_54304_54364[(1)] = (11));
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
});})(c__5708__auto___54312,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___54312,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_54308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54308[(0)] = state_machine__5694__auto__);
(statearr_54308[(1)] = (1));
return statearr_54308;
});
var state_machine__5694__auto____1 = (function (state_54226){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_54226);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e54309){if((e54309 instanceof Object))
{var ex__5697__auto__ = e54309;var statearr_54310_54365 = state_54226;(statearr_54310_54365[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54226);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e54309;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54366 = state_54226;
state_54226 = G__54366;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_54226){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_54226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___54312,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_54311 = f__5709__auto__.call(null);(statearr_54311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___54312);
return statearr_54311;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___54312,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj54368 = {};return obj54368;
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
;var m = (function (){if(typeof cljs.core.async.t54478 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54478 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta54479){
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
this.meta54479 = meta54479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54478.cljs$lang$type = true;
cljs.core.async.t54478.cljs$lang$ctorStr = "cljs.core.async/t54478";
cljs.core.async.t54478.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t54478");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54478.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t54478.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54478.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54478.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54478.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54478.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54478.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t54478.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_54480){var self__ = this;
var _54480__$1 = this;return self__.meta54479;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_54480,meta54479__$1){var self__ = this;
var _54480__$1 = this;return (new cljs.core.async.t54478(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta54479__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t54478 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t54478(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta54479){return (new cljs.core.async.t54478(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta54479));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t54478(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___54587 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___54587,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___54587,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_54545){var state_val_54546 = (state_54545[(1)]);if((state_val_54546 === (7)))
{var inst_54494 = (state_54545[(7)]);var inst_54499 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54494);var state_54545__$1 = state_54545;var statearr_54547_54588 = state_54545__$1;(statearr_54547_54588[(2)] = inst_54499);
(statearr_54547_54588[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (20)))
{var inst_54509 = (state_54545[(8)]);var state_54545__$1 = state_54545;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54545__$1,(23),out,inst_54509);
} else
{if((state_val_54546 === (1)))
{var inst_54484 = (state_54545[(9)]);var inst_54484__$1 = calc_state.call(null);var inst_54485 = cljs.core.seq_QMARK_.call(null,inst_54484__$1);var state_54545__$1 = (function (){var statearr_54548 = state_54545;(statearr_54548[(9)] = inst_54484__$1);
return statearr_54548;
})();if(inst_54485)
{var statearr_54549_54589 = state_54545__$1;(statearr_54549_54589[(1)] = (2));
} else
{var statearr_54550_54590 = state_54545__$1;(statearr_54550_54590[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (4)))
{var inst_54484 = (state_54545[(9)]);var inst_54490 = (state_54545[(2)]);var inst_54491 = cljs.core.get.call(null,inst_54490,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_54492 = cljs.core.get.call(null,inst_54490,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_54493 = cljs.core.get.call(null,inst_54490,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_54494 = inst_54484;var state_54545__$1 = (function (){var statearr_54551 = state_54545;(statearr_54551[(10)] = inst_54491);
(statearr_54551[(7)] = inst_54494);
(statearr_54551[(11)] = inst_54493);
(statearr_54551[(12)] = inst_54492);
return statearr_54551;
})();var statearr_54552_54591 = state_54545__$1;(statearr_54552_54591[(2)] = null);
(statearr_54552_54591[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (15)))
{var state_54545__$1 = state_54545;var statearr_54553_54592 = state_54545__$1;(statearr_54553_54592[(2)] = null);
(statearr_54553_54592[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (21)))
{var state_54545__$1 = state_54545;var statearr_54554_54593 = state_54545__$1;(statearr_54554_54593[(2)] = null);
(statearr_54554_54593[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (13)))
{var inst_54541 = (state_54545[(2)]);var state_54545__$1 = state_54545;var statearr_54555_54594 = state_54545__$1;(statearr_54555_54594[(2)] = inst_54541);
(statearr_54555_54594[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (22)))
{var inst_54502 = (state_54545[(13)]);var inst_54538 = (state_54545[(2)]);var inst_54494 = inst_54502;var state_54545__$1 = (function (){var statearr_54556 = state_54545;(statearr_54556[(14)] = inst_54538);
(statearr_54556[(7)] = inst_54494);
return statearr_54556;
})();var statearr_54557_54595 = state_54545__$1;(statearr_54557_54595[(2)] = null);
(statearr_54557_54595[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (6)))
{var inst_54543 = (state_54545[(2)]);var state_54545__$1 = state_54545;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54545__$1,inst_54543);
} else
{if((state_val_54546 === (17)))
{var inst_54524 = (state_54545[(15)]);var state_54545__$1 = state_54545;var statearr_54558_54596 = state_54545__$1;(statearr_54558_54596[(2)] = inst_54524);
(statearr_54558_54596[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (3)))
{var inst_54484 = (state_54545[(9)]);var state_54545__$1 = state_54545;var statearr_54559_54597 = state_54545__$1;(statearr_54559_54597[(2)] = inst_54484);
(statearr_54559_54597[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (12)))
{var inst_54524 = (state_54545[(15)]);var inst_54510 = (state_54545[(16)]);var inst_54505 = (state_54545[(17)]);var inst_54524__$1 = inst_54505.call(null,inst_54510);var state_54545__$1 = (function (){var statearr_54560 = state_54545;(statearr_54560[(15)] = inst_54524__$1);
return statearr_54560;
})();if(cljs.core.truth_(inst_54524__$1))
{var statearr_54561_54598 = state_54545__$1;(statearr_54561_54598[(1)] = (17));
} else
{var statearr_54562_54599 = state_54545__$1;(statearr_54562_54599[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (2)))
{var inst_54484 = (state_54545[(9)]);var inst_54487 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54484);var state_54545__$1 = state_54545;var statearr_54563_54600 = state_54545__$1;(statearr_54563_54600[(2)] = inst_54487);
(statearr_54563_54600[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (23)))
{var inst_54535 = (state_54545[(2)]);var state_54545__$1 = state_54545;var statearr_54564_54601 = state_54545__$1;(statearr_54564_54601[(2)] = inst_54535);
(statearr_54564_54601[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (19)))
{var inst_54532 = (state_54545[(2)]);var state_54545__$1 = state_54545;if(cljs.core.truth_(inst_54532))
{var statearr_54565_54602 = state_54545__$1;(statearr_54565_54602[(1)] = (20));
} else
{var statearr_54566_54603 = state_54545__$1;(statearr_54566_54603[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (11)))
{var inst_54509 = (state_54545[(8)]);var inst_54515 = (inst_54509 == null);var state_54545__$1 = state_54545;if(cljs.core.truth_(inst_54515))
{var statearr_54567_54604 = state_54545__$1;(statearr_54567_54604[(1)] = (14));
} else
{var statearr_54568_54605 = state_54545__$1;(statearr_54568_54605[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (9)))
{var inst_54502 = (state_54545[(13)]);var inst_54502__$1 = (state_54545[(2)]);var inst_54503 = cljs.core.get.call(null,inst_54502__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_54504 = cljs.core.get.call(null,inst_54502__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_54505 = cljs.core.get.call(null,inst_54502__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_54545__$1 = (function (){var statearr_54569 = state_54545;(statearr_54569[(18)] = inst_54504);
(statearr_54569[(13)] = inst_54502__$1);
(statearr_54569[(17)] = inst_54505);
return statearr_54569;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_54545__$1,(10),inst_54503);
} else
{if((state_val_54546 === (5)))
{var inst_54494 = (state_54545[(7)]);var inst_54497 = cljs.core.seq_QMARK_.call(null,inst_54494);var state_54545__$1 = state_54545;if(inst_54497)
{var statearr_54570_54606 = state_54545__$1;(statearr_54570_54606[(1)] = (7));
} else
{var statearr_54571_54607 = state_54545__$1;(statearr_54571_54607[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (14)))
{var inst_54510 = (state_54545[(16)]);var inst_54517 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_54510);var state_54545__$1 = state_54545;var statearr_54572_54608 = state_54545__$1;(statearr_54572_54608[(2)] = inst_54517);
(statearr_54572_54608[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (16)))
{var inst_54520 = (state_54545[(2)]);var inst_54521 = calc_state.call(null);var inst_54494 = inst_54521;var state_54545__$1 = (function (){var statearr_54573 = state_54545;(statearr_54573[(19)] = inst_54520);
(statearr_54573[(7)] = inst_54494);
return statearr_54573;
})();var statearr_54574_54609 = state_54545__$1;(statearr_54574_54609[(2)] = null);
(statearr_54574_54609[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (10)))
{var inst_54509 = (state_54545[(8)]);var inst_54510 = (state_54545[(16)]);var inst_54508 = (state_54545[(2)]);var inst_54509__$1 = cljs.core.nth.call(null,inst_54508,(0),null);var inst_54510__$1 = cljs.core.nth.call(null,inst_54508,(1),null);var inst_54511 = (inst_54509__$1 == null);var inst_54512 = cljs.core._EQ_.call(null,inst_54510__$1,change);var inst_54513 = (inst_54511) || (inst_54512);var state_54545__$1 = (function (){var statearr_54575 = state_54545;(statearr_54575[(8)] = inst_54509__$1);
(statearr_54575[(16)] = inst_54510__$1);
return statearr_54575;
})();if(cljs.core.truth_(inst_54513))
{var statearr_54576_54610 = state_54545__$1;(statearr_54576_54610[(1)] = (11));
} else
{var statearr_54577_54611 = state_54545__$1;(statearr_54577_54611[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (18)))
{var inst_54504 = (state_54545[(18)]);var inst_54510 = (state_54545[(16)]);var inst_54505 = (state_54545[(17)]);var inst_54527 = cljs.core.empty_QMARK_.call(null,inst_54505);var inst_54528 = inst_54504.call(null,inst_54510);var inst_54529 = cljs.core.not.call(null,inst_54528);var inst_54530 = (inst_54527) && (inst_54529);var state_54545__$1 = state_54545;var statearr_54578_54612 = state_54545__$1;(statearr_54578_54612[(2)] = inst_54530);
(statearr_54578_54612[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54546 === (8)))
{var inst_54494 = (state_54545[(7)]);var state_54545__$1 = state_54545;var statearr_54579_54613 = state_54545__$1;(statearr_54579_54613[(2)] = inst_54494);
(statearr_54579_54613[(1)] = (9));
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
});})(c__5708__auto___54587,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___54587,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_54583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54583[(0)] = state_machine__5694__auto__);
(statearr_54583[(1)] = (1));
return statearr_54583;
});
var state_machine__5694__auto____1 = (function (state_54545){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_54545);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e54584){if((e54584 instanceof Object))
{var ex__5697__auto__ = e54584;var statearr_54585_54614 = state_54545;(statearr_54585_54614[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54545);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e54584;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54615 = state_54545;
state_54545 = G__54615;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_54545){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_54545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___54587,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_54586 = f__5709__auto__.call(null);(statearr_54586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___54587);
return statearr_54586;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___54587,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj54617 = {};return obj54617;
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
return (function (p1__54618_SHARP_){if(cljs.core.truth_(p1__54618_SHARP_.call(null,topic)))
{return p1__54618_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__54618_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t54743 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54743 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta54744){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta54744 = meta54744;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54743.cljs$lang$type = true;
cljs.core.async.t54743.cljs$lang$ctorStr = "cljs.core.async/t54743";
cljs.core.async.t54743.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t54743");
});})(mults,ensure_mult))
;
cljs.core.async.t54743.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t54743.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t54743.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t54743.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t54743.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t54743.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t54743.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t54743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_54745){var self__ = this;
var _54745__$1 = this;return self__.meta54744;
});})(mults,ensure_mult))
;
cljs.core.async.t54743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_54745,meta54744__$1){var self__ = this;
var _54745__$1 = this;return (new cljs.core.async.t54743(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta54744__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t54743 = ((function (mults,ensure_mult){
return (function __GT_t54743(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta54744){return (new cljs.core.async.t54743(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta54744));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t54743(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___54867 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___54867,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___54867,mults,ensure_mult,p){
return (function (state_54819){var state_val_54820 = (state_54819[(1)]);if((state_val_54820 === (7)))
{var inst_54815 = (state_54819[(2)]);var state_54819__$1 = state_54819;var statearr_54821_54868 = state_54819__$1;(statearr_54821_54868[(2)] = inst_54815);
(statearr_54821_54868[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (20)))
{var state_54819__$1 = state_54819;var statearr_54822_54869 = state_54819__$1;(statearr_54822_54869[(2)] = null);
(statearr_54822_54869[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (1)))
{var state_54819__$1 = state_54819;var statearr_54823_54870 = state_54819__$1;(statearr_54823_54870[(2)] = null);
(statearr_54823_54870[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (24)))
{var inst_54798 = (state_54819[(7)]);var inst_54748 = (state_54819[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54819,(23),Object,null,(22));var inst_54805 = cljs.core.async.muxch_STAR_.call(null,inst_54798);var state_54819__$1 = state_54819;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54819__$1,(25),inst_54805,inst_54748);
} else
{if((state_val_54820 === (4)))
{var inst_54748 = (state_54819[(8)]);var inst_54748__$1 = (state_54819[(2)]);var inst_54749 = (inst_54748__$1 == null);var state_54819__$1 = (function (){var statearr_54824 = state_54819;(statearr_54824[(8)] = inst_54748__$1);
return statearr_54824;
})();if(cljs.core.truth_(inst_54749))
{var statearr_54825_54871 = state_54819__$1;(statearr_54825_54871[(1)] = (5));
} else
{var statearr_54826_54872 = state_54819__$1;(statearr_54826_54872[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (15)))
{var inst_54790 = (state_54819[(2)]);var state_54819__$1 = state_54819;var statearr_54827_54873 = state_54819__$1;(statearr_54827_54873[(2)] = inst_54790);
(statearr_54827_54873[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (21)))
{var inst_54812 = (state_54819[(2)]);var state_54819__$1 = (function (){var statearr_54828 = state_54819;(statearr_54828[(9)] = inst_54812);
return statearr_54828;
})();var statearr_54829_54874 = state_54819__$1;(statearr_54829_54874[(2)] = null);
(statearr_54829_54874[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (13)))
{var inst_54772 = (state_54819[(10)]);var inst_54774 = cljs.core.chunked_seq_QMARK_.call(null,inst_54772);var state_54819__$1 = state_54819;if(inst_54774)
{var statearr_54830_54875 = state_54819__$1;(statearr_54830_54875[(1)] = (16));
} else
{var statearr_54831_54876 = state_54819__$1;(statearr_54831_54876[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (22)))
{var inst_54809 = (state_54819[(2)]);var state_54819__$1 = state_54819;var statearr_54832_54877 = state_54819__$1;(statearr_54832_54877[(2)] = inst_54809);
(statearr_54832_54877[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (6)))
{var inst_54796 = (state_54819[(11)]);var inst_54798 = (state_54819[(7)]);var inst_54748 = (state_54819[(8)]);var inst_54796__$1 = topic_fn.call(null,inst_54748);var inst_54797 = cljs.core.deref.call(null,mults);var inst_54798__$1 = cljs.core.get.call(null,inst_54797,inst_54796__$1);var state_54819__$1 = (function (){var statearr_54833 = state_54819;(statearr_54833[(11)] = inst_54796__$1);
(statearr_54833[(7)] = inst_54798__$1);
return statearr_54833;
})();if(cljs.core.truth_(inst_54798__$1))
{var statearr_54834_54878 = state_54819__$1;(statearr_54834_54878[(1)] = (19));
} else
{var statearr_54835_54879 = state_54819__$1;(statearr_54835_54879[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (25)))
{var inst_54807 = (state_54819[(2)]);var state_54819__$1 = state_54819;var statearr_54836_54880 = state_54819__$1;(statearr_54836_54880[(2)] = inst_54807);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54819__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (17)))
{var inst_54772 = (state_54819[(10)]);var inst_54781 = cljs.core.first.call(null,inst_54772);var inst_54782 = cljs.core.async.muxch_STAR_.call(null,inst_54781);var inst_54783 = cljs.core.async.close_BANG_.call(null,inst_54782);var inst_54784 = cljs.core.next.call(null,inst_54772);var inst_54758 = inst_54784;var inst_54759 = null;var inst_54760 = (0);var inst_54761 = (0);var state_54819__$1 = (function (){var statearr_54837 = state_54819;(statearr_54837[(12)] = inst_54783);
(statearr_54837[(13)] = inst_54761);
(statearr_54837[(14)] = inst_54759);
(statearr_54837[(15)] = inst_54758);
(statearr_54837[(16)] = inst_54760);
return statearr_54837;
})();var statearr_54838_54881 = state_54819__$1;(statearr_54838_54881[(2)] = null);
(statearr_54838_54881[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (3)))
{var inst_54817 = (state_54819[(2)]);var state_54819__$1 = state_54819;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54819__$1,inst_54817);
} else
{if((state_val_54820 === (12)))
{var inst_54792 = (state_54819[(2)]);var state_54819__$1 = state_54819;var statearr_54839_54882 = state_54819__$1;(statearr_54839_54882[(2)] = inst_54792);
(statearr_54839_54882[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (2)))
{var state_54819__$1 = state_54819;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54819__$1,(4),ch);
} else
{if((state_val_54820 === (23)))
{var inst_54796 = (state_54819[(11)]);var inst_54800 = (state_54819[(2)]);var inst_54801 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_54796);var state_54819__$1 = (function (){var statearr_54840 = state_54819;(statearr_54840[(17)] = inst_54800);
return statearr_54840;
})();var statearr_54841_54883 = state_54819__$1;(statearr_54841_54883[(2)] = inst_54801);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54819__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (19)))
{var state_54819__$1 = state_54819;var statearr_54842_54884 = state_54819__$1;(statearr_54842_54884[(2)] = null);
(statearr_54842_54884[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (11)))
{var inst_54772 = (state_54819[(10)]);var inst_54758 = (state_54819[(15)]);var inst_54772__$1 = cljs.core.seq.call(null,inst_54758);var state_54819__$1 = (function (){var statearr_54843 = state_54819;(statearr_54843[(10)] = inst_54772__$1);
return statearr_54843;
})();if(inst_54772__$1)
{var statearr_54844_54885 = state_54819__$1;(statearr_54844_54885[(1)] = (13));
} else
{var statearr_54845_54886 = state_54819__$1;(statearr_54845_54886[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (9)))
{var inst_54794 = (state_54819[(2)]);var state_54819__$1 = state_54819;var statearr_54846_54887 = state_54819__$1;(statearr_54846_54887[(2)] = inst_54794);
(statearr_54846_54887[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (5)))
{var inst_54755 = cljs.core.deref.call(null,mults);var inst_54756 = cljs.core.vals.call(null,inst_54755);var inst_54757 = cljs.core.seq.call(null,inst_54756);var inst_54758 = inst_54757;var inst_54759 = null;var inst_54760 = (0);var inst_54761 = (0);var state_54819__$1 = (function (){var statearr_54847 = state_54819;(statearr_54847[(13)] = inst_54761);
(statearr_54847[(14)] = inst_54759);
(statearr_54847[(15)] = inst_54758);
(statearr_54847[(16)] = inst_54760);
return statearr_54847;
})();var statearr_54848_54888 = state_54819__$1;(statearr_54848_54888[(2)] = null);
(statearr_54848_54888[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (14)))
{var state_54819__$1 = state_54819;var statearr_54852_54889 = state_54819__$1;(statearr_54852_54889[(2)] = null);
(statearr_54852_54889[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (16)))
{var inst_54772 = (state_54819[(10)]);var inst_54776 = cljs.core.chunk_first.call(null,inst_54772);var inst_54777 = cljs.core.chunk_rest.call(null,inst_54772);var inst_54778 = cljs.core.count.call(null,inst_54776);var inst_54758 = inst_54777;var inst_54759 = inst_54776;var inst_54760 = inst_54778;var inst_54761 = (0);var state_54819__$1 = (function (){var statearr_54853 = state_54819;(statearr_54853[(13)] = inst_54761);
(statearr_54853[(14)] = inst_54759);
(statearr_54853[(15)] = inst_54758);
(statearr_54853[(16)] = inst_54760);
return statearr_54853;
})();var statearr_54854_54890 = state_54819__$1;(statearr_54854_54890[(2)] = null);
(statearr_54854_54890[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (10)))
{var inst_54761 = (state_54819[(13)]);var inst_54759 = (state_54819[(14)]);var inst_54758 = (state_54819[(15)]);var inst_54760 = (state_54819[(16)]);var inst_54766 = cljs.core._nth.call(null,inst_54759,inst_54761);var inst_54767 = cljs.core.async.muxch_STAR_.call(null,inst_54766);var inst_54768 = cljs.core.async.close_BANG_.call(null,inst_54767);var inst_54769 = (inst_54761 + (1));var tmp54849 = inst_54759;var tmp54850 = inst_54758;var tmp54851 = inst_54760;var inst_54758__$1 = tmp54850;var inst_54759__$1 = tmp54849;var inst_54760__$1 = tmp54851;var inst_54761__$1 = inst_54769;var state_54819__$1 = (function (){var statearr_54855 = state_54819;(statearr_54855[(18)] = inst_54768);
(statearr_54855[(13)] = inst_54761__$1);
(statearr_54855[(14)] = inst_54759__$1);
(statearr_54855[(15)] = inst_54758__$1);
(statearr_54855[(16)] = inst_54760__$1);
return statearr_54855;
})();var statearr_54856_54891 = state_54819__$1;(statearr_54856_54891[(2)] = null);
(statearr_54856_54891[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (18)))
{var inst_54787 = (state_54819[(2)]);var state_54819__$1 = state_54819;var statearr_54857_54892 = state_54819__$1;(statearr_54857_54892[(2)] = inst_54787);
(statearr_54857_54892[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54820 === (8)))
{var inst_54761 = (state_54819[(13)]);var inst_54760 = (state_54819[(16)]);var inst_54763 = (inst_54761 < inst_54760);var inst_54764 = inst_54763;var state_54819__$1 = state_54819;if(cljs.core.truth_(inst_54764))
{var statearr_54858_54893 = state_54819__$1;(statearr_54858_54893[(1)] = (10));
} else
{var statearr_54859_54894 = state_54819__$1;(statearr_54859_54894[(1)] = (11));
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
});})(c__5708__auto___54867,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___54867,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_54863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54863[(0)] = state_machine__5694__auto__);
(statearr_54863[(1)] = (1));
return statearr_54863;
});
var state_machine__5694__auto____1 = (function (state_54819){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_54819);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e54864){if((e54864 instanceof Object))
{var ex__5697__auto__ = e54864;var statearr_54865_54895 = state_54819;(statearr_54865_54895[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54819);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e54864;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54896 = state_54819;
state_54819 = G__54896;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_54819){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_54819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___54867,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_54866 = f__5709__auto__.call(null);(statearr_54866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___54867);
return statearr_54866;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___54867,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___55033 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___55033,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___55033,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_55003){var state_val_55004 = (state_55003[(1)]);if((state_val_55004 === (7)))
{var state_55003__$1 = state_55003;var statearr_55005_55034 = state_55003__$1;(statearr_55005_55034[(2)] = null);
(statearr_55005_55034[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55004 === (1)))
{var state_55003__$1 = state_55003;var statearr_55006_55035 = state_55003__$1;(statearr_55006_55035[(2)] = null);
(statearr_55006_55035[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55004 === (4)))
{var inst_54967 = (state_55003[(7)]);var inst_54969 = (inst_54967 < cnt);var state_55003__$1 = state_55003;if(cljs.core.truth_(inst_54969))
{var statearr_55007_55036 = state_55003__$1;(statearr_55007_55036[(1)] = (6));
} else
{var statearr_55008_55037 = state_55003__$1;(statearr_55008_55037[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55004 === (15)))
{var inst_54999 = (state_55003[(2)]);var state_55003__$1 = state_55003;var statearr_55009_55038 = state_55003__$1;(statearr_55009_55038[(2)] = inst_54999);
(statearr_55009_55038[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55004 === (13)))
{var inst_54992 = cljs.core.async.close_BANG_.call(null,out);var state_55003__$1 = state_55003;var statearr_55010_55039 = state_55003__$1;(statearr_55010_55039[(2)] = inst_54992);
(statearr_55010_55039[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55004 === (6)))
{var state_55003__$1 = state_55003;var statearr_55011_55040 = state_55003__$1;(statearr_55011_55040[(2)] = null);
(statearr_55011_55040[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55004 === (3)))
{var inst_55001 = (state_55003[(2)]);var state_55003__$1 = state_55003;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55003__$1,inst_55001);
} else
{if((state_val_55004 === (12)))
{var inst_54989 = (state_55003[(8)]);var inst_54989__$1 = (state_55003[(2)]);var inst_54990 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_54989__$1);var state_55003__$1 = (function (){var statearr_55012 = state_55003;(statearr_55012[(8)] = inst_54989__$1);
return statearr_55012;
})();if(cljs.core.truth_(inst_54990))
{var statearr_55013_55041 = state_55003__$1;(statearr_55013_55041[(1)] = (13));
} else
{var statearr_55014_55042 = state_55003__$1;(statearr_55014_55042[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55004 === (2)))
{var inst_54966 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_54967 = (0);var state_55003__$1 = (function (){var statearr_55015 = state_55003;(statearr_55015[(9)] = inst_54966);
(statearr_55015[(7)] = inst_54967);
return statearr_55015;
})();var statearr_55016_55043 = state_55003__$1;(statearr_55016_55043[(2)] = null);
(statearr_55016_55043[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55004 === (11)))
{var inst_54967 = (state_55003[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_55003,(10),Object,null,(9));var inst_54976 = chs__$1.call(null,inst_54967);var inst_54977 = done.call(null,inst_54967);var inst_54978 = cljs.core.async.take_BANG_.call(null,inst_54976,inst_54977);var state_55003__$1 = state_55003;var statearr_55017_55044 = state_55003__$1;(statearr_55017_55044[(2)] = inst_54978);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55003__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55004 === (9)))
{var inst_54967 = (state_55003[(7)]);var inst_54980 = (state_55003[(2)]);var inst_54981 = (inst_54967 + (1));var inst_54967__$1 = inst_54981;var state_55003__$1 = (function (){var statearr_55018 = state_55003;(statearr_55018[(10)] = inst_54980);
(statearr_55018[(7)] = inst_54967__$1);
return statearr_55018;
})();var statearr_55019_55045 = state_55003__$1;(statearr_55019_55045[(2)] = null);
(statearr_55019_55045[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55004 === (5)))
{var inst_54987 = (state_55003[(2)]);var state_55003__$1 = (function (){var statearr_55020 = state_55003;(statearr_55020[(11)] = inst_54987);
return statearr_55020;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55003__$1,(12),dchan);
} else
{if((state_val_55004 === (14)))
{var inst_54989 = (state_55003[(8)]);var inst_54994 = cljs.core.apply.call(null,f,inst_54989);var state_55003__$1 = state_55003;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55003__$1,(16),out,inst_54994);
} else
{if((state_val_55004 === (16)))
{var inst_54996 = (state_55003[(2)]);var state_55003__$1 = (function (){var statearr_55021 = state_55003;(statearr_55021[(12)] = inst_54996);
return statearr_55021;
})();var statearr_55022_55046 = state_55003__$1;(statearr_55022_55046[(2)] = null);
(statearr_55022_55046[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55004 === (10)))
{var inst_54971 = (state_55003[(2)]);var inst_54972 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_55003__$1 = (function (){var statearr_55023 = state_55003;(statearr_55023[(13)] = inst_54971);
return statearr_55023;
})();var statearr_55024_55047 = state_55003__$1;(statearr_55024_55047[(2)] = inst_54972);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55003__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55004 === (8)))
{var inst_54985 = (state_55003[(2)]);var state_55003__$1 = state_55003;var statearr_55025_55048 = state_55003__$1;(statearr_55025_55048[(2)] = inst_54985);
(statearr_55025_55048[(1)] = (5));
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
});})(c__5708__auto___55033,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___55033,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55029[(0)] = state_machine__5694__auto__);
(statearr_55029[(1)] = (1));
return statearr_55029;
});
var state_machine__5694__auto____1 = (function (state_55003){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55003);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55030){if((e55030 instanceof Object))
{var ex__5697__auto__ = e55030;var statearr_55031_55049 = state_55003;(statearr_55031_55049[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55003);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55030;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55050 = state_55003;
state_55003 = G__55050;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55003){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___55033,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_55032 = f__5709__auto__.call(null);(statearr_55032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___55033);
return statearr_55032;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___55033,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___55158 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___55158,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___55158,out){
return (function (state_55134){var state_val_55135 = (state_55134[(1)]);if((state_val_55135 === (7)))
{var inst_55114 = (state_55134[(7)]);var inst_55113 = (state_55134[(8)]);var inst_55113__$1 = (state_55134[(2)]);var inst_55114__$1 = cljs.core.nth.call(null,inst_55113__$1,(0),null);var inst_55115 = cljs.core.nth.call(null,inst_55113__$1,(1),null);var inst_55116 = (inst_55114__$1 == null);var state_55134__$1 = (function (){var statearr_55136 = state_55134;(statearr_55136[(7)] = inst_55114__$1);
(statearr_55136[(8)] = inst_55113__$1);
(statearr_55136[(9)] = inst_55115);
return statearr_55136;
})();if(cljs.core.truth_(inst_55116))
{var statearr_55137_55159 = state_55134__$1;(statearr_55137_55159[(1)] = (8));
} else
{var statearr_55138_55160 = state_55134__$1;(statearr_55138_55160[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55135 === (1)))
{var inst_55105 = cljs.core.vec.call(null,chs);var inst_55106 = inst_55105;var state_55134__$1 = (function (){var statearr_55139 = state_55134;(statearr_55139[(10)] = inst_55106);
return statearr_55139;
})();var statearr_55140_55161 = state_55134__$1;(statearr_55140_55161[(2)] = null);
(statearr_55140_55161[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55135 === (4)))
{var inst_55106 = (state_55134[(10)]);var state_55134__$1 = state_55134;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_55134__$1,(7),inst_55106);
} else
{if((state_val_55135 === (6)))
{var inst_55130 = (state_55134[(2)]);var state_55134__$1 = state_55134;var statearr_55141_55162 = state_55134__$1;(statearr_55141_55162[(2)] = inst_55130);
(statearr_55141_55162[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55135 === (3)))
{var inst_55132 = (state_55134[(2)]);var state_55134__$1 = state_55134;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55134__$1,inst_55132);
} else
{if((state_val_55135 === (2)))
{var inst_55106 = (state_55134[(10)]);var inst_55108 = cljs.core.count.call(null,inst_55106);var inst_55109 = (inst_55108 > (0));var state_55134__$1 = state_55134;if(cljs.core.truth_(inst_55109))
{var statearr_55143_55163 = state_55134__$1;(statearr_55143_55163[(1)] = (4));
} else
{var statearr_55144_55164 = state_55134__$1;(statearr_55144_55164[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55135 === (11)))
{var inst_55106 = (state_55134[(10)]);var inst_55123 = (state_55134[(2)]);var tmp55142 = inst_55106;var inst_55106__$1 = tmp55142;var state_55134__$1 = (function (){var statearr_55145 = state_55134;(statearr_55145[(10)] = inst_55106__$1);
(statearr_55145[(11)] = inst_55123);
return statearr_55145;
})();var statearr_55146_55165 = state_55134__$1;(statearr_55146_55165[(2)] = null);
(statearr_55146_55165[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55135 === (9)))
{var inst_55114 = (state_55134[(7)]);var state_55134__$1 = state_55134;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55134__$1,(11),out,inst_55114);
} else
{if((state_val_55135 === (5)))
{var inst_55128 = cljs.core.async.close_BANG_.call(null,out);var state_55134__$1 = state_55134;var statearr_55147_55166 = state_55134__$1;(statearr_55147_55166[(2)] = inst_55128);
(statearr_55147_55166[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55135 === (10)))
{var inst_55126 = (state_55134[(2)]);var state_55134__$1 = state_55134;var statearr_55148_55167 = state_55134__$1;(statearr_55148_55167[(2)] = inst_55126);
(statearr_55148_55167[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55135 === (8)))
{var inst_55114 = (state_55134[(7)]);var inst_55113 = (state_55134[(8)]);var inst_55106 = (state_55134[(10)]);var inst_55115 = (state_55134[(9)]);var inst_55118 = (function (){var c = inst_55115;var v = inst_55114;var vec__55111 = inst_55113;var cs = inst_55106;return ((function (c,v,vec__55111,cs,inst_55114,inst_55113,inst_55106,inst_55115,state_val_55135,c__5708__auto___55158,out){
return (function (p1__55051_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__55051_SHARP_);
});
;})(c,v,vec__55111,cs,inst_55114,inst_55113,inst_55106,inst_55115,state_val_55135,c__5708__auto___55158,out))
})();var inst_55119 = cljs.core.filterv.call(null,inst_55118,inst_55106);var inst_55106__$1 = inst_55119;var state_55134__$1 = (function (){var statearr_55149 = state_55134;(statearr_55149[(10)] = inst_55106__$1);
return statearr_55149;
})();var statearr_55150_55168 = state_55134__$1;(statearr_55150_55168[(2)] = null);
(statearr_55150_55168[(1)] = (2));
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
});})(c__5708__auto___55158,out))
;return ((function (switch__5693__auto__,c__5708__auto___55158,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55154 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55154[(0)] = state_machine__5694__auto__);
(statearr_55154[(1)] = (1));
return statearr_55154;
});
var state_machine__5694__auto____1 = (function (state_55134){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55134);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55155){if((e55155 instanceof Object))
{var ex__5697__auto__ = e55155;var statearr_55156_55169 = state_55134;(statearr_55156_55169[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55134);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55155;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55170 = state_55134;
state_55134 = G__55170;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55134){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___55158,out))
})();var state__5710__auto__ = (function (){var statearr_55157 = f__5709__auto__.call(null);(statearr_55157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___55158);
return statearr_55157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___55158,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___55263 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___55263,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___55263,out){
return (function (state_55240){var state_val_55241 = (state_55240[(1)]);if((state_val_55241 === (7)))
{var inst_55222 = (state_55240[(7)]);var inst_55222__$1 = (state_55240[(2)]);var inst_55223 = (inst_55222__$1 == null);var inst_55224 = cljs.core.not.call(null,inst_55223);var state_55240__$1 = (function (){var statearr_55242 = state_55240;(statearr_55242[(7)] = inst_55222__$1);
return statearr_55242;
})();if(inst_55224)
{var statearr_55243_55264 = state_55240__$1;(statearr_55243_55264[(1)] = (8));
} else
{var statearr_55244_55265 = state_55240__$1;(statearr_55244_55265[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55241 === (1)))
{var inst_55217 = (0);var state_55240__$1 = (function (){var statearr_55245 = state_55240;(statearr_55245[(8)] = inst_55217);
return statearr_55245;
})();var statearr_55246_55266 = state_55240__$1;(statearr_55246_55266[(2)] = null);
(statearr_55246_55266[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55241 === (4)))
{var state_55240__$1 = state_55240;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55240__$1,(7),ch);
} else
{if((state_val_55241 === (6)))
{var inst_55235 = (state_55240[(2)]);var state_55240__$1 = state_55240;var statearr_55247_55267 = state_55240__$1;(statearr_55247_55267[(2)] = inst_55235);
(statearr_55247_55267[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55241 === (3)))
{var inst_55237 = (state_55240[(2)]);var inst_55238 = cljs.core.async.close_BANG_.call(null,out);var state_55240__$1 = (function (){var statearr_55248 = state_55240;(statearr_55248[(9)] = inst_55237);
return statearr_55248;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55240__$1,inst_55238);
} else
{if((state_val_55241 === (2)))
{var inst_55217 = (state_55240[(8)]);var inst_55219 = (inst_55217 < n);var state_55240__$1 = state_55240;if(cljs.core.truth_(inst_55219))
{var statearr_55249_55268 = state_55240__$1;(statearr_55249_55268[(1)] = (4));
} else
{var statearr_55250_55269 = state_55240__$1;(statearr_55250_55269[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55241 === (11)))
{var inst_55217 = (state_55240[(8)]);var inst_55227 = (state_55240[(2)]);var inst_55228 = (inst_55217 + (1));var inst_55217__$1 = inst_55228;var state_55240__$1 = (function (){var statearr_55251 = state_55240;(statearr_55251[(8)] = inst_55217__$1);
(statearr_55251[(10)] = inst_55227);
return statearr_55251;
})();var statearr_55252_55270 = state_55240__$1;(statearr_55252_55270[(2)] = null);
(statearr_55252_55270[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55241 === (9)))
{var state_55240__$1 = state_55240;var statearr_55253_55271 = state_55240__$1;(statearr_55253_55271[(2)] = null);
(statearr_55253_55271[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55241 === (5)))
{var state_55240__$1 = state_55240;var statearr_55254_55272 = state_55240__$1;(statearr_55254_55272[(2)] = null);
(statearr_55254_55272[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55241 === (10)))
{var inst_55232 = (state_55240[(2)]);var state_55240__$1 = state_55240;var statearr_55255_55273 = state_55240__$1;(statearr_55255_55273[(2)] = inst_55232);
(statearr_55255_55273[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55241 === (8)))
{var inst_55222 = (state_55240[(7)]);var state_55240__$1 = state_55240;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55240__$1,(11),out,inst_55222);
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
});})(c__5708__auto___55263,out))
;return ((function (switch__5693__auto__,c__5708__auto___55263,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55259 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_55259[(0)] = state_machine__5694__auto__);
(statearr_55259[(1)] = (1));
return statearr_55259;
});
var state_machine__5694__auto____1 = (function (state_55240){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55240);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55260){if((e55260 instanceof Object))
{var ex__5697__auto__ = e55260;var statearr_55261_55274 = state_55240;(statearr_55261_55274[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55240);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55260;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55275 = state_55240;
state_55240 = G__55275;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55240){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___55263,out))
})();var state__5710__auto__ = (function (){var statearr_55262 = f__5709__auto__.call(null);(statearr_55262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___55263);
return statearr_55262;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___55263,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___55372 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___55372,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___55372,out){
return (function (state_55347){var state_val_55348 = (state_55347[(1)]);if((state_val_55348 === (7)))
{var inst_55342 = (state_55347[(2)]);var state_55347__$1 = state_55347;var statearr_55349_55373 = state_55347__$1;(statearr_55349_55373[(2)] = inst_55342);
(statearr_55349_55373[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55348 === (1)))
{var inst_55324 = null;var state_55347__$1 = (function (){var statearr_55350 = state_55347;(statearr_55350[(7)] = inst_55324);
return statearr_55350;
})();var statearr_55351_55374 = state_55347__$1;(statearr_55351_55374[(2)] = null);
(statearr_55351_55374[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55348 === (4)))
{var inst_55327 = (state_55347[(8)]);var inst_55327__$1 = (state_55347[(2)]);var inst_55328 = (inst_55327__$1 == null);var inst_55329 = cljs.core.not.call(null,inst_55328);var state_55347__$1 = (function (){var statearr_55352 = state_55347;(statearr_55352[(8)] = inst_55327__$1);
return statearr_55352;
})();if(inst_55329)
{var statearr_55353_55375 = state_55347__$1;(statearr_55353_55375[(1)] = (5));
} else
{var statearr_55354_55376 = state_55347__$1;(statearr_55354_55376[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55348 === (6)))
{var state_55347__$1 = state_55347;var statearr_55355_55377 = state_55347__$1;(statearr_55355_55377[(2)] = null);
(statearr_55355_55377[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55348 === (3)))
{var inst_55344 = (state_55347[(2)]);var inst_55345 = cljs.core.async.close_BANG_.call(null,out);var state_55347__$1 = (function (){var statearr_55356 = state_55347;(statearr_55356[(9)] = inst_55344);
return statearr_55356;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55347__$1,inst_55345);
} else
{if((state_val_55348 === (2)))
{var state_55347__$1 = state_55347;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55347__$1,(4),ch);
} else
{if((state_val_55348 === (11)))
{var inst_55327 = (state_55347[(8)]);var inst_55336 = (state_55347[(2)]);var inst_55324 = inst_55327;var state_55347__$1 = (function (){var statearr_55357 = state_55347;(statearr_55357[(10)] = inst_55336);
(statearr_55357[(7)] = inst_55324);
return statearr_55357;
})();var statearr_55358_55378 = state_55347__$1;(statearr_55358_55378[(2)] = null);
(statearr_55358_55378[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55348 === (9)))
{var inst_55327 = (state_55347[(8)]);var state_55347__$1 = state_55347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55347__$1,(11),out,inst_55327);
} else
{if((state_val_55348 === (5)))
{var inst_55324 = (state_55347[(7)]);var inst_55327 = (state_55347[(8)]);var inst_55331 = cljs.core._EQ_.call(null,inst_55327,inst_55324);var state_55347__$1 = state_55347;if(inst_55331)
{var statearr_55360_55379 = state_55347__$1;(statearr_55360_55379[(1)] = (8));
} else
{var statearr_55361_55380 = state_55347__$1;(statearr_55361_55380[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55348 === (10)))
{var inst_55339 = (state_55347[(2)]);var state_55347__$1 = state_55347;var statearr_55362_55381 = state_55347__$1;(statearr_55362_55381[(2)] = inst_55339);
(statearr_55362_55381[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55348 === (8)))
{var inst_55324 = (state_55347[(7)]);var tmp55359 = inst_55324;var inst_55324__$1 = tmp55359;var state_55347__$1 = (function (){var statearr_55363 = state_55347;(statearr_55363[(7)] = inst_55324__$1);
return statearr_55363;
})();var statearr_55364_55382 = state_55347__$1;(statearr_55364_55382[(2)] = null);
(statearr_55364_55382[(1)] = (2));
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
});})(c__5708__auto___55372,out))
;return ((function (switch__5693__auto__,c__5708__auto___55372,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55368 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_55368[(0)] = state_machine__5694__auto__);
(statearr_55368[(1)] = (1));
return statearr_55368;
});
var state_machine__5694__auto____1 = (function (state_55347){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55347);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55369){if((e55369 instanceof Object))
{var ex__5697__auto__ = e55369;var statearr_55370_55383 = state_55347;(statearr_55370_55383[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55347);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55369;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55384 = state_55347;
state_55347 = G__55384;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55347){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___55372,out))
})();var state__5710__auto__ = (function (){var statearr_55371 = f__5709__auto__.call(null);(statearr_55371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___55372);
return statearr_55371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___55372,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___55519 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___55519,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___55519,out){
return (function (state_55489){var state_val_55490 = (state_55489[(1)]);if((state_val_55490 === (7)))
{var inst_55485 = (state_55489[(2)]);var state_55489__$1 = state_55489;var statearr_55491_55520 = state_55489__$1;(statearr_55491_55520[(2)] = inst_55485);
(statearr_55491_55520[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55490 === (1)))
{var inst_55452 = (new Array(n));var inst_55453 = inst_55452;var inst_55454 = (0);var state_55489__$1 = (function (){var statearr_55492 = state_55489;(statearr_55492[(7)] = inst_55454);
(statearr_55492[(8)] = inst_55453);
return statearr_55492;
})();var statearr_55493_55521 = state_55489__$1;(statearr_55493_55521[(2)] = null);
(statearr_55493_55521[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55490 === (4)))
{var inst_55457 = (state_55489[(9)]);var inst_55457__$1 = (state_55489[(2)]);var inst_55458 = (inst_55457__$1 == null);var inst_55459 = cljs.core.not.call(null,inst_55458);var state_55489__$1 = (function (){var statearr_55494 = state_55489;(statearr_55494[(9)] = inst_55457__$1);
return statearr_55494;
})();if(inst_55459)
{var statearr_55495_55522 = state_55489__$1;(statearr_55495_55522[(1)] = (5));
} else
{var statearr_55496_55523 = state_55489__$1;(statearr_55496_55523[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55490 === (15)))
{var inst_55479 = (state_55489[(2)]);var state_55489__$1 = state_55489;var statearr_55497_55524 = state_55489__$1;(statearr_55497_55524[(2)] = inst_55479);
(statearr_55497_55524[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55490 === (13)))
{var state_55489__$1 = state_55489;var statearr_55498_55525 = state_55489__$1;(statearr_55498_55525[(2)] = null);
(statearr_55498_55525[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55490 === (6)))
{var inst_55454 = (state_55489[(7)]);var inst_55475 = (inst_55454 > (0));var state_55489__$1 = state_55489;if(cljs.core.truth_(inst_55475))
{var statearr_55499_55526 = state_55489__$1;(statearr_55499_55526[(1)] = (12));
} else
{var statearr_55500_55527 = state_55489__$1;(statearr_55500_55527[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55490 === (3)))
{var inst_55487 = (state_55489[(2)]);var state_55489__$1 = state_55489;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55489__$1,inst_55487);
} else
{if((state_val_55490 === (12)))
{var inst_55453 = (state_55489[(8)]);var inst_55477 = cljs.core.vec.call(null,inst_55453);var state_55489__$1 = state_55489;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55489__$1,(15),out,inst_55477);
} else
{if((state_val_55490 === (2)))
{var state_55489__$1 = state_55489;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55489__$1,(4),ch);
} else
{if((state_val_55490 === (11)))
{var inst_55469 = (state_55489[(2)]);var inst_55470 = (new Array(n));var inst_55453 = inst_55470;var inst_55454 = (0);var state_55489__$1 = (function (){var statearr_55501 = state_55489;(statearr_55501[(7)] = inst_55454);
(statearr_55501[(8)] = inst_55453);
(statearr_55501[(10)] = inst_55469);
return statearr_55501;
})();var statearr_55502_55528 = state_55489__$1;(statearr_55502_55528[(2)] = null);
(statearr_55502_55528[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55490 === (9)))
{var inst_55453 = (state_55489[(8)]);var inst_55467 = cljs.core.vec.call(null,inst_55453);var state_55489__$1 = state_55489;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55489__$1,(11),out,inst_55467);
} else
{if((state_val_55490 === (5)))
{var inst_55462 = (state_55489[(11)]);var inst_55457 = (state_55489[(9)]);var inst_55454 = (state_55489[(7)]);var inst_55453 = (state_55489[(8)]);var inst_55461 = (inst_55453[inst_55454] = inst_55457);var inst_55462__$1 = (inst_55454 + (1));var inst_55463 = (inst_55462__$1 < n);var state_55489__$1 = (function (){var statearr_55503 = state_55489;(statearr_55503[(11)] = inst_55462__$1);
(statearr_55503[(12)] = inst_55461);
return statearr_55503;
})();if(cljs.core.truth_(inst_55463))
{var statearr_55504_55529 = state_55489__$1;(statearr_55504_55529[(1)] = (8));
} else
{var statearr_55505_55530 = state_55489__$1;(statearr_55505_55530[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55490 === (14)))
{var inst_55482 = (state_55489[(2)]);var inst_55483 = cljs.core.async.close_BANG_.call(null,out);var state_55489__$1 = (function (){var statearr_55507 = state_55489;(statearr_55507[(13)] = inst_55482);
return statearr_55507;
})();var statearr_55508_55531 = state_55489__$1;(statearr_55508_55531[(2)] = inst_55483);
(statearr_55508_55531[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55490 === (10)))
{var inst_55473 = (state_55489[(2)]);var state_55489__$1 = state_55489;var statearr_55509_55532 = state_55489__$1;(statearr_55509_55532[(2)] = inst_55473);
(statearr_55509_55532[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55490 === (8)))
{var inst_55462 = (state_55489[(11)]);var inst_55453 = (state_55489[(8)]);var tmp55506 = inst_55453;var inst_55453__$1 = tmp55506;var inst_55454 = inst_55462;var state_55489__$1 = (function (){var statearr_55510 = state_55489;(statearr_55510[(7)] = inst_55454);
(statearr_55510[(8)] = inst_55453__$1);
return statearr_55510;
})();var statearr_55511_55533 = state_55489__$1;(statearr_55511_55533[(2)] = null);
(statearr_55511_55533[(1)] = (2));
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
});})(c__5708__auto___55519,out))
;return ((function (switch__5693__auto__,c__5708__auto___55519,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55515[(0)] = state_machine__5694__auto__);
(statearr_55515[(1)] = (1));
return statearr_55515;
});
var state_machine__5694__auto____1 = (function (state_55489){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55489);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55516){if((e55516 instanceof Object))
{var ex__5697__auto__ = e55516;var statearr_55517_55534 = state_55489;(statearr_55517_55534[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55489);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55516;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55535 = state_55489;
state_55489 = G__55535;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55489){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___55519,out))
})();var state__5710__auto__ = (function (){var statearr_55518 = f__5709__auto__.call(null);(statearr_55518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___55519);
return statearr_55518;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___55519,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___55678 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___55678,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___55678,out){
return (function (state_55648){var state_val_55649 = (state_55648[(1)]);if((state_val_55649 === (7)))
{var inst_55644 = (state_55648[(2)]);var state_55648__$1 = state_55648;var statearr_55650_55679 = state_55648__$1;(statearr_55650_55679[(2)] = inst_55644);
(statearr_55650_55679[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55649 === (1)))
{var inst_55607 = [];var inst_55608 = inst_55607;var inst_55609 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_55648__$1 = (function (){var statearr_55651 = state_55648;(statearr_55651[(7)] = inst_55609);
(statearr_55651[(8)] = inst_55608);
return statearr_55651;
})();var statearr_55652_55680 = state_55648__$1;(statearr_55652_55680[(2)] = null);
(statearr_55652_55680[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55649 === (4)))
{var inst_55612 = (state_55648[(9)]);var inst_55612__$1 = (state_55648[(2)]);var inst_55613 = (inst_55612__$1 == null);var inst_55614 = cljs.core.not.call(null,inst_55613);var state_55648__$1 = (function (){var statearr_55653 = state_55648;(statearr_55653[(9)] = inst_55612__$1);
return statearr_55653;
})();if(inst_55614)
{var statearr_55654_55681 = state_55648__$1;(statearr_55654_55681[(1)] = (5));
} else
{var statearr_55655_55682 = state_55648__$1;(statearr_55655_55682[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55649 === (15)))
{var inst_55638 = (state_55648[(2)]);var state_55648__$1 = state_55648;var statearr_55656_55683 = state_55648__$1;(statearr_55656_55683[(2)] = inst_55638);
(statearr_55656_55683[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55649 === (13)))
{var state_55648__$1 = state_55648;var statearr_55657_55684 = state_55648__$1;(statearr_55657_55684[(2)] = null);
(statearr_55657_55684[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55649 === (6)))
{var inst_55608 = (state_55648[(8)]);var inst_55633 = inst_55608.length;var inst_55634 = (inst_55633 > (0));var state_55648__$1 = state_55648;if(cljs.core.truth_(inst_55634))
{var statearr_55658_55685 = state_55648__$1;(statearr_55658_55685[(1)] = (12));
} else
{var statearr_55659_55686 = state_55648__$1;(statearr_55659_55686[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55649 === (3)))
{var inst_55646 = (state_55648[(2)]);var state_55648__$1 = state_55648;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55648__$1,inst_55646);
} else
{if((state_val_55649 === (12)))
{var inst_55608 = (state_55648[(8)]);var inst_55636 = cljs.core.vec.call(null,inst_55608);var state_55648__$1 = state_55648;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55648__$1,(15),out,inst_55636);
} else
{if((state_val_55649 === (2)))
{var state_55648__$1 = state_55648;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55648__$1,(4),ch);
} else
{if((state_val_55649 === (11)))
{var inst_55616 = (state_55648[(10)]);var inst_55612 = (state_55648[(9)]);var inst_55626 = (state_55648[(2)]);var inst_55627 = [];var inst_55628 = inst_55627.push(inst_55612);var inst_55608 = inst_55627;var inst_55609 = inst_55616;var state_55648__$1 = (function (){var statearr_55660 = state_55648;(statearr_55660[(7)] = inst_55609);
(statearr_55660[(8)] = inst_55608);
(statearr_55660[(11)] = inst_55626);
(statearr_55660[(12)] = inst_55628);
return statearr_55660;
})();var statearr_55661_55687 = state_55648__$1;(statearr_55661_55687[(2)] = null);
(statearr_55661_55687[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55649 === (9)))
{var inst_55608 = (state_55648[(8)]);var inst_55624 = cljs.core.vec.call(null,inst_55608);var state_55648__$1 = state_55648;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55648__$1,(11),out,inst_55624);
} else
{if((state_val_55649 === (5)))
{var inst_55609 = (state_55648[(7)]);var inst_55616 = (state_55648[(10)]);var inst_55612 = (state_55648[(9)]);var inst_55616__$1 = f.call(null,inst_55612);var inst_55617 = cljs.core._EQ_.call(null,inst_55616__$1,inst_55609);var inst_55618 = cljs.core.keyword_identical_QMARK_.call(null,inst_55609,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_55619 = (inst_55617) || (inst_55618);var state_55648__$1 = (function (){var statearr_55662 = state_55648;(statearr_55662[(10)] = inst_55616__$1);
return statearr_55662;
})();if(cljs.core.truth_(inst_55619))
{var statearr_55663_55688 = state_55648__$1;(statearr_55663_55688[(1)] = (8));
} else
{var statearr_55664_55689 = state_55648__$1;(statearr_55664_55689[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55649 === (14)))
{var inst_55641 = (state_55648[(2)]);var inst_55642 = cljs.core.async.close_BANG_.call(null,out);var state_55648__$1 = (function (){var statearr_55666 = state_55648;(statearr_55666[(13)] = inst_55641);
return statearr_55666;
})();var statearr_55667_55690 = state_55648__$1;(statearr_55667_55690[(2)] = inst_55642);
(statearr_55667_55690[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55649 === (10)))
{var inst_55631 = (state_55648[(2)]);var state_55648__$1 = state_55648;var statearr_55668_55691 = state_55648__$1;(statearr_55668_55691[(2)] = inst_55631);
(statearr_55668_55691[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55649 === (8)))
{var inst_55608 = (state_55648[(8)]);var inst_55616 = (state_55648[(10)]);var inst_55612 = (state_55648[(9)]);var inst_55621 = inst_55608.push(inst_55612);var tmp55665 = inst_55608;var inst_55608__$1 = tmp55665;var inst_55609 = inst_55616;var state_55648__$1 = (function (){var statearr_55669 = state_55648;(statearr_55669[(7)] = inst_55609);
(statearr_55669[(8)] = inst_55608__$1);
(statearr_55669[(14)] = inst_55621);
return statearr_55669;
})();var statearr_55670_55692 = state_55648__$1;(statearr_55670_55692[(2)] = null);
(statearr_55670_55692[(1)] = (2));
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
});})(c__5708__auto___55678,out))
;return ((function (switch__5693__auto__,c__5708__auto___55678,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55674[(0)] = state_machine__5694__auto__);
(statearr_55674[(1)] = (1));
return statearr_55674;
});
var state_machine__5694__auto____1 = (function (state_55648){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55648);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55675){if((e55675 instanceof Object))
{var ex__5697__auto__ = e55675;var statearr_55676_55693 = state_55648;(statearr_55676_55693[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55648);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55675;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55694 = state_55648;
state_55648 = G__55694;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55648){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___55678,out))
})();var state__5710__auto__ = (function (){var statearr_55677 = f__5709__auto__.call(null);(statearr_55677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___55678);
return statearr_55677;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___55678,out))
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