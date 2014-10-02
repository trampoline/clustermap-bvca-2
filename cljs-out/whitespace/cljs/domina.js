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
var opt_wrapper_19789 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_19790 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_19791 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_19791,opt_wrapper_19789,table_section_wrapper_19790,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_19789,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_19790,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_19790,cell_wrapper_19791,table_section_wrapper_19790,table_section_wrapper_19790]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__19796 = cljs.core.seq.call(null,tbody);var chunk__19797 = null;var count__19798 = (0);var i__19799 = (0);while(true){
if((i__19799 < count__19798))
{var child = cljs.core._nth.call(null,chunk__19797,i__19799);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19800 = seq__19796;
var G__19801 = chunk__19797;
var G__19802 = count__19798;
var G__19803 = (i__19799 + (1));
seq__19796 = G__19800;
chunk__19797 = G__19801;
count__19798 = G__19802;
i__19799 = G__19803;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19796);if(temp__4126__auto__)
{var seq__19796__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19796__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__19796__$1);{
var G__19804 = cljs.core.chunk_rest.call(null,seq__19796__$1);
var G__19805 = c__4314__auto__;
var G__19806 = cljs.core.count.call(null,c__4314__auto__);
var G__19807 = (0);
seq__19796 = G__19804;
chunk__19797 = G__19805;
count__19798 = G__19806;
i__19799 = G__19807;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__19796__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19808 = cljs.core.next.call(null,seq__19796__$1);
var G__19809 = null;
var G__19810 = (0);
var G__19811 = (0);
seq__19796 = G__19808;
chunk__19797 = G__19809;
count__19798 = G__19810;
i__19799 = G__19811;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__19813 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__19813,(0),null);var start_wrap = cljs.core.nth.call(null,vec__19813,(1),null);var end_wrap = cljs.core.nth.call(null,vec__19813,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__19814 = wrapper.lastChild;
var G__19815 = (level - (1));
wrapper = G__19814;
level = G__19815;
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
domina.DomContent = (function (){var obj19817 = {};return obj19817;
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
log_debug.cljs$lang$applyTo = (function (arglist__19818){
var mesg = cljs.core.seq(arglist__19818);
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
log.cljs$lang$applyTo = (function (arglist__19819){
var mesg = cljs.core.seq(arglist__19819);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__19820){
var contents = cljs.core.seq(arglist__19820);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__19821_SHARP_){return p1__19821_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__19822_SHARP_,p2__19823_SHARP_){return goog.dom.insertChildAt(p1__19822_SHARP_,p2__19823_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19825_SHARP_,p2__19824_SHARP_){return goog.dom.insertSiblingBefore(p2__19824_SHARP_,p1__19825_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19827_SHARP_,p2__19826_SHARP_){return goog.dom.insertSiblingAfter(p2__19826_SHARP_,p1__19827_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__19829_SHARP_,p2__19828_SHARP_){return goog.dom.replaceNode(p2__19828_SHARP_,p1__19829_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__19834_19838 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19835_19839 = null;var count__19836_19840 = (0);var i__19837_19841 = (0);while(true){
if((i__19837_19841 < count__19836_19840))
{var n_19842 = cljs.core._nth.call(null,chunk__19835_19839,i__19837_19841);goog.style.setStyle(n_19842,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19843 = seq__19834_19838;
var G__19844 = chunk__19835_19839;
var G__19845 = count__19836_19840;
var G__19846 = (i__19837_19841 + (1));
seq__19834_19838 = G__19843;
chunk__19835_19839 = G__19844;
count__19836_19840 = G__19845;
i__19837_19841 = G__19846;
continue;
}
} else
{var temp__4126__auto___19847 = cljs.core.seq.call(null,seq__19834_19838);if(temp__4126__auto___19847)
{var seq__19834_19848__$1 = temp__4126__auto___19847;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19834_19848__$1))
{var c__4314__auto___19849 = cljs.core.chunk_first.call(null,seq__19834_19848__$1);{
var G__19850 = cljs.core.chunk_rest.call(null,seq__19834_19848__$1);
var G__19851 = c__4314__auto___19849;
var G__19852 = cljs.core.count.call(null,c__4314__auto___19849);
var G__19853 = (0);
seq__19834_19838 = G__19850;
chunk__19835_19839 = G__19851;
count__19836_19840 = G__19852;
i__19837_19841 = G__19853;
continue;
}
} else
{var n_19854 = cljs.core.first.call(null,seq__19834_19848__$1);goog.style.setStyle(n_19854,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19855 = cljs.core.next.call(null,seq__19834_19848__$1);
var G__19856 = null;
var G__19857 = (0);
var G__19858 = (0);
seq__19834_19838 = G__19855;
chunk__19835_19839 = G__19856;
count__19836_19840 = G__19857;
i__19837_19841 = G__19858;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19859){
var content = cljs.core.first(arglist__19859);
arglist__19859 = cljs.core.next(arglist__19859);
var name = cljs.core.first(arglist__19859);
var value = cljs.core.rest(arglist__19859);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__19864_19868 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19865_19869 = null;var count__19866_19870 = (0);var i__19867_19871 = (0);while(true){
if((i__19867_19871 < count__19866_19870))
{var n_19872 = cljs.core._nth.call(null,chunk__19865_19869,i__19867_19871);n_19872.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19873 = seq__19864_19868;
var G__19874 = chunk__19865_19869;
var G__19875 = count__19866_19870;
var G__19876 = (i__19867_19871 + (1));
seq__19864_19868 = G__19873;
chunk__19865_19869 = G__19874;
count__19866_19870 = G__19875;
i__19867_19871 = G__19876;
continue;
}
} else
{var temp__4126__auto___19877 = cljs.core.seq.call(null,seq__19864_19868);if(temp__4126__auto___19877)
{var seq__19864_19878__$1 = temp__4126__auto___19877;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19864_19878__$1))
{var c__4314__auto___19879 = cljs.core.chunk_first.call(null,seq__19864_19878__$1);{
var G__19880 = cljs.core.chunk_rest.call(null,seq__19864_19878__$1);
var G__19881 = c__4314__auto___19879;
var G__19882 = cljs.core.count.call(null,c__4314__auto___19879);
var G__19883 = (0);
seq__19864_19868 = G__19880;
chunk__19865_19869 = G__19881;
count__19866_19870 = G__19882;
i__19867_19871 = G__19883;
continue;
}
} else
{var n_19884 = cljs.core.first.call(null,seq__19864_19878__$1);n_19884.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19885 = cljs.core.next.call(null,seq__19864_19878__$1);
var G__19886 = null;
var G__19887 = (0);
var G__19888 = (0);
seq__19864_19868 = G__19885;
chunk__19865_19869 = G__19886;
count__19866_19870 = G__19887;
i__19867_19871 = G__19888;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19889){
var content = cljs.core.first(arglist__19889);
arglist__19889 = cljs.core.next(arglist__19889);
var name = cljs.core.first(arglist__19889);
var value = cljs.core.rest(arglist__19889);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__19894_19898 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19895_19899 = null;var count__19896_19900 = (0);var i__19897_19901 = (0);while(true){
if((i__19897_19901 < count__19896_19900))
{var n_19902 = cljs.core._nth.call(null,chunk__19895_19899,i__19897_19901);n_19902.removeAttribute(cljs.core.name.call(null,name));
{
var G__19903 = seq__19894_19898;
var G__19904 = chunk__19895_19899;
var G__19905 = count__19896_19900;
var G__19906 = (i__19897_19901 + (1));
seq__19894_19898 = G__19903;
chunk__19895_19899 = G__19904;
count__19896_19900 = G__19905;
i__19897_19901 = G__19906;
continue;
}
} else
{var temp__4126__auto___19907 = cljs.core.seq.call(null,seq__19894_19898);if(temp__4126__auto___19907)
{var seq__19894_19908__$1 = temp__4126__auto___19907;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19894_19908__$1))
{var c__4314__auto___19909 = cljs.core.chunk_first.call(null,seq__19894_19908__$1);{
var G__19910 = cljs.core.chunk_rest.call(null,seq__19894_19908__$1);
var G__19911 = c__4314__auto___19909;
var G__19912 = cljs.core.count.call(null,c__4314__auto___19909);
var G__19913 = (0);
seq__19894_19898 = G__19910;
chunk__19895_19899 = G__19911;
count__19896_19900 = G__19912;
i__19897_19901 = G__19913;
continue;
}
} else
{var n_19914 = cljs.core.first.call(null,seq__19894_19908__$1);n_19914.removeAttribute(cljs.core.name.call(null,name));
{
var G__19915 = cljs.core.next.call(null,seq__19894_19908__$1);
var G__19916 = null;
var G__19917 = (0);
var G__19918 = (0);
seq__19894_19898 = G__19915;
chunk__19895_19899 = G__19916;
count__19896_19900 = G__19917;
i__19897_19901 = G__19918;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__19920 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__19920,(0),null);var v = cljs.core.nth.call(null,vec__19920,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
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
return (function (p1__19921_SHARP_){var attr = attrs__$1.item(p1__19921_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__19928_19934 = cljs.core.seq.call(null,styles);var chunk__19929_19935 = null;var count__19930_19936 = (0);var i__19931_19937 = (0);while(true){
if((i__19931_19937 < count__19930_19936))
{var vec__19932_19938 = cljs.core._nth.call(null,chunk__19929_19935,i__19931_19937);var name_19939 = cljs.core.nth.call(null,vec__19932_19938,(0),null);var value_19940 = cljs.core.nth.call(null,vec__19932_19938,(1),null);domina.set_style_BANG_.call(null,content,name_19939,value_19940);
{
var G__19941 = seq__19928_19934;
var G__19942 = chunk__19929_19935;
var G__19943 = count__19930_19936;
var G__19944 = (i__19931_19937 + (1));
seq__19928_19934 = G__19941;
chunk__19929_19935 = G__19942;
count__19930_19936 = G__19943;
i__19931_19937 = G__19944;
continue;
}
} else
{var temp__4126__auto___19945 = cljs.core.seq.call(null,seq__19928_19934);if(temp__4126__auto___19945)
{var seq__19928_19946__$1 = temp__4126__auto___19945;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19928_19946__$1))
{var c__4314__auto___19947 = cljs.core.chunk_first.call(null,seq__19928_19946__$1);{
var G__19948 = cljs.core.chunk_rest.call(null,seq__19928_19946__$1);
var G__19949 = c__4314__auto___19947;
var G__19950 = cljs.core.count.call(null,c__4314__auto___19947);
var G__19951 = (0);
seq__19928_19934 = G__19948;
chunk__19929_19935 = G__19949;
count__19930_19936 = G__19950;
i__19931_19937 = G__19951;
continue;
}
} else
{var vec__19933_19952 = cljs.core.first.call(null,seq__19928_19946__$1);var name_19953 = cljs.core.nth.call(null,vec__19933_19952,(0),null);var value_19954 = cljs.core.nth.call(null,vec__19933_19952,(1),null);domina.set_style_BANG_.call(null,content,name_19953,value_19954);
{
var G__19955 = cljs.core.next.call(null,seq__19928_19946__$1);
var G__19956 = null;
var G__19957 = (0);
var G__19958 = (0);
seq__19928_19934 = G__19955;
chunk__19929_19935 = G__19956;
count__19930_19936 = G__19957;
i__19931_19937 = G__19958;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__19965_19971 = cljs.core.seq.call(null,attrs);var chunk__19966_19972 = null;var count__19967_19973 = (0);var i__19968_19974 = (0);while(true){
if((i__19968_19974 < count__19967_19973))
{var vec__19969_19975 = cljs.core._nth.call(null,chunk__19966_19972,i__19968_19974);var name_19976 = cljs.core.nth.call(null,vec__19969_19975,(0),null);var value_19977 = cljs.core.nth.call(null,vec__19969_19975,(1),null);domina.set_attr_BANG_.call(null,content,name_19976,value_19977);
{
var G__19978 = seq__19965_19971;
var G__19979 = chunk__19966_19972;
var G__19980 = count__19967_19973;
var G__19981 = (i__19968_19974 + (1));
seq__19965_19971 = G__19978;
chunk__19966_19972 = G__19979;
count__19967_19973 = G__19980;
i__19968_19974 = G__19981;
continue;
}
} else
{var temp__4126__auto___19982 = cljs.core.seq.call(null,seq__19965_19971);if(temp__4126__auto___19982)
{var seq__19965_19983__$1 = temp__4126__auto___19982;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19965_19983__$1))
{var c__4314__auto___19984 = cljs.core.chunk_first.call(null,seq__19965_19983__$1);{
var G__19985 = cljs.core.chunk_rest.call(null,seq__19965_19983__$1);
var G__19986 = c__4314__auto___19984;
var G__19987 = cljs.core.count.call(null,c__4314__auto___19984);
var G__19988 = (0);
seq__19965_19971 = G__19985;
chunk__19966_19972 = G__19986;
count__19967_19973 = G__19987;
i__19968_19974 = G__19988;
continue;
}
} else
{var vec__19970_19989 = cljs.core.first.call(null,seq__19965_19983__$1);var name_19990 = cljs.core.nth.call(null,vec__19970_19989,(0),null);var value_19991 = cljs.core.nth.call(null,vec__19970_19989,(1),null);domina.set_attr_BANG_.call(null,content,name_19990,value_19991);
{
var G__19992 = cljs.core.next.call(null,seq__19965_19983__$1);
var G__19993 = null;
var G__19994 = (0);
var G__19995 = (0);
seq__19965_19971 = G__19992;
chunk__19966_19972 = G__19993;
count__19967_19973 = G__19994;
i__19968_19974 = G__19995;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__20000_20004 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20001_20005 = null;var count__20002_20006 = (0);var i__20003_20007 = (0);while(true){
if((i__20003_20007 < count__20002_20006))
{var node_20008 = cljs.core._nth.call(null,chunk__20001_20005,i__20003_20007);goog.dom.classes.add(node_20008,class$);
{
var G__20009 = seq__20000_20004;
var G__20010 = chunk__20001_20005;
var G__20011 = count__20002_20006;
var G__20012 = (i__20003_20007 + (1));
seq__20000_20004 = G__20009;
chunk__20001_20005 = G__20010;
count__20002_20006 = G__20011;
i__20003_20007 = G__20012;
continue;
}
} else
{var temp__4126__auto___20013 = cljs.core.seq.call(null,seq__20000_20004);if(temp__4126__auto___20013)
{var seq__20000_20014__$1 = temp__4126__auto___20013;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20000_20014__$1))
{var c__4314__auto___20015 = cljs.core.chunk_first.call(null,seq__20000_20014__$1);{
var G__20016 = cljs.core.chunk_rest.call(null,seq__20000_20014__$1);
var G__20017 = c__4314__auto___20015;
var G__20018 = cljs.core.count.call(null,c__4314__auto___20015);
var G__20019 = (0);
seq__20000_20004 = G__20016;
chunk__20001_20005 = G__20017;
count__20002_20006 = G__20018;
i__20003_20007 = G__20019;
continue;
}
} else
{var node_20020 = cljs.core.first.call(null,seq__20000_20014__$1);goog.dom.classes.add(node_20020,class$);
{
var G__20021 = cljs.core.next.call(null,seq__20000_20014__$1);
var G__20022 = null;
var G__20023 = (0);
var G__20024 = (0);
seq__20000_20004 = G__20021;
chunk__20001_20005 = G__20022;
count__20002_20006 = G__20023;
i__20003_20007 = G__20024;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__20029_20033 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20030_20034 = null;var count__20031_20035 = (0);var i__20032_20036 = (0);while(true){
if((i__20032_20036 < count__20031_20035))
{var node_20037 = cljs.core._nth.call(null,chunk__20030_20034,i__20032_20036);goog.dom.classes.remove(node_20037,class$);
{
var G__20038 = seq__20029_20033;
var G__20039 = chunk__20030_20034;
var G__20040 = count__20031_20035;
var G__20041 = (i__20032_20036 + (1));
seq__20029_20033 = G__20038;
chunk__20030_20034 = G__20039;
count__20031_20035 = G__20040;
i__20032_20036 = G__20041;
continue;
}
} else
{var temp__4126__auto___20042 = cljs.core.seq.call(null,seq__20029_20033);if(temp__4126__auto___20042)
{var seq__20029_20043__$1 = temp__4126__auto___20042;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20029_20043__$1))
{var c__4314__auto___20044 = cljs.core.chunk_first.call(null,seq__20029_20043__$1);{
var G__20045 = cljs.core.chunk_rest.call(null,seq__20029_20043__$1);
var G__20046 = c__4314__auto___20044;
var G__20047 = cljs.core.count.call(null,c__4314__auto___20044);
var G__20048 = (0);
seq__20029_20033 = G__20045;
chunk__20030_20034 = G__20046;
count__20031_20035 = G__20047;
i__20032_20036 = G__20048;
continue;
}
} else
{var node_20049 = cljs.core.first.call(null,seq__20029_20043__$1);goog.dom.classes.remove(node_20049,class$);
{
var G__20050 = cljs.core.next.call(null,seq__20029_20043__$1);
var G__20051 = null;
var G__20052 = (0);
var G__20053 = (0);
seq__20029_20033 = G__20050;
chunk__20030_20034 = G__20051;
count__20031_20035 = G__20052;
i__20032_20036 = G__20053;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__20058_20062 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20059_20063 = null;var count__20060_20064 = (0);var i__20061_20065 = (0);while(true){
if((i__20061_20065 < count__20060_20064))
{var node_20066 = cljs.core._nth.call(null,chunk__20059_20063,i__20061_20065);goog.dom.classes.toggle(node_20066,class$);
{
var G__20067 = seq__20058_20062;
var G__20068 = chunk__20059_20063;
var G__20069 = count__20060_20064;
var G__20070 = (i__20061_20065 + (1));
seq__20058_20062 = G__20067;
chunk__20059_20063 = G__20068;
count__20060_20064 = G__20069;
i__20061_20065 = G__20070;
continue;
}
} else
{var temp__4126__auto___20071 = cljs.core.seq.call(null,seq__20058_20062);if(temp__4126__auto___20071)
{var seq__20058_20072__$1 = temp__4126__auto___20071;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20058_20072__$1))
{var c__4314__auto___20073 = cljs.core.chunk_first.call(null,seq__20058_20072__$1);{
var G__20074 = cljs.core.chunk_rest.call(null,seq__20058_20072__$1);
var G__20075 = c__4314__auto___20073;
var G__20076 = cljs.core.count.call(null,c__4314__auto___20073);
var G__20077 = (0);
seq__20058_20062 = G__20074;
chunk__20059_20063 = G__20075;
count__20060_20064 = G__20076;
i__20061_20065 = G__20077;
continue;
}
} else
{var node_20078 = cljs.core.first.call(null,seq__20058_20072__$1);goog.dom.classes.toggle(node_20078,class$);
{
var G__20079 = cljs.core.next.call(null,seq__20058_20072__$1);
var G__20080 = null;
var G__20081 = (0);
var G__20082 = (0);
seq__20058_20062 = G__20079;
chunk__20059_20063 = G__20080;
count__20060_20064 = G__20081;
i__20061_20065 = G__20082;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_20091__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__20087_20092 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20088_20093 = null;var count__20089_20094 = (0);var i__20090_20095 = (0);while(true){
if((i__20090_20095 < count__20089_20094))
{var node_20096 = cljs.core._nth.call(null,chunk__20088_20093,i__20090_20095);goog.dom.classes.set(node_20096,classes_20091__$1);
{
var G__20097 = seq__20087_20092;
var G__20098 = chunk__20088_20093;
var G__20099 = count__20089_20094;
var G__20100 = (i__20090_20095 + (1));
seq__20087_20092 = G__20097;
chunk__20088_20093 = G__20098;
count__20089_20094 = G__20099;
i__20090_20095 = G__20100;
continue;
}
} else
{var temp__4126__auto___20101 = cljs.core.seq.call(null,seq__20087_20092);if(temp__4126__auto___20101)
{var seq__20087_20102__$1 = temp__4126__auto___20101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20087_20102__$1))
{var c__4314__auto___20103 = cljs.core.chunk_first.call(null,seq__20087_20102__$1);{
var G__20104 = cljs.core.chunk_rest.call(null,seq__20087_20102__$1);
var G__20105 = c__4314__auto___20103;
var G__20106 = cljs.core.count.call(null,c__4314__auto___20103);
var G__20107 = (0);
seq__20087_20092 = G__20104;
chunk__20088_20093 = G__20105;
count__20089_20094 = G__20106;
i__20090_20095 = G__20107;
continue;
}
} else
{var node_20108 = cljs.core.first.call(null,seq__20087_20102__$1);goog.dom.classes.set(node_20108,classes_20091__$1);
{
var G__20109 = cljs.core.next.call(null,seq__20087_20102__$1);
var G__20110 = null;
var G__20111 = (0);
var G__20112 = (0);
seq__20087_20092 = G__20109;
chunk__20088_20093 = G__20110;
count__20089_20094 = G__20111;
i__20090_20095 = G__20112;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__20117_20121 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20118_20122 = null;var count__20119_20123 = (0);var i__20120_20124 = (0);while(true){
if((i__20120_20124 < count__20119_20123))
{var node_20125 = cljs.core._nth.call(null,chunk__20118_20122,i__20120_20124);goog.dom.setTextContent(node_20125,value);
{
var G__20126 = seq__20117_20121;
var G__20127 = chunk__20118_20122;
var G__20128 = count__20119_20123;
var G__20129 = (i__20120_20124 + (1));
seq__20117_20121 = G__20126;
chunk__20118_20122 = G__20127;
count__20119_20123 = G__20128;
i__20120_20124 = G__20129;
continue;
}
} else
{var temp__4126__auto___20130 = cljs.core.seq.call(null,seq__20117_20121);if(temp__4126__auto___20130)
{var seq__20117_20131__$1 = temp__4126__auto___20130;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20117_20131__$1))
{var c__4314__auto___20132 = cljs.core.chunk_first.call(null,seq__20117_20131__$1);{
var G__20133 = cljs.core.chunk_rest.call(null,seq__20117_20131__$1);
var G__20134 = c__4314__auto___20132;
var G__20135 = cljs.core.count.call(null,c__4314__auto___20132);
var G__20136 = (0);
seq__20117_20121 = G__20133;
chunk__20118_20122 = G__20134;
count__20119_20123 = G__20135;
i__20120_20124 = G__20136;
continue;
}
} else
{var node_20137 = cljs.core.first.call(null,seq__20117_20131__$1);goog.dom.setTextContent(node_20137,value);
{
var G__20138 = cljs.core.next.call(null,seq__20117_20131__$1);
var G__20139 = null;
var G__20140 = (0);
var G__20141 = (0);
seq__20117_20121 = G__20138;
chunk__20118_20122 = G__20139;
count__20119_20123 = G__20140;
i__20120_20124 = G__20141;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__20146_20150 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20147_20151 = null;var count__20148_20152 = (0);var i__20149_20153 = (0);while(true){
if((i__20149_20153 < count__20148_20152))
{var node_20154 = cljs.core._nth.call(null,chunk__20147_20151,i__20149_20153);goog.dom.forms.setValue(node_20154,value);
{
var G__20155 = seq__20146_20150;
var G__20156 = chunk__20147_20151;
var G__20157 = count__20148_20152;
var G__20158 = (i__20149_20153 + (1));
seq__20146_20150 = G__20155;
chunk__20147_20151 = G__20156;
count__20148_20152 = G__20157;
i__20149_20153 = G__20158;
continue;
}
} else
{var temp__4126__auto___20159 = cljs.core.seq.call(null,seq__20146_20150);if(temp__4126__auto___20159)
{var seq__20146_20160__$1 = temp__4126__auto___20159;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20146_20160__$1))
{var c__4314__auto___20161 = cljs.core.chunk_first.call(null,seq__20146_20160__$1);{
var G__20162 = cljs.core.chunk_rest.call(null,seq__20146_20160__$1);
var G__20163 = c__4314__auto___20161;
var G__20164 = cljs.core.count.call(null,c__4314__auto___20161);
var G__20165 = (0);
seq__20146_20150 = G__20162;
chunk__20147_20151 = G__20163;
count__20148_20152 = G__20164;
i__20149_20153 = G__20165;
continue;
}
} else
{var node_20166 = cljs.core.first.call(null,seq__20146_20160__$1);goog.dom.forms.setValue(node_20166,value);
{
var G__20167 = cljs.core.next.call(null,seq__20146_20160__$1);
var G__20168 = null;
var G__20169 = (0);
var G__20170 = (0);
seq__20146_20150 = G__20167;
chunk__20147_20151 = G__20168;
count__20148_20152 = G__20169;
i__20149_20153 = G__20170;
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
{var value_20181 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__20177_20182 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20178_20183 = null;var count__20179_20184 = (0);var i__20180_20185 = (0);while(true){
if((i__20180_20185 < count__20179_20184))
{var node_20186 = cljs.core._nth.call(null,chunk__20178_20183,i__20180_20185);node_20186.innerHTML = value_20181;
{
var G__20187 = seq__20177_20182;
var G__20188 = chunk__20178_20183;
var G__20189 = count__20179_20184;
var G__20190 = (i__20180_20185 + (1));
seq__20177_20182 = G__20187;
chunk__20178_20183 = G__20188;
count__20179_20184 = G__20189;
i__20180_20185 = G__20190;
continue;
}
} else
{var temp__4126__auto___20191 = cljs.core.seq.call(null,seq__20177_20182);if(temp__4126__auto___20191)
{var seq__20177_20192__$1 = temp__4126__auto___20191;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20177_20192__$1))
{var c__4314__auto___20193 = cljs.core.chunk_first.call(null,seq__20177_20192__$1);{
var G__20194 = cljs.core.chunk_rest.call(null,seq__20177_20192__$1);
var G__20195 = c__4314__auto___20193;
var G__20196 = cljs.core.count.call(null,c__4314__auto___20193);
var G__20197 = (0);
seq__20177_20182 = G__20194;
chunk__20178_20183 = G__20195;
count__20179_20184 = G__20196;
i__20180_20185 = G__20197;
continue;
}
} else
{var node_20198 = cljs.core.first.call(null,seq__20177_20192__$1);node_20198.innerHTML = value_20181;
{
var G__20199 = cljs.core.next.call(null,seq__20177_20192__$1);
var G__20200 = null;
var G__20201 = (0);
var G__20202 = (0);
seq__20177_20182 = G__20199;
chunk__20178_20183 = G__20200;
count__20179_20184 = G__20201;
i__20180_20185 = G__20202;
continue;
}
}
} else
{}
}
break;
}
}catch (e20176){if((e20176 instanceof Error))
{var e_20203 = e20176;domina.replace_children_BANG_.call(null,content,value_20181);
} else
{throw e20176;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__20210_20214 = cljs.core.seq.call(null,children);var chunk__20211_20215 = null;var count__20212_20216 = (0);var i__20213_20217 = (0);while(true){
if((i__20213_20217 < count__20212_20216))
{var child_20218 = cljs.core._nth.call(null,chunk__20211_20215,i__20213_20217);frag.appendChild(child_20218);
{
var G__20219 = seq__20210_20214;
var G__20220 = chunk__20211_20215;
var G__20221 = count__20212_20216;
var G__20222 = (i__20213_20217 + (1));
seq__20210_20214 = G__20219;
chunk__20211_20215 = G__20220;
count__20212_20216 = G__20221;
i__20213_20217 = G__20222;
continue;
}
} else
{var temp__4126__auto___20223 = cljs.core.seq.call(null,seq__20210_20214);if(temp__4126__auto___20223)
{var seq__20210_20224__$1 = temp__4126__auto___20223;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20210_20224__$1))
{var c__4314__auto___20225 = cljs.core.chunk_first.call(null,seq__20210_20224__$1);{
var G__20226 = cljs.core.chunk_rest.call(null,seq__20210_20224__$1);
var G__20227 = c__4314__auto___20225;
var G__20228 = cljs.core.count.call(null,c__4314__auto___20225);
var G__20229 = (0);
seq__20210_20214 = G__20226;
chunk__20211_20215 = G__20227;
count__20212_20216 = G__20228;
i__20213_20217 = G__20229;
continue;
}
} else
{var child_20230 = cljs.core.first.call(null,seq__20210_20224__$1);frag.appendChild(child_20230);
{
var G__20231 = cljs.core.next.call(null,seq__20210_20224__$1);
var G__20232 = null;
var G__20233 = (0);
var G__20234 = (0);
seq__20210_20214 = G__20231;
chunk__20211_20215 = G__20232;
count__20212_20216 = G__20233;
i__20213_20217 = G__20234;
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
return (function (p1__20204_SHARP_,p2__20205_SHARP_){return f.call(null,p1__20204_SHARP_,p2__20205_SHARP_);
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
{if((function (){var G__20236 = list_thing;if(G__20236)
{var bit__4208__auto__ = (G__20236.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__20236.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20236.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20236);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20236);
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
{if((function (){var G__20237 = content;if(G__20237)
{var bit__4208__auto__ = (G__20237.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__20237.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20237.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20237);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20237);
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
{if((function (){var G__20238 = content;if(G__20238)
{var bit__4208__auto__ = (G__20238.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__20238.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20238.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20238);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20238);
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
