// Compiled by ClojureScript 0.0-2356
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
var opt_wrapper_41867 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_41868 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_41869 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_41869,opt_wrapper_41867,table_section_wrapper_41868,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_41867,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_41868,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_41868,cell_wrapper_41869,table_section_wrapper_41868,table_section_wrapper_41868]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3625__auto__ = div.firstChild;if(cljs.core.truth_(and__3625__auto__))
{return div.firstChild.childNodes;
} else
{return and__3625__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__41874 = cljs.core.seq.call(null,tbody);var chunk__41875 = null;var count__41876 = (0);var i__41877 = (0);while(true){
if((i__41877 < count__41876))
{var child = cljs.core._nth.call(null,chunk__41875,i__41877);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__41878 = seq__41874;
var G__41879 = chunk__41875;
var G__41880 = count__41876;
var G__41881 = (i__41877 + (1));
seq__41874 = G__41878;
chunk__41875 = G__41879;
count__41876 = G__41880;
i__41877 = G__41881;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__41874);if(temp__4126__auto__)
{var seq__41874__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41874__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__41874__$1);{
var G__41882 = cljs.core.chunk_rest.call(null,seq__41874__$1);
var G__41883 = c__4406__auto__;
var G__41884 = cljs.core.count.call(null,c__4406__auto__);
var G__41885 = (0);
seq__41874 = G__41882;
chunk__41875 = G__41883;
count__41876 = G__41884;
i__41877 = G__41885;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__41874__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__41886 = cljs.core.next.call(null,seq__41874__$1);
var G__41887 = null;
var G__41888 = (0);
var G__41889 = (0);
seq__41874 = G__41886;
chunk__41875 = G__41887;
count__41876 = G__41888;
i__41877 = G__41889;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__41891 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__41891,(0),null);var start_wrap = cljs.core.nth.call(null,vec__41891,(1),null);var end_wrap = cljs.core.nth.call(null,vec__41891,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__41892 = wrapper.lastChild;
var G__41893 = (level - (1));
wrapper = G__41892;
level = G__41893;
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
if(cljs.core.truth_((function (){var and__3625__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3625__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3625__auto__;
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
domina.DomContent = (function (){var obj41895 = {};return obj41895;
})();
domina.nodes = (function nodes(content){if((function (){var and__3625__auto__ = content;if(and__3625__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3625__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4273__auto__ = (((content == null))?null:content);return (function (){var or__3637__auto__ = (domina.nodes[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.nodes["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3625__auto__ = nodeseq;if(and__3625__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3625__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4273__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3637__auto__ = (domina.single_node[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.single_node["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3625__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3625__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3625__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__41896){
var mesg = cljs.core.seq(arglist__41896);
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
log.cljs$lang$applyTo = (function (arglist__41897){
var mesg = cljs.core.seq(arglist__41897);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__41898){
var contents = cljs.core.seq(arglist__41898);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__41899_SHARP_){return p1__41899_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__41900_SHARP_,p2__41901_SHARP_){return goog.dom.insertChildAt(p1__41900_SHARP_,p2__41901_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__41903_SHARP_,p2__41902_SHARP_){return goog.dom.insertSiblingBefore(p2__41902_SHARP_,p1__41903_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__41905_SHARP_,p2__41904_SHARP_){return goog.dom.insertSiblingAfter(p2__41904_SHARP_,p1__41905_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__41907_SHARP_,p2__41906_SHARP_){return goog.dom.replaceNode(p2__41906_SHARP_,p1__41907_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__41912_41916 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__41913_41917 = null;var count__41914_41918 = (0);var i__41915_41919 = (0);while(true){
if((i__41915_41919 < count__41914_41918))
{var n_41920 = cljs.core._nth.call(null,chunk__41913_41917,i__41915_41919);goog.style.setStyle(n_41920,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__41921 = seq__41912_41916;
var G__41922 = chunk__41913_41917;
var G__41923 = count__41914_41918;
var G__41924 = (i__41915_41919 + (1));
seq__41912_41916 = G__41921;
chunk__41913_41917 = G__41922;
count__41914_41918 = G__41923;
i__41915_41919 = G__41924;
continue;
}
} else
{var temp__4126__auto___41925 = cljs.core.seq.call(null,seq__41912_41916);if(temp__4126__auto___41925)
{var seq__41912_41926__$1 = temp__4126__auto___41925;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41912_41926__$1))
{var c__4406__auto___41927 = cljs.core.chunk_first.call(null,seq__41912_41926__$1);{
var G__41928 = cljs.core.chunk_rest.call(null,seq__41912_41926__$1);
var G__41929 = c__4406__auto___41927;
var G__41930 = cljs.core.count.call(null,c__4406__auto___41927);
var G__41931 = (0);
seq__41912_41916 = G__41928;
chunk__41913_41917 = G__41929;
count__41914_41918 = G__41930;
i__41915_41919 = G__41931;
continue;
}
} else
{var n_41932 = cljs.core.first.call(null,seq__41912_41926__$1);goog.style.setStyle(n_41932,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__41933 = cljs.core.next.call(null,seq__41912_41926__$1);
var G__41934 = null;
var G__41935 = (0);
var G__41936 = (0);
seq__41912_41916 = G__41933;
chunk__41913_41917 = G__41934;
count__41914_41918 = G__41935;
i__41915_41919 = G__41936;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__41937){
var content = cljs.core.first(arglist__41937);
arglist__41937 = cljs.core.next(arglist__41937);
var name = cljs.core.first(arglist__41937);
var value = cljs.core.rest(arglist__41937);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__41942_41946 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__41943_41947 = null;var count__41944_41948 = (0);var i__41945_41949 = (0);while(true){
if((i__41945_41949 < count__41944_41948))
{var n_41950 = cljs.core._nth.call(null,chunk__41943_41947,i__41945_41949);n_41950.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__41951 = seq__41942_41946;
var G__41952 = chunk__41943_41947;
var G__41953 = count__41944_41948;
var G__41954 = (i__41945_41949 + (1));
seq__41942_41946 = G__41951;
chunk__41943_41947 = G__41952;
count__41944_41948 = G__41953;
i__41945_41949 = G__41954;
continue;
}
} else
{var temp__4126__auto___41955 = cljs.core.seq.call(null,seq__41942_41946);if(temp__4126__auto___41955)
{var seq__41942_41956__$1 = temp__4126__auto___41955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41942_41956__$1))
{var c__4406__auto___41957 = cljs.core.chunk_first.call(null,seq__41942_41956__$1);{
var G__41958 = cljs.core.chunk_rest.call(null,seq__41942_41956__$1);
var G__41959 = c__4406__auto___41957;
var G__41960 = cljs.core.count.call(null,c__4406__auto___41957);
var G__41961 = (0);
seq__41942_41946 = G__41958;
chunk__41943_41947 = G__41959;
count__41944_41948 = G__41960;
i__41945_41949 = G__41961;
continue;
}
} else
{var n_41962 = cljs.core.first.call(null,seq__41942_41956__$1);n_41962.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__41963 = cljs.core.next.call(null,seq__41942_41956__$1);
var G__41964 = null;
var G__41965 = (0);
var G__41966 = (0);
seq__41942_41946 = G__41963;
chunk__41943_41947 = G__41964;
count__41944_41948 = G__41965;
i__41945_41949 = G__41966;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__41967){
var content = cljs.core.first(arglist__41967);
arglist__41967 = cljs.core.next(arglist__41967);
var name = cljs.core.first(arglist__41967);
var value = cljs.core.rest(arglist__41967);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__41972_41976 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__41973_41977 = null;var count__41974_41978 = (0);var i__41975_41979 = (0);while(true){
if((i__41975_41979 < count__41974_41978))
{var n_41980 = cljs.core._nth.call(null,chunk__41973_41977,i__41975_41979);n_41980.removeAttribute(cljs.core.name.call(null,name));
{
var G__41981 = seq__41972_41976;
var G__41982 = chunk__41973_41977;
var G__41983 = count__41974_41978;
var G__41984 = (i__41975_41979 + (1));
seq__41972_41976 = G__41981;
chunk__41973_41977 = G__41982;
count__41974_41978 = G__41983;
i__41975_41979 = G__41984;
continue;
}
} else
{var temp__4126__auto___41985 = cljs.core.seq.call(null,seq__41972_41976);if(temp__4126__auto___41985)
{var seq__41972_41986__$1 = temp__4126__auto___41985;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41972_41986__$1))
{var c__4406__auto___41987 = cljs.core.chunk_first.call(null,seq__41972_41986__$1);{
var G__41988 = cljs.core.chunk_rest.call(null,seq__41972_41986__$1);
var G__41989 = c__4406__auto___41987;
var G__41990 = cljs.core.count.call(null,c__4406__auto___41987);
var G__41991 = (0);
seq__41972_41976 = G__41988;
chunk__41973_41977 = G__41989;
count__41974_41978 = G__41990;
i__41975_41979 = G__41991;
continue;
}
} else
{var n_41992 = cljs.core.first.call(null,seq__41972_41986__$1);n_41992.removeAttribute(cljs.core.name.call(null,name));
{
var G__41993 = cljs.core.next.call(null,seq__41972_41986__$1);
var G__41994 = null;
var G__41995 = (0);
var G__41996 = (0);
seq__41972_41976 = G__41993;
chunk__41973_41977 = G__41994;
count__41974_41978 = G__41995;
i__41975_41979 = G__41996;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__41998 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__41998,(0),null);var v = cljs.core.nth.call(null,vec__41998,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = k;if(cljs.core.truth_(and__3625__auto__))
{return v;
} else
{return and__3625__auto__;
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
return (function (p1__41999_SHARP_){var attr = attrs__$1.item(p1__41999_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__42006_42012 = cljs.core.seq.call(null,styles);var chunk__42007_42013 = null;var count__42008_42014 = (0);var i__42009_42015 = (0);while(true){
if((i__42009_42015 < count__42008_42014))
{var vec__42010_42016 = cljs.core._nth.call(null,chunk__42007_42013,i__42009_42015);var name_42017 = cljs.core.nth.call(null,vec__42010_42016,(0),null);var value_42018 = cljs.core.nth.call(null,vec__42010_42016,(1),null);domina.set_style_BANG_.call(null,content,name_42017,value_42018);
{
var G__42019 = seq__42006_42012;
var G__42020 = chunk__42007_42013;
var G__42021 = count__42008_42014;
var G__42022 = (i__42009_42015 + (1));
seq__42006_42012 = G__42019;
chunk__42007_42013 = G__42020;
count__42008_42014 = G__42021;
i__42009_42015 = G__42022;
continue;
}
} else
{var temp__4126__auto___42023 = cljs.core.seq.call(null,seq__42006_42012);if(temp__4126__auto___42023)
{var seq__42006_42024__$1 = temp__4126__auto___42023;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42006_42024__$1))
{var c__4406__auto___42025 = cljs.core.chunk_first.call(null,seq__42006_42024__$1);{
var G__42026 = cljs.core.chunk_rest.call(null,seq__42006_42024__$1);
var G__42027 = c__4406__auto___42025;
var G__42028 = cljs.core.count.call(null,c__4406__auto___42025);
var G__42029 = (0);
seq__42006_42012 = G__42026;
chunk__42007_42013 = G__42027;
count__42008_42014 = G__42028;
i__42009_42015 = G__42029;
continue;
}
} else
{var vec__42011_42030 = cljs.core.first.call(null,seq__42006_42024__$1);var name_42031 = cljs.core.nth.call(null,vec__42011_42030,(0),null);var value_42032 = cljs.core.nth.call(null,vec__42011_42030,(1),null);domina.set_style_BANG_.call(null,content,name_42031,value_42032);
{
var G__42033 = cljs.core.next.call(null,seq__42006_42024__$1);
var G__42034 = null;
var G__42035 = (0);
var G__42036 = (0);
seq__42006_42012 = G__42033;
chunk__42007_42013 = G__42034;
count__42008_42014 = G__42035;
i__42009_42015 = G__42036;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__42043_42049 = cljs.core.seq.call(null,attrs);var chunk__42044_42050 = null;var count__42045_42051 = (0);var i__42046_42052 = (0);while(true){
if((i__42046_42052 < count__42045_42051))
{var vec__42047_42053 = cljs.core._nth.call(null,chunk__42044_42050,i__42046_42052);var name_42054 = cljs.core.nth.call(null,vec__42047_42053,(0),null);var value_42055 = cljs.core.nth.call(null,vec__42047_42053,(1),null);domina.set_attr_BANG_.call(null,content,name_42054,value_42055);
{
var G__42056 = seq__42043_42049;
var G__42057 = chunk__42044_42050;
var G__42058 = count__42045_42051;
var G__42059 = (i__42046_42052 + (1));
seq__42043_42049 = G__42056;
chunk__42044_42050 = G__42057;
count__42045_42051 = G__42058;
i__42046_42052 = G__42059;
continue;
}
} else
{var temp__4126__auto___42060 = cljs.core.seq.call(null,seq__42043_42049);if(temp__4126__auto___42060)
{var seq__42043_42061__$1 = temp__4126__auto___42060;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42043_42061__$1))
{var c__4406__auto___42062 = cljs.core.chunk_first.call(null,seq__42043_42061__$1);{
var G__42063 = cljs.core.chunk_rest.call(null,seq__42043_42061__$1);
var G__42064 = c__4406__auto___42062;
var G__42065 = cljs.core.count.call(null,c__4406__auto___42062);
var G__42066 = (0);
seq__42043_42049 = G__42063;
chunk__42044_42050 = G__42064;
count__42045_42051 = G__42065;
i__42046_42052 = G__42066;
continue;
}
} else
{var vec__42048_42067 = cljs.core.first.call(null,seq__42043_42061__$1);var name_42068 = cljs.core.nth.call(null,vec__42048_42067,(0),null);var value_42069 = cljs.core.nth.call(null,vec__42048_42067,(1),null);domina.set_attr_BANG_.call(null,content,name_42068,value_42069);
{
var G__42070 = cljs.core.next.call(null,seq__42043_42061__$1);
var G__42071 = null;
var G__42072 = (0);
var G__42073 = (0);
seq__42043_42049 = G__42070;
chunk__42044_42050 = G__42071;
count__42045_42051 = G__42072;
i__42046_42052 = G__42073;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__42078_42082 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__42079_42083 = null;var count__42080_42084 = (0);var i__42081_42085 = (0);while(true){
if((i__42081_42085 < count__42080_42084))
{var node_42086 = cljs.core._nth.call(null,chunk__42079_42083,i__42081_42085);goog.dom.classes.add(node_42086,class$);
{
var G__42087 = seq__42078_42082;
var G__42088 = chunk__42079_42083;
var G__42089 = count__42080_42084;
var G__42090 = (i__42081_42085 + (1));
seq__42078_42082 = G__42087;
chunk__42079_42083 = G__42088;
count__42080_42084 = G__42089;
i__42081_42085 = G__42090;
continue;
}
} else
{var temp__4126__auto___42091 = cljs.core.seq.call(null,seq__42078_42082);if(temp__4126__auto___42091)
{var seq__42078_42092__$1 = temp__4126__auto___42091;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42078_42092__$1))
{var c__4406__auto___42093 = cljs.core.chunk_first.call(null,seq__42078_42092__$1);{
var G__42094 = cljs.core.chunk_rest.call(null,seq__42078_42092__$1);
var G__42095 = c__4406__auto___42093;
var G__42096 = cljs.core.count.call(null,c__4406__auto___42093);
var G__42097 = (0);
seq__42078_42082 = G__42094;
chunk__42079_42083 = G__42095;
count__42080_42084 = G__42096;
i__42081_42085 = G__42097;
continue;
}
} else
{var node_42098 = cljs.core.first.call(null,seq__42078_42092__$1);goog.dom.classes.add(node_42098,class$);
{
var G__42099 = cljs.core.next.call(null,seq__42078_42092__$1);
var G__42100 = null;
var G__42101 = (0);
var G__42102 = (0);
seq__42078_42082 = G__42099;
chunk__42079_42083 = G__42100;
count__42080_42084 = G__42101;
i__42081_42085 = G__42102;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__42107_42111 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__42108_42112 = null;var count__42109_42113 = (0);var i__42110_42114 = (0);while(true){
if((i__42110_42114 < count__42109_42113))
{var node_42115 = cljs.core._nth.call(null,chunk__42108_42112,i__42110_42114);goog.dom.classes.remove(node_42115,class$);
{
var G__42116 = seq__42107_42111;
var G__42117 = chunk__42108_42112;
var G__42118 = count__42109_42113;
var G__42119 = (i__42110_42114 + (1));
seq__42107_42111 = G__42116;
chunk__42108_42112 = G__42117;
count__42109_42113 = G__42118;
i__42110_42114 = G__42119;
continue;
}
} else
{var temp__4126__auto___42120 = cljs.core.seq.call(null,seq__42107_42111);if(temp__4126__auto___42120)
{var seq__42107_42121__$1 = temp__4126__auto___42120;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42107_42121__$1))
{var c__4406__auto___42122 = cljs.core.chunk_first.call(null,seq__42107_42121__$1);{
var G__42123 = cljs.core.chunk_rest.call(null,seq__42107_42121__$1);
var G__42124 = c__4406__auto___42122;
var G__42125 = cljs.core.count.call(null,c__4406__auto___42122);
var G__42126 = (0);
seq__42107_42111 = G__42123;
chunk__42108_42112 = G__42124;
count__42109_42113 = G__42125;
i__42110_42114 = G__42126;
continue;
}
} else
{var node_42127 = cljs.core.first.call(null,seq__42107_42121__$1);goog.dom.classes.remove(node_42127,class$);
{
var G__42128 = cljs.core.next.call(null,seq__42107_42121__$1);
var G__42129 = null;
var G__42130 = (0);
var G__42131 = (0);
seq__42107_42111 = G__42128;
chunk__42108_42112 = G__42129;
count__42109_42113 = G__42130;
i__42110_42114 = G__42131;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__42136_42140 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__42137_42141 = null;var count__42138_42142 = (0);var i__42139_42143 = (0);while(true){
if((i__42139_42143 < count__42138_42142))
{var node_42144 = cljs.core._nth.call(null,chunk__42137_42141,i__42139_42143);goog.dom.classes.toggle(node_42144,class$);
{
var G__42145 = seq__42136_42140;
var G__42146 = chunk__42137_42141;
var G__42147 = count__42138_42142;
var G__42148 = (i__42139_42143 + (1));
seq__42136_42140 = G__42145;
chunk__42137_42141 = G__42146;
count__42138_42142 = G__42147;
i__42139_42143 = G__42148;
continue;
}
} else
{var temp__4126__auto___42149 = cljs.core.seq.call(null,seq__42136_42140);if(temp__4126__auto___42149)
{var seq__42136_42150__$1 = temp__4126__auto___42149;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42136_42150__$1))
{var c__4406__auto___42151 = cljs.core.chunk_first.call(null,seq__42136_42150__$1);{
var G__42152 = cljs.core.chunk_rest.call(null,seq__42136_42150__$1);
var G__42153 = c__4406__auto___42151;
var G__42154 = cljs.core.count.call(null,c__4406__auto___42151);
var G__42155 = (0);
seq__42136_42140 = G__42152;
chunk__42137_42141 = G__42153;
count__42138_42142 = G__42154;
i__42139_42143 = G__42155;
continue;
}
} else
{var node_42156 = cljs.core.first.call(null,seq__42136_42150__$1);goog.dom.classes.toggle(node_42156,class$);
{
var G__42157 = cljs.core.next.call(null,seq__42136_42150__$1);
var G__42158 = null;
var G__42159 = (0);
var G__42160 = (0);
seq__42136_42140 = G__42157;
chunk__42137_42141 = G__42158;
count__42138_42142 = G__42159;
i__42139_42143 = G__42160;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_42169__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__42165_42170 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__42166_42171 = null;var count__42167_42172 = (0);var i__42168_42173 = (0);while(true){
if((i__42168_42173 < count__42167_42172))
{var node_42174 = cljs.core._nth.call(null,chunk__42166_42171,i__42168_42173);goog.dom.classes.set(node_42174,classes_42169__$1);
{
var G__42175 = seq__42165_42170;
var G__42176 = chunk__42166_42171;
var G__42177 = count__42167_42172;
var G__42178 = (i__42168_42173 + (1));
seq__42165_42170 = G__42175;
chunk__42166_42171 = G__42176;
count__42167_42172 = G__42177;
i__42168_42173 = G__42178;
continue;
}
} else
{var temp__4126__auto___42179 = cljs.core.seq.call(null,seq__42165_42170);if(temp__4126__auto___42179)
{var seq__42165_42180__$1 = temp__4126__auto___42179;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42165_42180__$1))
{var c__4406__auto___42181 = cljs.core.chunk_first.call(null,seq__42165_42180__$1);{
var G__42182 = cljs.core.chunk_rest.call(null,seq__42165_42180__$1);
var G__42183 = c__4406__auto___42181;
var G__42184 = cljs.core.count.call(null,c__4406__auto___42181);
var G__42185 = (0);
seq__42165_42170 = G__42182;
chunk__42166_42171 = G__42183;
count__42167_42172 = G__42184;
i__42168_42173 = G__42185;
continue;
}
} else
{var node_42186 = cljs.core.first.call(null,seq__42165_42180__$1);goog.dom.classes.set(node_42186,classes_42169__$1);
{
var G__42187 = cljs.core.next.call(null,seq__42165_42180__$1);
var G__42188 = null;
var G__42189 = (0);
var G__42190 = (0);
seq__42165_42170 = G__42187;
chunk__42166_42171 = G__42188;
count__42167_42172 = G__42189;
i__42168_42173 = G__42190;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__42195_42199 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__42196_42200 = null;var count__42197_42201 = (0);var i__42198_42202 = (0);while(true){
if((i__42198_42202 < count__42197_42201))
{var node_42203 = cljs.core._nth.call(null,chunk__42196_42200,i__42198_42202);goog.dom.setTextContent(node_42203,value);
{
var G__42204 = seq__42195_42199;
var G__42205 = chunk__42196_42200;
var G__42206 = count__42197_42201;
var G__42207 = (i__42198_42202 + (1));
seq__42195_42199 = G__42204;
chunk__42196_42200 = G__42205;
count__42197_42201 = G__42206;
i__42198_42202 = G__42207;
continue;
}
} else
{var temp__4126__auto___42208 = cljs.core.seq.call(null,seq__42195_42199);if(temp__4126__auto___42208)
{var seq__42195_42209__$1 = temp__4126__auto___42208;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42195_42209__$1))
{var c__4406__auto___42210 = cljs.core.chunk_first.call(null,seq__42195_42209__$1);{
var G__42211 = cljs.core.chunk_rest.call(null,seq__42195_42209__$1);
var G__42212 = c__4406__auto___42210;
var G__42213 = cljs.core.count.call(null,c__4406__auto___42210);
var G__42214 = (0);
seq__42195_42199 = G__42211;
chunk__42196_42200 = G__42212;
count__42197_42201 = G__42213;
i__42198_42202 = G__42214;
continue;
}
} else
{var node_42215 = cljs.core.first.call(null,seq__42195_42209__$1);goog.dom.setTextContent(node_42215,value);
{
var G__42216 = cljs.core.next.call(null,seq__42195_42209__$1);
var G__42217 = null;
var G__42218 = (0);
var G__42219 = (0);
seq__42195_42199 = G__42216;
chunk__42196_42200 = G__42217;
count__42197_42201 = G__42218;
i__42198_42202 = G__42219;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__42224_42228 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__42225_42229 = null;var count__42226_42230 = (0);var i__42227_42231 = (0);while(true){
if((i__42227_42231 < count__42226_42230))
{var node_42232 = cljs.core._nth.call(null,chunk__42225_42229,i__42227_42231);goog.dom.forms.setValue(node_42232,value);
{
var G__42233 = seq__42224_42228;
var G__42234 = chunk__42225_42229;
var G__42235 = count__42226_42230;
var G__42236 = (i__42227_42231 + (1));
seq__42224_42228 = G__42233;
chunk__42225_42229 = G__42234;
count__42226_42230 = G__42235;
i__42227_42231 = G__42236;
continue;
}
} else
{var temp__4126__auto___42237 = cljs.core.seq.call(null,seq__42224_42228);if(temp__4126__auto___42237)
{var seq__42224_42238__$1 = temp__4126__auto___42237;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42224_42238__$1))
{var c__4406__auto___42239 = cljs.core.chunk_first.call(null,seq__42224_42238__$1);{
var G__42240 = cljs.core.chunk_rest.call(null,seq__42224_42238__$1);
var G__42241 = c__4406__auto___42239;
var G__42242 = cljs.core.count.call(null,c__4406__auto___42239);
var G__42243 = (0);
seq__42224_42228 = G__42240;
chunk__42225_42229 = G__42241;
count__42226_42230 = G__42242;
i__42227_42231 = G__42243;
continue;
}
} else
{var node_42244 = cljs.core.first.call(null,seq__42224_42238__$1);goog.dom.forms.setValue(node_42244,value);
{
var G__42245 = cljs.core.next.call(null,seq__42224_42238__$1);
var G__42246 = null;
var G__42247 = (0);
var G__42248 = (0);
seq__42224_42228 = G__42245;
chunk__42225_42229 = G__42246;
count__42226_42230 = G__42247;
i__42227_42231 = G__42248;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3625__auto__ = allows_inner_html_QMARK_;if(and__3625__auto__)
{var and__3625__auto____$1 = (function (){var or__3637__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3625__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
}
})()))
{var value_42259 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__42255_42260 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__42256_42261 = null;var count__42257_42262 = (0);var i__42258_42263 = (0);while(true){
if((i__42258_42263 < count__42257_42262))
{var node_42264 = cljs.core._nth.call(null,chunk__42256_42261,i__42258_42263);node_42264.innerHTML = value_42259;
{
var G__42265 = seq__42255_42260;
var G__42266 = chunk__42256_42261;
var G__42267 = count__42257_42262;
var G__42268 = (i__42258_42263 + (1));
seq__42255_42260 = G__42265;
chunk__42256_42261 = G__42266;
count__42257_42262 = G__42267;
i__42258_42263 = G__42268;
continue;
}
} else
{var temp__4126__auto___42269 = cljs.core.seq.call(null,seq__42255_42260);if(temp__4126__auto___42269)
{var seq__42255_42270__$1 = temp__4126__auto___42269;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42255_42270__$1))
{var c__4406__auto___42271 = cljs.core.chunk_first.call(null,seq__42255_42270__$1);{
var G__42272 = cljs.core.chunk_rest.call(null,seq__42255_42270__$1);
var G__42273 = c__4406__auto___42271;
var G__42274 = cljs.core.count.call(null,c__4406__auto___42271);
var G__42275 = (0);
seq__42255_42260 = G__42272;
chunk__42256_42261 = G__42273;
count__42257_42262 = G__42274;
i__42258_42263 = G__42275;
continue;
}
} else
{var node_42276 = cljs.core.first.call(null,seq__42255_42270__$1);node_42276.innerHTML = value_42259;
{
var G__42277 = cljs.core.next.call(null,seq__42255_42270__$1);
var G__42278 = null;
var G__42279 = (0);
var G__42280 = (0);
seq__42255_42260 = G__42277;
chunk__42256_42261 = G__42278;
count__42257_42262 = G__42279;
i__42258_42263 = G__42280;
continue;
}
}
} else
{}
}
break;
}
}catch (e42254){if((e42254 instanceof Error))
{var e_42281 = e42254;domina.replace_children_BANG_.call(null,content,value_42259);
} else
{throw e42254;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3625__auto__ = bubble;if(cljs.core.truth_(and__3625__auto__))
{return (value == null);
} else
{return and__3625__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3637__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__42288_42292 = cljs.core.seq.call(null,children);var chunk__42289_42293 = null;var count__42290_42294 = (0);var i__42291_42295 = (0);while(true){
if((i__42291_42295 < count__42290_42294))
{var child_42296 = cljs.core._nth.call(null,chunk__42289_42293,i__42291_42295);frag.appendChild(child_42296);
{
var G__42297 = seq__42288_42292;
var G__42298 = chunk__42289_42293;
var G__42299 = count__42290_42294;
var G__42300 = (i__42291_42295 + (1));
seq__42288_42292 = G__42297;
chunk__42289_42293 = G__42298;
count__42290_42294 = G__42299;
i__42291_42295 = G__42300;
continue;
}
} else
{var temp__4126__auto___42301 = cljs.core.seq.call(null,seq__42288_42292);if(temp__4126__auto___42301)
{var seq__42288_42302__$1 = temp__4126__auto___42301;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42288_42302__$1))
{var c__4406__auto___42303 = cljs.core.chunk_first.call(null,seq__42288_42302__$1);{
var G__42304 = cljs.core.chunk_rest.call(null,seq__42288_42302__$1);
var G__42305 = c__4406__auto___42303;
var G__42306 = cljs.core.count.call(null,c__4406__auto___42303);
var G__42307 = (0);
seq__42288_42292 = G__42304;
chunk__42289_42293 = G__42305;
count__42290_42294 = G__42306;
i__42291_42295 = G__42307;
continue;
}
} else
{var child_42308 = cljs.core.first.call(null,seq__42288_42302__$1);frag.appendChild(child_42308);
{
var G__42309 = cljs.core.next.call(null,seq__42288_42302__$1);
var G__42310 = null;
var G__42311 = (0);
var G__42312 = (0);
seq__42288_42292 = G__42309;
chunk__42289_42293 = G__42310;
count__42290_42294 = G__42311;
i__42291_42295 = G__42312;
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
return (function (p1__42282_SHARP_,p2__42283_SHARP_){return f.call(null,p1__42282_SHARP_,p2__42283_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3625__auto__ = obj;if(cljs.core.truth_(and__3625__auto__))
{var and__3625__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3625__auto____$1)
{return obj.length;
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
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
{if((function (){var G__42314 = list_thing;if(G__42314)
{var bit__4300__auto__ = (G__42314.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__42314.cljs$core$ISeqable$))
{return true;
} else
{if((!G__42314.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__42314);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__42314);
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
{if((function (){var G__42315 = content;if(G__42315)
{var bit__4300__auto__ = (G__42315.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__42315.cljs$core$ISeqable$))
{return true;
} else
{if((!G__42315.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__42315);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__42315);
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
{if((function (){var G__42316 = content;if(G__42316)
{var bit__4300__auto__ = (G__42316.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__42316.cljs$core$ISeqable$))
{return true;
} else
{if((!G__42316.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__42316);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__42316);
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
