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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t50689 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50689 = (function (f,fn_handler,meta50690){
this.f = f;
this.fn_handler = fn_handler;
this.meta50690 = meta50690;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50689.cljs$lang$type = true;
cljs.core.async.t50689.cljs$lang$ctorStr = "cljs.core.async/t50689";
cljs.core.async.t50689.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50689");
});
cljs.core.async.t50689.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t50689.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t50689.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t50689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50691){var self__ = this;
var _50691__$1 = this;return self__.meta50690;
});
cljs.core.async.t50689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50691,meta50690__$1){var self__ = this;
var _50691__$1 = this;return (new cljs.core.async.t50689(self__.f,self__.fn_handler,meta50690__$1));
});
cljs.core.async.__GT_t50689 = (function __GT_t50689(f__$1,fn_handler__$1,meta50690){return (new cljs.core.async.t50689(f__$1,fn_handler__$1,meta50690));
});
}
return (new cljs.core.async.t50689(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__50693 = buff;if(G__50693)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__50693.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__50693.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__50693);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__50693);
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
{var val_50694 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_50694);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_50694,ret){
return (function (){return fn1.call(null,val_50694);
});})(val_50694,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___50695 = n;var x_50696 = (0);while(true){
if((x_50696 < n__4399__auto___50695))
{(a[x_50696] = (0));
{
var G__50697 = (x_50696 + (1));
x_50696 = G__50697;
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
var G__50698 = (i + (1));
i = G__50698;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t50702 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50702 = (function (flag,alt_flag,meta50703){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta50703 = meta50703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50702.cljs$lang$type = true;
cljs.core.async.t50702.cljs$lang$ctorStr = "cljs.core.async/t50702";
cljs.core.async.t50702.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50702");
});})(flag))
;
cljs.core.async.t50702.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t50702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t50702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t50702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_50704){var self__ = this;
var _50704__$1 = this;return self__.meta50703;
});})(flag))
;
cljs.core.async.t50702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_50704,meta50703__$1){var self__ = this;
var _50704__$1 = this;return (new cljs.core.async.t50702(self__.flag,self__.alt_flag,meta50703__$1));
});})(flag))
;
cljs.core.async.__GT_t50702 = ((function (flag){
return (function __GT_t50702(flag__$1,alt_flag__$1,meta50703){return (new cljs.core.async.t50702(flag__$1,alt_flag__$1,meta50703));
});})(flag))
;
}
return (new cljs.core.async.t50702(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t50708 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50708 = (function (cb,flag,alt_handler,meta50709){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta50709 = meta50709;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50708.cljs$lang$type = true;
cljs.core.async.t50708.cljs$lang$ctorStr = "cljs.core.async/t50708";
cljs.core.async.t50708.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50708");
});
cljs.core.async.t50708.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t50708.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t50708.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t50708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50710){var self__ = this;
var _50710__$1 = this;return self__.meta50709;
});
cljs.core.async.t50708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50710,meta50709__$1){var self__ = this;
var _50710__$1 = this;return (new cljs.core.async.t50708(self__.cb,self__.flag,self__.alt_handler,meta50709__$1));
});
cljs.core.async.__GT_t50708 = (function __GT_t50708(cb__$1,flag__$1,alt_handler__$1,meta50709){return (new cljs.core.async.t50708(cb__$1,flag__$1,alt_handler__$1,meta50709));
});
}
return (new cljs.core.async.t50708(cb,flag,alt_handler,null));
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
return (function (p1__50711_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50711_SHARP_,port], null));
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
var G__50712 = (i + (1));
i = G__50712;
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
var alts_BANG___delegate = function (ports,p__50713){var map__50715 = p__50713;var map__50715__$1 = ((cljs.core.seq_QMARK_.call(null,map__50715))?cljs.core.apply.call(null,cljs.core.hash_map,map__50715):map__50715);var opts = map__50715__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__50713 = null;if (arguments.length > 1) {
  p__50713 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__50713);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__50716){
var ports = cljs.core.first(arglist__50716);
var p__50713 = cljs.core.rest(arglist__50716);
return alts_BANG___delegate(ports,p__50713);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t50724 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50724 = (function (ch,f,map_LT_,meta50725){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta50725 = meta50725;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50724.cljs$lang$type = true;
cljs.core.async.t50724.cljs$lang$ctorStr = "cljs.core.async/t50724";
cljs.core.async.t50724.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50724");
});
cljs.core.async.t50724.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t50724.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t50724.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t50724.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t50727 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50727 = (function (fn1,_,meta50725,ch,f,map_LT_,meta50728){
this.fn1 = fn1;
this._ = _;
this.meta50725 = meta50725;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta50728 = meta50728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50727.cljs$lang$type = true;
cljs.core.async.t50727.cljs$lang$ctorStr = "cljs.core.async/t50727";
cljs.core.async.t50727.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50727");
});})(___$1))
;
cljs.core.async.t50727.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t50727.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t50727.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t50727.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__50717_SHARP_){return f1.call(null,(((p1__50717_SHARP_ == null))?null:self__.f.call(null,p1__50717_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t50727.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_50729){var self__ = this;
var _50729__$1 = this;return self__.meta50728;
});})(___$1))
;
cljs.core.async.t50727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_50729,meta50728__$1){var self__ = this;
var _50729__$1 = this;return (new cljs.core.async.t50727(self__.fn1,self__._,self__.meta50725,self__.ch,self__.f,self__.map_LT_,meta50728__$1));
});})(___$1))
;
cljs.core.async.__GT_t50727 = ((function (___$1){
return (function __GT_t50727(fn1__$1,___$2,meta50725__$1,ch__$2,f__$2,map_LT___$2,meta50728){return (new cljs.core.async.t50727(fn1__$1,___$2,meta50725__$1,ch__$2,f__$2,map_LT___$2,meta50728));
});})(___$1))
;
}
return (new cljs.core.async.t50727(fn1,___$1,self__.meta50725,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t50724.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t50724.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t50724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50726){var self__ = this;
var _50726__$1 = this;return self__.meta50725;
});
cljs.core.async.t50724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50726,meta50725__$1){var self__ = this;
var _50726__$1 = this;return (new cljs.core.async.t50724(self__.ch,self__.f,self__.map_LT_,meta50725__$1));
});
cljs.core.async.__GT_t50724 = (function __GT_t50724(ch__$1,f__$1,map_LT___$1,meta50725){return (new cljs.core.async.t50724(ch__$1,f__$1,map_LT___$1,meta50725));
});
}
return (new cljs.core.async.t50724(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t50733 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50733 = (function (ch,f,map_GT_,meta50734){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta50734 = meta50734;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50733.cljs$lang$type = true;
cljs.core.async.t50733.cljs$lang$ctorStr = "cljs.core.async/t50733";
cljs.core.async.t50733.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50733");
});
cljs.core.async.t50733.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t50733.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t50733.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t50733.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t50733.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t50733.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t50733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50735){var self__ = this;
var _50735__$1 = this;return self__.meta50734;
});
cljs.core.async.t50733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50735,meta50734__$1){var self__ = this;
var _50735__$1 = this;return (new cljs.core.async.t50733(self__.ch,self__.f,self__.map_GT_,meta50734__$1));
});
cljs.core.async.__GT_t50733 = (function __GT_t50733(ch__$1,f__$1,map_GT___$1,meta50734){return (new cljs.core.async.t50733(ch__$1,f__$1,map_GT___$1,meta50734));
});
}
return (new cljs.core.async.t50733(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t50739 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50739 = (function (ch,p,filter_GT_,meta50740){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta50740 = meta50740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50739.cljs$lang$type = true;
cljs.core.async.t50739.cljs$lang$ctorStr = "cljs.core.async/t50739";
cljs.core.async.t50739.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50739");
});
cljs.core.async.t50739.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t50739.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t50739.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t50739.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t50739.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t50739.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t50739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50741){var self__ = this;
var _50741__$1 = this;return self__.meta50740;
});
cljs.core.async.t50739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50741,meta50740__$1){var self__ = this;
var _50741__$1 = this;return (new cljs.core.async.t50739(self__.ch,self__.p,self__.filter_GT_,meta50740__$1));
});
cljs.core.async.__GT_t50739 = (function __GT_t50739(ch__$1,p__$1,filter_GT___$1,meta50740){return (new cljs.core.async.t50739(ch__$1,p__$1,filter_GT___$1,meta50740));
});
}
return (new cljs.core.async.t50739(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___50824 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___50824,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___50824,out){
return (function (state_50803){var state_val_50804 = (state_50803[(1)]);if((state_val_50804 === (7)))
{var inst_50799 = (state_50803[(2)]);var state_50803__$1 = state_50803;var statearr_50805_50825 = state_50803__$1;(statearr_50805_50825[(2)] = inst_50799);
(statearr_50805_50825[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50804 === (1)))
{var state_50803__$1 = state_50803;var statearr_50806_50826 = state_50803__$1;(statearr_50806_50826[(2)] = null);
(statearr_50806_50826[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50804 === (4)))
{var inst_50785 = (state_50803[(7)]);var inst_50785__$1 = (state_50803[(2)]);var inst_50786 = (inst_50785__$1 == null);var state_50803__$1 = (function (){var statearr_50807 = state_50803;(statearr_50807[(7)] = inst_50785__$1);
return statearr_50807;
})();if(cljs.core.truth_(inst_50786))
{var statearr_50808_50827 = state_50803__$1;(statearr_50808_50827[(1)] = (5));
} else
{var statearr_50809_50828 = state_50803__$1;(statearr_50809_50828[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50804 === (6)))
{var inst_50785 = (state_50803[(7)]);var inst_50790 = p.call(null,inst_50785);var state_50803__$1 = state_50803;if(cljs.core.truth_(inst_50790))
{var statearr_50810_50829 = state_50803__$1;(statearr_50810_50829[(1)] = (8));
} else
{var statearr_50811_50830 = state_50803__$1;(statearr_50811_50830[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50804 === (3)))
{var inst_50801 = (state_50803[(2)]);var state_50803__$1 = state_50803;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50803__$1,inst_50801);
} else
{if((state_val_50804 === (2)))
{var state_50803__$1 = state_50803;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50803__$1,(4),ch);
} else
{if((state_val_50804 === (11)))
{var inst_50793 = (state_50803[(2)]);var state_50803__$1 = state_50803;var statearr_50812_50831 = state_50803__$1;(statearr_50812_50831[(2)] = inst_50793);
(statearr_50812_50831[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50804 === (9)))
{var state_50803__$1 = state_50803;var statearr_50813_50832 = state_50803__$1;(statearr_50813_50832[(2)] = null);
(statearr_50813_50832[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50804 === (5)))
{var inst_50788 = cljs.core.async.close_BANG_.call(null,out);var state_50803__$1 = state_50803;var statearr_50814_50833 = state_50803__$1;(statearr_50814_50833[(2)] = inst_50788);
(statearr_50814_50833[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50804 === (10)))
{var inst_50796 = (state_50803[(2)]);var state_50803__$1 = (function (){var statearr_50815 = state_50803;(statearr_50815[(8)] = inst_50796);
return statearr_50815;
})();var statearr_50816_50834 = state_50803__$1;(statearr_50816_50834[(2)] = null);
(statearr_50816_50834[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50804 === (8)))
{var inst_50785 = (state_50803[(7)]);var state_50803__$1 = state_50803;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50803__$1,(11),out,inst_50785);
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
});})(c__5693__auto___50824,out))
;return ((function (switch__5678__auto__,c__5693__auto___50824,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_50820 = [null,null,null,null,null,null,null,null,null];(statearr_50820[(0)] = state_machine__5679__auto__);
(statearr_50820[(1)] = (1));
return statearr_50820;
});
var state_machine__5679__auto____1 = (function (state_50803){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50803);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e50821){if((e50821 instanceof Object))
{var ex__5682__auto__ = e50821;var statearr_50822_50835 = state_50803;(statearr_50822_50835[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50803);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50821;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50836 = state_50803;
state_50803 = G__50836;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50803){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___50824,out))
})();var state__5695__auto__ = (function (){var statearr_50823 = f__5694__auto__.call(null);(statearr_50823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___50824);
return statearr_50823;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___50824,out))
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
return (function (state_50988){var state_val_50989 = (state_50988[(1)]);if((state_val_50989 === (7)))
{var inst_50984 = (state_50988[(2)]);var state_50988__$1 = state_50988;var statearr_50990_51027 = state_50988__$1;(statearr_50990_51027[(2)] = inst_50984);
(statearr_50990_51027[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50989 === (20)))
{var inst_50959 = (state_50988[(7)]);var inst_50970 = (state_50988[(2)]);var inst_50971 = cljs.core.next.call(null,inst_50959);var inst_50945 = inst_50971;var inst_50946 = null;var inst_50947 = (0);var inst_50948 = (0);var state_50988__$1 = (function (){var statearr_50991 = state_50988;(statearr_50991[(8)] = inst_50970);
(statearr_50991[(9)] = inst_50947);
(statearr_50991[(10)] = inst_50945);
(statearr_50991[(11)] = inst_50948);
(statearr_50991[(12)] = inst_50946);
return statearr_50991;
})();var statearr_50992_51028 = state_50988__$1;(statearr_50992_51028[(2)] = null);
(statearr_50992_51028[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50989 === (1)))
{var state_50988__$1 = state_50988;var statearr_50993_51029 = state_50988__$1;(statearr_50993_51029[(2)] = null);
(statearr_50993_51029[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50989 === (4)))
{var inst_50934 = (state_50988[(13)]);var inst_50934__$1 = (state_50988[(2)]);var inst_50935 = (inst_50934__$1 == null);var state_50988__$1 = (function (){var statearr_50997 = state_50988;(statearr_50997[(13)] = inst_50934__$1);
return statearr_50997;
})();if(cljs.core.truth_(inst_50935))
{var statearr_50998_51030 = state_50988__$1;(statearr_50998_51030[(1)] = (5));
} else
{var statearr_50999_51031 = state_50988__$1;(statearr_50999_51031[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50989 === (15)))
{var state_50988__$1 = state_50988;var statearr_51000_51032 = state_50988__$1;(statearr_51000_51032[(2)] = null);
(statearr_51000_51032[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50989 === (13)))
{var inst_50947 = (state_50988[(9)]);var inst_50945 = (state_50988[(10)]);var inst_50948 = (state_50988[(11)]);var inst_50946 = (state_50988[(12)]);var inst_50955 = (state_50988[(2)]);var inst_50956 = (inst_50948 + (1));var tmp50994 = inst_50947;var tmp50995 = inst_50945;var tmp50996 = inst_50946;var inst_50945__$1 = tmp50995;var inst_50946__$1 = tmp50996;var inst_50947__$1 = tmp50994;var inst_50948__$1 = inst_50956;var state_50988__$1 = (function (){var statearr_51001 = state_50988;(statearr_51001[(9)] = inst_50947__$1);
(statearr_51001[(10)] = inst_50945__$1);
(statearr_51001[(11)] = inst_50948__$1);
(statearr_51001[(12)] = inst_50946__$1);
(statearr_51001[(14)] = inst_50955);
return statearr_51001;
})();var statearr_51002_51033 = state_50988__$1;(statearr_51002_51033[(2)] = null);
(statearr_51002_51033[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50989 === (6)))
{var inst_50934 = (state_50988[(13)]);var inst_50939 = f.call(null,inst_50934);var inst_50944 = cljs.core.seq.call(null,inst_50939);var inst_50945 = inst_50944;var inst_50946 = null;var inst_50947 = (0);var inst_50948 = (0);var state_50988__$1 = (function (){var statearr_51003 = state_50988;(statearr_51003[(9)] = inst_50947);
(statearr_51003[(10)] = inst_50945);
(statearr_51003[(11)] = inst_50948);
(statearr_51003[(12)] = inst_50946);
return statearr_51003;
})();var statearr_51004_51034 = state_50988__$1;(statearr_51004_51034[(2)] = null);
(statearr_51004_51034[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50989 === (17)))
{var inst_50959 = (state_50988[(7)]);var inst_50963 = cljs.core.chunk_first.call(null,inst_50959);var inst_50964 = cljs.core.chunk_rest.call(null,inst_50959);var inst_50965 = cljs.core.count.call(null,inst_50963);var inst_50945 = inst_50964;var inst_50946 = inst_50963;var inst_50947 = inst_50965;var inst_50948 = (0);var state_50988__$1 = (function (){var statearr_51005 = state_50988;(statearr_51005[(9)] = inst_50947);
(statearr_51005[(10)] = inst_50945);
(statearr_51005[(11)] = inst_50948);
(statearr_51005[(12)] = inst_50946);
return statearr_51005;
})();var statearr_51006_51035 = state_50988__$1;(statearr_51006_51035[(2)] = null);
(statearr_51006_51035[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50989 === (3)))
{var inst_50986 = (state_50988[(2)]);var state_50988__$1 = state_50988;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50988__$1,inst_50986);
} else
{if((state_val_50989 === (12)))
{var inst_50979 = (state_50988[(2)]);var state_50988__$1 = state_50988;var statearr_51007_51036 = state_50988__$1;(statearr_51007_51036[(2)] = inst_50979);
(statearr_51007_51036[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50989 === (2)))
{var state_50988__$1 = state_50988;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50988__$1,(4),in$);
} else
{if((state_val_50989 === (19)))
{var inst_50974 = (state_50988[(2)]);var state_50988__$1 = state_50988;var statearr_51008_51037 = state_50988__$1;(statearr_51008_51037[(2)] = inst_50974);
(statearr_51008_51037[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50989 === (11)))
{var inst_50959 = (state_50988[(7)]);var inst_50945 = (state_50988[(10)]);var inst_50959__$1 = cljs.core.seq.call(null,inst_50945);var state_50988__$1 = (function (){var statearr_51009 = state_50988;(statearr_51009[(7)] = inst_50959__$1);
return statearr_51009;
})();if(inst_50959__$1)
{var statearr_51010_51038 = state_50988__$1;(statearr_51010_51038[(1)] = (14));
} else
{var statearr_51011_51039 = state_50988__$1;(statearr_51011_51039[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50989 === (9)))
{var inst_50981 = (state_50988[(2)]);var state_50988__$1 = (function (){var statearr_51012 = state_50988;(statearr_51012[(15)] = inst_50981);
return statearr_51012;
})();var statearr_51013_51040 = state_50988__$1;(statearr_51013_51040[(2)] = null);
(statearr_51013_51040[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50989 === (5)))
{var inst_50937 = cljs.core.async.close_BANG_.call(null,out);var state_50988__$1 = state_50988;var statearr_51014_51041 = state_50988__$1;(statearr_51014_51041[(2)] = inst_50937);
(statearr_51014_51041[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50989 === (14)))
{var inst_50959 = (state_50988[(7)]);var inst_50961 = cljs.core.chunked_seq_QMARK_.call(null,inst_50959);var state_50988__$1 = state_50988;if(inst_50961)
{var statearr_51015_51042 = state_50988__$1;(statearr_51015_51042[(1)] = (17));
} else
{var statearr_51016_51043 = state_50988__$1;(statearr_51016_51043[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50989 === (16)))
{var inst_50977 = (state_50988[(2)]);var state_50988__$1 = state_50988;var statearr_51017_51044 = state_50988__$1;(statearr_51017_51044[(2)] = inst_50977);
(statearr_51017_51044[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50989 === (10)))
{var inst_50948 = (state_50988[(11)]);var inst_50946 = (state_50988[(12)]);var inst_50953 = cljs.core._nth.call(null,inst_50946,inst_50948);var state_50988__$1 = state_50988;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50988__$1,(13),out,inst_50953);
} else
{if((state_val_50989 === (18)))
{var inst_50959 = (state_50988[(7)]);var inst_50968 = cljs.core.first.call(null,inst_50959);var state_50988__$1 = state_50988;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50988__$1,(20),out,inst_50968);
} else
{if((state_val_50989 === (8)))
{var inst_50947 = (state_50988[(9)]);var inst_50948 = (state_50988[(11)]);var inst_50950 = (inst_50948 < inst_50947);var inst_50951 = inst_50950;var state_50988__$1 = state_50988;if(cljs.core.truth_(inst_50951))
{var statearr_51018_51045 = state_50988__$1;(statearr_51018_51045[(1)] = (10));
} else
{var statearr_51019_51046 = state_50988__$1;(statearr_51019_51046[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_51023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51023[(0)] = state_machine__5679__auto__);
(statearr_51023[(1)] = (1));
return statearr_51023;
});
var state_machine__5679__auto____1 = (function (state_50988){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50988);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51024){if((e51024 instanceof Object))
{var ex__5682__auto__ = e51024;var statearr_51025_51047 = state_50988;(statearr_51025_51047[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50988);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51024;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51048 = state_50988;
state_50988 = G__51048;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50988){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_51026 = f__5694__auto__.call(null);(statearr_51026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_51026;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___51129 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___51129){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___51129){
return (function (state_51108){var state_val_51109 = (state_51108[(1)]);if((state_val_51109 === (7)))
{var inst_51104 = (state_51108[(2)]);var state_51108__$1 = state_51108;var statearr_51110_51130 = state_51108__$1;(statearr_51110_51130[(2)] = inst_51104);
(statearr_51110_51130[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51109 === (1)))
{var state_51108__$1 = state_51108;var statearr_51111_51131 = state_51108__$1;(statearr_51111_51131[(2)] = null);
(statearr_51111_51131[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51109 === (4)))
{var inst_51091 = (state_51108[(7)]);var inst_51091__$1 = (state_51108[(2)]);var inst_51092 = (inst_51091__$1 == null);var state_51108__$1 = (function (){var statearr_51112 = state_51108;(statearr_51112[(7)] = inst_51091__$1);
return statearr_51112;
})();if(cljs.core.truth_(inst_51092))
{var statearr_51113_51132 = state_51108__$1;(statearr_51113_51132[(1)] = (5));
} else
{var statearr_51114_51133 = state_51108__$1;(statearr_51114_51133[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51109 === (6)))
{var inst_51091 = (state_51108[(7)]);var state_51108__$1 = state_51108;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51108__$1,(11),to,inst_51091);
} else
{if((state_val_51109 === (3)))
{var inst_51106 = (state_51108[(2)]);var state_51108__$1 = state_51108;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51108__$1,inst_51106);
} else
{if((state_val_51109 === (2)))
{var state_51108__$1 = state_51108;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51108__$1,(4),from);
} else
{if((state_val_51109 === (11)))
{var inst_51101 = (state_51108[(2)]);var state_51108__$1 = (function (){var statearr_51115 = state_51108;(statearr_51115[(8)] = inst_51101);
return statearr_51115;
})();var statearr_51116_51134 = state_51108__$1;(statearr_51116_51134[(2)] = null);
(statearr_51116_51134[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51109 === (9)))
{var state_51108__$1 = state_51108;var statearr_51117_51135 = state_51108__$1;(statearr_51117_51135[(2)] = null);
(statearr_51117_51135[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51109 === (5)))
{var state_51108__$1 = state_51108;if(cljs.core.truth_(close_QMARK_))
{var statearr_51118_51136 = state_51108__$1;(statearr_51118_51136[(1)] = (8));
} else
{var statearr_51119_51137 = state_51108__$1;(statearr_51119_51137[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51109 === (10)))
{var inst_51098 = (state_51108[(2)]);var state_51108__$1 = state_51108;var statearr_51120_51138 = state_51108__$1;(statearr_51120_51138[(2)] = inst_51098);
(statearr_51120_51138[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51109 === (8)))
{var inst_51095 = cljs.core.async.close_BANG_.call(null,to);var state_51108__$1 = state_51108;var statearr_51121_51139 = state_51108__$1;(statearr_51121_51139[(2)] = inst_51095);
(statearr_51121_51139[(1)] = (10));
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
});})(c__5693__auto___51129))
;return ((function (switch__5678__auto__,c__5693__auto___51129){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_51125 = [null,null,null,null,null,null,null,null,null];(statearr_51125[(0)] = state_machine__5679__auto__);
(statearr_51125[(1)] = (1));
return statearr_51125;
});
var state_machine__5679__auto____1 = (function (state_51108){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_51108);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51126){if((e51126 instanceof Object))
{var ex__5682__auto__ = e51126;var statearr_51127_51140 = state_51108;(statearr_51127_51140[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51108);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51126;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51141 = state_51108;
state_51108 = G__51141;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_51108){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_51108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___51129))
})();var state__5695__auto__ = (function (){var statearr_51128 = f__5694__auto__.call(null);(statearr_51128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___51129);
return statearr_51128;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___51129))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___51228 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___51228,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___51228,tc,fc){
return (function (state_51206){var state_val_51207 = (state_51206[(1)]);if((state_val_51207 === (7)))
{var inst_51202 = (state_51206[(2)]);var state_51206__$1 = state_51206;var statearr_51208_51229 = state_51206__$1;(statearr_51208_51229[(2)] = inst_51202);
(statearr_51208_51229[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51207 === (1)))
{var state_51206__$1 = state_51206;var statearr_51209_51230 = state_51206__$1;(statearr_51209_51230[(2)] = null);
(statearr_51209_51230[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51207 === (4)))
{var inst_51187 = (state_51206[(7)]);var inst_51187__$1 = (state_51206[(2)]);var inst_51188 = (inst_51187__$1 == null);var state_51206__$1 = (function (){var statearr_51210 = state_51206;(statearr_51210[(7)] = inst_51187__$1);
return statearr_51210;
})();if(cljs.core.truth_(inst_51188))
{var statearr_51211_51231 = state_51206__$1;(statearr_51211_51231[(1)] = (5));
} else
{var statearr_51212_51232 = state_51206__$1;(statearr_51212_51232[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51207 === (6)))
{var inst_51187 = (state_51206[(7)]);var inst_51193 = p.call(null,inst_51187);var state_51206__$1 = state_51206;if(cljs.core.truth_(inst_51193))
{var statearr_51213_51233 = state_51206__$1;(statearr_51213_51233[(1)] = (9));
} else
{var statearr_51214_51234 = state_51206__$1;(statearr_51214_51234[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51207 === (3)))
{var inst_51204 = (state_51206[(2)]);var state_51206__$1 = state_51206;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51206__$1,inst_51204);
} else
{if((state_val_51207 === (2)))
{var state_51206__$1 = state_51206;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51206__$1,(4),ch);
} else
{if((state_val_51207 === (11)))
{var inst_51187 = (state_51206[(7)]);var inst_51197 = (state_51206[(2)]);var state_51206__$1 = state_51206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51206__$1,(8),inst_51197,inst_51187);
} else
{if((state_val_51207 === (9)))
{var state_51206__$1 = state_51206;var statearr_51215_51235 = state_51206__$1;(statearr_51215_51235[(2)] = tc);
(statearr_51215_51235[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51207 === (5)))
{var inst_51190 = cljs.core.async.close_BANG_.call(null,tc);var inst_51191 = cljs.core.async.close_BANG_.call(null,fc);var state_51206__$1 = (function (){var statearr_51216 = state_51206;(statearr_51216[(8)] = inst_51190);
return statearr_51216;
})();var statearr_51217_51236 = state_51206__$1;(statearr_51217_51236[(2)] = inst_51191);
(statearr_51217_51236[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51207 === (10)))
{var state_51206__$1 = state_51206;var statearr_51218_51237 = state_51206__$1;(statearr_51218_51237[(2)] = fc);
(statearr_51218_51237[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51207 === (8)))
{var inst_51199 = (state_51206[(2)]);var state_51206__$1 = (function (){var statearr_51219 = state_51206;(statearr_51219[(9)] = inst_51199);
return statearr_51219;
})();var statearr_51220_51238 = state_51206__$1;(statearr_51220_51238[(2)] = null);
(statearr_51220_51238[(1)] = (2));
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
});})(c__5693__auto___51228,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___51228,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_51224 = [null,null,null,null,null,null,null,null,null,null];(statearr_51224[(0)] = state_machine__5679__auto__);
(statearr_51224[(1)] = (1));
return statearr_51224;
});
var state_machine__5679__auto____1 = (function (state_51206){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_51206);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51225){if((e51225 instanceof Object))
{var ex__5682__auto__ = e51225;var statearr_51226_51239 = state_51206;(statearr_51226_51239[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51206);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51225;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51240 = state_51206;
state_51206 = G__51240;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_51206){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_51206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___51228,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_51227 = f__5694__auto__.call(null);(statearr_51227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___51228);
return statearr_51227;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___51228,tc,fc))
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
return (function (state_51287){var state_val_51288 = (state_51287[(1)]);if((state_val_51288 === (7)))
{var inst_51283 = (state_51287[(2)]);var state_51287__$1 = state_51287;var statearr_51289_51305 = state_51287__$1;(statearr_51289_51305[(2)] = inst_51283);
(statearr_51289_51305[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51288 === (6)))
{var inst_51276 = (state_51287[(7)]);var inst_51273 = (state_51287[(8)]);var inst_51280 = f.call(null,inst_51273,inst_51276);var inst_51273__$1 = inst_51280;var state_51287__$1 = (function (){var statearr_51290 = state_51287;(statearr_51290[(8)] = inst_51273__$1);
return statearr_51290;
})();var statearr_51291_51306 = state_51287__$1;(statearr_51291_51306[(2)] = null);
(statearr_51291_51306[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51288 === (5)))
{var inst_51273 = (state_51287[(8)]);var state_51287__$1 = state_51287;var statearr_51292_51307 = state_51287__$1;(statearr_51292_51307[(2)] = inst_51273);
(statearr_51292_51307[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51288 === (4)))
{var inst_51276 = (state_51287[(7)]);var inst_51276__$1 = (state_51287[(2)]);var inst_51277 = (inst_51276__$1 == null);var state_51287__$1 = (function (){var statearr_51293 = state_51287;(statearr_51293[(7)] = inst_51276__$1);
return statearr_51293;
})();if(cljs.core.truth_(inst_51277))
{var statearr_51294_51308 = state_51287__$1;(statearr_51294_51308[(1)] = (5));
} else
{var statearr_51295_51309 = state_51287__$1;(statearr_51295_51309[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51288 === (3)))
{var inst_51285 = (state_51287[(2)]);var state_51287__$1 = state_51287;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51287__$1,inst_51285);
} else
{if((state_val_51288 === (2)))
{var state_51287__$1 = state_51287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51287__$1,(4),ch);
} else
{if((state_val_51288 === (1)))
{var inst_51273 = init;var state_51287__$1 = (function (){var statearr_51296 = state_51287;(statearr_51296[(8)] = inst_51273);
return statearr_51296;
})();var statearr_51297_51310 = state_51287__$1;(statearr_51297_51310[(2)] = null);
(statearr_51297_51310[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_51301 = [null,null,null,null,null,null,null,null,null];(statearr_51301[(0)] = state_machine__5679__auto__);
(statearr_51301[(1)] = (1));
return statearr_51301;
});
var state_machine__5679__auto____1 = (function (state_51287){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_51287);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51302){if((e51302 instanceof Object))
{var ex__5682__auto__ = e51302;var statearr_51303_51311 = state_51287;(statearr_51303_51311[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51287);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51302;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51312 = state_51287;
state_51287 = G__51312;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_51287){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_51287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_51304 = f__5694__auto__.call(null);(statearr_51304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_51304;
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
return (function (state_51374){var state_val_51375 = (state_51374[(1)]);if((state_val_51375 === (7)))
{var inst_51355 = (state_51374[(7)]);var inst_51360 = (state_51374[(2)]);var inst_51361 = cljs.core.next.call(null,inst_51355);var inst_51355__$1 = inst_51361;var state_51374__$1 = (function (){var statearr_51376 = state_51374;(statearr_51376[(8)] = inst_51360);
(statearr_51376[(7)] = inst_51355__$1);
return statearr_51376;
})();var statearr_51377_51395 = state_51374__$1;(statearr_51377_51395[(2)] = null);
(statearr_51377_51395[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51375 === (1)))
{var inst_51354 = cljs.core.seq.call(null,coll);var inst_51355 = inst_51354;var state_51374__$1 = (function (){var statearr_51378 = state_51374;(statearr_51378[(7)] = inst_51355);
return statearr_51378;
})();var statearr_51379_51396 = state_51374__$1;(statearr_51379_51396[(2)] = null);
(statearr_51379_51396[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51375 === (4)))
{var inst_51355 = (state_51374[(7)]);var inst_51358 = cljs.core.first.call(null,inst_51355);var state_51374__$1 = state_51374;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51374__$1,(7),ch,inst_51358);
} else
{if((state_val_51375 === (6)))
{var inst_51370 = (state_51374[(2)]);var state_51374__$1 = state_51374;var statearr_51380_51397 = state_51374__$1;(statearr_51380_51397[(2)] = inst_51370);
(statearr_51380_51397[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51375 === (3)))
{var inst_51372 = (state_51374[(2)]);var state_51374__$1 = state_51374;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51374__$1,inst_51372);
} else
{if((state_val_51375 === (2)))
{var inst_51355 = (state_51374[(7)]);var state_51374__$1 = state_51374;if(cljs.core.truth_(inst_51355))
{var statearr_51381_51398 = state_51374__$1;(statearr_51381_51398[(1)] = (4));
} else
{var statearr_51382_51399 = state_51374__$1;(statearr_51382_51399[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51375 === (9)))
{var state_51374__$1 = state_51374;var statearr_51383_51400 = state_51374__$1;(statearr_51383_51400[(2)] = null);
(statearr_51383_51400[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51375 === (5)))
{var state_51374__$1 = state_51374;if(cljs.core.truth_(close_QMARK_))
{var statearr_51384_51401 = state_51374__$1;(statearr_51384_51401[(1)] = (8));
} else
{var statearr_51385_51402 = state_51374__$1;(statearr_51385_51402[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51375 === (10)))
{var inst_51368 = (state_51374[(2)]);var state_51374__$1 = state_51374;var statearr_51386_51403 = state_51374__$1;(statearr_51386_51403[(2)] = inst_51368);
(statearr_51386_51403[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51375 === (8)))
{var inst_51365 = cljs.core.async.close_BANG_.call(null,ch);var state_51374__$1 = state_51374;var statearr_51387_51404 = state_51374__$1;(statearr_51387_51404[(2)] = inst_51365);
(statearr_51387_51404[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_51391 = [null,null,null,null,null,null,null,null,null];(statearr_51391[(0)] = state_machine__5679__auto__);
(statearr_51391[(1)] = (1));
return statearr_51391;
});
var state_machine__5679__auto____1 = (function (state_51374){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_51374);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51392){if((e51392 instanceof Object))
{var ex__5682__auto__ = e51392;var statearr_51393_51405 = state_51374;(statearr_51393_51405[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51374);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51392;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51406 = state_51374;
state_51374 = G__51406;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_51374){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_51374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_51394 = f__5694__auto__.call(null);(statearr_51394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_51394;
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
cljs.core.async.Mux = (function (){var obj51408 = {};return obj51408;
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
cljs.core.async.Mult = (function (){var obj51410 = {};return obj51410;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t51634 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t51634 = (function (cs,ch,mult,meta51635){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta51635 = meta51635;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51634.cljs$lang$type = true;
cljs.core.async.t51634.cljs$lang$ctorStr = "cljs.core.async/t51634";
cljs.core.async.t51634.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t51634");
});})(cs))
;
cljs.core.async.t51634.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t51634.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t51634.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t51634.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t51634.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t51634.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t51634.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_51636){var self__ = this;
var _51636__$1 = this;return self__.meta51635;
});})(cs))
;
cljs.core.async.t51634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_51636,meta51635__$1){var self__ = this;
var _51636__$1 = this;return (new cljs.core.async.t51634(self__.cs,self__.ch,self__.mult,meta51635__$1));
});})(cs))
;
cljs.core.async.__GT_t51634 = ((function (cs){
return (function __GT_t51634(cs__$1,ch__$1,mult__$1,meta51635){return (new cljs.core.async.t51634(cs__$1,ch__$1,mult__$1,meta51635));
});})(cs))
;
}
return (new cljs.core.async.t51634(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___51857 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___51857,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___51857,cs,m,dchan,dctr,done){
return (function (state_51771){var state_val_51772 = (state_51771[(1)]);if((state_val_51772 === (7)))
{var inst_51767 = (state_51771[(2)]);var state_51771__$1 = state_51771;var statearr_51773_51858 = state_51771__$1;(statearr_51773_51858[(2)] = inst_51767);
(statearr_51773_51858[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (20)))
{var inst_51668 = (state_51771[(7)]);var inst_51678 = cljs.core.first.call(null,inst_51668);var inst_51679 = cljs.core.nth.call(null,inst_51678,(0),null);var inst_51680 = cljs.core.nth.call(null,inst_51678,(1),null);var state_51771__$1 = (function (){var statearr_51774 = state_51771;(statearr_51774[(8)] = inst_51679);
return statearr_51774;
})();if(cljs.core.truth_(inst_51680))
{var statearr_51775_51859 = state_51771__$1;(statearr_51775_51859[(1)] = (22));
} else
{var statearr_51776_51860 = state_51771__$1;(statearr_51776_51860[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (27)))
{var inst_51710 = (state_51771[(9)]);var inst_51708 = (state_51771[(10)]);var inst_51715 = cljs.core._nth.call(null,inst_51708,inst_51710);var state_51771__$1 = (function (){var statearr_51777 = state_51771;(statearr_51777[(11)] = inst_51715);
return statearr_51777;
})();var statearr_51778_51861 = state_51771__$1;(statearr_51778_51861[(2)] = null);
(statearr_51778_51861[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (1)))
{var state_51771__$1 = state_51771;var statearr_51779_51862 = state_51771__$1;(statearr_51779_51862[(2)] = null);
(statearr_51779_51862[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (24)))
{var inst_51668 = (state_51771[(7)]);var inst_51685 = (state_51771[(2)]);var inst_51686 = cljs.core.next.call(null,inst_51668);var inst_51648 = inst_51686;var inst_51649 = null;var inst_51650 = (0);var inst_51651 = (0);var state_51771__$1 = (function (){var statearr_51780 = state_51771;(statearr_51780[(12)] = inst_51651);
(statearr_51780[(13)] = inst_51648);
(statearr_51780[(14)] = inst_51649);
(statearr_51780[(15)] = inst_51650);
(statearr_51780[(16)] = inst_51685);
return statearr_51780;
})();var statearr_51781_51863 = state_51771__$1;(statearr_51781_51863[(2)] = null);
(statearr_51781_51863[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (39)))
{var inst_51728 = (state_51771[(17)]);var inst_51746 = (state_51771[(2)]);var inst_51747 = cljs.core.next.call(null,inst_51728);var inst_51707 = inst_51747;var inst_51708 = null;var inst_51709 = (0);var inst_51710 = (0);var state_51771__$1 = (function (){var statearr_51785 = state_51771;(statearr_51785[(18)] = inst_51709);
(statearr_51785[(9)] = inst_51710);
(statearr_51785[(10)] = inst_51708);
(statearr_51785[(19)] = inst_51707);
(statearr_51785[(20)] = inst_51746);
return statearr_51785;
})();var statearr_51786_51864 = state_51771__$1;(statearr_51786_51864[(2)] = null);
(statearr_51786_51864[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (4)))
{var inst_51639 = (state_51771[(21)]);var inst_51639__$1 = (state_51771[(2)]);var inst_51640 = (inst_51639__$1 == null);var state_51771__$1 = (function (){var statearr_51787 = state_51771;(statearr_51787[(21)] = inst_51639__$1);
return statearr_51787;
})();if(cljs.core.truth_(inst_51640))
{var statearr_51788_51865 = state_51771__$1;(statearr_51788_51865[(1)] = (5));
} else
{var statearr_51789_51866 = state_51771__$1;(statearr_51789_51866[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (15)))
{var inst_51651 = (state_51771[(12)]);var inst_51648 = (state_51771[(13)]);var inst_51649 = (state_51771[(14)]);var inst_51650 = (state_51771[(15)]);var inst_51664 = (state_51771[(2)]);var inst_51665 = (inst_51651 + (1));var tmp51782 = inst_51648;var tmp51783 = inst_51649;var tmp51784 = inst_51650;var inst_51648__$1 = tmp51782;var inst_51649__$1 = tmp51783;var inst_51650__$1 = tmp51784;var inst_51651__$1 = inst_51665;var state_51771__$1 = (function (){var statearr_51790 = state_51771;(statearr_51790[(12)] = inst_51651__$1);
(statearr_51790[(22)] = inst_51664);
(statearr_51790[(13)] = inst_51648__$1);
(statearr_51790[(14)] = inst_51649__$1);
(statearr_51790[(15)] = inst_51650__$1);
return statearr_51790;
})();var statearr_51791_51867 = state_51771__$1;(statearr_51791_51867[(2)] = null);
(statearr_51791_51867[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (21)))
{var inst_51689 = (state_51771[(2)]);var state_51771__$1 = state_51771;var statearr_51792_51868 = state_51771__$1;(statearr_51792_51868[(2)] = inst_51689);
(statearr_51792_51868[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (31)))
{var inst_51715 = (state_51771[(11)]);var inst_51716 = (state_51771[(2)]);var inst_51717 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_51718 = cljs.core.async.untap_STAR_.call(null,m,inst_51715);var state_51771__$1 = (function (){var statearr_51793 = state_51771;(statearr_51793[(23)] = inst_51716);
(statearr_51793[(24)] = inst_51717);
return statearr_51793;
})();var statearr_51794_51869 = state_51771__$1;(statearr_51794_51869[(2)] = inst_51718);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51771__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (32)))
{var inst_51639 = (state_51771[(21)]);var inst_51715 = (state_51771[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_51771,(31),Object,null,(30));var inst_51722 = cljs.core.async.put_BANG_.call(null,inst_51715,inst_51639,done);var state_51771__$1 = state_51771;var statearr_51795_51870 = state_51771__$1;(statearr_51795_51870[(2)] = inst_51722);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51771__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (40)))
{var inst_51737 = (state_51771[(25)]);var inst_51738 = (state_51771[(2)]);var inst_51739 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_51740 = cljs.core.async.untap_STAR_.call(null,m,inst_51737);var state_51771__$1 = (function (){var statearr_51796 = state_51771;(statearr_51796[(26)] = inst_51738);
(statearr_51796[(27)] = inst_51739);
return statearr_51796;
})();var statearr_51797_51871 = state_51771__$1;(statearr_51797_51871[(2)] = inst_51740);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51771__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (33)))
{var inst_51728 = (state_51771[(17)]);var inst_51730 = cljs.core.chunked_seq_QMARK_.call(null,inst_51728);var state_51771__$1 = state_51771;if(inst_51730)
{var statearr_51798_51872 = state_51771__$1;(statearr_51798_51872[(1)] = (36));
} else
{var statearr_51799_51873 = state_51771__$1;(statearr_51799_51873[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (13)))
{var inst_51658 = (state_51771[(28)]);var inst_51661 = cljs.core.async.close_BANG_.call(null,inst_51658);var state_51771__$1 = state_51771;var statearr_51800_51874 = state_51771__$1;(statearr_51800_51874[(2)] = inst_51661);
(statearr_51800_51874[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (22)))
{var inst_51679 = (state_51771[(8)]);var inst_51682 = cljs.core.async.close_BANG_.call(null,inst_51679);var state_51771__$1 = state_51771;var statearr_51801_51875 = state_51771__$1;(statearr_51801_51875[(2)] = inst_51682);
(statearr_51801_51875[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (36)))
{var inst_51728 = (state_51771[(17)]);var inst_51732 = cljs.core.chunk_first.call(null,inst_51728);var inst_51733 = cljs.core.chunk_rest.call(null,inst_51728);var inst_51734 = cljs.core.count.call(null,inst_51732);var inst_51707 = inst_51733;var inst_51708 = inst_51732;var inst_51709 = inst_51734;var inst_51710 = (0);var state_51771__$1 = (function (){var statearr_51802 = state_51771;(statearr_51802[(18)] = inst_51709);
(statearr_51802[(9)] = inst_51710);
(statearr_51802[(10)] = inst_51708);
(statearr_51802[(19)] = inst_51707);
return statearr_51802;
})();var statearr_51803_51876 = state_51771__$1;(statearr_51803_51876[(2)] = null);
(statearr_51803_51876[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (41)))
{var inst_51639 = (state_51771[(21)]);var inst_51737 = (state_51771[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_51771,(40),Object,null,(39));var inst_51744 = cljs.core.async.put_BANG_.call(null,inst_51737,inst_51639,done);var state_51771__$1 = state_51771;var statearr_51804_51877 = state_51771__$1;(statearr_51804_51877[(2)] = inst_51744);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51771__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (43)))
{var state_51771__$1 = state_51771;var statearr_51805_51878 = state_51771__$1;(statearr_51805_51878[(2)] = null);
(statearr_51805_51878[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (29)))
{var inst_51755 = (state_51771[(2)]);var state_51771__$1 = state_51771;var statearr_51806_51879 = state_51771__$1;(statearr_51806_51879[(2)] = inst_51755);
(statearr_51806_51879[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (44)))
{var inst_51764 = (state_51771[(2)]);var state_51771__$1 = (function (){var statearr_51807 = state_51771;(statearr_51807[(29)] = inst_51764);
return statearr_51807;
})();var statearr_51808_51880 = state_51771__$1;(statearr_51808_51880[(2)] = null);
(statearr_51808_51880[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (6)))
{var inst_51699 = (state_51771[(30)]);var inst_51698 = cljs.core.deref.call(null,cs);var inst_51699__$1 = cljs.core.keys.call(null,inst_51698);var inst_51700 = cljs.core.count.call(null,inst_51699__$1);var inst_51701 = cljs.core.reset_BANG_.call(null,dctr,inst_51700);var inst_51706 = cljs.core.seq.call(null,inst_51699__$1);var inst_51707 = inst_51706;var inst_51708 = null;var inst_51709 = (0);var inst_51710 = (0);var state_51771__$1 = (function (){var statearr_51809 = state_51771;(statearr_51809[(18)] = inst_51709);
(statearr_51809[(9)] = inst_51710);
(statearr_51809[(10)] = inst_51708);
(statearr_51809[(31)] = inst_51701);
(statearr_51809[(19)] = inst_51707);
(statearr_51809[(30)] = inst_51699__$1);
return statearr_51809;
})();var statearr_51810_51881 = state_51771__$1;(statearr_51810_51881[(2)] = null);
(statearr_51810_51881[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (28)))
{var inst_51728 = (state_51771[(17)]);var inst_51707 = (state_51771[(19)]);var inst_51728__$1 = cljs.core.seq.call(null,inst_51707);var state_51771__$1 = (function (){var statearr_51811 = state_51771;(statearr_51811[(17)] = inst_51728__$1);
return statearr_51811;
})();if(inst_51728__$1)
{var statearr_51812_51882 = state_51771__$1;(statearr_51812_51882[(1)] = (33));
} else
{var statearr_51813_51883 = state_51771__$1;(statearr_51813_51883[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (25)))
{var inst_51709 = (state_51771[(18)]);var inst_51710 = (state_51771[(9)]);var inst_51712 = (inst_51710 < inst_51709);var inst_51713 = inst_51712;var state_51771__$1 = state_51771;if(cljs.core.truth_(inst_51713))
{var statearr_51814_51884 = state_51771__$1;(statearr_51814_51884[(1)] = (27));
} else
{var statearr_51815_51885 = state_51771__$1;(statearr_51815_51885[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (34)))
{var state_51771__$1 = state_51771;var statearr_51816_51886 = state_51771__$1;(statearr_51816_51886[(2)] = null);
(statearr_51816_51886[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (17)))
{var state_51771__$1 = state_51771;var statearr_51817_51887 = state_51771__$1;(statearr_51817_51887[(2)] = null);
(statearr_51817_51887[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (3)))
{var inst_51769 = (state_51771[(2)]);var state_51771__$1 = state_51771;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51771__$1,inst_51769);
} else
{if((state_val_51772 === (12)))
{var inst_51694 = (state_51771[(2)]);var state_51771__$1 = state_51771;var statearr_51818_51888 = state_51771__$1;(statearr_51818_51888[(2)] = inst_51694);
(statearr_51818_51888[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (2)))
{var state_51771__$1 = state_51771;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51771__$1,(4),ch);
} else
{if((state_val_51772 === (23)))
{var state_51771__$1 = state_51771;var statearr_51819_51889 = state_51771__$1;(statearr_51819_51889[(2)] = null);
(statearr_51819_51889[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (35)))
{var inst_51753 = (state_51771[(2)]);var state_51771__$1 = state_51771;var statearr_51820_51890 = state_51771__$1;(statearr_51820_51890[(2)] = inst_51753);
(statearr_51820_51890[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (19)))
{var inst_51668 = (state_51771[(7)]);var inst_51672 = cljs.core.chunk_first.call(null,inst_51668);var inst_51673 = cljs.core.chunk_rest.call(null,inst_51668);var inst_51674 = cljs.core.count.call(null,inst_51672);var inst_51648 = inst_51673;var inst_51649 = inst_51672;var inst_51650 = inst_51674;var inst_51651 = (0);var state_51771__$1 = (function (){var statearr_51821 = state_51771;(statearr_51821[(12)] = inst_51651);
(statearr_51821[(13)] = inst_51648);
(statearr_51821[(14)] = inst_51649);
(statearr_51821[(15)] = inst_51650);
return statearr_51821;
})();var statearr_51822_51891 = state_51771__$1;(statearr_51822_51891[(2)] = null);
(statearr_51822_51891[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (11)))
{var inst_51648 = (state_51771[(13)]);var inst_51668 = (state_51771[(7)]);var inst_51668__$1 = cljs.core.seq.call(null,inst_51648);var state_51771__$1 = (function (){var statearr_51823 = state_51771;(statearr_51823[(7)] = inst_51668__$1);
return statearr_51823;
})();if(inst_51668__$1)
{var statearr_51824_51892 = state_51771__$1;(statearr_51824_51892[(1)] = (16));
} else
{var statearr_51825_51893 = state_51771__$1;(statearr_51825_51893[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (9)))
{var inst_51696 = (state_51771[(2)]);var state_51771__$1 = state_51771;var statearr_51826_51894 = state_51771__$1;(statearr_51826_51894[(2)] = inst_51696);
(statearr_51826_51894[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (5)))
{var inst_51646 = cljs.core.deref.call(null,cs);var inst_51647 = cljs.core.seq.call(null,inst_51646);var inst_51648 = inst_51647;var inst_51649 = null;var inst_51650 = (0);var inst_51651 = (0);var state_51771__$1 = (function (){var statearr_51827 = state_51771;(statearr_51827[(12)] = inst_51651);
(statearr_51827[(13)] = inst_51648);
(statearr_51827[(14)] = inst_51649);
(statearr_51827[(15)] = inst_51650);
return statearr_51827;
})();var statearr_51828_51895 = state_51771__$1;(statearr_51828_51895[(2)] = null);
(statearr_51828_51895[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (14)))
{var state_51771__$1 = state_51771;var statearr_51829_51896 = state_51771__$1;(statearr_51829_51896[(2)] = null);
(statearr_51829_51896[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (45)))
{var inst_51761 = (state_51771[(2)]);var state_51771__$1 = state_51771;var statearr_51830_51897 = state_51771__$1;(statearr_51830_51897[(2)] = inst_51761);
(statearr_51830_51897[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (26)))
{var inst_51699 = (state_51771[(30)]);var inst_51757 = (state_51771[(2)]);var inst_51758 = cljs.core.seq.call(null,inst_51699);var state_51771__$1 = (function (){var statearr_51831 = state_51771;(statearr_51831[(32)] = inst_51757);
return statearr_51831;
})();if(inst_51758)
{var statearr_51832_51898 = state_51771__$1;(statearr_51832_51898[(1)] = (42));
} else
{var statearr_51833_51899 = state_51771__$1;(statearr_51833_51899[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (16)))
{var inst_51668 = (state_51771[(7)]);var inst_51670 = cljs.core.chunked_seq_QMARK_.call(null,inst_51668);var state_51771__$1 = state_51771;if(inst_51670)
{var statearr_51837_51900 = state_51771__$1;(statearr_51837_51900[(1)] = (19));
} else
{var statearr_51838_51901 = state_51771__$1;(statearr_51838_51901[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (38)))
{var inst_51750 = (state_51771[(2)]);var state_51771__$1 = state_51771;var statearr_51839_51902 = state_51771__$1;(statearr_51839_51902[(2)] = inst_51750);
(statearr_51839_51902[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (30)))
{var inst_51709 = (state_51771[(18)]);var inst_51710 = (state_51771[(9)]);var inst_51708 = (state_51771[(10)]);var inst_51707 = (state_51771[(19)]);var inst_51724 = (state_51771[(2)]);var inst_51725 = (inst_51710 + (1));var tmp51834 = inst_51709;var tmp51835 = inst_51708;var tmp51836 = inst_51707;var inst_51707__$1 = tmp51836;var inst_51708__$1 = tmp51835;var inst_51709__$1 = tmp51834;var inst_51710__$1 = inst_51725;var state_51771__$1 = (function (){var statearr_51840 = state_51771;(statearr_51840[(18)] = inst_51709__$1);
(statearr_51840[(9)] = inst_51710__$1);
(statearr_51840[(10)] = inst_51708__$1);
(statearr_51840[(19)] = inst_51707__$1);
(statearr_51840[(33)] = inst_51724);
return statearr_51840;
})();var statearr_51841_51903 = state_51771__$1;(statearr_51841_51903[(2)] = null);
(statearr_51841_51903[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (10)))
{var inst_51651 = (state_51771[(12)]);var inst_51649 = (state_51771[(14)]);var inst_51657 = cljs.core._nth.call(null,inst_51649,inst_51651);var inst_51658 = cljs.core.nth.call(null,inst_51657,(0),null);var inst_51659 = cljs.core.nth.call(null,inst_51657,(1),null);var state_51771__$1 = (function (){var statearr_51842 = state_51771;(statearr_51842[(28)] = inst_51658);
return statearr_51842;
})();if(cljs.core.truth_(inst_51659))
{var statearr_51843_51904 = state_51771__$1;(statearr_51843_51904[(1)] = (13));
} else
{var statearr_51844_51905 = state_51771__$1;(statearr_51844_51905[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (18)))
{var inst_51692 = (state_51771[(2)]);var state_51771__$1 = state_51771;var statearr_51845_51906 = state_51771__$1;(statearr_51845_51906[(2)] = inst_51692);
(statearr_51845_51906[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (42)))
{var state_51771__$1 = state_51771;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51771__$1,(45),dchan);
} else
{if((state_val_51772 === (37)))
{var inst_51728 = (state_51771[(17)]);var inst_51737 = cljs.core.first.call(null,inst_51728);var state_51771__$1 = (function (){var statearr_51846 = state_51771;(statearr_51846[(25)] = inst_51737);
return statearr_51846;
})();var statearr_51847_51907 = state_51771__$1;(statearr_51847_51907[(2)] = null);
(statearr_51847_51907[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51772 === (8)))
{var inst_51651 = (state_51771[(12)]);var inst_51650 = (state_51771[(15)]);var inst_51653 = (inst_51651 < inst_51650);var inst_51654 = inst_51653;var state_51771__$1 = state_51771;if(cljs.core.truth_(inst_51654))
{var statearr_51848_51908 = state_51771__$1;(statearr_51848_51908[(1)] = (10));
} else
{var statearr_51849_51909 = state_51771__$1;(statearr_51849_51909[(1)] = (11));
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
});})(c__5693__auto___51857,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___51857,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_51853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51853[(0)] = state_machine__5679__auto__);
(statearr_51853[(1)] = (1));
return statearr_51853;
});
var state_machine__5679__auto____1 = (function (state_51771){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_51771);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51854){if((e51854 instanceof Object))
{var ex__5682__auto__ = e51854;var statearr_51855_51910 = state_51771;(statearr_51855_51910[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51771);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51911 = state_51771;
state_51771 = G__51911;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_51771){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_51771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___51857,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_51856 = f__5694__auto__.call(null);(statearr_51856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___51857);
return statearr_51856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___51857,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj51913 = {};return obj51913;
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
;var m = (function (){if(typeof cljs.core.async.t52023 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52023 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta52024){
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
this.meta52024 = meta52024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52023.cljs$lang$type = true;
cljs.core.async.t52023.cljs$lang$ctorStr = "cljs.core.async/t52023";
cljs.core.async.t52023.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t52023");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t52023.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t52023.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t52023.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t52023.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t52023.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t52023.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t52023.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t52023.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t52023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52025){var self__ = this;
var _52025__$1 = this;return self__.meta52024;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t52023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52025,meta52024__$1){var self__ = this;
var _52025__$1 = this;return (new cljs.core.async.t52023(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta52024__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t52023 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t52023(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52024){return (new cljs.core.async.t52023(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52024));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t52023(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___52132 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52132,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52132,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_52090){var state_val_52091 = (state_52090[(1)]);if((state_val_52091 === (7)))
{var inst_52039 = (state_52090[(7)]);var inst_52044 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52039);var state_52090__$1 = state_52090;var statearr_52092_52133 = state_52090__$1;(statearr_52092_52133[(2)] = inst_52044);
(statearr_52092_52133[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (20)))
{var inst_52054 = (state_52090[(8)]);var state_52090__$1 = state_52090;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52090__$1,(23),out,inst_52054);
} else
{if((state_val_52091 === (1)))
{var inst_52029 = (state_52090[(9)]);var inst_52029__$1 = calc_state.call(null);var inst_52030 = cljs.core.seq_QMARK_.call(null,inst_52029__$1);var state_52090__$1 = (function (){var statearr_52093 = state_52090;(statearr_52093[(9)] = inst_52029__$1);
return statearr_52093;
})();if(inst_52030)
{var statearr_52094_52134 = state_52090__$1;(statearr_52094_52134[(1)] = (2));
} else
{var statearr_52095_52135 = state_52090__$1;(statearr_52095_52135[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (4)))
{var inst_52029 = (state_52090[(9)]);var inst_52035 = (state_52090[(2)]);var inst_52036 = cljs.core.get.call(null,inst_52035,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_52037 = cljs.core.get.call(null,inst_52035,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_52038 = cljs.core.get.call(null,inst_52035,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_52039 = inst_52029;var state_52090__$1 = (function (){var statearr_52096 = state_52090;(statearr_52096[(7)] = inst_52039);
(statearr_52096[(10)] = inst_52038);
(statearr_52096[(11)] = inst_52037);
(statearr_52096[(12)] = inst_52036);
return statearr_52096;
})();var statearr_52097_52136 = state_52090__$1;(statearr_52097_52136[(2)] = null);
(statearr_52097_52136[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (15)))
{var state_52090__$1 = state_52090;var statearr_52098_52137 = state_52090__$1;(statearr_52098_52137[(2)] = null);
(statearr_52098_52137[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (21)))
{var state_52090__$1 = state_52090;var statearr_52099_52138 = state_52090__$1;(statearr_52099_52138[(2)] = null);
(statearr_52099_52138[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (13)))
{var inst_52086 = (state_52090[(2)]);var state_52090__$1 = state_52090;var statearr_52100_52139 = state_52090__$1;(statearr_52100_52139[(2)] = inst_52086);
(statearr_52100_52139[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (22)))
{var inst_52047 = (state_52090[(13)]);var inst_52083 = (state_52090[(2)]);var inst_52039 = inst_52047;var state_52090__$1 = (function (){var statearr_52101 = state_52090;(statearr_52101[(7)] = inst_52039);
(statearr_52101[(14)] = inst_52083);
return statearr_52101;
})();var statearr_52102_52140 = state_52090__$1;(statearr_52102_52140[(2)] = null);
(statearr_52102_52140[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (6)))
{var inst_52088 = (state_52090[(2)]);var state_52090__$1 = state_52090;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52090__$1,inst_52088);
} else
{if((state_val_52091 === (17)))
{var inst_52069 = (state_52090[(15)]);var state_52090__$1 = state_52090;var statearr_52103_52141 = state_52090__$1;(statearr_52103_52141[(2)] = inst_52069);
(statearr_52103_52141[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (3)))
{var inst_52029 = (state_52090[(9)]);var state_52090__$1 = state_52090;var statearr_52104_52142 = state_52090__$1;(statearr_52104_52142[(2)] = inst_52029);
(statearr_52104_52142[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (12)))
{var inst_52050 = (state_52090[(16)]);var inst_52055 = (state_52090[(17)]);var inst_52069 = (state_52090[(15)]);var inst_52069__$1 = inst_52050.call(null,inst_52055);var state_52090__$1 = (function (){var statearr_52105 = state_52090;(statearr_52105[(15)] = inst_52069__$1);
return statearr_52105;
})();if(cljs.core.truth_(inst_52069__$1))
{var statearr_52106_52143 = state_52090__$1;(statearr_52106_52143[(1)] = (17));
} else
{var statearr_52107_52144 = state_52090__$1;(statearr_52107_52144[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (2)))
{var inst_52029 = (state_52090[(9)]);var inst_52032 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52029);var state_52090__$1 = state_52090;var statearr_52108_52145 = state_52090__$1;(statearr_52108_52145[(2)] = inst_52032);
(statearr_52108_52145[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (23)))
{var inst_52080 = (state_52090[(2)]);var state_52090__$1 = state_52090;var statearr_52109_52146 = state_52090__$1;(statearr_52109_52146[(2)] = inst_52080);
(statearr_52109_52146[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (19)))
{var inst_52077 = (state_52090[(2)]);var state_52090__$1 = state_52090;if(cljs.core.truth_(inst_52077))
{var statearr_52110_52147 = state_52090__$1;(statearr_52110_52147[(1)] = (20));
} else
{var statearr_52111_52148 = state_52090__$1;(statearr_52111_52148[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (11)))
{var inst_52054 = (state_52090[(8)]);var inst_52060 = (inst_52054 == null);var state_52090__$1 = state_52090;if(cljs.core.truth_(inst_52060))
{var statearr_52112_52149 = state_52090__$1;(statearr_52112_52149[(1)] = (14));
} else
{var statearr_52113_52150 = state_52090__$1;(statearr_52113_52150[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (9)))
{var inst_52047 = (state_52090[(13)]);var inst_52047__$1 = (state_52090[(2)]);var inst_52048 = cljs.core.get.call(null,inst_52047__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_52049 = cljs.core.get.call(null,inst_52047__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_52050 = cljs.core.get.call(null,inst_52047__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_52090__$1 = (function (){var statearr_52114 = state_52090;(statearr_52114[(16)] = inst_52050);
(statearr_52114[(18)] = inst_52049);
(statearr_52114[(13)] = inst_52047__$1);
return statearr_52114;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_52090__$1,(10),inst_52048);
} else
{if((state_val_52091 === (5)))
{var inst_52039 = (state_52090[(7)]);var inst_52042 = cljs.core.seq_QMARK_.call(null,inst_52039);var state_52090__$1 = state_52090;if(inst_52042)
{var statearr_52115_52151 = state_52090__$1;(statearr_52115_52151[(1)] = (7));
} else
{var statearr_52116_52152 = state_52090__$1;(statearr_52116_52152[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (14)))
{var inst_52055 = (state_52090[(17)]);var inst_52062 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_52055);var state_52090__$1 = state_52090;var statearr_52117_52153 = state_52090__$1;(statearr_52117_52153[(2)] = inst_52062);
(statearr_52117_52153[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (16)))
{var inst_52065 = (state_52090[(2)]);var inst_52066 = calc_state.call(null);var inst_52039 = inst_52066;var state_52090__$1 = (function (){var statearr_52118 = state_52090;(statearr_52118[(7)] = inst_52039);
(statearr_52118[(19)] = inst_52065);
return statearr_52118;
})();var statearr_52119_52154 = state_52090__$1;(statearr_52119_52154[(2)] = null);
(statearr_52119_52154[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (10)))
{var inst_52055 = (state_52090[(17)]);var inst_52054 = (state_52090[(8)]);var inst_52053 = (state_52090[(2)]);var inst_52054__$1 = cljs.core.nth.call(null,inst_52053,(0),null);var inst_52055__$1 = cljs.core.nth.call(null,inst_52053,(1),null);var inst_52056 = (inst_52054__$1 == null);var inst_52057 = cljs.core._EQ_.call(null,inst_52055__$1,change);var inst_52058 = (inst_52056) || (inst_52057);var state_52090__$1 = (function (){var statearr_52120 = state_52090;(statearr_52120[(17)] = inst_52055__$1);
(statearr_52120[(8)] = inst_52054__$1);
return statearr_52120;
})();if(cljs.core.truth_(inst_52058))
{var statearr_52121_52155 = state_52090__$1;(statearr_52121_52155[(1)] = (11));
} else
{var statearr_52122_52156 = state_52090__$1;(statearr_52122_52156[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (18)))
{var inst_52050 = (state_52090[(16)]);var inst_52055 = (state_52090[(17)]);var inst_52049 = (state_52090[(18)]);var inst_52072 = cljs.core.empty_QMARK_.call(null,inst_52050);var inst_52073 = inst_52049.call(null,inst_52055);var inst_52074 = cljs.core.not.call(null,inst_52073);var inst_52075 = (inst_52072) && (inst_52074);var state_52090__$1 = state_52090;var statearr_52123_52157 = state_52090__$1;(statearr_52123_52157[(2)] = inst_52075);
(statearr_52123_52157[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52091 === (8)))
{var inst_52039 = (state_52090[(7)]);var state_52090__$1 = state_52090;var statearr_52124_52158 = state_52090__$1;(statearr_52124_52158[(2)] = inst_52039);
(statearr_52124_52158[(1)] = (9));
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
});})(c__5693__auto___52132,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___52132,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52128[(0)] = state_machine__5679__auto__);
(statearr_52128[(1)] = (1));
return statearr_52128;
});
var state_machine__5679__auto____1 = (function (state_52090){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52090);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52129){if((e52129 instanceof Object))
{var ex__5682__auto__ = e52129;var statearr_52130_52159 = state_52090;(statearr_52130_52159[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52090);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52129;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52160 = state_52090;
state_52090 = G__52160;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52090){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52132,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_52131 = f__5694__auto__.call(null);(statearr_52131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52132);
return statearr_52131;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52132,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj52162 = {};return obj52162;
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
return (function (p1__52163_SHARP_){if(cljs.core.truth_(p1__52163_SHARP_.call(null,topic)))
{return p1__52163_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__52163_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t52288 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52288 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta52289){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta52289 = meta52289;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52288.cljs$lang$type = true;
cljs.core.async.t52288.cljs$lang$ctorStr = "cljs.core.async/t52288";
cljs.core.async.t52288.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t52288");
});})(mults,ensure_mult))
;
cljs.core.async.t52288.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t52288.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t52288.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t52288.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t52288.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t52288.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t52288.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t52288.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_52290){var self__ = this;
var _52290__$1 = this;return self__.meta52289;
});})(mults,ensure_mult))
;
cljs.core.async.t52288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_52290,meta52289__$1){var self__ = this;
var _52290__$1 = this;return (new cljs.core.async.t52288(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta52289__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t52288 = ((function (mults,ensure_mult){
return (function __GT_t52288(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta52289){return (new cljs.core.async.t52288(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta52289));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t52288(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___52412 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52412,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52412,mults,ensure_mult,p){
return (function (state_52364){var state_val_52365 = (state_52364[(1)]);if((state_val_52365 === (7)))
{var inst_52360 = (state_52364[(2)]);var state_52364__$1 = state_52364;var statearr_52366_52413 = state_52364__$1;(statearr_52366_52413[(2)] = inst_52360);
(statearr_52366_52413[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (20)))
{var state_52364__$1 = state_52364;var statearr_52367_52414 = state_52364__$1;(statearr_52367_52414[(2)] = null);
(statearr_52367_52414[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (1)))
{var state_52364__$1 = state_52364;var statearr_52368_52415 = state_52364__$1;(statearr_52368_52415[(2)] = null);
(statearr_52368_52415[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (24)))
{var inst_52293 = (state_52364[(7)]);var inst_52343 = (state_52364[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_52364,(23),Object,null,(22));var inst_52350 = cljs.core.async.muxch_STAR_.call(null,inst_52343);var state_52364__$1 = state_52364;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52364__$1,(25),inst_52350,inst_52293);
} else
{if((state_val_52365 === (4)))
{var inst_52293 = (state_52364[(7)]);var inst_52293__$1 = (state_52364[(2)]);var inst_52294 = (inst_52293__$1 == null);var state_52364__$1 = (function (){var statearr_52369 = state_52364;(statearr_52369[(7)] = inst_52293__$1);
return statearr_52369;
})();if(cljs.core.truth_(inst_52294))
{var statearr_52370_52416 = state_52364__$1;(statearr_52370_52416[(1)] = (5));
} else
{var statearr_52371_52417 = state_52364__$1;(statearr_52371_52417[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (15)))
{var inst_52335 = (state_52364[(2)]);var state_52364__$1 = state_52364;var statearr_52372_52418 = state_52364__$1;(statearr_52372_52418[(2)] = inst_52335);
(statearr_52372_52418[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (21)))
{var inst_52357 = (state_52364[(2)]);var state_52364__$1 = (function (){var statearr_52373 = state_52364;(statearr_52373[(9)] = inst_52357);
return statearr_52373;
})();var statearr_52374_52419 = state_52364__$1;(statearr_52374_52419[(2)] = null);
(statearr_52374_52419[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (13)))
{var inst_52317 = (state_52364[(10)]);var inst_52319 = cljs.core.chunked_seq_QMARK_.call(null,inst_52317);var state_52364__$1 = state_52364;if(inst_52319)
{var statearr_52375_52420 = state_52364__$1;(statearr_52375_52420[(1)] = (16));
} else
{var statearr_52376_52421 = state_52364__$1;(statearr_52376_52421[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (22)))
{var inst_52354 = (state_52364[(2)]);var state_52364__$1 = state_52364;var statearr_52377_52422 = state_52364__$1;(statearr_52377_52422[(2)] = inst_52354);
(statearr_52377_52422[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (6)))
{var inst_52293 = (state_52364[(7)]);var inst_52343 = (state_52364[(8)]);var inst_52341 = (state_52364[(11)]);var inst_52341__$1 = topic_fn.call(null,inst_52293);var inst_52342 = cljs.core.deref.call(null,mults);var inst_52343__$1 = cljs.core.get.call(null,inst_52342,inst_52341__$1);var state_52364__$1 = (function (){var statearr_52378 = state_52364;(statearr_52378[(8)] = inst_52343__$1);
(statearr_52378[(11)] = inst_52341__$1);
return statearr_52378;
})();if(cljs.core.truth_(inst_52343__$1))
{var statearr_52379_52423 = state_52364__$1;(statearr_52379_52423[(1)] = (19));
} else
{var statearr_52380_52424 = state_52364__$1;(statearr_52380_52424[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (25)))
{var inst_52352 = (state_52364[(2)]);var state_52364__$1 = state_52364;var statearr_52381_52425 = state_52364__$1;(statearr_52381_52425[(2)] = inst_52352);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52364__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (17)))
{var inst_52317 = (state_52364[(10)]);var inst_52326 = cljs.core.first.call(null,inst_52317);var inst_52327 = cljs.core.async.muxch_STAR_.call(null,inst_52326);var inst_52328 = cljs.core.async.close_BANG_.call(null,inst_52327);var inst_52329 = cljs.core.next.call(null,inst_52317);var inst_52303 = inst_52329;var inst_52304 = null;var inst_52305 = (0);var inst_52306 = (0);var state_52364__$1 = (function (){var statearr_52382 = state_52364;(statearr_52382[(12)] = inst_52304);
(statearr_52382[(13)] = inst_52305);
(statearr_52382[(14)] = inst_52328);
(statearr_52382[(15)] = inst_52303);
(statearr_52382[(16)] = inst_52306);
return statearr_52382;
})();var statearr_52383_52426 = state_52364__$1;(statearr_52383_52426[(2)] = null);
(statearr_52383_52426[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (3)))
{var inst_52362 = (state_52364[(2)]);var state_52364__$1 = state_52364;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52364__$1,inst_52362);
} else
{if((state_val_52365 === (12)))
{var inst_52337 = (state_52364[(2)]);var state_52364__$1 = state_52364;var statearr_52384_52427 = state_52364__$1;(statearr_52384_52427[(2)] = inst_52337);
(statearr_52384_52427[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (2)))
{var state_52364__$1 = state_52364;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52364__$1,(4),ch);
} else
{if((state_val_52365 === (23)))
{var inst_52341 = (state_52364[(11)]);var inst_52345 = (state_52364[(2)]);var inst_52346 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_52341);var state_52364__$1 = (function (){var statearr_52385 = state_52364;(statearr_52385[(17)] = inst_52345);
return statearr_52385;
})();var statearr_52386_52428 = state_52364__$1;(statearr_52386_52428[(2)] = inst_52346);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52364__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (19)))
{var state_52364__$1 = state_52364;var statearr_52387_52429 = state_52364__$1;(statearr_52387_52429[(2)] = null);
(statearr_52387_52429[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (11)))
{var inst_52303 = (state_52364[(15)]);var inst_52317 = (state_52364[(10)]);var inst_52317__$1 = cljs.core.seq.call(null,inst_52303);var state_52364__$1 = (function (){var statearr_52388 = state_52364;(statearr_52388[(10)] = inst_52317__$1);
return statearr_52388;
})();if(inst_52317__$1)
{var statearr_52389_52430 = state_52364__$1;(statearr_52389_52430[(1)] = (13));
} else
{var statearr_52390_52431 = state_52364__$1;(statearr_52390_52431[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (9)))
{var inst_52339 = (state_52364[(2)]);var state_52364__$1 = state_52364;var statearr_52391_52432 = state_52364__$1;(statearr_52391_52432[(2)] = inst_52339);
(statearr_52391_52432[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (5)))
{var inst_52300 = cljs.core.deref.call(null,mults);var inst_52301 = cljs.core.vals.call(null,inst_52300);var inst_52302 = cljs.core.seq.call(null,inst_52301);var inst_52303 = inst_52302;var inst_52304 = null;var inst_52305 = (0);var inst_52306 = (0);var state_52364__$1 = (function (){var statearr_52392 = state_52364;(statearr_52392[(12)] = inst_52304);
(statearr_52392[(13)] = inst_52305);
(statearr_52392[(15)] = inst_52303);
(statearr_52392[(16)] = inst_52306);
return statearr_52392;
})();var statearr_52393_52433 = state_52364__$1;(statearr_52393_52433[(2)] = null);
(statearr_52393_52433[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (14)))
{var state_52364__$1 = state_52364;var statearr_52397_52434 = state_52364__$1;(statearr_52397_52434[(2)] = null);
(statearr_52397_52434[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (16)))
{var inst_52317 = (state_52364[(10)]);var inst_52321 = cljs.core.chunk_first.call(null,inst_52317);var inst_52322 = cljs.core.chunk_rest.call(null,inst_52317);var inst_52323 = cljs.core.count.call(null,inst_52321);var inst_52303 = inst_52322;var inst_52304 = inst_52321;var inst_52305 = inst_52323;var inst_52306 = (0);var state_52364__$1 = (function (){var statearr_52398 = state_52364;(statearr_52398[(12)] = inst_52304);
(statearr_52398[(13)] = inst_52305);
(statearr_52398[(15)] = inst_52303);
(statearr_52398[(16)] = inst_52306);
return statearr_52398;
})();var statearr_52399_52435 = state_52364__$1;(statearr_52399_52435[(2)] = null);
(statearr_52399_52435[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (10)))
{var inst_52304 = (state_52364[(12)]);var inst_52305 = (state_52364[(13)]);var inst_52303 = (state_52364[(15)]);var inst_52306 = (state_52364[(16)]);var inst_52311 = cljs.core._nth.call(null,inst_52304,inst_52306);var inst_52312 = cljs.core.async.muxch_STAR_.call(null,inst_52311);var inst_52313 = cljs.core.async.close_BANG_.call(null,inst_52312);var inst_52314 = (inst_52306 + (1));var tmp52394 = inst_52304;var tmp52395 = inst_52305;var tmp52396 = inst_52303;var inst_52303__$1 = tmp52396;var inst_52304__$1 = tmp52394;var inst_52305__$1 = tmp52395;var inst_52306__$1 = inst_52314;var state_52364__$1 = (function (){var statearr_52400 = state_52364;(statearr_52400[(12)] = inst_52304__$1);
(statearr_52400[(13)] = inst_52305__$1);
(statearr_52400[(15)] = inst_52303__$1);
(statearr_52400[(18)] = inst_52313);
(statearr_52400[(16)] = inst_52306__$1);
return statearr_52400;
})();var statearr_52401_52436 = state_52364__$1;(statearr_52401_52436[(2)] = null);
(statearr_52401_52436[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (18)))
{var inst_52332 = (state_52364[(2)]);var state_52364__$1 = state_52364;var statearr_52402_52437 = state_52364__$1;(statearr_52402_52437[(2)] = inst_52332);
(statearr_52402_52437[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52365 === (8)))
{var inst_52305 = (state_52364[(13)]);var inst_52306 = (state_52364[(16)]);var inst_52308 = (inst_52306 < inst_52305);var inst_52309 = inst_52308;var state_52364__$1 = state_52364;if(cljs.core.truth_(inst_52309))
{var statearr_52403_52438 = state_52364__$1;(statearr_52403_52438[(1)] = (10));
} else
{var statearr_52404_52439 = state_52364__$1;(statearr_52404_52439[(1)] = (11));
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
});})(c__5693__auto___52412,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___52412,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52408[(0)] = state_machine__5679__auto__);
(statearr_52408[(1)] = (1));
return statearr_52408;
});
var state_machine__5679__auto____1 = (function (state_52364){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52364);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52409){if((e52409 instanceof Object))
{var ex__5682__auto__ = e52409;var statearr_52410_52440 = state_52364;(statearr_52410_52440[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52364);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52409;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52441 = state_52364;
state_52364 = G__52441;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52364){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52412,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_52411 = f__5694__auto__.call(null);(statearr_52411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52412);
return statearr_52411;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52412,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___52578 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52578,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52578,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_52548){var state_val_52549 = (state_52548[(1)]);if((state_val_52549 === (7)))
{var state_52548__$1 = state_52548;var statearr_52550_52579 = state_52548__$1;(statearr_52550_52579[(2)] = null);
(statearr_52550_52579[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52549 === (1)))
{var state_52548__$1 = state_52548;var statearr_52551_52580 = state_52548__$1;(statearr_52551_52580[(2)] = null);
(statearr_52551_52580[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52549 === (4)))
{var inst_52512 = (state_52548[(7)]);var inst_52514 = (inst_52512 < cnt);var state_52548__$1 = state_52548;if(cljs.core.truth_(inst_52514))
{var statearr_52552_52581 = state_52548__$1;(statearr_52552_52581[(1)] = (6));
} else
{var statearr_52553_52582 = state_52548__$1;(statearr_52553_52582[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52549 === (15)))
{var inst_52544 = (state_52548[(2)]);var state_52548__$1 = state_52548;var statearr_52554_52583 = state_52548__$1;(statearr_52554_52583[(2)] = inst_52544);
(statearr_52554_52583[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52549 === (13)))
{var inst_52537 = cljs.core.async.close_BANG_.call(null,out);var state_52548__$1 = state_52548;var statearr_52555_52584 = state_52548__$1;(statearr_52555_52584[(2)] = inst_52537);
(statearr_52555_52584[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52549 === (6)))
{var state_52548__$1 = state_52548;var statearr_52556_52585 = state_52548__$1;(statearr_52556_52585[(2)] = null);
(statearr_52556_52585[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52549 === (3)))
{var inst_52546 = (state_52548[(2)]);var state_52548__$1 = state_52548;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52548__$1,inst_52546);
} else
{if((state_val_52549 === (12)))
{var inst_52534 = (state_52548[(8)]);var inst_52534__$1 = (state_52548[(2)]);var inst_52535 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_52534__$1);var state_52548__$1 = (function (){var statearr_52557 = state_52548;(statearr_52557[(8)] = inst_52534__$1);
return statearr_52557;
})();if(cljs.core.truth_(inst_52535))
{var statearr_52558_52586 = state_52548__$1;(statearr_52558_52586[(1)] = (13));
} else
{var statearr_52559_52587 = state_52548__$1;(statearr_52559_52587[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52549 === (2)))
{var inst_52511 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_52512 = (0);var state_52548__$1 = (function (){var statearr_52560 = state_52548;(statearr_52560[(9)] = inst_52511);
(statearr_52560[(7)] = inst_52512);
return statearr_52560;
})();var statearr_52561_52588 = state_52548__$1;(statearr_52561_52588[(2)] = null);
(statearr_52561_52588[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52549 === (11)))
{var inst_52512 = (state_52548[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_52548,(10),Object,null,(9));var inst_52521 = chs__$1.call(null,inst_52512);var inst_52522 = done.call(null,inst_52512);var inst_52523 = cljs.core.async.take_BANG_.call(null,inst_52521,inst_52522);var state_52548__$1 = state_52548;var statearr_52562_52589 = state_52548__$1;(statearr_52562_52589[(2)] = inst_52523);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52548__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52549 === (9)))
{var inst_52512 = (state_52548[(7)]);var inst_52525 = (state_52548[(2)]);var inst_52526 = (inst_52512 + (1));var inst_52512__$1 = inst_52526;var state_52548__$1 = (function (){var statearr_52563 = state_52548;(statearr_52563[(10)] = inst_52525);
(statearr_52563[(7)] = inst_52512__$1);
return statearr_52563;
})();var statearr_52564_52590 = state_52548__$1;(statearr_52564_52590[(2)] = null);
(statearr_52564_52590[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52549 === (5)))
{var inst_52532 = (state_52548[(2)]);var state_52548__$1 = (function (){var statearr_52565 = state_52548;(statearr_52565[(11)] = inst_52532);
return statearr_52565;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52548__$1,(12),dchan);
} else
{if((state_val_52549 === (14)))
{var inst_52534 = (state_52548[(8)]);var inst_52539 = cljs.core.apply.call(null,f,inst_52534);var state_52548__$1 = state_52548;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52548__$1,(16),out,inst_52539);
} else
{if((state_val_52549 === (16)))
{var inst_52541 = (state_52548[(2)]);var state_52548__$1 = (function (){var statearr_52566 = state_52548;(statearr_52566[(12)] = inst_52541);
return statearr_52566;
})();var statearr_52567_52591 = state_52548__$1;(statearr_52567_52591[(2)] = null);
(statearr_52567_52591[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52549 === (10)))
{var inst_52516 = (state_52548[(2)]);var inst_52517 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_52548__$1 = (function (){var statearr_52568 = state_52548;(statearr_52568[(13)] = inst_52516);
return statearr_52568;
})();var statearr_52569_52592 = state_52548__$1;(statearr_52569_52592[(2)] = inst_52517);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52548__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52549 === (8)))
{var inst_52530 = (state_52548[(2)]);var state_52548__$1 = state_52548;var statearr_52570_52593 = state_52548__$1;(statearr_52570_52593[(2)] = inst_52530);
(statearr_52570_52593[(1)] = (5));
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
});})(c__5693__auto___52578,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___52578,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52574[(0)] = state_machine__5679__auto__);
(statearr_52574[(1)] = (1));
return statearr_52574;
});
var state_machine__5679__auto____1 = (function (state_52548){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52548);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52575){if((e52575 instanceof Object))
{var ex__5682__auto__ = e52575;var statearr_52576_52594 = state_52548;(statearr_52576_52594[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52548);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52595 = state_52548;
state_52548 = G__52595;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52548){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52578,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_52577 = f__5694__auto__.call(null);(statearr_52577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52578);
return statearr_52577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52578,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___52703 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52703,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52703,out){
return (function (state_52679){var state_val_52680 = (state_52679[(1)]);if((state_val_52680 === (7)))
{var inst_52659 = (state_52679[(7)]);var inst_52658 = (state_52679[(8)]);var inst_52658__$1 = (state_52679[(2)]);var inst_52659__$1 = cljs.core.nth.call(null,inst_52658__$1,(0),null);var inst_52660 = cljs.core.nth.call(null,inst_52658__$1,(1),null);var inst_52661 = (inst_52659__$1 == null);var state_52679__$1 = (function (){var statearr_52681 = state_52679;(statearr_52681[(7)] = inst_52659__$1);
(statearr_52681[(9)] = inst_52660);
(statearr_52681[(8)] = inst_52658__$1);
return statearr_52681;
})();if(cljs.core.truth_(inst_52661))
{var statearr_52682_52704 = state_52679__$1;(statearr_52682_52704[(1)] = (8));
} else
{var statearr_52683_52705 = state_52679__$1;(statearr_52683_52705[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52680 === (1)))
{var inst_52650 = cljs.core.vec.call(null,chs);var inst_52651 = inst_52650;var state_52679__$1 = (function (){var statearr_52684 = state_52679;(statearr_52684[(10)] = inst_52651);
return statearr_52684;
})();var statearr_52685_52706 = state_52679__$1;(statearr_52685_52706[(2)] = null);
(statearr_52685_52706[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52680 === (4)))
{var inst_52651 = (state_52679[(10)]);var state_52679__$1 = state_52679;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_52679__$1,(7),inst_52651);
} else
{if((state_val_52680 === (6)))
{var inst_52675 = (state_52679[(2)]);var state_52679__$1 = state_52679;var statearr_52686_52707 = state_52679__$1;(statearr_52686_52707[(2)] = inst_52675);
(statearr_52686_52707[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52680 === (3)))
{var inst_52677 = (state_52679[(2)]);var state_52679__$1 = state_52679;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52679__$1,inst_52677);
} else
{if((state_val_52680 === (2)))
{var inst_52651 = (state_52679[(10)]);var inst_52653 = cljs.core.count.call(null,inst_52651);var inst_52654 = (inst_52653 > (0));var state_52679__$1 = state_52679;if(cljs.core.truth_(inst_52654))
{var statearr_52688_52708 = state_52679__$1;(statearr_52688_52708[(1)] = (4));
} else
{var statearr_52689_52709 = state_52679__$1;(statearr_52689_52709[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52680 === (11)))
{var inst_52651 = (state_52679[(10)]);var inst_52668 = (state_52679[(2)]);var tmp52687 = inst_52651;var inst_52651__$1 = tmp52687;var state_52679__$1 = (function (){var statearr_52690 = state_52679;(statearr_52690[(10)] = inst_52651__$1);
(statearr_52690[(11)] = inst_52668);
return statearr_52690;
})();var statearr_52691_52710 = state_52679__$1;(statearr_52691_52710[(2)] = null);
(statearr_52691_52710[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52680 === (9)))
{var inst_52659 = (state_52679[(7)]);var state_52679__$1 = state_52679;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52679__$1,(11),out,inst_52659);
} else
{if((state_val_52680 === (5)))
{var inst_52673 = cljs.core.async.close_BANG_.call(null,out);var state_52679__$1 = state_52679;var statearr_52692_52711 = state_52679__$1;(statearr_52692_52711[(2)] = inst_52673);
(statearr_52692_52711[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52680 === (10)))
{var inst_52671 = (state_52679[(2)]);var state_52679__$1 = state_52679;var statearr_52693_52712 = state_52679__$1;(statearr_52693_52712[(2)] = inst_52671);
(statearr_52693_52712[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52680 === (8)))
{var inst_52659 = (state_52679[(7)]);var inst_52651 = (state_52679[(10)]);var inst_52660 = (state_52679[(9)]);var inst_52658 = (state_52679[(8)]);var inst_52663 = (function (){var c = inst_52660;var v = inst_52659;var vec__52656 = inst_52658;var cs = inst_52651;return ((function (c,v,vec__52656,cs,inst_52659,inst_52651,inst_52660,inst_52658,state_val_52680,c__5693__auto___52703,out){
return (function (p1__52596_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__52596_SHARP_);
});
;})(c,v,vec__52656,cs,inst_52659,inst_52651,inst_52660,inst_52658,state_val_52680,c__5693__auto___52703,out))
})();var inst_52664 = cljs.core.filterv.call(null,inst_52663,inst_52651);var inst_52651__$1 = inst_52664;var state_52679__$1 = (function (){var statearr_52694 = state_52679;(statearr_52694[(10)] = inst_52651__$1);
return statearr_52694;
})();var statearr_52695_52713 = state_52679__$1;(statearr_52695_52713[(2)] = null);
(statearr_52695_52713[(1)] = (2));
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
});})(c__5693__auto___52703,out))
;return ((function (switch__5678__auto__,c__5693__auto___52703,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52699 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52699[(0)] = state_machine__5679__auto__);
(statearr_52699[(1)] = (1));
return statearr_52699;
});
var state_machine__5679__auto____1 = (function (state_52679){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52679);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52700){if((e52700 instanceof Object))
{var ex__5682__auto__ = e52700;var statearr_52701_52714 = state_52679;(statearr_52701_52714[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52679);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52700;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52715 = state_52679;
state_52679 = G__52715;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52679){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52703,out))
})();var state__5695__auto__ = (function (){var statearr_52702 = f__5694__auto__.call(null);(statearr_52702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52703);
return statearr_52702;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52703,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___52808 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52808,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52808,out){
return (function (state_52785){var state_val_52786 = (state_52785[(1)]);if((state_val_52786 === (7)))
{var inst_52767 = (state_52785[(7)]);var inst_52767__$1 = (state_52785[(2)]);var inst_52768 = (inst_52767__$1 == null);var inst_52769 = cljs.core.not.call(null,inst_52768);var state_52785__$1 = (function (){var statearr_52787 = state_52785;(statearr_52787[(7)] = inst_52767__$1);
return statearr_52787;
})();if(inst_52769)
{var statearr_52788_52809 = state_52785__$1;(statearr_52788_52809[(1)] = (8));
} else
{var statearr_52789_52810 = state_52785__$1;(statearr_52789_52810[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52786 === (1)))
{var inst_52762 = (0);var state_52785__$1 = (function (){var statearr_52790 = state_52785;(statearr_52790[(8)] = inst_52762);
return statearr_52790;
})();var statearr_52791_52811 = state_52785__$1;(statearr_52791_52811[(2)] = null);
(statearr_52791_52811[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52786 === (4)))
{var state_52785__$1 = state_52785;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52785__$1,(7),ch);
} else
{if((state_val_52786 === (6)))
{var inst_52780 = (state_52785[(2)]);var state_52785__$1 = state_52785;var statearr_52792_52812 = state_52785__$1;(statearr_52792_52812[(2)] = inst_52780);
(statearr_52792_52812[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52786 === (3)))
{var inst_52782 = (state_52785[(2)]);var inst_52783 = cljs.core.async.close_BANG_.call(null,out);var state_52785__$1 = (function (){var statearr_52793 = state_52785;(statearr_52793[(9)] = inst_52782);
return statearr_52793;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52785__$1,inst_52783);
} else
{if((state_val_52786 === (2)))
{var inst_52762 = (state_52785[(8)]);var inst_52764 = (inst_52762 < n);var state_52785__$1 = state_52785;if(cljs.core.truth_(inst_52764))
{var statearr_52794_52813 = state_52785__$1;(statearr_52794_52813[(1)] = (4));
} else
{var statearr_52795_52814 = state_52785__$1;(statearr_52795_52814[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52786 === (11)))
{var inst_52762 = (state_52785[(8)]);var inst_52772 = (state_52785[(2)]);var inst_52773 = (inst_52762 + (1));var inst_52762__$1 = inst_52773;var state_52785__$1 = (function (){var statearr_52796 = state_52785;(statearr_52796[(8)] = inst_52762__$1);
(statearr_52796[(10)] = inst_52772);
return statearr_52796;
})();var statearr_52797_52815 = state_52785__$1;(statearr_52797_52815[(2)] = null);
(statearr_52797_52815[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52786 === (9)))
{var state_52785__$1 = state_52785;var statearr_52798_52816 = state_52785__$1;(statearr_52798_52816[(2)] = null);
(statearr_52798_52816[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52786 === (5)))
{var state_52785__$1 = state_52785;var statearr_52799_52817 = state_52785__$1;(statearr_52799_52817[(2)] = null);
(statearr_52799_52817[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52786 === (10)))
{var inst_52777 = (state_52785[(2)]);var state_52785__$1 = state_52785;var statearr_52800_52818 = state_52785__$1;(statearr_52800_52818[(2)] = inst_52777);
(statearr_52800_52818[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52786 === (8)))
{var inst_52767 = (state_52785[(7)]);var state_52785__$1 = state_52785;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52785__$1,(11),out,inst_52767);
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
});})(c__5693__auto___52808,out))
;return ((function (switch__5678__auto__,c__5693__auto___52808,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52804 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_52804[(0)] = state_machine__5679__auto__);
(statearr_52804[(1)] = (1));
return statearr_52804;
});
var state_machine__5679__auto____1 = (function (state_52785){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52785);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52805){if((e52805 instanceof Object))
{var ex__5682__auto__ = e52805;var statearr_52806_52819 = state_52785;(statearr_52806_52819[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52785);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52805;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52820 = state_52785;
state_52785 = G__52820;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52785){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52808,out))
})();var state__5695__auto__ = (function (){var statearr_52807 = f__5694__auto__.call(null);(statearr_52807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52808);
return statearr_52807;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52808,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___52917 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52917,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52917,out){
return (function (state_52892){var state_val_52893 = (state_52892[(1)]);if((state_val_52893 === (7)))
{var inst_52887 = (state_52892[(2)]);var state_52892__$1 = state_52892;var statearr_52894_52918 = state_52892__$1;(statearr_52894_52918[(2)] = inst_52887);
(statearr_52894_52918[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52893 === (1)))
{var inst_52869 = null;var state_52892__$1 = (function (){var statearr_52895 = state_52892;(statearr_52895[(7)] = inst_52869);
return statearr_52895;
})();var statearr_52896_52919 = state_52892__$1;(statearr_52896_52919[(2)] = null);
(statearr_52896_52919[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52893 === (4)))
{var inst_52872 = (state_52892[(8)]);var inst_52872__$1 = (state_52892[(2)]);var inst_52873 = (inst_52872__$1 == null);var inst_52874 = cljs.core.not.call(null,inst_52873);var state_52892__$1 = (function (){var statearr_52897 = state_52892;(statearr_52897[(8)] = inst_52872__$1);
return statearr_52897;
})();if(inst_52874)
{var statearr_52898_52920 = state_52892__$1;(statearr_52898_52920[(1)] = (5));
} else
{var statearr_52899_52921 = state_52892__$1;(statearr_52899_52921[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52893 === (6)))
{var state_52892__$1 = state_52892;var statearr_52900_52922 = state_52892__$1;(statearr_52900_52922[(2)] = null);
(statearr_52900_52922[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52893 === (3)))
{var inst_52889 = (state_52892[(2)]);var inst_52890 = cljs.core.async.close_BANG_.call(null,out);var state_52892__$1 = (function (){var statearr_52901 = state_52892;(statearr_52901[(9)] = inst_52889);
return statearr_52901;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52892__$1,inst_52890);
} else
{if((state_val_52893 === (2)))
{var state_52892__$1 = state_52892;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52892__$1,(4),ch);
} else
{if((state_val_52893 === (11)))
{var inst_52872 = (state_52892[(8)]);var inst_52881 = (state_52892[(2)]);var inst_52869 = inst_52872;var state_52892__$1 = (function (){var statearr_52902 = state_52892;(statearr_52902[(7)] = inst_52869);
(statearr_52902[(10)] = inst_52881);
return statearr_52902;
})();var statearr_52903_52923 = state_52892__$1;(statearr_52903_52923[(2)] = null);
(statearr_52903_52923[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52893 === (9)))
{var inst_52872 = (state_52892[(8)]);var state_52892__$1 = state_52892;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52892__$1,(11),out,inst_52872);
} else
{if((state_val_52893 === (5)))
{var inst_52872 = (state_52892[(8)]);var inst_52869 = (state_52892[(7)]);var inst_52876 = cljs.core._EQ_.call(null,inst_52872,inst_52869);var state_52892__$1 = state_52892;if(inst_52876)
{var statearr_52905_52924 = state_52892__$1;(statearr_52905_52924[(1)] = (8));
} else
{var statearr_52906_52925 = state_52892__$1;(statearr_52906_52925[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52893 === (10)))
{var inst_52884 = (state_52892[(2)]);var state_52892__$1 = state_52892;var statearr_52907_52926 = state_52892__$1;(statearr_52907_52926[(2)] = inst_52884);
(statearr_52907_52926[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52893 === (8)))
{var inst_52869 = (state_52892[(7)]);var tmp52904 = inst_52869;var inst_52869__$1 = tmp52904;var state_52892__$1 = (function (){var statearr_52908 = state_52892;(statearr_52908[(7)] = inst_52869__$1);
return statearr_52908;
})();var statearr_52909_52927 = state_52892__$1;(statearr_52909_52927[(2)] = null);
(statearr_52909_52927[(1)] = (2));
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
});})(c__5693__auto___52917,out))
;return ((function (switch__5678__auto__,c__5693__auto___52917,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52913 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_52913[(0)] = state_machine__5679__auto__);
(statearr_52913[(1)] = (1));
return statearr_52913;
});
var state_machine__5679__auto____1 = (function (state_52892){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52892);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52914){if((e52914 instanceof Object))
{var ex__5682__auto__ = e52914;var statearr_52915_52928 = state_52892;(statearr_52915_52928[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52892);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52914;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52929 = state_52892;
state_52892 = G__52929;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52892){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52917,out))
})();var state__5695__auto__ = (function (){var statearr_52916 = f__5694__auto__.call(null);(statearr_52916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52917);
return statearr_52916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52917,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___53064 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___53064,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___53064,out){
return (function (state_53034){var state_val_53035 = (state_53034[(1)]);if((state_val_53035 === (7)))
{var inst_53030 = (state_53034[(2)]);var state_53034__$1 = state_53034;var statearr_53036_53065 = state_53034__$1;(statearr_53036_53065[(2)] = inst_53030);
(statearr_53036_53065[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53035 === (1)))
{var inst_52997 = (new Array(n));var inst_52998 = inst_52997;var inst_52999 = (0);var state_53034__$1 = (function (){var statearr_53037 = state_53034;(statearr_53037[(7)] = inst_52998);
(statearr_53037[(8)] = inst_52999);
return statearr_53037;
})();var statearr_53038_53066 = state_53034__$1;(statearr_53038_53066[(2)] = null);
(statearr_53038_53066[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53035 === (4)))
{var inst_53002 = (state_53034[(9)]);var inst_53002__$1 = (state_53034[(2)]);var inst_53003 = (inst_53002__$1 == null);var inst_53004 = cljs.core.not.call(null,inst_53003);var state_53034__$1 = (function (){var statearr_53039 = state_53034;(statearr_53039[(9)] = inst_53002__$1);
return statearr_53039;
})();if(inst_53004)
{var statearr_53040_53067 = state_53034__$1;(statearr_53040_53067[(1)] = (5));
} else
{var statearr_53041_53068 = state_53034__$1;(statearr_53041_53068[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53035 === (15)))
{var inst_53024 = (state_53034[(2)]);var state_53034__$1 = state_53034;var statearr_53042_53069 = state_53034__$1;(statearr_53042_53069[(2)] = inst_53024);
(statearr_53042_53069[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53035 === (13)))
{var state_53034__$1 = state_53034;var statearr_53043_53070 = state_53034__$1;(statearr_53043_53070[(2)] = null);
(statearr_53043_53070[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53035 === (6)))
{var inst_52999 = (state_53034[(8)]);var inst_53020 = (inst_52999 > (0));var state_53034__$1 = state_53034;if(cljs.core.truth_(inst_53020))
{var statearr_53044_53071 = state_53034__$1;(statearr_53044_53071[(1)] = (12));
} else
{var statearr_53045_53072 = state_53034__$1;(statearr_53045_53072[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53035 === (3)))
{var inst_53032 = (state_53034[(2)]);var state_53034__$1 = state_53034;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53034__$1,inst_53032);
} else
{if((state_val_53035 === (12)))
{var inst_52998 = (state_53034[(7)]);var inst_53022 = cljs.core.vec.call(null,inst_52998);var state_53034__$1 = state_53034;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53034__$1,(15),out,inst_53022);
} else
{if((state_val_53035 === (2)))
{var state_53034__$1 = state_53034;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53034__$1,(4),ch);
} else
{if((state_val_53035 === (11)))
{var inst_53014 = (state_53034[(2)]);var inst_53015 = (new Array(n));var inst_52998 = inst_53015;var inst_52999 = (0);var state_53034__$1 = (function (){var statearr_53046 = state_53034;(statearr_53046[(10)] = inst_53014);
(statearr_53046[(7)] = inst_52998);
(statearr_53046[(8)] = inst_52999);
return statearr_53046;
})();var statearr_53047_53073 = state_53034__$1;(statearr_53047_53073[(2)] = null);
(statearr_53047_53073[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53035 === (9)))
{var inst_52998 = (state_53034[(7)]);var inst_53012 = cljs.core.vec.call(null,inst_52998);var state_53034__$1 = state_53034;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53034__$1,(11),out,inst_53012);
} else
{if((state_val_53035 === (5)))
{var inst_53007 = (state_53034[(11)]);var inst_53002 = (state_53034[(9)]);var inst_52998 = (state_53034[(7)]);var inst_52999 = (state_53034[(8)]);var inst_53006 = (inst_52998[inst_52999] = inst_53002);var inst_53007__$1 = (inst_52999 + (1));var inst_53008 = (inst_53007__$1 < n);var state_53034__$1 = (function (){var statearr_53048 = state_53034;(statearr_53048[(11)] = inst_53007__$1);
(statearr_53048[(12)] = inst_53006);
return statearr_53048;
})();if(cljs.core.truth_(inst_53008))
{var statearr_53049_53074 = state_53034__$1;(statearr_53049_53074[(1)] = (8));
} else
{var statearr_53050_53075 = state_53034__$1;(statearr_53050_53075[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53035 === (14)))
{var inst_53027 = (state_53034[(2)]);var inst_53028 = cljs.core.async.close_BANG_.call(null,out);var state_53034__$1 = (function (){var statearr_53052 = state_53034;(statearr_53052[(13)] = inst_53027);
return statearr_53052;
})();var statearr_53053_53076 = state_53034__$1;(statearr_53053_53076[(2)] = inst_53028);
(statearr_53053_53076[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53035 === (10)))
{var inst_53018 = (state_53034[(2)]);var state_53034__$1 = state_53034;var statearr_53054_53077 = state_53034__$1;(statearr_53054_53077[(2)] = inst_53018);
(statearr_53054_53077[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53035 === (8)))
{var inst_53007 = (state_53034[(11)]);var inst_52998 = (state_53034[(7)]);var tmp53051 = inst_52998;var inst_52998__$1 = tmp53051;var inst_52999 = inst_53007;var state_53034__$1 = (function (){var statearr_53055 = state_53034;(statearr_53055[(7)] = inst_52998__$1);
(statearr_53055[(8)] = inst_52999);
return statearr_53055;
})();var statearr_53056_53078 = state_53034__$1;(statearr_53056_53078[(2)] = null);
(statearr_53056_53078[(1)] = (2));
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
});})(c__5693__auto___53064,out))
;return ((function (switch__5678__auto__,c__5693__auto___53064,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_53060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53060[(0)] = state_machine__5679__auto__);
(statearr_53060[(1)] = (1));
return statearr_53060;
});
var state_machine__5679__auto____1 = (function (state_53034){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_53034);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53061){if((e53061 instanceof Object))
{var ex__5682__auto__ = e53061;var statearr_53062_53079 = state_53034;(statearr_53062_53079[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53034);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53080 = state_53034;
state_53034 = G__53080;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_53034){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_53034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___53064,out))
})();var state__5695__auto__ = (function (){var statearr_53063 = f__5694__auto__.call(null);(statearr_53063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___53064);
return statearr_53063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___53064,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___53223 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___53223,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___53223,out){
return (function (state_53193){var state_val_53194 = (state_53193[(1)]);if((state_val_53194 === (7)))
{var inst_53189 = (state_53193[(2)]);var state_53193__$1 = state_53193;var statearr_53195_53224 = state_53193__$1;(statearr_53195_53224[(2)] = inst_53189);
(statearr_53195_53224[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53194 === (1)))
{var inst_53152 = [];var inst_53153 = inst_53152;var inst_53154 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_53193__$1 = (function (){var statearr_53196 = state_53193;(statearr_53196[(7)] = inst_53154);
(statearr_53196[(8)] = inst_53153);
return statearr_53196;
})();var statearr_53197_53225 = state_53193__$1;(statearr_53197_53225[(2)] = null);
(statearr_53197_53225[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53194 === (4)))
{var inst_53157 = (state_53193[(9)]);var inst_53157__$1 = (state_53193[(2)]);var inst_53158 = (inst_53157__$1 == null);var inst_53159 = cljs.core.not.call(null,inst_53158);var state_53193__$1 = (function (){var statearr_53198 = state_53193;(statearr_53198[(9)] = inst_53157__$1);
return statearr_53198;
})();if(inst_53159)
{var statearr_53199_53226 = state_53193__$1;(statearr_53199_53226[(1)] = (5));
} else
{var statearr_53200_53227 = state_53193__$1;(statearr_53200_53227[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53194 === (15)))
{var inst_53183 = (state_53193[(2)]);var state_53193__$1 = state_53193;var statearr_53201_53228 = state_53193__$1;(statearr_53201_53228[(2)] = inst_53183);
(statearr_53201_53228[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53194 === (13)))
{var state_53193__$1 = state_53193;var statearr_53202_53229 = state_53193__$1;(statearr_53202_53229[(2)] = null);
(statearr_53202_53229[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53194 === (6)))
{var inst_53153 = (state_53193[(8)]);var inst_53178 = inst_53153.length;var inst_53179 = (inst_53178 > (0));var state_53193__$1 = state_53193;if(cljs.core.truth_(inst_53179))
{var statearr_53203_53230 = state_53193__$1;(statearr_53203_53230[(1)] = (12));
} else
{var statearr_53204_53231 = state_53193__$1;(statearr_53204_53231[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53194 === (3)))
{var inst_53191 = (state_53193[(2)]);var state_53193__$1 = state_53193;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53193__$1,inst_53191);
} else
{if((state_val_53194 === (12)))
{var inst_53153 = (state_53193[(8)]);var inst_53181 = cljs.core.vec.call(null,inst_53153);var state_53193__$1 = state_53193;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53193__$1,(15),out,inst_53181);
} else
{if((state_val_53194 === (2)))
{var state_53193__$1 = state_53193;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53193__$1,(4),ch);
} else
{if((state_val_53194 === (11)))
{var inst_53161 = (state_53193[(10)]);var inst_53157 = (state_53193[(9)]);var inst_53171 = (state_53193[(2)]);var inst_53172 = [];var inst_53173 = inst_53172.push(inst_53157);var inst_53153 = inst_53172;var inst_53154 = inst_53161;var state_53193__$1 = (function (){var statearr_53205 = state_53193;(statearr_53205[(7)] = inst_53154);
(statearr_53205[(8)] = inst_53153);
(statearr_53205[(11)] = inst_53171);
(statearr_53205[(12)] = inst_53173);
return statearr_53205;
})();var statearr_53206_53232 = state_53193__$1;(statearr_53206_53232[(2)] = null);
(statearr_53206_53232[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53194 === (9)))
{var inst_53153 = (state_53193[(8)]);var inst_53169 = cljs.core.vec.call(null,inst_53153);var state_53193__$1 = state_53193;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53193__$1,(11),out,inst_53169);
} else
{if((state_val_53194 === (5)))
{var inst_53161 = (state_53193[(10)]);var inst_53154 = (state_53193[(7)]);var inst_53157 = (state_53193[(9)]);var inst_53161__$1 = f.call(null,inst_53157);var inst_53162 = cljs.core._EQ_.call(null,inst_53161__$1,inst_53154);var inst_53163 = cljs.core.keyword_identical_QMARK_.call(null,inst_53154,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_53164 = (inst_53162) || (inst_53163);var state_53193__$1 = (function (){var statearr_53207 = state_53193;(statearr_53207[(10)] = inst_53161__$1);
return statearr_53207;
})();if(cljs.core.truth_(inst_53164))
{var statearr_53208_53233 = state_53193__$1;(statearr_53208_53233[(1)] = (8));
} else
{var statearr_53209_53234 = state_53193__$1;(statearr_53209_53234[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53194 === (14)))
{var inst_53186 = (state_53193[(2)]);var inst_53187 = cljs.core.async.close_BANG_.call(null,out);var state_53193__$1 = (function (){var statearr_53211 = state_53193;(statearr_53211[(13)] = inst_53186);
return statearr_53211;
})();var statearr_53212_53235 = state_53193__$1;(statearr_53212_53235[(2)] = inst_53187);
(statearr_53212_53235[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53194 === (10)))
{var inst_53176 = (state_53193[(2)]);var state_53193__$1 = state_53193;var statearr_53213_53236 = state_53193__$1;(statearr_53213_53236[(2)] = inst_53176);
(statearr_53213_53236[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53194 === (8)))
{var inst_53161 = (state_53193[(10)]);var inst_53153 = (state_53193[(8)]);var inst_53157 = (state_53193[(9)]);var inst_53166 = inst_53153.push(inst_53157);var tmp53210 = inst_53153;var inst_53153__$1 = tmp53210;var inst_53154 = inst_53161;var state_53193__$1 = (function (){var statearr_53214 = state_53193;(statearr_53214[(7)] = inst_53154);
(statearr_53214[(8)] = inst_53153__$1);
(statearr_53214[(14)] = inst_53166);
return statearr_53214;
})();var statearr_53215_53237 = state_53193__$1;(statearr_53215_53237[(2)] = null);
(statearr_53215_53237[(1)] = (2));
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
});})(c__5693__auto___53223,out))
;return ((function (switch__5678__auto__,c__5693__auto___53223,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_53219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53219[(0)] = state_machine__5679__auto__);
(statearr_53219[(1)] = (1));
return statearr_53219;
});
var state_machine__5679__auto____1 = (function (state_53193){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_53193);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53220){if((e53220 instanceof Object))
{var ex__5682__auto__ = e53220;var statearr_53221_53238 = state_53193;(statearr_53221_53238[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53193);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53220;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53239 = state_53193;
state_53193 = G__53239;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_53193){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_53193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___53223,out))
})();var state__5695__auto__ = (function (){var statearr_53222 = f__5694__auto__.call(null);(statearr_53222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___53223);
return statearr_53222;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___53223,out))
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