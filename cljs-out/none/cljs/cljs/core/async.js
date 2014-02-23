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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13718 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13718 = (function (f,fn_handler,meta13719){
this.f = f;
this.fn_handler = fn_handler;
this.meta13719 = meta13719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13718.cljs$lang$type = true;
cljs.core.async.t13718.cljs$lang$ctorStr = "cljs.core.async/t13718";
cljs.core.async.t13718.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13718");
});
cljs.core.async.t13718.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13720){var self__ = this;
var _13720__$1 = this;return self__.meta13719;
});
cljs.core.async.t13718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13720,meta13719__$1){var self__ = this;
var _13720__$1 = this;return (new cljs.core.async.t13718(self__.f,self__.fn_handler,meta13719__$1));
});
cljs.core.async.__GT_t13718 = (function __GT_t13718(f__$1,fn_handler__$1,meta13719){return (new cljs.core.async.t13718(f__$1,fn_handler__$1,meta13719));
});
}
return (new cljs.core.async.t13718(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13722 = buff;if(G__13722)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13722.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13722.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13722);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13722);
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
{var val_13723 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13723);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13723);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13724 = n;var x_13725 = 0;while(true){
if((x_13725 < n__4248__auto___13724))
{(a[x_13725] = 0);
{
var G__13726 = (x_13725 + 1);
x_13725 = G__13726;
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
var G__13727 = (i + 1);
i = G__13727;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13731 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13731 = (function (flag,alt_flag,meta13732){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13732 = meta13732;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13731.cljs$lang$type = true;
cljs.core.async.t13731.cljs$lang$ctorStr = "cljs.core.async/t13731";
cljs.core.async.t13731.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13731");
});
cljs.core.async.t13731.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13731.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13731.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13733){var self__ = this;
var _13733__$1 = this;return self__.meta13732;
});
cljs.core.async.t13731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13733,meta13732__$1){var self__ = this;
var _13733__$1 = this;return (new cljs.core.async.t13731(self__.flag,self__.alt_flag,meta13732__$1));
});
cljs.core.async.__GT_t13731 = (function __GT_t13731(flag__$1,alt_flag__$1,meta13732){return (new cljs.core.async.t13731(flag__$1,alt_flag__$1,meta13732));
});
}
return (new cljs.core.async.t13731(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13737 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13737 = (function (cb,flag,alt_handler,meta13738){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13738 = meta13738;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13737.cljs$lang$type = true;
cljs.core.async.t13737.cljs$lang$ctorStr = "cljs.core.async/t13737";
cljs.core.async.t13737.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13737");
});
cljs.core.async.t13737.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13737.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13737.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13739){var self__ = this;
var _13739__$1 = this;return self__.meta13738;
});
cljs.core.async.t13737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13739,meta13738__$1){var self__ = this;
var _13739__$1 = this;return (new cljs.core.async.t13737(self__.cb,self__.flag,self__.alt_handler,meta13738__$1));
});
cljs.core.async.__GT_t13737 = (function __GT_t13737(cb__$1,flag__$1,alt_handler__$1,meta13738){return (new cljs.core.async.t13737(cb__$1,flag__$1,alt_handler__$1,meta13738));
});
}
return (new cljs.core.async.t13737(cb,flag,alt_handler,null));
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
return (function (p1__13740_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13740_SHARP_,port], null));
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
var G__13741 = (i + 1);
i = G__13741;
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
var alts_BANG___delegate = function (ports,p__13742){var map__13744 = p__13742;var map__13744__$1 = ((cljs.core.seq_QMARK_.call(null,map__13744))?cljs.core.apply.call(null,cljs.core.hash_map,map__13744):map__13744);var opts = map__13744__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13742 = null;if (arguments.length > 1) {
  p__13742 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13742);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13745){
var ports = cljs.core.first(arglist__13745);
var p__13742 = cljs.core.rest(arglist__13745);
return alts_BANG___delegate(ports,p__13742);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13753 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13753 = (function (ch,f,map_LT_,meta13754){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13754 = meta13754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13753.cljs$lang$type = true;
cljs.core.async.t13753.cljs$lang$ctorStr = "cljs.core.async/t13753";
cljs.core.async.t13753.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13753");
});
cljs.core.async.t13753.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13753.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13753.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13753.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13756 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13756 = (function (fn1,_,meta13754,ch,f,map_LT_,meta13757){
this.fn1 = fn1;
this._ = _;
this.meta13754 = meta13754;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13757 = meta13757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13756.cljs$lang$type = true;
cljs.core.async.t13756.cljs$lang$ctorStr = "cljs.core.async/t13756";
cljs.core.async.t13756.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13756");
});
cljs.core.async.t13756.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13756.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13756.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13756.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13746_SHARP_){return f1.call(null,(((p1__13746_SHARP_ == null))?null:self__.f.call(null,p1__13746_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13758){var self__ = this;
var _13758__$1 = this;return self__.meta13757;
});
cljs.core.async.t13756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13758,meta13757__$1){var self__ = this;
var _13758__$1 = this;return (new cljs.core.async.t13756(self__.fn1,self__._,self__.meta13754,self__.ch,self__.f,self__.map_LT_,meta13757__$1));
});
cljs.core.async.__GT_t13756 = (function __GT_t13756(fn1__$1,___$2,meta13754__$1,ch__$2,f__$2,map_LT___$2,meta13757){return (new cljs.core.async.t13756(fn1__$1,___$2,meta13754__$1,ch__$2,f__$2,map_LT___$2,meta13757));
});
}
return (new cljs.core.async.t13756(fn1,___$1,self__.meta13754,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13753.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13753.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13755){var self__ = this;
var _13755__$1 = this;return self__.meta13754;
});
cljs.core.async.t13753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13755,meta13754__$1){var self__ = this;
var _13755__$1 = this;return (new cljs.core.async.t13753(self__.ch,self__.f,self__.map_LT_,meta13754__$1));
});
cljs.core.async.__GT_t13753 = (function __GT_t13753(ch__$1,f__$1,map_LT___$1,meta13754){return (new cljs.core.async.t13753(ch__$1,f__$1,map_LT___$1,meta13754));
});
}
return (new cljs.core.async.t13753(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13762 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13762 = (function (ch,f,map_GT_,meta13763){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13763 = meta13763;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13762.cljs$lang$type = true;
cljs.core.async.t13762.cljs$lang$ctorStr = "cljs.core.async/t13762";
cljs.core.async.t13762.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13762");
});
cljs.core.async.t13762.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13762.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13762.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13762.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13762.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13762.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13764){var self__ = this;
var _13764__$1 = this;return self__.meta13763;
});
cljs.core.async.t13762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13764,meta13763__$1){var self__ = this;
var _13764__$1 = this;return (new cljs.core.async.t13762(self__.ch,self__.f,self__.map_GT_,meta13763__$1));
});
cljs.core.async.__GT_t13762 = (function __GT_t13762(ch__$1,f__$1,map_GT___$1,meta13763){return (new cljs.core.async.t13762(ch__$1,f__$1,map_GT___$1,meta13763));
});
}
return (new cljs.core.async.t13762(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13768 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13768 = (function (ch,p,filter_GT_,meta13769){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13769 = meta13769;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13768.cljs$lang$type = true;
cljs.core.async.t13768.cljs$lang$ctorStr = "cljs.core.async/t13768";
cljs.core.async.t13768.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13768");
});
cljs.core.async.t13768.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13768.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13768.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13768.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13768.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13768.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13770){var self__ = this;
var _13770__$1 = this;return self__.meta13769;
});
cljs.core.async.t13768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13770,meta13769__$1){var self__ = this;
var _13770__$1 = this;return (new cljs.core.async.t13768(self__.ch,self__.p,self__.filter_GT_,meta13769__$1));
});
cljs.core.async.__GT_t13768 = (function __GT_t13768(ch__$1,p__$1,filter_GT___$1,meta13769){return (new cljs.core.async.t13768(ch__$1,p__$1,filter_GT___$1,meta13769));
});
}
return (new cljs.core.async.t13768(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13853 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13832){var state_val_13833 = (state_13832[1]);if((state_val_13833 === 1))
{var state_13832__$1 = state_13832;var statearr_13834_13854 = state_13832__$1;(statearr_13834_13854[2] = null);
(statearr_13834_13854[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13833 === 2))
{var state_13832__$1 = state_13832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13832__$1,4,ch);
} else
{if((state_val_13833 === 3))
{var inst_13830 = (state_13832[2]);var state_13832__$1 = state_13832;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13832__$1,inst_13830);
} else
{if((state_val_13833 === 4))
{var inst_13814 = (state_13832[7]);var inst_13814__$1 = (state_13832[2]);var inst_13815 = (inst_13814__$1 == null);var state_13832__$1 = (function (){var statearr_13835 = state_13832;(statearr_13835[7] = inst_13814__$1);
return statearr_13835;
})();if(cljs.core.truth_(inst_13815))
{var statearr_13836_13855 = state_13832__$1;(statearr_13836_13855[1] = 5);
} else
{var statearr_13837_13856 = state_13832__$1;(statearr_13837_13856[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13833 === 5))
{var inst_13817 = cljs.core.async.close_BANG_.call(null,out);var state_13832__$1 = state_13832;var statearr_13838_13857 = state_13832__$1;(statearr_13838_13857[2] = inst_13817);
(statearr_13838_13857[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13833 === 6))
{var inst_13814 = (state_13832[7]);var inst_13819 = p.call(null,inst_13814);var state_13832__$1 = state_13832;if(cljs.core.truth_(inst_13819))
{var statearr_13839_13858 = state_13832__$1;(statearr_13839_13858[1] = 8);
} else
{var statearr_13840_13859 = state_13832__$1;(statearr_13840_13859[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13833 === 7))
{var inst_13828 = (state_13832[2]);var state_13832__$1 = state_13832;var statearr_13841_13860 = state_13832__$1;(statearr_13841_13860[2] = inst_13828);
(statearr_13841_13860[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13833 === 8))
{var inst_13814 = (state_13832[7]);var state_13832__$1 = state_13832;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13832__$1,11,out,inst_13814);
} else
{if((state_val_13833 === 9))
{var state_13832__$1 = state_13832;var statearr_13842_13861 = state_13832__$1;(statearr_13842_13861[2] = null);
(statearr_13842_13861[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13833 === 10))
{var inst_13825 = (state_13832[2]);var state_13832__$1 = (function (){var statearr_13843 = state_13832;(statearr_13843[8] = inst_13825);
return statearr_13843;
})();var statearr_13844_13862 = state_13832__$1;(statearr_13844_13862[2] = null);
(statearr_13844_13862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13833 === 11))
{var inst_13822 = (state_13832[2]);var state_13832__$1 = state_13832;var statearr_13845_13863 = state_13832__$1;(statearr_13845_13863[2] = inst_13822);
(statearr_13845_13863[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13849 = [null,null,null,null,null,null,null,null,null];(statearr_13849[0] = state_machine__5507__auto__);
(statearr_13849[1] = 1);
return statearr_13849;
});
var state_machine__5507__auto____1 = (function (state_13832){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13832);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13850){if((e13850 instanceof Object))
{var ex__5510__auto__ = e13850;var statearr_13851_13864 = state_13832;(statearr_13851_13864[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13832);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13850;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13865 = state_13832;
state_13832 = G__13865;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13832){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13852 = f__5522__auto__.call(null);(statearr_13852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13853);
return statearr_13852;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14017){var state_val_14018 = (state_14017[1]);if((state_val_14018 === 1))
{var state_14017__$1 = state_14017;var statearr_14019_14056 = state_14017__$1;(statearr_14019_14056[2] = null);
(statearr_14019_14056[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 2))
{var state_14017__$1 = state_14017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14017__$1,4,in$);
} else
{if((state_val_14018 === 3))
{var inst_14015 = (state_14017[2]);var state_14017__$1 = state_14017;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14017__$1,inst_14015);
} else
{if((state_val_14018 === 4))
{var inst_13963 = (state_14017[7]);var inst_13963__$1 = (state_14017[2]);var inst_13964 = (inst_13963__$1 == null);var state_14017__$1 = (function (){var statearr_14020 = state_14017;(statearr_14020[7] = inst_13963__$1);
return statearr_14020;
})();if(cljs.core.truth_(inst_13964))
{var statearr_14021_14057 = state_14017__$1;(statearr_14021_14057[1] = 5);
} else
{var statearr_14022_14058 = state_14017__$1;(statearr_14022_14058[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 5))
{var inst_13966 = cljs.core.async.close_BANG_.call(null,out);var state_14017__$1 = state_14017;var statearr_14023_14059 = state_14017__$1;(statearr_14023_14059[2] = inst_13966);
(statearr_14023_14059[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 6))
{var inst_13963 = (state_14017[7]);var inst_13968 = f.call(null,inst_13963);var inst_13973 = cljs.core.seq.call(null,inst_13968);var inst_13974 = inst_13973;var inst_13975 = null;var inst_13976 = 0;var inst_13977 = 0;var state_14017__$1 = (function (){var statearr_14024 = state_14017;(statearr_14024[8] = inst_13975);
(statearr_14024[9] = inst_13976);
(statearr_14024[10] = inst_13977);
(statearr_14024[11] = inst_13974);
return statearr_14024;
})();var statearr_14025_14060 = state_14017__$1;(statearr_14025_14060[2] = null);
(statearr_14025_14060[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 7))
{var inst_14013 = (state_14017[2]);var state_14017__$1 = state_14017;var statearr_14026_14061 = state_14017__$1;(statearr_14026_14061[2] = inst_14013);
(statearr_14026_14061[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 8))
{var inst_13976 = (state_14017[9]);var inst_13977 = (state_14017[10]);var inst_13979 = (inst_13977 < inst_13976);var inst_13980 = inst_13979;var state_14017__$1 = state_14017;if(cljs.core.truth_(inst_13980))
{var statearr_14027_14062 = state_14017__$1;(statearr_14027_14062[1] = 10);
} else
{var statearr_14028_14063 = state_14017__$1;(statearr_14028_14063[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 9))
{var inst_14010 = (state_14017[2]);var state_14017__$1 = (function (){var statearr_14029 = state_14017;(statearr_14029[12] = inst_14010);
return statearr_14029;
})();var statearr_14030_14064 = state_14017__$1;(statearr_14030_14064[2] = null);
(statearr_14030_14064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 10))
{var inst_13975 = (state_14017[8]);var inst_13977 = (state_14017[10]);var inst_13982 = cljs.core._nth.call(null,inst_13975,inst_13977);var state_14017__$1 = state_14017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14017__$1,13,out,inst_13982);
} else
{if((state_val_14018 === 11))
{var inst_13988 = (state_14017[13]);var inst_13974 = (state_14017[11]);var inst_13988__$1 = cljs.core.seq.call(null,inst_13974);var state_14017__$1 = (function (){var statearr_14034 = state_14017;(statearr_14034[13] = inst_13988__$1);
return statearr_14034;
})();if(inst_13988__$1)
{var statearr_14035_14065 = state_14017__$1;(statearr_14035_14065[1] = 14);
} else
{var statearr_14036_14066 = state_14017__$1;(statearr_14036_14066[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 12))
{var inst_14008 = (state_14017[2]);var state_14017__$1 = state_14017;var statearr_14037_14067 = state_14017__$1;(statearr_14037_14067[2] = inst_14008);
(statearr_14037_14067[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 13))
{var inst_13975 = (state_14017[8]);var inst_13976 = (state_14017[9]);var inst_13977 = (state_14017[10]);var inst_13974 = (state_14017[11]);var inst_13984 = (state_14017[2]);var inst_13985 = (inst_13977 + 1);var tmp14031 = inst_13975;var tmp14032 = inst_13976;var tmp14033 = inst_13974;var inst_13974__$1 = tmp14033;var inst_13975__$1 = tmp14031;var inst_13976__$1 = tmp14032;var inst_13977__$1 = inst_13985;var state_14017__$1 = (function (){var statearr_14038 = state_14017;(statearr_14038[8] = inst_13975__$1);
(statearr_14038[14] = inst_13984);
(statearr_14038[9] = inst_13976__$1);
(statearr_14038[10] = inst_13977__$1);
(statearr_14038[11] = inst_13974__$1);
return statearr_14038;
})();var statearr_14039_14068 = state_14017__$1;(statearr_14039_14068[2] = null);
(statearr_14039_14068[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 14))
{var inst_13988 = (state_14017[13]);var inst_13990 = cljs.core.chunked_seq_QMARK_.call(null,inst_13988);var state_14017__$1 = state_14017;if(inst_13990)
{var statearr_14040_14069 = state_14017__$1;(statearr_14040_14069[1] = 17);
} else
{var statearr_14041_14070 = state_14017__$1;(statearr_14041_14070[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 15))
{var state_14017__$1 = state_14017;var statearr_14042_14071 = state_14017__$1;(statearr_14042_14071[2] = null);
(statearr_14042_14071[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 16))
{var inst_14006 = (state_14017[2]);var state_14017__$1 = state_14017;var statearr_14043_14072 = state_14017__$1;(statearr_14043_14072[2] = inst_14006);
(statearr_14043_14072[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 17))
{var inst_13988 = (state_14017[13]);var inst_13992 = cljs.core.chunk_first.call(null,inst_13988);var inst_13993 = cljs.core.chunk_rest.call(null,inst_13988);var inst_13994 = cljs.core.count.call(null,inst_13992);var inst_13974 = inst_13993;var inst_13975 = inst_13992;var inst_13976 = inst_13994;var inst_13977 = 0;var state_14017__$1 = (function (){var statearr_14044 = state_14017;(statearr_14044[8] = inst_13975);
(statearr_14044[9] = inst_13976);
(statearr_14044[10] = inst_13977);
(statearr_14044[11] = inst_13974);
return statearr_14044;
})();var statearr_14045_14073 = state_14017__$1;(statearr_14045_14073[2] = null);
(statearr_14045_14073[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 18))
{var inst_13988 = (state_14017[13]);var inst_13997 = cljs.core.first.call(null,inst_13988);var state_14017__$1 = state_14017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14017__$1,20,out,inst_13997);
} else
{if((state_val_14018 === 19))
{var inst_14003 = (state_14017[2]);var state_14017__$1 = state_14017;var statearr_14046_14074 = state_14017__$1;(statearr_14046_14074[2] = inst_14003);
(statearr_14046_14074[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 20))
{var inst_13988 = (state_14017[13]);var inst_13999 = (state_14017[2]);var inst_14000 = cljs.core.next.call(null,inst_13988);var inst_13974 = inst_14000;var inst_13975 = null;var inst_13976 = 0;var inst_13977 = 0;var state_14017__$1 = (function (){var statearr_14047 = state_14017;(statearr_14047[15] = inst_13999);
(statearr_14047[8] = inst_13975);
(statearr_14047[9] = inst_13976);
(statearr_14047[10] = inst_13977);
(statearr_14047[11] = inst_13974);
return statearr_14047;
})();var statearr_14048_14075 = state_14017__$1;(statearr_14048_14075[2] = null);
(statearr_14048_14075[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_14052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14052[0] = state_machine__5507__auto__);
(statearr_14052[1] = 1);
return statearr_14052;
});
var state_machine__5507__auto____1 = (function (state_14017){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14017);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14053){if((e14053 instanceof Object))
{var ex__5510__auto__ = e14053;var statearr_14054_14076 = state_14017;(statearr_14054_14076[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14017);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14053;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14077 = state_14017;
state_14017 = G__14077;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14017){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14055 = f__5522__auto__.call(null);(statearr_14055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14055;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___14158 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14137){var state_val_14138 = (state_14137[1]);if((state_val_14138 === 1))
{var state_14137__$1 = state_14137;var statearr_14139_14159 = state_14137__$1;(statearr_14139_14159[2] = null);
(statearr_14139_14159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14138 === 2))
{var state_14137__$1 = state_14137;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14137__$1,4,from);
} else
{if((state_val_14138 === 3))
{var inst_14135 = (state_14137[2]);var state_14137__$1 = state_14137;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14137__$1,inst_14135);
} else
{if((state_val_14138 === 4))
{var inst_14120 = (state_14137[7]);var inst_14120__$1 = (state_14137[2]);var inst_14121 = (inst_14120__$1 == null);var state_14137__$1 = (function (){var statearr_14140 = state_14137;(statearr_14140[7] = inst_14120__$1);
return statearr_14140;
})();if(cljs.core.truth_(inst_14121))
{var statearr_14141_14160 = state_14137__$1;(statearr_14141_14160[1] = 5);
} else
{var statearr_14142_14161 = state_14137__$1;(statearr_14142_14161[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14138 === 5))
{var state_14137__$1 = state_14137;if(cljs.core.truth_(close_QMARK_))
{var statearr_14143_14162 = state_14137__$1;(statearr_14143_14162[1] = 8);
} else
{var statearr_14144_14163 = state_14137__$1;(statearr_14144_14163[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14138 === 6))
{var inst_14120 = (state_14137[7]);var state_14137__$1 = state_14137;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14137__$1,11,to,inst_14120);
} else
{if((state_val_14138 === 7))
{var inst_14133 = (state_14137[2]);var state_14137__$1 = state_14137;var statearr_14145_14164 = state_14137__$1;(statearr_14145_14164[2] = inst_14133);
(statearr_14145_14164[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14138 === 8))
{var inst_14124 = cljs.core.async.close_BANG_.call(null,to);var state_14137__$1 = state_14137;var statearr_14146_14165 = state_14137__$1;(statearr_14146_14165[2] = inst_14124);
(statearr_14146_14165[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14138 === 9))
{var state_14137__$1 = state_14137;var statearr_14147_14166 = state_14137__$1;(statearr_14147_14166[2] = null);
(statearr_14147_14166[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14138 === 10))
{var inst_14127 = (state_14137[2]);var state_14137__$1 = state_14137;var statearr_14148_14167 = state_14137__$1;(statearr_14148_14167[2] = inst_14127);
(statearr_14148_14167[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14138 === 11))
{var inst_14130 = (state_14137[2]);var state_14137__$1 = (function (){var statearr_14149 = state_14137;(statearr_14149[8] = inst_14130);
return statearr_14149;
})();var statearr_14150_14168 = state_14137__$1;(statearr_14150_14168[2] = null);
(statearr_14150_14168[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14154 = [null,null,null,null,null,null,null,null,null];(statearr_14154[0] = state_machine__5507__auto__);
(statearr_14154[1] = 1);
return statearr_14154;
});
var state_machine__5507__auto____1 = (function (state_14137){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14137);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14155){if((e14155 instanceof Object))
{var ex__5510__auto__ = e14155;var statearr_14156_14169 = state_14137;(statearr_14156_14169[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14137);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14155;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14170 = state_14137;
state_14137 = G__14170;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14137){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14157 = f__5522__auto__.call(null);(statearr_14157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14158);
return statearr_14157;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___14257 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14235){var state_val_14236 = (state_14235[1]);if((state_val_14236 === 1))
{var state_14235__$1 = state_14235;var statearr_14237_14258 = state_14235__$1;(statearr_14237_14258[2] = null);
(statearr_14237_14258[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14236 === 2))
{var state_14235__$1 = state_14235;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14235__$1,4,ch);
} else
{if((state_val_14236 === 3))
{var inst_14233 = (state_14235[2]);var state_14235__$1 = state_14235;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14235__$1,inst_14233);
} else
{if((state_val_14236 === 4))
{var inst_14216 = (state_14235[7]);var inst_14216__$1 = (state_14235[2]);var inst_14217 = (inst_14216__$1 == null);var state_14235__$1 = (function (){var statearr_14238 = state_14235;(statearr_14238[7] = inst_14216__$1);
return statearr_14238;
})();if(cljs.core.truth_(inst_14217))
{var statearr_14239_14259 = state_14235__$1;(statearr_14239_14259[1] = 5);
} else
{var statearr_14240_14260 = state_14235__$1;(statearr_14240_14260[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14236 === 5))
{var inst_14219 = cljs.core.async.close_BANG_.call(null,tc);var inst_14220 = cljs.core.async.close_BANG_.call(null,fc);var state_14235__$1 = (function (){var statearr_14241 = state_14235;(statearr_14241[8] = inst_14219);
return statearr_14241;
})();var statearr_14242_14261 = state_14235__$1;(statearr_14242_14261[2] = inst_14220);
(statearr_14242_14261[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14236 === 6))
{var inst_14216 = (state_14235[7]);var inst_14222 = p.call(null,inst_14216);var state_14235__$1 = state_14235;if(cljs.core.truth_(inst_14222))
{var statearr_14243_14262 = state_14235__$1;(statearr_14243_14262[1] = 9);
} else
{var statearr_14244_14263 = state_14235__$1;(statearr_14244_14263[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14236 === 7))
{var inst_14231 = (state_14235[2]);var state_14235__$1 = state_14235;var statearr_14245_14264 = state_14235__$1;(statearr_14245_14264[2] = inst_14231);
(statearr_14245_14264[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14236 === 8))
{var inst_14228 = (state_14235[2]);var state_14235__$1 = (function (){var statearr_14246 = state_14235;(statearr_14246[9] = inst_14228);
return statearr_14246;
})();var statearr_14247_14265 = state_14235__$1;(statearr_14247_14265[2] = null);
(statearr_14247_14265[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14236 === 9))
{var state_14235__$1 = state_14235;var statearr_14248_14266 = state_14235__$1;(statearr_14248_14266[2] = tc);
(statearr_14248_14266[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14236 === 10))
{var state_14235__$1 = state_14235;var statearr_14249_14267 = state_14235__$1;(statearr_14249_14267[2] = fc);
(statearr_14249_14267[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14236 === 11))
{var inst_14216 = (state_14235[7]);var inst_14226 = (state_14235[2]);var state_14235__$1 = state_14235;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14235__$1,8,inst_14226,inst_14216);
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
var state_machine__5507__auto____0 = (function (){var statearr_14253 = [null,null,null,null,null,null,null,null,null,null];(statearr_14253[0] = state_machine__5507__auto__);
(statearr_14253[1] = 1);
return statearr_14253;
});
var state_machine__5507__auto____1 = (function (state_14235){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14235);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14254){if((e14254 instanceof Object))
{var ex__5510__auto__ = e14254;var statearr_14255_14268 = state_14235;(statearr_14255_14268[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14235);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14269 = state_14235;
state_14235 = G__14269;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14235){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14256 = f__5522__auto__.call(null);(statearr_14256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14257);
return statearr_14256;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14316){var state_val_14317 = (state_14316[1]);if((state_val_14317 === 7))
{var inst_14312 = (state_14316[2]);var state_14316__$1 = state_14316;var statearr_14318_14334 = state_14316__$1;(statearr_14318_14334[2] = inst_14312);
(statearr_14318_14334[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14317 === 6))
{var inst_14305 = (state_14316[7]);var inst_14302 = (state_14316[8]);var inst_14309 = f.call(null,inst_14302,inst_14305);var inst_14302__$1 = inst_14309;var state_14316__$1 = (function (){var statearr_14319 = state_14316;(statearr_14319[8] = inst_14302__$1);
return statearr_14319;
})();var statearr_14320_14335 = state_14316__$1;(statearr_14320_14335[2] = null);
(statearr_14320_14335[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14317 === 5))
{var inst_14302 = (state_14316[8]);var state_14316__$1 = state_14316;var statearr_14321_14336 = state_14316__$1;(statearr_14321_14336[2] = inst_14302);
(statearr_14321_14336[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14317 === 4))
{var inst_14305 = (state_14316[7]);var inst_14305__$1 = (state_14316[2]);var inst_14306 = (inst_14305__$1 == null);var state_14316__$1 = (function (){var statearr_14322 = state_14316;(statearr_14322[7] = inst_14305__$1);
return statearr_14322;
})();if(cljs.core.truth_(inst_14306))
{var statearr_14323_14337 = state_14316__$1;(statearr_14323_14337[1] = 5);
} else
{var statearr_14324_14338 = state_14316__$1;(statearr_14324_14338[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14317 === 3))
{var inst_14314 = (state_14316[2]);var state_14316__$1 = state_14316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14316__$1,inst_14314);
} else
{if((state_val_14317 === 2))
{var state_14316__$1 = state_14316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14316__$1,4,ch);
} else
{if((state_val_14317 === 1))
{var inst_14302 = init;var state_14316__$1 = (function (){var statearr_14325 = state_14316;(statearr_14325[8] = inst_14302);
return statearr_14325;
})();var statearr_14326_14339 = state_14316__$1;(statearr_14326_14339[2] = null);
(statearr_14326_14339[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14330 = [null,null,null,null,null,null,null,null,null];(statearr_14330[0] = state_machine__5507__auto__);
(statearr_14330[1] = 1);
return statearr_14330;
});
var state_machine__5507__auto____1 = (function (state_14316){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14316);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14331){if((e14331 instanceof Object))
{var ex__5510__auto__ = e14331;var statearr_14332_14340 = state_14316;(statearr_14332_14340[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14316);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14331;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14341 = state_14316;
state_14316 = G__14341;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14316){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14333 = f__5522__auto__.call(null);(statearr_14333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14333;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14403){var state_val_14404 = (state_14403[1]);if((state_val_14404 === 1))
{var inst_14383 = cljs.core.seq.call(null,coll);var inst_14384 = inst_14383;var state_14403__$1 = (function (){var statearr_14405 = state_14403;(statearr_14405[7] = inst_14384);
return statearr_14405;
})();var statearr_14406_14424 = state_14403__$1;(statearr_14406_14424[2] = null);
(statearr_14406_14424[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14404 === 2))
{var inst_14384 = (state_14403[7]);var state_14403__$1 = state_14403;if(cljs.core.truth_(inst_14384))
{var statearr_14407_14425 = state_14403__$1;(statearr_14407_14425[1] = 4);
} else
{var statearr_14408_14426 = state_14403__$1;(statearr_14408_14426[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14404 === 3))
{var inst_14401 = (state_14403[2]);var state_14403__$1 = state_14403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14403__$1,inst_14401);
} else
{if((state_val_14404 === 4))
{var inst_14384 = (state_14403[7]);var inst_14387 = cljs.core.first.call(null,inst_14384);var state_14403__$1 = state_14403;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14403__$1,7,ch,inst_14387);
} else
{if((state_val_14404 === 5))
{var state_14403__$1 = state_14403;if(cljs.core.truth_(close_QMARK_))
{var statearr_14409_14427 = state_14403__$1;(statearr_14409_14427[1] = 8);
} else
{var statearr_14410_14428 = state_14403__$1;(statearr_14410_14428[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14404 === 6))
{var inst_14399 = (state_14403[2]);var state_14403__$1 = state_14403;var statearr_14411_14429 = state_14403__$1;(statearr_14411_14429[2] = inst_14399);
(statearr_14411_14429[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14404 === 7))
{var inst_14384 = (state_14403[7]);var inst_14389 = (state_14403[2]);var inst_14390 = cljs.core.next.call(null,inst_14384);var inst_14384__$1 = inst_14390;var state_14403__$1 = (function (){var statearr_14412 = state_14403;(statearr_14412[7] = inst_14384__$1);
(statearr_14412[8] = inst_14389);
return statearr_14412;
})();var statearr_14413_14430 = state_14403__$1;(statearr_14413_14430[2] = null);
(statearr_14413_14430[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14404 === 8))
{var inst_14394 = cljs.core.async.close_BANG_.call(null,ch);var state_14403__$1 = state_14403;var statearr_14414_14431 = state_14403__$1;(statearr_14414_14431[2] = inst_14394);
(statearr_14414_14431[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14404 === 9))
{var state_14403__$1 = state_14403;var statearr_14415_14432 = state_14403__$1;(statearr_14415_14432[2] = null);
(statearr_14415_14432[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14404 === 10))
{var inst_14397 = (state_14403[2]);var state_14403__$1 = state_14403;var statearr_14416_14433 = state_14403__$1;(statearr_14416_14433[2] = inst_14397);
(statearr_14416_14433[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_14420 = [null,null,null,null,null,null,null,null,null];(statearr_14420[0] = state_machine__5507__auto__);
(statearr_14420[1] = 1);
return statearr_14420;
});
var state_machine__5507__auto____1 = (function (state_14403){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14403);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14421){if((e14421 instanceof Object))
{var ex__5510__auto__ = e14421;var statearr_14422_14434 = state_14403;(statearr_14422_14434[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14403);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14421;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14435 = state_14403;
state_14403 = G__14435;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14403){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14423 = f__5522__auto__.call(null);(statearr_14423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14423;
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
cljs.core.async.Mux = (function (){var obj14437 = {};return obj14437;
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
cljs.core.async.Mult = (function (){var obj14439 = {};return obj14439;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14663 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14663 = (function (cs,ch,mult,meta14664){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14664 = meta14664;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14663.cljs$lang$type = true;
cljs.core.async.t14663.cljs$lang$ctorStr = "cljs.core.async/t14663";
cljs.core.async.t14663.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14663");
});})(cs))
;
cljs.core.async.t14663.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14663.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14663.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14663.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14663.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14663.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14665){var self__ = this;
var _14665__$1 = this;return self__.meta14664;
});})(cs))
;
cljs.core.async.t14663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14665,meta14664__$1){var self__ = this;
var _14665__$1 = this;return (new cljs.core.async.t14663(self__.cs,self__.ch,self__.mult,meta14664__$1));
});})(cs))
;
cljs.core.async.__GT_t14663 = ((function (cs){
return (function __GT_t14663(cs__$1,ch__$1,mult__$1,meta14664){return (new cljs.core.async.t14663(cs__$1,ch__$1,mult__$1,meta14664));
});})(cs))
;
}
return (new cljs.core.async.t14663(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14886 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14800){var state_val_14801 = (state_14800[1]);if((state_val_14801 === 32))
{var inst_14668 = (state_14800[7]);var inst_14744 = (state_14800[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14800,31,Object,null,30);var inst_14751 = cljs.core.async.put_BANG_.call(null,inst_14744,inst_14668,done);var state_14800__$1 = state_14800;var statearr_14802_14887 = state_14800__$1;(statearr_14802_14887[2] = inst_14751);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14800__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 1))
{var state_14800__$1 = state_14800;var statearr_14803_14888 = state_14800__$1;(statearr_14803_14888[2] = null);
(statearr_14803_14888[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 33))
{var inst_14757 = (state_14800[9]);var inst_14759 = cljs.core.chunked_seq_QMARK_.call(null,inst_14757);var state_14800__$1 = state_14800;if(inst_14759)
{var statearr_14804_14889 = state_14800__$1;(statearr_14804_14889[1] = 36);
} else
{var statearr_14805_14890 = state_14800__$1;(statearr_14805_14890[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 2))
{var state_14800__$1 = state_14800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14800__$1,4,ch);
} else
{if((state_val_14801 === 34))
{var state_14800__$1 = state_14800;var statearr_14806_14891 = state_14800__$1;(statearr_14806_14891[2] = null);
(statearr_14806_14891[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 3))
{var inst_14798 = (state_14800[2]);var state_14800__$1 = state_14800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14800__$1,inst_14798);
} else
{if((state_val_14801 === 35))
{var inst_14782 = (state_14800[2]);var state_14800__$1 = state_14800;var statearr_14807_14892 = state_14800__$1;(statearr_14807_14892[2] = inst_14782);
(statearr_14807_14892[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 4))
{var inst_14668 = (state_14800[7]);var inst_14668__$1 = (state_14800[2]);var inst_14669 = (inst_14668__$1 == null);var state_14800__$1 = (function (){var statearr_14808 = state_14800;(statearr_14808[7] = inst_14668__$1);
return statearr_14808;
})();if(cljs.core.truth_(inst_14669))
{var statearr_14809_14893 = state_14800__$1;(statearr_14809_14893[1] = 5);
} else
{var statearr_14810_14894 = state_14800__$1;(statearr_14810_14894[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 36))
{var inst_14757 = (state_14800[9]);var inst_14761 = cljs.core.chunk_first.call(null,inst_14757);var inst_14762 = cljs.core.chunk_rest.call(null,inst_14757);var inst_14763 = cljs.core.count.call(null,inst_14761);var inst_14736 = inst_14762;var inst_14737 = inst_14761;var inst_14738 = inst_14763;var inst_14739 = 0;var state_14800__$1 = (function (){var statearr_14811 = state_14800;(statearr_14811[10] = inst_14739);
(statearr_14811[11] = inst_14738);
(statearr_14811[12] = inst_14736);
(statearr_14811[13] = inst_14737);
return statearr_14811;
})();var statearr_14812_14895 = state_14800__$1;(statearr_14812_14895[2] = null);
(statearr_14812_14895[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 5))
{var inst_14675 = cljs.core.deref.call(null,cs);var inst_14676 = cljs.core.seq.call(null,inst_14675);var inst_14677 = inst_14676;var inst_14678 = null;var inst_14679 = 0;var inst_14680 = 0;var state_14800__$1 = (function (){var statearr_14813 = state_14800;(statearr_14813[14] = inst_14680);
(statearr_14813[15] = inst_14679);
(statearr_14813[16] = inst_14678);
(statearr_14813[17] = inst_14677);
return statearr_14813;
})();var statearr_14814_14896 = state_14800__$1;(statearr_14814_14896[2] = null);
(statearr_14814_14896[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 37))
{var inst_14757 = (state_14800[9]);var inst_14766 = cljs.core.first.call(null,inst_14757);var state_14800__$1 = (function (){var statearr_14815 = state_14800;(statearr_14815[18] = inst_14766);
return statearr_14815;
})();var statearr_14816_14897 = state_14800__$1;(statearr_14816_14897[2] = null);
(statearr_14816_14897[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 6))
{var inst_14728 = (state_14800[19]);var inst_14727 = cljs.core.deref.call(null,cs);var inst_14728__$1 = cljs.core.keys.call(null,inst_14727);var inst_14729 = cljs.core.count.call(null,inst_14728__$1);var inst_14730 = cljs.core.reset_BANG_.call(null,dctr,inst_14729);var inst_14735 = cljs.core.seq.call(null,inst_14728__$1);var inst_14736 = inst_14735;var inst_14737 = null;var inst_14738 = 0;var inst_14739 = 0;var state_14800__$1 = (function (){var statearr_14817 = state_14800;(statearr_14817[10] = inst_14739);
(statearr_14817[11] = inst_14738);
(statearr_14817[20] = inst_14730);
(statearr_14817[19] = inst_14728__$1);
(statearr_14817[12] = inst_14736);
(statearr_14817[13] = inst_14737);
return statearr_14817;
})();var statearr_14818_14898 = state_14800__$1;(statearr_14818_14898[2] = null);
(statearr_14818_14898[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 38))
{var inst_14779 = (state_14800[2]);var state_14800__$1 = state_14800;var statearr_14819_14899 = state_14800__$1;(statearr_14819_14899[2] = inst_14779);
(statearr_14819_14899[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 7))
{var inst_14796 = (state_14800[2]);var state_14800__$1 = state_14800;var statearr_14820_14900 = state_14800__$1;(statearr_14820_14900[2] = inst_14796);
(statearr_14820_14900[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 39))
{var inst_14757 = (state_14800[9]);var inst_14775 = (state_14800[2]);var inst_14776 = cljs.core.next.call(null,inst_14757);var inst_14736 = inst_14776;var inst_14737 = null;var inst_14738 = 0;var inst_14739 = 0;var state_14800__$1 = (function (){var statearr_14821 = state_14800;(statearr_14821[10] = inst_14739);
(statearr_14821[11] = inst_14738);
(statearr_14821[21] = inst_14775);
(statearr_14821[12] = inst_14736);
(statearr_14821[13] = inst_14737);
return statearr_14821;
})();var statearr_14822_14901 = state_14800__$1;(statearr_14822_14901[2] = null);
(statearr_14822_14901[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 8))
{var inst_14680 = (state_14800[14]);var inst_14679 = (state_14800[15]);var inst_14682 = (inst_14680 < inst_14679);var inst_14683 = inst_14682;var state_14800__$1 = state_14800;if(cljs.core.truth_(inst_14683))
{var statearr_14823_14902 = state_14800__$1;(statearr_14823_14902[1] = 10);
} else
{var statearr_14824_14903 = state_14800__$1;(statearr_14824_14903[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 40))
{var inst_14766 = (state_14800[18]);var inst_14767 = (state_14800[2]);var inst_14768 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14769 = cljs.core.async.untap_STAR_.call(null,m,inst_14766);var state_14800__$1 = (function (){var statearr_14825 = state_14800;(statearr_14825[22] = inst_14767);
(statearr_14825[23] = inst_14768);
return statearr_14825;
})();var statearr_14826_14904 = state_14800__$1;(statearr_14826_14904[2] = inst_14769);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14800__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 9))
{var inst_14725 = (state_14800[2]);var state_14800__$1 = state_14800;var statearr_14827_14905 = state_14800__$1;(statearr_14827_14905[2] = inst_14725);
(statearr_14827_14905[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 41))
{var inst_14766 = (state_14800[18]);var inst_14668 = (state_14800[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14800,40,Object,null,39);var inst_14773 = cljs.core.async.put_BANG_.call(null,inst_14766,inst_14668,done);var state_14800__$1 = state_14800;var statearr_14828_14906 = state_14800__$1;(statearr_14828_14906[2] = inst_14773);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14800__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 10))
{var inst_14680 = (state_14800[14]);var inst_14678 = (state_14800[16]);var inst_14686 = cljs.core._nth.call(null,inst_14678,inst_14680);var inst_14687 = cljs.core.nth.call(null,inst_14686,0,null);var inst_14688 = cljs.core.nth.call(null,inst_14686,1,null);var state_14800__$1 = (function (){var statearr_14829 = state_14800;(statearr_14829[24] = inst_14687);
return statearr_14829;
})();if(cljs.core.truth_(inst_14688))
{var statearr_14830_14907 = state_14800__$1;(statearr_14830_14907[1] = 13);
} else
{var statearr_14831_14908 = state_14800__$1;(statearr_14831_14908[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 42))
{var state_14800__$1 = state_14800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14800__$1,45,dchan);
} else
{if((state_val_14801 === 11))
{var inst_14697 = (state_14800[25]);var inst_14677 = (state_14800[17]);var inst_14697__$1 = cljs.core.seq.call(null,inst_14677);var state_14800__$1 = (function (){var statearr_14832 = state_14800;(statearr_14832[25] = inst_14697__$1);
return statearr_14832;
})();if(inst_14697__$1)
{var statearr_14833_14909 = state_14800__$1;(statearr_14833_14909[1] = 16);
} else
{var statearr_14834_14910 = state_14800__$1;(statearr_14834_14910[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 43))
{var state_14800__$1 = state_14800;var statearr_14835_14911 = state_14800__$1;(statearr_14835_14911[2] = null);
(statearr_14835_14911[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 12))
{var inst_14723 = (state_14800[2]);var state_14800__$1 = state_14800;var statearr_14836_14912 = state_14800__$1;(statearr_14836_14912[2] = inst_14723);
(statearr_14836_14912[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 44))
{var inst_14793 = (state_14800[2]);var state_14800__$1 = (function (){var statearr_14837 = state_14800;(statearr_14837[26] = inst_14793);
return statearr_14837;
})();var statearr_14838_14913 = state_14800__$1;(statearr_14838_14913[2] = null);
(statearr_14838_14913[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 13))
{var inst_14687 = (state_14800[24]);var inst_14690 = cljs.core.async.close_BANG_.call(null,inst_14687);var state_14800__$1 = state_14800;var statearr_14839_14914 = state_14800__$1;(statearr_14839_14914[2] = inst_14690);
(statearr_14839_14914[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 45))
{var inst_14790 = (state_14800[2]);var state_14800__$1 = state_14800;var statearr_14843_14915 = state_14800__$1;(statearr_14843_14915[2] = inst_14790);
(statearr_14843_14915[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 14))
{var state_14800__$1 = state_14800;var statearr_14844_14916 = state_14800__$1;(statearr_14844_14916[2] = null);
(statearr_14844_14916[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 15))
{var inst_14680 = (state_14800[14]);var inst_14679 = (state_14800[15]);var inst_14678 = (state_14800[16]);var inst_14677 = (state_14800[17]);var inst_14693 = (state_14800[2]);var inst_14694 = (inst_14680 + 1);var tmp14840 = inst_14679;var tmp14841 = inst_14678;var tmp14842 = inst_14677;var inst_14677__$1 = tmp14842;var inst_14678__$1 = tmp14841;var inst_14679__$1 = tmp14840;var inst_14680__$1 = inst_14694;var state_14800__$1 = (function (){var statearr_14845 = state_14800;(statearr_14845[14] = inst_14680__$1);
(statearr_14845[27] = inst_14693);
(statearr_14845[15] = inst_14679__$1);
(statearr_14845[16] = inst_14678__$1);
(statearr_14845[17] = inst_14677__$1);
return statearr_14845;
})();var statearr_14846_14917 = state_14800__$1;(statearr_14846_14917[2] = null);
(statearr_14846_14917[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 16))
{var inst_14697 = (state_14800[25]);var inst_14699 = cljs.core.chunked_seq_QMARK_.call(null,inst_14697);var state_14800__$1 = state_14800;if(inst_14699)
{var statearr_14847_14918 = state_14800__$1;(statearr_14847_14918[1] = 19);
} else
{var statearr_14848_14919 = state_14800__$1;(statearr_14848_14919[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 17))
{var state_14800__$1 = state_14800;var statearr_14849_14920 = state_14800__$1;(statearr_14849_14920[2] = null);
(statearr_14849_14920[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 18))
{var inst_14721 = (state_14800[2]);var state_14800__$1 = state_14800;var statearr_14850_14921 = state_14800__$1;(statearr_14850_14921[2] = inst_14721);
(statearr_14850_14921[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 19))
{var inst_14697 = (state_14800[25]);var inst_14701 = cljs.core.chunk_first.call(null,inst_14697);var inst_14702 = cljs.core.chunk_rest.call(null,inst_14697);var inst_14703 = cljs.core.count.call(null,inst_14701);var inst_14677 = inst_14702;var inst_14678 = inst_14701;var inst_14679 = inst_14703;var inst_14680 = 0;var state_14800__$1 = (function (){var statearr_14851 = state_14800;(statearr_14851[14] = inst_14680);
(statearr_14851[15] = inst_14679);
(statearr_14851[16] = inst_14678);
(statearr_14851[17] = inst_14677);
return statearr_14851;
})();var statearr_14852_14922 = state_14800__$1;(statearr_14852_14922[2] = null);
(statearr_14852_14922[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 20))
{var inst_14697 = (state_14800[25]);var inst_14707 = cljs.core.first.call(null,inst_14697);var inst_14708 = cljs.core.nth.call(null,inst_14707,0,null);var inst_14709 = cljs.core.nth.call(null,inst_14707,1,null);var state_14800__$1 = (function (){var statearr_14853 = state_14800;(statearr_14853[28] = inst_14708);
return statearr_14853;
})();if(cljs.core.truth_(inst_14709))
{var statearr_14854_14923 = state_14800__$1;(statearr_14854_14923[1] = 22);
} else
{var statearr_14855_14924 = state_14800__$1;(statearr_14855_14924[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 21))
{var inst_14718 = (state_14800[2]);var state_14800__$1 = state_14800;var statearr_14856_14925 = state_14800__$1;(statearr_14856_14925[2] = inst_14718);
(statearr_14856_14925[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 22))
{var inst_14708 = (state_14800[28]);var inst_14711 = cljs.core.async.close_BANG_.call(null,inst_14708);var state_14800__$1 = state_14800;var statearr_14857_14926 = state_14800__$1;(statearr_14857_14926[2] = inst_14711);
(statearr_14857_14926[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 23))
{var state_14800__$1 = state_14800;var statearr_14858_14927 = state_14800__$1;(statearr_14858_14927[2] = null);
(statearr_14858_14927[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 24))
{var inst_14697 = (state_14800[25]);var inst_14714 = (state_14800[2]);var inst_14715 = cljs.core.next.call(null,inst_14697);var inst_14677 = inst_14715;var inst_14678 = null;var inst_14679 = 0;var inst_14680 = 0;var state_14800__$1 = (function (){var statearr_14859 = state_14800;(statearr_14859[14] = inst_14680);
(statearr_14859[15] = inst_14679);
(statearr_14859[29] = inst_14714);
(statearr_14859[16] = inst_14678);
(statearr_14859[17] = inst_14677);
return statearr_14859;
})();var statearr_14860_14928 = state_14800__$1;(statearr_14860_14928[2] = null);
(statearr_14860_14928[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 25))
{var inst_14739 = (state_14800[10]);var inst_14738 = (state_14800[11]);var inst_14741 = (inst_14739 < inst_14738);var inst_14742 = inst_14741;var state_14800__$1 = state_14800;if(cljs.core.truth_(inst_14742))
{var statearr_14861_14929 = state_14800__$1;(statearr_14861_14929[1] = 27);
} else
{var statearr_14862_14930 = state_14800__$1;(statearr_14862_14930[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 26))
{var inst_14728 = (state_14800[19]);var inst_14786 = (state_14800[2]);var inst_14787 = cljs.core.seq.call(null,inst_14728);var state_14800__$1 = (function (){var statearr_14863 = state_14800;(statearr_14863[30] = inst_14786);
return statearr_14863;
})();if(inst_14787)
{var statearr_14864_14931 = state_14800__$1;(statearr_14864_14931[1] = 42);
} else
{var statearr_14865_14932 = state_14800__$1;(statearr_14865_14932[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 27))
{var inst_14739 = (state_14800[10]);var inst_14737 = (state_14800[13]);var inst_14744 = cljs.core._nth.call(null,inst_14737,inst_14739);var state_14800__$1 = (function (){var statearr_14866 = state_14800;(statearr_14866[8] = inst_14744);
return statearr_14866;
})();var statearr_14867_14933 = state_14800__$1;(statearr_14867_14933[2] = null);
(statearr_14867_14933[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 28))
{var inst_14757 = (state_14800[9]);var inst_14736 = (state_14800[12]);var inst_14757__$1 = cljs.core.seq.call(null,inst_14736);var state_14800__$1 = (function (){var statearr_14871 = state_14800;(statearr_14871[9] = inst_14757__$1);
return statearr_14871;
})();if(inst_14757__$1)
{var statearr_14872_14934 = state_14800__$1;(statearr_14872_14934[1] = 33);
} else
{var statearr_14873_14935 = state_14800__$1;(statearr_14873_14935[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 29))
{var inst_14784 = (state_14800[2]);var state_14800__$1 = state_14800;var statearr_14874_14936 = state_14800__$1;(statearr_14874_14936[2] = inst_14784);
(statearr_14874_14936[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 30))
{var inst_14739 = (state_14800[10]);var inst_14738 = (state_14800[11]);var inst_14736 = (state_14800[12]);var inst_14737 = (state_14800[13]);var inst_14753 = (state_14800[2]);var inst_14754 = (inst_14739 + 1);var tmp14868 = inst_14738;var tmp14869 = inst_14736;var tmp14870 = inst_14737;var inst_14736__$1 = tmp14869;var inst_14737__$1 = tmp14870;var inst_14738__$1 = tmp14868;var inst_14739__$1 = inst_14754;var state_14800__$1 = (function (){var statearr_14875 = state_14800;(statearr_14875[10] = inst_14739__$1);
(statearr_14875[11] = inst_14738__$1);
(statearr_14875[31] = inst_14753);
(statearr_14875[12] = inst_14736__$1);
(statearr_14875[13] = inst_14737__$1);
return statearr_14875;
})();var statearr_14876_14937 = state_14800__$1;(statearr_14876_14937[2] = null);
(statearr_14876_14937[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14801 === 31))
{var inst_14744 = (state_14800[8]);var inst_14745 = (state_14800[2]);var inst_14746 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14747 = cljs.core.async.untap_STAR_.call(null,m,inst_14744);var state_14800__$1 = (function (){var statearr_14877 = state_14800;(statearr_14877[32] = inst_14745);
(statearr_14877[33] = inst_14746);
return statearr_14877;
})();var statearr_14878_14938 = state_14800__$1;(statearr_14878_14938[2] = inst_14747);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14800__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14882[0] = state_machine__5507__auto__);
(statearr_14882[1] = 1);
return statearr_14882;
});
var state_machine__5507__auto____1 = (function (state_14800){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14800);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14883){if((e14883 instanceof Object))
{var ex__5510__auto__ = e14883;var statearr_14884_14939 = state_14800;(statearr_14884_14939[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14800);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14940 = state_14800;
state_14800 = G__14940;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14800){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14885 = f__5522__auto__.call(null);(statearr_14885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14886);
return statearr_14885;
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
cljs.core.async.Mix = (function (){var obj14942 = {};return obj14942;
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
;var m = (function (){if(typeof cljs.core.async.t15052 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15052 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15053){
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
this.meta15053 = meta15053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15052.cljs$lang$type = true;
cljs.core.async.t15052.cljs$lang$ctorStr = "cljs.core.async/t15052";
cljs.core.async.t15052.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15052");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15052.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15052.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15052.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15052.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15052.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15052.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15052.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15052.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15052.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15054){var self__ = this;
var _15054__$1 = this;return self__.meta15053;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15054,meta15053__$1){var self__ = this;
var _15054__$1 = this;return (new cljs.core.async.t15052(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15053__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15052 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15052(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15053){return (new cljs.core.async.t15052(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15053));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15052(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___15161 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15119){var state_val_15120 = (state_15119[1]);if((state_val_15120 === 1))
{var inst_15058 = (state_15119[7]);var inst_15058__$1 = calc_state.call(null);var inst_15059 = cljs.core.seq_QMARK_.call(null,inst_15058__$1);var state_15119__$1 = (function (){var statearr_15121 = state_15119;(statearr_15121[7] = inst_15058__$1);
return statearr_15121;
})();if(inst_15059)
{var statearr_15122_15162 = state_15119__$1;(statearr_15122_15162[1] = 2);
} else
{var statearr_15123_15163 = state_15119__$1;(statearr_15123_15163[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 2))
{var inst_15058 = (state_15119[7]);var inst_15061 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15058);var state_15119__$1 = state_15119;var statearr_15124_15164 = state_15119__$1;(statearr_15124_15164[2] = inst_15061);
(statearr_15124_15164[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 3))
{var inst_15058 = (state_15119[7]);var state_15119__$1 = state_15119;var statearr_15125_15165 = state_15119__$1;(statearr_15125_15165[2] = inst_15058);
(statearr_15125_15165[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 4))
{var inst_15058 = (state_15119[7]);var inst_15064 = (state_15119[2]);var inst_15065 = cljs.core.get.call(null,inst_15064,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15066 = cljs.core.get.call(null,inst_15064,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15067 = cljs.core.get.call(null,inst_15064,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15068 = inst_15058;var state_15119__$1 = (function (){var statearr_15126 = state_15119;(statearr_15126[8] = inst_15067);
(statearr_15126[9] = inst_15068);
(statearr_15126[10] = inst_15066);
(statearr_15126[11] = inst_15065);
return statearr_15126;
})();var statearr_15127_15166 = state_15119__$1;(statearr_15127_15166[2] = null);
(statearr_15127_15166[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 5))
{var inst_15068 = (state_15119[9]);var inst_15071 = cljs.core.seq_QMARK_.call(null,inst_15068);var state_15119__$1 = state_15119;if(inst_15071)
{var statearr_15128_15167 = state_15119__$1;(statearr_15128_15167[1] = 7);
} else
{var statearr_15129_15168 = state_15119__$1;(statearr_15129_15168[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 6))
{var inst_15117 = (state_15119[2]);var state_15119__$1 = state_15119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15119__$1,inst_15117);
} else
{if((state_val_15120 === 7))
{var inst_15068 = (state_15119[9]);var inst_15073 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15068);var state_15119__$1 = state_15119;var statearr_15130_15169 = state_15119__$1;(statearr_15130_15169[2] = inst_15073);
(statearr_15130_15169[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 8))
{var inst_15068 = (state_15119[9]);var state_15119__$1 = state_15119;var statearr_15131_15170 = state_15119__$1;(statearr_15131_15170[2] = inst_15068);
(statearr_15131_15170[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 9))
{var inst_15076 = (state_15119[12]);var inst_15076__$1 = (state_15119[2]);var inst_15077 = cljs.core.get.call(null,inst_15076__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15078 = cljs.core.get.call(null,inst_15076__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15079 = cljs.core.get.call(null,inst_15076__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15119__$1 = (function (){var statearr_15132 = state_15119;(statearr_15132[13] = inst_15078);
(statearr_15132[14] = inst_15079);
(statearr_15132[12] = inst_15076__$1);
return statearr_15132;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15119__$1,10,inst_15077);
} else
{if((state_val_15120 === 10))
{var inst_15083 = (state_15119[15]);var inst_15084 = (state_15119[16]);var inst_15082 = (state_15119[2]);var inst_15083__$1 = cljs.core.nth.call(null,inst_15082,0,null);var inst_15084__$1 = cljs.core.nth.call(null,inst_15082,1,null);var inst_15085 = (inst_15083__$1 == null);var inst_15086 = cljs.core._EQ_.call(null,inst_15084__$1,change);var inst_15087 = (inst_15085) || (inst_15086);var state_15119__$1 = (function (){var statearr_15133 = state_15119;(statearr_15133[15] = inst_15083__$1);
(statearr_15133[16] = inst_15084__$1);
return statearr_15133;
})();if(cljs.core.truth_(inst_15087))
{var statearr_15134_15171 = state_15119__$1;(statearr_15134_15171[1] = 11);
} else
{var statearr_15135_15172 = state_15119__$1;(statearr_15135_15172[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 11))
{var inst_15083 = (state_15119[15]);var inst_15089 = (inst_15083 == null);var state_15119__$1 = state_15119;if(cljs.core.truth_(inst_15089))
{var statearr_15136_15173 = state_15119__$1;(statearr_15136_15173[1] = 14);
} else
{var statearr_15137_15174 = state_15119__$1;(statearr_15137_15174[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 12))
{var inst_15084 = (state_15119[16]);var inst_15098 = (state_15119[17]);var inst_15079 = (state_15119[14]);var inst_15098__$1 = inst_15079.call(null,inst_15084);var state_15119__$1 = (function (){var statearr_15138 = state_15119;(statearr_15138[17] = inst_15098__$1);
return statearr_15138;
})();if(cljs.core.truth_(inst_15098__$1))
{var statearr_15139_15175 = state_15119__$1;(statearr_15139_15175[1] = 17);
} else
{var statearr_15140_15176 = state_15119__$1;(statearr_15140_15176[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 13))
{var inst_15115 = (state_15119[2]);var state_15119__$1 = state_15119;var statearr_15141_15177 = state_15119__$1;(statearr_15141_15177[2] = inst_15115);
(statearr_15141_15177[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 14))
{var inst_15084 = (state_15119[16]);var inst_15091 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15084);var state_15119__$1 = state_15119;var statearr_15142_15178 = state_15119__$1;(statearr_15142_15178[2] = inst_15091);
(statearr_15142_15178[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 15))
{var state_15119__$1 = state_15119;var statearr_15143_15179 = state_15119__$1;(statearr_15143_15179[2] = null);
(statearr_15143_15179[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 16))
{var inst_15094 = (state_15119[2]);var inst_15095 = calc_state.call(null);var inst_15068 = inst_15095;var state_15119__$1 = (function (){var statearr_15144 = state_15119;(statearr_15144[9] = inst_15068);
(statearr_15144[18] = inst_15094);
return statearr_15144;
})();var statearr_15145_15180 = state_15119__$1;(statearr_15145_15180[2] = null);
(statearr_15145_15180[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 17))
{var inst_15098 = (state_15119[17]);var state_15119__$1 = state_15119;var statearr_15146_15181 = state_15119__$1;(statearr_15146_15181[2] = inst_15098);
(statearr_15146_15181[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 18))
{var inst_15084 = (state_15119[16]);var inst_15078 = (state_15119[13]);var inst_15079 = (state_15119[14]);var inst_15101 = cljs.core.empty_QMARK_.call(null,inst_15079);var inst_15102 = inst_15078.call(null,inst_15084);var inst_15103 = cljs.core.not.call(null,inst_15102);var inst_15104 = (inst_15101) && (inst_15103);var state_15119__$1 = state_15119;var statearr_15147_15182 = state_15119__$1;(statearr_15147_15182[2] = inst_15104);
(statearr_15147_15182[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 19))
{var inst_15106 = (state_15119[2]);var state_15119__$1 = state_15119;if(cljs.core.truth_(inst_15106))
{var statearr_15148_15183 = state_15119__$1;(statearr_15148_15183[1] = 20);
} else
{var statearr_15149_15184 = state_15119__$1;(statearr_15149_15184[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 20))
{var inst_15083 = (state_15119[15]);var state_15119__$1 = state_15119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15119__$1,23,out,inst_15083);
} else
{if((state_val_15120 === 21))
{var state_15119__$1 = state_15119;var statearr_15150_15185 = state_15119__$1;(statearr_15150_15185[2] = null);
(statearr_15150_15185[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 22))
{var inst_15076 = (state_15119[12]);var inst_15112 = (state_15119[2]);var inst_15068 = inst_15076;var state_15119__$1 = (function (){var statearr_15151 = state_15119;(statearr_15151[9] = inst_15068);
(statearr_15151[19] = inst_15112);
return statearr_15151;
})();var statearr_15152_15186 = state_15119__$1;(statearr_15152_15186[2] = null);
(statearr_15152_15186[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15120 === 23))
{var inst_15109 = (state_15119[2]);var state_15119__$1 = state_15119;var statearr_15153_15187 = state_15119__$1;(statearr_15153_15187[2] = inst_15109);
(statearr_15153_15187[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_15157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15157[0] = state_machine__5507__auto__);
(statearr_15157[1] = 1);
return statearr_15157;
});
var state_machine__5507__auto____1 = (function (state_15119){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15119);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15158){if((e15158 instanceof Object))
{var ex__5510__auto__ = e15158;var statearr_15159_15188 = state_15119;(statearr_15159_15188[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15119);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15158;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15189 = state_15119;
state_15119 = G__15189;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15119){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15160 = f__5522__auto__.call(null);(statearr_15160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15161);
return statearr_15160;
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
cljs.core.async.Pub = (function (){var obj15191 = {};return obj15191;
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
return (function (p1__15192_SHARP_){if(cljs.core.truth_(p1__15192_SHARP_.call(null,topic)))
{return p1__15192_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15192_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15317 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15317 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15318){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15318 = meta15318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15317.cljs$lang$type = true;
cljs.core.async.t15317.cljs$lang$ctorStr = "cljs.core.async/t15317";
cljs.core.async.t15317.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15317");
});})(mults,ensure_mult))
;
cljs.core.async.t15317.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15317.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15317.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15317.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15317.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15317.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15317.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15317.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15319){var self__ = this;
var _15319__$1 = this;return self__.meta15318;
});})(mults,ensure_mult))
;
cljs.core.async.t15317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15319,meta15318__$1){var self__ = this;
var _15319__$1 = this;return (new cljs.core.async.t15317(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15318__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15317 = ((function (mults,ensure_mult){
return (function __GT_t15317(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15318){return (new cljs.core.async.t15317(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15318));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15317(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___15441 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15393){var state_val_15394 = (state_15393[1]);if((state_val_15394 === 1))
{var state_15393__$1 = state_15393;var statearr_15395_15442 = state_15393__$1;(statearr_15395_15442[2] = null);
(statearr_15395_15442[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 2))
{var state_15393__$1 = state_15393;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15393__$1,4,ch);
} else
{if((state_val_15394 === 3))
{var inst_15391 = (state_15393[2]);var state_15393__$1 = state_15393;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15393__$1,inst_15391);
} else
{if((state_val_15394 === 4))
{var inst_15322 = (state_15393[7]);var inst_15322__$1 = (state_15393[2]);var inst_15323 = (inst_15322__$1 == null);var state_15393__$1 = (function (){var statearr_15396 = state_15393;(statearr_15396[7] = inst_15322__$1);
return statearr_15396;
})();if(cljs.core.truth_(inst_15323))
{var statearr_15397_15443 = state_15393__$1;(statearr_15397_15443[1] = 5);
} else
{var statearr_15398_15444 = state_15393__$1;(statearr_15398_15444[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 5))
{var inst_15329 = cljs.core.deref.call(null,mults);var inst_15330 = cljs.core.vals.call(null,inst_15329);var inst_15331 = cljs.core.seq.call(null,inst_15330);var inst_15332 = inst_15331;var inst_15333 = null;var inst_15334 = 0;var inst_15335 = 0;var state_15393__$1 = (function (){var statearr_15399 = state_15393;(statearr_15399[8] = inst_15333);
(statearr_15399[9] = inst_15334);
(statearr_15399[10] = inst_15332);
(statearr_15399[11] = inst_15335);
return statearr_15399;
})();var statearr_15400_15445 = state_15393__$1;(statearr_15400_15445[2] = null);
(statearr_15400_15445[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 6))
{var inst_15372 = (state_15393[12]);var inst_15322 = (state_15393[7]);var inst_15370 = (state_15393[13]);var inst_15370__$1 = topic_fn.call(null,inst_15322);var inst_15371 = cljs.core.deref.call(null,mults);var inst_15372__$1 = cljs.core.get.call(null,inst_15371,inst_15370__$1);var state_15393__$1 = (function (){var statearr_15401 = state_15393;(statearr_15401[12] = inst_15372__$1);
(statearr_15401[13] = inst_15370__$1);
return statearr_15401;
})();if(cljs.core.truth_(inst_15372__$1))
{var statearr_15402_15446 = state_15393__$1;(statearr_15402_15446[1] = 19);
} else
{var statearr_15403_15447 = state_15393__$1;(statearr_15403_15447[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 7))
{var inst_15389 = (state_15393[2]);var state_15393__$1 = state_15393;var statearr_15404_15448 = state_15393__$1;(statearr_15404_15448[2] = inst_15389);
(statearr_15404_15448[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 8))
{var inst_15334 = (state_15393[9]);var inst_15335 = (state_15393[11]);var inst_15337 = (inst_15335 < inst_15334);var inst_15338 = inst_15337;var state_15393__$1 = state_15393;if(cljs.core.truth_(inst_15338))
{var statearr_15408_15449 = state_15393__$1;(statearr_15408_15449[1] = 10);
} else
{var statearr_15409_15450 = state_15393__$1;(statearr_15409_15450[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 9))
{var inst_15368 = (state_15393[2]);var state_15393__$1 = state_15393;var statearr_15410_15451 = state_15393__$1;(statearr_15410_15451[2] = inst_15368);
(statearr_15410_15451[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 10))
{var inst_15333 = (state_15393[8]);var inst_15334 = (state_15393[9]);var inst_15332 = (state_15393[10]);var inst_15335 = (state_15393[11]);var inst_15340 = cljs.core._nth.call(null,inst_15333,inst_15335);var inst_15341 = cljs.core.async.muxch_STAR_.call(null,inst_15340);var inst_15342 = cljs.core.async.close_BANG_.call(null,inst_15341);var inst_15343 = (inst_15335 + 1);var tmp15405 = inst_15333;var tmp15406 = inst_15334;var tmp15407 = inst_15332;var inst_15332__$1 = tmp15407;var inst_15333__$1 = tmp15405;var inst_15334__$1 = tmp15406;var inst_15335__$1 = inst_15343;var state_15393__$1 = (function (){var statearr_15411 = state_15393;(statearr_15411[8] = inst_15333__$1);
(statearr_15411[9] = inst_15334__$1);
(statearr_15411[10] = inst_15332__$1);
(statearr_15411[14] = inst_15342);
(statearr_15411[11] = inst_15335__$1);
return statearr_15411;
})();var statearr_15412_15452 = state_15393__$1;(statearr_15412_15452[2] = null);
(statearr_15412_15452[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 11))
{var inst_15332 = (state_15393[10]);var inst_15346 = (state_15393[15]);var inst_15346__$1 = cljs.core.seq.call(null,inst_15332);var state_15393__$1 = (function (){var statearr_15413 = state_15393;(statearr_15413[15] = inst_15346__$1);
return statearr_15413;
})();if(inst_15346__$1)
{var statearr_15414_15453 = state_15393__$1;(statearr_15414_15453[1] = 13);
} else
{var statearr_15415_15454 = state_15393__$1;(statearr_15415_15454[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 12))
{var inst_15366 = (state_15393[2]);var state_15393__$1 = state_15393;var statearr_15416_15455 = state_15393__$1;(statearr_15416_15455[2] = inst_15366);
(statearr_15416_15455[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 13))
{var inst_15346 = (state_15393[15]);var inst_15348 = cljs.core.chunked_seq_QMARK_.call(null,inst_15346);var state_15393__$1 = state_15393;if(inst_15348)
{var statearr_15417_15456 = state_15393__$1;(statearr_15417_15456[1] = 16);
} else
{var statearr_15418_15457 = state_15393__$1;(statearr_15418_15457[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 14))
{var state_15393__$1 = state_15393;var statearr_15419_15458 = state_15393__$1;(statearr_15419_15458[2] = null);
(statearr_15419_15458[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 15))
{var inst_15364 = (state_15393[2]);var state_15393__$1 = state_15393;var statearr_15420_15459 = state_15393__$1;(statearr_15420_15459[2] = inst_15364);
(statearr_15420_15459[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 16))
{var inst_15346 = (state_15393[15]);var inst_15350 = cljs.core.chunk_first.call(null,inst_15346);var inst_15351 = cljs.core.chunk_rest.call(null,inst_15346);var inst_15352 = cljs.core.count.call(null,inst_15350);var inst_15332 = inst_15351;var inst_15333 = inst_15350;var inst_15334 = inst_15352;var inst_15335 = 0;var state_15393__$1 = (function (){var statearr_15421 = state_15393;(statearr_15421[8] = inst_15333);
(statearr_15421[9] = inst_15334);
(statearr_15421[10] = inst_15332);
(statearr_15421[11] = inst_15335);
return statearr_15421;
})();var statearr_15422_15460 = state_15393__$1;(statearr_15422_15460[2] = null);
(statearr_15422_15460[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 17))
{var inst_15346 = (state_15393[15]);var inst_15355 = cljs.core.first.call(null,inst_15346);var inst_15356 = cljs.core.async.muxch_STAR_.call(null,inst_15355);var inst_15357 = cljs.core.async.close_BANG_.call(null,inst_15356);var inst_15358 = cljs.core.next.call(null,inst_15346);var inst_15332 = inst_15358;var inst_15333 = null;var inst_15334 = 0;var inst_15335 = 0;var state_15393__$1 = (function (){var statearr_15423 = state_15393;(statearr_15423[8] = inst_15333);
(statearr_15423[9] = inst_15334);
(statearr_15423[10] = inst_15332);
(statearr_15423[11] = inst_15335);
(statearr_15423[16] = inst_15357);
return statearr_15423;
})();var statearr_15424_15461 = state_15393__$1;(statearr_15424_15461[2] = null);
(statearr_15424_15461[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 18))
{var inst_15361 = (state_15393[2]);var state_15393__$1 = state_15393;var statearr_15425_15462 = state_15393__$1;(statearr_15425_15462[2] = inst_15361);
(statearr_15425_15462[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 19))
{var state_15393__$1 = state_15393;var statearr_15426_15463 = state_15393__$1;(statearr_15426_15463[2] = null);
(statearr_15426_15463[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 20))
{var state_15393__$1 = state_15393;var statearr_15427_15464 = state_15393__$1;(statearr_15427_15464[2] = null);
(statearr_15427_15464[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 21))
{var inst_15386 = (state_15393[2]);var state_15393__$1 = (function (){var statearr_15428 = state_15393;(statearr_15428[17] = inst_15386);
return statearr_15428;
})();var statearr_15429_15465 = state_15393__$1;(statearr_15429_15465[2] = null);
(statearr_15429_15465[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 22))
{var inst_15383 = (state_15393[2]);var state_15393__$1 = state_15393;var statearr_15430_15466 = state_15393__$1;(statearr_15430_15466[2] = inst_15383);
(statearr_15430_15466[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 23))
{var inst_15370 = (state_15393[13]);var inst_15374 = (state_15393[2]);var inst_15375 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15370);var state_15393__$1 = (function (){var statearr_15431 = state_15393;(statearr_15431[18] = inst_15374);
return statearr_15431;
})();var statearr_15432_15467 = state_15393__$1;(statearr_15432_15467[2] = inst_15375);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15393__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15394 === 24))
{var inst_15372 = (state_15393[12]);var inst_15322 = (state_15393[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15393,23,Object,null,22);var inst_15379 = cljs.core.async.muxch_STAR_.call(null,inst_15372);var state_15393__$1 = state_15393;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15393__$1,25,inst_15379,inst_15322);
} else
{if((state_val_15394 === 25))
{var inst_15381 = (state_15393[2]);var state_15393__$1 = state_15393;var statearr_15433_15468 = state_15393__$1;(statearr_15433_15468[2] = inst_15381);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15393__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_15437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15437[0] = state_machine__5507__auto__);
(statearr_15437[1] = 1);
return statearr_15437;
});
var state_machine__5507__auto____1 = (function (state_15393){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15393);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15438){if((e15438 instanceof Object))
{var ex__5510__auto__ = e15438;var statearr_15439_15469 = state_15393;(statearr_15439_15469[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15393);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15438;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15470 = state_15393;
state_15393 = G__15470;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15393){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15440 = f__5522__auto__.call(null);(statearr_15440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15441);
return statearr_15440;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15607 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15577){var state_val_15578 = (state_15577[1]);if((state_val_15578 === 1))
{var state_15577__$1 = state_15577;var statearr_15579_15608 = state_15577__$1;(statearr_15579_15608[2] = null);
(statearr_15579_15608[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15578 === 2))
{var inst_15540 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15541 = 0;var state_15577__$1 = (function (){var statearr_15580 = state_15577;(statearr_15580[7] = inst_15540);
(statearr_15580[8] = inst_15541);
return statearr_15580;
})();var statearr_15581_15609 = state_15577__$1;(statearr_15581_15609[2] = null);
(statearr_15581_15609[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15578 === 3))
{var inst_15575 = (state_15577[2]);var state_15577__$1 = state_15577;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15577__$1,inst_15575);
} else
{if((state_val_15578 === 4))
{var inst_15541 = (state_15577[8]);var inst_15543 = (inst_15541 < cnt);var state_15577__$1 = state_15577;if(cljs.core.truth_(inst_15543))
{var statearr_15582_15610 = state_15577__$1;(statearr_15582_15610[1] = 6);
} else
{var statearr_15583_15611 = state_15577__$1;(statearr_15583_15611[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15578 === 5))
{var inst_15561 = (state_15577[2]);var state_15577__$1 = (function (){var statearr_15584 = state_15577;(statearr_15584[9] = inst_15561);
return statearr_15584;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15577__$1,12,dchan);
} else
{if((state_val_15578 === 6))
{var state_15577__$1 = state_15577;var statearr_15585_15612 = state_15577__$1;(statearr_15585_15612[2] = null);
(statearr_15585_15612[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15578 === 7))
{var state_15577__$1 = state_15577;var statearr_15586_15613 = state_15577__$1;(statearr_15586_15613[2] = null);
(statearr_15586_15613[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15578 === 8))
{var inst_15559 = (state_15577[2]);var state_15577__$1 = state_15577;var statearr_15587_15614 = state_15577__$1;(statearr_15587_15614[2] = inst_15559);
(statearr_15587_15614[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15578 === 9))
{var inst_15541 = (state_15577[8]);var inst_15554 = (state_15577[2]);var inst_15555 = (inst_15541 + 1);var inst_15541__$1 = inst_15555;var state_15577__$1 = (function (){var statearr_15588 = state_15577;(statearr_15588[8] = inst_15541__$1);
(statearr_15588[10] = inst_15554);
return statearr_15588;
})();var statearr_15589_15615 = state_15577__$1;(statearr_15589_15615[2] = null);
(statearr_15589_15615[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15578 === 10))
{var inst_15545 = (state_15577[2]);var inst_15546 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15577__$1 = (function (){var statearr_15590 = state_15577;(statearr_15590[11] = inst_15545);
return statearr_15590;
})();var statearr_15591_15616 = state_15577__$1;(statearr_15591_15616[2] = inst_15546);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15577__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15578 === 11))
{var inst_15541 = (state_15577[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15577,10,Object,null,9);var inst_15550 = chs__$1.call(null,inst_15541);var inst_15551 = done.call(null,inst_15541);var inst_15552 = cljs.core.async.take_BANG_.call(null,inst_15550,inst_15551);var state_15577__$1 = state_15577;var statearr_15592_15617 = state_15577__$1;(statearr_15592_15617[2] = inst_15552);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15577__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15578 === 12))
{var inst_15563 = (state_15577[12]);var inst_15563__$1 = (state_15577[2]);var inst_15564 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15563__$1);var state_15577__$1 = (function (){var statearr_15593 = state_15577;(statearr_15593[12] = inst_15563__$1);
return statearr_15593;
})();if(cljs.core.truth_(inst_15564))
{var statearr_15594_15618 = state_15577__$1;(statearr_15594_15618[1] = 13);
} else
{var statearr_15595_15619 = state_15577__$1;(statearr_15595_15619[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15578 === 13))
{var inst_15566 = cljs.core.async.close_BANG_.call(null,out);var state_15577__$1 = state_15577;var statearr_15596_15620 = state_15577__$1;(statearr_15596_15620[2] = inst_15566);
(statearr_15596_15620[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15578 === 14))
{var inst_15563 = (state_15577[12]);var inst_15568 = cljs.core.apply.call(null,f,inst_15563);var state_15577__$1 = state_15577;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15577__$1,16,out,inst_15568);
} else
{if((state_val_15578 === 15))
{var inst_15573 = (state_15577[2]);var state_15577__$1 = state_15577;var statearr_15597_15621 = state_15577__$1;(statearr_15597_15621[2] = inst_15573);
(statearr_15597_15621[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15578 === 16))
{var inst_15570 = (state_15577[2]);var state_15577__$1 = (function (){var statearr_15598 = state_15577;(statearr_15598[13] = inst_15570);
return statearr_15598;
})();var statearr_15599_15622 = state_15577__$1;(statearr_15599_15622[2] = null);
(statearr_15599_15622[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15603[0] = state_machine__5507__auto__);
(statearr_15603[1] = 1);
return statearr_15603;
});
var state_machine__5507__auto____1 = (function (state_15577){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15577);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15604){if((e15604 instanceof Object))
{var ex__5510__auto__ = e15604;var statearr_15605_15623 = state_15577;(statearr_15605_15623[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15577);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15624 = state_15577;
state_15577 = G__15624;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15577){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15606 = f__5522__auto__.call(null);(statearr_15606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15607);
return statearr_15606;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15732 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15708){var state_val_15709 = (state_15708[1]);if((state_val_15709 === 1))
{var inst_15679 = cljs.core.vec.call(null,chs);var inst_15680 = inst_15679;var state_15708__$1 = (function (){var statearr_15710 = state_15708;(statearr_15710[7] = inst_15680);
return statearr_15710;
})();var statearr_15711_15733 = state_15708__$1;(statearr_15711_15733[2] = null);
(statearr_15711_15733[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 2))
{var inst_15680 = (state_15708[7]);var inst_15682 = cljs.core.count.call(null,inst_15680);var inst_15683 = (inst_15682 > 0);var state_15708__$1 = state_15708;if(cljs.core.truth_(inst_15683))
{var statearr_15712_15734 = state_15708__$1;(statearr_15712_15734[1] = 4);
} else
{var statearr_15713_15735 = state_15708__$1;(statearr_15713_15735[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 3))
{var inst_15706 = (state_15708[2]);var state_15708__$1 = state_15708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15708__$1,inst_15706);
} else
{if((state_val_15709 === 4))
{var inst_15680 = (state_15708[7]);var state_15708__$1 = state_15708;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15708__$1,7,inst_15680);
} else
{if((state_val_15709 === 5))
{var inst_15702 = cljs.core.async.close_BANG_.call(null,out);var state_15708__$1 = state_15708;var statearr_15714_15736 = state_15708__$1;(statearr_15714_15736[2] = inst_15702);
(statearr_15714_15736[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 6))
{var inst_15704 = (state_15708[2]);var state_15708__$1 = state_15708;var statearr_15715_15737 = state_15708__$1;(statearr_15715_15737[2] = inst_15704);
(statearr_15715_15737[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 7))
{var inst_15688 = (state_15708[8]);var inst_15687 = (state_15708[9]);var inst_15687__$1 = (state_15708[2]);var inst_15688__$1 = cljs.core.nth.call(null,inst_15687__$1,0,null);var inst_15689 = cljs.core.nth.call(null,inst_15687__$1,1,null);var inst_15690 = (inst_15688__$1 == null);var state_15708__$1 = (function (){var statearr_15716 = state_15708;(statearr_15716[10] = inst_15689);
(statearr_15716[8] = inst_15688__$1);
(statearr_15716[9] = inst_15687__$1);
return statearr_15716;
})();if(cljs.core.truth_(inst_15690))
{var statearr_15717_15738 = state_15708__$1;(statearr_15717_15738[1] = 8);
} else
{var statearr_15718_15739 = state_15708__$1;(statearr_15718_15739[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 8))
{var inst_15689 = (state_15708[10]);var inst_15688 = (state_15708[8]);var inst_15687 = (state_15708[9]);var inst_15680 = (state_15708[7]);var inst_15692 = (function (){var c = inst_15689;var v = inst_15688;var vec__15685 = inst_15687;var cs = inst_15680;return ((function (c,v,vec__15685,cs,inst_15689,inst_15688,inst_15687,inst_15680,state_val_15709){
return (function (p1__15625_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15625_SHARP_);
});
;})(c,v,vec__15685,cs,inst_15689,inst_15688,inst_15687,inst_15680,state_val_15709))
})();var inst_15693 = cljs.core.filterv.call(null,inst_15692,inst_15680);var inst_15680__$1 = inst_15693;var state_15708__$1 = (function (){var statearr_15719 = state_15708;(statearr_15719[7] = inst_15680__$1);
return statearr_15719;
})();var statearr_15720_15740 = state_15708__$1;(statearr_15720_15740[2] = null);
(statearr_15720_15740[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 9))
{var inst_15688 = (state_15708[8]);var state_15708__$1 = state_15708;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15708__$1,11,out,inst_15688);
} else
{if((state_val_15709 === 10))
{var inst_15700 = (state_15708[2]);var state_15708__$1 = state_15708;var statearr_15722_15741 = state_15708__$1;(statearr_15722_15741[2] = inst_15700);
(statearr_15722_15741[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 11))
{var inst_15680 = (state_15708[7]);var inst_15697 = (state_15708[2]);var tmp15721 = inst_15680;var inst_15680__$1 = tmp15721;var state_15708__$1 = (function (){var statearr_15723 = state_15708;(statearr_15723[11] = inst_15697);
(statearr_15723[7] = inst_15680__$1);
return statearr_15723;
})();var statearr_15724_15742 = state_15708__$1;(statearr_15724_15742[2] = null);
(statearr_15724_15742[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15728 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15728[0] = state_machine__5507__auto__);
(statearr_15728[1] = 1);
return statearr_15728;
});
var state_machine__5507__auto____1 = (function (state_15708){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15708);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15729){if((e15729 instanceof Object))
{var ex__5510__auto__ = e15729;var statearr_15730_15743 = state_15708;(statearr_15730_15743[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15708);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15729;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15744 = state_15708;
state_15708 = G__15744;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15708){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15731 = f__5522__auto__.call(null);(statearr_15731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15732);
return statearr_15731;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15837 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15814){var state_val_15815 = (state_15814[1]);if((state_val_15815 === 1))
{var inst_15791 = 0;var state_15814__$1 = (function (){var statearr_15816 = state_15814;(statearr_15816[7] = inst_15791);
return statearr_15816;
})();var statearr_15817_15838 = state_15814__$1;(statearr_15817_15838[2] = null);
(statearr_15817_15838[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15815 === 2))
{var inst_15791 = (state_15814[7]);var inst_15793 = (inst_15791 < n);var state_15814__$1 = state_15814;if(cljs.core.truth_(inst_15793))
{var statearr_15818_15839 = state_15814__$1;(statearr_15818_15839[1] = 4);
} else
{var statearr_15819_15840 = state_15814__$1;(statearr_15819_15840[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15815 === 3))
{var inst_15811 = (state_15814[2]);var inst_15812 = cljs.core.async.close_BANG_.call(null,out);var state_15814__$1 = (function (){var statearr_15820 = state_15814;(statearr_15820[8] = inst_15811);
return statearr_15820;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15814__$1,inst_15812);
} else
{if((state_val_15815 === 4))
{var state_15814__$1 = state_15814;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15814__$1,7,ch);
} else
{if((state_val_15815 === 5))
{var state_15814__$1 = state_15814;var statearr_15821_15841 = state_15814__$1;(statearr_15821_15841[2] = null);
(statearr_15821_15841[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15815 === 6))
{var inst_15809 = (state_15814[2]);var state_15814__$1 = state_15814;var statearr_15822_15842 = state_15814__$1;(statearr_15822_15842[2] = inst_15809);
(statearr_15822_15842[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15815 === 7))
{var inst_15796 = (state_15814[9]);var inst_15796__$1 = (state_15814[2]);var inst_15797 = (inst_15796__$1 == null);var inst_15798 = cljs.core.not.call(null,inst_15797);var state_15814__$1 = (function (){var statearr_15823 = state_15814;(statearr_15823[9] = inst_15796__$1);
return statearr_15823;
})();if(inst_15798)
{var statearr_15824_15843 = state_15814__$1;(statearr_15824_15843[1] = 8);
} else
{var statearr_15825_15844 = state_15814__$1;(statearr_15825_15844[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15815 === 8))
{var inst_15796 = (state_15814[9]);var state_15814__$1 = state_15814;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15814__$1,11,out,inst_15796);
} else
{if((state_val_15815 === 9))
{var state_15814__$1 = state_15814;var statearr_15826_15845 = state_15814__$1;(statearr_15826_15845[2] = null);
(statearr_15826_15845[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15815 === 10))
{var inst_15806 = (state_15814[2]);var state_15814__$1 = state_15814;var statearr_15827_15846 = state_15814__$1;(statearr_15827_15846[2] = inst_15806);
(statearr_15827_15846[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15815 === 11))
{var inst_15791 = (state_15814[7]);var inst_15801 = (state_15814[2]);var inst_15802 = (inst_15791 + 1);var inst_15791__$1 = inst_15802;var state_15814__$1 = (function (){var statearr_15828 = state_15814;(statearr_15828[10] = inst_15801);
(statearr_15828[7] = inst_15791__$1);
return statearr_15828;
})();var statearr_15829_15847 = state_15814__$1;(statearr_15829_15847[2] = null);
(statearr_15829_15847[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15833 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15833[0] = state_machine__5507__auto__);
(statearr_15833[1] = 1);
return statearr_15833;
});
var state_machine__5507__auto____1 = (function (state_15814){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15814);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15834){if((e15834 instanceof Object))
{var ex__5510__auto__ = e15834;var statearr_15835_15848 = state_15814;(statearr_15835_15848[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15814);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15834;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15849 = state_15814;
state_15814 = G__15849;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15814){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15836 = f__5522__auto__.call(null);(statearr_15836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15837);
return statearr_15836;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15946 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15921){var state_val_15922 = (state_15921[1]);if((state_val_15922 === 1))
{var inst_15898 = null;var state_15921__$1 = (function (){var statearr_15923 = state_15921;(statearr_15923[7] = inst_15898);
return statearr_15923;
})();var statearr_15924_15947 = state_15921__$1;(statearr_15924_15947[2] = null);
(statearr_15924_15947[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15922 === 2))
{var state_15921__$1 = state_15921;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15921__$1,4,ch);
} else
{if((state_val_15922 === 3))
{var inst_15918 = (state_15921[2]);var inst_15919 = cljs.core.async.close_BANG_.call(null,out);var state_15921__$1 = (function (){var statearr_15925 = state_15921;(statearr_15925[8] = inst_15918);
return statearr_15925;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15921__$1,inst_15919);
} else
{if((state_val_15922 === 4))
{var inst_15901 = (state_15921[9]);var inst_15901__$1 = (state_15921[2]);var inst_15902 = (inst_15901__$1 == null);var inst_15903 = cljs.core.not.call(null,inst_15902);var state_15921__$1 = (function (){var statearr_15926 = state_15921;(statearr_15926[9] = inst_15901__$1);
return statearr_15926;
})();if(inst_15903)
{var statearr_15927_15948 = state_15921__$1;(statearr_15927_15948[1] = 5);
} else
{var statearr_15928_15949 = state_15921__$1;(statearr_15928_15949[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15922 === 5))
{var inst_15898 = (state_15921[7]);var inst_15901 = (state_15921[9]);var inst_15905 = cljs.core._EQ_.call(null,inst_15901,inst_15898);var state_15921__$1 = state_15921;if(inst_15905)
{var statearr_15929_15950 = state_15921__$1;(statearr_15929_15950[1] = 8);
} else
{var statearr_15930_15951 = state_15921__$1;(statearr_15930_15951[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15922 === 6))
{var state_15921__$1 = state_15921;var statearr_15932_15952 = state_15921__$1;(statearr_15932_15952[2] = null);
(statearr_15932_15952[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15922 === 7))
{var inst_15916 = (state_15921[2]);var state_15921__$1 = state_15921;var statearr_15933_15953 = state_15921__$1;(statearr_15933_15953[2] = inst_15916);
(statearr_15933_15953[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15922 === 8))
{var inst_15898 = (state_15921[7]);var tmp15931 = inst_15898;var inst_15898__$1 = tmp15931;var state_15921__$1 = (function (){var statearr_15934 = state_15921;(statearr_15934[7] = inst_15898__$1);
return statearr_15934;
})();var statearr_15935_15954 = state_15921__$1;(statearr_15935_15954[2] = null);
(statearr_15935_15954[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15922 === 9))
{var inst_15901 = (state_15921[9]);var state_15921__$1 = state_15921;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15921__$1,11,out,inst_15901);
} else
{if((state_val_15922 === 10))
{var inst_15913 = (state_15921[2]);var state_15921__$1 = state_15921;var statearr_15936_15955 = state_15921__$1;(statearr_15936_15955[2] = inst_15913);
(statearr_15936_15955[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15922 === 11))
{var inst_15901 = (state_15921[9]);var inst_15910 = (state_15921[2]);var inst_15898 = inst_15901;var state_15921__$1 = (function (){var statearr_15937 = state_15921;(statearr_15937[7] = inst_15898);
(statearr_15937[10] = inst_15910);
return statearr_15937;
})();var statearr_15938_15956 = state_15921__$1;(statearr_15938_15956[2] = null);
(statearr_15938_15956[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15942 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15942[0] = state_machine__5507__auto__);
(statearr_15942[1] = 1);
return statearr_15942;
});
var state_machine__5507__auto____1 = (function (state_15921){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15921);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15943){if((e15943 instanceof Object))
{var ex__5510__auto__ = e15943;var statearr_15944_15957 = state_15921;(statearr_15944_15957[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15921);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15943;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15958 = state_15921;
state_15921 = G__15958;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15921){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15945 = f__5522__auto__.call(null);(statearr_15945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15946);
return statearr_15945;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16093 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16063){var state_val_16064 = (state_16063[1]);if((state_val_16064 === 1))
{var inst_16026 = (new Array(n));var inst_16027 = inst_16026;var inst_16028 = 0;var state_16063__$1 = (function (){var statearr_16065 = state_16063;(statearr_16065[7] = inst_16027);
(statearr_16065[8] = inst_16028);
return statearr_16065;
})();var statearr_16066_16094 = state_16063__$1;(statearr_16066_16094[2] = null);
(statearr_16066_16094[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16064 === 2))
{var state_16063__$1 = state_16063;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16063__$1,4,ch);
} else
{if((state_val_16064 === 3))
{var inst_16061 = (state_16063[2]);var state_16063__$1 = state_16063;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16063__$1,inst_16061);
} else
{if((state_val_16064 === 4))
{var inst_16031 = (state_16063[9]);var inst_16031__$1 = (state_16063[2]);var inst_16032 = (inst_16031__$1 == null);var inst_16033 = cljs.core.not.call(null,inst_16032);var state_16063__$1 = (function (){var statearr_16067 = state_16063;(statearr_16067[9] = inst_16031__$1);
return statearr_16067;
})();if(inst_16033)
{var statearr_16068_16095 = state_16063__$1;(statearr_16068_16095[1] = 5);
} else
{var statearr_16069_16096 = state_16063__$1;(statearr_16069_16096[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16064 === 5))
{var inst_16027 = (state_16063[7]);var inst_16036 = (state_16063[10]);var inst_16031 = (state_16063[9]);var inst_16028 = (state_16063[8]);var inst_16035 = (inst_16027[inst_16028] = inst_16031);var inst_16036__$1 = (inst_16028 + 1);var inst_16037 = (inst_16036__$1 < n);var state_16063__$1 = (function (){var statearr_16070 = state_16063;(statearr_16070[11] = inst_16035);
(statearr_16070[10] = inst_16036__$1);
return statearr_16070;
})();if(cljs.core.truth_(inst_16037))
{var statearr_16071_16097 = state_16063__$1;(statearr_16071_16097[1] = 8);
} else
{var statearr_16072_16098 = state_16063__$1;(statearr_16072_16098[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16064 === 6))
{var inst_16028 = (state_16063[8]);var inst_16049 = (inst_16028 > 0);var state_16063__$1 = state_16063;if(cljs.core.truth_(inst_16049))
{var statearr_16074_16099 = state_16063__$1;(statearr_16074_16099[1] = 12);
} else
{var statearr_16075_16100 = state_16063__$1;(statearr_16075_16100[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16064 === 7))
{var inst_16059 = (state_16063[2]);var state_16063__$1 = state_16063;var statearr_16076_16101 = state_16063__$1;(statearr_16076_16101[2] = inst_16059);
(statearr_16076_16101[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16064 === 8))
{var inst_16027 = (state_16063[7]);var inst_16036 = (state_16063[10]);var tmp16073 = inst_16027;var inst_16027__$1 = tmp16073;var inst_16028 = inst_16036;var state_16063__$1 = (function (){var statearr_16077 = state_16063;(statearr_16077[7] = inst_16027__$1);
(statearr_16077[8] = inst_16028);
return statearr_16077;
})();var statearr_16078_16102 = state_16063__$1;(statearr_16078_16102[2] = null);
(statearr_16078_16102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16064 === 9))
{var inst_16027 = (state_16063[7]);var inst_16041 = cljs.core.vec.call(null,inst_16027);var state_16063__$1 = state_16063;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16063__$1,11,out,inst_16041);
} else
{if((state_val_16064 === 10))
{var inst_16047 = (state_16063[2]);var state_16063__$1 = state_16063;var statearr_16079_16103 = state_16063__$1;(statearr_16079_16103[2] = inst_16047);
(statearr_16079_16103[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16064 === 11))
{var inst_16043 = (state_16063[2]);var inst_16044 = (new Array(n));var inst_16027 = inst_16044;var inst_16028 = 0;var state_16063__$1 = (function (){var statearr_16080 = state_16063;(statearr_16080[7] = inst_16027);
(statearr_16080[8] = inst_16028);
(statearr_16080[12] = inst_16043);
return statearr_16080;
})();var statearr_16081_16104 = state_16063__$1;(statearr_16081_16104[2] = null);
(statearr_16081_16104[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16064 === 12))
{var inst_16027 = (state_16063[7]);var inst_16051 = cljs.core.vec.call(null,inst_16027);var state_16063__$1 = state_16063;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16063__$1,15,out,inst_16051);
} else
{if((state_val_16064 === 13))
{var state_16063__$1 = state_16063;var statearr_16082_16105 = state_16063__$1;(statearr_16082_16105[2] = null);
(statearr_16082_16105[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16064 === 14))
{var inst_16056 = (state_16063[2]);var inst_16057 = cljs.core.async.close_BANG_.call(null,out);var state_16063__$1 = (function (){var statearr_16083 = state_16063;(statearr_16083[13] = inst_16056);
return statearr_16083;
})();var statearr_16084_16106 = state_16063__$1;(statearr_16084_16106[2] = inst_16057);
(statearr_16084_16106[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16064 === 15))
{var inst_16053 = (state_16063[2]);var state_16063__$1 = state_16063;var statearr_16085_16107 = state_16063__$1;(statearr_16085_16107[2] = inst_16053);
(statearr_16085_16107[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16089[0] = state_machine__5507__auto__);
(statearr_16089[1] = 1);
return statearr_16089;
});
var state_machine__5507__auto____1 = (function (state_16063){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16063);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16090){if((e16090 instanceof Object))
{var ex__5510__auto__ = e16090;var statearr_16091_16108 = state_16063;(statearr_16091_16108[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16063);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16090;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16109 = state_16063;
state_16063 = G__16109;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16063){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16092 = f__5522__auto__.call(null);(statearr_16092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16093);
return statearr_16092;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16252 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16222){var state_val_16223 = (state_16222[1]);if((state_val_16223 === 1))
{var inst_16181 = [];var inst_16182 = inst_16181;var inst_16183 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16222__$1 = (function (){var statearr_16224 = state_16222;(statearr_16224[7] = inst_16182);
(statearr_16224[8] = inst_16183);
return statearr_16224;
})();var statearr_16225_16253 = state_16222__$1;(statearr_16225_16253[2] = null);
(statearr_16225_16253[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16223 === 2))
{var state_16222__$1 = state_16222;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16222__$1,4,ch);
} else
{if((state_val_16223 === 3))
{var inst_16220 = (state_16222[2]);var state_16222__$1 = state_16222;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16222__$1,inst_16220);
} else
{if((state_val_16223 === 4))
{var inst_16186 = (state_16222[9]);var inst_16186__$1 = (state_16222[2]);var inst_16187 = (inst_16186__$1 == null);var inst_16188 = cljs.core.not.call(null,inst_16187);var state_16222__$1 = (function (){var statearr_16226 = state_16222;(statearr_16226[9] = inst_16186__$1);
return statearr_16226;
})();if(inst_16188)
{var statearr_16227_16254 = state_16222__$1;(statearr_16227_16254[1] = 5);
} else
{var statearr_16228_16255 = state_16222__$1;(statearr_16228_16255[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16223 === 5))
{var inst_16186 = (state_16222[9]);var inst_16190 = (state_16222[10]);var inst_16183 = (state_16222[8]);var inst_16190__$1 = f.call(null,inst_16186);var inst_16191 = cljs.core._EQ_.call(null,inst_16190__$1,inst_16183);var inst_16192 = cljs.core.keyword_identical_QMARK_.call(null,inst_16183,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16193 = (inst_16191) || (inst_16192);var state_16222__$1 = (function (){var statearr_16229 = state_16222;(statearr_16229[10] = inst_16190__$1);
return statearr_16229;
})();if(cljs.core.truth_(inst_16193))
{var statearr_16230_16256 = state_16222__$1;(statearr_16230_16256[1] = 8);
} else
{var statearr_16231_16257 = state_16222__$1;(statearr_16231_16257[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16223 === 6))
{var inst_16182 = (state_16222[7]);var inst_16207 = inst_16182.length;var inst_16208 = (inst_16207 > 0);var state_16222__$1 = state_16222;if(cljs.core.truth_(inst_16208))
{var statearr_16233_16258 = state_16222__$1;(statearr_16233_16258[1] = 12);
} else
{var statearr_16234_16259 = state_16222__$1;(statearr_16234_16259[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16223 === 7))
{var inst_16218 = (state_16222[2]);var state_16222__$1 = state_16222;var statearr_16235_16260 = state_16222__$1;(statearr_16235_16260[2] = inst_16218);
(statearr_16235_16260[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16223 === 8))
{var inst_16186 = (state_16222[9]);var inst_16190 = (state_16222[10]);var inst_16182 = (state_16222[7]);var inst_16195 = inst_16182.push(inst_16186);var tmp16232 = inst_16182;var inst_16182__$1 = tmp16232;var inst_16183 = inst_16190;var state_16222__$1 = (function (){var statearr_16236 = state_16222;(statearr_16236[11] = inst_16195);
(statearr_16236[7] = inst_16182__$1);
(statearr_16236[8] = inst_16183);
return statearr_16236;
})();var statearr_16237_16261 = state_16222__$1;(statearr_16237_16261[2] = null);
(statearr_16237_16261[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16223 === 9))
{var inst_16182 = (state_16222[7]);var inst_16198 = cljs.core.vec.call(null,inst_16182);var state_16222__$1 = state_16222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16222__$1,11,out,inst_16198);
} else
{if((state_val_16223 === 10))
{var inst_16205 = (state_16222[2]);var state_16222__$1 = state_16222;var statearr_16238_16262 = state_16222__$1;(statearr_16238_16262[2] = inst_16205);
(statearr_16238_16262[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16223 === 11))
{var inst_16186 = (state_16222[9]);var inst_16190 = (state_16222[10]);var inst_16200 = (state_16222[2]);var inst_16201 = [];var inst_16202 = inst_16201.push(inst_16186);var inst_16182 = inst_16201;var inst_16183 = inst_16190;var state_16222__$1 = (function (){var statearr_16239 = state_16222;(statearr_16239[12] = inst_16202);
(statearr_16239[13] = inst_16200);
(statearr_16239[7] = inst_16182);
(statearr_16239[8] = inst_16183);
return statearr_16239;
})();var statearr_16240_16263 = state_16222__$1;(statearr_16240_16263[2] = null);
(statearr_16240_16263[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16223 === 12))
{var inst_16182 = (state_16222[7]);var inst_16210 = cljs.core.vec.call(null,inst_16182);var state_16222__$1 = state_16222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16222__$1,15,out,inst_16210);
} else
{if((state_val_16223 === 13))
{var state_16222__$1 = state_16222;var statearr_16241_16264 = state_16222__$1;(statearr_16241_16264[2] = null);
(statearr_16241_16264[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16223 === 14))
{var inst_16215 = (state_16222[2]);var inst_16216 = cljs.core.async.close_BANG_.call(null,out);var state_16222__$1 = (function (){var statearr_16242 = state_16222;(statearr_16242[14] = inst_16215);
return statearr_16242;
})();var statearr_16243_16265 = state_16222__$1;(statearr_16243_16265[2] = inst_16216);
(statearr_16243_16265[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16223 === 15))
{var inst_16212 = (state_16222[2]);var state_16222__$1 = state_16222;var statearr_16244_16266 = state_16222__$1;(statearr_16244_16266[2] = inst_16212);
(statearr_16244_16266[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16248[0] = state_machine__5507__auto__);
(statearr_16248[1] = 1);
return statearr_16248;
});
var state_machine__5507__auto____1 = (function (state_16222){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16222);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16249){if((e16249 instanceof Object))
{var ex__5510__auto__ = e16249;var statearr_16250_16267 = state_16222;(statearr_16250_16267[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16222);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16268 = state_16222;
state_16222 = G__16268;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16222){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16251 = f__5522__auto__.call(null);(statearr_16251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16252);
return statearr_16251;
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

//# sourceMappingURL=async.js.map