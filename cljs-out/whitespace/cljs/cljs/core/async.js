// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t33530 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33530 = (function (f,fn_handler,meta33531){
this.f = f;
this.fn_handler = fn_handler;
this.meta33531 = meta33531;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33530.cljs$lang$type = true;
cljs.core.async.t33530.cljs$lang$ctorStr = "cljs.core.async/t33530";
cljs.core.async.t33530.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33530");
});
cljs.core.async.t33530.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33530.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t33530.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t33530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33532){var self__ = this;
var _33532__$1 = this;return self__.meta33531;
});
cljs.core.async.t33530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33532,meta33531__$1){var self__ = this;
var _33532__$1 = this;return (new cljs.core.async.t33530(self__.f,self__.fn_handler,meta33531__$1));
});
cljs.core.async.__GT_t33530 = (function __GT_t33530(f__$1,fn_handler__$1,meta33531){return (new cljs.core.async.t33530(f__$1,fn_handler__$1,meta33531));
});
}
return (new cljs.core.async.t33530(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__33534 = buff;if(G__33534)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__33534.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__33534.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33534);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33534);
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
{var val_33535 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_33535);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_33535);
}));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___33536 = n;var x_33537 = 0;while(true){
if((x_33537 < n__4248__auto___33536))
{(a[x_33537] = 0);
{
var G__33538 = (x_33537 + 1);
x_33537 = G__33538;
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
var G__33539 = (i + 1);
i = G__33539;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t33543 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33543 = (function (flag,alt_flag,meta33544){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33544 = meta33544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33543.cljs$lang$type = true;
cljs.core.async.t33543.cljs$lang$ctorStr = "cljs.core.async/t33543";
cljs.core.async.t33543.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33543");
});
cljs.core.async.t33543.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t33543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t33543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33545){var self__ = this;
var _33545__$1 = this;return self__.meta33544;
});
cljs.core.async.t33543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33545,meta33544__$1){var self__ = this;
var _33545__$1 = this;return (new cljs.core.async.t33543(self__.flag,self__.alt_flag,meta33544__$1));
});
cljs.core.async.__GT_t33543 = (function __GT_t33543(flag__$1,alt_flag__$1,meta33544){return (new cljs.core.async.t33543(flag__$1,alt_flag__$1,meta33544));
});
}
return (new cljs.core.async.t33543(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t33549 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33549 = (function (cb,flag,alt_handler,meta33550){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33550 = meta33550;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33549.cljs$lang$type = true;
cljs.core.async.t33549.cljs$lang$ctorStr = "cljs.core.async/t33549";
cljs.core.async.t33549.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33549");
});
cljs.core.async.t33549.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33549.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t33549.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t33549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33551){var self__ = this;
var _33551__$1 = this;return self__.meta33550;
});
cljs.core.async.t33549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33551,meta33550__$1){var self__ = this;
var _33551__$1 = this;return (new cljs.core.async.t33549(self__.cb,self__.flag,self__.alt_handler,meta33550__$1));
});
cljs.core.async.__GT_t33549 = (function __GT_t33549(cb__$1,flag__$1,alt_handler__$1,meta33550){return (new cljs.core.async.t33549(cb__$1,flag__$1,alt_handler__$1,meta33550));
});
}
return (new cljs.core.async.t33549(cb,flag,alt_handler,null));
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
return (function (p1__33552_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33552_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__33553 = (i + 1);
i = G__33553;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3406__auto__ = ret;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__33554){var map__33556 = p__33554;var map__33556__$1 = ((cljs.core.seq_QMARK_.call(null,map__33556))?cljs.core.apply.call(null,cljs.core.hash_map,map__33556):map__33556);var opts = map__33556__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__33554 = null;if (arguments.length > 1) {
  p__33554 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__33554);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__33557){
var ports = cljs.core.first(arglist__33557);
var p__33554 = cljs.core.rest(arglist__33557);
return alts_BANG___delegate(ports,p__33554);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t33565 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33565 = (function (ch,f,map_LT_,meta33566){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33566 = meta33566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33565.cljs$lang$type = true;
cljs.core.async.t33565.cljs$lang$ctorStr = "cljs.core.async/t33565";
cljs.core.async.t33565.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33565");
});
cljs.core.async.t33565.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33565.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t33565.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33565.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t33568 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33568 = (function (fn1,_,meta33566,ch,f,map_LT_,meta33569){
this.fn1 = fn1;
this._ = _;
this.meta33566 = meta33566;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33569 = meta33569;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33568.cljs$lang$type = true;
cljs.core.async.t33568.cljs$lang$ctorStr = "cljs.core.async/t33568";
cljs.core.async.t33568.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33568");
});
cljs.core.async.t33568.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33568.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t33568.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t33568.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__33558_SHARP_){return f1.call(null,(((p1__33558_SHARP_ == null))?null:self__.f.call(null,p1__33558_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t33568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33570){var self__ = this;
var _33570__$1 = this;return self__.meta33569;
});
cljs.core.async.t33568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33570,meta33569__$1){var self__ = this;
var _33570__$1 = this;return (new cljs.core.async.t33568(self__.fn1,self__._,self__.meta33566,self__.ch,self__.f,self__.map_LT_,meta33569__$1));
});
cljs.core.async.__GT_t33568 = (function __GT_t33568(fn1__$1,___$2,meta33566__$1,ch__$2,f__$2,map_LT___$2,meta33569){return (new cljs.core.async.t33568(fn1__$1,___$2,meta33566__$1,ch__$2,f__$2,map_LT___$2,meta33569));
});
}
return (new cljs.core.async.t33568(fn1,___$1,self__.meta33566,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t33565.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33565.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33567){var self__ = this;
var _33567__$1 = this;return self__.meta33566;
});
cljs.core.async.t33565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33567,meta33566__$1){var self__ = this;
var _33567__$1 = this;return (new cljs.core.async.t33565(self__.ch,self__.f,self__.map_LT_,meta33566__$1));
});
cljs.core.async.__GT_t33565 = (function __GT_t33565(ch__$1,f__$1,map_LT___$1,meta33566){return (new cljs.core.async.t33565(ch__$1,f__$1,map_LT___$1,meta33566));
});
}
return (new cljs.core.async.t33565(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t33574 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33574 = (function (ch,f,map_GT_,meta33575){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33575 = meta33575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33574.cljs$lang$type = true;
cljs.core.async.t33574.cljs$lang$ctorStr = "cljs.core.async/t33574";
cljs.core.async.t33574.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33574");
});
cljs.core.async.t33574.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33574.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t33574.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33574.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33574.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33574.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33576){var self__ = this;
var _33576__$1 = this;return self__.meta33575;
});
cljs.core.async.t33574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33576,meta33575__$1){var self__ = this;
var _33576__$1 = this;return (new cljs.core.async.t33574(self__.ch,self__.f,self__.map_GT_,meta33575__$1));
});
cljs.core.async.__GT_t33574 = (function __GT_t33574(ch__$1,f__$1,map_GT___$1,meta33575){return (new cljs.core.async.t33574(ch__$1,f__$1,map_GT___$1,meta33575));
});
}
return (new cljs.core.async.t33574(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t33580 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33580 = (function (ch,p,filter_GT_,meta33581){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33581 = meta33581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33580.cljs$lang$type = true;
cljs.core.async.t33580.cljs$lang$ctorStr = "cljs.core.async/t33580";
cljs.core.async.t33580.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33580");
});
cljs.core.async.t33580.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33580.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t33580.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33580.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33580.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33580.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33582){var self__ = this;
var _33582__$1 = this;return self__.meta33581;
});
cljs.core.async.t33580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33582,meta33581__$1){var self__ = this;
var _33582__$1 = this;return (new cljs.core.async.t33580(self__.ch,self__.p,self__.filter_GT_,meta33581__$1));
});
cljs.core.async.__GT_t33580 = (function __GT_t33580(ch__$1,p__$1,filter_GT___$1,meta33581){return (new cljs.core.async.t33580(ch__$1,p__$1,filter_GT___$1,meta33581));
});
}
return (new cljs.core.async.t33580(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33665 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33644){var state_val_33645 = (state_33644[1]);if((state_val_33645 === 1))
{var state_33644__$1 = state_33644;var statearr_33646_33666 = state_33644__$1;(statearr_33646_33666[2] = null);
(statearr_33646_33666[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33645 === 2))
{var state_33644__$1 = state_33644;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33644__$1,4,ch);
} else
{if((state_val_33645 === 3))
{var inst_33642 = (state_33644[2]);var state_33644__$1 = state_33644;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33644__$1,inst_33642);
} else
{if((state_val_33645 === 4))
{var inst_33626 = (state_33644[7]);var inst_33626__$1 = (state_33644[2]);var inst_33627 = (inst_33626__$1 == null);var state_33644__$1 = (function (){var statearr_33647 = state_33644;(statearr_33647[7] = inst_33626__$1);
return statearr_33647;
})();if(cljs.core.truth_(inst_33627))
{var statearr_33648_33667 = state_33644__$1;(statearr_33648_33667[1] = 5);
} else
{var statearr_33649_33668 = state_33644__$1;(statearr_33649_33668[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33645 === 5))
{var inst_33629 = cljs.core.async.close_BANG_.call(null,out);var state_33644__$1 = state_33644;var statearr_33650_33669 = state_33644__$1;(statearr_33650_33669[2] = inst_33629);
(statearr_33650_33669[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33645 === 6))
{var inst_33626 = (state_33644[7]);var inst_33631 = p.call(null,inst_33626);var state_33644__$1 = state_33644;if(cljs.core.truth_(inst_33631))
{var statearr_33651_33670 = state_33644__$1;(statearr_33651_33670[1] = 8);
} else
{var statearr_33652_33671 = state_33644__$1;(statearr_33652_33671[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33645 === 7))
{var inst_33640 = (state_33644[2]);var state_33644__$1 = state_33644;var statearr_33653_33672 = state_33644__$1;(statearr_33653_33672[2] = inst_33640);
(statearr_33653_33672[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33645 === 8))
{var inst_33626 = (state_33644[7]);var state_33644__$1 = state_33644;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33644__$1,11,out,inst_33626);
} else
{if((state_val_33645 === 9))
{var state_33644__$1 = state_33644;var statearr_33654_33673 = state_33644__$1;(statearr_33654_33673[2] = null);
(statearr_33654_33673[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33645 === 10))
{var inst_33637 = (state_33644[2]);var state_33644__$1 = (function (){var statearr_33655 = state_33644;(statearr_33655[8] = inst_33637);
return statearr_33655;
})();var statearr_33656_33674 = state_33644__$1;(statearr_33656_33674[2] = null);
(statearr_33656_33674[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33645 === 11))
{var inst_33634 = (state_33644[2]);var state_33644__$1 = state_33644;var statearr_33657_33675 = state_33644__$1;(statearr_33657_33675[2] = inst_33634);
(statearr_33657_33675[1] = 10);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_33661 = [null,null,null,null,null,null,null,null,null];(statearr_33661[0] = state_machine__5507__auto__);
(statearr_33661[1] = 1);
return statearr_33661;
});
var state_machine__5507__auto____1 = (function (state_33644){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33644);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33662){if((e33662 instanceof Object))
{var ex__5510__auto__ = e33662;var statearr_33663_33676 = state_33644;(statearr_33663_33676[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33644);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33662;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33677 = state_33644;
state_33644 = G__33677;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33644){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33664 = f__5522__auto__.call(null);(statearr_33664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33665);
return statearr_33664;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33829){var state_val_33830 = (state_33829[1]);if((state_val_33830 === 1))
{var state_33829__$1 = state_33829;var statearr_33831_33868 = state_33829__$1;(statearr_33831_33868[2] = null);
(statearr_33831_33868[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33830 === 2))
{var state_33829__$1 = state_33829;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33829__$1,4,in$);
} else
{if((state_val_33830 === 3))
{var inst_33827 = (state_33829[2]);var state_33829__$1 = state_33829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33829__$1,inst_33827);
} else
{if((state_val_33830 === 4))
{var inst_33775 = (state_33829[7]);var inst_33775__$1 = (state_33829[2]);var inst_33776 = (inst_33775__$1 == null);var state_33829__$1 = (function (){var statearr_33832 = state_33829;(statearr_33832[7] = inst_33775__$1);
return statearr_33832;
})();if(cljs.core.truth_(inst_33776))
{var statearr_33833_33869 = state_33829__$1;(statearr_33833_33869[1] = 5);
} else
{var statearr_33834_33870 = state_33829__$1;(statearr_33834_33870[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33830 === 5))
{var inst_33778 = cljs.core.async.close_BANG_.call(null,out);var state_33829__$1 = state_33829;var statearr_33835_33871 = state_33829__$1;(statearr_33835_33871[2] = inst_33778);
(statearr_33835_33871[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33830 === 6))
{var inst_33775 = (state_33829[7]);var inst_33780 = f.call(null,inst_33775);var inst_33785 = cljs.core.seq.call(null,inst_33780);var inst_33786 = inst_33785;var inst_33787 = null;var inst_33788 = 0;var inst_33789 = 0;var state_33829__$1 = (function (){var statearr_33836 = state_33829;(statearr_33836[8] = inst_33786);
(statearr_33836[9] = inst_33787);
(statearr_33836[10] = inst_33788);
(statearr_33836[11] = inst_33789);
return statearr_33836;
})();var statearr_33837_33872 = state_33829__$1;(statearr_33837_33872[2] = null);
(statearr_33837_33872[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33830 === 7))
{var inst_33825 = (state_33829[2]);var state_33829__$1 = state_33829;var statearr_33838_33873 = state_33829__$1;(statearr_33838_33873[2] = inst_33825);
(statearr_33838_33873[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33830 === 8))
{var inst_33788 = (state_33829[10]);var inst_33789 = (state_33829[11]);var inst_33791 = (inst_33789 < inst_33788);var inst_33792 = inst_33791;var state_33829__$1 = state_33829;if(cljs.core.truth_(inst_33792))
{var statearr_33839_33874 = state_33829__$1;(statearr_33839_33874[1] = 10);
} else
{var statearr_33840_33875 = state_33829__$1;(statearr_33840_33875[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33830 === 9))
{var inst_33822 = (state_33829[2]);var state_33829__$1 = (function (){var statearr_33841 = state_33829;(statearr_33841[12] = inst_33822);
return statearr_33841;
})();var statearr_33842_33876 = state_33829__$1;(statearr_33842_33876[2] = null);
(statearr_33842_33876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33830 === 10))
{var inst_33787 = (state_33829[9]);var inst_33789 = (state_33829[11]);var inst_33794 = cljs.core._nth.call(null,inst_33787,inst_33789);var state_33829__$1 = state_33829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33829__$1,13,out,inst_33794);
} else
{if((state_val_33830 === 11))
{var inst_33786 = (state_33829[8]);var inst_33800 = (state_33829[13]);var inst_33800__$1 = cljs.core.seq.call(null,inst_33786);var state_33829__$1 = (function (){var statearr_33846 = state_33829;(statearr_33846[13] = inst_33800__$1);
return statearr_33846;
})();if(inst_33800__$1)
{var statearr_33847_33877 = state_33829__$1;(statearr_33847_33877[1] = 14);
} else
{var statearr_33848_33878 = state_33829__$1;(statearr_33848_33878[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33830 === 12))
{var inst_33820 = (state_33829[2]);var state_33829__$1 = state_33829;var statearr_33849_33879 = state_33829__$1;(statearr_33849_33879[2] = inst_33820);
(statearr_33849_33879[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33830 === 13))
{var inst_33786 = (state_33829[8]);var inst_33787 = (state_33829[9]);var inst_33788 = (state_33829[10]);var inst_33789 = (state_33829[11]);var inst_33796 = (state_33829[2]);var inst_33797 = (inst_33789 + 1);var tmp33843 = inst_33786;var tmp33844 = inst_33787;var tmp33845 = inst_33788;var inst_33786__$1 = tmp33843;var inst_33787__$1 = tmp33844;var inst_33788__$1 = tmp33845;var inst_33789__$1 = inst_33797;var state_33829__$1 = (function (){var statearr_33850 = state_33829;(statearr_33850[8] = inst_33786__$1);
(statearr_33850[14] = inst_33796);
(statearr_33850[9] = inst_33787__$1);
(statearr_33850[10] = inst_33788__$1);
(statearr_33850[11] = inst_33789__$1);
return statearr_33850;
})();var statearr_33851_33880 = state_33829__$1;(statearr_33851_33880[2] = null);
(statearr_33851_33880[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33830 === 14))
{var inst_33800 = (state_33829[13]);var inst_33802 = cljs.core.chunked_seq_QMARK_.call(null,inst_33800);var state_33829__$1 = state_33829;if(inst_33802)
{var statearr_33852_33881 = state_33829__$1;(statearr_33852_33881[1] = 17);
} else
{var statearr_33853_33882 = state_33829__$1;(statearr_33853_33882[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33830 === 15))
{var state_33829__$1 = state_33829;var statearr_33854_33883 = state_33829__$1;(statearr_33854_33883[2] = null);
(statearr_33854_33883[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33830 === 16))
{var inst_33818 = (state_33829[2]);var state_33829__$1 = state_33829;var statearr_33855_33884 = state_33829__$1;(statearr_33855_33884[2] = inst_33818);
(statearr_33855_33884[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33830 === 17))
{var inst_33800 = (state_33829[13]);var inst_33804 = cljs.core.chunk_first.call(null,inst_33800);var inst_33805 = cljs.core.chunk_rest.call(null,inst_33800);var inst_33806 = cljs.core.count.call(null,inst_33804);var inst_33786 = inst_33805;var inst_33787 = inst_33804;var inst_33788 = inst_33806;var inst_33789 = 0;var state_33829__$1 = (function (){var statearr_33856 = state_33829;(statearr_33856[8] = inst_33786);
(statearr_33856[9] = inst_33787);
(statearr_33856[10] = inst_33788);
(statearr_33856[11] = inst_33789);
return statearr_33856;
})();var statearr_33857_33885 = state_33829__$1;(statearr_33857_33885[2] = null);
(statearr_33857_33885[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33830 === 18))
{var inst_33800 = (state_33829[13]);var inst_33809 = cljs.core.first.call(null,inst_33800);var state_33829__$1 = state_33829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33829__$1,20,out,inst_33809);
} else
{if((state_val_33830 === 19))
{var inst_33815 = (state_33829[2]);var state_33829__$1 = state_33829;var statearr_33858_33886 = state_33829__$1;(statearr_33858_33886[2] = inst_33815);
(statearr_33858_33886[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33830 === 20))
{var inst_33800 = (state_33829[13]);var inst_33811 = (state_33829[2]);var inst_33812 = cljs.core.next.call(null,inst_33800);var inst_33786 = inst_33812;var inst_33787 = null;var inst_33788 = 0;var inst_33789 = 0;var state_33829__$1 = (function (){var statearr_33859 = state_33829;(statearr_33859[8] = inst_33786);
(statearr_33859[9] = inst_33787);
(statearr_33859[10] = inst_33788);
(statearr_33859[11] = inst_33789);
(statearr_33859[15] = inst_33811);
return statearr_33859;
})();var statearr_33860_33887 = state_33829__$1;(statearr_33860_33887[2] = null);
(statearr_33860_33887[1] = 8);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_33864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33864[0] = state_machine__5507__auto__);
(statearr_33864[1] = 1);
return statearr_33864;
});
var state_machine__5507__auto____1 = (function (state_33829){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33829);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33865){if((e33865 instanceof Object))
{var ex__5510__auto__ = e33865;var statearr_33866_33888 = state_33829;(statearr_33866_33888[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33829);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33865;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33889 = state_33829;
state_33829 = G__33889;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33829){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33867 = f__5522__auto__.call(null);(statearr_33867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33867;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___33970 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33949){var state_val_33950 = (state_33949[1]);if((state_val_33950 === 1))
{var state_33949__$1 = state_33949;var statearr_33951_33971 = state_33949__$1;(statearr_33951_33971[2] = null);
(statearr_33951_33971[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33950 === 2))
{var state_33949__$1 = state_33949;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33949__$1,4,from);
} else
{if((state_val_33950 === 3))
{var inst_33947 = (state_33949[2]);var state_33949__$1 = state_33949;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33949__$1,inst_33947);
} else
{if((state_val_33950 === 4))
{var inst_33932 = (state_33949[7]);var inst_33932__$1 = (state_33949[2]);var inst_33933 = (inst_33932__$1 == null);var state_33949__$1 = (function (){var statearr_33952 = state_33949;(statearr_33952[7] = inst_33932__$1);
return statearr_33952;
})();if(cljs.core.truth_(inst_33933))
{var statearr_33953_33972 = state_33949__$1;(statearr_33953_33972[1] = 5);
} else
{var statearr_33954_33973 = state_33949__$1;(statearr_33954_33973[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33950 === 5))
{var state_33949__$1 = state_33949;if(cljs.core.truth_(close_QMARK_))
{var statearr_33955_33974 = state_33949__$1;(statearr_33955_33974[1] = 8);
} else
{var statearr_33956_33975 = state_33949__$1;(statearr_33956_33975[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33950 === 6))
{var inst_33932 = (state_33949[7]);var state_33949__$1 = state_33949;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33949__$1,11,to,inst_33932);
} else
{if((state_val_33950 === 7))
{var inst_33945 = (state_33949[2]);var state_33949__$1 = state_33949;var statearr_33957_33976 = state_33949__$1;(statearr_33957_33976[2] = inst_33945);
(statearr_33957_33976[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33950 === 8))
{var inst_33936 = cljs.core.async.close_BANG_.call(null,to);var state_33949__$1 = state_33949;var statearr_33958_33977 = state_33949__$1;(statearr_33958_33977[2] = inst_33936);
(statearr_33958_33977[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33950 === 9))
{var state_33949__$1 = state_33949;var statearr_33959_33978 = state_33949__$1;(statearr_33959_33978[2] = null);
(statearr_33959_33978[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33950 === 10))
{var inst_33939 = (state_33949[2]);var state_33949__$1 = state_33949;var statearr_33960_33979 = state_33949__$1;(statearr_33960_33979[2] = inst_33939);
(statearr_33960_33979[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33950 === 11))
{var inst_33942 = (state_33949[2]);var state_33949__$1 = (function (){var statearr_33961 = state_33949;(statearr_33961[8] = inst_33942);
return statearr_33961;
})();var statearr_33962_33980 = state_33949__$1;(statearr_33962_33980[2] = null);
(statearr_33962_33980[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_33966 = [null,null,null,null,null,null,null,null,null];(statearr_33966[0] = state_machine__5507__auto__);
(statearr_33966[1] = 1);
return statearr_33966;
});
var state_machine__5507__auto____1 = (function (state_33949){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33949);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33967){if((e33967 instanceof Object))
{var ex__5510__auto__ = e33967;var statearr_33968_33981 = state_33949;(statearr_33968_33981[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33949);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33967;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33982 = state_33949;
state_33949 = G__33982;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33949){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33969 = f__5522__auto__.call(null);(statearr_33969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33970);
return statearr_33969;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___34069 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34047){var state_val_34048 = (state_34047[1]);if((state_val_34048 === 1))
{var state_34047__$1 = state_34047;var statearr_34049_34070 = state_34047__$1;(statearr_34049_34070[2] = null);
(statearr_34049_34070[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34048 === 2))
{var state_34047__$1 = state_34047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34047__$1,4,ch);
} else
{if((state_val_34048 === 3))
{var inst_34045 = (state_34047[2]);var state_34047__$1 = state_34047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34047__$1,inst_34045);
} else
{if((state_val_34048 === 4))
{var inst_34028 = (state_34047[7]);var inst_34028__$1 = (state_34047[2]);var inst_34029 = (inst_34028__$1 == null);var state_34047__$1 = (function (){var statearr_34050 = state_34047;(statearr_34050[7] = inst_34028__$1);
return statearr_34050;
})();if(cljs.core.truth_(inst_34029))
{var statearr_34051_34071 = state_34047__$1;(statearr_34051_34071[1] = 5);
} else
{var statearr_34052_34072 = state_34047__$1;(statearr_34052_34072[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34048 === 5))
{var inst_34031 = cljs.core.async.close_BANG_.call(null,tc);var inst_34032 = cljs.core.async.close_BANG_.call(null,fc);var state_34047__$1 = (function (){var statearr_34053 = state_34047;(statearr_34053[8] = inst_34031);
return statearr_34053;
})();var statearr_34054_34073 = state_34047__$1;(statearr_34054_34073[2] = inst_34032);
(statearr_34054_34073[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34048 === 6))
{var inst_34028 = (state_34047[7]);var inst_34034 = p.call(null,inst_34028);var state_34047__$1 = state_34047;if(cljs.core.truth_(inst_34034))
{var statearr_34055_34074 = state_34047__$1;(statearr_34055_34074[1] = 9);
} else
{var statearr_34056_34075 = state_34047__$1;(statearr_34056_34075[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34048 === 7))
{var inst_34043 = (state_34047[2]);var state_34047__$1 = state_34047;var statearr_34057_34076 = state_34047__$1;(statearr_34057_34076[2] = inst_34043);
(statearr_34057_34076[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34048 === 8))
{var inst_34040 = (state_34047[2]);var state_34047__$1 = (function (){var statearr_34058 = state_34047;(statearr_34058[9] = inst_34040);
return statearr_34058;
})();var statearr_34059_34077 = state_34047__$1;(statearr_34059_34077[2] = null);
(statearr_34059_34077[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34048 === 9))
{var state_34047__$1 = state_34047;var statearr_34060_34078 = state_34047__$1;(statearr_34060_34078[2] = tc);
(statearr_34060_34078[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34048 === 10))
{var state_34047__$1 = state_34047;var statearr_34061_34079 = state_34047__$1;(statearr_34061_34079[2] = fc);
(statearr_34061_34079[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34048 === 11))
{var inst_34028 = (state_34047[7]);var inst_34038 = (state_34047[2]);var state_34047__$1 = state_34047;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34047__$1,8,inst_34038,inst_34028);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34065 = [null,null,null,null,null,null,null,null,null,null];(statearr_34065[0] = state_machine__5507__auto__);
(statearr_34065[1] = 1);
return statearr_34065;
});
var state_machine__5507__auto____1 = (function (state_34047){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34047);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34066){if((e34066 instanceof Object))
{var ex__5510__auto__ = e34066;var statearr_34067_34080 = state_34047;(statearr_34067_34080[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34047);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34081 = state_34047;
state_34047 = G__34081;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34047){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34068 = f__5522__auto__.call(null);(statearr_34068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34069);
return statearr_34068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34128){var state_val_34129 = (state_34128[1]);if((state_val_34129 === 7))
{var inst_34124 = (state_34128[2]);var state_34128__$1 = state_34128;var statearr_34130_34146 = state_34128__$1;(statearr_34130_34146[2] = inst_34124);
(statearr_34130_34146[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34129 === 6))
{var inst_34117 = (state_34128[7]);var inst_34114 = (state_34128[8]);var inst_34121 = f.call(null,inst_34114,inst_34117);var inst_34114__$1 = inst_34121;var state_34128__$1 = (function (){var statearr_34131 = state_34128;(statearr_34131[8] = inst_34114__$1);
return statearr_34131;
})();var statearr_34132_34147 = state_34128__$1;(statearr_34132_34147[2] = null);
(statearr_34132_34147[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34129 === 5))
{var inst_34114 = (state_34128[8]);var state_34128__$1 = state_34128;var statearr_34133_34148 = state_34128__$1;(statearr_34133_34148[2] = inst_34114);
(statearr_34133_34148[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34129 === 4))
{var inst_34117 = (state_34128[7]);var inst_34117__$1 = (state_34128[2]);var inst_34118 = (inst_34117__$1 == null);var state_34128__$1 = (function (){var statearr_34134 = state_34128;(statearr_34134[7] = inst_34117__$1);
return statearr_34134;
})();if(cljs.core.truth_(inst_34118))
{var statearr_34135_34149 = state_34128__$1;(statearr_34135_34149[1] = 5);
} else
{var statearr_34136_34150 = state_34128__$1;(statearr_34136_34150[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34129 === 3))
{var inst_34126 = (state_34128[2]);var state_34128__$1 = state_34128;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34128__$1,inst_34126);
} else
{if((state_val_34129 === 2))
{var state_34128__$1 = state_34128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34128__$1,4,ch);
} else
{if((state_val_34129 === 1))
{var inst_34114 = init;var state_34128__$1 = (function (){var statearr_34137 = state_34128;(statearr_34137[8] = inst_34114);
return statearr_34137;
})();var statearr_34138_34151 = state_34128__$1;(statearr_34138_34151[2] = null);
(statearr_34138_34151[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34142 = [null,null,null,null,null,null,null,null,null];(statearr_34142[0] = state_machine__5507__auto__);
(statearr_34142[1] = 1);
return statearr_34142;
});
var state_machine__5507__auto____1 = (function (state_34128){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34128);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34143){if((e34143 instanceof Object))
{var ex__5510__auto__ = e34143;var statearr_34144_34152 = state_34128;(statearr_34144_34152[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34128);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34143;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34153 = state_34128;
state_34128 = G__34153;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34128){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34145 = f__5522__auto__.call(null);(statearr_34145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34145;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34215){var state_val_34216 = (state_34215[1]);if((state_val_34216 === 1))
{var inst_34195 = cljs.core.seq.call(null,coll);var inst_34196 = inst_34195;var state_34215__$1 = (function (){var statearr_34217 = state_34215;(statearr_34217[7] = inst_34196);
return statearr_34217;
})();var statearr_34218_34236 = state_34215__$1;(statearr_34218_34236[2] = null);
(statearr_34218_34236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34216 === 2))
{var inst_34196 = (state_34215[7]);var state_34215__$1 = state_34215;if(cljs.core.truth_(inst_34196))
{var statearr_34219_34237 = state_34215__$1;(statearr_34219_34237[1] = 4);
} else
{var statearr_34220_34238 = state_34215__$1;(statearr_34220_34238[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34216 === 3))
{var inst_34213 = (state_34215[2]);var state_34215__$1 = state_34215;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34215__$1,inst_34213);
} else
{if((state_val_34216 === 4))
{var inst_34196 = (state_34215[7]);var inst_34199 = cljs.core.first.call(null,inst_34196);var state_34215__$1 = state_34215;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34215__$1,7,ch,inst_34199);
} else
{if((state_val_34216 === 5))
{var state_34215__$1 = state_34215;if(cljs.core.truth_(close_QMARK_))
{var statearr_34221_34239 = state_34215__$1;(statearr_34221_34239[1] = 8);
} else
{var statearr_34222_34240 = state_34215__$1;(statearr_34222_34240[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34216 === 6))
{var inst_34211 = (state_34215[2]);var state_34215__$1 = state_34215;var statearr_34223_34241 = state_34215__$1;(statearr_34223_34241[2] = inst_34211);
(statearr_34223_34241[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34216 === 7))
{var inst_34196 = (state_34215[7]);var inst_34201 = (state_34215[2]);var inst_34202 = cljs.core.next.call(null,inst_34196);var inst_34196__$1 = inst_34202;var state_34215__$1 = (function (){var statearr_34224 = state_34215;(statearr_34224[8] = inst_34201);
(statearr_34224[7] = inst_34196__$1);
return statearr_34224;
})();var statearr_34225_34242 = state_34215__$1;(statearr_34225_34242[2] = null);
(statearr_34225_34242[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34216 === 8))
{var inst_34206 = cljs.core.async.close_BANG_.call(null,ch);var state_34215__$1 = state_34215;var statearr_34226_34243 = state_34215__$1;(statearr_34226_34243[2] = inst_34206);
(statearr_34226_34243[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34216 === 9))
{var state_34215__$1 = state_34215;var statearr_34227_34244 = state_34215__$1;(statearr_34227_34244[2] = null);
(statearr_34227_34244[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34216 === 10))
{var inst_34209 = (state_34215[2]);var state_34215__$1 = state_34215;var statearr_34228_34245 = state_34215__$1;(statearr_34228_34245[2] = inst_34209);
(statearr_34228_34245[1] = 6);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34232 = [null,null,null,null,null,null,null,null,null];(statearr_34232[0] = state_machine__5507__auto__);
(statearr_34232[1] = 1);
return statearr_34232;
});
var state_machine__5507__auto____1 = (function (state_34215){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34215);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34233){if((e34233 instanceof Object))
{var ex__5510__auto__ = e34233;var statearr_34234_34246 = state_34215;(statearr_34234_34246[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34215);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34233;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34247 = state_34215;
state_34215 = G__34247;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34215){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34235 = f__5522__auto__.call(null);(statearr_34235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34235;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
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
cljs.core.async.Mux = (function (){var obj34249 = {};return obj34249;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3394__auto__ = _;if(and__3394__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4027__auto__ = (((_ == null))?null:_);return (function (){var or__3406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj34251 = {};return obj34251;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t34475 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34475 = (function (cs,ch,mult,meta34476){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta34476 = meta34476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34475.cljs$lang$type = true;
cljs.core.async.t34475.cljs$lang$ctorStr = "cljs.core.async/t34475";
cljs.core.async.t34475.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34475");
});})(cs))
;
cljs.core.async.t34475.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t34475.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t34475.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t34475.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t34475.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34475.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t34475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34477){var self__ = this;
var _34477__$1 = this;return self__.meta34476;
});})(cs))
;
cljs.core.async.t34475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34477,meta34476__$1){var self__ = this;
var _34477__$1 = this;return (new cljs.core.async.t34475(self__.cs,self__.ch,self__.mult,meta34476__$1));
});})(cs))
;
cljs.core.async.__GT_t34475 = ((function (cs){
return (function __GT_t34475(cs__$1,ch__$1,mult__$1,meta34476){return (new cljs.core.async.t34475(cs__$1,ch__$1,mult__$1,meta34476));
});})(cs))
;
}
return (new cljs.core.async.t34475(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___34698 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34612){var state_val_34613 = (state_34612[1]);if((state_val_34613 === 32))
{var inst_34480 = (state_34612[7]);var inst_34556 = (state_34612[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34612,31,Object,null,30);var inst_34563 = cljs.core.async.put_BANG_.call(null,inst_34556,inst_34480,done);var state_34612__$1 = state_34612;var statearr_34614_34699 = state_34612__$1;(statearr_34614_34699[2] = inst_34563);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34612__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 1))
{var state_34612__$1 = state_34612;var statearr_34615_34700 = state_34612__$1;(statearr_34615_34700[2] = null);
(statearr_34615_34700[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 33))
{var inst_34569 = (state_34612[9]);var inst_34571 = cljs.core.chunked_seq_QMARK_.call(null,inst_34569);var state_34612__$1 = state_34612;if(inst_34571)
{var statearr_34616_34701 = state_34612__$1;(statearr_34616_34701[1] = 36);
} else
{var statearr_34617_34702 = state_34612__$1;(statearr_34617_34702[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 2))
{var state_34612__$1 = state_34612;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34612__$1,4,ch);
} else
{if((state_val_34613 === 34))
{var state_34612__$1 = state_34612;var statearr_34618_34703 = state_34612__$1;(statearr_34618_34703[2] = null);
(statearr_34618_34703[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 3))
{var inst_34610 = (state_34612[2]);var state_34612__$1 = state_34612;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34612__$1,inst_34610);
} else
{if((state_val_34613 === 35))
{var inst_34594 = (state_34612[2]);var state_34612__$1 = state_34612;var statearr_34619_34704 = state_34612__$1;(statearr_34619_34704[2] = inst_34594);
(statearr_34619_34704[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 4))
{var inst_34480 = (state_34612[7]);var inst_34480__$1 = (state_34612[2]);var inst_34481 = (inst_34480__$1 == null);var state_34612__$1 = (function (){var statearr_34620 = state_34612;(statearr_34620[7] = inst_34480__$1);
return statearr_34620;
})();if(cljs.core.truth_(inst_34481))
{var statearr_34621_34705 = state_34612__$1;(statearr_34621_34705[1] = 5);
} else
{var statearr_34622_34706 = state_34612__$1;(statearr_34622_34706[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 36))
{var inst_34569 = (state_34612[9]);var inst_34573 = cljs.core.chunk_first.call(null,inst_34569);var inst_34574 = cljs.core.chunk_rest.call(null,inst_34569);var inst_34575 = cljs.core.count.call(null,inst_34573);var inst_34548 = inst_34574;var inst_34549 = inst_34573;var inst_34550 = inst_34575;var inst_34551 = 0;var state_34612__$1 = (function (){var statearr_34623 = state_34612;(statearr_34623[10] = inst_34549);
(statearr_34623[11] = inst_34548);
(statearr_34623[12] = inst_34550);
(statearr_34623[13] = inst_34551);
return statearr_34623;
})();var statearr_34624_34707 = state_34612__$1;(statearr_34624_34707[2] = null);
(statearr_34624_34707[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 5))
{var inst_34487 = cljs.core.deref.call(null,cs);var inst_34488 = cljs.core.seq.call(null,inst_34487);var inst_34489 = inst_34488;var inst_34490 = null;var inst_34491 = 0;var inst_34492 = 0;var state_34612__$1 = (function (){var statearr_34625 = state_34612;(statearr_34625[14] = inst_34490);
(statearr_34625[15] = inst_34489);
(statearr_34625[16] = inst_34492);
(statearr_34625[17] = inst_34491);
return statearr_34625;
})();var statearr_34626_34708 = state_34612__$1;(statearr_34626_34708[2] = null);
(statearr_34626_34708[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 37))
{var inst_34569 = (state_34612[9]);var inst_34578 = cljs.core.first.call(null,inst_34569);var state_34612__$1 = (function (){var statearr_34627 = state_34612;(statearr_34627[18] = inst_34578);
return statearr_34627;
})();var statearr_34628_34709 = state_34612__$1;(statearr_34628_34709[2] = null);
(statearr_34628_34709[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 6))
{var inst_34540 = (state_34612[19]);var inst_34539 = cljs.core.deref.call(null,cs);var inst_34540__$1 = cljs.core.keys.call(null,inst_34539);var inst_34541 = cljs.core.count.call(null,inst_34540__$1);var inst_34542 = cljs.core.reset_BANG_.call(null,dctr,inst_34541);var inst_34547 = cljs.core.seq.call(null,inst_34540__$1);var inst_34548 = inst_34547;var inst_34549 = null;var inst_34550 = 0;var inst_34551 = 0;var state_34612__$1 = (function (){var statearr_34629 = state_34612;(statearr_34629[10] = inst_34549);
(statearr_34629[19] = inst_34540__$1);
(statearr_34629[11] = inst_34548);
(statearr_34629[12] = inst_34550);
(statearr_34629[13] = inst_34551);
(statearr_34629[20] = inst_34542);
return statearr_34629;
})();var statearr_34630_34710 = state_34612__$1;(statearr_34630_34710[2] = null);
(statearr_34630_34710[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 38))
{var inst_34591 = (state_34612[2]);var state_34612__$1 = state_34612;var statearr_34631_34711 = state_34612__$1;(statearr_34631_34711[2] = inst_34591);
(statearr_34631_34711[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 7))
{var inst_34608 = (state_34612[2]);var state_34612__$1 = state_34612;var statearr_34632_34712 = state_34612__$1;(statearr_34632_34712[2] = inst_34608);
(statearr_34632_34712[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 39))
{var inst_34569 = (state_34612[9]);var inst_34587 = (state_34612[2]);var inst_34588 = cljs.core.next.call(null,inst_34569);var inst_34548 = inst_34588;var inst_34549 = null;var inst_34550 = 0;var inst_34551 = 0;var state_34612__$1 = (function (){var statearr_34633 = state_34612;(statearr_34633[10] = inst_34549);
(statearr_34633[11] = inst_34548);
(statearr_34633[12] = inst_34550);
(statearr_34633[13] = inst_34551);
(statearr_34633[21] = inst_34587);
return statearr_34633;
})();var statearr_34634_34713 = state_34612__$1;(statearr_34634_34713[2] = null);
(statearr_34634_34713[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 8))
{var inst_34492 = (state_34612[16]);var inst_34491 = (state_34612[17]);var inst_34494 = (inst_34492 < inst_34491);var inst_34495 = inst_34494;var state_34612__$1 = state_34612;if(cljs.core.truth_(inst_34495))
{var statearr_34635_34714 = state_34612__$1;(statearr_34635_34714[1] = 10);
} else
{var statearr_34636_34715 = state_34612__$1;(statearr_34636_34715[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 40))
{var inst_34578 = (state_34612[18]);var inst_34579 = (state_34612[2]);var inst_34580 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34581 = cljs.core.async.untap_STAR_.call(null,m,inst_34578);var state_34612__$1 = (function (){var statearr_34637 = state_34612;(statearr_34637[22] = inst_34580);
(statearr_34637[23] = inst_34579);
return statearr_34637;
})();var statearr_34638_34716 = state_34612__$1;(statearr_34638_34716[2] = inst_34581);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34612__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 9))
{var inst_34537 = (state_34612[2]);var state_34612__$1 = state_34612;var statearr_34639_34717 = state_34612__$1;(statearr_34639_34717[2] = inst_34537);
(statearr_34639_34717[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 41))
{var inst_34480 = (state_34612[7]);var inst_34578 = (state_34612[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34612,40,Object,null,39);var inst_34585 = cljs.core.async.put_BANG_.call(null,inst_34578,inst_34480,done);var state_34612__$1 = state_34612;var statearr_34640_34718 = state_34612__$1;(statearr_34640_34718[2] = inst_34585);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34612__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 10))
{var inst_34490 = (state_34612[14]);var inst_34492 = (state_34612[16]);var inst_34498 = cljs.core._nth.call(null,inst_34490,inst_34492);var inst_34499 = cljs.core.nth.call(null,inst_34498,0,null);var inst_34500 = cljs.core.nth.call(null,inst_34498,1,null);var state_34612__$1 = (function (){var statearr_34641 = state_34612;(statearr_34641[24] = inst_34499);
return statearr_34641;
})();if(cljs.core.truth_(inst_34500))
{var statearr_34642_34719 = state_34612__$1;(statearr_34642_34719[1] = 13);
} else
{var statearr_34643_34720 = state_34612__$1;(statearr_34643_34720[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 42))
{var state_34612__$1 = state_34612;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34612__$1,45,dchan);
} else
{if((state_val_34613 === 11))
{var inst_34489 = (state_34612[15]);var inst_34509 = (state_34612[25]);var inst_34509__$1 = cljs.core.seq.call(null,inst_34489);var state_34612__$1 = (function (){var statearr_34644 = state_34612;(statearr_34644[25] = inst_34509__$1);
return statearr_34644;
})();if(inst_34509__$1)
{var statearr_34645_34721 = state_34612__$1;(statearr_34645_34721[1] = 16);
} else
{var statearr_34646_34722 = state_34612__$1;(statearr_34646_34722[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 43))
{var state_34612__$1 = state_34612;var statearr_34647_34723 = state_34612__$1;(statearr_34647_34723[2] = null);
(statearr_34647_34723[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 12))
{var inst_34535 = (state_34612[2]);var state_34612__$1 = state_34612;var statearr_34648_34724 = state_34612__$1;(statearr_34648_34724[2] = inst_34535);
(statearr_34648_34724[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 44))
{var inst_34605 = (state_34612[2]);var state_34612__$1 = (function (){var statearr_34649 = state_34612;(statearr_34649[26] = inst_34605);
return statearr_34649;
})();var statearr_34650_34725 = state_34612__$1;(statearr_34650_34725[2] = null);
(statearr_34650_34725[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 13))
{var inst_34499 = (state_34612[24]);var inst_34502 = cljs.core.async.close_BANG_.call(null,inst_34499);var state_34612__$1 = state_34612;var statearr_34651_34726 = state_34612__$1;(statearr_34651_34726[2] = inst_34502);
(statearr_34651_34726[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 45))
{var inst_34602 = (state_34612[2]);var state_34612__$1 = state_34612;var statearr_34655_34727 = state_34612__$1;(statearr_34655_34727[2] = inst_34602);
(statearr_34655_34727[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 14))
{var state_34612__$1 = state_34612;var statearr_34656_34728 = state_34612__$1;(statearr_34656_34728[2] = null);
(statearr_34656_34728[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 15))
{var inst_34490 = (state_34612[14]);var inst_34489 = (state_34612[15]);var inst_34492 = (state_34612[16]);var inst_34491 = (state_34612[17]);var inst_34505 = (state_34612[2]);var inst_34506 = (inst_34492 + 1);var tmp34652 = inst_34490;var tmp34653 = inst_34489;var tmp34654 = inst_34491;var inst_34489__$1 = tmp34653;var inst_34490__$1 = tmp34652;var inst_34491__$1 = tmp34654;var inst_34492__$1 = inst_34506;var state_34612__$1 = (function (){var statearr_34657 = state_34612;(statearr_34657[27] = inst_34505);
(statearr_34657[14] = inst_34490__$1);
(statearr_34657[15] = inst_34489__$1);
(statearr_34657[16] = inst_34492__$1);
(statearr_34657[17] = inst_34491__$1);
return statearr_34657;
})();var statearr_34658_34729 = state_34612__$1;(statearr_34658_34729[2] = null);
(statearr_34658_34729[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 16))
{var inst_34509 = (state_34612[25]);var inst_34511 = cljs.core.chunked_seq_QMARK_.call(null,inst_34509);var state_34612__$1 = state_34612;if(inst_34511)
{var statearr_34659_34730 = state_34612__$1;(statearr_34659_34730[1] = 19);
} else
{var statearr_34660_34731 = state_34612__$1;(statearr_34660_34731[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 17))
{var state_34612__$1 = state_34612;var statearr_34661_34732 = state_34612__$1;(statearr_34661_34732[2] = null);
(statearr_34661_34732[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 18))
{var inst_34533 = (state_34612[2]);var state_34612__$1 = state_34612;var statearr_34662_34733 = state_34612__$1;(statearr_34662_34733[2] = inst_34533);
(statearr_34662_34733[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 19))
{var inst_34509 = (state_34612[25]);var inst_34513 = cljs.core.chunk_first.call(null,inst_34509);var inst_34514 = cljs.core.chunk_rest.call(null,inst_34509);var inst_34515 = cljs.core.count.call(null,inst_34513);var inst_34489 = inst_34514;var inst_34490 = inst_34513;var inst_34491 = inst_34515;var inst_34492 = 0;var state_34612__$1 = (function (){var statearr_34663 = state_34612;(statearr_34663[14] = inst_34490);
(statearr_34663[15] = inst_34489);
(statearr_34663[16] = inst_34492);
(statearr_34663[17] = inst_34491);
return statearr_34663;
})();var statearr_34664_34734 = state_34612__$1;(statearr_34664_34734[2] = null);
(statearr_34664_34734[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 20))
{var inst_34509 = (state_34612[25]);var inst_34519 = cljs.core.first.call(null,inst_34509);var inst_34520 = cljs.core.nth.call(null,inst_34519,0,null);var inst_34521 = cljs.core.nth.call(null,inst_34519,1,null);var state_34612__$1 = (function (){var statearr_34665 = state_34612;(statearr_34665[28] = inst_34520);
return statearr_34665;
})();if(cljs.core.truth_(inst_34521))
{var statearr_34666_34735 = state_34612__$1;(statearr_34666_34735[1] = 22);
} else
{var statearr_34667_34736 = state_34612__$1;(statearr_34667_34736[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 21))
{var inst_34530 = (state_34612[2]);var state_34612__$1 = state_34612;var statearr_34668_34737 = state_34612__$1;(statearr_34668_34737[2] = inst_34530);
(statearr_34668_34737[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 22))
{var inst_34520 = (state_34612[28]);var inst_34523 = cljs.core.async.close_BANG_.call(null,inst_34520);var state_34612__$1 = state_34612;var statearr_34669_34738 = state_34612__$1;(statearr_34669_34738[2] = inst_34523);
(statearr_34669_34738[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 23))
{var state_34612__$1 = state_34612;var statearr_34670_34739 = state_34612__$1;(statearr_34670_34739[2] = null);
(statearr_34670_34739[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 24))
{var inst_34509 = (state_34612[25]);var inst_34526 = (state_34612[2]);var inst_34527 = cljs.core.next.call(null,inst_34509);var inst_34489 = inst_34527;var inst_34490 = null;var inst_34491 = 0;var inst_34492 = 0;var state_34612__$1 = (function (){var statearr_34671 = state_34612;(statearr_34671[29] = inst_34526);
(statearr_34671[14] = inst_34490);
(statearr_34671[15] = inst_34489);
(statearr_34671[16] = inst_34492);
(statearr_34671[17] = inst_34491);
return statearr_34671;
})();var statearr_34672_34740 = state_34612__$1;(statearr_34672_34740[2] = null);
(statearr_34672_34740[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 25))
{var inst_34550 = (state_34612[12]);var inst_34551 = (state_34612[13]);var inst_34553 = (inst_34551 < inst_34550);var inst_34554 = inst_34553;var state_34612__$1 = state_34612;if(cljs.core.truth_(inst_34554))
{var statearr_34673_34741 = state_34612__$1;(statearr_34673_34741[1] = 27);
} else
{var statearr_34674_34742 = state_34612__$1;(statearr_34674_34742[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 26))
{var inst_34540 = (state_34612[19]);var inst_34598 = (state_34612[2]);var inst_34599 = cljs.core.seq.call(null,inst_34540);var state_34612__$1 = (function (){var statearr_34675 = state_34612;(statearr_34675[30] = inst_34598);
return statearr_34675;
})();if(inst_34599)
{var statearr_34676_34743 = state_34612__$1;(statearr_34676_34743[1] = 42);
} else
{var statearr_34677_34744 = state_34612__$1;(statearr_34677_34744[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 27))
{var inst_34549 = (state_34612[10]);var inst_34551 = (state_34612[13]);var inst_34556 = cljs.core._nth.call(null,inst_34549,inst_34551);var state_34612__$1 = (function (){var statearr_34678 = state_34612;(statearr_34678[8] = inst_34556);
return statearr_34678;
})();var statearr_34679_34745 = state_34612__$1;(statearr_34679_34745[2] = null);
(statearr_34679_34745[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 28))
{var inst_34569 = (state_34612[9]);var inst_34548 = (state_34612[11]);var inst_34569__$1 = cljs.core.seq.call(null,inst_34548);var state_34612__$1 = (function (){var statearr_34683 = state_34612;(statearr_34683[9] = inst_34569__$1);
return statearr_34683;
})();if(inst_34569__$1)
{var statearr_34684_34746 = state_34612__$1;(statearr_34684_34746[1] = 33);
} else
{var statearr_34685_34747 = state_34612__$1;(statearr_34685_34747[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 29))
{var inst_34596 = (state_34612[2]);var state_34612__$1 = state_34612;var statearr_34686_34748 = state_34612__$1;(statearr_34686_34748[2] = inst_34596);
(statearr_34686_34748[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 30))
{var inst_34549 = (state_34612[10]);var inst_34548 = (state_34612[11]);var inst_34550 = (state_34612[12]);var inst_34551 = (state_34612[13]);var inst_34565 = (state_34612[2]);var inst_34566 = (inst_34551 + 1);var tmp34680 = inst_34549;var tmp34681 = inst_34548;var tmp34682 = inst_34550;var inst_34548__$1 = tmp34681;var inst_34549__$1 = tmp34680;var inst_34550__$1 = tmp34682;var inst_34551__$1 = inst_34566;var state_34612__$1 = (function (){var statearr_34687 = state_34612;(statearr_34687[10] = inst_34549__$1);
(statearr_34687[31] = inst_34565);
(statearr_34687[11] = inst_34548__$1);
(statearr_34687[12] = inst_34550__$1);
(statearr_34687[13] = inst_34551__$1);
return statearr_34687;
})();var statearr_34688_34749 = state_34612__$1;(statearr_34688_34749[2] = null);
(statearr_34688_34749[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34613 === 31))
{var inst_34556 = (state_34612[8]);var inst_34557 = (state_34612[2]);var inst_34558 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34559 = cljs.core.async.untap_STAR_.call(null,m,inst_34556);var state_34612__$1 = (function (){var statearr_34689 = state_34612;(statearr_34689[32] = inst_34557);
(statearr_34689[33] = inst_34558);
return statearr_34689;
})();var statearr_34690_34750 = state_34612__$1;(statearr_34690_34750[2] = inst_34559);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34612__$1);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34694[0] = state_machine__5507__auto__);
(statearr_34694[1] = 1);
return statearr_34694;
});
var state_machine__5507__auto____1 = (function (state_34612){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34612);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34695){if((e34695 instanceof Object))
{var ex__5510__auto__ = e34695;var statearr_34696_34751 = state_34612;(statearr_34696_34751[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34612);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34752 = state_34612;
state_34612 = G__34752;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34612){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34697 = f__5522__auto__.call(null);(statearr_34697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34698);
return statearr_34697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
cljs.core.async.Mix = (function (){var obj34754 = {};return obj34754;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t34864 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34864 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta34865){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta34865 = meta34865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34864.cljs$lang$type = true;
cljs.core.async.t34864.cljs$lang$ctorStr = "cljs.core.async/t34864";
cljs.core.async.t34864.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34864");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34864.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t34864.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34864.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34864.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34864.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34864.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34864.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34864.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34866){var self__ = this;
var _34866__$1 = this;return self__.meta34865;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34866,meta34865__$1){var self__ = this;
var _34866__$1 = this;return (new cljs.core.async.t34864(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta34865__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t34864 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t34864(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34865){return (new cljs.core.async.t34864(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34865));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t34864(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___34973 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34931){var state_val_34932 = (state_34931[1]);if((state_val_34932 === 1))
{var inst_34870 = (state_34931[7]);var inst_34870__$1 = calc_state.call(null);var inst_34871 = cljs.core.seq_QMARK_.call(null,inst_34870__$1);var state_34931__$1 = (function (){var statearr_34933 = state_34931;(statearr_34933[7] = inst_34870__$1);
return statearr_34933;
})();if(inst_34871)
{var statearr_34934_34974 = state_34931__$1;(statearr_34934_34974[1] = 2);
} else
{var statearr_34935_34975 = state_34931__$1;(statearr_34935_34975[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 2))
{var inst_34870 = (state_34931[7]);var inst_34873 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34870);var state_34931__$1 = state_34931;var statearr_34936_34976 = state_34931__$1;(statearr_34936_34976[2] = inst_34873);
(statearr_34936_34976[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 3))
{var inst_34870 = (state_34931[7]);var state_34931__$1 = state_34931;var statearr_34937_34977 = state_34931__$1;(statearr_34937_34977[2] = inst_34870);
(statearr_34937_34977[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 4))
{var inst_34870 = (state_34931[7]);var inst_34876 = (state_34931[2]);var inst_34877 = cljs.core.get.call(null,inst_34876,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34878 = cljs.core.get.call(null,inst_34876,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34879 = cljs.core.get.call(null,inst_34876,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_34880 = inst_34870;var state_34931__$1 = (function (){var statearr_34938 = state_34931;(statearr_34938[8] = inst_34880);
(statearr_34938[9] = inst_34877);
(statearr_34938[10] = inst_34878);
(statearr_34938[11] = inst_34879);
return statearr_34938;
})();var statearr_34939_34978 = state_34931__$1;(statearr_34939_34978[2] = null);
(statearr_34939_34978[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 5))
{var inst_34880 = (state_34931[8]);var inst_34883 = cljs.core.seq_QMARK_.call(null,inst_34880);var state_34931__$1 = state_34931;if(inst_34883)
{var statearr_34940_34979 = state_34931__$1;(statearr_34940_34979[1] = 7);
} else
{var statearr_34941_34980 = state_34931__$1;(statearr_34941_34980[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 6))
{var inst_34929 = (state_34931[2]);var state_34931__$1 = state_34931;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34931__$1,inst_34929);
} else
{if((state_val_34932 === 7))
{var inst_34880 = (state_34931[8]);var inst_34885 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34880);var state_34931__$1 = state_34931;var statearr_34942_34981 = state_34931__$1;(statearr_34942_34981[2] = inst_34885);
(statearr_34942_34981[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 8))
{var inst_34880 = (state_34931[8]);var state_34931__$1 = state_34931;var statearr_34943_34982 = state_34931__$1;(statearr_34943_34982[2] = inst_34880);
(statearr_34943_34982[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 9))
{var inst_34888 = (state_34931[12]);var inst_34888__$1 = (state_34931[2]);var inst_34889 = cljs.core.get.call(null,inst_34888__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34890 = cljs.core.get.call(null,inst_34888__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34891 = cljs.core.get.call(null,inst_34888__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_34931__$1 = (function (){var statearr_34944 = state_34931;(statearr_34944[12] = inst_34888__$1);
(statearr_34944[13] = inst_34891);
(statearr_34944[14] = inst_34890);
return statearr_34944;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34931__$1,10,inst_34889);
} else
{if((state_val_34932 === 10))
{var inst_34896 = (state_34931[15]);var inst_34895 = (state_34931[16]);var inst_34894 = (state_34931[2]);var inst_34895__$1 = cljs.core.nth.call(null,inst_34894,0,null);var inst_34896__$1 = cljs.core.nth.call(null,inst_34894,1,null);var inst_34897 = (inst_34895__$1 == null);var inst_34898 = cljs.core._EQ_.call(null,inst_34896__$1,change);var inst_34899 = (inst_34897) || (inst_34898);var state_34931__$1 = (function (){var statearr_34945 = state_34931;(statearr_34945[15] = inst_34896__$1);
(statearr_34945[16] = inst_34895__$1);
return statearr_34945;
})();if(cljs.core.truth_(inst_34899))
{var statearr_34946_34983 = state_34931__$1;(statearr_34946_34983[1] = 11);
} else
{var statearr_34947_34984 = state_34931__$1;(statearr_34947_34984[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 11))
{var inst_34895 = (state_34931[16]);var inst_34901 = (inst_34895 == null);var state_34931__$1 = state_34931;if(cljs.core.truth_(inst_34901))
{var statearr_34948_34985 = state_34931__$1;(statearr_34948_34985[1] = 14);
} else
{var statearr_34949_34986 = state_34931__$1;(statearr_34949_34986[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 12))
{var inst_34896 = (state_34931[15]);var inst_34891 = (state_34931[13]);var inst_34910 = (state_34931[17]);var inst_34910__$1 = inst_34891.call(null,inst_34896);var state_34931__$1 = (function (){var statearr_34950 = state_34931;(statearr_34950[17] = inst_34910__$1);
return statearr_34950;
})();if(cljs.core.truth_(inst_34910__$1))
{var statearr_34951_34987 = state_34931__$1;(statearr_34951_34987[1] = 17);
} else
{var statearr_34952_34988 = state_34931__$1;(statearr_34952_34988[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 13))
{var inst_34927 = (state_34931[2]);var state_34931__$1 = state_34931;var statearr_34953_34989 = state_34931__$1;(statearr_34953_34989[2] = inst_34927);
(statearr_34953_34989[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 14))
{var inst_34896 = (state_34931[15]);var inst_34903 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34896);var state_34931__$1 = state_34931;var statearr_34954_34990 = state_34931__$1;(statearr_34954_34990[2] = inst_34903);
(statearr_34954_34990[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 15))
{var state_34931__$1 = state_34931;var statearr_34955_34991 = state_34931__$1;(statearr_34955_34991[2] = null);
(statearr_34955_34991[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 16))
{var inst_34906 = (state_34931[2]);var inst_34907 = calc_state.call(null);var inst_34880 = inst_34907;var state_34931__$1 = (function (){var statearr_34956 = state_34931;(statearr_34956[8] = inst_34880);
(statearr_34956[18] = inst_34906);
return statearr_34956;
})();var statearr_34957_34992 = state_34931__$1;(statearr_34957_34992[2] = null);
(statearr_34957_34992[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 17))
{var inst_34910 = (state_34931[17]);var state_34931__$1 = state_34931;var statearr_34958_34993 = state_34931__$1;(statearr_34958_34993[2] = inst_34910);
(statearr_34958_34993[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 18))
{var inst_34896 = (state_34931[15]);var inst_34891 = (state_34931[13]);var inst_34890 = (state_34931[14]);var inst_34913 = cljs.core.empty_QMARK_.call(null,inst_34891);var inst_34914 = inst_34890.call(null,inst_34896);var inst_34915 = cljs.core.not.call(null,inst_34914);var inst_34916 = (inst_34913) && (inst_34915);var state_34931__$1 = state_34931;var statearr_34959_34994 = state_34931__$1;(statearr_34959_34994[2] = inst_34916);
(statearr_34959_34994[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 19))
{var inst_34918 = (state_34931[2]);var state_34931__$1 = state_34931;if(cljs.core.truth_(inst_34918))
{var statearr_34960_34995 = state_34931__$1;(statearr_34960_34995[1] = 20);
} else
{var statearr_34961_34996 = state_34931__$1;(statearr_34961_34996[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 20))
{var inst_34895 = (state_34931[16]);var state_34931__$1 = state_34931;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34931__$1,23,out,inst_34895);
} else
{if((state_val_34932 === 21))
{var state_34931__$1 = state_34931;var statearr_34962_34997 = state_34931__$1;(statearr_34962_34997[2] = null);
(statearr_34962_34997[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 22))
{var inst_34888 = (state_34931[12]);var inst_34924 = (state_34931[2]);var inst_34880 = inst_34888;var state_34931__$1 = (function (){var statearr_34963 = state_34931;(statearr_34963[8] = inst_34880);
(statearr_34963[19] = inst_34924);
return statearr_34963;
})();var statearr_34964_34998 = state_34931__$1;(statearr_34964_34998[2] = null);
(statearr_34964_34998[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34932 === 23))
{var inst_34921 = (state_34931[2]);var state_34931__$1 = state_34931;var statearr_34965_34999 = state_34931__$1;(statearr_34965_34999[2] = inst_34921);
(statearr_34965_34999[1] = 22);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34969[0] = state_machine__5507__auto__);
(statearr_34969[1] = 1);
return statearr_34969;
});
var state_machine__5507__auto____1 = (function (state_34931){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34931);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34970){if((e34970 instanceof Object))
{var ex__5510__auto__ = e34970;var statearr_34971_35000 = state_34931;(statearr_34971_35000[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34931);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34970;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35001 = state_34931;
state_34931 = G__35001;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34931){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34972 = f__5522__auto__.call(null);(statearr_34972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34973);
return statearr_34972;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
cljs.core.async.Pub = (function (){var obj35003 = {};return obj35003;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
return (function (topic){var or__3406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3406__auto__,mults){
return (function (p1__35004_SHARP_){if(cljs.core.truth_(p1__35004_SHARP_.call(null,topic)))
{return p1__35004_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__35004_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t35129 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35129 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta35130){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta35130 = meta35130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35129.cljs$lang$type = true;
cljs.core.async.t35129.cljs$lang$ctorStr = "cljs.core.async/t35129";
cljs.core.async.t35129.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35129");
});})(mults,ensure_mult))
;
cljs.core.async.t35129.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t35129.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t35129.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t35129.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t35129.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t35129.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35129.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t35129.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35131){var self__ = this;
var _35131__$1 = this;return self__.meta35130;
});})(mults,ensure_mult))
;
cljs.core.async.t35129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35131,meta35130__$1){var self__ = this;
var _35131__$1 = this;return (new cljs.core.async.t35129(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta35130__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t35129 = ((function (mults,ensure_mult){
return (function __GT_t35129(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35130){return (new cljs.core.async.t35129(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35130));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t35129(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___35253 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35205){var state_val_35206 = (state_35205[1]);if((state_val_35206 === 1))
{var state_35205__$1 = state_35205;var statearr_35207_35254 = state_35205__$1;(statearr_35207_35254[2] = null);
(statearr_35207_35254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 2))
{var state_35205__$1 = state_35205;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35205__$1,4,ch);
} else
{if((state_val_35206 === 3))
{var inst_35203 = (state_35205[2]);var state_35205__$1 = state_35205;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35205__$1,inst_35203);
} else
{if((state_val_35206 === 4))
{var inst_35134 = (state_35205[7]);var inst_35134__$1 = (state_35205[2]);var inst_35135 = (inst_35134__$1 == null);var state_35205__$1 = (function (){var statearr_35208 = state_35205;(statearr_35208[7] = inst_35134__$1);
return statearr_35208;
})();if(cljs.core.truth_(inst_35135))
{var statearr_35209_35255 = state_35205__$1;(statearr_35209_35255[1] = 5);
} else
{var statearr_35210_35256 = state_35205__$1;(statearr_35210_35256[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 5))
{var inst_35141 = cljs.core.deref.call(null,mults);var inst_35142 = cljs.core.vals.call(null,inst_35141);var inst_35143 = cljs.core.seq.call(null,inst_35142);var inst_35144 = inst_35143;var inst_35145 = null;var inst_35146 = 0;var inst_35147 = 0;var state_35205__$1 = (function (){var statearr_35211 = state_35205;(statearr_35211[8] = inst_35147);
(statearr_35211[9] = inst_35146);
(statearr_35211[10] = inst_35144);
(statearr_35211[11] = inst_35145);
return statearr_35211;
})();var statearr_35212_35257 = state_35205__$1;(statearr_35212_35257[2] = null);
(statearr_35212_35257[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 6))
{var inst_35134 = (state_35205[7]);var inst_35182 = (state_35205[12]);var inst_35184 = (state_35205[13]);var inst_35182__$1 = topic_fn.call(null,inst_35134);var inst_35183 = cljs.core.deref.call(null,mults);var inst_35184__$1 = cljs.core.get.call(null,inst_35183,inst_35182__$1);var state_35205__$1 = (function (){var statearr_35213 = state_35205;(statearr_35213[12] = inst_35182__$1);
(statearr_35213[13] = inst_35184__$1);
return statearr_35213;
})();if(cljs.core.truth_(inst_35184__$1))
{var statearr_35214_35258 = state_35205__$1;(statearr_35214_35258[1] = 19);
} else
{var statearr_35215_35259 = state_35205__$1;(statearr_35215_35259[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 7))
{var inst_35201 = (state_35205[2]);var state_35205__$1 = state_35205;var statearr_35216_35260 = state_35205__$1;(statearr_35216_35260[2] = inst_35201);
(statearr_35216_35260[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 8))
{var inst_35147 = (state_35205[8]);var inst_35146 = (state_35205[9]);var inst_35149 = (inst_35147 < inst_35146);var inst_35150 = inst_35149;var state_35205__$1 = state_35205;if(cljs.core.truth_(inst_35150))
{var statearr_35220_35261 = state_35205__$1;(statearr_35220_35261[1] = 10);
} else
{var statearr_35221_35262 = state_35205__$1;(statearr_35221_35262[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 9))
{var inst_35180 = (state_35205[2]);var state_35205__$1 = state_35205;var statearr_35222_35263 = state_35205__$1;(statearr_35222_35263[2] = inst_35180);
(statearr_35222_35263[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 10))
{var inst_35147 = (state_35205[8]);var inst_35146 = (state_35205[9]);var inst_35144 = (state_35205[10]);var inst_35145 = (state_35205[11]);var inst_35152 = cljs.core._nth.call(null,inst_35145,inst_35147);var inst_35153 = cljs.core.async.muxch_STAR_.call(null,inst_35152);var inst_35154 = cljs.core.async.close_BANG_.call(null,inst_35153);var inst_35155 = (inst_35147 + 1);var tmp35217 = inst_35146;var tmp35218 = inst_35144;var tmp35219 = inst_35145;var inst_35144__$1 = tmp35218;var inst_35145__$1 = tmp35219;var inst_35146__$1 = tmp35217;var inst_35147__$1 = inst_35155;var state_35205__$1 = (function (){var statearr_35223 = state_35205;(statearr_35223[8] = inst_35147__$1);
(statearr_35223[9] = inst_35146__$1);
(statearr_35223[10] = inst_35144__$1);
(statearr_35223[11] = inst_35145__$1);
(statearr_35223[14] = inst_35154);
return statearr_35223;
})();var statearr_35224_35264 = state_35205__$1;(statearr_35224_35264[2] = null);
(statearr_35224_35264[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 11))
{var inst_35144 = (state_35205[10]);var inst_35158 = (state_35205[15]);var inst_35158__$1 = cljs.core.seq.call(null,inst_35144);var state_35205__$1 = (function (){var statearr_35225 = state_35205;(statearr_35225[15] = inst_35158__$1);
return statearr_35225;
})();if(inst_35158__$1)
{var statearr_35226_35265 = state_35205__$1;(statearr_35226_35265[1] = 13);
} else
{var statearr_35227_35266 = state_35205__$1;(statearr_35227_35266[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 12))
{var inst_35178 = (state_35205[2]);var state_35205__$1 = state_35205;var statearr_35228_35267 = state_35205__$1;(statearr_35228_35267[2] = inst_35178);
(statearr_35228_35267[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 13))
{var inst_35158 = (state_35205[15]);var inst_35160 = cljs.core.chunked_seq_QMARK_.call(null,inst_35158);var state_35205__$1 = state_35205;if(inst_35160)
{var statearr_35229_35268 = state_35205__$1;(statearr_35229_35268[1] = 16);
} else
{var statearr_35230_35269 = state_35205__$1;(statearr_35230_35269[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 14))
{var state_35205__$1 = state_35205;var statearr_35231_35270 = state_35205__$1;(statearr_35231_35270[2] = null);
(statearr_35231_35270[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 15))
{var inst_35176 = (state_35205[2]);var state_35205__$1 = state_35205;var statearr_35232_35271 = state_35205__$1;(statearr_35232_35271[2] = inst_35176);
(statearr_35232_35271[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 16))
{var inst_35158 = (state_35205[15]);var inst_35162 = cljs.core.chunk_first.call(null,inst_35158);var inst_35163 = cljs.core.chunk_rest.call(null,inst_35158);var inst_35164 = cljs.core.count.call(null,inst_35162);var inst_35144 = inst_35163;var inst_35145 = inst_35162;var inst_35146 = inst_35164;var inst_35147 = 0;var state_35205__$1 = (function (){var statearr_35233 = state_35205;(statearr_35233[8] = inst_35147);
(statearr_35233[9] = inst_35146);
(statearr_35233[10] = inst_35144);
(statearr_35233[11] = inst_35145);
return statearr_35233;
})();var statearr_35234_35272 = state_35205__$1;(statearr_35234_35272[2] = null);
(statearr_35234_35272[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 17))
{var inst_35158 = (state_35205[15]);var inst_35167 = cljs.core.first.call(null,inst_35158);var inst_35168 = cljs.core.async.muxch_STAR_.call(null,inst_35167);var inst_35169 = cljs.core.async.close_BANG_.call(null,inst_35168);var inst_35170 = cljs.core.next.call(null,inst_35158);var inst_35144 = inst_35170;var inst_35145 = null;var inst_35146 = 0;var inst_35147 = 0;var state_35205__$1 = (function (){var statearr_35235 = state_35205;(statearr_35235[8] = inst_35147);
(statearr_35235[9] = inst_35146);
(statearr_35235[10] = inst_35144);
(statearr_35235[11] = inst_35145);
(statearr_35235[16] = inst_35169);
return statearr_35235;
})();var statearr_35236_35273 = state_35205__$1;(statearr_35236_35273[2] = null);
(statearr_35236_35273[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 18))
{var inst_35173 = (state_35205[2]);var state_35205__$1 = state_35205;var statearr_35237_35274 = state_35205__$1;(statearr_35237_35274[2] = inst_35173);
(statearr_35237_35274[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 19))
{var state_35205__$1 = state_35205;var statearr_35238_35275 = state_35205__$1;(statearr_35238_35275[2] = null);
(statearr_35238_35275[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 20))
{var state_35205__$1 = state_35205;var statearr_35239_35276 = state_35205__$1;(statearr_35239_35276[2] = null);
(statearr_35239_35276[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 21))
{var inst_35198 = (state_35205[2]);var state_35205__$1 = (function (){var statearr_35240 = state_35205;(statearr_35240[17] = inst_35198);
return statearr_35240;
})();var statearr_35241_35277 = state_35205__$1;(statearr_35241_35277[2] = null);
(statearr_35241_35277[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 22))
{var inst_35195 = (state_35205[2]);var state_35205__$1 = state_35205;var statearr_35242_35278 = state_35205__$1;(statearr_35242_35278[2] = inst_35195);
(statearr_35242_35278[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 23))
{var inst_35182 = (state_35205[12]);var inst_35186 = (state_35205[2]);var inst_35187 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35182);var state_35205__$1 = (function (){var statearr_35243 = state_35205;(statearr_35243[18] = inst_35186);
return statearr_35243;
})();var statearr_35244_35279 = state_35205__$1;(statearr_35244_35279[2] = inst_35187);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35205__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35206 === 24))
{var inst_35134 = (state_35205[7]);var inst_35184 = (state_35205[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35205,23,Object,null,22);var inst_35191 = cljs.core.async.muxch_STAR_.call(null,inst_35184);var state_35205__$1 = state_35205;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35205__$1,25,inst_35191,inst_35134);
} else
{if((state_val_35206 === 25))
{var inst_35193 = (state_35205[2]);var state_35205__$1 = state_35205;var statearr_35245_35280 = state_35205__$1;(statearr_35245_35280[2] = inst_35193);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35205__$1);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35249[0] = state_machine__5507__auto__);
(statearr_35249[1] = 1);
return statearr_35249;
});
var state_machine__5507__auto____1 = (function (state_35205){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35205);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35250){if((e35250 instanceof Object))
{var ex__5510__auto__ = e35250;var statearr_35251_35281 = state_35205;(statearr_35251_35281[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35205);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35282 = state_35205;
state_35205 = G__35282;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35205){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35252 = f__5522__auto__.call(null);(statearr_35252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35253);
return statearr_35252;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
,cljs.core.range.call(null,cnt));var c__5521__auto___35419 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35389){var state_val_35390 = (state_35389[1]);if((state_val_35390 === 1))
{var state_35389__$1 = state_35389;var statearr_35391_35420 = state_35389__$1;(statearr_35391_35420[2] = null);
(statearr_35391_35420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35390 === 2))
{var inst_35352 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_35353 = 0;var state_35389__$1 = (function (){var statearr_35392 = state_35389;(statearr_35392[7] = inst_35353);
(statearr_35392[8] = inst_35352);
return statearr_35392;
})();var statearr_35393_35421 = state_35389__$1;(statearr_35393_35421[2] = null);
(statearr_35393_35421[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35390 === 3))
{var inst_35387 = (state_35389[2]);var state_35389__$1 = state_35389;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35389__$1,inst_35387);
} else
{if((state_val_35390 === 4))
{var inst_35353 = (state_35389[7]);var inst_35355 = (inst_35353 < cnt);var state_35389__$1 = state_35389;if(cljs.core.truth_(inst_35355))
{var statearr_35394_35422 = state_35389__$1;(statearr_35394_35422[1] = 6);
} else
{var statearr_35395_35423 = state_35389__$1;(statearr_35395_35423[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35390 === 5))
{var inst_35373 = (state_35389[2]);var state_35389__$1 = (function (){var statearr_35396 = state_35389;(statearr_35396[9] = inst_35373);
return statearr_35396;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35389__$1,12,dchan);
} else
{if((state_val_35390 === 6))
{var state_35389__$1 = state_35389;var statearr_35397_35424 = state_35389__$1;(statearr_35397_35424[2] = null);
(statearr_35397_35424[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35390 === 7))
{var state_35389__$1 = state_35389;var statearr_35398_35425 = state_35389__$1;(statearr_35398_35425[2] = null);
(statearr_35398_35425[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35390 === 8))
{var inst_35371 = (state_35389[2]);var state_35389__$1 = state_35389;var statearr_35399_35426 = state_35389__$1;(statearr_35399_35426[2] = inst_35371);
(statearr_35399_35426[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35390 === 9))
{var inst_35353 = (state_35389[7]);var inst_35366 = (state_35389[2]);var inst_35367 = (inst_35353 + 1);var inst_35353__$1 = inst_35367;var state_35389__$1 = (function (){var statearr_35400 = state_35389;(statearr_35400[7] = inst_35353__$1);
(statearr_35400[10] = inst_35366);
return statearr_35400;
})();var statearr_35401_35427 = state_35389__$1;(statearr_35401_35427[2] = null);
(statearr_35401_35427[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35390 === 10))
{var inst_35357 = (state_35389[2]);var inst_35358 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_35389__$1 = (function (){var statearr_35402 = state_35389;(statearr_35402[11] = inst_35357);
return statearr_35402;
})();var statearr_35403_35428 = state_35389__$1;(statearr_35403_35428[2] = inst_35358);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35389__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35390 === 11))
{var inst_35353 = (state_35389[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35389,10,Object,null,9);var inst_35362 = chs__$1.call(null,inst_35353);var inst_35363 = done.call(null,inst_35353);var inst_35364 = cljs.core.async.take_BANG_.call(null,inst_35362,inst_35363);var state_35389__$1 = state_35389;var statearr_35404_35429 = state_35389__$1;(statearr_35404_35429[2] = inst_35364);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35389__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35390 === 12))
{var inst_35375 = (state_35389[12]);var inst_35375__$1 = (state_35389[2]);var inst_35376 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35375__$1);var state_35389__$1 = (function (){var statearr_35405 = state_35389;(statearr_35405[12] = inst_35375__$1);
return statearr_35405;
})();if(cljs.core.truth_(inst_35376))
{var statearr_35406_35430 = state_35389__$1;(statearr_35406_35430[1] = 13);
} else
{var statearr_35407_35431 = state_35389__$1;(statearr_35407_35431[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35390 === 13))
{var inst_35378 = cljs.core.async.close_BANG_.call(null,out);var state_35389__$1 = state_35389;var statearr_35408_35432 = state_35389__$1;(statearr_35408_35432[2] = inst_35378);
(statearr_35408_35432[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35390 === 14))
{var inst_35375 = (state_35389[12]);var inst_35380 = cljs.core.apply.call(null,f,inst_35375);var state_35389__$1 = state_35389;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35389__$1,16,out,inst_35380);
} else
{if((state_val_35390 === 15))
{var inst_35385 = (state_35389[2]);var state_35389__$1 = state_35389;var statearr_35409_35433 = state_35389__$1;(statearr_35409_35433[2] = inst_35385);
(statearr_35409_35433[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35390 === 16))
{var inst_35382 = (state_35389[2]);var state_35389__$1 = (function (){var statearr_35410 = state_35389;(statearr_35410[13] = inst_35382);
return statearr_35410;
})();var statearr_35411_35434 = state_35389__$1;(statearr_35411_35434[2] = null);
(statearr_35411_35434[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35415[0] = state_machine__5507__auto__);
(statearr_35415[1] = 1);
return statearr_35415;
});
var state_machine__5507__auto____1 = (function (state_35389){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35389);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35416){if((e35416 instanceof Object))
{var ex__5510__auto__ = e35416;var statearr_35417_35435 = state_35389;(statearr_35417_35435[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35389);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35416;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35436 = state_35389;
state_35389 = G__35436;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35389){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35418 = f__5522__auto__.call(null);(statearr_35418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35419);
return statearr_35418;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35544 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35520){var state_val_35521 = (state_35520[1]);if((state_val_35521 === 1))
{var inst_35491 = cljs.core.vec.call(null,chs);var inst_35492 = inst_35491;var state_35520__$1 = (function (){var statearr_35522 = state_35520;(statearr_35522[7] = inst_35492);
return statearr_35522;
})();var statearr_35523_35545 = state_35520__$1;(statearr_35523_35545[2] = null);
(statearr_35523_35545[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35521 === 2))
{var inst_35492 = (state_35520[7]);var inst_35494 = cljs.core.count.call(null,inst_35492);var inst_35495 = (inst_35494 > 0);var state_35520__$1 = state_35520;if(cljs.core.truth_(inst_35495))
{var statearr_35524_35546 = state_35520__$1;(statearr_35524_35546[1] = 4);
} else
{var statearr_35525_35547 = state_35520__$1;(statearr_35525_35547[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35521 === 3))
{var inst_35518 = (state_35520[2]);var state_35520__$1 = state_35520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35520__$1,inst_35518);
} else
{if((state_val_35521 === 4))
{var inst_35492 = (state_35520[7]);var state_35520__$1 = state_35520;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35520__$1,7,inst_35492);
} else
{if((state_val_35521 === 5))
{var inst_35514 = cljs.core.async.close_BANG_.call(null,out);var state_35520__$1 = state_35520;var statearr_35526_35548 = state_35520__$1;(statearr_35526_35548[2] = inst_35514);
(statearr_35526_35548[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35521 === 6))
{var inst_35516 = (state_35520[2]);var state_35520__$1 = state_35520;var statearr_35527_35549 = state_35520__$1;(statearr_35527_35549[2] = inst_35516);
(statearr_35527_35549[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35521 === 7))
{var inst_35500 = (state_35520[8]);var inst_35499 = (state_35520[9]);var inst_35499__$1 = (state_35520[2]);var inst_35500__$1 = cljs.core.nth.call(null,inst_35499__$1,0,null);var inst_35501 = cljs.core.nth.call(null,inst_35499__$1,1,null);var inst_35502 = (inst_35500__$1 == null);var state_35520__$1 = (function (){var statearr_35528 = state_35520;(statearr_35528[10] = inst_35501);
(statearr_35528[8] = inst_35500__$1);
(statearr_35528[9] = inst_35499__$1);
return statearr_35528;
})();if(cljs.core.truth_(inst_35502))
{var statearr_35529_35550 = state_35520__$1;(statearr_35529_35550[1] = 8);
} else
{var statearr_35530_35551 = state_35520__$1;(statearr_35530_35551[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35521 === 8))
{var inst_35501 = (state_35520[10]);var inst_35500 = (state_35520[8]);var inst_35492 = (state_35520[7]);var inst_35499 = (state_35520[9]);var inst_35504 = (function (){var c = inst_35501;var v = inst_35500;var vec__35497 = inst_35499;var cs = inst_35492;return ((function (c,v,vec__35497,cs,inst_35501,inst_35500,inst_35492,inst_35499,state_val_35521){
return (function (p1__35437_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__35437_SHARP_);
});
;})(c,v,vec__35497,cs,inst_35501,inst_35500,inst_35492,inst_35499,state_val_35521))
})();var inst_35505 = cljs.core.filterv.call(null,inst_35504,inst_35492);var inst_35492__$1 = inst_35505;var state_35520__$1 = (function (){var statearr_35531 = state_35520;(statearr_35531[7] = inst_35492__$1);
return statearr_35531;
})();var statearr_35532_35552 = state_35520__$1;(statearr_35532_35552[2] = null);
(statearr_35532_35552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35521 === 9))
{var inst_35500 = (state_35520[8]);var state_35520__$1 = state_35520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35520__$1,11,out,inst_35500);
} else
{if((state_val_35521 === 10))
{var inst_35512 = (state_35520[2]);var state_35520__$1 = state_35520;var statearr_35534_35553 = state_35520__$1;(statearr_35534_35553[2] = inst_35512);
(statearr_35534_35553[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35521 === 11))
{var inst_35492 = (state_35520[7]);var inst_35509 = (state_35520[2]);var tmp35533 = inst_35492;var inst_35492__$1 = tmp35533;var state_35520__$1 = (function (){var statearr_35535 = state_35520;(statearr_35535[11] = inst_35509);
(statearr_35535[7] = inst_35492__$1);
return statearr_35535;
})();var statearr_35536_35554 = state_35520__$1;(statearr_35536_35554[2] = null);
(statearr_35536_35554[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35540 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35540[0] = state_machine__5507__auto__);
(statearr_35540[1] = 1);
return statearr_35540;
});
var state_machine__5507__auto____1 = (function (state_35520){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35520);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35541){if((e35541 instanceof Object))
{var ex__5510__auto__ = e35541;var statearr_35542_35555 = state_35520;(statearr_35542_35555[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35520);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35541;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35556 = state_35520;
state_35520 = G__35556;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35520){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35543 = f__5522__auto__.call(null);(statearr_35543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35544);
return statearr_35543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35649 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35626){var state_val_35627 = (state_35626[1]);if((state_val_35627 === 1))
{var inst_35603 = 0;var state_35626__$1 = (function (){var statearr_35628 = state_35626;(statearr_35628[7] = inst_35603);
return statearr_35628;
})();var statearr_35629_35650 = state_35626__$1;(statearr_35629_35650[2] = null);
(statearr_35629_35650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35627 === 2))
{var inst_35603 = (state_35626[7]);var inst_35605 = (inst_35603 < n);var state_35626__$1 = state_35626;if(cljs.core.truth_(inst_35605))
{var statearr_35630_35651 = state_35626__$1;(statearr_35630_35651[1] = 4);
} else
{var statearr_35631_35652 = state_35626__$1;(statearr_35631_35652[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35627 === 3))
{var inst_35623 = (state_35626[2]);var inst_35624 = cljs.core.async.close_BANG_.call(null,out);var state_35626__$1 = (function (){var statearr_35632 = state_35626;(statearr_35632[8] = inst_35623);
return statearr_35632;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35626__$1,inst_35624);
} else
{if((state_val_35627 === 4))
{var state_35626__$1 = state_35626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35626__$1,7,ch);
} else
{if((state_val_35627 === 5))
{var state_35626__$1 = state_35626;var statearr_35633_35653 = state_35626__$1;(statearr_35633_35653[2] = null);
(statearr_35633_35653[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35627 === 6))
{var inst_35621 = (state_35626[2]);var state_35626__$1 = state_35626;var statearr_35634_35654 = state_35626__$1;(statearr_35634_35654[2] = inst_35621);
(statearr_35634_35654[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35627 === 7))
{var inst_35608 = (state_35626[9]);var inst_35608__$1 = (state_35626[2]);var inst_35609 = (inst_35608__$1 == null);var inst_35610 = cljs.core.not.call(null,inst_35609);var state_35626__$1 = (function (){var statearr_35635 = state_35626;(statearr_35635[9] = inst_35608__$1);
return statearr_35635;
})();if(inst_35610)
{var statearr_35636_35655 = state_35626__$1;(statearr_35636_35655[1] = 8);
} else
{var statearr_35637_35656 = state_35626__$1;(statearr_35637_35656[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35627 === 8))
{var inst_35608 = (state_35626[9]);var state_35626__$1 = state_35626;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35626__$1,11,out,inst_35608);
} else
{if((state_val_35627 === 9))
{var state_35626__$1 = state_35626;var statearr_35638_35657 = state_35626__$1;(statearr_35638_35657[2] = null);
(statearr_35638_35657[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35627 === 10))
{var inst_35618 = (state_35626[2]);var state_35626__$1 = state_35626;var statearr_35639_35658 = state_35626__$1;(statearr_35639_35658[2] = inst_35618);
(statearr_35639_35658[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35627 === 11))
{var inst_35603 = (state_35626[7]);var inst_35613 = (state_35626[2]);var inst_35614 = (inst_35603 + 1);var inst_35603__$1 = inst_35614;var state_35626__$1 = (function (){var statearr_35640 = state_35626;(statearr_35640[10] = inst_35613);
(statearr_35640[7] = inst_35603__$1);
return statearr_35640;
})();var statearr_35641_35659 = state_35626__$1;(statearr_35641_35659[2] = null);
(statearr_35641_35659[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35645 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35645[0] = state_machine__5507__auto__);
(statearr_35645[1] = 1);
return statearr_35645;
});
var state_machine__5507__auto____1 = (function (state_35626){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35626);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35646){if((e35646 instanceof Object))
{var ex__5510__auto__ = e35646;var statearr_35647_35660 = state_35626;(statearr_35647_35660[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35626);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35646;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35661 = state_35626;
state_35626 = G__35661;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35626){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35648 = f__5522__auto__.call(null);(statearr_35648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35649);
return statearr_35648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35758 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35733){var state_val_35734 = (state_35733[1]);if((state_val_35734 === 1))
{var inst_35710 = null;var state_35733__$1 = (function (){var statearr_35735 = state_35733;(statearr_35735[7] = inst_35710);
return statearr_35735;
})();var statearr_35736_35759 = state_35733__$1;(statearr_35736_35759[2] = null);
(statearr_35736_35759[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35734 === 2))
{var state_35733__$1 = state_35733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35733__$1,4,ch);
} else
{if((state_val_35734 === 3))
{var inst_35730 = (state_35733[2]);var inst_35731 = cljs.core.async.close_BANG_.call(null,out);var state_35733__$1 = (function (){var statearr_35737 = state_35733;(statearr_35737[8] = inst_35730);
return statearr_35737;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35733__$1,inst_35731);
} else
{if((state_val_35734 === 4))
{var inst_35713 = (state_35733[9]);var inst_35713__$1 = (state_35733[2]);var inst_35714 = (inst_35713__$1 == null);var inst_35715 = cljs.core.not.call(null,inst_35714);var state_35733__$1 = (function (){var statearr_35738 = state_35733;(statearr_35738[9] = inst_35713__$1);
return statearr_35738;
})();if(inst_35715)
{var statearr_35739_35760 = state_35733__$1;(statearr_35739_35760[1] = 5);
} else
{var statearr_35740_35761 = state_35733__$1;(statearr_35740_35761[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35734 === 5))
{var inst_35713 = (state_35733[9]);var inst_35710 = (state_35733[7]);var inst_35717 = cljs.core._EQ_.call(null,inst_35713,inst_35710);var state_35733__$1 = state_35733;if(inst_35717)
{var statearr_35741_35762 = state_35733__$1;(statearr_35741_35762[1] = 8);
} else
{var statearr_35742_35763 = state_35733__$1;(statearr_35742_35763[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35734 === 6))
{var state_35733__$1 = state_35733;var statearr_35744_35764 = state_35733__$1;(statearr_35744_35764[2] = null);
(statearr_35744_35764[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35734 === 7))
{var inst_35728 = (state_35733[2]);var state_35733__$1 = state_35733;var statearr_35745_35765 = state_35733__$1;(statearr_35745_35765[2] = inst_35728);
(statearr_35745_35765[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35734 === 8))
{var inst_35710 = (state_35733[7]);var tmp35743 = inst_35710;var inst_35710__$1 = tmp35743;var state_35733__$1 = (function (){var statearr_35746 = state_35733;(statearr_35746[7] = inst_35710__$1);
return statearr_35746;
})();var statearr_35747_35766 = state_35733__$1;(statearr_35747_35766[2] = null);
(statearr_35747_35766[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35734 === 9))
{var inst_35713 = (state_35733[9]);var state_35733__$1 = state_35733;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35733__$1,11,out,inst_35713);
} else
{if((state_val_35734 === 10))
{var inst_35725 = (state_35733[2]);var state_35733__$1 = state_35733;var statearr_35748_35767 = state_35733__$1;(statearr_35748_35767[2] = inst_35725);
(statearr_35748_35767[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35734 === 11))
{var inst_35713 = (state_35733[9]);var inst_35722 = (state_35733[2]);var inst_35710 = inst_35713;var state_35733__$1 = (function (){var statearr_35749 = state_35733;(statearr_35749[10] = inst_35722);
(statearr_35749[7] = inst_35710);
return statearr_35749;
})();var statearr_35750_35768 = state_35733__$1;(statearr_35750_35768[2] = null);
(statearr_35750_35768[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35754 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35754[0] = state_machine__5507__auto__);
(statearr_35754[1] = 1);
return statearr_35754;
});
var state_machine__5507__auto____1 = (function (state_35733){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35733);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35755){if((e35755 instanceof Object))
{var ex__5510__auto__ = e35755;var statearr_35756_35769 = state_35733;(statearr_35756_35769[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35733);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35770 = state_35733;
state_35733 = G__35770;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35733){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35757 = f__5522__auto__.call(null);(statearr_35757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35758);
return statearr_35757;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35905 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35875){var state_val_35876 = (state_35875[1]);if((state_val_35876 === 1))
{var inst_35838 = (new Array(n));var inst_35839 = inst_35838;var inst_35840 = 0;var state_35875__$1 = (function (){var statearr_35877 = state_35875;(statearr_35877[7] = inst_35839);
(statearr_35877[8] = inst_35840);
return statearr_35877;
})();var statearr_35878_35906 = state_35875__$1;(statearr_35878_35906[2] = null);
(statearr_35878_35906[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 2))
{var state_35875__$1 = state_35875;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35875__$1,4,ch);
} else
{if((state_val_35876 === 3))
{var inst_35873 = (state_35875[2]);var state_35875__$1 = state_35875;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35875__$1,inst_35873);
} else
{if((state_val_35876 === 4))
{var inst_35843 = (state_35875[9]);var inst_35843__$1 = (state_35875[2]);var inst_35844 = (inst_35843__$1 == null);var inst_35845 = cljs.core.not.call(null,inst_35844);var state_35875__$1 = (function (){var statearr_35879 = state_35875;(statearr_35879[9] = inst_35843__$1);
return statearr_35879;
})();if(inst_35845)
{var statearr_35880_35907 = state_35875__$1;(statearr_35880_35907[1] = 5);
} else
{var statearr_35881_35908 = state_35875__$1;(statearr_35881_35908[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 5))
{var inst_35839 = (state_35875[7]);var inst_35843 = (state_35875[9]);var inst_35848 = (state_35875[10]);var inst_35840 = (state_35875[8]);var inst_35847 = (inst_35839[inst_35840] = inst_35843);var inst_35848__$1 = (inst_35840 + 1);var inst_35849 = (inst_35848__$1 < n);var state_35875__$1 = (function (){var statearr_35882 = state_35875;(statearr_35882[10] = inst_35848__$1);
(statearr_35882[11] = inst_35847);
return statearr_35882;
})();if(cljs.core.truth_(inst_35849))
{var statearr_35883_35909 = state_35875__$1;(statearr_35883_35909[1] = 8);
} else
{var statearr_35884_35910 = state_35875__$1;(statearr_35884_35910[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 6))
{var inst_35840 = (state_35875[8]);var inst_35861 = (inst_35840 > 0);var state_35875__$1 = state_35875;if(cljs.core.truth_(inst_35861))
{var statearr_35886_35911 = state_35875__$1;(statearr_35886_35911[1] = 12);
} else
{var statearr_35887_35912 = state_35875__$1;(statearr_35887_35912[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 7))
{var inst_35871 = (state_35875[2]);var state_35875__$1 = state_35875;var statearr_35888_35913 = state_35875__$1;(statearr_35888_35913[2] = inst_35871);
(statearr_35888_35913[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 8))
{var inst_35839 = (state_35875[7]);var inst_35848 = (state_35875[10]);var tmp35885 = inst_35839;var inst_35839__$1 = tmp35885;var inst_35840 = inst_35848;var state_35875__$1 = (function (){var statearr_35889 = state_35875;(statearr_35889[7] = inst_35839__$1);
(statearr_35889[8] = inst_35840);
return statearr_35889;
})();var statearr_35890_35914 = state_35875__$1;(statearr_35890_35914[2] = null);
(statearr_35890_35914[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 9))
{var inst_35839 = (state_35875[7]);var inst_35853 = cljs.core.vec.call(null,inst_35839);var state_35875__$1 = state_35875;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35875__$1,11,out,inst_35853);
} else
{if((state_val_35876 === 10))
{var inst_35859 = (state_35875[2]);var state_35875__$1 = state_35875;var statearr_35891_35915 = state_35875__$1;(statearr_35891_35915[2] = inst_35859);
(statearr_35891_35915[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 11))
{var inst_35855 = (state_35875[2]);var inst_35856 = (new Array(n));var inst_35839 = inst_35856;var inst_35840 = 0;var state_35875__$1 = (function (){var statearr_35892 = state_35875;(statearr_35892[12] = inst_35855);
(statearr_35892[7] = inst_35839);
(statearr_35892[8] = inst_35840);
return statearr_35892;
})();var statearr_35893_35916 = state_35875__$1;(statearr_35893_35916[2] = null);
(statearr_35893_35916[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 12))
{var inst_35839 = (state_35875[7]);var inst_35863 = cljs.core.vec.call(null,inst_35839);var state_35875__$1 = state_35875;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35875__$1,15,out,inst_35863);
} else
{if((state_val_35876 === 13))
{var state_35875__$1 = state_35875;var statearr_35894_35917 = state_35875__$1;(statearr_35894_35917[2] = null);
(statearr_35894_35917[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 14))
{var inst_35868 = (state_35875[2]);var inst_35869 = cljs.core.async.close_BANG_.call(null,out);var state_35875__$1 = (function (){var statearr_35895 = state_35875;(statearr_35895[13] = inst_35868);
return statearr_35895;
})();var statearr_35896_35918 = state_35875__$1;(statearr_35896_35918[2] = inst_35869);
(statearr_35896_35918[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 15))
{var inst_35865 = (state_35875[2]);var state_35875__$1 = state_35875;var statearr_35897_35919 = state_35875__$1;(statearr_35897_35919[2] = inst_35865);
(statearr_35897_35919[1] = 14);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35901[0] = state_machine__5507__auto__);
(statearr_35901[1] = 1);
return statearr_35901;
});
var state_machine__5507__auto____1 = (function (state_35875){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35875);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35902){if((e35902 instanceof Object))
{var ex__5510__auto__ = e35902;var statearr_35903_35920 = state_35875;(statearr_35903_35920[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35875);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35902;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35921 = state_35875;
state_35875 = G__35921;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35875){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35904 = f__5522__auto__.call(null);(statearr_35904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35905);
return statearr_35904;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36064 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36034){var state_val_36035 = (state_36034[1]);if((state_val_36035 === 1))
{var inst_35993 = [];var inst_35994 = inst_35993;var inst_35995 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_36034__$1 = (function (){var statearr_36036 = state_36034;(statearr_36036[7] = inst_35995);
(statearr_36036[8] = inst_35994);
return statearr_36036;
})();var statearr_36037_36065 = state_36034__$1;(statearr_36037_36065[2] = null);
(statearr_36037_36065[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36035 === 2))
{var state_36034__$1 = state_36034;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36034__$1,4,ch);
} else
{if((state_val_36035 === 3))
{var inst_36032 = (state_36034[2]);var state_36034__$1 = state_36034;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36034__$1,inst_36032);
} else
{if((state_val_36035 === 4))
{var inst_35998 = (state_36034[9]);var inst_35998__$1 = (state_36034[2]);var inst_35999 = (inst_35998__$1 == null);var inst_36000 = cljs.core.not.call(null,inst_35999);var state_36034__$1 = (function (){var statearr_36038 = state_36034;(statearr_36038[9] = inst_35998__$1);
return statearr_36038;
})();if(inst_36000)
{var statearr_36039_36066 = state_36034__$1;(statearr_36039_36066[1] = 5);
} else
{var statearr_36040_36067 = state_36034__$1;(statearr_36040_36067[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36035 === 5))
{var inst_36002 = (state_36034[10]);var inst_35998 = (state_36034[9]);var inst_35995 = (state_36034[7]);var inst_36002__$1 = f.call(null,inst_35998);var inst_36003 = cljs.core._EQ_.call(null,inst_36002__$1,inst_35995);var inst_36004 = cljs.core.keyword_identical_QMARK_.call(null,inst_35995,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_36005 = (inst_36003) || (inst_36004);var state_36034__$1 = (function (){var statearr_36041 = state_36034;(statearr_36041[10] = inst_36002__$1);
return statearr_36041;
})();if(cljs.core.truth_(inst_36005))
{var statearr_36042_36068 = state_36034__$1;(statearr_36042_36068[1] = 8);
} else
{var statearr_36043_36069 = state_36034__$1;(statearr_36043_36069[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36035 === 6))
{var inst_35994 = (state_36034[8]);var inst_36019 = inst_35994.length;var inst_36020 = (inst_36019 > 0);var state_36034__$1 = state_36034;if(cljs.core.truth_(inst_36020))
{var statearr_36045_36070 = state_36034__$1;(statearr_36045_36070[1] = 12);
} else
{var statearr_36046_36071 = state_36034__$1;(statearr_36046_36071[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36035 === 7))
{var inst_36030 = (state_36034[2]);var state_36034__$1 = state_36034;var statearr_36047_36072 = state_36034__$1;(statearr_36047_36072[2] = inst_36030);
(statearr_36047_36072[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36035 === 8))
{var inst_36002 = (state_36034[10]);var inst_35998 = (state_36034[9]);var inst_35994 = (state_36034[8]);var inst_36007 = inst_35994.push(inst_35998);var tmp36044 = inst_35994;var inst_35994__$1 = tmp36044;var inst_35995 = inst_36002;var state_36034__$1 = (function (){var statearr_36048 = state_36034;(statearr_36048[11] = inst_36007);
(statearr_36048[7] = inst_35995);
(statearr_36048[8] = inst_35994__$1);
return statearr_36048;
})();var statearr_36049_36073 = state_36034__$1;(statearr_36049_36073[2] = null);
(statearr_36049_36073[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36035 === 9))
{var inst_35994 = (state_36034[8]);var inst_36010 = cljs.core.vec.call(null,inst_35994);var state_36034__$1 = state_36034;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36034__$1,11,out,inst_36010);
} else
{if((state_val_36035 === 10))
{var inst_36017 = (state_36034[2]);var state_36034__$1 = state_36034;var statearr_36050_36074 = state_36034__$1;(statearr_36050_36074[2] = inst_36017);
(statearr_36050_36074[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36035 === 11))
{var inst_36002 = (state_36034[10]);var inst_35998 = (state_36034[9]);var inst_36012 = (state_36034[2]);var inst_36013 = [];var inst_36014 = inst_36013.push(inst_35998);var inst_35994 = inst_36013;var inst_35995 = inst_36002;var state_36034__$1 = (function (){var statearr_36051 = state_36034;(statearr_36051[12] = inst_36014);
(statearr_36051[13] = inst_36012);
(statearr_36051[7] = inst_35995);
(statearr_36051[8] = inst_35994);
return statearr_36051;
})();var statearr_36052_36075 = state_36034__$1;(statearr_36052_36075[2] = null);
(statearr_36052_36075[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36035 === 12))
{var inst_35994 = (state_36034[8]);var inst_36022 = cljs.core.vec.call(null,inst_35994);var state_36034__$1 = state_36034;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36034__$1,15,out,inst_36022);
} else
{if((state_val_36035 === 13))
{var state_36034__$1 = state_36034;var statearr_36053_36076 = state_36034__$1;(statearr_36053_36076[2] = null);
(statearr_36053_36076[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36035 === 14))
{var inst_36027 = (state_36034[2]);var inst_36028 = cljs.core.async.close_BANG_.call(null,out);var state_36034__$1 = (function (){var statearr_36054 = state_36034;(statearr_36054[14] = inst_36027);
return statearr_36054;
})();var statearr_36055_36077 = state_36034__$1;(statearr_36055_36077[2] = inst_36028);
(statearr_36055_36077[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36035 === 15))
{var inst_36024 = (state_36034[2]);var state_36034__$1 = state_36034;var statearr_36056_36078 = state_36034__$1;(statearr_36056_36078[2] = inst_36024);
(statearr_36056_36078[1] = 14);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_36060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36060[0] = state_machine__5507__auto__);
(statearr_36060[1] = 1);
return statearr_36060;
});
var state_machine__5507__auto____1 = (function (state_36034){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36034);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36061){if((e36061 instanceof Object))
{var ex__5510__auto__ = e36061;var statearr_36062_36079 = state_36034;(statearr_36062_36079[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36034);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36080 = state_36034;
state_36034 = G__36080;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36034){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36063 = f__5522__auto__.call(null);(statearr_36063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36064);
return statearr_36063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
