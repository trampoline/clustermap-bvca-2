// Compiled by ClojureScript 0.0-2322
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_37569 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_37570 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_37571 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_37571,opt_wrapper_37569,table_section_wrapper_37570,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_37569,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_37570,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_37570,cell_wrapper_37571,table_section_wrapper_37570,table_section_wrapper_37570]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__37576 = cljs.core.seq.call(null,tbody);var chunk__37577 = null;var count__37578 = (0);var i__37579 = (0);while(true){
if((i__37579 < count__37578))
{var child = cljs.core._nth.call(null,chunk__37577,i__37579);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37580 = seq__37576;
var G__37581 = chunk__37577;
var G__37582 = count__37578;
var G__37583 = (i__37579 + (1));
seq__37576 = G__37580;
chunk__37577 = G__37581;
count__37578 = G__37582;
i__37579 = G__37583;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__37576);if(temp__4126__auto__)
{var seq__37576__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37576__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__37576__$1);{
var G__37584 = cljs.core.chunk_rest.call(null,seq__37576__$1);
var G__37585 = c__4314__auto__;
var G__37586 = cljs.core.count.call(null,c__4314__auto__);
var G__37587 = (0);
seq__37576 = G__37584;
chunk__37577 = G__37585;
count__37578 = G__37586;
i__37579 = G__37587;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__37576__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37588 = cljs.core.next.call(null,seq__37576__$1);
var G__37589 = null;
var G__37590 = (0);
var G__37591 = (0);
seq__37576 = G__37588;
chunk__37577 = G__37589;
count__37578 = G__37590;
i__37579 = G__37591;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__37593 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__37593,(0),null);var start_wrap = cljs.core.nth.call(null,vec__37593,(1),null);var end_wrap = cljs.core.nth.call(null,vec__37593,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__37594 = wrapper.lastChild;
var G__37595 = (level - (1));
wrapper = G__37594;
level = G__37595;
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
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
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
domina.DomContent = (function (){var obj37597 = {};return obj37597;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__37598){
var mesg = cljs.core.seq(arglist__37598);
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
log.cljs$lang$applyTo = (function (arglist__37599){
var mesg = cljs.core.seq(arglist__37599);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__37600){
var contents = cljs.core.seq(arglist__37600);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__37601_SHARP_){return p1__37601_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__37602_SHARP_,p2__37603_SHARP_){return goog.dom.insertChildAt(p1__37602_SHARP_,p2__37603_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37605_SHARP_,p2__37604_SHARP_){return goog.dom.insertSiblingBefore(p2__37604_SHARP_,p1__37605_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37607_SHARP_,p2__37606_SHARP_){return goog.dom.insertSiblingAfter(p2__37606_SHARP_,p1__37607_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__37609_SHARP_,p2__37608_SHARP_){return goog.dom.replaceNode(p2__37608_SHARP_,p1__37609_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__37614_37618 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37615_37619 = null;var count__37616_37620 = (0);var i__37617_37621 = (0);while(true){
if((i__37617_37621 < count__37616_37620))
{var n_37622 = cljs.core._nth.call(null,chunk__37615_37619,i__37617_37621);goog.style.setStyle(n_37622,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37623 = seq__37614_37618;
var G__37624 = chunk__37615_37619;
var G__37625 = count__37616_37620;
var G__37626 = (i__37617_37621 + (1));
seq__37614_37618 = G__37623;
chunk__37615_37619 = G__37624;
count__37616_37620 = G__37625;
i__37617_37621 = G__37626;
continue;
}
} else
{var temp__4126__auto___37627 = cljs.core.seq.call(null,seq__37614_37618);if(temp__4126__auto___37627)
{var seq__37614_37628__$1 = temp__4126__auto___37627;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37614_37628__$1))
{var c__4314__auto___37629 = cljs.core.chunk_first.call(null,seq__37614_37628__$1);{
var G__37630 = cljs.core.chunk_rest.call(null,seq__37614_37628__$1);
var G__37631 = c__4314__auto___37629;
var G__37632 = cljs.core.count.call(null,c__4314__auto___37629);
var G__37633 = (0);
seq__37614_37618 = G__37630;
chunk__37615_37619 = G__37631;
count__37616_37620 = G__37632;
i__37617_37621 = G__37633;
continue;
}
} else
{var n_37634 = cljs.core.first.call(null,seq__37614_37628__$1);goog.style.setStyle(n_37634,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37635 = cljs.core.next.call(null,seq__37614_37628__$1);
var G__37636 = null;
var G__37637 = (0);
var G__37638 = (0);
seq__37614_37618 = G__37635;
chunk__37615_37619 = G__37636;
count__37616_37620 = G__37637;
i__37617_37621 = G__37638;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__37639){
var content = cljs.core.first(arglist__37639);
arglist__37639 = cljs.core.next(arglist__37639);
var name = cljs.core.first(arglist__37639);
var value = cljs.core.rest(arglist__37639);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__37644_37648 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37645_37649 = null;var count__37646_37650 = (0);var i__37647_37651 = (0);while(true){
if((i__37647_37651 < count__37646_37650))
{var n_37652 = cljs.core._nth.call(null,chunk__37645_37649,i__37647_37651);n_37652.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37653 = seq__37644_37648;
var G__37654 = chunk__37645_37649;
var G__37655 = count__37646_37650;
var G__37656 = (i__37647_37651 + (1));
seq__37644_37648 = G__37653;
chunk__37645_37649 = G__37654;
count__37646_37650 = G__37655;
i__37647_37651 = G__37656;
continue;
}
} else
{var temp__4126__auto___37657 = cljs.core.seq.call(null,seq__37644_37648);if(temp__4126__auto___37657)
{var seq__37644_37658__$1 = temp__4126__auto___37657;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37644_37658__$1))
{var c__4314__auto___37659 = cljs.core.chunk_first.call(null,seq__37644_37658__$1);{
var G__37660 = cljs.core.chunk_rest.call(null,seq__37644_37658__$1);
var G__37661 = c__4314__auto___37659;
var G__37662 = cljs.core.count.call(null,c__4314__auto___37659);
var G__37663 = (0);
seq__37644_37648 = G__37660;
chunk__37645_37649 = G__37661;
count__37646_37650 = G__37662;
i__37647_37651 = G__37663;
continue;
}
} else
{var n_37664 = cljs.core.first.call(null,seq__37644_37658__$1);n_37664.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37665 = cljs.core.next.call(null,seq__37644_37658__$1);
var G__37666 = null;
var G__37667 = (0);
var G__37668 = (0);
seq__37644_37648 = G__37665;
chunk__37645_37649 = G__37666;
count__37646_37650 = G__37667;
i__37647_37651 = G__37668;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__37669){
var content = cljs.core.first(arglist__37669);
arglist__37669 = cljs.core.next(arglist__37669);
var name = cljs.core.first(arglist__37669);
var value = cljs.core.rest(arglist__37669);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__37674_37678 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37675_37679 = null;var count__37676_37680 = (0);var i__37677_37681 = (0);while(true){
if((i__37677_37681 < count__37676_37680))
{var n_37682 = cljs.core._nth.call(null,chunk__37675_37679,i__37677_37681);n_37682.removeAttribute(cljs.core.name.call(null,name));
{
var G__37683 = seq__37674_37678;
var G__37684 = chunk__37675_37679;
var G__37685 = count__37676_37680;
var G__37686 = (i__37677_37681 + (1));
seq__37674_37678 = G__37683;
chunk__37675_37679 = G__37684;
count__37676_37680 = G__37685;
i__37677_37681 = G__37686;
continue;
}
} else
{var temp__4126__auto___37687 = cljs.core.seq.call(null,seq__37674_37678);if(temp__4126__auto___37687)
{var seq__37674_37688__$1 = temp__4126__auto___37687;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37674_37688__$1))
{var c__4314__auto___37689 = cljs.core.chunk_first.call(null,seq__37674_37688__$1);{
var G__37690 = cljs.core.chunk_rest.call(null,seq__37674_37688__$1);
var G__37691 = c__4314__auto___37689;
var G__37692 = cljs.core.count.call(null,c__4314__auto___37689);
var G__37693 = (0);
seq__37674_37678 = G__37690;
chunk__37675_37679 = G__37691;
count__37676_37680 = G__37692;
i__37677_37681 = G__37693;
continue;
}
} else
{var n_37694 = cljs.core.first.call(null,seq__37674_37688__$1);n_37694.removeAttribute(cljs.core.name.call(null,name));
{
var G__37695 = cljs.core.next.call(null,seq__37674_37688__$1);
var G__37696 = null;
var G__37697 = (0);
var G__37698 = (0);
seq__37674_37678 = G__37695;
chunk__37675_37679 = G__37696;
count__37676_37680 = G__37697;
i__37677_37681 = G__37698;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__37700 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__37700,(0),null);var v = cljs.core.nth.call(null,vec__37700,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__37701_SHARP_){var attr = attrs__$1.item(p1__37701_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__37708_37714 = cljs.core.seq.call(null,styles);var chunk__37709_37715 = null;var count__37710_37716 = (0);var i__37711_37717 = (0);while(true){
if((i__37711_37717 < count__37710_37716))
{var vec__37712_37718 = cljs.core._nth.call(null,chunk__37709_37715,i__37711_37717);var name_37719 = cljs.core.nth.call(null,vec__37712_37718,(0),null);var value_37720 = cljs.core.nth.call(null,vec__37712_37718,(1),null);domina.set_style_BANG_.call(null,content,name_37719,value_37720);
{
var G__37721 = seq__37708_37714;
var G__37722 = chunk__37709_37715;
var G__37723 = count__37710_37716;
var G__37724 = (i__37711_37717 + (1));
seq__37708_37714 = G__37721;
chunk__37709_37715 = G__37722;
count__37710_37716 = G__37723;
i__37711_37717 = G__37724;
continue;
}
} else
{var temp__4126__auto___37725 = cljs.core.seq.call(null,seq__37708_37714);if(temp__4126__auto___37725)
{var seq__37708_37726__$1 = temp__4126__auto___37725;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37708_37726__$1))
{var c__4314__auto___37727 = cljs.core.chunk_first.call(null,seq__37708_37726__$1);{
var G__37728 = cljs.core.chunk_rest.call(null,seq__37708_37726__$1);
var G__37729 = c__4314__auto___37727;
var G__37730 = cljs.core.count.call(null,c__4314__auto___37727);
var G__37731 = (0);
seq__37708_37714 = G__37728;
chunk__37709_37715 = G__37729;
count__37710_37716 = G__37730;
i__37711_37717 = G__37731;
continue;
}
} else
{var vec__37713_37732 = cljs.core.first.call(null,seq__37708_37726__$1);var name_37733 = cljs.core.nth.call(null,vec__37713_37732,(0),null);var value_37734 = cljs.core.nth.call(null,vec__37713_37732,(1),null);domina.set_style_BANG_.call(null,content,name_37733,value_37734);
{
var G__37735 = cljs.core.next.call(null,seq__37708_37726__$1);
var G__37736 = null;
var G__37737 = (0);
var G__37738 = (0);
seq__37708_37714 = G__37735;
chunk__37709_37715 = G__37736;
count__37710_37716 = G__37737;
i__37711_37717 = G__37738;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__37745_37751 = cljs.core.seq.call(null,attrs);var chunk__37746_37752 = null;var count__37747_37753 = (0);var i__37748_37754 = (0);while(true){
if((i__37748_37754 < count__37747_37753))
{var vec__37749_37755 = cljs.core._nth.call(null,chunk__37746_37752,i__37748_37754);var name_37756 = cljs.core.nth.call(null,vec__37749_37755,(0),null);var value_37757 = cljs.core.nth.call(null,vec__37749_37755,(1),null);domina.set_attr_BANG_.call(null,content,name_37756,value_37757);
{
var G__37758 = seq__37745_37751;
var G__37759 = chunk__37746_37752;
var G__37760 = count__37747_37753;
var G__37761 = (i__37748_37754 + (1));
seq__37745_37751 = G__37758;
chunk__37746_37752 = G__37759;
count__37747_37753 = G__37760;
i__37748_37754 = G__37761;
continue;
}
} else
{var temp__4126__auto___37762 = cljs.core.seq.call(null,seq__37745_37751);if(temp__4126__auto___37762)
{var seq__37745_37763__$1 = temp__4126__auto___37762;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37745_37763__$1))
{var c__4314__auto___37764 = cljs.core.chunk_first.call(null,seq__37745_37763__$1);{
var G__37765 = cljs.core.chunk_rest.call(null,seq__37745_37763__$1);
var G__37766 = c__4314__auto___37764;
var G__37767 = cljs.core.count.call(null,c__4314__auto___37764);
var G__37768 = (0);
seq__37745_37751 = G__37765;
chunk__37746_37752 = G__37766;
count__37747_37753 = G__37767;
i__37748_37754 = G__37768;
continue;
}
} else
{var vec__37750_37769 = cljs.core.first.call(null,seq__37745_37763__$1);var name_37770 = cljs.core.nth.call(null,vec__37750_37769,(0),null);var value_37771 = cljs.core.nth.call(null,vec__37750_37769,(1),null);domina.set_attr_BANG_.call(null,content,name_37770,value_37771);
{
var G__37772 = cljs.core.next.call(null,seq__37745_37763__$1);
var G__37773 = null;
var G__37774 = (0);
var G__37775 = (0);
seq__37745_37751 = G__37772;
chunk__37746_37752 = G__37773;
count__37747_37753 = G__37774;
i__37748_37754 = G__37775;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__37780_37784 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37781_37785 = null;var count__37782_37786 = (0);var i__37783_37787 = (0);while(true){
if((i__37783_37787 < count__37782_37786))
{var node_37788 = cljs.core._nth.call(null,chunk__37781_37785,i__37783_37787);goog.dom.classes.add(node_37788,class$);
{
var G__37789 = seq__37780_37784;
var G__37790 = chunk__37781_37785;
var G__37791 = count__37782_37786;
var G__37792 = (i__37783_37787 + (1));
seq__37780_37784 = G__37789;
chunk__37781_37785 = G__37790;
count__37782_37786 = G__37791;
i__37783_37787 = G__37792;
continue;
}
} else
{var temp__4126__auto___37793 = cljs.core.seq.call(null,seq__37780_37784);if(temp__4126__auto___37793)
{var seq__37780_37794__$1 = temp__4126__auto___37793;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37780_37794__$1))
{var c__4314__auto___37795 = cljs.core.chunk_first.call(null,seq__37780_37794__$1);{
var G__37796 = cljs.core.chunk_rest.call(null,seq__37780_37794__$1);
var G__37797 = c__4314__auto___37795;
var G__37798 = cljs.core.count.call(null,c__4314__auto___37795);
var G__37799 = (0);
seq__37780_37784 = G__37796;
chunk__37781_37785 = G__37797;
count__37782_37786 = G__37798;
i__37783_37787 = G__37799;
continue;
}
} else
{var node_37800 = cljs.core.first.call(null,seq__37780_37794__$1);goog.dom.classes.add(node_37800,class$);
{
var G__37801 = cljs.core.next.call(null,seq__37780_37794__$1);
var G__37802 = null;
var G__37803 = (0);
var G__37804 = (0);
seq__37780_37784 = G__37801;
chunk__37781_37785 = G__37802;
count__37782_37786 = G__37803;
i__37783_37787 = G__37804;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__37809_37813 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37810_37814 = null;var count__37811_37815 = (0);var i__37812_37816 = (0);while(true){
if((i__37812_37816 < count__37811_37815))
{var node_37817 = cljs.core._nth.call(null,chunk__37810_37814,i__37812_37816);goog.dom.classes.remove(node_37817,class$);
{
var G__37818 = seq__37809_37813;
var G__37819 = chunk__37810_37814;
var G__37820 = count__37811_37815;
var G__37821 = (i__37812_37816 + (1));
seq__37809_37813 = G__37818;
chunk__37810_37814 = G__37819;
count__37811_37815 = G__37820;
i__37812_37816 = G__37821;
continue;
}
} else
{var temp__4126__auto___37822 = cljs.core.seq.call(null,seq__37809_37813);if(temp__4126__auto___37822)
{var seq__37809_37823__$1 = temp__4126__auto___37822;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37809_37823__$1))
{var c__4314__auto___37824 = cljs.core.chunk_first.call(null,seq__37809_37823__$1);{
var G__37825 = cljs.core.chunk_rest.call(null,seq__37809_37823__$1);
var G__37826 = c__4314__auto___37824;
var G__37827 = cljs.core.count.call(null,c__4314__auto___37824);
var G__37828 = (0);
seq__37809_37813 = G__37825;
chunk__37810_37814 = G__37826;
count__37811_37815 = G__37827;
i__37812_37816 = G__37828;
continue;
}
} else
{var node_37829 = cljs.core.first.call(null,seq__37809_37823__$1);goog.dom.classes.remove(node_37829,class$);
{
var G__37830 = cljs.core.next.call(null,seq__37809_37823__$1);
var G__37831 = null;
var G__37832 = (0);
var G__37833 = (0);
seq__37809_37813 = G__37830;
chunk__37810_37814 = G__37831;
count__37811_37815 = G__37832;
i__37812_37816 = G__37833;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__37838_37842 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37839_37843 = null;var count__37840_37844 = (0);var i__37841_37845 = (0);while(true){
if((i__37841_37845 < count__37840_37844))
{var node_37846 = cljs.core._nth.call(null,chunk__37839_37843,i__37841_37845);goog.dom.classes.toggle(node_37846,class$);
{
var G__37847 = seq__37838_37842;
var G__37848 = chunk__37839_37843;
var G__37849 = count__37840_37844;
var G__37850 = (i__37841_37845 + (1));
seq__37838_37842 = G__37847;
chunk__37839_37843 = G__37848;
count__37840_37844 = G__37849;
i__37841_37845 = G__37850;
continue;
}
} else
{var temp__4126__auto___37851 = cljs.core.seq.call(null,seq__37838_37842);if(temp__4126__auto___37851)
{var seq__37838_37852__$1 = temp__4126__auto___37851;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37838_37852__$1))
{var c__4314__auto___37853 = cljs.core.chunk_first.call(null,seq__37838_37852__$1);{
var G__37854 = cljs.core.chunk_rest.call(null,seq__37838_37852__$1);
var G__37855 = c__4314__auto___37853;
var G__37856 = cljs.core.count.call(null,c__4314__auto___37853);
var G__37857 = (0);
seq__37838_37842 = G__37854;
chunk__37839_37843 = G__37855;
count__37840_37844 = G__37856;
i__37841_37845 = G__37857;
continue;
}
} else
{var node_37858 = cljs.core.first.call(null,seq__37838_37852__$1);goog.dom.classes.toggle(node_37858,class$);
{
var G__37859 = cljs.core.next.call(null,seq__37838_37852__$1);
var G__37860 = null;
var G__37861 = (0);
var G__37862 = (0);
seq__37838_37842 = G__37859;
chunk__37839_37843 = G__37860;
count__37840_37844 = G__37861;
i__37841_37845 = G__37862;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_37871__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__37867_37872 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37868_37873 = null;var count__37869_37874 = (0);var i__37870_37875 = (0);while(true){
if((i__37870_37875 < count__37869_37874))
{var node_37876 = cljs.core._nth.call(null,chunk__37868_37873,i__37870_37875);goog.dom.classes.set(node_37876,classes_37871__$1);
{
var G__37877 = seq__37867_37872;
var G__37878 = chunk__37868_37873;
var G__37879 = count__37869_37874;
var G__37880 = (i__37870_37875 + (1));
seq__37867_37872 = G__37877;
chunk__37868_37873 = G__37878;
count__37869_37874 = G__37879;
i__37870_37875 = G__37880;
continue;
}
} else
{var temp__4126__auto___37881 = cljs.core.seq.call(null,seq__37867_37872);if(temp__4126__auto___37881)
{var seq__37867_37882__$1 = temp__4126__auto___37881;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37867_37882__$1))
{var c__4314__auto___37883 = cljs.core.chunk_first.call(null,seq__37867_37882__$1);{
var G__37884 = cljs.core.chunk_rest.call(null,seq__37867_37882__$1);
var G__37885 = c__4314__auto___37883;
var G__37886 = cljs.core.count.call(null,c__4314__auto___37883);
var G__37887 = (0);
seq__37867_37872 = G__37884;
chunk__37868_37873 = G__37885;
count__37869_37874 = G__37886;
i__37870_37875 = G__37887;
continue;
}
} else
{var node_37888 = cljs.core.first.call(null,seq__37867_37882__$1);goog.dom.classes.set(node_37888,classes_37871__$1);
{
var G__37889 = cljs.core.next.call(null,seq__37867_37882__$1);
var G__37890 = null;
var G__37891 = (0);
var G__37892 = (0);
seq__37867_37872 = G__37889;
chunk__37868_37873 = G__37890;
count__37869_37874 = G__37891;
i__37870_37875 = G__37892;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__37897_37901 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37898_37902 = null;var count__37899_37903 = (0);var i__37900_37904 = (0);while(true){
if((i__37900_37904 < count__37899_37903))
{var node_37905 = cljs.core._nth.call(null,chunk__37898_37902,i__37900_37904);goog.dom.setTextContent(node_37905,value);
{
var G__37906 = seq__37897_37901;
var G__37907 = chunk__37898_37902;
var G__37908 = count__37899_37903;
var G__37909 = (i__37900_37904 + (1));
seq__37897_37901 = G__37906;
chunk__37898_37902 = G__37907;
count__37899_37903 = G__37908;
i__37900_37904 = G__37909;
continue;
}
} else
{var temp__4126__auto___37910 = cljs.core.seq.call(null,seq__37897_37901);if(temp__4126__auto___37910)
{var seq__37897_37911__$1 = temp__4126__auto___37910;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37897_37911__$1))
{var c__4314__auto___37912 = cljs.core.chunk_first.call(null,seq__37897_37911__$1);{
var G__37913 = cljs.core.chunk_rest.call(null,seq__37897_37911__$1);
var G__37914 = c__4314__auto___37912;
var G__37915 = cljs.core.count.call(null,c__4314__auto___37912);
var G__37916 = (0);
seq__37897_37901 = G__37913;
chunk__37898_37902 = G__37914;
count__37899_37903 = G__37915;
i__37900_37904 = G__37916;
continue;
}
} else
{var node_37917 = cljs.core.first.call(null,seq__37897_37911__$1);goog.dom.setTextContent(node_37917,value);
{
var G__37918 = cljs.core.next.call(null,seq__37897_37911__$1);
var G__37919 = null;
var G__37920 = (0);
var G__37921 = (0);
seq__37897_37901 = G__37918;
chunk__37898_37902 = G__37919;
count__37899_37903 = G__37920;
i__37900_37904 = G__37921;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__37926_37930 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37927_37931 = null;var count__37928_37932 = (0);var i__37929_37933 = (0);while(true){
if((i__37929_37933 < count__37928_37932))
{var node_37934 = cljs.core._nth.call(null,chunk__37927_37931,i__37929_37933);goog.dom.forms.setValue(node_37934,value);
{
var G__37935 = seq__37926_37930;
var G__37936 = chunk__37927_37931;
var G__37937 = count__37928_37932;
var G__37938 = (i__37929_37933 + (1));
seq__37926_37930 = G__37935;
chunk__37927_37931 = G__37936;
count__37928_37932 = G__37937;
i__37929_37933 = G__37938;
continue;
}
} else
{var temp__4126__auto___37939 = cljs.core.seq.call(null,seq__37926_37930);if(temp__4126__auto___37939)
{var seq__37926_37940__$1 = temp__4126__auto___37939;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37926_37940__$1))
{var c__4314__auto___37941 = cljs.core.chunk_first.call(null,seq__37926_37940__$1);{
var G__37942 = cljs.core.chunk_rest.call(null,seq__37926_37940__$1);
var G__37943 = c__4314__auto___37941;
var G__37944 = cljs.core.count.call(null,c__4314__auto___37941);
var G__37945 = (0);
seq__37926_37930 = G__37942;
chunk__37927_37931 = G__37943;
count__37928_37932 = G__37944;
i__37929_37933 = G__37945;
continue;
}
} else
{var node_37946 = cljs.core.first.call(null,seq__37926_37940__$1);goog.dom.forms.setValue(node_37946,value);
{
var G__37947 = cljs.core.next.call(null,seq__37926_37940__$1);
var G__37948 = null;
var G__37949 = (0);
var G__37950 = (0);
seq__37926_37930 = G__37947;
chunk__37927_37931 = G__37948;
count__37928_37932 = G__37949;
i__37929_37933 = G__37950;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_37961 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__37957_37962 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37958_37963 = null;var count__37959_37964 = (0);var i__37960_37965 = (0);while(true){
if((i__37960_37965 < count__37959_37964))
{var node_37966 = cljs.core._nth.call(null,chunk__37958_37963,i__37960_37965);node_37966.innerHTML = value_37961;
{
var G__37967 = seq__37957_37962;
var G__37968 = chunk__37958_37963;
var G__37969 = count__37959_37964;
var G__37970 = (i__37960_37965 + (1));
seq__37957_37962 = G__37967;
chunk__37958_37963 = G__37968;
count__37959_37964 = G__37969;
i__37960_37965 = G__37970;
continue;
}
} else
{var temp__4126__auto___37971 = cljs.core.seq.call(null,seq__37957_37962);if(temp__4126__auto___37971)
{var seq__37957_37972__$1 = temp__4126__auto___37971;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37957_37972__$1))
{var c__4314__auto___37973 = cljs.core.chunk_first.call(null,seq__37957_37972__$1);{
var G__37974 = cljs.core.chunk_rest.call(null,seq__37957_37972__$1);
var G__37975 = c__4314__auto___37973;
var G__37976 = cljs.core.count.call(null,c__4314__auto___37973);
var G__37977 = (0);
seq__37957_37962 = G__37974;
chunk__37958_37963 = G__37975;
count__37959_37964 = G__37976;
i__37960_37965 = G__37977;
continue;
}
} else
{var node_37978 = cljs.core.first.call(null,seq__37957_37972__$1);node_37978.innerHTML = value_37961;
{
var G__37979 = cljs.core.next.call(null,seq__37957_37972__$1);
var G__37980 = null;
var G__37981 = (0);
var G__37982 = (0);
seq__37957_37962 = G__37979;
chunk__37958_37963 = G__37980;
count__37959_37964 = G__37981;
i__37960_37965 = G__37982;
continue;
}
}
} else
{}
}
break;
}
}catch (e37956){if((e37956 instanceof Error))
{var e_37983 = e37956;domina.replace_children_BANG_.call(null,content,value_37961);
} else
{throw e37956;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__37990_37994 = cljs.core.seq.call(null,children);var chunk__37991_37995 = null;var count__37992_37996 = (0);var i__37993_37997 = (0);while(true){
if((i__37993_37997 < count__37992_37996))
{var child_37998 = cljs.core._nth.call(null,chunk__37991_37995,i__37993_37997);frag.appendChild(child_37998);
{
var G__37999 = seq__37990_37994;
var G__38000 = chunk__37991_37995;
var G__38001 = count__37992_37996;
var G__38002 = (i__37993_37997 + (1));
seq__37990_37994 = G__37999;
chunk__37991_37995 = G__38000;
count__37992_37996 = G__38001;
i__37993_37997 = G__38002;
continue;
}
} else
{var temp__4126__auto___38003 = cljs.core.seq.call(null,seq__37990_37994);if(temp__4126__auto___38003)
{var seq__37990_38004__$1 = temp__4126__auto___38003;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37990_38004__$1))
{var c__4314__auto___38005 = cljs.core.chunk_first.call(null,seq__37990_38004__$1);{
var G__38006 = cljs.core.chunk_rest.call(null,seq__37990_38004__$1);
var G__38007 = c__4314__auto___38005;
var G__38008 = cljs.core.count.call(null,c__4314__auto___38005);
var G__38009 = (0);
seq__37990_37994 = G__38006;
chunk__37991_37995 = G__38007;
count__37992_37996 = G__38008;
i__37993_37997 = G__38009;
continue;
}
} else
{var child_38010 = cljs.core.first.call(null,seq__37990_38004__$1);frag.appendChild(child_38010);
{
var G__38011 = cljs.core.next.call(null,seq__37990_38004__$1);
var G__38012 = null;
var G__38013 = (0);
var G__38014 = (0);
seq__37990_37994 = G__38011;
chunk__37991_37995 = G__38012;
count__37992_37996 = G__38013;
i__37993_37997 = G__38014;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__37984_SHARP_,p2__37985_SHARP_){return f.call(null,p1__37984_SHARP_,p2__37985_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
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
{if((function (){var G__38016 = list_thing;if(G__38016)
{var bit__4208__auto__ = (G__38016.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__38016.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38016.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38016);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38016);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__38017 = content;if(G__38017)
{var bit__4208__auto__ = (G__38017.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__38017.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38017.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38017);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38017);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__38018 = content;if(G__38018)
{var bit__4208__auto__ = (G__38018.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__38018.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38018.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38018);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38018);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

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
