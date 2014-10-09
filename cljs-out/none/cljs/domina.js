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
var opt_wrapper_59643 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_59644 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_59645 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_59645,opt_wrapper_59643,table_section_wrapper_59644,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_59643,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_59644,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_59644,cell_wrapper_59645,table_section_wrapper_59644,table_section_wrapper_59644]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__59650 = cljs.core.seq.call(null,tbody);var chunk__59651 = null;var count__59652 = (0);var i__59653 = (0);while(true){
if((i__59653 < count__59652))
{var child = cljs.core._nth.call(null,chunk__59651,i__59653);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__59654 = seq__59650;
var G__59655 = chunk__59651;
var G__59656 = count__59652;
var G__59657 = (i__59653 + (1));
seq__59650 = G__59654;
chunk__59651 = G__59655;
count__59652 = G__59656;
i__59653 = G__59657;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__59650);if(temp__4126__auto__)
{var seq__59650__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59650__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__59650__$1);{
var G__59658 = cljs.core.chunk_rest.call(null,seq__59650__$1);
var G__59659 = c__4314__auto__;
var G__59660 = cljs.core.count.call(null,c__4314__auto__);
var G__59661 = (0);
seq__59650 = G__59658;
chunk__59651 = G__59659;
count__59652 = G__59660;
i__59653 = G__59661;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__59650__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__59662 = cljs.core.next.call(null,seq__59650__$1);
var G__59663 = null;
var G__59664 = (0);
var G__59665 = (0);
seq__59650 = G__59662;
chunk__59651 = G__59663;
count__59652 = G__59664;
i__59653 = G__59665;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__59667 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__59667,(0),null);var start_wrap = cljs.core.nth.call(null,vec__59667,(1),null);var end_wrap = cljs.core.nth.call(null,vec__59667,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__59668 = wrapper.lastChild;
var G__59669 = (level - (1));
wrapper = G__59668;
level = G__59669;
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
domina.DomContent = (function (){var obj59671 = {};return obj59671;
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
log_debug.cljs$lang$applyTo = (function (arglist__59672){
var mesg = cljs.core.seq(arglist__59672);
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
log.cljs$lang$applyTo = (function (arglist__59673){
var mesg = cljs.core.seq(arglist__59673);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__59674){
var contents = cljs.core.seq(arglist__59674);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__59675_SHARP_){return p1__59675_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__59676_SHARP_,p2__59677_SHARP_){return goog.dom.insertChildAt(p1__59676_SHARP_,p2__59677_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__59679_SHARP_,p2__59678_SHARP_){return goog.dom.insertSiblingBefore(p2__59678_SHARP_,p1__59679_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__59681_SHARP_,p2__59680_SHARP_){return goog.dom.insertSiblingAfter(p2__59680_SHARP_,p1__59681_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__59683_SHARP_,p2__59682_SHARP_){return goog.dom.replaceNode(p2__59682_SHARP_,p1__59683_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__59688_59692 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__59689_59693 = null;var count__59690_59694 = (0);var i__59691_59695 = (0);while(true){
if((i__59691_59695 < count__59690_59694))
{var n_59696 = cljs.core._nth.call(null,chunk__59689_59693,i__59691_59695);goog.style.setStyle(n_59696,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__59697 = seq__59688_59692;
var G__59698 = chunk__59689_59693;
var G__59699 = count__59690_59694;
var G__59700 = (i__59691_59695 + (1));
seq__59688_59692 = G__59697;
chunk__59689_59693 = G__59698;
count__59690_59694 = G__59699;
i__59691_59695 = G__59700;
continue;
}
} else
{var temp__4126__auto___59701 = cljs.core.seq.call(null,seq__59688_59692);if(temp__4126__auto___59701)
{var seq__59688_59702__$1 = temp__4126__auto___59701;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59688_59702__$1))
{var c__4314__auto___59703 = cljs.core.chunk_first.call(null,seq__59688_59702__$1);{
var G__59704 = cljs.core.chunk_rest.call(null,seq__59688_59702__$1);
var G__59705 = c__4314__auto___59703;
var G__59706 = cljs.core.count.call(null,c__4314__auto___59703);
var G__59707 = (0);
seq__59688_59692 = G__59704;
chunk__59689_59693 = G__59705;
count__59690_59694 = G__59706;
i__59691_59695 = G__59707;
continue;
}
} else
{var n_59708 = cljs.core.first.call(null,seq__59688_59702__$1);goog.style.setStyle(n_59708,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__59709 = cljs.core.next.call(null,seq__59688_59702__$1);
var G__59710 = null;
var G__59711 = (0);
var G__59712 = (0);
seq__59688_59692 = G__59709;
chunk__59689_59693 = G__59710;
count__59690_59694 = G__59711;
i__59691_59695 = G__59712;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__59713){
var content = cljs.core.first(arglist__59713);
arglist__59713 = cljs.core.next(arglist__59713);
var name = cljs.core.first(arglist__59713);
var value = cljs.core.rest(arglist__59713);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__59718_59722 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__59719_59723 = null;var count__59720_59724 = (0);var i__59721_59725 = (0);while(true){
if((i__59721_59725 < count__59720_59724))
{var n_59726 = cljs.core._nth.call(null,chunk__59719_59723,i__59721_59725);n_59726.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__59727 = seq__59718_59722;
var G__59728 = chunk__59719_59723;
var G__59729 = count__59720_59724;
var G__59730 = (i__59721_59725 + (1));
seq__59718_59722 = G__59727;
chunk__59719_59723 = G__59728;
count__59720_59724 = G__59729;
i__59721_59725 = G__59730;
continue;
}
} else
{var temp__4126__auto___59731 = cljs.core.seq.call(null,seq__59718_59722);if(temp__4126__auto___59731)
{var seq__59718_59732__$1 = temp__4126__auto___59731;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59718_59732__$1))
{var c__4314__auto___59733 = cljs.core.chunk_first.call(null,seq__59718_59732__$1);{
var G__59734 = cljs.core.chunk_rest.call(null,seq__59718_59732__$1);
var G__59735 = c__4314__auto___59733;
var G__59736 = cljs.core.count.call(null,c__4314__auto___59733);
var G__59737 = (0);
seq__59718_59722 = G__59734;
chunk__59719_59723 = G__59735;
count__59720_59724 = G__59736;
i__59721_59725 = G__59737;
continue;
}
} else
{var n_59738 = cljs.core.first.call(null,seq__59718_59732__$1);n_59738.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__59739 = cljs.core.next.call(null,seq__59718_59732__$1);
var G__59740 = null;
var G__59741 = (0);
var G__59742 = (0);
seq__59718_59722 = G__59739;
chunk__59719_59723 = G__59740;
count__59720_59724 = G__59741;
i__59721_59725 = G__59742;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__59743){
var content = cljs.core.first(arglist__59743);
arglist__59743 = cljs.core.next(arglist__59743);
var name = cljs.core.first(arglist__59743);
var value = cljs.core.rest(arglist__59743);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__59748_59752 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__59749_59753 = null;var count__59750_59754 = (0);var i__59751_59755 = (0);while(true){
if((i__59751_59755 < count__59750_59754))
{var n_59756 = cljs.core._nth.call(null,chunk__59749_59753,i__59751_59755);n_59756.removeAttribute(cljs.core.name.call(null,name));
{
var G__59757 = seq__59748_59752;
var G__59758 = chunk__59749_59753;
var G__59759 = count__59750_59754;
var G__59760 = (i__59751_59755 + (1));
seq__59748_59752 = G__59757;
chunk__59749_59753 = G__59758;
count__59750_59754 = G__59759;
i__59751_59755 = G__59760;
continue;
}
} else
{var temp__4126__auto___59761 = cljs.core.seq.call(null,seq__59748_59752);if(temp__4126__auto___59761)
{var seq__59748_59762__$1 = temp__4126__auto___59761;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59748_59762__$1))
{var c__4314__auto___59763 = cljs.core.chunk_first.call(null,seq__59748_59762__$1);{
var G__59764 = cljs.core.chunk_rest.call(null,seq__59748_59762__$1);
var G__59765 = c__4314__auto___59763;
var G__59766 = cljs.core.count.call(null,c__4314__auto___59763);
var G__59767 = (0);
seq__59748_59752 = G__59764;
chunk__59749_59753 = G__59765;
count__59750_59754 = G__59766;
i__59751_59755 = G__59767;
continue;
}
} else
{var n_59768 = cljs.core.first.call(null,seq__59748_59762__$1);n_59768.removeAttribute(cljs.core.name.call(null,name));
{
var G__59769 = cljs.core.next.call(null,seq__59748_59762__$1);
var G__59770 = null;
var G__59771 = (0);
var G__59772 = (0);
seq__59748_59752 = G__59769;
chunk__59749_59753 = G__59770;
count__59750_59754 = G__59771;
i__59751_59755 = G__59772;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__59774 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__59774,(0),null);var v = cljs.core.nth.call(null,vec__59774,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
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
return (function (p1__59775_SHARP_){var attr = attrs__$1.item(p1__59775_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__59782_59788 = cljs.core.seq.call(null,styles);var chunk__59783_59789 = null;var count__59784_59790 = (0);var i__59785_59791 = (0);while(true){
if((i__59785_59791 < count__59784_59790))
{var vec__59786_59792 = cljs.core._nth.call(null,chunk__59783_59789,i__59785_59791);var name_59793 = cljs.core.nth.call(null,vec__59786_59792,(0),null);var value_59794 = cljs.core.nth.call(null,vec__59786_59792,(1),null);domina.set_style_BANG_.call(null,content,name_59793,value_59794);
{
var G__59795 = seq__59782_59788;
var G__59796 = chunk__59783_59789;
var G__59797 = count__59784_59790;
var G__59798 = (i__59785_59791 + (1));
seq__59782_59788 = G__59795;
chunk__59783_59789 = G__59796;
count__59784_59790 = G__59797;
i__59785_59791 = G__59798;
continue;
}
} else
{var temp__4126__auto___59799 = cljs.core.seq.call(null,seq__59782_59788);if(temp__4126__auto___59799)
{var seq__59782_59800__$1 = temp__4126__auto___59799;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59782_59800__$1))
{var c__4314__auto___59801 = cljs.core.chunk_first.call(null,seq__59782_59800__$1);{
var G__59802 = cljs.core.chunk_rest.call(null,seq__59782_59800__$1);
var G__59803 = c__4314__auto___59801;
var G__59804 = cljs.core.count.call(null,c__4314__auto___59801);
var G__59805 = (0);
seq__59782_59788 = G__59802;
chunk__59783_59789 = G__59803;
count__59784_59790 = G__59804;
i__59785_59791 = G__59805;
continue;
}
} else
{var vec__59787_59806 = cljs.core.first.call(null,seq__59782_59800__$1);var name_59807 = cljs.core.nth.call(null,vec__59787_59806,(0),null);var value_59808 = cljs.core.nth.call(null,vec__59787_59806,(1),null);domina.set_style_BANG_.call(null,content,name_59807,value_59808);
{
var G__59809 = cljs.core.next.call(null,seq__59782_59800__$1);
var G__59810 = null;
var G__59811 = (0);
var G__59812 = (0);
seq__59782_59788 = G__59809;
chunk__59783_59789 = G__59810;
count__59784_59790 = G__59811;
i__59785_59791 = G__59812;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__59819_59825 = cljs.core.seq.call(null,attrs);var chunk__59820_59826 = null;var count__59821_59827 = (0);var i__59822_59828 = (0);while(true){
if((i__59822_59828 < count__59821_59827))
{var vec__59823_59829 = cljs.core._nth.call(null,chunk__59820_59826,i__59822_59828);var name_59830 = cljs.core.nth.call(null,vec__59823_59829,(0),null);var value_59831 = cljs.core.nth.call(null,vec__59823_59829,(1),null);domina.set_attr_BANG_.call(null,content,name_59830,value_59831);
{
var G__59832 = seq__59819_59825;
var G__59833 = chunk__59820_59826;
var G__59834 = count__59821_59827;
var G__59835 = (i__59822_59828 + (1));
seq__59819_59825 = G__59832;
chunk__59820_59826 = G__59833;
count__59821_59827 = G__59834;
i__59822_59828 = G__59835;
continue;
}
} else
{var temp__4126__auto___59836 = cljs.core.seq.call(null,seq__59819_59825);if(temp__4126__auto___59836)
{var seq__59819_59837__$1 = temp__4126__auto___59836;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59819_59837__$1))
{var c__4314__auto___59838 = cljs.core.chunk_first.call(null,seq__59819_59837__$1);{
var G__59839 = cljs.core.chunk_rest.call(null,seq__59819_59837__$1);
var G__59840 = c__4314__auto___59838;
var G__59841 = cljs.core.count.call(null,c__4314__auto___59838);
var G__59842 = (0);
seq__59819_59825 = G__59839;
chunk__59820_59826 = G__59840;
count__59821_59827 = G__59841;
i__59822_59828 = G__59842;
continue;
}
} else
{var vec__59824_59843 = cljs.core.first.call(null,seq__59819_59837__$1);var name_59844 = cljs.core.nth.call(null,vec__59824_59843,(0),null);var value_59845 = cljs.core.nth.call(null,vec__59824_59843,(1),null);domina.set_attr_BANG_.call(null,content,name_59844,value_59845);
{
var G__59846 = cljs.core.next.call(null,seq__59819_59837__$1);
var G__59847 = null;
var G__59848 = (0);
var G__59849 = (0);
seq__59819_59825 = G__59846;
chunk__59820_59826 = G__59847;
count__59821_59827 = G__59848;
i__59822_59828 = G__59849;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__59854_59858 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__59855_59859 = null;var count__59856_59860 = (0);var i__59857_59861 = (0);while(true){
if((i__59857_59861 < count__59856_59860))
{var node_59862 = cljs.core._nth.call(null,chunk__59855_59859,i__59857_59861);goog.dom.classes.add(node_59862,class$);
{
var G__59863 = seq__59854_59858;
var G__59864 = chunk__59855_59859;
var G__59865 = count__59856_59860;
var G__59866 = (i__59857_59861 + (1));
seq__59854_59858 = G__59863;
chunk__59855_59859 = G__59864;
count__59856_59860 = G__59865;
i__59857_59861 = G__59866;
continue;
}
} else
{var temp__4126__auto___59867 = cljs.core.seq.call(null,seq__59854_59858);if(temp__4126__auto___59867)
{var seq__59854_59868__$1 = temp__4126__auto___59867;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59854_59868__$1))
{var c__4314__auto___59869 = cljs.core.chunk_first.call(null,seq__59854_59868__$1);{
var G__59870 = cljs.core.chunk_rest.call(null,seq__59854_59868__$1);
var G__59871 = c__4314__auto___59869;
var G__59872 = cljs.core.count.call(null,c__4314__auto___59869);
var G__59873 = (0);
seq__59854_59858 = G__59870;
chunk__59855_59859 = G__59871;
count__59856_59860 = G__59872;
i__59857_59861 = G__59873;
continue;
}
} else
{var node_59874 = cljs.core.first.call(null,seq__59854_59868__$1);goog.dom.classes.add(node_59874,class$);
{
var G__59875 = cljs.core.next.call(null,seq__59854_59868__$1);
var G__59876 = null;
var G__59877 = (0);
var G__59878 = (0);
seq__59854_59858 = G__59875;
chunk__59855_59859 = G__59876;
count__59856_59860 = G__59877;
i__59857_59861 = G__59878;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__59883_59887 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__59884_59888 = null;var count__59885_59889 = (0);var i__59886_59890 = (0);while(true){
if((i__59886_59890 < count__59885_59889))
{var node_59891 = cljs.core._nth.call(null,chunk__59884_59888,i__59886_59890);goog.dom.classes.remove(node_59891,class$);
{
var G__59892 = seq__59883_59887;
var G__59893 = chunk__59884_59888;
var G__59894 = count__59885_59889;
var G__59895 = (i__59886_59890 + (1));
seq__59883_59887 = G__59892;
chunk__59884_59888 = G__59893;
count__59885_59889 = G__59894;
i__59886_59890 = G__59895;
continue;
}
} else
{var temp__4126__auto___59896 = cljs.core.seq.call(null,seq__59883_59887);if(temp__4126__auto___59896)
{var seq__59883_59897__$1 = temp__4126__auto___59896;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59883_59897__$1))
{var c__4314__auto___59898 = cljs.core.chunk_first.call(null,seq__59883_59897__$1);{
var G__59899 = cljs.core.chunk_rest.call(null,seq__59883_59897__$1);
var G__59900 = c__4314__auto___59898;
var G__59901 = cljs.core.count.call(null,c__4314__auto___59898);
var G__59902 = (0);
seq__59883_59887 = G__59899;
chunk__59884_59888 = G__59900;
count__59885_59889 = G__59901;
i__59886_59890 = G__59902;
continue;
}
} else
{var node_59903 = cljs.core.first.call(null,seq__59883_59897__$1);goog.dom.classes.remove(node_59903,class$);
{
var G__59904 = cljs.core.next.call(null,seq__59883_59897__$1);
var G__59905 = null;
var G__59906 = (0);
var G__59907 = (0);
seq__59883_59887 = G__59904;
chunk__59884_59888 = G__59905;
count__59885_59889 = G__59906;
i__59886_59890 = G__59907;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__59912_59916 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__59913_59917 = null;var count__59914_59918 = (0);var i__59915_59919 = (0);while(true){
if((i__59915_59919 < count__59914_59918))
{var node_59920 = cljs.core._nth.call(null,chunk__59913_59917,i__59915_59919);goog.dom.classes.toggle(node_59920,class$);
{
var G__59921 = seq__59912_59916;
var G__59922 = chunk__59913_59917;
var G__59923 = count__59914_59918;
var G__59924 = (i__59915_59919 + (1));
seq__59912_59916 = G__59921;
chunk__59913_59917 = G__59922;
count__59914_59918 = G__59923;
i__59915_59919 = G__59924;
continue;
}
} else
{var temp__4126__auto___59925 = cljs.core.seq.call(null,seq__59912_59916);if(temp__4126__auto___59925)
{var seq__59912_59926__$1 = temp__4126__auto___59925;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59912_59926__$1))
{var c__4314__auto___59927 = cljs.core.chunk_first.call(null,seq__59912_59926__$1);{
var G__59928 = cljs.core.chunk_rest.call(null,seq__59912_59926__$1);
var G__59929 = c__4314__auto___59927;
var G__59930 = cljs.core.count.call(null,c__4314__auto___59927);
var G__59931 = (0);
seq__59912_59916 = G__59928;
chunk__59913_59917 = G__59929;
count__59914_59918 = G__59930;
i__59915_59919 = G__59931;
continue;
}
} else
{var node_59932 = cljs.core.first.call(null,seq__59912_59926__$1);goog.dom.classes.toggle(node_59932,class$);
{
var G__59933 = cljs.core.next.call(null,seq__59912_59926__$1);
var G__59934 = null;
var G__59935 = (0);
var G__59936 = (0);
seq__59912_59916 = G__59933;
chunk__59913_59917 = G__59934;
count__59914_59918 = G__59935;
i__59915_59919 = G__59936;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_59945__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__59941_59946 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__59942_59947 = null;var count__59943_59948 = (0);var i__59944_59949 = (0);while(true){
if((i__59944_59949 < count__59943_59948))
{var node_59950 = cljs.core._nth.call(null,chunk__59942_59947,i__59944_59949);goog.dom.classes.set(node_59950,classes_59945__$1);
{
var G__59951 = seq__59941_59946;
var G__59952 = chunk__59942_59947;
var G__59953 = count__59943_59948;
var G__59954 = (i__59944_59949 + (1));
seq__59941_59946 = G__59951;
chunk__59942_59947 = G__59952;
count__59943_59948 = G__59953;
i__59944_59949 = G__59954;
continue;
}
} else
{var temp__4126__auto___59955 = cljs.core.seq.call(null,seq__59941_59946);if(temp__4126__auto___59955)
{var seq__59941_59956__$1 = temp__4126__auto___59955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59941_59956__$1))
{var c__4314__auto___59957 = cljs.core.chunk_first.call(null,seq__59941_59956__$1);{
var G__59958 = cljs.core.chunk_rest.call(null,seq__59941_59956__$1);
var G__59959 = c__4314__auto___59957;
var G__59960 = cljs.core.count.call(null,c__4314__auto___59957);
var G__59961 = (0);
seq__59941_59946 = G__59958;
chunk__59942_59947 = G__59959;
count__59943_59948 = G__59960;
i__59944_59949 = G__59961;
continue;
}
} else
{var node_59962 = cljs.core.first.call(null,seq__59941_59956__$1);goog.dom.classes.set(node_59962,classes_59945__$1);
{
var G__59963 = cljs.core.next.call(null,seq__59941_59956__$1);
var G__59964 = null;
var G__59965 = (0);
var G__59966 = (0);
seq__59941_59946 = G__59963;
chunk__59942_59947 = G__59964;
count__59943_59948 = G__59965;
i__59944_59949 = G__59966;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__59971_59975 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__59972_59976 = null;var count__59973_59977 = (0);var i__59974_59978 = (0);while(true){
if((i__59974_59978 < count__59973_59977))
{var node_59979 = cljs.core._nth.call(null,chunk__59972_59976,i__59974_59978);goog.dom.setTextContent(node_59979,value);
{
var G__59980 = seq__59971_59975;
var G__59981 = chunk__59972_59976;
var G__59982 = count__59973_59977;
var G__59983 = (i__59974_59978 + (1));
seq__59971_59975 = G__59980;
chunk__59972_59976 = G__59981;
count__59973_59977 = G__59982;
i__59974_59978 = G__59983;
continue;
}
} else
{var temp__4126__auto___59984 = cljs.core.seq.call(null,seq__59971_59975);if(temp__4126__auto___59984)
{var seq__59971_59985__$1 = temp__4126__auto___59984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59971_59985__$1))
{var c__4314__auto___59986 = cljs.core.chunk_first.call(null,seq__59971_59985__$1);{
var G__59987 = cljs.core.chunk_rest.call(null,seq__59971_59985__$1);
var G__59988 = c__4314__auto___59986;
var G__59989 = cljs.core.count.call(null,c__4314__auto___59986);
var G__59990 = (0);
seq__59971_59975 = G__59987;
chunk__59972_59976 = G__59988;
count__59973_59977 = G__59989;
i__59974_59978 = G__59990;
continue;
}
} else
{var node_59991 = cljs.core.first.call(null,seq__59971_59985__$1);goog.dom.setTextContent(node_59991,value);
{
var G__59992 = cljs.core.next.call(null,seq__59971_59985__$1);
var G__59993 = null;
var G__59994 = (0);
var G__59995 = (0);
seq__59971_59975 = G__59992;
chunk__59972_59976 = G__59993;
count__59973_59977 = G__59994;
i__59974_59978 = G__59995;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__60000_60004 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__60001_60005 = null;var count__60002_60006 = (0);var i__60003_60007 = (0);while(true){
if((i__60003_60007 < count__60002_60006))
{var node_60008 = cljs.core._nth.call(null,chunk__60001_60005,i__60003_60007);goog.dom.forms.setValue(node_60008,value);
{
var G__60009 = seq__60000_60004;
var G__60010 = chunk__60001_60005;
var G__60011 = count__60002_60006;
var G__60012 = (i__60003_60007 + (1));
seq__60000_60004 = G__60009;
chunk__60001_60005 = G__60010;
count__60002_60006 = G__60011;
i__60003_60007 = G__60012;
continue;
}
} else
{var temp__4126__auto___60013 = cljs.core.seq.call(null,seq__60000_60004);if(temp__4126__auto___60013)
{var seq__60000_60014__$1 = temp__4126__auto___60013;if(cljs.core.chunked_seq_QMARK_.call(null,seq__60000_60014__$1))
{var c__4314__auto___60015 = cljs.core.chunk_first.call(null,seq__60000_60014__$1);{
var G__60016 = cljs.core.chunk_rest.call(null,seq__60000_60014__$1);
var G__60017 = c__4314__auto___60015;
var G__60018 = cljs.core.count.call(null,c__4314__auto___60015);
var G__60019 = (0);
seq__60000_60004 = G__60016;
chunk__60001_60005 = G__60017;
count__60002_60006 = G__60018;
i__60003_60007 = G__60019;
continue;
}
} else
{var node_60020 = cljs.core.first.call(null,seq__60000_60014__$1);goog.dom.forms.setValue(node_60020,value);
{
var G__60021 = cljs.core.next.call(null,seq__60000_60014__$1);
var G__60022 = null;
var G__60023 = (0);
var G__60024 = (0);
seq__60000_60004 = G__60021;
chunk__60001_60005 = G__60022;
count__60002_60006 = G__60023;
i__60003_60007 = G__60024;
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
{var value_60035 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__60031_60036 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__60032_60037 = null;var count__60033_60038 = (0);var i__60034_60039 = (0);while(true){
if((i__60034_60039 < count__60033_60038))
{var node_60040 = cljs.core._nth.call(null,chunk__60032_60037,i__60034_60039);node_60040.innerHTML = value_60035;
{
var G__60041 = seq__60031_60036;
var G__60042 = chunk__60032_60037;
var G__60043 = count__60033_60038;
var G__60044 = (i__60034_60039 + (1));
seq__60031_60036 = G__60041;
chunk__60032_60037 = G__60042;
count__60033_60038 = G__60043;
i__60034_60039 = G__60044;
continue;
}
} else
{var temp__4126__auto___60045 = cljs.core.seq.call(null,seq__60031_60036);if(temp__4126__auto___60045)
{var seq__60031_60046__$1 = temp__4126__auto___60045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__60031_60046__$1))
{var c__4314__auto___60047 = cljs.core.chunk_first.call(null,seq__60031_60046__$1);{
var G__60048 = cljs.core.chunk_rest.call(null,seq__60031_60046__$1);
var G__60049 = c__4314__auto___60047;
var G__60050 = cljs.core.count.call(null,c__4314__auto___60047);
var G__60051 = (0);
seq__60031_60036 = G__60048;
chunk__60032_60037 = G__60049;
count__60033_60038 = G__60050;
i__60034_60039 = G__60051;
continue;
}
} else
{var node_60052 = cljs.core.first.call(null,seq__60031_60046__$1);node_60052.innerHTML = value_60035;
{
var G__60053 = cljs.core.next.call(null,seq__60031_60046__$1);
var G__60054 = null;
var G__60055 = (0);
var G__60056 = (0);
seq__60031_60036 = G__60053;
chunk__60032_60037 = G__60054;
count__60033_60038 = G__60055;
i__60034_60039 = G__60056;
continue;
}
}
} else
{}
}
break;
}
}catch (e60030){if((e60030 instanceof Error))
{var e_60057 = e60030;domina.replace_children_BANG_.call(null,content,value_60035);
} else
{throw e60030;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__60064_60068 = cljs.core.seq.call(null,children);var chunk__60065_60069 = null;var count__60066_60070 = (0);var i__60067_60071 = (0);while(true){
if((i__60067_60071 < count__60066_60070))
{var child_60072 = cljs.core._nth.call(null,chunk__60065_60069,i__60067_60071);frag.appendChild(child_60072);
{
var G__60073 = seq__60064_60068;
var G__60074 = chunk__60065_60069;
var G__60075 = count__60066_60070;
var G__60076 = (i__60067_60071 + (1));
seq__60064_60068 = G__60073;
chunk__60065_60069 = G__60074;
count__60066_60070 = G__60075;
i__60067_60071 = G__60076;
continue;
}
} else
{var temp__4126__auto___60077 = cljs.core.seq.call(null,seq__60064_60068);if(temp__4126__auto___60077)
{var seq__60064_60078__$1 = temp__4126__auto___60077;if(cljs.core.chunked_seq_QMARK_.call(null,seq__60064_60078__$1))
{var c__4314__auto___60079 = cljs.core.chunk_first.call(null,seq__60064_60078__$1);{
var G__60080 = cljs.core.chunk_rest.call(null,seq__60064_60078__$1);
var G__60081 = c__4314__auto___60079;
var G__60082 = cljs.core.count.call(null,c__4314__auto___60079);
var G__60083 = (0);
seq__60064_60068 = G__60080;
chunk__60065_60069 = G__60081;
count__60066_60070 = G__60082;
i__60067_60071 = G__60083;
continue;
}
} else
{var child_60084 = cljs.core.first.call(null,seq__60064_60078__$1);frag.appendChild(child_60084);
{
var G__60085 = cljs.core.next.call(null,seq__60064_60078__$1);
var G__60086 = null;
var G__60087 = (0);
var G__60088 = (0);
seq__60064_60068 = G__60085;
chunk__60065_60069 = G__60086;
count__60066_60070 = G__60087;
i__60067_60071 = G__60088;
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
return (function (p1__60058_SHARP_,p2__60059_SHARP_){return f.call(null,p1__60058_SHARP_,p2__60059_SHARP_);
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
{if((function (){var G__60090 = list_thing;if(G__60090)
{var bit__4208__auto__ = (G__60090.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__60090.cljs$core$ISeqable$))
{return true;
} else
{if((!G__60090.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__60090);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__60090);
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
{if((function (){var G__60091 = content;if(G__60091)
{var bit__4208__auto__ = (G__60091.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__60091.cljs$core$ISeqable$))
{return true;
} else
{if((!G__60091.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__60091);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__60091);
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
{if((function (){var G__60092 = content;if(G__60092)
{var bit__4208__auto__ = (G__60092.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__60092.cljs$core$ISeqable$))
{return true;
} else
{if((!G__60092.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__60092);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__60092);
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

//# sourceMappingURL=domina.js.map