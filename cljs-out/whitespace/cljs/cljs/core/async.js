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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34532 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34532 = (function (f,fn_handler,meta34533){
this.f = f;
this.fn_handler = fn_handler;
this.meta34533 = meta34533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34532.cljs$lang$type = true;
cljs.core.async.t34532.cljs$lang$ctorStr = "cljs.core.async/t34532";
cljs.core.async.t34532.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34532");
});
cljs.core.async.t34532.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34532.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34532.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34534){var self__ = this;
var _34534__$1 = this;return self__.meta34533;
});
cljs.core.async.t34532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34534,meta34533__$1){var self__ = this;
var _34534__$1 = this;return (new cljs.core.async.t34532(self__.f,self__.fn_handler,meta34533__$1));
});
cljs.core.async.__GT_t34532 = (function __GT_t34532(f__$1,fn_handler__$1,meta34533){return (new cljs.core.async.t34532(f__$1,fn_handler__$1,meta34533));
});
}
return (new cljs.core.async.t34532(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34536 = buff;if(G__34536)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__34536.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34536.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34536);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34536);
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
{var val_34537 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34537);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_34537);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___34538 = n;var x_34539 = 0;while(true){
if((x_34539 < n__4248__auto___34538))
{(a[x_34539] = 0);
{
var G__34540 = (x_34539 + 1);
x_34539 = G__34540;
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
var G__34541 = (i + 1);
i = G__34541;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34545 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34545 = (function (flag,alt_flag,meta34546){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34546 = meta34546;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34545.cljs$lang$type = true;
cljs.core.async.t34545.cljs$lang$ctorStr = "cljs.core.async/t34545";
cljs.core.async.t34545.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34545");
});
cljs.core.async.t34545.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t34545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t34545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34547){var self__ = this;
var _34547__$1 = this;return self__.meta34546;
});
cljs.core.async.t34545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34547,meta34546__$1){var self__ = this;
var _34547__$1 = this;return (new cljs.core.async.t34545(self__.flag,self__.alt_flag,meta34546__$1));
});
cljs.core.async.__GT_t34545 = (function __GT_t34545(flag__$1,alt_flag__$1,meta34546){return (new cljs.core.async.t34545(flag__$1,alt_flag__$1,meta34546));
});
}
return (new cljs.core.async.t34545(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34551 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34551 = (function (cb,flag,alt_handler,meta34552){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34552 = meta34552;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34551.cljs$lang$type = true;
cljs.core.async.t34551.cljs$lang$ctorStr = "cljs.core.async/t34551";
cljs.core.async.t34551.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34551");
});
cljs.core.async.t34551.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34551.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34551.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34553){var self__ = this;
var _34553__$1 = this;return self__.meta34552;
});
cljs.core.async.t34551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34553,meta34552__$1){var self__ = this;
var _34553__$1 = this;return (new cljs.core.async.t34551(self__.cb,self__.flag,self__.alt_handler,meta34552__$1));
});
cljs.core.async.__GT_t34551 = (function __GT_t34551(cb__$1,flag__$1,alt_handler__$1,meta34552){return (new cljs.core.async.t34551(cb__$1,flag__$1,alt_handler__$1,meta34552));
});
}
return (new cljs.core.async.t34551(cb,flag,alt_handler,null));
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
return (function (p1__34554_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34554_SHARP_,port], null));
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
var G__34555 = (i + 1);
i = G__34555;
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
var alts_BANG___delegate = function (ports,p__34556){var map__34558 = p__34556;var map__34558__$1 = ((cljs.core.seq_QMARK_.call(null,map__34558))?cljs.core.apply.call(null,cljs.core.hash_map,map__34558):map__34558);var opts = map__34558__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__34556 = null;if (arguments.length > 1) {
  p__34556 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34556);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34559){
var ports = cljs.core.first(arglist__34559);
var p__34556 = cljs.core.rest(arglist__34559);
return alts_BANG___delegate(ports,p__34556);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34567 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34567 = (function (ch,f,map_LT_,meta34568){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34568 = meta34568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34567.cljs$lang$type = true;
cljs.core.async.t34567.cljs$lang$ctorStr = "cljs.core.async/t34567";
cljs.core.async.t34567.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34567");
});
cljs.core.async.t34567.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34567.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34567.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34567.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34570 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34570 = (function (fn1,_,meta34568,ch,f,map_LT_,meta34571){
this.fn1 = fn1;
this._ = _;
this.meta34568 = meta34568;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34571 = meta34571;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34570.cljs$lang$type = true;
cljs.core.async.t34570.cljs$lang$ctorStr = "cljs.core.async/t34570";
cljs.core.async.t34570.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34570");
});
cljs.core.async.t34570.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34570.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t34570.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t34570.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__34560_SHARP_){return f1.call(null,(((p1__34560_SHARP_ == null))?null:self__.f.call(null,p1__34560_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t34570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34572){var self__ = this;
var _34572__$1 = this;return self__.meta34571;
});
cljs.core.async.t34570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34572,meta34571__$1){var self__ = this;
var _34572__$1 = this;return (new cljs.core.async.t34570(self__.fn1,self__._,self__.meta34568,self__.ch,self__.f,self__.map_LT_,meta34571__$1));
});
cljs.core.async.__GT_t34570 = (function __GT_t34570(fn1__$1,___$2,meta34568__$1,ch__$2,f__$2,map_LT___$2,meta34571){return (new cljs.core.async.t34570(fn1__$1,___$2,meta34568__$1,ch__$2,f__$2,map_LT___$2,meta34571));
});
}
return (new cljs.core.async.t34570(fn1,___$1,self__.meta34568,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t34567.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34567.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34569){var self__ = this;
var _34569__$1 = this;return self__.meta34568;
});
cljs.core.async.t34567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34569,meta34568__$1){var self__ = this;
var _34569__$1 = this;return (new cljs.core.async.t34567(self__.ch,self__.f,self__.map_LT_,meta34568__$1));
});
cljs.core.async.__GT_t34567 = (function __GT_t34567(ch__$1,f__$1,map_LT___$1,meta34568){return (new cljs.core.async.t34567(ch__$1,f__$1,map_LT___$1,meta34568));
});
}
return (new cljs.core.async.t34567(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34576 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34576 = (function (ch,f,map_GT_,meta34577){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34577 = meta34577;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34576.cljs$lang$type = true;
cljs.core.async.t34576.cljs$lang$ctorStr = "cljs.core.async/t34576";
cljs.core.async.t34576.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34576");
});
cljs.core.async.t34576.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34576.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34576.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34576.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34576.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34576.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34578){var self__ = this;
var _34578__$1 = this;return self__.meta34577;
});
cljs.core.async.t34576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34578,meta34577__$1){var self__ = this;
var _34578__$1 = this;return (new cljs.core.async.t34576(self__.ch,self__.f,self__.map_GT_,meta34577__$1));
});
cljs.core.async.__GT_t34576 = (function __GT_t34576(ch__$1,f__$1,map_GT___$1,meta34577){return (new cljs.core.async.t34576(ch__$1,f__$1,map_GT___$1,meta34577));
});
}
return (new cljs.core.async.t34576(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34582 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34582 = (function (ch,p,filter_GT_,meta34583){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34583 = meta34583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34582.cljs$lang$type = true;
cljs.core.async.t34582.cljs$lang$ctorStr = "cljs.core.async/t34582";
cljs.core.async.t34582.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34582");
});
cljs.core.async.t34582.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34582.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34582.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34582.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34582.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34582.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34584){var self__ = this;
var _34584__$1 = this;return self__.meta34583;
});
cljs.core.async.t34582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34584,meta34583__$1){var self__ = this;
var _34584__$1 = this;return (new cljs.core.async.t34582(self__.ch,self__.p,self__.filter_GT_,meta34583__$1));
});
cljs.core.async.__GT_t34582 = (function __GT_t34582(ch__$1,p__$1,filter_GT___$1,meta34583){return (new cljs.core.async.t34582(ch__$1,p__$1,filter_GT___$1,meta34583));
});
}
return (new cljs.core.async.t34582(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34667 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34646){var state_val_34647 = (state_34646[1]);if((state_val_34647 === 1))
{var state_34646__$1 = state_34646;var statearr_34648_34668 = state_34646__$1;(statearr_34648_34668[2] = null);
(statearr_34648_34668[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34647 === 2))
{var state_34646__$1 = state_34646;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34646__$1,4,ch);
} else
{if((state_val_34647 === 3))
{var inst_34644 = (state_34646[2]);var state_34646__$1 = state_34646;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34646__$1,inst_34644);
} else
{if((state_val_34647 === 4))
{var inst_34628 = (state_34646[7]);var inst_34628__$1 = (state_34646[2]);var inst_34629 = (inst_34628__$1 == null);var state_34646__$1 = (function (){var statearr_34649 = state_34646;(statearr_34649[7] = inst_34628__$1);
return statearr_34649;
})();if(cljs.core.truth_(inst_34629))
{var statearr_34650_34669 = state_34646__$1;(statearr_34650_34669[1] = 5);
} else
{var statearr_34651_34670 = state_34646__$1;(statearr_34651_34670[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34647 === 5))
{var inst_34631 = cljs.core.async.close_BANG_.call(null,out);var state_34646__$1 = state_34646;var statearr_34652_34671 = state_34646__$1;(statearr_34652_34671[2] = inst_34631);
(statearr_34652_34671[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34647 === 6))
{var inst_34628 = (state_34646[7]);var inst_34633 = p.call(null,inst_34628);var state_34646__$1 = state_34646;if(cljs.core.truth_(inst_34633))
{var statearr_34653_34672 = state_34646__$1;(statearr_34653_34672[1] = 8);
} else
{var statearr_34654_34673 = state_34646__$1;(statearr_34654_34673[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34647 === 7))
{var inst_34642 = (state_34646[2]);var state_34646__$1 = state_34646;var statearr_34655_34674 = state_34646__$1;(statearr_34655_34674[2] = inst_34642);
(statearr_34655_34674[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34647 === 8))
{var inst_34628 = (state_34646[7]);var state_34646__$1 = state_34646;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34646__$1,11,out,inst_34628);
} else
{if((state_val_34647 === 9))
{var state_34646__$1 = state_34646;var statearr_34656_34675 = state_34646__$1;(statearr_34656_34675[2] = null);
(statearr_34656_34675[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34647 === 10))
{var inst_34639 = (state_34646[2]);var state_34646__$1 = (function (){var statearr_34657 = state_34646;(statearr_34657[8] = inst_34639);
return statearr_34657;
})();var statearr_34658_34676 = state_34646__$1;(statearr_34658_34676[2] = null);
(statearr_34658_34676[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34647 === 11))
{var inst_34636 = (state_34646[2]);var state_34646__$1 = state_34646;var statearr_34659_34677 = state_34646__$1;(statearr_34659_34677[2] = inst_34636);
(statearr_34659_34677[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_34663 = [null,null,null,null,null,null,null,null,null];(statearr_34663[0] = state_machine__5507__auto__);
(statearr_34663[1] = 1);
return statearr_34663;
});
var state_machine__5507__auto____1 = (function (state_34646){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34646);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34664){if((e34664 instanceof Object))
{var ex__5510__auto__ = e34664;var statearr_34665_34678 = state_34646;(statearr_34665_34678[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34646);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34664;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34679 = state_34646;
state_34646 = G__34679;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34646){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34666 = f__5522__auto__.call(null);(statearr_34666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34667);
return statearr_34666;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34831){var state_val_34832 = (state_34831[1]);if((state_val_34832 === 1))
{var state_34831__$1 = state_34831;var statearr_34833_34870 = state_34831__$1;(statearr_34833_34870[2] = null);
(statearr_34833_34870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 2))
{var state_34831__$1 = state_34831;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34831__$1,4,in$);
} else
{if((state_val_34832 === 3))
{var inst_34829 = (state_34831[2]);var state_34831__$1 = state_34831;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34831__$1,inst_34829);
} else
{if((state_val_34832 === 4))
{var inst_34777 = (state_34831[7]);var inst_34777__$1 = (state_34831[2]);var inst_34778 = (inst_34777__$1 == null);var state_34831__$1 = (function (){var statearr_34834 = state_34831;(statearr_34834[7] = inst_34777__$1);
return statearr_34834;
})();if(cljs.core.truth_(inst_34778))
{var statearr_34835_34871 = state_34831__$1;(statearr_34835_34871[1] = 5);
} else
{var statearr_34836_34872 = state_34831__$1;(statearr_34836_34872[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 5))
{var inst_34780 = cljs.core.async.close_BANG_.call(null,out);var state_34831__$1 = state_34831;var statearr_34837_34873 = state_34831__$1;(statearr_34837_34873[2] = inst_34780);
(statearr_34837_34873[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 6))
{var inst_34777 = (state_34831[7]);var inst_34782 = f.call(null,inst_34777);var inst_34787 = cljs.core.seq.call(null,inst_34782);var inst_34788 = inst_34787;var inst_34789 = null;var inst_34790 = 0;var inst_34791 = 0;var state_34831__$1 = (function (){var statearr_34838 = state_34831;(statearr_34838[8] = inst_34788);
(statearr_34838[9] = inst_34789);
(statearr_34838[10] = inst_34790);
(statearr_34838[11] = inst_34791);
return statearr_34838;
})();var statearr_34839_34874 = state_34831__$1;(statearr_34839_34874[2] = null);
(statearr_34839_34874[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 7))
{var inst_34827 = (state_34831[2]);var state_34831__$1 = state_34831;var statearr_34840_34875 = state_34831__$1;(statearr_34840_34875[2] = inst_34827);
(statearr_34840_34875[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 8))
{var inst_34790 = (state_34831[10]);var inst_34791 = (state_34831[11]);var inst_34793 = (inst_34791 < inst_34790);var inst_34794 = inst_34793;var state_34831__$1 = state_34831;if(cljs.core.truth_(inst_34794))
{var statearr_34841_34876 = state_34831__$1;(statearr_34841_34876[1] = 10);
} else
{var statearr_34842_34877 = state_34831__$1;(statearr_34842_34877[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 9))
{var inst_34824 = (state_34831[2]);var state_34831__$1 = (function (){var statearr_34843 = state_34831;(statearr_34843[12] = inst_34824);
return statearr_34843;
})();var statearr_34844_34878 = state_34831__$1;(statearr_34844_34878[2] = null);
(statearr_34844_34878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 10))
{var inst_34789 = (state_34831[9]);var inst_34791 = (state_34831[11]);var inst_34796 = cljs.core._nth.call(null,inst_34789,inst_34791);var state_34831__$1 = state_34831;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34831__$1,13,out,inst_34796);
} else
{if((state_val_34832 === 11))
{var inst_34788 = (state_34831[8]);var inst_34802 = (state_34831[13]);var inst_34802__$1 = cljs.core.seq.call(null,inst_34788);var state_34831__$1 = (function (){var statearr_34848 = state_34831;(statearr_34848[13] = inst_34802__$1);
return statearr_34848;
})();if(inst_34802__$1)
{var statearr_34849_34879 = state_34831__$1;(statearr_34849_34879[1] = 14);
} else
{var statearr_34850_34880 = state_34831__$1;(statearr_34850_34880[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 12))
{var inst_34822 = (state_34831[2]);var state_34831__$1 = state_34831;var statearr_34851_34881 = state_34831__$1;(statearr_34851_34881[2] = inst_34822);
(statearr_34851_34881[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 13))
{var inst_34788 = (state_34831[8]);var inst_34789 = (state_34831[9]);var inst_34790 = (state_34831[10]);var inst_34791 = (state_34831[11]);var inst_34798 = (state_34831[2]);var inst_34799 = (inst_34791 + 1);var tmp34845 = inst_34788;var tmp34846 = inst_34789;var tmp34847 = inst_34790;var inst_34788__$1 = tmp34845;var inst_34789__$1 = tmp34846;var inst_34790__$1 = tmp34847;var inst_34791__$1 = inst_34799;var state_34831__$1 = (function (){var statearr_34852 = state_34831;(statearr_34852[14] = inst_34798);
(statearr_34852[8] = inst_34788__$1);
(statearr_34852[9] = inst_34789__$1);
(statearr_34852[10] = inst_34790__$1);
(statearr_34852[11] = inst_34791__$1);
return statearr_34852;
})();var statearr_34853_34882 = state_34831__$1;(statearr_34853_34882[2] = null);
(statearr_34853_34882[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 14))
{var inst_34802 = (state_34831[13]);var inst_34804 = cljs.core.chunked_seq_QMARK_.call(null,inst_34802);var state_34831__$1 = state_34831;if(inst_34804)
{var statearr_34854_34883 = state_34831__$1;(statearr_34854_34883[1] = 17);
} else
{var statearr_34855_34884 = state_34831__$1;(statearr_34855_34884[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 15))
{var state_34831__$1 = state_34831;var statearr_34856_34885 = state_34831__$1;(statearr_34856_34885[2] = null);
(statearr_34856_34885[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 16))
{var inst_34820 = (state_34831[2]);var state_34831__$1 = state_34831;var statearr_34857_34886 = state_34831__$1;(statearr_34857_34886[2] = inst_34820);
(statearr_34857_34886[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 17))
{var inst_34802 = (state_34831[13]);var inst_34806 = cljs.core.chunk_first.call(null,inst_34802);var inst_34807 = cljs.core.chunk_rest.call(null,inst_34802);var inst_34808 = cljs.core.count.call(null,inst_34806);var inst_34788 = inst_34807;var inst_34789 = inst_34806;var inst_34790 = inst_34808;var inst_34791 = 0;var state_34831__$1 = (function (){var statearr_34858 = state_34831;(statearr_34858[8] = inst_34788);
(statearr_34858[9] = inst_34789);
(statearr_34858[10] = inst_34790);
(statearr_34858[11] = inst_34791);
return statearr_34858;
})();var statearr_34859_34887 = state_34831__$1;(statearr_34859_34887[2] = null);
(statearr_34859_34887[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 18))
{var inst_34802 = (state_34831[13]);var inst_34811 = cljs.core.first.call(null,inst_34802);var state_34831__$1 = state_34831;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34831__$1,20,out,inst_34811);
} else
{if((state_val_34832 === 19))
{var inst_34817 = (state_34831[2]);var state_34831__$1 = state_34831;var statearr_34860_34888 = state_34831__$1;(statearr_34860_34888[2] = inst_34817);
(statearr_34860_34888[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 20))
{var inst_34802 = (state_34831[13]);var inst_34813 = (state_34831[2]);var inst_34814 = cljs.core.next.call(null,inst_34802);var inst_34788 = inst_34814;var inst_34789 = null;var inst_34790 = 0;var inst_34791 = 0;var state_34831__$1 = (function (){var statearr_34861 = state_34831;(statearr_34861[15] = inst_34813);
(statearr_34861[8] = inst_34788);
(statearr_34861[9] = inst_34789);
(statearr_34861[10] = inst_34790);
(statearr_34861[11] = inst_34791);
return statearr_34861;
})();var statearr_34862_34889 = state_34831__$1;(statearr_34862_34889[2] = null);
(statearr_34862_34889[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_34866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34866[0] = state_machine__5507__auto__);
(statearr_34866[1] = 1);
return statearr_34866;
});
var state_machine__5507__auto____1 = (function (state_34831){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34831);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34867){if((e34867 instanceof Object))
{var ex__5510__auto__ = e34867;var statearr_34868_34890 = state_34831;(statearr_34868_34890[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34831);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34891 = state_34831;
state_34831 = G__34891;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34831){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34869 = f__5522__auto__.call(null);(statearr_34869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34869;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___34972 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34951){var state_val_34952 = (state_34951[1]);if((state_val_34952 === 1))
{var state_34951__$1 = state_34951;var statearr_34953_34973 = state_34951__$1;(statearr_34953_34973[2] = null);
(statearr_34953_34973[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34952 === 2))
{var state_34951__$1 = state_34951;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34951__$1,4,from);
} else
{if((state_val_34952 === 3))
{var inst_34949 = (state_34951[2]);var state_34951__$1 = state_34951;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34951__$1,inst_34949);
} else
{if((state_val_34952 === 4))
{var inst_34934 = (state_34951[7]);var inst_34934__$1 = (state_34951[2]);var inst_34935 = (inst_34934__$1 == null);var state_34951__$1 = (function (){var statearr_34954 = state_34951;(statearr_34954[7] = inst_34934__$1);
return statearr_34954;
})();if(cljs.core.truth_(inst_34935))
{var statearr_34955_34974 = state_34951__$1;(statearr_34955_34974[1] = 5);
} else
{var statearr_34956_34975 = state_34951__$1;(statearr_34956_34975[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34952 === 5))
{var state_34951__$1 = state_34951;if(cljs.core.truth_(close_QMARK_))
{var statearr_34957_34976 = state_34951__$1;(statearr_34957_34976[1] = 8);
} else
{var statearr_34958_34977 = state_34951__$1;(statearr_34958_34977[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34952 === 6))
{var inst_34934 = (state_34951[7]);var state_34951__$1 = state_34951;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34951__$1,11,to,inst_34934);
} else
{if((state_val_34952 === 7))
{var inst_34947 = (state_34951[2]);var state_34951__$1 = state_34951;var statearr_34959_34978 = state_34951__$1;(statearr_34959_34978[2] = inst_34947);
(statearr_34959_34978[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34952 === 8))
{var inst_34938 = cljs.core.async.close_BANG_.call(null,to);var state_34951__$1 = state_34951;var statearr_34960_34979 = state_34951__$1;(statearr_34960_34979[2] = inst_34938);
(statearr_34960_34979[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34952 === 9))
{var state_34951__$1 = state_34951;var statearr_34961_34980 = state_34951__$1;(statearr_34961_34980[2] = null);
(statearr_34961_34980[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34952 === 10))
{var inst_34941 = (state_34951[2]);var state_34951__$1 = state_34951;var statearr_34962_34981 = state_34951__$1;(statearr_34962_34981[2] = inst_34941);
(statearr_34962_34981[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34952 === 11))
{var inst_34944 = (state_34951[2]);var state_34951__$1 = (function (){var statearr_34963 = state_34951;(statearr_34963[8] = inst_34944);
return statearr_34963;
})();var statearr_34964_34982 = state_34951__$1;(statearr_34964_34982[2] = null);
(statearr_34964_34982[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34968 = [null,null,null,null,null,null,null,null,null];(statearr_34968[0] = state_machine__5507__auto__);
(statearr_34968[1] = 1);
return statearr_34968;
});
var state_machine__5507__auto____1 = (function (state_34951){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34951);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34969){if((e34969 instanceof Object))
{var ex__5510__auto__ = e34969;var statearr_34970_34983 = state_34951;(statearr_34970_34983[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34951);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34969;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34984 = state_34951;
state_34951 = G__34984;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34951){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34971 = f__5522__auto__.call(null);(statearr_34971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34972);
return statearr_34971;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___35071 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35049){var state_val_35050 = (state_35049[1]);if((state_val_35050 === 1))
{var state_35049__$1 = state_35049;var statearr_35051_35072 = state_35049__$1;(statearr_35051_35072[2] = null);
(statearr_35051_35072[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35050 === 2))
{var state_35049__$1 = state_35049;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35049__$1,4,ch);
} else
{if((state_val_35050 === 3))
{var inst_35047 = (state_35049[2]);var state_35049__$1 = state_35049;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35049__$1,inst_35047);
} else
{if((state_val_35050 === 4))
{var inst_35030 = (state_35049[7]);var inst_35030__$1 = (state_35049[2]);var inst_35031 = (inst_35030__$1 == null);var state_35049__$1 = (function (){var statearr_35052 = state_35049;(statearr_35052[7] = inst_35030__$1);
return statearr_35052;
})();if(cljs.core.truth_(inst_35031))
{var statearr_35053_35073 = state_35049__$1;(statearr_35053_35073[1] = 5);
} else
{var statearr_35054_35074 = state_35049__$1;(statearr_35054_35074[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35050 === 5))
{var inst_35033 = cljs.core.async.close_BANG_.call(null,tc);var inst_35034 = cljs.core.async.close_BANG_.call(null,fc);var state_35049__$1 = (function (){var statearr_35055 = state_35049;(statearr_35055[8] = inst_35033);
return statearr_35055;
})();var statearr_35056_35075 = state_35049__$1;(statearr_35056_35075[2] = inst_35034);
(statearr_35056_35075[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35050 === 6))
{var inst_35030 = (state_35049[7]);var inst_35036 = p.call(null,inst_35030);var state_35049__$1 = state_35049;if(cljs.core.truth_(inst_35036))
{var statearr_35057_35076 = state_35049__$1;(statearr_35057_35076[1] = 9);
} else
{var statearr_35058_35077 = state_35049__$1;(statearr_35058_35077[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35050 === 7))
{var inst_35045 = (state_35049[2]);var state_35049__$1 = state_35049;var statearr_35059_35078 = state_35049__$1;(statearr_35059_35078[2] = inst_35045);
(statearr_35059_35078[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35050 === 8))
{var inst_35042 = (state_35049[2]);var state_35049__$1 = (function (){var statearr_35060 = state_35049;(statearr_35060[9] = inst_35042);
return statearr_35060;
})();var statearr_35061_35079 = state_35049__$1;(statearr_35061_35079[2] = null);
(statearr_35061_35079[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35050 === 9))
{var state_35049__$1 = state_35049;var statearr_35062_35080 = state_35049__$1;(statearr_35062_35080[2] = tc);
(statearr_35062_35080[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35050 === 10))
{var state_35049__$1 = state_35049;var statearr_35063_35081 = state_35049__$1;(statearr_35063_35081[2] = fc);
(statearr_35063_35081[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35050 === 11))
{var inst_35030 = (state_35049[7]);var inst_35040 = (state_35049[2]);var state_35049__$1 = state_35049;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35049__$1,8,inst_35040,inst_35030);
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
var state_machine__5507__auto____0 = (function (){var statearr_35067 = [null,null,null,null,null,null,null,null,null,null];(statearr_35067[0] = state_machine__5507__auto__);
(statearr_35067[1] = 1);
return statearr_35067;
});
var state_machine__5507__auto____1 = (function (state_35049){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35049);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35068){if((e35068 instanceof Object))
{var ex__5510__auto__ = e35068;var statearr_35069_35082 = state_35049;(statearr_35069_35082[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35049);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35068;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35083 = state_35049;
state_35049 = G__35083;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35049){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35070 = f__5522__auto__.call(null);(statearr_35070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35071);
return statearr_35070;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35130){var state_val_35131 = (state_35130[1]);if((state_val_35131 === 7))
{var inst_35126 = (state_35130[2]);var state_35130__$1 = state_35130;var statearr_35132_35148 = state_35130__$1;(statearr_35132_35148[2] = inst_35126);
(statearr_35132_35148[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35131 === 6))
{var inst_35119 = (state_35130[7]);var inst_35116 = (state_35130[8]);var inst_35123 = f.call(null,inst_35116,inst_35119);var inst_35116__$1 = inst_35123;var state_35130__$1 = (function (){var statearr_35133 = state_35130;(statearr_35133[8] = inst_35116__$1);
return statearr_35133;
})();var statearr_35134_35149 = state_35130__$1;(statearr_35134_35149[2] = null);
(statearr_35134_35149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35131 === 5))
{var inst_35116 = (state_35130[8]);var state_35130__$1 = state_35130;var statearr_35135_35150 = state_35130__$1;(statearr_35135_35150[2] = inst_35116);
(statearr_35135_35150[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35131 === 4))
{var inst_35119 = (state_35130[7]);var inst_35119__$1 = (state_35130[2]);var inst_35120 = (inst_35119__$1 == null);var state_35130__$1 = (function (){var statearr_35136 = state_35130;(statearr_35136[7] = inst_35119__$1);
return statearr_35136;
})();if(cljs.core.truth_(inst_35120))
{var statearr_35137_35151 = state_35130__$1;(statearr_35137_35151[1] = 5);
} else
{var statearr_35138_35152 = state_35130__$1;(statearr_35138_35152[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35131 === 3))
{var inst_35128 = (state_35130[2]);var state_35130__$1 = state_35130;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35130__$1,inst_35128);
} else
{if((state_val_35131 === 2))
{var state_35130__$1 = state_35130;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35130__$1,4,ch);
} else
{if((state_val_35131 === 1))
{var inst_35116 = init;var state_35130__$1 = (function (){var statearr_35139 = state_35130;(statearr_35139[8] = inst_35116);
return statearr_35139;
})();var statearr_35140_35153 = state_35130__$1;(statearr_35140_35153[2] = null);
(statearr_35140_35153[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35144 = [null,null,null,null,null,null,null,null,null];(statearr_35144[0] = state_machine__5507__auto__);
(statearr_35144[1] = 1);
return statearr_35144;
});
var state_machine__5507__auto____1 = (function (state_35130){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35130);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35145){if((e35145 instanceof Object))
{var ex__5510__auto__ = e35145;var statearr_35146_35154 = state_35130;(statearr_35146_35154[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35130);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35155 = state_35130;
state_35130 = G__35155;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35130){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35147 = f__5522__auto__.call(null);(statearr_35147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35147;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35217){var state_val_35218 = (state_35217[1]);if((state_val_35218 === 1))
{var inst_35197 = cljs.core.seq.call(null,coll);var inst_35198 = inst_35197;var state_35217__$1 = (function (){var statearr_35219 = state_35217;(statearr_35219[7] = inst_35198);
return statearr_35219;
})();var statearr_35220_35238 = state_35217__$1;(statearr_35220_35238[2] = null);
(statearr_35220_35238[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35218 === 2))
{var inst_35198 = (state_35217[7]);var state_35217__$1 = state_35217;if(cljs.core.truth_(inst_35198))
{var statearr_35221_35239 = state_35217__$1;(statearr_35221_35239[1] = 4);
} else
{var statearr_35222_35240 = state_35217__$1;(statearr_35222_35240[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35218 === 3))
{var inst_35215 = (state_35217[2]);var state_35217__$1 = state_35217;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35217__$1,inst_35215);
} else
{if((state_val_35218 === 4))
{var inst_35198 = (state_35217[7]);var inst_35201 = cljs.core.first.call(null,inst_35198);var state_35217__$1 = state_35217;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35217__$1,7,ch,inst_35201);
} else
{if((state_val_35218 === 5))
{var state_35217__$1 = state_35217;if(cljs.core.truth_(close_QMARK_))
{var statearr_35223_35241 = state_35217__$1;(statearr_35223_35241[1] = 8);
} else
{var statearr_35224_35242 = state_35217__$1;(statearr_35224_35242[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35218 === 6))
{var inst_35213 = (state_35217[2]);var state_35217__$1 = state_35217;var statearr_35225_35243 = state_35217__$1;(statearr_35225_35243[2] = inst_35213);
(statearr_35225_35243[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35218 === 7))
{var inst_35198 = (state_35217[7]);var inst_35203 = (state_35217[2]);var inst_35204 = cljs.core.next.call(null,inst_35198);var inst_35198__$1 = inst_35204;var state_35217__$1 = (function (){var statearr_35226 = state_35217;(statearr_35226[7] = inst_35198__$1);
(statearr_35226[8] = inst_35203);
return statearr_35226;
})();var statearr_35227_35244 = state_35217__$1;(statearr_35227_35244[2] = null);
(statearr_35227_35244[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35218 === 8))
{var inst_35208 = cljs.core.async.close_BANG_.call(null,ch);var state_35217__$1 = state_35217;var statearr_35228_35245 = state_35217__$1;(statearr_35228_35245[2] = inst_35208);
(statearr_35228_35245[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35218 === 9))
{var state_35217__$1 = state_35217;var statearr_35229_35246 = state_35217__$1;(statearr_35229_35246[2] = null);
(statearr_35229_35246[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35218 === 10))
{var inst_35211 = (state_35217[2]);var state_35217__$1 = state_35217;var statearr_35230_35247 = state_35217__$1;(statearr_35230_35247[2] = inst_35211);
(statearr_35230_35247[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_35234 = [null,null,null,null,null,null,null,null,null];(statearr_35234[0] = state_machine__5507__auto__);
(statearr_35234[1] = 1);
return statearr_35234;
});
var state_machine__5507__auto____1 = (function (state_35217){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35217);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35235){if((e35235 instanceof Object))
{var ex__5510__auto__ = e35235;var statearr_35236_35248 = state_35217;(statearr_35236_35248[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35217);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35235;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35249 = state_35217;
state_35217 = G__35249;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35217){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35237 = f__5522__auto__.call(null);(statearr_35237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35237;
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
cljs.core.async.Mux = (function (){var obj35251 = {};return obj35251;
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
cljs.core.async.Mult = (function (){var obj35253 = {};return obj35253;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35477 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35477 = (function (cs,ch,mult,meta35478){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35478 = meta35478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35477.cljs$lang$type = true;
cljs.core.async.t35477.cljs$lang$ctorStr = "cljs.core.async/t35477";
cljs.core.async.t35477.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35477");
});})(cs))
;
cljs.core.async.t35477.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35477.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35477.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35477.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35477.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35477.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35479){var self__ = this;
var _35479__$1 = this;return self__.meta35478;
});})(cs))
;
cljs.core.async.t35477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35479,meta35478__$1){var self__ = this;
var _35479__$1 = this;return (new cljs.core.async.t35477(self__.cs,self__.ch,self__.mult,meta35478__$1));
});})(cs))
;
cljs.core.async.__GT_t35477 = ((function (cs){
return (function __GT_t35477(cs__$1,ch__$1,mult__$1,meta35478){return (new cljs.core.async.t35477(cs__$1,ch__$1,mult__$1,meta35478));
});})(cs))
;
}
return (new cljs.core.async.t35477(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___35700 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35614){var state_val_35615 = (state_35614[1]);if((state_val_35615 === 32))
{var inst_35558 = (state_35614[7]);var inst_35482 = (state_35614[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35614,31,Object,null,30);var inst_35565 = cljs.core.async.put_BANG_.call(null,inst_35558,inst_35482,done);var state_35614__$1 = state_35614;var statearr_35616_35701 = state_35614__$1;(statearr_35616_35701[2] = inst_35565);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35614__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 1))
{var state_35614__$1 = state_35614;var statearr_35617_35702 = state_35614__$1;(statearr_35617_35702[2] = null);
(statearr_35617_35702[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 33))
{var inst_35571 = (state_35614[9]);var inst_35573 = cljs.core.chunked_seq_QMARK_.call(null,inst_35571);var state_35614__$1 = state_35614;if(inst_35573)
{var statearr_35618_35703 = state_35614__$1;(statearr_35618_35703[1] = 36);
} else
{var statearr_35619_35704 = state_35614__$1;(statearr_35619_35704[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 2))
{var state_35614__$1 = state_35614;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35614__$1,4,ch);
} else
{if((state_val_35615 === 34))
{var state_35614__$1 = state_35614;var statearr_35620_35705 = state_35614__$1;(statearr_35620_35705[2] = null);
(statearr_35620_35705[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 3))
{var inst_35612 = (state_35614[2]);var state_35614__$1 = state_35614;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35614__$1,inst_35612);
} else
{if((state_val_35615 === 35))
{var inst_35596 = (state_35614[2]);var state_35614__$1 = state_35614;var statearr_35621_35706 = state_35614__$1;(statearr_35621_35706[2] = inst_35596);
(statearr_35621_35706[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 4))
{var inst_35482 = (state_35614[8]);var inst_35482__$1 = (state_35614[2]);var inst_35483 = (inst_35482__$1 == null);var state_35614__$1 = (function (){var statearr_35622 = state_35614;(statearr_35622[8] = inst_35482__$1);
return statearr_35622;
})();if(cljs.core.truth_(inst_35483))
{var statearr_35623_35707 = state_35614__$1;(statearr_35623_35707[1] = 5);
} else
{var statearr_35624_35708 = state_35614__$1;(statearr_35624_35708[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 36))
{var inst_35571 = (state_35614[9]);var inst_35575 = cljs.core.chunk_first.call(null,inst_35571);var inst_35576 = cljs.core.chunk_rest.call(null,inst_35571);var inst_35577 = cljs.core.count.call(null,inst_35575);var inst_35550 = inst_35576;var inst_35551 = inst_35575;var inst_35552 = inst_35577;var inst_35553 = 0;var state_35614__$1 = (function (){var statearr_35625 = state_35614;(statearr_35625[10] = inst_35551);
(statearr_35625[11] = inst_35552);
(statearr_35625[12] = inst_35550);
(statearr_35625[13] = inst_35553);
return statearr_35625;
})();var statearr_35626_35709 = state_35614__$1;(statearr_35626_35709[2] = null);
(statearr_35626_35709[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 5))
{var inst_35489 = cljs.core.deref.call(null,cs);var inst_35490 = cljs.core.seq.call(null,inst_35489);var inst_35491 = inst_35490;var inst_35492 = null;var inst_35493 = 0;var inst_35494 = 0;var state_35614__$1 = (function (){var statearr_35627 = state_35614;(statearr_35627[14] = inst_35494);
(statearr_35627[15] = inst_35491);
(statearr_35627[16] = inst_35493);
(statearr_35627[17] = inst_35492);
return statearr_35627;
})();var statearr_35628_35710 = state_35614__$1;(statearr_35628_35710[2] = null);
(statearr_35628_35710[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 37))
{var inst_35571 = (state_35614[9]);var inst_35580 = cljs.core.first.call(null,inst_35571);var state_35614__$1 = (function (){var statearr_35629 = state_35614;(statearr_35629[18] = inst_35580);
return statearr_35629;
})();var statearr_35630_35711 = state_35614__$1;(statearr_35630_35711[2] = null);
(statearr_35630_35711[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 6))
{var inst_35542 = (state_35614[19]);var inst_35541 = cljs.core.deref.call(null,cs);var inst_35542__$1 = cljs.core.keys.call(null,inst_35541);var inst_35543 = cljs.core.count.call(null,inst_35542__$1);var inst_35544 = cljs.core.reset_BANG_.call(null,dctr,inst_35543);var inst_35549 = cljs.core.seq.call(null,inst_35542__$1);var inst_35550 = inst_35549;var inst_35551 = null;var inst_35552 = 0;var inst_35553 = 0;var state_35614__$1 = (function (){var statearr_35631 = state_35614;(statearr_35631[20] = inst_35544);
(statearr_35631[19] = inst_35542__$1);
(statearr_35631[10] = inst_35551);
(statearr_35631[11] = inst_35552);
(statearr_35631[12] = inst_35550);
(statearr_35631[13] = inst_35553);
return statearr_35631;
})();var statearr_35632_35712 = state_35614__$1;(statearr_35632_35712[2] = null);
(statearr_35632_35712[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 38))
{var inst_35593 = (state_35614[2]);var state_35614__$1 = state_35614;var statearr_35633_35713 = state_35614__$1;(statearr_35633_35713[2] = inst_35593);
(statearr_35633_35713[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 7))
{var inst_35610 = (state_35614[2]);var state_35614__$1 = state_35614;var statearr_35634_35714 = state_35614__$1;(statearr_35634_35714[2] = inst_35610);
(statearr_35634_35714[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 39))
{var inst_35571 = (state_35614[9]);var inst_35589 = (state_35614[2]);var inst_35590 = cljs.core.next.call(null,inst_35571);var inst_35550 = inst_35590;var inst_35551 = null;var inst_35552 = 0;var inst_35553 = 0;var state_35614__$1 = (function (){var statearr_35635 = state_35614;(statearr_35635[21] = inst_35589);
(statearr_35635[10] = inst_35551);
(statearr_35635[11] = inst_35552);
(statearr_35635[12] = inst_35550);
(statearr_35635[13] = inst_35553);
return statearr_35635;
})();var statearr_35636_35715 = state_35614__$1;(statearr_35636_35715[2] = null);
(statearr_35636_35715[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 8))
{var inst_35494 = (state_35614[14]);var inst_35493 = (state_35614[16]);var inst_35496 = (inst_35494 < inst_35493);var inst_35497 = inst_35496;var state_35614__$1 = state_35614;if(cljs.core.truth_(inst_35497))
{var statearr_35637_35716 = state_35614__$1;(statearr_35637_35716[1] = 10);
} else
{var statearr_35638_35717 = state_35614__$1;(statearr_35638_35717[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 40))
{var inst_35580 = (state_35614[18]);var inst_35581 = (state_35614[2]);var inst_35582 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35583 = cljs.core.async.untap_STAR_.call(null,m,inst_35580);var state_35614__$1 = (function (){var statearr_35639 = state_35614;(statearr_35639[22] = inst_35582);
(statearr_35639[23] = inst_35581);
return statearr_35639;
})();var statearr_35640_35718 = state_35614__$1;(statearr_35640_35718[2] = inst_35583);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35614__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 9))
{var inst_35539 = (state_35614[2]);var state_35614__$1 = state_35614;var statearr_35641_35719 = state_35614__$1;(statearr_35641_35719[2] = inst_35539);
(statearr_35641_35719[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 41))
{var inst_35580 = (state_35614[18]);var inst_35482 = (state_35614[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35614,40,Object,null,39);var inst_35587 = cljs.core.async.put_BANG_.call(null,inst_35580,inst_35482,done);var state_35614__$1 = state_35614;var statearr_35642_35720 = state_35614__$1;(statearr_35642_35720[2] = inst_35587);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35614__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 10))
{var inst_35494 = (state_35614[14]);var inst_35492 = (state_35614[17]);var inst_35500 = cljs.core._nth.call(null,inst_35492,inst_35494);var inst_35501 = cljs.core.nth.call(null,inst_35500,0,null);var inst_35502 = cljs.core.nth.call(null,inst_35500,1,null);var state_35614__$1 = (function (){var statearr_35643 = state_35614;(statearr_35643[24] = inst_35501);
return statearr_35643;
})();if(cljs.core.truth_(inst_35502))
{var statearr_35644_35721 = state_35614__$1;(statearr_35644_35721[1] = 13);
} else
{var statearr_35645_35722 = state_35614__$1;(statearr_35645_35722[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 42))
{var state_35614__$1 = state_35614;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35614__$1,45,dchan);
} else
{if((state_val_35615 === 11))
{var inst_35491 = (state_35614[15]);var inst_35511 = (state_35614[25]);var inst_35511__$1 = cljs.core.seq.call(null,inst_35491);var state_35614__$1 = (function (){var statearr_35646 = state_35614;(statearr_35646[25] = inst_35511__$1);
return statearr_35646;
})();if(inst_35511__$1)
{var statearr_35647_35723 = state_35614__$1;(statearr_35647_35723[1] = 16);
} else
{var statearr_35648_35724 = state_35614__$1;(statearr_35648_35724[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 43))
{var state_35614__$1 = state_35614;var statearr_35649_35725 = state_35614__$1;(statearr_35649_35725[2] = null);
(statearr_35649_35725[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 12))
{var inst_35537 = (state_35614[2]);var state_35614__$1 = state_35614;var statearr_35650_35726 = state_35614__$1;(statearr_35650_35726[2] = inst_35537);
(statearr_35650_35726[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 44))
{var inst_35607 = (state_35614[2]);var state_35614__$1 = (function (){var statearr_35651 = state_35614;(statearr_35651[26] = inst_35607);
return statearr_35651;
})();var statearr_35652_35727 = state_35614__$1;(statearr_35652_35727[2] = null);
(statearr_35652_35727[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 13))
{var inst_35501 = (state_35614[24]);var inst_35504 = cljs.core.async.close_BANG_.call(null,inst_35501);var state_35614__$1 = state_35614;var statearr_35653_35728 = state_35614__$1;(statearr_35653_35728[2] = inst_35504);
(statearr_35653_35728[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 45))
{var inst_35604 = (state_35614[2]);var state_35614__$1 = state_35614;var statearr_35657_35729 = state_35614__$1;(statearr_35657_35729[2] = inst_35604);
(statearr_35657_35729[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 14))
{var state_35614__$1 = state_35614;var statearr_35658_35730 = state_35614__$1;(statearr_35658_35730[2] = null);
(statearr_35658_35730[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 15))
{var inst_35494 = (state_35614[14]);var inst_35491 = (state_35614[15]);var inst_35493 = (state_35614[16]);var inst_35492 = (state_35614[17]);var inst_35507 = (state_35614[2]);var inst_35508 = (inst_35494 + 1);var tmp35654 = inst_35491;var tmp35655 = inst_35493;var tmp35656 = inst_35492;var inst_35491__$1 = tmp35654;var inst_35492__$1 = tmp35656;var inst_35493__$1 = tmp35655;var inst_35494__$1 = inst_35508;var state_35614__$1 = (function (){var statearr_35659 = state_35614;(statearr_35659[27] = inst_35507);
(statearr_35659[14] = inst_35494__$1);
(statearr_35659[15] = inst_35491__$1);
(statearr_35659[16] = inst_35493__$1);
(statearr_35659[17] = inst_35492__$1);
return statearr_35659;
})();var statearr_35660_35731 = state_35614__$1;(statearr_35660_35731[2] = null);
(statearr_35660_35731[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 16))
{var inst_35511 = (state_35614[25]);var inst_35513 = cljs.core.chunked_seq_QMARK_.call(null,inst_35511);var state_35614__$1 = state_35614;if(inst_35513)
{var statearr_35661_35732 = state_35614__$1;(statearr_35661_35732[1] = 19);
} else
{var statearr_35662_35733 = state_35614__$1;(statearr_35662_35733[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 17))
{var state_35614__$1 = state_35614;var statearr_35663_35734 = state_35614__$1;(statearr_35663_35734[2] = null);
(statearr_35663_35734[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 18))
{var inst_35535 = (state_35614[2]);var state_35614__$1 = state_35614;var statearr_35664_35735 = state_35614__$1;(statearr_35664_35735[2] = inst_35535);
(statearr_35664_35735[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 19))
{var inst_35511 = (state_35614[25]);var inst_35515 = cljs.core.chunk_first.call(null,inst_35511);var inst_35516 = cljs.core.chunk_rest.call(null,inst_35511);var inst_35517 = cljs.core.count.call(null,inst_35515);var inst_35491 = inst_35516;var inst_35492 = inst_35515;var inst_35493 = inst_35517;var inst_35494 = 0;var state_35614__$1 = (function (){var statearr_35665 = state_35614;(statearr_35665[14] = inst_35494);
(statearr_35665[15] = inst_35491);
(statearr_35665[16] = inst_35493);
(statearr_35665[17] = inst_35492);
return statearr_35665;
})();var statearr_35666_35736 = state_35614__$1;(statearr_35666_35736[2] = null);
(statearr_35666_35736[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 20))
{var inst_35511 = (state_35614[25]);var inst_35521 = cljs.core.first.call(null,inst_35511);var inst_35522 = cljs.core.nth.call(null,inst_35521,0,null);var inst_35523 = cljs.core.nth.call(null,inst_35521,1,null);var state_35614__$1 = (function (){var statearr_35667 = state_35614;(statearr_35667[28] = inst_35522);
return statearr_35667;
})();if(cljs.core.truth_(inst_35523))
{var statearr_35668_35737 = state_35614__$1;(statearr_35668_35737[1] = 22);
} else
{var statearr_35669_35738 = state_35614__$1;(statearr_35669_35738[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 21))
{var inst_35532 = (state_35614[2]);var state_35614__$1 = state_35614;var statearr_35670_35739 = state_35614__$1;(statearr_35670_35739[2] = inst_35532);
(statearr_35670_35739[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 22))
{var inst_35522 = (state_35614[28]);var inst_35525 = cljs.core.async.close_BANG_.call(null,inst_35522);var state_35614__$1 = state_35614;var statearr_35671_35740 = state_35614__$1;(statearr_35671_35740[2] = inst_35525);
(statearr_35671_35740[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 23))
{var state_35614__$1 = state_35614;var statearr_35672_35741 = state_35614__$1;(statearr_35672_35741[2] = null);
(statearr_35672_35741[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 24))
{var inst_35511 = (state_35614[25]);var inst_35528 = (state_35614[2]);var inst_35529 = cljs.core.next.call(null,inst_35511);var inst_35491 = inst_35529;var inst_35492 = null;var inst_35493 = 0;var inst_35494 = 0;var state_35614__$1 = (function (){var statearr_35673 = state_35614;(statearr_35673[14] = inst_35494);
(statearr_35673[15] = inst_35491);
(statearr_35673[16] = inst_35493);
(statearr_35673[17] = inst_35492);
(statearr_35673[29] = inst_35528);
return statearr_35673;
})();var statearr_35674_35742 = state_35614__$1;(statearr_35674_35742[2] = null);
(statearr_35674_35742[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 25))
{var inst_35552 = (state_35614[11]);var inst_35553 = (state_35614[13]);var inst_35555 = (inst_35553 < inst_35552);var inst_35556 = inst_35555;var state_35614__$1 = state_35614;if(cljs.core.truth_(inst_35556))
{var statearr_35675_35743 = state_35614__$1;(statearr_35675_35743[1] = 27);
} else
{var statearr_35676_35744 = state_35614__$1;(statearr_35676_35744[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 26))
{var inst_35542 = (state_35614[19]);var inst_35600 = (state_35614[2]);var inst_35601 = cljs.core.seq.call(null,inst_35542);var state_35614__$1 = (function (){var statearr_35677 = state_35614;(statearr_35677[30] = inst_35600);
return statearr_35677;
})();if(inst_35601)
{var statearr_35678_35745 = state_35614__$1;(statearr_35678_35745[1] = 42);
} else
{var statearr_35679_35746 = state_35614__$1;(statearr_35679_35746[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 27))
{var inst_35551 = (state_35614[10]);var inst_35553 = (state_35614[13]);var inst_35558 = cljs.core._nth.call(null,inst_35551,inst_35553);var state_35614__$1 = (function (){var statearr_35680 = state_35614;(statearr_35680[7] = inst_35558);
return statearr_35680;
})();var statearr_35681_35747 = state_35614__$1;(statearr_35681_35747[2] = null);
(statearr_35681_35747[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 28))
{var inst_35571 = (state_35614[9]);var inst_35550 = (state_35614[12]);var inst_35571__$1 = cljs.core.seq.call(null,inst_35550);var state_35614__$1 = (function (){var statearr_35685 = state_35614;(statearr_35685[9] = inst_35571__$1);
return statearr_35685;
})();if(inst_35571__$1)
{var statearr_35686_35748 = state_35614__$1;(statearr_35686_35748[1] = 33);
} else
{var statearr_35687_35749 = state_35614__$1;(statearr_35687_35749[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 29))
{var inst_35598 = (state_35614[2]);var state_35614__$1 = state_35614;var statearr_35688_35750 = state_35614__$1;(statearr_35688_35750[2] = inst_35598);
(statearr_35688_35750[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 30))
{var inst_35551 = (state_35614[10]);var inst_35552 = (state_35614[11]);var inst_35550 = (state_35614[12]);var inst_35553 = (state_35614[13]);var inst_35567 = (state_35614[2]);var inst_35568 = (inst_35553 + 1);var tmp35682 = inst_35551;var tmp35683 = inst_35552;var tmp35684 = inst_35550;var inst_35550__$1 = tmp35684;var inst_35551__$1 = tmp35682;var inst_35552__$1 = tmp35683;var inst_35553__$1 = inst_35568;var state_35614__$1 = (function (){var statearr_35689 = state_35614;(statearr_35689[10] = inst_35551__$1);
(statearr_35689[11] = inst_35552__$1);
(statearr_35689[12] = inst_35550__$1);
(statearr_35689[31] = inst_35567);
(statearr_35689[13] = inst_35553__$1);
return statearr_35689;
})();var statearr_35690_35751 = state_35614__$1;(statearr_35690_35751[2] = null);
(statearr_35690_35751[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35615 === 31))
{var inst_35558 = (state_35614[7]);var inst_35559 = (state_35614[2]);var inst_35560 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35561 = cljs.core.async.untap_STAR_.call(null,m,inst_35558);var state_35614__$1 = (function (){var statearr_35691 = state_35614;(statearr_35691[32] = inst_35559);
(statearr_35691[33] = inst_35560);
return statearr_35691;
})();var statearr_35692_35752 = state_35614__$1;(statearr_35692_35752[2] = inst_35561);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35614__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_35696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35696[0] = state_machine__5507__auto__);
(statearr_35696[1] = 1);
return statearr_35696;
});
var state_machine__5507__auto____1 = (function (state_35614){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35614);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35697){if((e35697 instanceof Object))
{var ex__5510__auto__ = e35697;var statearr_35698_35753 = state_35614;(statearr_35698_35753[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35614);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35697;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35754 = state_35614;
state_35614 = G__35754;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35614){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35699 = f__5522__auto__.call(null);(statearr_35699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35700);
return statearr_35699;
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
cljs.core.async.Mix = (function (){var obj35756 = {};return obj35756;
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
;var m = (function (){if(typeof cljs.core.async.t35866 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35866 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta35867){
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
this.meta35867 = meta35867;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35866.cljs$lang$type = true;
cljs.core.async.t35866.cljs$lang$ctorStr = "cljs.core.async/t35866";
cljs.core.async.t35866.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35866");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35866.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t35866.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35866.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35866.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35866.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35866.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35866.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35866.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35868){var self__ = this;
var _35868__$1 = this;return self__.meta35867;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35868,meta35867__$1){var self__ = this;
var _35868__$1 = this;return (new cljs.core.async.t35866(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta35867__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t35866 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t35866(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta35867){return (new cljs.core.async.t35866(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta35867));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t35866(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___35975 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35933){var state_val_35934 = (state_35933[1]);if((state_val_35934 === 1))
{var inst_35872 = (state_35933[7]);var inst_35872__$1 = calc_state.call(null);var inst_35873 = cljs.core.seq_QMARK_.call(null,inst_35872__$1);var state_35933__$1 = (function (){var statearr_35935 = state_35933;(statearr_35935[7] = inst_35872__$1);
return statearr_35935;
})();if(inst_35873)
{var statearr_35936_35976 = state_35933__$1;(statearr_35936_35976[1] = 2);
} else
{var statearr_35937_35977 = state_35933__$1;(statearr_35937_35977[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 2))
{var inst_35872 = (state_35933[7]);var inst_35875 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35872);var state_35933__$1 = state_35933;var statearr_35938_35978 = state_35933__$1;(statearr_35938_35978[2] = inst_35875);
(statearr_35938_35978[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 3))
{var inst_35872 = (state_35933[7]);var state_35933__$1 = state_35933;var statearr_35939_35979 = state_35933__$1;(statearr_35939_35979[2] = inst_35872);
(statearr_35939_35979[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 4))
{var inst_35872 = (state_35933[7]);var inst_35878 = (state_35933[2]);var inst_35879 = cljs.core.get.call(null,inst_35878,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35880 = cljs.core.get.call(null,inst_35878,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35881 = cljs.core.get.call(null,inst_35878,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_35882 = inst_35872;var state_35933__$1 = (function (){var statearr_35940 = state_35933;(statearr_35940[8] = inst_35879);
(statearr_35940[9] = inst_35881);
(statearr_35940[10] = inst_35882);
(statearr_35940[11] = inst_35880);
return statearr_35940;
})();var statearr_35941_35980 = state_35933__$1;(statearr_35941_35980[2] = null);
(statearr_35941_35980[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 5))
{var inst_35882 = (state_35933[10]);var inst_35885 = cljs.core.seq_QMARK_.call(null,inst_35882);var state_35933__$1 = state_35933;if(inst_35885)
{var statearr_35942_35981 = state_35933__$1;(statearr_35942_35981[1] = 7);
} else
{var statearr_35943_35982 = state_35933__$1;(statearr_35943_35982[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 6))
{var inst_35931 = (state_35933[2]);var state_35933__$1 = state_35933;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35933__$1,inst_35931);
} else
{if((state_val_35934 === 7))
{var inst_35882 = (state_35933[10]);var inst_35887 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35882);var state_35933__$1 = state_35933;var statearr_35944_35983 = state_35933__$1;(statearr_35944_35983[2] = inst_35887);
(statearr_35944_35983[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 8))
{var inst_35882 = (state_35933[10]);var state_35933__$1 = state_35933;var statearr_35945_35984 = state_35933__$1;(statearr_35945_35984[2] = inst_35882);
(statearr_35945_35984[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 9))
{var inst_35890 = (state_35933[12]);var inst_35890__$1 = (state_35933[2]);var inst_35891 = cljs.core.get.call(null,inst_35890__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35892 = cljs.core.get.call(null,inst_35890__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35893 = cljs.core.get.call(null,inst_35890__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_35933__$1 = (function (){var statearr_35946 = state_35933;(statearr_35946[13] = inst_35892);
(statearr_35946[14] = inst_35893);
(statearr_35946[12] = inst_35890__$1);
return statearr_35946;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35933__$1,10,inst_35891);
} else
{if((state_val_35934 === 10))
{var inst_35898 = (state_35933[15]);var inst_35897 = (state_35933[16]);var inst_35896 = (state_35933[2]);var inst_35897__$1 = cljs.core.nth.call(null,inst_35896,0,null);var inst_35898__$1 = cljs.core.nth.call(null,inst_35896,1,null);var inst_35899 = (inst_35897__$1 == null);var inst_35900 = cljs.core._EQ_.call(null,inst_35898__$1,change);var inst_35901 = (inst_35899) || (inst_35900);var state_35933__$1 = (function (){var statearr_35947 = state_35933;(statearr_35947[15] = inst_35898__$1);
(statearr_35947[16] = inst_35897__$1);
return statearr_35947;
})();if(cljs.core.truth_(inst_35901))
{var statearr_35948_35985 = state_35933__$1;(statearr_35948_35985[1] = 11);
} else
{var statearr_35949_35986 = state_35933__$1;(statearr_35949_35986[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 11))
{var inst_35897 = (state_35933[16]);var inst_35903 = (inst_35897 == null);var state_35933__$1 = state_35933;if(cljs.core.truth_(inst_35903))
{var statearr_35950_35987 = state_35933__$1;(statearr_35950_35987[1] = 14);
} else
{var statearr_35951_35988 = state_35933__$1;(statearr_35951_35988[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 12))
{var inst_35893 = (state_35933[14]);var inst_35898 = (state_35933[15]);var inst_35912 = (state_35933[17]);var inst_35912__$1 = inst_35893.call(null,inst_35898);var state_35933__$1 = (function (){var statearr_35952 = state_35933;(statearr_35952[17] = inst_35912__$1);
return statearr_35952;
})();if(cljs.core.truth_(inst_35912__$1))
{var statearr_35953_35989 = state_35933__$1;(statearr_35953_35989[1] = 17);
} else
{var statearr_35954_35990 = state_35933__$1;(statearr_35954_35990[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 13))
{var inst_35929 = (state_35933[2]);var state_35933__$1 = state_35933;var statearr_35955_35991 = state_35933__$1;(statearr_35955_35991[2] = inst_35929);
(statearr_35955_35991[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 14))
{var inst_35898 = (state_35933[15]);var inst_35905 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35898);var state_35933__$1 = state_35933;var statearr_35956_35992 = state_35933__$1;(statearr_35956_35992[2] = inst_35905);
(statearr_35956_35992[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 15))
{var state_35933__$1 = state_35933;var statearr_35957_35993 = state_35933__$1;(statearr_35957_35993[2] = null);
(statearr_35957_35993[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 16))
{var inst_35908 = (state_35933[2]);var inst_35909 = calc_state.call(null);var inst_35882 = inst_35909;var state_35933__$1 = (function (){var statearr_35958 = state_35933;(statearr_35958[18] = inst_35908);
(statearr_35958[10] = inst_35882);
return statearr_35958;
})();var statearr_35959_35994 = state_35933__$1;(statearr_35959_35994[2] = null);
(statearr_35959_35994[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 17))
{var inst_35912 = (state_35933[17]);var state_35933__$1 = state_35933;var statearr_35960_35995 = state_35933__$1;(statearr_35960_35995[2] = inst_35912);
(statearr_35960_35995[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 18))
{var inst_35892 = (state_35933[13]);var inst_35893 = (state_35933[14]);var inst_35898 = (state_35933[15]);var inst_35915 = cljs.core.empty_QMARK_.call(null,inst_35893);var inst_35916 = inst_35892.call(null,inst_35898);var inst_35917 = cljs.core.not.call(null,inst_35916);var inst_35918 = (inst_35915) && (inst_35917);var state_35933__$1 = state_35933;var statearr_35961_35996 = state_35933__$1;(statearr_35961_35996[2] = inst_35918);
(statearr_35961_35996[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 19))
{var inst_35920 = (state_35933[2]);var state_35933__$1 = state_35933;if(cljs.core.truth_(inst_35920))
{var statearr_35962_35997 = state_35933__$1;(statearr_35962_35997[1] = 20);
} else
{var statearr_35963_35998 = state_35933__$1;(statearr_35963_35998[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 20))
{var inst_35897 = (state_35933[16]);var state_35933__$1 = state_35933;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35933__$1,23,out,inst_35897);
} else
{if((state_val_35934 === 21))
{var state_35933__$1 = state_35933;var statearr_35964_35999 = state_35933__$1;(statearr_35964_35999[2] = null);
(statearr_35964_35999[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 22))
{var inst_35890 = (state_35933[12]);var inst_35926 = (state_35933[2]);var inst_35882 = inst_35890;var state_35933__$1 = (function (){var statearr_35965 = state_35933;(statearr_35965[19] = inst_35926);
(statearr_35965[10] = inst_35882);
return statearr_35965;
})();var statearr_35966_36000 = state_35933__$1;(statearr_35966_36000[2] = null);
(statearr_35966_36000[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 23))
{var inst_35923 = (state_35933[2]);var state_35933__$1 = state_35933;var statearr_35967_36001 = state_35933__$1;(statearr_35967_36001[2] = inst_35923);
(statearr_35967_36001[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_35971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35971[0] = state_machine__5507__auto__);
(statearr_35971[1] = 1);
return statearr_35971;
});
var state_machine__5507__auto____1 = (function (state_35933){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35933);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35972){if((e35972 instanceof Object))
{var ex__5510__auto__ = e35972;var statearr_35973_36002 = state_35933;(statearr_35973_36002[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35933);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35972;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36003 = state_35933;
state_35933 = G__36003;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35933){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35974 = f__5522__auto__.call(null);(statearr_35974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35975);
return statearr_35974;
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
cljs.core.async.Pub = (function (){var obj36005 = {};return obj36005;
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
return (function (p1__36006_SHARP_){if(cljs.core.truth_(p1__36006_SHARP_.call(null,topic)))
{return p1__36006_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__36006_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t36131 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36131 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta36132){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta36132 = meta36132;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36131.cljs$lang$type = true;
cljs.core.async.t36131.cljs$lang$ctorStr = "cljs.core.async/t36131";
cljs.core.async.t36131.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t36131");
});})(mults,ensure_mult))
;
cljs.core.async.t36131.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t36131.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t36131.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t36131.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t36131.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t36131.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36131.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t36131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36133){var self__ = this;
var _36133__$1 = this;return self__.meta36132;
});})(mults,ensure_mult))
;
cljs.core.async.t36131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36133,meta36132__$1){var self__ = this;
var _36133__$1 = this;return (new cljs.core.async.t36131(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta36132__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t36131 = ((function (mults,ensure_mult){
return (function __GT_t36131(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36132){return (new cljs.core.async.t36131(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36132));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t36131(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___36255 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36207){var state_val_36208 = (state_36207[1]);if((state_val_36208 === 1))
{var state_36207__$1 = state_36207;var statearr_36209_36256 = state_36207__$1;(statearr_36209_36256[2] = null);
(statearr_36209_36256[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 2))
{var state_36207__$1 = state_36207;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36207__$1,4,ch);
} else
{if((state_val_36208 === 3))
{var inst_36205 = (state_36207[2]);var state_36207__$1 = state_36207;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36207__$1,inst_36205);
} else
{if((state_val_36208 === 4))
{var inst_36136 = (state_36207[7]);var inst_36136__$1 = (state_36207[2]);var inst_36137 = (inst_36136__$1 == null);var state_36207__$1 = (function (){var statearr_36210 = state_36207;(statearr_36210[7] = inst_36136__$1);
return statearr_36210;
})();if(cljs.core.truth_(inst_36137))
{var statearr_36211_36257 = state_36207__$1;(statearr_36211_36257[1] = 5);
} else
{var statearr_36212_36258 = state_36207__$1;(statearr_36212_36258[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 5))
{var inst_36143 = cljs.core.deref.call(null,mults);var inst_36144 = cljs.core.vals.call(null,inst_36143);var inst_36145 = cljs.core.seq.call(null,inst_36144);var inst_36146 = inst_36145;var inst_36147 = null;var inst_36148 = 0;var inst_36149 = 0;var state_36207__$1 = (function (){var statearr_36213 = state_36207;(statearr_36213[8] = inst_36146);
(statearr_36213[9] = inst_36149);
(statearr_36213[10] = inst_36148);
(statearr_36213[11] = inst_36147);
return statearr_36213;
})();var statearr_36214_36259 = state_36207__$1;(statearr_36214_36259[2] = null);
(statearr_36214_36259[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 6))
{var inst_36184 = (state_36207[12]);var inst_36186 = (state_36207[13]);var inst_36136 = (state_36207[7]);var inst_36184__$1 = topic_fn.call(null,inst_36136);var inst_36185 = cljs.core.deref.call(null,mults);var inst_36186__$1 = cljs.core.get.call(null,inst_36185,inst_36184__$1);var state_36207__$1 = (function (){var statearr_36215 = state_36207;(statearr_36215[12] = inst_36184__$1);
(statearr_36215[13] = inst_36186__$1);
return statearr_36215;
})();if(cljs.core.truth_(inst_36186__$1))
{var statearr_36216_36260 = state_36207__$1;(statearr_36216_36260[1] = 19);
} else
{var statearr_36217_36261 = state_36207__$1;(statearr_36217_36261[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 7))
{var inst_36203 = (state_36207[2]);var state_36207__$1 = state_36207;var statearr_36218_36262 = state_36207__$1;(statearr_36218_36262[2] = inst_36203);
(statearr_36218_36262[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 8))
{var inst_36149 = (state_36207[9]);var inst_36148 = (state_36207[10]);var inst_36151 = (inst_36149 < inst_36148);var inst_36152 = inst_36151;var state_36207__$1 = state_36207;if(cljs.core.truth_(inst_36152))
{var statearr_36222_36263 = state_36207__$1;(statearr_36222_36263[1] = 10);
} else
{var statearr_36223_36264 = state_36207__$1;(statearr_36223_36264[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 9))
{var inst_36182 = (state_36207[2]);var state_36207__$1 = state_36207;var statearr_36224_36265 = state_36207__$1;(statearr_36224_36265[2] = inst_36182);
(statearr_36224_36265[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 10))
{var inst_36146 = (state_36207[8]);var inst_36149 = (state_36207[9]);var inst_36148 = (state_36207[10]);var inst_36147 = (state_36207[11]);var inst_36154 = cljs.core._nth.call(null,inst_36147,inst_36149);var inst_36155 = cljs.core.async.muxch_STAR_.call(null,inst_36154);var inst_36156 = cljs.core.async.close_BANG_.call(null,inst_36155);var inst_36157 = (inst_36149 + 1);var tmp36219 = inst_36146;var tmp36220 = inst_36148;var tmp36221 = inst_36147;var inst_36146__$1 = tmp36219;var inst_36147__$1 = tmp36221;var inst_36148__$1 = tmp36220;var inst_36149__$1 = inst_36157;var state_36207__$1 = (function (){var statearr_36225 = state_36207;(statearr_36225[8] = inst_36146__$1);
(statearr_36225[14] = inst_36156);
(statearr_36225[9] = inst_36149__$1);
(statearr_36225[10] = inst_36148__$1);
(statearr_36225[11] = inst_36147__$1);
return statearr_36225;
})();var statearr_36226_36266 = state_36207__$1;(statearr_36226_36266[2] = null);
(statearr_36226_36266[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 11))
{var inst_36146 = (state_36207[8]);var inst_36160 = (state_36207[15]);var inst_36160__$1 = cljs.core.seq.call(null,inst_36146);var state_36207__$1 = (function (){var statearr_36227 = state_36207;(statearr_36227[15] = inst_36160__$1);
return statearr_36227;
})();if(inst_36160__$1)
{var statearr_36228_36267 = state_36207__$1;(statearr_36228_36267[1] = 13);
} else
{var statearr_36229_36268 = state_36207__$1;(statearr_36229_36268[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 12))
{var inst_36180 = (state_36207[2]);var state_36207__$1 = state_36207;var statearr_36230_36269 = state_36207__$1;(statearr_36230_36269[2] = inst_36180);
(statearr_36230_36269[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 13))
{var inst_36160 = (state_36207[15]);var inst_36162 = cljs.core.chunked_seq_QMARK_.call(null,inst_36160);var state_36207__$1 = state_36207;if(inst_36162)
{var statearr_36231_36270 = state_36207__$1;(statearr_36231_36270[1] = 16);
} else
{var statearr_36232_36271 = state_36207__$1;(statearr_36232_36271[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 14))
{var state_36207__$1 = state_36207;var statearr_36233_36272 = state_36207__$1;(statearr_36233_36272[2] = null);
(statearr_36233_36272[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 15))
{var inst_36178 = (state_36207[2]);var state_36207__$1 = state_36207;var statearr_36234_36273 = state_36207__$1;(statearr_36234_36273[2] = inst_36178);
(statearr_36234_36273[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 16))
{var inst_36160 = (state_36207[15]);var inst_36164 = cljs.core.chunk_first.call(null,inst_36160);var inst_36165 = cljs.core.chunk_rest.call(null,inst_36160);var inst_36166 = cljs.core.count.call(null,inst_36164);var inst_36146 = inst_36165;var inst_36147 = inst_36164;var inst_36148 = inst_36166;var inst_36149 = 0;var state_36207__$1 = (function (){var statearr_36235 = state_36207;(statearr_36235[8] = inst_36146);
(statearr_36235[9] = inst_36149);
(statearr_36235[10] = inst_36148);
(statearr_36235[11] = inst_36147);
return statearr_36235;
})();var statearr_36236_36274 = state_36207__$1;(statearr_36236_36274[2] = null);
(statearr_36236_36274[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 17))
{var inst_36160 = (state_36207[15]);var inst_36169 = cljs.core.first.call(null,inst_36160);var inst_36170 = cljs.core.async.muxch_STAR_.call(null,inst_36169);var inst_36171 = cljs.core.async.close_BANG_.call(null,inst_36170);var inst_36172 = cljs.core.next.call(null,inst_36160);var inst_36146 = inst_36172;var inst_36147 = null;var inst_36148 = 0;var inst_36149 = 0;var state_36207__$1 = (function (){var statearr_36237 = state_36207;(statearr_36237[8] = inst_36146);
(statearr_36237[16] = inst_36171);
(statearr_36237[9] = inst_36149);
(statearr_36237[10] = inst_36148);
(statearr_36237[11] = inst_36147);
return statearr_36237;
})();var statearr_36238_36275 = state_36207__$1;(statearr_36238_36275[2] = null);
(statearr_36238_36275[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 18))
{var inst_36175 = (state_36207[2]);var state_36207__$1 = state_36207;var statearr_36239_36276 = state_36207__$1;(statearr_36239_36276[2] = inst_36175);
(statearr_36239_36276[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 19))
{var state_36207__$1 = state_36207;var statearr_36240_36277 = state_36207__$1;(statearr_36240_36277[2] = null);
(statearr_36240_36277[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 20))
{var state_36207__$1 = state_36207;var statearr_36241_36278 = state_36207__$1;(statearr_36241_36278[2] = null);
(statearr_36241_36278[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 21))
{var inst_36200 = (state_36207[2]);var state_36207__$1 = (function (){var statearr_36242 = state_36207;(statearr_36242[17] = inst_36200);
return statearr_36242;
})();var statearr_36243_36279 = state_36207__$1;(statearr_36243_36279[2] = null);
(statearr_36243_36279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 22))
{var inst_36197 = (state_36207[2]);var state_36207__$1 = state_36207;var statearr_36244_36280 = state_36207__$1;(statearr_36244_36280[2] = inst_36197);
(statearr_36244_36280[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 23))
{var inst_36184 = (state_36207[12]);var inst_36188 = (state_36207[2]);var inst_36189 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36184);var state_36207__$1 = (function (){var statearr_36245 = state_36207;(statearr_36245[18] = inst_36188);
return statearr_36245;
})();var statearr_36246_36281 = state_36207__$1;(statearr_36246_36281[2] = inst_36189);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36207__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36208 === 24))
{var inst_36186 = (state_36207[13]);var inst_36136 = (state_36207[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36207,23,Object,null,22);var inst_36193 = cljs.core.async.muxch_STAR_.call(null,inst_36186);var state_36207__$1 = state_36207;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36207__$1,25,inst_36193,inst_36136);
} else
{if((state_val_36208 === 25))
{var inst_36195 = (state_36207[2]);var state_36207__$1 = state_36207;var statearr_36247_36282 = state_36207__$1;(statearr_36247_36282[2] = inst_36195);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36207__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36251[0] = state_machine__5507__auto__);
(statearr_36251[1] = 1);
return statearr_36251;
});
var state_machine__5507__auto____1 = (function (state_36207){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36207);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36252){if((e36252 instanceof Object))
{var ex__5510__auto__ = e36252;var statearr_36253_36283 = state_36207;(statearr_36253_36283[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36207);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36252;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36284 = state_36207;
state_36207 = G__36284;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36207){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36254 = f__5522__auto__.call(null);(statearr_36254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36255);
return statearr_36254;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___36421 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36391){var state_val_36392 = (state_36391[1]);if((state_val_36392 === 1))
{var state_36391__$1 = state_36391;var statearr_36393_36422 = state_36391__$1;(statearr_36393_36422[2] = null);
(statearr_36393_36422[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36392 === 2))
{var inst_36354 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36355 = 0;var state_36391__$1 = (function (){var statearr_36394 = state_36391;(statearr_36394[7] = inst_36354);
(statearr_36394[8] = inst_36355);
return statearr_36394;
})();var statearr_36395_36423 = state_36391__$1;(statearr_36395_36423[2] = null);
(statearr_36395_36423[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36392 === 3))
{var inst_36389 = (state_36391[2]);var state_36391__$1 = state_36391;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36391__$1,inst_36389);
} else
{if((state_val_36392 === 4))
{var inst_36355 = (state_36391[8]);var inst_36357 = (inst_36355 < cnt);var state_36391__$1 = state_36391;if(cljs.core.truth_(inst_36357))
{var statearr_36396_36424 = state_36391__$1;(statearr_36396_36424[1] = 6);
} else
{var statearr_36397_36425 = state_36391__$1;(statearr_36397_36425[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36392 === 5))
{var inst_36375 = (state_36391[2]);var state_36391__$1 = (function (){var statearr_36398 = state_36391;(statearr_36398[9] = inst_36375);
return statearr_36398;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36391__$1,12,dchan);
} else
{if((state_val_36392 === 6))
{var state_36391__$1 = state_36391;var statearr_36399_36426 = state_36391__$1;(statearr_36399_36426[2] = null);
(statearr_36399_36426[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36392 === 7))
{var state_36391__$1 = state_36391;var statearr_36400_36427 = state_36391__$1;(statearr_36400_36427[2] = null);
(statearr_36400_36427[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36392 === 8))
{var inst_36373 = (state_36391[2]);var state_36391__$1 = state_36391;var statearr_36401_36428 = state_36391__$1;(statearr_36401_36428[2] = inst_36373);
(statearr_36401_36428[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36392 === 9))
{var inst_36355 = (state_36391[8]);var inst_36368 = (state_36391[2]);var inst_36369 = (inst_36355 + 1);var inst_36355__$1 = inst_36369;var state_36391__$1 = (function (){var statearr_36402 = state_36391;(statearr_36402[8] = inst_36355__$1);
(statearr_36402[10] = inst_36368);
return statearr_36402;
})();var statearr_36403_36429 = state_36391__$1;(statearr_36403_36429[2] = null);
(statearr_36403_36429[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36392 === 10))
{var inst_36359 = (state_36391[2]);var inst_36360 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36391__$1 = (function (){var statearr_36404 = state_36391;(statearr_36404[11] = inst_36359);
return statearr_36404;
})();var statearr_36405_36430 = state_36391__$1;(statearr_36405_36430[2] = inst_36360);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36391__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36392 === 11))
{var inst_36355 = (state_36391[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36391,10,Object,null,9);var inst_36364 = chs__$1.call(null,inst_36355);var inst_36365 = done.call(null,inst_36355);var inst_36366 = cljs.core.async.take_BANG_.call(null,inst_36364,inst_36365);var state_36391__$1 = state_36391;var statearr_36406_36431 = state_36391__$1;(statearr_36406_36431[2] = inst_36366);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36391__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36392 === 12))
{var inst_36377 = (state_36391[12]);var inst_36377__$1 = (state_36391[2]);var inst_36378 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36377__$1);var state_36391__$1 = (function (){var statearr_36407 = state_36391;(statearr_36407[12] = inst_36377__$1);
return statearr_36407;
})();if(cljs.core.truth_(inst_36378))
{var statearr_36408_36432 = state_36391__$1;(statearr_36408_36432[1] = 13);
} else
{var statearr_36409_36433 = state_36391__$1;(statearr_36409_36433[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36392 === 13))
{var inst_36380 = cljs.core.async.close_BANG_.call(null,out);var state_36391__$1 = state_36391;var statearr_36410_36434 = state_36391__$1;(statearr_36410_36434[2] = inst_36380);
(statearr_36410_36434[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36392 === 14))
{var inst_36377 = (state_36391[12]);var inst_36382 = cljs.core.apply.call(null,f,inst_36377);var state_36391__$1 = state_36391;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36391__$1,16,out,inst_36382);
} else
{if((state_val_36392 === 15))
{var inst_36387 = (state_36391[2]);var state_36391__$1 = state_36391;var statearr_36411_36435 = state_36391__$1;(statearr_36411_36435[2] = inst_36387);
(statearr_36411_36435[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36392 === 16))
{var inst_36384 = (state_36391[2]);var state_36391__$1 = (function (){var statearr_36412 = state_36391;(statearr_36412[13] = inst_36384);
return statearr_36412;
})();var statearr_36413_36436 = state_36391__$1;(statearr_36413_36436[2] = null);
(statearr_36413_36436[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36417[0] = state_machine__5507__auto__);
(statearr_36417[1] = 1);
return statearr_36417;
});
var state_machine__5507__auto____1 = (function (state_36391){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36391);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36418){if((e36418 instanceof Object))
{var ex__5510__auto__ = e36418;var statearr_36419_36437 = state_36391;(statearr_36419_36437[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36391);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36418;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36438 = state_36391;
state_36391 = G__36438;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36391){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36420 = f__5522__auto__.call(null);(statearr_36420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36421);
return statearr_36420;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36546 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36522){var state_val_36523 = (state_36522[1]);if((state_val_36523 === 1))
{var inst_36493 = cljs.core.vec.call(null,chs);var inst_36494 = inst_36493;var state_36522__$1 = (function (){var statearr_36524 = state_36522;(statearr_36524[7] = inst_36494);
return statearr_36524;
})();var statearr_36525_36547 = state_36522__$1;(statearr_36525_36547[2] = null);
(statearr_36525_36547[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36523 === 2))
{var inst_36494 = (state_36522[7]);var inst_36496 = cljs.core.count.call(null,inst_36494);var inst_36497 = (inst_36496 > 0);var state_36522__$1 = state_36522;if(cljs.core.truth_(inst_36497))
{var statearr_36526_36548 = state_36522__$1;(statearr_36526_36548[1] = 4);
} else
{var statearr_36527_36549 = state_36522__$1;(statearr_36527_36549[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36523 === 3))
{var inst_36520 = (state_36522[2]);var state_36522__$1 = state_36522;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36522__$1,inst_36520);
} else
{if((state_val_36523 === 4))
{var inst_36494 = (state_36522[7]);var state_36522__$1 = state_36522;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36522__$1,7,inst_36494);
} else
{if((state_val_36523 === 5))
{var inst_36516 = cljs.core.async.close_BANG_.call(null,out);var state_36522__$1 = state_36522;var statearr_36528_36550 = state_36522__$1;(statearr_36528_36550[2] = inst_36516);
(statearr_36528_36550[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36523 === 6))
{var inst_36518 = (state_36522[2]);var state_36522__$1 = state_36522;var statearr_36529_36551 = state_36522__$1;(statearr_36529_36551[2] = inst_36518);
(statearr_36529_36551[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36523 === 7))
{var inst_36502 = (state_36522[8]);var inst_36501 = (state_36522[9]);var inst_36501__$1 = (state_36522[2]);var inst_36502__$1 = cljs.core.nth.call(null,inst_36501__$1,0,null);var inst_36503 = cljs.core.nth.call(null,inst_36501__$1,1,null);var inst_36504 = (inst_36502__$1 == null);var state_36522__$1 = (function (){var statearr_36530 = state_36522;(statearr_36530[10] = inst_36503);
(statearr_36530[8] = inst_36502__$1);
(statearr_36530[9] = inst_36501__$1);
return statearr_36530;
})();if(cljs.core.truth_(inst_36504))
{var statearr_36531_36552 = state_36522__$1;(statearr_36531_36552[1] = 8);
} else
{var statearr_36532_36553 = state_36522__$1;(statearr_36532_36553[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36523 === 8))
{var inst_36503 = (state_36522[10]);var inst_36502 = (state_36522[8]);var inst_36501 = (state_36522[9]);var inst_36494 = (state_36522[7]);var inst_36506 = (function (){var c = inst_36503;var v = inst_36502;var vec__36499 = inst_36501;var cs = inst_36494;return ((function (c,v,vec__36499,cs,inst_36503,inst_36502,inst_36501,inst_36494,state_val_36523){
return (function (p1__36439_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36439_SHARP_);
});
;})(c,v,vec__36499,cs,inst_36503,inst_36502,inst_36501,inst_36494,state_val_36523))
})();var inst_36507 = cljs.core.filterv.call(null,inst_36506,inst_36494);var inst_36494__$1 = inst_36507;var state_36522__$1 = (function (){var statearr_36533 = state_36522;(statearr_36533[7] = inst_36494__$1);
return statearr_36533;
})();var statearr_36534_36554 = state_36522__$1;(statearr_36534_36554[2] = null);
(statearr_36534_36554[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36523 === 9))
{var inst_36502 = (state_36522[8]);var state_36522__$1 = state_36522;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36522__$1,11,out,inst_36502);
} else
{if((state_val_36523 === 10))
{var inst_36514 = (state_36522[2]);var state_36522__$1 = state_36522;var statearr_36536_36555 = state_36522__$1;(statearr_36536_36555[2] = inst_36514);
(statearr_36536_36555[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36523 === 11))
{var inst_36494 = (state_36522[7]);var inst_36511 = (state_36522[2]);var tmp36535 = inst_36494;var inst_36494__$1 = tmp36535;var state_36522__$1 = (function (){var statearr_36537 = state_36522;(statearr_36537[11] = inst_36511);
(statearr_36537[7] = inst_36494__$1);
return statearr_36537;
})();var statearr_36538_36556 = state_36522__$1;(statearr_36538_36556[2] = null);
(statearr_36538_36556[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36542 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36542[0] = state_machine__5507__auto__);
(statearr_36542[1] = 1);
return statearr_36542;
});
var state_machine__5507__auto____1 = (function (state_36522){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36522);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36543){if((e36543 instanceof Object))
{var ex__5510__auto__ = e36543;var statearr_36544_36557 = state_36522;(statearr_36544_36557[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36522);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36543;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36558 = state_36522;
state_36522 = G__36558;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36522){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36545 = f__5522__auto__.call(null);(statearr_36545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36546);
return statearr_36545;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36651 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36628){var state_val_36629 = (state_36628[1]);if((state_val_36629 === 1))
{var inst_36605 = 0;var state_36628__$1 = (function (){var statearr_36630 = state_36628;(statearr_36630[7] = inst_36605);
return statearr_36630;
})();var statearr_36631_36652 = state_36628__$1;(statearr_36631_36652[2] = null);
(statearr_36631_36652[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36629 === 2))
{var inst_36605 = (state_36628[7]);var inst_36607 = (inst_36605 < n);var state_36628__$1 = state_36628;if(cljs.core.truth_(inst_36607))
{var statearr_36632_36653 = state_36628__$1;(statearr_36632_36653[1] = 4);
} else
{var statearr_36633_36654 = state_36628__$1;(statearr_36633_36654[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36629 === 3))
{var inst_36625 = (state_36628[2]);var inst_36626 = cljs.core.async.close_BANG_.call(null,out);var state_36628__$1 = (function (){var statearr_36634 = state_36628;(statearr_36634[8] = inst_36625);
return statearr_36634;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36628__$1,inst_36626);
} else
{if((state_val_36629 === 4))
{var state_36628__$1 = state_36628;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36628__$1,7,ch);
} else
{if((state_val_36629 === 5))
{var state_36628__$1 = state_36628;var statearr_36635_36655 = state_36628__$1;(statearr_36635_36655[2] = null);
(statearr_36635_36655[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36629 === 6))
{var inst_36623 = (state_36628[2]);var state_36628__$1 = state_36628;var statearr_36636_36656 = state_36628__$1;(statearr_36636_36656[2] = inst_36623);
(statearr_36636_36656[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36629 === 7))
{var inst_36610 = (state_36628[9]);var inst_36610__$1 = (state_36628[2]);var inst_36611 = (inst_36610__$1 == null);var inst_36612 = cljs.core.not.call(null,inst_36611);var state_36628__$1 = (function (){var statearr_36637 = state_36628;(statearr_36637[9] = inst_36610__$1);
return statearr_36637;
})();if(inst_36612)
{var statearr_36638_36657 = state_36628__$1;(statearr_36638_36657[1] = 8);
} else
{var statearr_36639_36658 = state_36628__$1;(statearr_36639_36658[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36629 === 8))
{var inst_36610 = (state_36628[9]);var state_36628__$1 = state_36628;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36628__$1,11,out,inst_36610);
} else
{if((state_val_36629 === 9))
{var state_36628__$1 = state_36628;var statearr_36640_36659 = state_36628__$1;(statearr_36640_36659[2] = null);
(statearr_36640_36659[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36629 === 10))
{var inst_36620 = (state_36628[2]);var state_36628__$1 = state_36628;var statearr_36641_36660 = state_36628__$1;(statearr_36641_36660[2] = inst_36620);
(statearr_36641_36660[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36629 === 11))
{var inst_36605 = (state_36628[7]);var inst_36615 = (state_36628[2]);var inst_36616 = (inst_36605 + 1);var inst_36605__$1 = inst_36616;var state_36628__$1 = (function (){var statearr_36642 = state_36628;(statearr_36642[10] = inst_36615);
(statearr_36642[7] = inst_36605__$1);
return statearr_36642;
})();var statearr_36643_36661 = state_36628__$1;(statearr_36643_36661[2] = null);
(statearr_36643_36661[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36647 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36647[0] = state_machine__5507__auto__);
(statearr_36647[1] = 1);
return statearr_36647;
});
var state_machine__5507__auto____1 = (function (state_36628){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36628);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36648){if((e36648 instanceof Object))
{var ex__5510__auto__ = e36648;var statearr_36649_36662 = state_36628;(statearr_36649_36662[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36628);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36648;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36663 = state_36628;
state_36628 = G__36663;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36628){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36650 = f__5522__auto__.call(null);(statearr_36650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36651);
return statearr_36650;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36760 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36735){var state_val_36736 = (state_36735[1]);if((state_val_36736 === 1))
{var inst_36712 = null;var state_36735__$1 = (function (){var statearr_36737 = state_36735;(statearr_36737[7] = inst_36712);
return statearr_36737;
})();var statearr_36738_36761 = state_36735__$1;(statearr_36738_36761[2] = null);
(statearr_36738_36761[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36736 === 2))
{var state_36735__$1 = state_36735;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36735__$1,4,ch);
} else
{if((state_val_36736 === 3))
{var inst_36732 = (state_36735[2]);var inst_36733 = cljs.core.async.close_BANG_.call(null,out);var state_36735__$1 = (function (){var statearr_36739 = state_36735;(statearr_36739[8] = inst_36732);
return statearr_36739;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36735__$1,inst_36733);
} else
{if((state_val_36736 === 4))
{var inst_36715 = (state_36735[9]);var inst_36715__$1 = (state_36735[2]);var inst_36716 = (inst_36715__$1 == null);var inst_36717 = cljs.core.not.call(null,inst_36716);var state_36735__$1 = (function (){var statearr_36740 = state_36735;(statearr_36740[9] = inst_36715__$1);
return statearr_36740;
})();if(inst_36717)
{var statearr_36741_36762 = state_36735__$1;(statearr_36741_36762[1] = 5);
} else
{var statearr_36742_36763 = state_36735__$1;(statearr_36742_36763[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36736 === 5))
{var inst_36712 = (state_36735[7]);var inst_36715 = (state_36735[9]);var inst_36719 = cljs.core._EQ_.call(null,inst_36715,inst_36712);var state_36735__$1 = state_36735;if(inst_36719)
{var statearr_36743_36764 = state_36735__$1;(statearr_36743_36764[1] = 8);
} else
{var statearr_36744_36765 = state_36735__$1;(statearr_36744_36765[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36736 === 6))
{var state_36735__$1 = state_36735;var statearr_36746_36766 = state_36735__$1;(statearr_36746_36766[2] = null);
(statearr_36746_36766[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36736 === 7))
{var inst_36730 = (state_36735[2]);var state_36735__$1 = state_36735;var statearr_36747_36767 = state_36735__$1;(statearr_36747_36767[2] = inst_36730);
(statearr_36747_36767[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36736 === 8))
{var inst_36712 = (state_36735[7]);var tmp36745 = inst_36712;var inst_36712__$1 = tmp36745;var state_36735__$1 = (function (){var statearr_36748 = state_36735;(statearr_36748[7] = inst_36712__$1);
return statearr_36748;
})();var statearr_36749_36768 = state_36735__$1;(statearr_36749_36768[2] = null);
(statearr_36749_36768[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36736 === 9))
{var inst_36715 = (state_36735[9]);var state_36735__$1 = state_36735;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36735__$1,11,out,inst_36715);
} else
{if((state_val_36736 === 10))
{var inst_36727 = (state_36735[2]);var state_36735__$1 = state_36735;var statearr_36750_36769 = state_36735__$1;(statearr_36750_36769[2] = inst_36727);
(statearr_36750_36769[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36736 === 11))
{var inst_36715 = (state_36735[9]);var inst_36724 = (state_36735[2]);var inst_36712 = inst_36715;var state_36735__$1 = (function (){var statearr_36751 = state_36735;(statearr_36751[10] = inst_36724);
(statearr_36751[7] = inst_36712);
return statearr_36751;
})();var statearr_36752_36770 = state_36735__$1;(statearr_36752_36770[2] = null);
(statearr_36752_36770[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36756 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36756[0] = state_machine__5507__auto__);
(statearr_36756[1] = 1);
return statearr_36756;
});
var state_machine__5507__auto____1 = (function (state_36735){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36735);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36757){if((e36757 instanceof Object))
{var ex__5510__auto__ = e36757;var statearr_36758_36771 = state_36735;(statearr_36758_36771[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36735);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36757;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36772 = state_36735;
state_36735 = G__36772;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36735){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36759 = f__5522__auto__.call(null);(statearr_36759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36760);
return statearr_36759;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36907 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36877){var state_val_36878 = (state_36877[1]);if((state_val_36878 === 1))
{var inst_36840 = (new Array(n));var inst_36841 = inst_36840;var inst_36842 = 0;var state_36877__$1 = (function (){var statearr_36879 = state_36877;(statearr_36879[7] = inst_36842);
(statearr_36879[8] = inst_36841);
return statearr_36879;
})();var statearr_36880_36908 = state_36877__$1;(statearr_36880_36908[2] = null);
(statearr_36880_36908[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36878 === 2))
{var state_36877__$1 = state_36877;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36877__$1,4,ch);
} else
{if((state_val_36878 === 3))
{var inst_36875 = (state_36877[2]);var state_36877__$1 = state_36877;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36877__$1,inst_36875);
} else
{if((state_val_36878 === 4))
{var inst_36845 = (state_36877[9]);var inst_36845__$1 = (state_36877[2]);var inst_36846 = (inst_36845__$1 == null);var inst_36847 = cljs.core.not.call(null,inst_36846);var state_36877__$1 = (function (){var statearr_36881 = state_36877;(statearr_36881[9] = inst_36845__$1);
return statearr_36881;
})();if(inst_36847)
{var statearr_36882_36909 = state_36877__$1;(statearr_36882_36909[1] = 5);
} else
{var statearr_36883_36910 = state_36877__$1;(statearr_36883_36910[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36878 === 5))
{var inst_36845 = (state_36877[9]);var inst_36850 = (state_36877[10]);var inst_36842 = (state_36877[7]);var inst_36841 = (state_36877[8]);var inst_36849 = (inst_36841[inst_36842] = inst_36845);var inst_36850__$1 = (inst_36842 + 1);var inst_36851 = (inst_36850__$1 < n);var state_36877__$1 = (function (){var statearr_36884 = state_36877;(statearr_36884[11] = inst_36849);
(statearr_36884[10] = inst_36850__$1);
return statearr_36884;
})();if(cljs.core.truth_(inst_36851))
{var statearr_36885_36911 = state_36877__$1;(statearr_36885_36911[1] = 8);
} else
{var statearr_36886_36912 = state_36877__$1;(statearr_36886_36912[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36878 === 6))
{var inst_36842 = (state_36877[7]);var inst_36863 = (inst_36842 > 0);var state_36877__$1 = state_36877;if(cljs.core.truth_(inst_36863))
{var statearr_36888_36913 = state_36877__$1;(statearr_36888_36913[1] = 12);
} else
{var statearr_36889_36914 = state_36877__$1;(statearr_36889_36914[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36878 === 7))
{var inst_36873 = (state_36877[2]);var state_36877__$1 = state_36877;var statearr_36890_36915 = state_36877__$1;(statearr_36890_36915[2] = inst_36873);
(statearr_36890_36915[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36878 === 8))
{var inst_36850 = (state_36877[10]);var inst_36841 = (state_36877[8]);var tmp36887 = inst_36841;var inst_36841__$1 = tmp36887;var inst_36842 = inst_36850;var state_36877__$1 = (function (){var statearr_36891 = state_36877;(statearr_36891[7] = inst_36842);
(statearr_36891[8] = inst_36841__$1);
return statearr_36891;
})();var statearr_36892_36916 = state_36877__$1;(statearr_36892_36916[2] = null);
(statearr_36892_36916[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36878 === 9))
{var inst_36841 = (state_36877[8]);var inst_36855 = cljs.core.vec.call(null,inst_36841);var state_36877__$1 = state_36877;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36877__$1,11,out,inst_36855);
} else
{if((state_val_36878 === 10))
{var inst_36861 = (state_36877[2]);var state_36877__$1 = state_36877;var statearr_36893_36917 = state_36877__$1;(statearr_36893_36917[2] = inst_36861);
(statearr_36893_36917[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36878 === 11))
{var inst_36857 = (state_36877[2]);var inst_36858 = (new Array(n));var inst_36841 = inst_36858;var inst_36842 = 0;var state_36877__$1 = (function (){var statearr_36894 = state_36877;(statearr_36894[12] = inst_36857);
(statearr_36894[7] = inst_36842);
(statearr_36894[8] = inst_36841);
return statearr_36894;
})();var statearr_36895_36918 = state_36877__$1;(statearr_36895_36918[2] = null);
(statearr_36895_36918[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36878 === 12))
{var inst_36841 = (state_36877[8]);var inst_36865 = cljs.core.vec.call(null,inst_36841);var state_36877__$1 = state_36877;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36877__$1,15,out,inst_36865);
} else
{if((state_val_36878 === 13))
{var state_36877__$1 = state_36877;var statearr_36896_36919 = state_36877__$1;(statearr_36896_36919[2] = null);
(statearr_36896_36919[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36878 === 14))
{var inst_36870 = (state_36877[2]);var inst_36871 = cljs.core.async.close_BANG_.call(null,out);var state_36877__$1 = (function (){var statearr_36897 = state_36877;(statearr_36897[13] = inst_36870);
return statearr_36897;
})();var statearr_36898_36920 = state_36877__$1;(statearr_36898_36920[2] = inst_36871);
(statearr_36898_36920[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36878 === 15))
{var inst_36867 = (state_36877[2]);var state_36877__$1 = state_36877;var statearr_36899_36921 = state_36877__$1;(statearr_36899_36921[2] = inst_36867);
(statearr_36899_36921[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_36903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36903[0] = state_machine__5507__auto__);
(statearr_36903[1] = 1);
return statearr_36903;
});
var state_machine__5507__auto____1 = (function (state_36877){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36877);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36904){if((e36904 instanceof Object))
{var ex__5510__auto__ = e36904;var statearr_36905_36922 = state_36877;(statearr_36905_36922[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36877);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36904;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36923 = state_36877;
state_36877 = G__36923;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36877){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36906 = f__5522__auto__.call(null);(statearr_36906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36907);
return statearr_36906;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37066 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37036){var state_val_37037 = (state_37036[1]);if((state_val_37037 === 1))
{var inst_36995 = [];var inst_36996 = inst_36995;var inst_36997 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_37036__$1 = (function (){var statearr_37038 = state_37036;(statearr_37038[7] = inst_36997);
(statearr_37038[8] = inst_36996);
return statearr_37038;
})();var statearr_37039_37067 = state_37036__$1;(statearr_37039_37067[2] = null);
(statearr_37039_37067[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37037 === 2))
{var state_37036__$1 = state_37036;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37036__$1,4,ch);
} else
{if((state_val_37037 === 3))
{var inst_37034 = (state_37036[2]);var state_37036__$1 = state_37036;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37036__$1,inst_37034);
} else
{if((state_val_37037 === 4))
{var inst_37000 = (state_37036[9]);var inst_37000__$1 = (state_37036[2]);var inst_37001 = (inst_37000__$1 == null);var inst_37002 = cljs.core.not.call(null,inst_37001);var state_37036__$1 = (function (){var statearr_37040 = state_37036;(statearr_37040[9] = inst_37000__$1);
return statearr_37040;
})();if(inst_37002)
{var statearr_37041_37068 = state_37036__$1;(statearr_37041_37068[1] = 5);
} else
{var statearr_37042_37069 = state_37036__$1;(statearr_37042_37069[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37037 === 5))
{var inst_36997 = (state_37036[7]);var inst_37004 = (state_37036[10]);var inst_37000 = (state_37036[9]);var inst_37004__$1 = f.call(null,inst_37000);var inst_37005 = cljs.core._EQ_.call(null,inst_37004__$1,inst_36997);var inst_37006 = cljs.core.keyword_identical_QMARK_.call(null,inst_36997,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_37007 = (inst_37005) || (inst_37006);var state_37036__$1 = (function (){var statearr_37043 = state_37036;(statearr_37043[10] = inst_37004__$1);
return statearr_37043;
})();if(cljs.core.truth_(inst_37007))
{var statearr_37044_37070 = state_37036__$1;(statearr_37044_37070[1] = 8);
} else
{var statearr_37045_37071 = state_37036__$1;(statearr_37045_37071[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37037 === 6))
{var inst_36996 = (state_37036[8]);var inst_37021 = inst_36996.length;var inst_37022 = (inst_37021 > 0);var state_37036__$1 = state_37036;if(cljs.core.truth_(inst_37022))
{var statearr_37047_37072 = state_37036__$1;(statearr_37047_37072[1] = 12);
} else
{var statearr_37048_37073 = state_37036__$1;(statearr_37048_37073[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37037 === 7))
{var inst_37032 = (state_37036[2]);var state_37036__$1 = state_37036;var statearr_37049_37074 = state_37036__$1;(statearr_37049_37074[2] = inst_37032);
(statearr_37049_37074[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37037 === 8))
{var inst_36996 = (state_37036[8]);var inst_37004 = (state_37036[10]);var inst_37000 = (state_37036[9]);var inst_37009 = inst_36996.push(inst_37000);var tmp37046 = inst_36996;var inst_36996__$1 = tmp37046;var inst_36997 = inst_37004;var state_37036__$1 = (function (){var statearr_37050 = state_37036;(statearr_37050[7] = inst_36997);
(statearr_37050[8] = inst_36996__$1);
(statearr_37050[11] = inst_37009);
return statearr_37050;
})();var statearr_37051_37075 = state_37036__$1;(statearr_37051_37075[2] = null);
(statearr_37051_37075[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37037 === 9))
{var inst_36996 = (state_37036[8]);var inst_37012 = cljs.core.vec.call(null,inst_36996);var state_37036__$1 = state_37036;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37036__$1,11,out,inst_37012);
} else
{if((state_val_37037 === 10))
{var inst_37019 = (state_37036[2]);var state_37036__$1 = state_37036;var statearr_37052_37076 = state_37036__$1;(statearr_37052_37076[2] = inst_37019);
(statearr_37052_37076[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37037 === 11))
{var inst_37004 = (state_37036[10]);var inst_37000 = (state_37036[9]);var inst_37014 = (state_37036[2]);var inst_37015 = [];var inst_37016 = inst_37015.push(inst_37000);var inst_36996 = inst_37015;var inst_36997 = inst_37004;var state_37036__$1 = (function (){var statearr_37053 = state_37036;(statearr_37053[7] = inst_36997);
(statearr_37053[8] = inst_36996);
(statearr_37053[12] = inst_37014);
(statearr_37053[13] = inst_37016);
return statearr_37053;
})();var statearr_37054_37077 = state_37036__$1;(statearr_37054_37077[2] = null);
(statearr_37054_37077[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37037 === 12))
{var inst_36996 = (state_37036[8]);var inst_37024 = cljs.core.vec.call(null,inst_36996);var state_37036__$1 = state_37036;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37036__$1,15,out,inst_37024);
} else
{if((state_val_37037 === 13))
{var state_37036__$1 = state_37036;var statearr_37055_37078 = state_37036__$1;(statearr_37055_37078[2] = null);
(statearr_37055_37078[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37037 === 14))
{var inst_37029 = (state_37036[2]);var inst_37030 = cljs.core.async.close_BANG_.call(null,out);var state_37036__$1 = (function (){var statearr_37056 = state_37036;(statearr_37056[14] = inst_37029);
return statearr_37056;
})();var statearr_37057_37079 = state_37036__$1;(statearr_37057_37079[2] = inst_37030);
(statearr_37057_37079[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37037 === 15))
{var inst_37026 = (state_37036[2]);var state_37036__$1 = state_37036;var statearr_37058_37080 = state_37036__$1;(statearr_37058_37080[2] = inst_37026);
(statearr_37058_37080[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_37062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37062[0] = state_machine__5507__auto__);
(statearr_37062[1] = 1);
return statearr_37062;
});
var state_machine__5507__auto____1 = (function (state_37036){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37036);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37063){if((e37063 instanceof Object))
{var ex__5510__auto__ = e37063;var statearr_37064_37081 = state_37036;(statearr_37064_37081[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37036);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37063;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37082 = state_37036;
state_37036 = G__37082;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37036){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37065 = f__5522__auto__.call(null);(statearr_37065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37066);
return statearr_37065;
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
