// Compiled by ClojureScript 0.0-2173
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_17553 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17554 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17555 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_17554,table_section_wrapper_17554,opt_wrapper_17553,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_17555,table_section_wrapper_17554,cell_wrapper_17555,opt_wrapper_17553,table_section_wrapper_17554,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_17554]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17560 = cljs.core.seq.call(null,tbody);var chunk__17561 = null;var count__17562 = 0;var i__17563 = 0;while(true){
if((i__17563 < count__17562))
{var child = cljs.core._nth.call(null,chunk__17561,i__17563);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17564 = seq__17560;
var G__17565 = chunk__17561;
var G__17566 = count__17562;
var G__17567 = (i__17563 + 1);
seq__17560 = G__17564;
chunk__17561 = G__17565;
count__17562 = G__17566;
i__17563 = G__17567;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17560);if(temp__4092__auto__)
{var seq__17560__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17560__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__17560__$1);{
var G__17568 = cljs.core.chunk_rest.call(null,seq__17560__$1);
var G__17569 = c__4189__auto__;
var G__17570 = cljs.core.count.call(null,c__4189__auto__);
var G__17571 = 0;
seq__17560 = G__17568;
chunk__17561 = G__17569;
count__17562 = G__17570;
i__17563 = G__17571;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17560__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17572 = cljs.core.next.call(null,seq__17560__$1);
var G__17573 = null;
var G__17574 = 0;
var G__17575 = 0;
seq__17560 = G__17572;
chunk__17561 = G__17573;
count__17562 = G__17574;
i__17563 = G__17575;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__17577 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17577,0,null);var start_wrap = cljs.core.nth.call(null,vec__17577,1,null);var end_wrap = cljs.core.nth.call(null,vec__17577,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17578 = wrapper.lastChild;
var G__17579 = (level - 1);
wrapper = G__17578;
level = G__17579;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3429__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3429__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj17581 = {};return obj17581;
})();
domina.nodes = (function nodes(content){if((function (){var and__3429__auto__ = content;if(and__3429__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3429__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4068__auto__ = (((content == null))?null:content);return (function (){var or__3441__auto__ = (domina.nodes[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.nodes["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3429__auto__ = nodeseq;if(and__3429__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3429__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4068__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3441__auto__ = (domina.single_node[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.single_node["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3429__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3429__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3429__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__17582){
var mesg = cljs.core.seq(arglist__17582);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__17583){
var mesg = cljs.core.seq(arglist__17583);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__17584){
var contents = cljs.core.seq(arglist__17584);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17585_SHARP_){return p1__17585_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17586_SHARP_,p2__17587_SHARP_){return goog.dom.insertChildAt(p1__17586_SHARP_,p2__17587_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17589_SHARP_,p2__17588_SHARP_){return goog.dom.insertSiblingBefore(p2__17588_SHARP_,p1__17589_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17591_SHARP_,p2__17590_SHARP_){return goog.dom.insertSiblingAfter(p2__17590_SHARP_,p1__17591_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17593_SHARP_,p2__17592_SHARP_){return goog.dom.replaceNode(p2__17592_SHARP_,p1__17593_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__17598_17602 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17599_17603 = null;var count__17600_17604 = 0;var i__17601_17605 = 0;while(true){
if((i__17601_17605 < count__17600_17604))
{var n_17606 = cljs.core._nth.call(null,chunk__17599_17603,i__17601_17605);goog.style.setStyle(n_17606,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17607 = seq__17598_17602;
var G__17608 = chunk__17599_17603;
var G__17609 = count__17600_17604;
var G__17610 = (i__17601_17605 + 1);
seq__17598_17602 = G__17607;
chunk__17599_17603 = G__17608;
count__17600_17604 = G__17609;
i__17601_17605 = G__17610;
continue;
}
} else
{var temp__4092__auto___17611 = cljs.core.seq.call(null,seq__17598_17602);if(temp__4092__auto___17611)
{var seq__17598_17612__$1 = temp__4092__auto___17611;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17598_17612__$1))
{var c__4189__auto___17613 = cljs.core.chunk_first.call(null,seq__17598_17612__$1);{
var G__17614 = cljs.core.chunk_rest.call(null,seq__17598_17612__$1);
var G__17615 = c__4189__auto___17613;
var G__17616 = cljs.core.count.call(null,c__4189__auto___17613);
var G__17617 = 0;
seq__17598_17602 = G__17614;
chunk__17599_17603 = G__17615;
count__17600_17604 = G__17616;
i__17601_17605 = G__17617;
continue;
}
} else
{var n_17618 = cljs.core.first.call(null,seq__17598_17612__$1);goog.style.setStyle(n_17618,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17619 = cljs.core.next.call(null,seq__17598_17612__$1);
var G__17620 = null;
var G__17621 = 0;
var G__17622 = 0;
seq__17598_17602 = G__17619;
chunk__17599_17603 = G__17620;
count__17600_17604 = G__17621;
i__17601_17605 = G__17622;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17623){
var content = cljs.core.first(arglist__17623);
arglist__17623 = cljs.core.next(arglist__17623);
var name = cljs.core.first(arglist__17623);
var value = cljs.core.rest(arglist__17623);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__17628_17632 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17629_17633 = null;var count__17630_17634 = 0;var i__17631_17635 = 0;while(true){
if((i__17631_17635 < count__17630_17634))
{var n_17636 = cljs.core._nth.call(null,chunk__17629_17633,i__17631_17635);n_17636.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17637 = seq__17628_17632;
var G__17638 = chunk__17629_17633;
var G__17639 = count__17630_17634;
var G__17640 = (i__17631_17635 + 1);
seq__17628_17632 = G__17637;
chunk__17629_17633 = G__17638;
count__17630_17634 = G__17639;
i__17631_17635 = G__17640;
continue;
}
} else
{var temp__4092__auto___17641 = cljs.core.seq.call(null,seq__17628_17632);if(temp__4092__auto___17641)
{var seq__17628_17642__$1 = temp__4092__auto___17641;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17628_17642__$1))
{var c__4189__auto___17643 = cljs.core.chunk_first.call(null,seq__17628_17642__$1);{
var G__17644 = cljs.core.chunk_rest.call(null,seq__17628_17642__$1);
var G__17645 = c__4189__auto___17643;
var G__17646 = cljs.core.count.call(null,c__4189__auto___17643);
var G__17647 = 0;
seq__17628_17632 = G__17644;
chunk__17629_17633 = G__17645;
count__17630_17634 = G__17646;
i__17631_17635 = G__17647;
continue;
}
} else
{var n_17648 = cljs.core.first.call(null,seq__17628_17642__$1);n_17648.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17649 = cljs.core.next.call(null,seq__17628_17642__$1);
var G__17650 = null;
var G__17651 = 0;
var G__17652 = 0;
seq__17628_17632 = G__17649;
chunk__17629_17633 = G__17650;
count__17630_17634 = G__17651;
i__17631_17635 = G__17652;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17653){
var content = cljs.core.first(arglist__17653);
arglist__17653 = cljs.core.next(arglist__17653);
var name = cljs.core.first(arglist__17653);
var value = cljs.core.rest(arglist__17653);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17658_17662 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17659_17663 = null;var count__17660_17664 = 0;var i__17661_17665 = 0;while(true){
if((i__17661_17665 < count__17660_17664))
{var n_17666 = cljs.core._nth.call(null,chunk__17659_17663,i__17661_17665);n_17666.removeAttribute(cljs.core.name.call(null,name));
{
var G__17667 = seq__17658_17662;
var G__17668 = chunk__17659_17663;
var G__17669 = count__17660_17664;
var G__17670 = (i__17661_17665 + 1);
seq__17658_17662 = G__17667;
chunk__17659_17663 = G__17668;
count__17660_17664 = G__17669;
i__17661_17665 = G__17670;
continue;
}
} else
{var temp__4092__auto___17671 = cljs.core.seq.call(null,seq__17658_17662);if(temp__4092__auto___17671)
{var seq__17658_17672__$1 = temp__4092__auto___17671;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17658_17672__$1))
{var c__4189__auto___17673 = cljs.core.chunk_first.call(null,seq__17658_17672__$1);{
var G__17674 = cljs.core.chunk_rest.call(null,seq__17658_17672__$1);
var G__17675 = c__4189__auto___17673;
var G__17676 = cljs.core.count.call(null,c__4189__auto___17673);
var G__17677 = 0;
seq__17658_17662 = G__17674;
chunk__17659_17663 = G__17675;
count__17660_17664 = G__17676;
i__17661_17665 = G__17677;
continue;
}
} else
{var n_17678 = cljs.core.first.call(null,seq__17658_17672__$1);n_17678.removeAttribute(cljs.core.name.call(null,name));
{
var G__17679 = cljs.core.next.call(null,seq__17658_17672__$1);
var G__17680 = null;
var G__17681 = 0;
var G__17682 = 0;
seq__17658_17662 = G__17679;
chunk__17659_17663 = G__17680;
count__17660_17664 = G__17681;
i__17661_17665 = G__17682;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17684 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17684,0,null);var v = cljs.core.nth.call(null,vec__17684,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
{return v;
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17685_SHARP_){var attr = attrs__$1.item(p1__17685_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17692_17698 = cljs.core.seq.call(null,styles);var chunk__17693_17699 = null;var count__17694_17700 = 0;var i__17695_17701 = 0;while(true){
if((i__17695_17701 < count__17694_17700))
{var vec__17696_17702 = cljs.core._nth.call(null,chunk__17693_17699,i__17695_17701);var name_17703 = cljs.core.nth.call(null,vec__17696_17702,0,null);var value_17704 = cljs.core.nth.call(null,vec__17696_17702,1,null);domina.set_style_BANG_.call(null,content,name_17703,value_17704);
{
var G__17705 = seq__17692_17698;
var G__17706 = chunk__17693_17699;
var G__17707 = count__17694_17700;
var G__17708 = (i__17695_17701 + 1);
seq__17692_17698 = G__17705;
chunk__17693_17699 = G__17706;
count__17694_17700 = G__17707;
i__17695_17701 = G__17708;
continue;
}
} else
{var temp__4092__auto___17709 = cljs.core.seq.call(null,seq__17692_17698);if(temp__4092__auto___17709)
{var seq__17692_17710__$1 = temp__4092__auto___17709;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17692_17710__$1))
{var c__4189__auto___17711 = cljs.core.chunk_first.call(null,seq__17692_17710__$1);{
var G__17712 = cljs.core.chunk_rest.call(null,seq__17692_17710__$1);
var G__17713 = c__4189__auto___17711;
var G__17714 = cljs.core.count.call(null,c__4189__auto___17711);
var G__17715 = 0;
seq__17692_17698 = G__17712;
chunk__17693_17699 = G__17713;
count__17694_17700 = G__17714;
i__17695_17701 = G__17715;
continue;
}
} else
{var vec__17697_17716 = cljs.core.first.call(null,seq__17692_17710__$1);var name_17717 = cljs.core.nth.call(null,vec__17697_17716,0,null);var value_17718 = cljs.core.nth.call(null,vec__17697_17716,1,null);domina.set_style_BANG_.call(null,content,name_17717,value_17718);
{
var G__17719 = cljs.core.next.call(null,seq__17692_17710__$1);
var G__17720 = null;
var G__17721 = 0;
var G__17722 = 0;
seq__17692_17698 = G__17719;
chunk__17693_17699 = G__17720;
count__17694_17700 = G__17721;
i__17695_17701 = G__17722;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17729_17735 = cljs.core.seq.call(null,attrs);var chunk__17730_17736 = null;var count__17731_17737 = 0;var i__17732_17738 = 0;while(true){
if((i__17732_17738 < count__17731_17737))
{var vec__17733_17739 = cljs.core._nth.call(null,chunk__17730_17736,i__17732_17738);var name_17740 = cljs.core.nth.call(null,vec__17733_17739,0,null);var value_17741 = cljs.core.nth.call(null,vec__17733_17739,1,null);domina.set_attr_BANG_.call(null,content,name_17740,value_17741);
{
var G__17742 = seq__17729_17735;
var G__17743 = chunk__17730_17736;
var G__17744 = count__17731_17737;
var G__17745 = (i__17732_17738 + 1);
seq__17729_17735 = G__17742;
chunk__17730_17736 = G__17743;
count__17731_17737 = G__17744;
i__17732_17738 = G__17745;
continue;
}
} else
{var temp__4092__auto___17746 = cljs.core.seq.call(null,seq__17729_17735);if(temp__4092__auto___17746)
{var seq__17729_17747__$1 = temp__4092__auto___17746;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17729_17747__$1))
{var c__4189__auto___17748 = cljs.core.chunk_first.call(null,seq__17729_17747__$1);{
var G__17749 = cljs.core.chunk_rest.call(null,seq__17729_17747__$1);
var G__17750 = c__4189__auto___17748;
var G__17751 = cljs.core.count.call(null,c__4189__auto___17748);
var G__17752 = 0;
seq__17729_17735 = G__17749;
chunk__17730_17736 = G__17750;
count__17731_17737 = G__17751;
i__17732_17738 = G__17752;
continue;
}
} else
{var vec__17734_17753 = cljs.core.first.call(null,seq__17729_17747__$1);var name_17754 = cljs.core.nth.call(null,vec__17734_17753,0,null);var value_17755 = cljs.core.nth.call(null,vec__17734_17753,1,null);domina.set_attr_BANG_.call(null,content,name_17754,value_17755);
{
var G__17756 = cljs.core.next.call(null,seq__17729_17747__$1);
var G__17757 = null;
var G__17758 = 0;
var G__17759 = 0;
seq__17729_17735 = G__17756;
chunk__17730_17736 = G__17757;
count__17731_17737 = G__17758;
i__17732_17738 = G__17759;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17764_17768 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17765_17769 = null;var count__17766_17770 = 0;var i__17767_17771 = 0;while(true){
if((i__17767_17771 < count__17766_17770))
{var node_17772 = cljs.core._nth.call(null,chunk__17765_17769,i__17767_17771);goog.dom.classes.add(node_17772,class$);
{
var G__17773 = seq__17764_17768;
var G__17774 = chunk__17765_17769;
var G__17775 = count__17766_17770;
var G__17776 = (i__17767_17771 + 1);
seq__17764_17768 = G__17773;
chunk__17765_17769 = G__17774;
count__17766_17770 = G__17775;
i__17767_17771 = G__17776;
continue;
}
} else
{var temp__4092__auto___17777 = cljs.core.seq.call(null,seq__17764_17768);if(temp__4092__auto___17777)
{var seq__17764_17778__$1 = temp__4092__auto___17777;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17764_17778__$1))
{var c__4189__auto___17779 = cljs.core.chunk_first.call(null,seq__17764_17778__$1);{
var G__17780 = cljs.core.chunk_rest.call(null,seq__17764_17778__$1);
var G__17781 = c__4189__auto___17779;
var G__17782 = cljs.core.count.call(null,c__4189__auto___17779);
var G__17783 = 0;
seq__17764_17768 = G__17780;
chunk__17765_17769 = G__17781;
count__17766_17770 = G__17782;
i__17767_17771 = G__17783;
continue;
}
} else
{var node_17784 = cljs.core.first.call(null,seq__17764_17778__$1);goog.dom.classes.add(node_17784,class$);
{
var G__17785 = cljs.core.next.call(null,seq__17764_17778__$1);
var G__17786 = null;
var G__17787 = 0;
var G__17788 = 0;
seq__17764_17768 = G__17785;
chunk__17765_17769 = G__17786;
count__17766_17770 = G__17787;
i__17767_17771 = G__17788;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17793_17797 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17794_17798 = null;var count__17795_17799 = 0;var i__17796_17800 = 0;while(true){
if((i__17796_17800 < count__17795_17799))
{var node_17801 = cljs.core._nth.call(null,chunk__17794_17798,i__17796_17800);goog.dom.classes.remove(node_17801,class$);
{
var G__17802 = seq__17793_17797;
var G__17803 = chunk__17794_17798;
var G__17804 = count__17795_17799;
var G__17805 = (i__17796_17800 + 1);
seq__17793_17797 = G__17802;
chunk__17794_17798 = G__17803;
count__17795_17799 = G__17804;
i__17796_17800 = G__17805;
continue;
}
} else
{var temp__4092__auto___17806 = cljs.core.seq.call(null,seq__17793_17797);if(temp__4092__auto___17806)
{var seq__17793_17807__$1 = temp__4092__auto___17806;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17793_17807__$1))
{var c__4189__auto___17808 = cljs.core.chunk_first.call(null,seq__17793_17807__$1);{
var G__17809 = cljs.core.chunk_rest.call(null,seq__17793_17807__$1);
var G__17810 = c__4189__auto___17808;
var G__17811 = cljs.core.count.call(null,c__4189__auto___17808);
var G__17812 = 0;
seq__17793_17797 = G__17809;
chunk__17794_17798 = G__17810;
count__17795_17799 = G__17811;
i__17796_17800 = G__17812;
continue;
}
} else
{var node_17813 = cljs.core.first.call(null,seq__17793_17807__$1);goog.dom.classes.remove(node_17813,class$);
{
var G__17814 = cljs.core.next.call(null,seq__17793_17807__$1);
var G__17815 = null;
var G__17816 = 0;
var G__17817 = 0;
seq__17793_17797 = G__17814;
chunk__17794_17798 = G__17815;
count__17795_17799 = G__17816;
i__17796_17800 = G__17817;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17822_17826 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17823_17827 = null;var count__17824_17828 = 0;var i__17825_17829 = 0;while(true){
if((i__17825_17829 < count__17824_17828))
{var node_17830 = cljs.core._nth.call(null,chunk__17823_17827,i__17825_17829);goog.dom.classes.toggle(node_17830,class$);
{
var G__17831 = seq__17822_17826;
var G__17832 = chunk__17823_17827;
var G__17833 = count__17824_17828;
var G__17834 = (i__17825_17829 + 1);
seq__17822_17826 = G__17831;
chunk__17823_17827 = G__17832;
count__17824_17828 = G__17833;
i__17825_17829 = G__17834;
continue;
}
} else
{var temp__4092__auto___17835 = cljs.core.seq.call(null,seq__17822_17826);if(temp__4092__auto___17835)
{var seq__17822_17836__$1 = temp__4092__auto___17835;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17822_17836__$1))
{var c__4189__auto___17837 = cljs.core.chunk_first.call(null,seq__17822_17836__$1);{
var G__17838 = cljs.core.chunk_rest.call(null,seq__17822_17836__$1);
var G__17839 = c__4189__auto___17837;
var G__17840 = cljs.core.count.call(null,c__4189__auto___17837);
var G__17841 = 0;
seq__17822_17826 = G__17838;
chunk__17823_17827 = G__17839;
count__17824_17828 = G__17840;
i__17825_17829 = G__17841;
continue;
}
} else
{var node_17842 = cljs.core.first.call(null,seq__17822_17836__$1);goog.dom.classes.toggle(node_17842,class$);
{
var G__17843 = cljs.core.next.call(null,seq__17822_17836__$1);
var G__17844 = null;
var G__17845 = 0;
var G__17846 = 0;
seq__17822_17826 = G__17843;
chunk__17823_17827 = G__17844;
count__17824_17828 = G__17845;
i__17825_17829 = G__17846;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17855__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17851_17856 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17852_17857 = null;var count__17853_17858 = 0;var i__17854_17859 = 0;while(true){
if((i__17854_17859 < count__17853_17858))
{var node_17860 = cljs.core._nth.call(null,chunk__17852_17857,i__17854_17859);goog.dom.classes.set(node_17860,classes_17855__$1);
{
var G__17861 = seq__17851_17856;
var G__17862 = chunk__17852_17857;
var G__17863 = count__17853_17858;
var G__17864 = (i__17854_17859 + 1);
seq__17851_17856 = G__17861;
chunk__17852_17857 = G__17862;
count__17853_17858 = G__17863;
i__17854_17859 = G__17864;
continue;
}
} else
{var temp__4092__auto___17865 = cljs.core.seq.call(null,seq__17851_17856);if(temp__4092__auto___17865)
{var seq__17851_17866__$1 = temp__4092__auto___17865;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17851_17866__$1))
{var c__4189__auto___17867 = cljs.core.chunk_first.call(null,seq__17851_17866__$1);{
var G__17868 = cljs.core.chunk_rest.call(null,seq__17851_17866__$1);
var G__17869 = c__4189__auto___17867;
var G__17870 = cljs.core.count.call(null,c__4189__auto___17867);
var G__17871 = 0;
seq__17851_17856 = G__17868;
chunk__17852_17857 = G__17869;
count__17853_17858 = G__17870;
i__17854_17859 = G__17871;
continue;
}
} else
{var node_17872 = cljs.core.first.call(null,seq__17851_17866__$1);goog.dom.classes.set(node_17872,classes_17855__$1);
{
var G__17873 = cljs.core.next.call(null,seq__17851_17866__$1);
var G__17874 = null;
var G__17875 = 0;
var G__17876 = 0;
seq__17851_17856 = G__17873;
chunk__17852_17857 = G__17874;
count__17853_17858 = G__17875;
i__17854_17859 = G__17876;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17881_17885 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17882_17886 = null;var count__17883_17887 = 0;var i__17884_17888 = 0;while(true){
if((i__17884_17888 < count__17883_17887))
{var node_17889 = cljs.core._nth.call(null,chunk__17882_17886,i__17884_17888);goog.dom.setTextContent(node_17889,value);
{
var G__17890 = seq__17881_17885;
var G__17891 = chunk__17882_17886;
var G__17892 = count__17883_17887;
var G__17893 = (i__17884_17888 + 1);
seq__17881_17885 = G__17890;
chunk__17882_17886 = G__17891;
count__17883_17887 = G__17892;
i__17884_17888 = G__17893;
continue;
}
} else
{var temp__4092__auto___17894 = cljs.core.seq.call(null,seq__17881_17885);if(temp__4092__auto___17894)
{var seq__17881_17895__$1 = temp__4092__auto___17894;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17881_17895__$1))
{var c__4189__auto___17896 = cljs.core.chunk_first.call(null,seq__17881_17895__$1);{
var G__17897 = cljs.core.chunk_rest.call(null,seq__17881_17895__$1);
var G__17898 = c__4189__auto___17896;
var G__17899 = cljs.core.count.call(null,c__4189__auto___17896);
var G__17900 = 0;
seq__17881_17885 = G__17897;
chunk__17882_17886 = G__17898;
count__17883_17887 = G__17899;
i__17884_17888 = G__17900;
continue;
}
} else
{var node_17901 = cljs.core.first.call(null,seq__17881_17895__$1);goog.dom.setTextContent(node_17901,value);
{
var G__17902 = cljs.core.next.call(null,seq__17881_17895__$1);
var G__17903 = null;
var G__17904 = 0;
var G__17905 = 0;
seq__17881_17885 = G__17902;
chunk__17882_17886 = G__17903;
count__17883_17887 = G__17904;
i__17884_17888 = G__17905;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17910_17914 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17911_17915 = null;var count__17912_17916 = 0;var i__17913_17917 = 0;while(true){
if((i__17913_17917 < count__17912_17916))
{var node_17918 = cljs.core._nth.call(null,chunk__17911_17915,i__17913_17917);goog.dom.forms.setValue(node_17918,value);
{
var G__17919 = seq__17910_17914;
var G__17920 = chunk__17911_17915;
var G__17921 = count__17912_17916;
var G__17922 = (i__17913_17917 + 1);
seq__17910_17914 = G__17919;
chunk__17911_17915 = G__17920;
count__17912_17916 = G__17921;
i__17913_17917 = G__17922;
continue;
}
} else
{var temp__4092__auto___17923 = cljs.core.seq.call(null,seq__17910_17914);if(temp__4092__auto___17923)
{var seq__17910_17924__$1 = temp__4092__auto___17923;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17910_17924__$1))
{var c__4189__auto___17925 = cljs.core.chunk_first.call(null,seq__17910_17924__$1);{
var G__17926 = cljs.core.chunk_rest.call(null,seq__17910_17924__$1);
var G__17927 = c__4189__auto___17925;
var G__17928 = cljs.core.count.call(null,c__4189__auto___17925);
var G__17929 = 0;
seq__17910_17914 = G__17926;
chunk__17911_17915 = G__17927;
count__17912_17916 = G__17928;
i__17913_17917 = G__17929;
continue;
}
} else
{var node_17930 = cljs.core.first.call(null,seq__17910_17924__$1);goog.dom.forms.setValue(node_17930,value);
{
var G__17931 = cljs.core.next.call(null,seq__17910_17924__$1);
var G__17932 = null;
var G__17933 = 0;
var G__17934 = 0;
seq__17910_17914 = G__17931;
chunk__17911_17915 = G__17932;
count__17912_17916 = G__17933;
i__17913_17917 = G__17934;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3429__auto__ = allows_inner_html_QMARK_;if(and__3429__auto__)
{var and__3429__auto____$1 = (function (){var or__3441__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3429__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var value_17945 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17941_17946 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17942_17947 = null;var count__17943_17948 = 0;var i__17944_17949 = 0;while(true){
if((i__17944_17949 < count__17943_17948))
{var node_17950 = cljs.core._nth.call(null,chunk__17942_17947,i__17944_17949);node_17950.innerHTML = value_17945;
{
var G__17951 = seq__17941_17946;
var G__17952 = chunk__17942_17947;
var G__17953 = count__17943_17948;
var G__17954 = (i__17944_17949 + 1);
seq__17941_17946 = G__17951;
chunk__17942_17947 = G__17952;
count__17943_17948 = G__17953;
i__17944_17949 = G__17954;
continue;
}
} else
{var temp__4092__auto___17955 = cljs.core.seq.call(null,seq__17941_17946);if(temp__4092__auto___17955)
{var seq__17941_17956__$1 = temp__4092__auto___17955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17941_17956__$1))
{var c__4189__auto___17957 = cljs.core.chunk_first.call(null,seq__17941_17956__$1);{
var G__17958 = cljs.core.chunk_rest.call(null,seq__17941_17956__$1);
var G__17959 = c__4189__auto___17957;
var G__17960 = cljs.core.count.call(null,c__4189__auto___17957);
var G__17961 = 0;
seq__17941_17946 = G__17958;
chunk__17942_17947 = G__17959;
count__17943_17948 = G__17960;
i__17944_17949 = G__17961;
continue;
}
} else
{var node_17962 = cljs.core.first.call(null,seq__17941_17956__$1);node_17962.innerHTML = value_17945;
{
var G__17963 = cljs.core.next.call(null,seq__17941_17956__$1);
var G__17964 = null;
var G__17965 = 0;
var G__17966 = 0;
seq__17941_17946 = G__17963;
chunk__17942_17947 = G__17964;
count__17943_17948 = G__17965;
i__17944_17949 = G__17966;
continue;
}
}
} else
{}
}
break;
}
}catch (e17940){if((e17940 instanceof Error))
{var e_17967 = e17940;domina.replace_children_BANG_.call(null,content,value_17945);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17940;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3429__auto__ = bubble;if(cljs.core.truth_(and__3429__auto__))
{return (value == null);
} else
{return and__3429__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3441__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17974_17978 = cljs.core.seq.call(null,children);var chunk__17975_17979 = null;var count__17976_17980 = 0;var i__17977_17981 = 0;while(true){
if((i__17977_17981 < count__17976_17980))
{var child_17982 = cljs.core._nth.call(null,chunk__17975_17979,i__17977_17981);frag.appendChild(child_17982);
{
var G__17983 = seq__17974_17978;
var G__17984 = chunk__17975_17979;
var G__17985 = count__17976_17980;
var G__17986 = (i__17977_17981 + 1);
seq__17974_17978 = G__17983;
chunk__17975_17979 = G__17984;
count__17976_17980 = G__17985;
i__17977_17981 = G__17986;
continue;
}
} else
{var temp__4092__auto___17987 = cljs.core.seq.call(null,seq__17974_17978);if(temp__4092__auto___17987)
{var seq__17974_17988__$1 = temp__4092__auto___17987;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17974_17988__$1))
{var c__4189__auto___17989 = cljs.core.chunk_first.call(null,seq__17974_17988__$1);{
var G__17990 = cljs.core.chunk_rest.call(null,seq__17974_17988__$1);
var G__17991 = c__4189__auto___17989;
var G__17992 = cljs.core.count.call(null,c__4189__auto___17989);
var G__17993 = 0;
seq__17974_17978 = G__17990;
chunk__17975_17979 = G__17991;
count__17976_17980 = G__17992;
i__17977_17981 = G__17993;
continue;
}
} else
{var child_17994 = cljs.core.first.call(null,seq__17974_17988__$1);frag.appendChild(child_17994);
{
var G__17995 = cljs.core.next.call(null,seq__17974_17988__$1);
var G__17996 = null;
var G__17997 = 0;
var G__17998 = 0;
seq__17974_17978 = G__17995;
chunk__17975_17979 = G__17996;
count__17976_17980 = G__17997;
i__17977_17981 = G__17998;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17968_SHARP_,p2__17969_SHARP_){return f.call(null,p1__17968_SHARP_,p2__17969_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3429__auto__ = obj;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3429__auto____$1)
{return obj.length;
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__18000 = list_thing;if(G__18000)
{var bit__4091__auto__ = (G__18000.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__18000.cljs$core$ISeqable$))
{return true;
} else
{if((!G__18000.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18000);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18000);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__18001 = content;if(G__18001)
{var bit__4091__auto__ = (G__18001.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__18001.cljs$core$ISeqable$))
{return true;
} else
{if((!G__18001.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18001);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18001);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__18002 = content;if(G__18002)
{var bit__4091__auto__ = (G__18002.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__18002.cljs$core$ISeqable$))
{return true;
} else
{if((!G__18002.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18002);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18002);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
