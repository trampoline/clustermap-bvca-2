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
var opt_wrapper_17549 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17550 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17551 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_17550,table_section_wrapper_17550,opt_wrapper_17549,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_17551,table_section_wrapper_17550,cell_wrapper_17551,opt_wrapper_17549,table_section_wrapper_17550,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_17550]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17556 = cljs.core.seq.call(null,tbody);var chunk__17557 = null;var count__17558 = 0;var i__17559 = 0;while(true){
if((i__17559 < count__17558))
{var child = cljs.core._nth.call(null,chunk__17557,i__17559);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17560 = seq__17556;
var G__17561 = chunk__17557;
var G__17562 = count__17558;
var G__17563 = (i__17559 + 1);
seq__17556 = G__17560;
chunk__17557 = G__17561;
count__17558 = G__17562;
i__17559 = G__17563;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17556);if(temp__4092__auto__)
{var seq__17556__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17556__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__17556__$1);{
var G__17564 = cljs.core.chunk_rest.call(null,seq__17556__$1);
var G__17565 = c__4189__auto__;
var G__17566 = cljs.core.count.call(null,c__4189__auto__);
var G__17567 = 0;
seq__17556 = G__17564;
chunk__17557 = G__17565;
count__17558 = G__17566;
i__17559 = G__17567;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17556__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17568 = cljs.core.next.call(null,seq__17556__$1);
var G__17569 = null;
var G__17570 = 0;
var G__17571 = 0;
seq__17556 = G__17568;
chunk__17557 = G__17569;
count__17558 = G__17570;
i__17559 = G__17571;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__17573 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17573,0,null);var start_wrap = cljs.core.nth.call(null,vec__17573,1,null);var end_wrap = cljs.core.nth.call(null,vec__17573,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17574 = wrapper.lastChild;
var G__17575 = (level - 1);
wrapper = G__17574;
level = G__17575;
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
domina.DomContent = (function (){var obj17577 = {};return obj17577;
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
log_debug.cljs$lang$applyTo = (function (arglist__17578){
var mesg = cljs.core.seq(arglist__17578);
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
log.cljs$lang$applyTo = (function (arglist__17579){
var mesg = cljs.core.seq(arglist__17579);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__17580){
var contents = cljs.core.seq(arglist__17580);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17581_SHARP_){return p1__17581_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17582_SHARP_,p2__17583_SHARP_){return goog.dom.insertChildAt(p1__17582_SHARP_,p2__17583_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17585_SHARP_,p2__17584_SHARP_){return goog.dom.insertSiblingBefore(p2__17584_SHARP_,p1__17585_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17587_SHARP_,p2__17586_SHARP_){return goog.dom.insertSiblingAfter(p2__17586_SHARP_,p1__17587_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17589_SHARP_,p2__17588_SHARP_){return goog.dom.replaceNode(p2__17588_SHARP_,p1__17589_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__17594_17598 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17595_17599 = null;var count__17596_17600 = 0;var i__17597_17601 = 0;while(true){
if((i__17597_17601 < count__17596_17600))
{var n_17602 = cljs.core._nth.call(null,chunk__17595_17599,i__17597_17601);goog.style.setStyle(n_17602,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17603 = seq__17594_17598;
var G__17604 = chunk__17595_17599;
var G__17605 = count__17596_17600;
var G__17606 = (i__17597_17601 + 1);
seq__17594_17598 = G__17603;
chunk__17595_17599 = G__17604;
count__17596_17600 = G__17605;
i__17597_17601 = G__17606;
continue;
}
} else
{var temp__4092__auto___17607 = cljs.core.seq.call(null,seq__17594_17598);if(temp__4092__auto___17607)
{var seq__17594_17608__$1 = temp__4092__auto___17607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17594_17608__$1))
{var c__4189__auto___17609 = cljs.core.chunk_first.call(null,seq__17594_17608__$1);{
var G__17610 = cljs.core.chunk_rest.call(null,seq__17594_17608__$1);
var G__17611 = c__4189__auto___17609;
var G__17612 = cljs.core.count.call(null,c__4189__auto___17609);
var G__17613 = 0;
seq__17594_17598 = G__17610;
chunk__17595_17599 = G__17611;
count__17596_17600 = G__17612;
i__17597_17601 = G__17613;
continue;
}
} else
{var n_17614 = cljs.core.first.call(null,seq__17594_17608__$1);goog.style.setStyle(n_17614,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17615 = cljs.core.next.call(null,seq__17594_17608__$1);
var G__17616 = null;
var G__17617 = 0;
var G__17618 = 0;
seq__17594_17598 = G__17615;
chunk__17595_17599 = G__17616;
count__17596_17600 = G__17617;
i__17597_17601 = G__17618;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17619){
var content = cljs.core.first(arglist__17619);
arglist__17619 = cljs.core.next(arglist__17619);
var name = cljs.core.first(arglist__17619);
var value = cljs.core.rest(arglist__17619);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__17624_17628 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17625_17629 = null;var count__17626_17630 = 0;var i__17627_17631 = 0;while(true){
if((i__17627_17631 < count__17626_17630))
{var n_17632 = cljs.core._nth.call(null,chunk__17625_17629,i__17627_17631);n_17632.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17633 = seq__17624_17628;
var G__17634 = chunk__17625_17629;
var G__17635 = count__17626_17630;
var G__17636 = (i__17627_17631 + 1);
seq__17624_17628 = G__17633;
chunk__17625_17629 = G__17634;
count__17626_17630 = G__17635;
i__17627_17631 = G__17636;
continue;
}
} else
{var temp__4092__auto___17637 = cljs.core.seq.call(null,seq__17624_17628);if(temp__4092__auto___17637)
{var seq__17624_17638__$1 = temp__4092__auto___17637;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17624_17638__$1))
{var c__4189__auto___17639 = cljs.core.chunk_first.call(null,seq__17624_17638__$1);{
var G__17640 = cljs.core.chunk_rest.call(null,seq__17624_17638__$1);
var G__17641 = c__4189__auto___17639;
var G__17642 = cljs.core.count.call(null,c__4189__auto___17639);
var G__17643 = 0;
seq__17624_17628 = G__17640;
chunk__17625_17629 = G__17641;
count__17626_17630 = G__17642;
i__17627_17631 = G__17643;
continue;
}
} else
{var n_17644 = cljs.core.first.call(null,seq__17624_17638__$1);n_17644.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17645 = cljs.core.next.call(null,seq__17624_17638__$1);
var G__17646 = null;
var G__17647 = 0;
var G__17648 = 0;
seq__17624_17628 = G__17645;
chunk__17625_17629 = G__17646;
count__17626_17630 = G__17647;
i__17627_17631 = G__17648;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17649){
var content = cljs.core.first(arglist__17649);
arglist__17649 = cljs.core.next(arglist__17649);
var name = cljs.core.first(arglist__17649);
var value = cljs.core.rest(arglist__17649);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17654_17658 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17655_17659 = null;var count__17656_17660 = 0;var i__17657_17661 = 0;while(true){
if((i__17657_17661 < count__17656_17660))
{var n_17662 = cljs.core._nth.call(null,chunk__17655_17659,i__17657_17661);n_17662.removeAttribute(cljs.core.name.call(null,name));
{
var G__17663 = seq__17654_17658;
var G__17664 = chunk__17655_17659;
var G__17665 = count__17656_17660;
var G__17666 = (i__17657_17661 + 1);
seq__17654_17658 = G__17663;
chunk__17655_17659 = G__17664;
count__17656_17660 = G__17665;
i__17657_17661 = G__17666;
continue;
}
} else
{var temp__4092__auto___17667 = cljs.core.seq.call(null,seq__17654_17658);if(temp__4092__auto___17667)
{var seq__17654_17668__$1 = temp__4092__auto___17667;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17654_17668__$1))
{var c__4189__auto___17669 = cljs.core.chunk_first.call(null,seq__17654_17668__$1);{
var G__17670 = cljs.core.chunk_rest.call(null,seq__17654_17668__$1);
var G__17671 = c__4189__auto___17669;
var G__17672 = cljs.core.count.call(null,c__4189__auto___17669);
var G__17673 = 0;
seq__17654_17658 = G__17670;
chunk__17655_17659 = G__17671;
count__17656_17660 = G__17672;
i__17657_17661 = G__17673;
continue;
}
} else
{var n_17674 = cljs.core.first.call(null,seq__17654_17668__$1);n_17674.removeAttribute(cljs.core.name.call(null,name));
{
var G__17675 = cljs.core.next.call(null,seq__17654_17668__$1);
var G__17676 = null;
var G__17677 = 0;
var G__17678 = 0;
seq__17654_17658 = G__17675;
chunk__17655_17659 = G__17676;
count__17656_17660 = G__17677;
i__17657_17661 = G__17678;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17680 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17680,0,null);var v = cljs.core.nth.call(null,vec__17680,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17681_SHARP_){var attr = attrs__$1.item(p1__17681_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17688_17694 = cljs.core.seq.call(null,styles);var chunk__17689_17695 = null;var count__17690_17696 = 0;var i__17691_17697 = 0;while(true){
if((i__17691_17697 < count__17690_17696))
{var vec__17692_17698 = cljs.core._nth.call(null,chunk__17689_17695,i__17691_17697);var name_17699 = cljs.core.nth.call(null,vec__17692_17698,0,null);var value_17700 = cljs.core.nth.call(null,vec__17692_17698,1,null);domina.set_style_BANG_.call(null,content,name_17699,value_17700);
{
var G__17701 = seq__17688_17694;
var G__17702 = chunk__17689_17695;
var G__17703 = count__17690_17696;
var G__17704 = (i__17691_17697 + 1);
seq__17688_17694 = G__17701;
chunk__17689_17695 = G__17702;
count__17690_17696 = G__17703;
i__17691_17697 = G__17704;
continue;
}
} else
{var temp__4092__auto___17705 = cljs.core.seq.call(null,seq__17688_17694);if(temp__4092__auto___17705)
{var seq__17688_17706__$1 = temp__4092__auto___17705;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17688_17706__$1))
{var c__4189__auto___17707 = cljs.core.chunk_first.call(null,seq__17688_17706__$1);{
var G__17708 = cljs.core.chunk_rest.call(null,seq__17688_17706__$1);
var G__17709 = c__4189__auto___17707;
var G__17710 = cljs.core.count.call(null,c__4189__auto___17707);
var G__17711 = 0;
seq__17688_17694 = G__17708;
chunk__17689_17695 = G__17709;
count__17690_17696 = G__17710;
i__17691_17697 = G__17711;
continue;
}
} else
{var vec__17693_17712 = cljs.core.first.call(null,seq__17688_17706__$1);var name_17713 = cljs.core.nth.call(null,vec__17693_17712,0,null);var value_17714 = cljs.core.nth.call(null,vec__17693_17712,1,null);domina.set_style_BANG_.call(null,content,name_17713,value_17714);
{
var G__17715 = cljs.core.next.call(null,seq__17688_17706__$1);
var G__17716 = null;
var G__17717 = 0;
var G__17718 = 0;
seq__17688_17694 = G__17715;
chunk__17689_17695 = G__17716;
count__17690_17696 = G__17717;
i__17691_17697 = G__17718;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17725_17731 = cljs.core.seq.call(null,attrs);var chunk__17726_17732 = null;var count__17727_17733 = 0;var i__17728_17734 = 0;while(true){
if((i__17728_17734 < count__17727_17733))
{var vec__17729_17735 = cljs.core._nth.call(null,chunk__17726_17732,i__17728_17734);var name_17736 = cljs.core.nth.call(null,vec__17729_17735,0,null);var value_17737 = cljs.core.nth.call(null,vec__17729_17735,1,null);domina.set_attr_BANG_.call(null,content,name_17736,value_17737);
{
var G__17738 = seq__17725_17731;
var G__17739 = chunk__17726_17732;
var G__17740 = count__17727_17733;
var G__17741 = (i__17728_17734 + 1);
seq__17725_17731 = G__17738;
chunk__17726_17732 = G__17739;
count__17727_17733 = G__17740;
i__17728_17734 = G__17741;
continue;
}
} else
{var temp__4092__auto___17742 = cljs.core.seq.call(null,seq__17725_17731);if(temp__4092__auto___17742)
{var seq__17725_17743__$1 = temp__4092__auto___17742;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17725_17743__$1))
{var c__4189__auto___17744 = cljs.core.chunk_first.call(null,seq__17725_17743__$1);{
var G__17745 = cljs.core.chunk_rest.call(null,seq__17725_17743__$1);
var G__17746 = c__4189__auto___17744;
var G__17747 = cljs.core.count.call(null,c__4189__auto___17744);
var G__17748 = 0;
seq__17725_17731 = G__17745;
chunk__17726_17732 = G__17746;
count__17727_17733 = G__17747;
i__17728_17734 = G__17748;
continue;
}
} else
{var vec__17730_17749 = cljs.core.first.call(null,seq__17725_17743__$1);var name_17750 = cljs.core.nth.call(null,vec__17730_17749,0,null);var value_17751 = cljs.core.nth.call(null,vec__17730_17749,1,null);domina.set_attr_BANG_.call(null,content,name_17750,value_17751);
{
var G__17752 = cljs.core.next.call(null,seq__17725_17743__$1);
var G__17753 = null;
var G__17754 = 0;
var G__17755 = 0;
seq__17725_17731 = G__17752;
chunk__17726_17732 = G__17753;
count__17727_17733 = G__17754;
i__17728_17734 = G__17755;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17760_17764 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17761_17765 = null;var count__17762_17766 = 0;var i__17763_17767 = 0;while(true){
if((i__17763_17767 < count__17762_17766))
{var node_17768 = cljs.core._nth.call(null,chunk__17761_17765,i__17763_17767);goog.dom.classes.add(node_17768,class$);
{
var G__17769 = seq__17760_17764;
var G__17770 = chunk__17761_17765;
var G__17771 = count__17762_17766;
var G__17772 = (i__17763_17767 + 1);
seq__17760_17764 = G__17769;
chunk__17761_17765 = G__17770;
count__17762_17766 = G__17771;
i__17763_17767 = G__17772;
continue;
}
} else
{var temp__4092__auto___17773 = cljs.core.seq.call(null,seq__17760_17764);if(temp__4092__auto___17773)
{var seq__17760_17774__$1 = temp__4092__auto___17773;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17760_17774__$1))
{var c__4189__auto___17775 = cljs.core.chunk_first.call(null,seq__17760_17774__$1);{
var G__17776 = cljs.core.chunk_rest.call(null,seq__17760_17774__$1);
var G__17777 = c__4189__auto___17775;
var G__17778 = cljs.core.count.call(null,c__4189__auto___17775);
var G__17779 = 0;
seq__17760_17764 = G__17776;
chunk__17761_17765 = G__17777;
count__17762_17766 = G__17778;
i__17763_17767 = G__17779;
continue;
}
} else
{var node_17780 = cljs.core.first.call(null,seq__17760_17774__$1);goog.dom.classes.add(node_17780,class$);
{
var G__17781 = cljs.core.next.call(null,seq__17760_17774__$1);
var G__17782 = null;
var G__17783 = 0;
var G__17784 = 0;
seq__17760_17764 = G__17781;
chunk__17761_17765 = G__17782;
count__17762_17766 = G__17783;
i__17763_17767 = G__17784;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17789_17793 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17790_17794 = null;var count__17791_17795 = 0;var i__17792_17796 = 0;while(true){
if((i__17792_17796 < count__17791_17795))
{var node_17797 = cljs.core._nth.call(null,chunk__17790_17794,i__17792_17796);goog.dom.classes.remove(node_17797,class$);
{
var G__17798 = seq__17789_17793;
var G__17799 = chunk__17790_17794;
var G__17800 = count__17791_17795;
var G__17801 = (i__17792_17796 + 1);
seq__17789_17793 = G__17798;
chunk__17790_17794 = G__17799;
count__17791_17795 = G__17800;
i__17792_17796 = G__17801;
continue;
}
} else
{var temp__4092__auto___17802 = cljs.core.seq.call(null,seq__17789_17793);if(temp__4092__auto___17802)
{var seq__17789_17803__$1 = temp__4092__auto___17802;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17789_17803__$1))
{var c__4189__auto___17804 = cljs.core.chunk_first.call(null,seq__17789_17803__$1);{
var G__17805 = cljs.core.chunk_rest.call(null,seq__17789_17803__$1);
var G__17806 = c__4189__auto___17804;
var G__17807 = cljs.core.count.call(null,c__4189__auto___17804);
var G__17808 = 0;
seq__17789_17793 = G__17805;
chunk__17790_17794 = G__17806;
count__17791_17795 = G__17807;
i__17792_17796 = G__17808;
continue;
}
} else
{var node_17809 = cljs.core.first.call(null,seq__17789_17803__$1);goog.dom.classes.remove(node_17809,class$);
{
var G__17810 = cljs.core.next.call(null,seq__17789_17803__$1);
var G__17811 = null;
var G__17812 = 0;
var G__17813 = 0;
seq__17789_17793 = G__17810;
chunk__17790_17794 = G__17811;
count__17791_17795 = G__17812;
i__17792_17796 = G__17813;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17818_17822 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17819_17823 = null;var count__17820_17824 = 0;var i__17821_17825 = 0;while(true){
if((i__17821_17825 < count__17820_17824))
{var node_17826 = cljs.core._nth.call(null,chunk__17819_17823,i__17821_17825);goog.dom.classes.toggle(node_17826,class$);
{
var G__17827 = seq__17818_17822;
var G__17828 = chunk__17819_17823;
var G__17829 = count__17820_17824;
var G__17830 = (i__17821_17825 + 1);
seq__17818_17822 = G__17827;
chunk__17819_17823 = G__17828;
count__17820_17824 = G__17829;
i__17821_17825 = G__17830;
continue;
}
} else
{var temp__4092__auto___17831 = cljs.core.seq.call(null,seq__17818_17822);if(temp__4092__auto___17831)
{var seq__17818_17832__$1 = temp__4092__auto___17831;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17818_17832__$1))
{var c__4189__auto___17833 = cljs.core.chunk_first.call(null,seq__17818_17832__$1);{
var G__17834 = cljs.core.chunk_rest.call(null,seq__17818_17832__$1);
var G__17835 = c__4189__auto___17833;
var G__17836 = cljs.core.count.call(null,c__4189__auto___17833);
var G__17837 = 0;
seq__17818_17822 = G__17834;
chunk__17819_17823 = G__17835;
count__17820_17824 = G__17836;
i__17821_17825 = G__17837;
continue;
}
} else
{var node_17838 = cljs.core.first.call(null,seq__17818_17832__$1);goog.dom.classes.toggle(node_17838,class$);
{
var G__17839 = cljs.core.next.call(null,seq__17818_17832__$1);
var G__17840 = null;
var G__17841 = 0;
var G__17842 = 0;
seq__17818_17822 = G__17839;
chunk__17819_17823 = G__17840;
count__17820_17824 = G__17841;
i__17821_17825 = G__17842;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17851__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17847_17852 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17848_17853 = null;var count__17849_17854 = 0;var i__17850_17855 = 0;while(true){
if((i__17850_17855 < count__17849_17854))
{var node_17856 = cljs.core._nth.call(null,chunk__17848_17853,i__17850_17855);goog.dom.classes.set(node_17856,classes_17851__$1);
{
var G__17857 = seq__17847_17852;
var G__17858 = chunk__17848_17853;
var G__17859 = count__17849_17854;
var G__17860 = (i__17850_17855 + 1);
seq__17847_17852 = G__17857;
chunk__17848_17853 = G__17858;
count__17849_17854 = G__17859;
i__17850_17855 = G__17860;
continue;
}
} else
{var temp__4092__auto___17861 = cljs.core.seq.call(null,seq__17847_17852);if(temp__4092__auto___17861)
{var seq__17847_17862__$1 = temp__4092__auto___17861;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17847_17862__$1))
{var c__4189__auto___17863 = cljs.core.chunk_first.call(null,seq__17847_17862__$1);{
var G__17864 = cljs.core.chunk_rest.call(null,seq__17847_17862__$1);
var G__17865 = c__4189__auto___17863;
var G__17866 = cljs.core.count.call(null,c__4189__auto___17863);
var G__17867 = 0;
seq__17847_17852 = G__17864;
chunk__17848_17853 = G__17865;
count__17849_17854 = G__17866;
i__17850_17855 = G__17867;
continue;
}
} else
{var node_17868 = cljs.core.first.call(null,seq__17847_17862__$1);goog.dom.classes.set(node_17868,classes_17851__$1);
{
var G__17869 = cljs.core.next.call(null,seq__17847_17862__$1);
var G__17870 = null;
var G__17871 = 0;
var G__17872 = 0;
seq__17847_17852 = G__17869;
chunk__17848_17853 = G__17870;
count__17849_17854 = G__17871;
i__17850_17855 = G__17872;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17877_17881 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17878_17882 = null;var count__17879_17883 = 0;var i__17880_17884 = 0;while(true){
if((i__17880_17884 < count__17879_17883))
{var node_17885 = cljs.core._nth.call(null,chunk__17878_17882,i__17880_17884);goog.dom.setTextContent(node_17885,value);
{
var G__17886 = seq__17877_17881;
var G__17887 = chunk__17878_17882;
var G__17888 = count__17879_17883;
var G__17889 = (i__17880_17884 + 1);
seq__17877_17881 = G__17886;
chunk__17878_17882 = G__17887;
count__17879_17883 = G__17888;
i__17880_17884 = G__17889;
continue;
}
} else
{var temp__4092__auto___17890 = cljs.core.seq.call(null,seq__17877_17881);if(temp__4092__auto___17890)
{var seq__17877_17891__$1 = temp__4092__auto___17890;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17877_17891__$1))
{var c__4189__auto___17892 = cljs.core.chunk_first.call(null,seq__17877_17891__$1);{
var G__17893 = cljs.core.chunk_rest.call(null,seq__17877_17891__$1);
var G__17894 = c__4189__auto___17892;
var G__17895 = cljs.core.count.call(null,c__4189__auto___17892);
var G__17896 = 0;
seq__17877_17881 = G__17893;
chunk__17878_17882 = G__17894;
count__17879_17883 = G__17895;
i__17880_17884 = G__17896;
continue;
}
} else
{var node_17897 = cljs.core.first.call(null,seq__17877_17891__$1);goog.dom.setTextContent(node_17897,value);
{
var G__17898 = cljs.core.next.call(null,seq__17877_17891__$1);
var G__17899 = null;
var G__17900 = 0;
var G__17901 = 0;
seq__17877_17881 = G__17898;
chunk__17878_17882 = G__17899;
count__17879_17883 = G__17900;
i__17880_17884 = G__17901;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17906_17910 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17907_17911 = null;var count__17908_17912 = 0;var i__17909_17913 = 0;while(true){
if((i__17909_17913 < count__17908_17912))
{var node_17914 = cljs.core._nth.call(null,chunk__17907_17911,i__17909_17913);goog.dom.forms.setValue(node_17914,value);
{
var G__17915 = seq__17906_17910;
var G__17916 = chunk__17907_17911;
var G__17917 = count__17908_17912;
var G__17918 = (i__17909_17913 + 1);
seq__17906_17910 = G__17915;
chunk__17907_17911 = G__17916;
count__17908_17912 = G__17917;
i__17909_17913 = G__17918;
continue;
}
} else
{var temp__4092__auto___17919 = cljs.core.seq.call(null,seq__17906_17910);if(temp__4092__auto___17919)
{var seq__17906_17920__$1 = temp__4092__auto___17919;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17906_17920__$1))
{var c__4189__auto___17921 = cljs.core.chunk_first.call(null,seq__17906_17920__$1);{
var G__17922 = cljs.core.chunk_rest.call(null,seq__17906_17920__$1);
var G__17923 = c__4189__auto___17921;
var G__17924 = cljs.core.count.call(null,c__4189__auto___17921);
var G__17925 = 0;
seq__17906_17910 = G__17922;
chunk__17907_17911 = G__17923;
count__17908_17912 = G__17924;
i__17909_17913 = G__17925;
continue;
}
} else
{var node_17926 = cljs.core.first.call(null,seq__17906_17920__$1);goog.dom.forms.setValue(node_17926,value);
{
var G__17927 = cljs.core.next.call(null,seq__17906_17920__$1);
var G__17928 = null;
var G__17929 = 0;
var G__17930 = 0;
seq__17906_17910 = G__17927;
chunk__17907_17911 = G__17928;
count__17908_17912 = G__17929;
i__17909_17913 = G__17930;
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
{var value_17941 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17937_17942 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17938_17943 = null;var count__17939_17944 = 0;var i__17940_17945 = 0;while(true){
if((i__17940_17945 < count__17939_17944))
{var node_17946 = cljs.core._nth.call(null,chunk__17938_17943,i__17940_17945);node_17946.innerHTML = value_17941;
{
var G__17947 = seq__17937_17942;
var G__17948 = chunk__17938_17943;
var G__17949 = count__17939_17944;
var G__17950 = (i__17940_17945 + 1);
seq__17937_17942 = G__17947;
chunk__17938_17943 = G__17948;
count__17939_17944 = G__17949;
i__17940_17945 = G__17950;
continue;
}
} else
{var temp__4092__auto___17951 = cljs.core.seq.call(null,seq__17937_17942);if(temp__4092__auto___17951)
{var seq__17937_17952__$1 = temp__4092__auto___17951;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17937_17952__$1))
{var c__4189__auto___17953 = cljs.core.chunk_first.call(null,seq__17937_17952__$1);{
var G__17954 = cljs.core.chunk_rest.call(null,seq__17937_17952__$1);
var G__17955 = c__4189__auto___17953;
var G__17956 = cljs.core.count.call(null,c__4189__auto___17953);
var G__17957 = 0;
seq__17937_17942 = G__17954;
chunk__17938_17943 = G__17955;
count__17939_17944 = G__17956;
i__17940_17945 = G__17957;
continue;
}
} else
{var node_17958 = cljs.core.first.call(null,seq__17937_17952__$1);node_17958.innerHTML = value_17941;
{
var G__17959 = cljs.core.next.call(null,seq__17937_17952__$1);
var G__17960 = null;
var G__17961 = 0;
var G__17962 = 0;
seq__17937_17942 = G__17959;
chunk__17938_17943 = G__17960;
count__17939_17944 = G__17961;
i__17940_17945 = G__17962;
continue;
}
}
} else
{}
}
break;
}
}catch (e17936){if((e17936 instanceof Error))
{var e_17963 = e17936;domina.replace_children_BANG_.call(null,content,value_17941);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17936;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17970_17974 = cljs.core.seq.call(null,children);var chunk__17971_17975 = null;var count__17972_17976 = 0;var i__17973_17977 = 0;while(true){
if((i__17973_17977 < count__17972_17976))
{var child_17978 = cljs.core._nth.call(null,chunk__17971_17975,i__17973_17977);frag.appendChild(child_17978);
{
var G__17979 = seq__17970_17974;
var G__17980 = chunk__17971_17975;
var G__17981 = count__17972_17976;
var G__17982 = (i__17973_17977 + 1);
seq__17970_17974 = G__17979;
chunk__17971_17975 = G__17980;
count__17972_17976 = G__17981;
i__17973_17977 = G__17982;
continue;
}
} else
{var temp__4092__auto___17983 = cljs.core.seq.call(null,seq__17970_17974);if(temp__4092__auto___17983)
{var seq__17970_17984__$1 = temp__4092__auto___17983;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17970_17984__$1))
{var c__4189__auto___17985 = cljs.core.chunk_first.call(null,seq__17970_17984__$1);{
var G__17986 = cljs.core.chunk_rest.call(null,seq__17970_17984__$1);
var G__17987 = c__4189__auto___17985;
var G__17988 = cljs.core.count.call(null,c__4189__auto___17985);
var G__17989 = 0;
seq__17970_17974 = G__17986;
chunk__17971_17975 = G__17987;
count__17972_17976 = G__17988;
i__17973_17977 = G__17989;
continue;
}
} else
{var child_17990 = cljs.core.first.call(null,seq__17970_17984__$1);frag.appendChild(child_17990);
{
var G__17991 = cljs.core.next.call(null,seq__17970_17984__$1);
var G__17992 = null;
var G__17993 = 0;
var G__17994 = 0;
seq__17970_17974 = G__17991;
chunk__17971_17975 = G__17992;
count__17972_17976 = G__17993;
i__17973_17977 = G__17994;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17964_SHARP_,p2__17965_SHARP_){return f.call(null,p1__17964_SHARP_,p2__17965_SHARP_);
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
{if((function (){var G__17996 = list_thing;if(G__17996)
{var bit__4091__auto__ = (G__17996.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__17996.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17996.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17996);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17996);
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
{if((function (){var G__17997 = content;if(G__17997)
{var bit__4091__auto__ = (G__17997.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__17997.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17997.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17997);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17997);
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
{if((function (){var G__17998 = content;if(G__17998)
{var bit__4091__auto__ = (G__17998.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__17998.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17998.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17998);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17998);
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
